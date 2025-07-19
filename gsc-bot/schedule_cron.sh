#!/bin/bash
# Cron job script for GSC Bot v1.1
# Add this to your crontab to run daily at 2 AM:
# 0 2 * * * /path/to/gsc-bot/schedule_cron.sh

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Change to the project directory
cd "$SCRIPT_DIR"

# Set environment variables
export GSC_BOT_VERSION="1.1"
export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"

# Log file
LOG_FILE="logs/cron.log"

# Create logs directory if it doesn't exist
mkdir -p logs

# Function to log with timestamp
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

log "🚀 Starting scheduled GSC Bot v1.1 run via cron"

# Activate virtual environment if it exists
if [ -f "venv/bin/activate" ]; then
    source venv/bin/activate
    log "📦 Activated virtual environment"
fi

# Run the bot
python3 run_bot.py >> "$LOG_FILE" 2>&1

# Check exit code
if [ $? -eq 0 ]; then
    log "✅ GSC Bot v1.1 completed successfully"
else
    log "❌ GSC Bot v1.1 failed with exit code $?"
fi

log "🏁 Scheduled run completed"