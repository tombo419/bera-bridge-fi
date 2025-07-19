# GSC Bot v1.1 Daily Scheduler

This directory contains scheduling options to run GSC Bot v1.1 automatically every day.

## Scheduling Options

### Option 1: Python Scheduler (Recommended for Development)

Use `schedule_daily.py` for a simple Python-based scheduler:

```bash
# Run the scheduler (keeps running)
python3 schedule_daily.py
```

Features:
- Runs daily at 2:00 AM
- Includes logging to `logs/scheduler.log`
- Runs an immediate test when started
- 1-hour timeout protection
- Automatic error handling and retries

### Option 2: Cron Job (Recommended for Production)

Use `schedule_cron.sh` with system cron for production:

1. **Make the script executable** (already done):
   ```bash
   chmod +x schedule_cron.sh
   ```

2. **Add to your crontab**:
   ```bash
   # Edit crontab
   crontab -e
   
   # Add this line to run daily at 2 AM
   0 2 * * * /path/to/gsc-bot/schedule_cron.sh
   ```

3. **Update the path** in the crontab entry to match your actual directory:
   ```bash
   0 2 * * * "/Users/tomparling/Library/Mobile Documents/com~apple~CloudDocs/Cursor/bera-bridge.fi/gsc-bot/schedule_cron.sh"
   ```

## Logs

Both schedulers create log files:
- Python scheduler: `logs/scheduler.log`
- Cron scheduler: `logs/cron.log`

## Manual Run

To run the bot manually with v1.1:
```bash
python3 run_bot.py
```

## Schedule Customization

### Change Time
- **Python scheduler**: Edit the time in `schedule_daily.py` line 51
- **Cron job**: Modify the cron expression (0 2 * * * = 2 AM daily)

### Common Cron Schedules
```bash
# Every day at 2 AM
0 2 * * *

# Every day at 6 AM
0 6 * * *

# Twice daily (6 AM and 6 PM)
0 6,18 * * *

# Every Monday at 9 AM
0 9 * * 1

# Every hour
0 * * * *
```

## Monitoring

Check if the scheduler is working:
```bash
# View recent logs
tail -f logs/scheduler.log  # Python scheduler
tail -f logs/cron.log      # Cron scheduler

# Check cron jobs
crontab -l

# Check if process is running
ps aux | grep schedule_daily
```

## Troubleshooting

1. **Permission issues**: Ensure scripts are executable
2. **Path issues**: Use absolute paths in cron
3. **Environment**: Cron has limited environment variables
4. **Logs**: Check log files for detailed error messages

## Production Recommendations

1. Use cron for reliability
2. Set up log rotation to prevent large log files
3. Monitor logs regularly
4. Consider adding email notifications for failures
5. Test the schedule on a staging environment first