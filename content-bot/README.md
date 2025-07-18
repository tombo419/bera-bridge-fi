# Bera Bridge Content Bot

An automated content creation bot that generates and publishes articles to your Bera Bridge website.

## Features

- **AI-Powered Content Generation**: Uses Claude to create high-quality Finnish articles
- **Seed Topics Integration**: Prioritizes high-value, SEO-optimized topics
- **Multiple Content Types**: Supports comparisons, guides, news, and listicles (weighted distribution)
- **Automated Scheduling**: Can run on schedule via GitHub Actions or cron
- **Quality Validation**: Ensures content meets minimum standards
- **Finnish Categories**: Works with 13 specialized Finnish technology categories
- **Usage Statistics**: Tracks seed topic usage and content generation patterns

## Setup

### 1. Install Dependencies

```bash
cd content-bot
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Required environment variables:
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `ANTHROPIC_API_KEY`: Your Anthropic API key (for Claude)

### 3. Run Database Migration

**IMPORTANT**: Before using the bot, run the migration in your Supabase SQL editor:
https://supabase.com/dashboard/project/rmmnwpieqldnozmkgewm/sql

Execute the contents of `apply-enhanced-schema.sql` to add the required fields.

## Usage

### Test Connection
```bash
npm test
```

### Generate Content (without publishing)
```bash
npm run generate
```

### Generate and Publish Content
```bash
npm run publish
```

### Run Scheduled (continuous)
```bash
npm run schedule
```

### One-time Scheduled Run
```bash
npm run schedule
```

### View Statistics
```bash
npm run stats
```

## GitHub Actions Automation

The bot includes GitHub Actions workflow that runs every 8 hours automatically. To enable:

1. Go to your GitHub repository settings
2. Add these secrets:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `ANTHROPIC_API_KEY`

3. Optionally add these variables:
   - `CONTENT_CATEGORIES` (default: Finnish categories)
   - `AUTO_PUBLISH` (default: "true")

The workflow will automatically generate and publish content every 8 hours at:
- 00:00 UTC (12:00 AM)
- 08:00 UTC (8:00 AM)
- 16:00 UTC (4:00 PM)

This ensures consistent content creation with 1 article published every 8 hours, totaling 3 articles per day. You can also trigger it manually from the Actions tab.

## Content Structure

The bot generates comprehensive articles with:
- SEO-optimized title and meta description
- Engaging introduction with hook, context, and relevance
- Multiple detailed sections with key points
- Comparison tables (for comparison articles)
- Use cases and pros/cons
- Final recommendations
- FAQs section

## Seed Topics

The bot uses high-value seed topics that are prioritized for SEO and engagement:

- **70% seed topics**: Uses predefined, research-backed topics
- **30% custom topics**: Generates unique, creative content
- **Priority keywords**: "2025", "paras", "parhaat", "suomeksi", etc.
- **Weighted content types**: Guides (40%), Comparisons (30%), News (20%), Listicles (10%)

Seed topics are stored in `config/seed-topics.json` and cover all Finnish categories.

## Customization

### Adding Categories
Edit `CONTENT_CATEGORIES` in your `.env` file:
```
CONTENT_CATEGORIES=Teknologiauutiset,Pelaaminen,Tekoäly
```

### Adjusting Frequency
Edit `.github/workflows/content-bot.yml` to change the cron schedule.

### Content Quality
The bot validates:
- Required fields are present
- Minimum content length (500 characters)
- Valid slug format
- At least one content section

## Monitoring

Check logs for:
- Generated content titles
- Publishing status
- Any errors or failures

GitHub Actions provides full logs for scheduled runs.

## Troubleshooting

1. **Database errors**: Ensure you've run the migration
2. **API errors**: Check your API keys are valid
3. **Rate limiting**: Add delays between generations
4. **Content quality**: Adjust prompts in `content-generator.js`

## Security Notes

- Never commit `.env` file
- Use GitHub Secrets for production
- Regularly rotate API keys
- Monitor usage to avoid excessive costs