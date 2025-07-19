from datetime import datetime, timedelta
from typing import List, Dict, Optional, Any
from dataclasses import dataclass
from loguru import logger
import sqlite3
import json

from integrations.gsc_client import GSCClient
from models.schemas import GSCMetrics, OptimizationLog, MonitoringResult
from config.settings import settings


@dataclass
class PerformanceMetrics:
    url: str
    date: datetime
    clicks: int
    impressions: int
    ctr: float
    position: float
    optimization_id: Optional[str] = None


class PerformanceMonitor:
    def __init__(self, db_path: str = None):
        self.db_path = db_path or settings.database_url.replace('sqlite:///', '')
        self.gsc_client = GSCClient()
        self._init_database()
    
    def _init_database(self):
        """Initialize database tables for monitoring"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            
            # Performance metrics table
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS performance_metrics (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    url TEXT NOT NULL,
                    date TEXT NOT NULL,
                    clicks INTEGER DEFAULT 0,
                    impressions INTEGER DEFAULT 0,
                    ctr REAL DEFAULT 0.0,
                    position REAL DEFAULT 0.0,
                    optimization_id TEXT,
                    created_at TEXT DEFAULT CURRENT_TIMESTAMP
                )
            ''')
            
            # Optimization logs table
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS optimization_logs (
                    id TEXT PRIMARY KEY,
                    url TEXT NOT NULL,
                    issue_id TEXT,
                    optimization_data TEXT,
                    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                    completed_at TEXT,
                    success BOOLEAN DEFAULT FALSE
                )
            ''')
            
            # Monitoring results table
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS monitoring_results (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    url TEXT NOT NULL,
                    optimization_id TEXT,
                    metrics_before TEXT,
                    metrics_after TEXT,
                    improvement_data TEXT,
                    success BOOLEAN DEFAULT FALSE,
                    checked_at TEXT DEFAULT CURRENT_TIMESTAMP,
                    notes TEXT
                )
            ''')
            
            conn.commit()
    
    def store_baseline_metrics(self, url: str, optimization_id: str, days_back: int = 30):
        """Store baseline metrics before optimization"""
        end_date = datetime.now()
        start_date = end_date - timedelta(days=days_back)
        
        # Get metrics from GSC
        metrics = self.gsc_client.get_page_metrics(start_date, end_date, url)
        
        if not metrics:
            logger.warning(f"No baseline metrics found for {url}")
            return
        
        # Store in database
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            
            for metric in metrics:
                cursor.execute('''
                    INSERT INTO performance_metrics 
                    (url, date, clicks, impressions, ctr, position, optimization_id)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                ''', (
                    metric.url,
                    metric.date.isoformat(),
                    metric.clicks,
                    metric.impressions,
                    metric.ctr,
                    metric.position,
                    optimization_id
                ))
            
            conn.commit()
        
        logger.info(f"Stored baseline metrics for {url} with optimization_id {optimization_id}")
    
    def store_optimization_log(self, log: OptimizationLog):
        """Store optimization log in database"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            
            cursor.execute('''
                INSERT OR REPLACE INTO optimization_logs 
                (id, url, issue_id, optimization_data, created_at, completed_at, success)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            ''', (
                log.id or f"opt_{datetime.now().timestamp()}",
                log.url,
                log.issue_id,
                json.dumps(log.dict(), default=str),
                log.created_at.isoformat(),
                log.completed_at.isoformat() if log.completed_at else None,
                log.success
            ))
            
            conn.commit()
    
    def check_optimization_performance(self, optimization_id: str, days_after: int = 7) -> Optional[MonitoringResult]:
        """Check performance after optimization"""
        
        # Get optimization log
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute('''
                SELECT url, optimization_data, completed_at FROM optimization_logs 
                WHERE id = ?
            ''', (optimization_id,))
            
            result = cursor.fetchone()
            if not result:
                logger.error(f"Optimization log not found for {optimization_id}")
                return None
            
            url, optimization_data, completed_at = result
        
        if not completed_at:
            logger.warning(f"Optimization {optimization_id} not completed yet")
            return None
        
        completed_date = datetime.fromisoformat(completed_at)
        check_date = completed_date + timedelta(days=days_after)
        
        if datetime.now() < check_date:
            logger.info(f"Too early to check performance for {optimization_id}, waiting until {check_date}")
            return None
        
        # Get before metrics (30 days before optimization)
        before_start = completed_date - timedelta(days=30)
        before_end = completed_date
        
        # Get after metrics (7 days after optimization)
        after_start = completed_date
        after_end = completed_date + timedelta(days=days_after)
        
        before_metrics = self.gsc_client.get_page_metrics(before_start, before_end, url)
        after_metrics = self.gsc_client.get_page_metrics(after_start, after_end, url)
        
        if not before_metrics or not after_metrics:
            logger.warning(f"Insufficient metrics data for comparison: {url}")
            return None
        
        # Aggregate metrics
        before_avg = self._aggregate_metrics(before_metrics)
        after_avg = self._aggregate_metrics(after_metrics)
        
        # Calculate improvement
        improvement = self._calculate_improvement(before_avg, after_avg)
        
        # Determine success
        success = self._is_optimization_successful(improvement)
        
        monitoring_result = MonitoringResult(
            url=url,
            optimization_id=optimization_id,
            metrics_before=before_avg,
            metrics_after=after_avg,
            improvement_percentage=improvement,
            success=success,
            notes=self._generate_monitoring_notes(improvement, success)
        )
        
        # Store monitoring result
        self._store_monitoring_result(monitoring_result)
        
        return monitoring_result
    
    def _aggregate_metrics(self, metrics: List[GSCMetrics]) -> GSCMetrics:
        """Aggregate metrics list into single metric"""
        if not metrics:
            return GSCMetrics(url="", date=datetime.now())
        
        total_clicks = sum(m.clicks for m in metrics)
        total_impressions = sum(m.impressions for m in metrics)
        avg_ctr = total_clicks / total_impressions if total_impressions > 0 else 0.0
        avg_position = sum(m.position for m in metrics) / len(metrics)
        
        return GSCMetrics(
            url=metrics[0].url,
            clicks=total_clicks,
            impressions=total_impressions,
            ctr=avg_ctr,
            position=avg_position,
            date=datetime.now()
        )
    
    def _calculate_improvement(self, before: GSCMetrics, after: GSCMetrics) -> Dict[str, float]:
        """Calculate improvement percentages"""
        improvement = {}
        
        # Clicks improvement
        if before.clicks > 0:
            improvement['clicks'] = ((after.clicks - before.clicks) / before.clicks) * 100
        else:
            improvement['clicks'] = 100.0 if after.clicks > 0 else 0.0
        
        # Impressions improvement
        if before.impressions > 0:
            improvement['impressions'] = ((after.impressions - before.impressions) / before.impressions) * 100
        else:
            improvement['impressions'] = 100.0 if after.impressions > 0 else 0.0
        
        # CTR improvement
        if before.ctr > 0:
            improvement['ctr'] = ((after.ctr - before.ctr) / before.ctr) * 100
        else:
            improvement['ctr'] = 100.0 if after.ctr > 0 else 0.0
        
        # Position improvement (lower is better)
        if before.position > 0:
            improvement['position'] = ((before.position - after.position) / before.position) * 100
        else:
            improvement['position'] = 0.0
        
        return improvement
    
    def _is_optimization_successful(self, improvement: Dict[str, float]) -> bool:
        """Determine if optimization was successful"""
        # Success criteria: at least 10% improvement in clicks OR CTR
        clicks_improved = improvement.get('clicks', 0) >= 10
        ctr_improved = improvement.get('ctr', 0) >= 10
        position_improved = improvement.get('position', 0) >= 5
        
        return clicks_improved or ctr_improved or position_improved
    
    def _generate_monitoring_notes(self, improvement: Dict[str, float], success: bool) -> str:
        """Generate monitoring notes"""
        notes = []
        
        if success:
            notes.append("✅ Optimization successful!")
        else:
            notes.append("❌ Optimization did not meet success criteria")
        
        # Add specific improvements
        for metric, value in improvement.items():
            if value > 0:
                notes.append(f"📈 {metric.capitalize()}: +{value:.1f}%")
            elif value < 0:
                notes.append(f"📉 {metric.capitalize()}: {value:.1f}%")
            else:
                notes.append(f"➡️ {metric.capitalize()}: No change")
        
        return " | ".join(notes)
    
    def _store_monitoring_result(self, result: MonitoringResult):
        """Store monitoring result in database"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            
            cursor.execute('''
                INSERT INTO monitoring_results 
                (url, optimization_id, metrics_before, metrics_after, improvement_data, success, checked_at, notes)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                result.url,
                result.optimization_id,
                json.dumps(result.metrics_before.dict(), default=str),
                json.dumps(result.metrics_after.dict(), default=str),
                json.dumps(result.improvement_percentage),
                result.success,
                result.checked_at.isoformat(),
                result.notes
            ))
            
            conn.commit()
    
    def get_pending_optimizations(self) -> List[str]:
        """Get optimizations that need monitoring"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            
            # Get completed optimizations that haven't been monitored yet
            cursor.execute('''
                SELECT DISTINCT ol.id 
                FROM optimization_logs ol
                LEFT JOIN monitoring_results mr ON ol.id = mr.optimization_id
                WHERE ol.success = TRUE 
                AND ol.completed_at IS NOT NULL
                AND mr.optimization_id IS NULL
                AND datetime(ol.completed_at) <= datetime('now', '-7 days')
            ''')
            
            return [row[0] for row in cursor.fetchall()]
    
    def get_performance_summary(self, days_back: int = 30) -> Dict[str, Any]:
        """Get performance summary for the last N days"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            
            # Get monitoring results from last N days
            cursor.execute('''
                SELECT * FROM monitoring_results 
                WHERE datetime(checked_at) >= datetime('now', '-{} days')
                ORDER BY checked_at DESC
            '''.format(days_back))
            
            results = cursor.fetchall()
            
            if not results:
                return {"message": "No monitoring results found"}
            
            # Calculate summary statistics
            total_optimizations = len(results)
            successful_optimizations = sum(1 for r in results if r[5])  # success column
            success_rate = (successful_optimizations / total_optimizations) * 100
            
            # Get improvement averages
            improvements = []
            for result in results:
                improvement_data = json.loads(result[4])  # improvement_data column
                improvements.append(improvement_data)
            
            avg_improvements = {}
            for metric in ['clicks', 'impressions', 'ctr', 'position']:
                values = [imp.get(metric, 0) for imp in improvements]
                avg_improvements[metric] = sum(values) / len(values) if values else 0
            
            return {
                "total_optimizations": total_optimizations,
                "successful_optimizations": successful_optimizations,
                "success_rate": success_rate,
                "average_improvements": avg_improvements,
                "recent_results": results[:10]  # Last 10 results
            }
    
    def run_monitoring_cycle(self):
        """Run a complete monitoring cycle"""
        logger.info("Starting monitoring cycle")
        
        # Get pending optimizations
        pending_ids = self.get_pending_optimizations()
        
        if not pending_ids:
            logger.info("No pending optimizations to monitor")
            return []
        
        results = []
        for optimization_id in pending_ids:
            try:
                result = self.check_optimization_performance(optimization_id)
                if result:
                    results.append(result)
                    logger.info(f"Monitored optimization {optimization_id}: {'SUCCESS' if result.success else 'FAILED'}")
                
            except Exception as e:
                logger.error(f"Error monitoring optimization {optimization_id}: {e}")
        
        # Generate summary
        summary = self.get_performance_summary()
        logger.info(f"Monitoring cycle completed: {len(results)} optimizations checked")
        logger.info(f"Overall success rate: {summary.get('success_rate', 0):.1f}%")
        
        return results