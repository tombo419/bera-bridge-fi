# GSC SEO Bot - Autonomous SEO Agent

🎯 **Goal**: Grow organic traffic by continuously identifying underperforming pages and executing intelligent, automated SEO improvements.

## Overview

This autonomous AI agent system monitors Google Search Console data, detects SEO issues, and automatically executes optimizations to improve organic traffic. The system uses LangChain agents with OpenAI GPT-4 to make intelligent SEO decisions.

## Features

### 🔍 **Issue Detection**
- Low CTR pages (high impressions, low clicks)
- Poor ranking pages (positions 11-20)
- Non-indexed or crawling issues
- Zero traffic pages
- Content gaps and keyword cannibalization

### 🛠️ **Automated Optimizations**
- Title and meta description rewriting
- Content expansion and enrichment
- FAQ section generation
- Schema markup creation
- Internal linking optimization

### 📊 **Monitoring & Feedback**
- Performance tracking before/after optimizations
- Success rate monitoring
- Automated reporting
- Continuous improvement cycles

## Project Structure

```
gsc-bot/
├── agents/                 # LangChain agents
│   ├── seo_agent.py       # Main SEO agent
│   └── __init__.py
├── config/                 # Configuration
│   ├── settings.py        # Environment settings
│   └── __init__.py
├── integrations/          # External API integrations
│   ├── gsc_client.py      # Google Search Console API
│   └── __init__.py
├── models/                 # Data models
│   ├── schemas.py         # Pydantic schemas
│   └── __init__.py
├── monitoring/            # Performance monitoring
│   ├── performance_monitor.py
│   └── __init__.py
├── tools/                 # LangChain tools
│   ├── seo_detection_tools.py
│   ├── seo_action_tools.py
│   └── __init__.py
├── utils/                 # Utility functions
│   ├── content_analyzer.py
│   └── __init__.py
├── data/                  # Data storage
│   ├── chroma_db/        # Vector store
│   └── gsc_bot.db        # SQLite database
├── logs/                  # Log files
├── main.py               # Main orchestrator
├── run_bot.py            # Simple runner script
├── requirements.txt      # Python dependencies
├── .env.example         # Environment variables template
└── README.md           # This file
```

## Setup Instructions

### 1. Prerequisites

- Python 3.8+
- Google Search Console API access
- OpenAI API key
- Git (for cloning)

### 2. Google Search Console API Setup

1. **Create a Google Cloud Project**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable the Google Search Console API

2. **Create Service Account**:
   - Go to IAM & Admin → Service Accounts
   - Create a new service account
   - Download the JSON key file
   - Save it securely (e.g., `gsc-credentials.json`)

3. **Add Service Account to GSC**:
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Select your property (bera-bridge.fi)
   - Settings → Users and permissions
   - Add the service account email as a user with "Full" permissions

### 3. Environment Setup

1. **Clone and Navigate**:
   ```bash
   cd /path/to/bera-bridge.fi/gsc-bot
   ```

2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Create Environment File**:
   ```bash
   cp .env.example .env
   ```

4. **Configure Environment Variables**:
   Edit `.env` file:
   ```bash
   # OpenAI API Configuration
   OPENAI_API_KEY=your_openai_api_key_here
   
   # Google Search Console API Configuration
   GOOGLE_APPLICATION_CREDENTIALS=/path/to/your/gsc-credentials.json
   GSC_SITE_URL=https://bera-bridge.fi/
   
   # Database Configuration
   DATABASE_URL=sqlite:///./data/gsc_bot.db
   
   # Vector Store Configuration
   CHROMA_PERSIST_DIRECTORY=./data/chroma_db
   
   # Logging Configuration
   LOG_LEVEL=INFO
   LOG_FILE=./logs/gsc_bot.log
   
   # Agent Configuration
   MAX_CONCURRENT_TASKS=5
   CHECK_INTERVAL_HOURS=24
   OPTIMIZATION_BATCH_SIZE=10
   
   # SEO Thresholds
   LOW_CTR_THRESHOLD=0.01
   HIGH_IMPRESSIONS_THRESHOLD=1000
   LOW_POSITION_THRESHOLD=20
   REINDEX_WAIT_DAYS=7
   ```

5. **Create Required Directories**:
   ```bash
   mkdir -p data logs
   ```

### 4. Test Installation

1. **Test GSC Connection**:
   ```bash
   python -c "from integrations.gsc_client import GSCClient; client = GSCClient(); print('GSC connection successful')"
   ```

2. **Test OpenAI Connection**:
   ```bash
   python -c "from langchain_openai import ChatOpenAI; from config.settings import settings; llm = ChatOpenAI(api_key=settings.openai_api_key); print('OpenAI connection successful')"
   ```

## Usage

### Running the Bot

#### 1. Scheduled Mode (Recommended)
Run continuously with automatic scheduling:
```bash
python run_bot.py --mode schedule
```

This will:
- Run full optimization cycle every 24 hours (configurable)
- Run monitoring cycle every 6 hours
- Generate weekly performance reports

#### 2. Single Execution Modes

**Full optimization cycle**:
```bash
python run_bot.py --mode full
```

**Monitoring only**:
```bash
python run_bot.py --mode monitor
```

