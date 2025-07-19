#!/usr/bin/env python3
"""
GSC SEO Bot - Autonomous SEO Agent
Main orchestrator for the SEO automation system
"""

import asyncio
import schedule
import time
from datetime import datetime, timedelta
from typing import List, Dict, Any, Optional
from loguru import logger
import sys
import os

# Add the project root to the path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from config.settings import settings
from monitoring.performance_monitor import PerformanceMonitor
from integrations.gsc_client import GSCClient
from models.schemas import OptimizationLog

try:
    from version import get_version, get_features
except ImportError:
    def get_version(): return "1.0.0"
    def get_features(v=None): return []

# Import appropriate agent based on version
USE_V11 = os.getenv('GSC_BOT_VERSION', '1.1') == '1.1'

if USE_V11:
    try:
        from agents.seo_agent_v11 import SEOAgentV11 as SEOAgent
        logger.info(f"Loading GSC Bot v{get_version()} with enhanced features")
    except ImportError:
        logger.warning("v1.1 agent not available, falling back to v1.0")
        from agents.seo_agent import SEOAgent
        USE_V11 = False
else:
    from agents.seo_agent import SEOAgent
    logger.info("Loading GSC Bot v1.0 (legacy mode)")


class SEOOrchestrator:
    def __init__(self):
        self.seo_agent = SEOAgent()
        self.performance_monitor = PerformanceMonitor()
        self.gsc_client = GSCClient()
        self.version = get_version()
        self._setup_logging()
        self._running = False
        
        # Log version and features
        logger.info(f"\n{'='*60}")
        logger.info(f"GSC SEO Bot v{self.version} Initialized")
        logger.info(f"{'='*60}")
        if USE_V11:
            logger.info("New v1.1 Features:")
            for feature in get_features('1.1.0'):
                logger.info(f"  ✓ {feature}")
        logger.info(f"{'='*60}\n")
        
    def _setup_logging(self):
        """Setup logging configuration"""
        logger.remove()  # Remove default handler
        
        # Add console handler
        logger.add(
            sys.stdout,
            level=settings.log_level,
            format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> - <level>{message}</level>"
        )
        
        # Add file handler
        logger.add(
            settings.log_file,
            level=settings.log_level,
            format="{time:YYYY-MM-DD HH:mm:ss} | {level: <8} | {name}:{function}:{line} - {message}",
            rotation="10 MB",
            retention="30 days",
            compression="zip"
        )
        
        logger.info("SEO Bot logging initialized")
    
    def run_optimization_cycle(self) -> Dict[str, Any]:
        """Run a complete optimization cycle"""
        logger.info("🚀 Starting SEO optimization cycle")
        
        try:
            # Step 1: Run full optimization cycle
            optimization_logs = self.seo_agent.run_full_optimization_cycle(
                days_back=30,
                max_issues=settings.optimization_batch_size
            )
            
            # Step 2: Store optimization logs for monitoring
            for log in optimization_logs:
                self.performance_monitor.store_optimization_log(log)
                
                # Store baseline metrics for successful optimizations
                if log.success:
                    try:
                        self.performance_monitor.store_baseline_metrics(
                            log.url, 
                            log.id or f"opt_{datetime.now().timestamp()}"
                        )
                    except Exception as e:
                        logger.error(f"Error storing baseline metrics for {log.url}: {e}")
            
            # Step 3: Run monitoring cycle for previous optimizations
            monitoring_results = self.performance_monitor.run_monitoring_cycle()
            
            # Step 4: Generate summary report
            summary = self._generate_cycle_summary(optimization_logs, monitoring_results)
            
            logger.info(f"✅ SEO optimization cycle completed successfully")
            logger.info(f"📊 Summary: {summary['optimizations_executed']} optimizations, {summary['monitoring_checked']} monitored")
            
            return summary
            
        except Exception as e:
            logger.error(f"❌ Error in optimization cycle: {e}")
            return {"error": str(e), "success": False}
    
    def run_monitoring_only(self) -> Dict[str, Any]:
        """Run monitoring cycle only"""
        logger.info("🔍 Starting monitoring cycle")
        
        try:
            monitoring_results = self.performance_monitor.run_monitoring_cycle()
            summary = self.performance_monitor.get_performance_summary(days_back=30)
            
            logger.info(f"✅ Monitoring cycle completed: {len(monitoring_results)} results")
            
            return {
                "monitoring_results": len(monitoring_results),
                "performance_summary": summary,
                "success": True
            }
            
        except Exception as e:
            logger.error(f"❌ Error in monitoring cycle: {e}")
            return {"error": str(e), "success": False}
    
    def run_detection_only(self) -> Dict[str, Any]:
        """Run issue detection only (for testing/analysis)"""
        logger.info("🔍 Starting issue detection")
        
        try:
            issues = self.seo_agent.detect_all_issues(days_back=30)
            
            # Group issues by type
            issue_summary = {}
            for issue in issues:
                issue_type = issue.issue_type
                if issue_type not in issue_summary:
                    issue_summary[issue_type] = []
                issue_summary[issue_type].append({
                    "url": issue.url,
                    "severity": issue.severity,
                    "description": issue.description,
                    "impressions": issue.metrics.impressions,
                    "clicks": issue.metrics.clicks,
                    "ctr": issue.metrics.ctr,
                    "position": issue.metrics.position
                })
            
            logger.info(f"✅ Issue detection completed: {len(issues)} issues found")
            
            return {
                "total_issues": len(issues),
                "issues_by_type": issue_summary,
                "success": True
            }
            
        except Exception as e:
            logger.error(f"❌ Error in issue detection: {e}")
            return {"error": str(e), "success": False}
    
    def _generate_cycle_summary(self, optimization_logs: List[OptimizationLog], monitoring_results: List) -> Dict[str, Any]:
        """Generate summary report for the cycle"""
        successful_optimizations = sum(1 for log in optimization_logs if log.success)
        successful_monitoring = sum(1 for result in monitoring_results if result.success)
        
        return {
            "timestamp": datetime.now().isoformat(),
            "optimizations_executed": len(optimization_logs),
            "optimizations_successful": successful_optimizations,
            "optimization_success_rate": (successful_optimizations / len(optimization_logs) * 100) if optimization_logs else 0,
            "monitoring_checked": len(monitoring_results),
            "monitoring_successful": successful_monitoring,
            "monitoring_success_rate": (successful_monitoring / len(monitoring_results) * 100) if monitoring_results else 0,
            "success": True
        }
    
    def start_scheduler(self):
        """Start the scheduled execution"""
        logger.info("🕐 Starting SEO bot scheduler")
        
        # Schedule full optimization cycle
        schedule.every(settings.check_interval_hours).hours.do(
            self._safe_run_optimization_cycle
        )
        
        # Schedule monitoring-only cycle (more frequent)
        schedule.every(6).hours.do(
            self._safe_run_monitoring_only
        )
        
        # Schedule weekly performance report
        schedule.every().sunday.at("09:00").do(
            self._generate_weekly_report
        )
        
        self._running = True
        logger.info(f"📅 Scheduler started - full cycle every {settings.check_interval_hours} hours")
        
        # Run initial cycle
        logger.info("🎯 Running initial optimization cycle")
        self._safe_run_optimization_cycle()
        
        # Main scheduler loop
        while self._running:
            try:
                schedule.run_pending()
                time.sleep(60)  # Check every minute
            except KeyboardInterrupt:
                logger.info("⏹️ Scheduler stopped by user")
                break
            except Exception as e:
                logger.error(f"Error in scheduler loop: {e}")
                time.sleep(300)  # Wait 5 minutes before retrying
    
    def stop_scheduler(self):
        """Stop the scheduler"""
        self._running = False
        logger.info("🛑 Scheduler stopped")
    
    def _safe_run_optimization_cycle(self):
        """Safe wrapper for optimization cycle"""
        try:
            self.run_optimization_cycle()
        except Exception as e:
            logger.error(f"Error in scheduled optimization cycle: {e}")
    
    def _safe_run_monitoring_only(self):
        """Safe wrapper for monitoring cycle"""
        try:
            self.run_monitoring_only()
        except Exception as e:
            logger.error(f"Error in scheduled monitoring cycle: {e}")
    
    def _generate_weekly_report(self):
        """Generate weekly performance report"""
        logger.info("📊 Generating weekly performance report")
        
        try:
            summary = self.performance_monitor.get_performance_summary(days_back=7)
            
            # Log the report
            logger.info("📈 WEEKLY PERFORMANCE REPORT")
            logger.info(f"Total optimizations: {summary.get('total_optimizations', 0)}")
            logger.info(f"Success rate: {summary.get('success_rate', 0):.1f}%")
            logger.info(f"Average improvements: {summary.get('average_improvements', {})}")
            
            # You could extend this to send email reports, etc.
            
        except Exception as e:
            logger.error(f"Error generating weekly report: {e}")
    
    def get_status(self) -> Dict[str, Any]:
        """Get current status of the SEO bot"""
        try:
            # Get recent performance summary
            performance_summary = self.performance_monitor.get_performance_summary(days_back=7)
            
            # Get pending optimizations
            pending_optimizations = self.performance_monitor.get_pending_optimizations()
            
            return {
                "status": "running" if self._running else "stopped",
                "last_check": datetime.now().isoformat(),
                "performance_summary": performance_summary,
                "pending_optimizations": len(pending_optimizations),
                "next_scheduled_run": "Based on schedule configuration"
            }
            
        except Exception as e:
            logger.error(f"Error getting status: {e}")
            return {"status": "error", "error": str(e)}


