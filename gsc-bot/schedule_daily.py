#!/usr/bin/env python3
"""
Daily Scheduler for GSC Bot v1.1
Runs the bot automatically every day
"""

import schedule
import time
import subprocess
import logging
from datetime import datetime
from pathlib import Path
import os
import sys

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('logs/scheduler.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Project root
PROJECT_ROOT = Path(__file__).parent

def run_gsc_bot():
    """Run the GSC Bot v1.1"""
    try:
        logger.info("🚀 Starting scheduled GSC Bot v1.1 run...")
        
        # Set environment to use v1.1
        env = os.environ.copy()
        env['GSC_BOT_VERSION'] = '1.1'
        
        # Run the bot
        result = subprocess.run(
            [sys.executable, str(PROJECT_ROOT / "run_bot.py")],
            cwd=PROJECT_ROOT,
            env=env,
            capture_output=True,
            text=True,
            timeout=3600  # 1 hour timeout
        )
        
        if result.returncode == 0:
            logger.info("✅ GSC Bot v1.1 completed successfully")
            logger.info(f"Output: {result.stdout}")
        else:
            logger.error(f"❌ GSC Bot v1.1 failed with return code {result.returncode}")
            logger.error(f"Error: {result.stderr}")
            
    except subprocess.TimeoutExpired:
        logger.error("⏰ GSC Bot v1.1 timed out after 1 hour")
    except Exception as e:
        logger.error(f"💥 Error running GSC Bot v1.1: {e}")

def main():
    """Main scheduler function"""
    logger.info("📅 GSC Bot v1.1 Daily Scheduler started")
    
    # Schedule daily run at 2 AM
    schedule.every().day.at("02:00").do(run_gsc_bot)
    
    # Alternative: Schedule every 24 hours from start time
    # schedule.every(24).hours.do(run_gsc_bot)
    
    logger.info("⏰ Scheduled GSC Bot v1.1 to run daily at 2:00 AM")
    logger.info("🔄 Scheduler is running... Press Ctrl+C to stop")
    
    # Run once immediately for testing
    logger.info("🧪 Running initial test...")
    run_gsc_bot()
    
    # Keep the scheduler running
    while True:
        try:
            schedule.run_pending()
            time.sleep(60)  # Check every minute
        except KeyboardInterrupt:
            logger.info("🛑 Scheduler stopped by user")
            break
        except Exception as e:
            logger.error(f"💥 Scheduler error: {e}")
            time.sleep(300)  # Wait 5 minutes before retrying

if __name__ == "__main__":
    main()