**Issue detection only**:
```bash
python run_bot.py --mode detect
```

**Check status**:
```bash
python run_bot.py --mode status
```

#### 3. Custom Parameters

```bash
python run_bot.py --mode full --days-back 30 --max-issues 15
```

### Monitoring Progress

1. **Check Logs**:
   ```bash
   tail -f logs/gsc_bot.log
   ```

2. **View Database**:
   ```bash
   sqlite3 data/gsc_bot.db "SELECT * FROM optimization_logs ORDER BY created_at DESC LIMIT 10;"
   ```

3. **Performance Summary**:
   ```bash
   python -c "from monitoring.performance_monitor import PerformanceMonitor; pm = PerformanceMonitor(); print(pm.get_performance_summary())"
   ```

## Configuration

### SEO Thresholds

Adjust these in your `.env` file:

- `LOW_CTR_THRESHOLD`: CTR threshold for "low CTR" issues (default: 0.01 = 1%)
- `HIGH_IMPRESSIONS_THRESHOLD`: Minimum impressions to consider a page high-volume (default: 1000)
- `LOW_POSITION_THRESHOLD`: Position threshold for "poor ranking" (default: 20)
- `REINDEX_WAIT_DAYS`: Days to wait before checking if reindexing worked (default: 7)

### Agent Behavior

- `MAX_CONCURRENT_TASKS`: Maximum parallel optimizations (default: 5)
- `CHECK_INTERVAL_HOURS`: Hours between full optimization cycles (default: 24)
- `OPTIMIZATION_BATCH_SIZE`: Maximum issues to process per cycle (default: 10)

## Workflow Overview

### 1. Detection Phase
- Fetch GSC data for last 30 days
- Identify issues using detection tools:
  - Low CTR pages (high impressions, low clicks)
  - Poor ranking pages (positions 11-20)
  - Zero traffic pages
  - Non-indexed pages
  - Content gaps

### 2. Optimization Phase
- Create optimization plans for detected issues
- Execute automated optimizations:
  - Rewrite titles and meta descriptions
  - Expand content
  - Generate FAQ sections
  - Add schema markup
  - Optimize internal linking

### 3. Monitoring Phase
- Track performance before/after optimizations
- Measure success metrics:
  - Click improvement
  - Impression growth
  - CTR enhancement
  - Position improvement
- Generate reports and recommendations

### 4. Feedback Loop
- Successful optimizations continue monitoring
- Failed optimizations get re-evaluated
- Learn from patterns for future improvements

## Example Output

```
2024-01-15 10:30:00 | INFO | Starting SEO optimization cycle
2024-01-15 10:30:15 | INFO | Detected 25 SEO issues
2024-01-15 10:30:30 | INFO | Created 10 optimization plans
2024-01-15 10:31:00 | INFO | Executing optimization for /blog/post-1
2024-01-15 10:31:15 | INFO | ✅ Title optimized: "Old Title" → "New Optimized Title"
2024-01-15 10:31:30 | INFO | ✅ Meta description optimized
2024-01-15 10:31:45 | INFO | ✅ FAQ section generated
2024-01-15 10:32:00 | INFO | Optimization cycle completed: 8/10 successful
2024-01-15 10:32:15 | INFO | Monitoring 15 previous optimizations
2024-01-15 10:32:30 | INFO | 📈 Success rate: 75% (12/16 optimizations improved)
```

## Troubleshooting

### Common Issues

1. **GSC API Authentication Error**:
   - Verify service account JSON file path
   - Check if service account has GSC permissions
   - Ensure GSC_SITE_URL matches exactly

2. **OpenAI API Error**:
   - Verify API key is valid
   - Check rate limits and billing
   - Ensure sufficient credits

3. **Database Errors**:
   - Ensure data/ directory exists
   - Check file permissions
   - Verify SQLite is working

4. **No Issues Detected**:
   - Check if GSC has sufficient data
   - Verify date ranges
   - Adjust thresholds in settings

### Debug Mode

Enable debug logging:
```bash
LOG_LEVEL=DEBUG python run_bot.py --mode detect
```

### Reset Database

```bash
rm data/gsc_bot.db
python run_bot.py --mode status  # This will recreate the database
```

## Extending the System

### Adding New Detection Tools

1. Create a new tool in `tools/seo_detection_tools.py`
2. Add it to the SEO agent in `agents/seo_agent.py`
3. Update the detection logic

### Adding New Optimization Actions

1. Create a new action tool in `tools/seo_action_tools.py`
2. Add the action to the `OptimizationAction` enum
3. Update the agent execution logic

### Custom Monitoring

1. Extend `PerformanceMonitor` class
2. Add new metrics and success criteria
3. Update the monitoring cycle

## Performance Expectations

- **Issue Detection**: 5-10 seconds for 1000+ pages
- **Optimization Execution**: 30-60 seconds per page
- **Monitoring**: 2-5 seconds per optimization check
- **Full Cycle**: 10-30 minutes depending on batch size

## Support

For issues or questions:
1. Check logs in `logs/gsc_bot.log`
2. Review configuration in `.env`
3. Test individual components
4. Check GSC API quotas and limits

## License

This project is for internal use with the bera-bridge.fi website.