def main():
    """Main entry point"""
    import argparse
    
    # Display startup banner
    print(f"\n{'='*60}")
    print(f"    GSC SEO Bot v{get_version()}")
    print(f"    Enhanced Detection & Optimization Engine")
    print(f"{'='*60}\n")
    
    parser = argparse.ArgumentParser(description="GSC SEO Bot - Autonomous SEO Agent")
    parser.add_argument("--mode", choices=["full", "monitor", "detect", "schedule", "status"], 
                       default="schedule", help="Execution mode")
    parser.add_argument("--days-back", type=int, default=30, 
                       help="Number of days to look back for data")
    parser.add_argument("--max-issues", type=int, default=10,
                       help="Maximum number of issues to process")
    parser.add_argument("--version", choices=["1.0", "1.1"], default="1.1",
                       help="Bot version to use (default: 1.1)")
    
    args = parser.parse_args()
    
    # Set version environment variable
    os.environ['GSC_BOT_VERSION'] = args.version
    
    # Initialize orchestrator
    orchestrator = SEOOrchestrator()
    
    try:
        if args.mode == "full":
            # Run single optimization cycle
            result = orchestrator.run_optimization_cycle()
            print(f"Optimization cycle result: {result}")
            
        elif args.mode == "monitor":
            # Run monitoring only
            result = orchestrator.run_monitoring_only()
            print(f"Monitoring result: {result}")
            
        elif args.mode == "detect":
            # Run detection only
            result = orchestrator.run_detection_only()
            print(f"Detection result: {result}")
            
        elif args.mode == "status":
            # Get status
            status = orchestrator.get_status()
            print(f"Status: {status}")
            
        elif args.mode == "schedule":
            # Start scheduler (default)
            orchestrator.start_scheduler()
            
    except KeyboardInterrupt:
        logger.info("👋 SEO Bot stopped by user")
    except Exception as e:
        logger.error(f"💥 Fatal error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()