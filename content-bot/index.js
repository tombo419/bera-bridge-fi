import dotenv from 'dotenv';
import { ContentGenerator } from './generators/content-generator.js';
import { ContentPublisher } from './publishers/publish-content.js';
import { ContentScheduler } from './scheduler/content-scheduler.js';
import { logger } from './utils/logger.js';

dotenv.config();

async function main() {
  logger.info('Starting Bera Bridge Content Bot...');

  try {
    // Initialize components
    const generator = new ContentGenerator();
    const publisher = new ContentPublisher();
    const scheduler = new ContentScheduler(generator, publisher);

    // Run based on command line arguments
    const command = process.argv[2];

    switch (command) {
      case 'generate':
        // Generate content without publishing
        const content = await generator.generateContent();
        logger.info('Generated content:', content.title);
        break;

      case 'publish':
        // Generate and publish immediately
        const published = await publisher.publishNewContent();
        logger.info('Published content:', published.title);
        break;

      case 'schedule':
        // Start scheduled content generation
        scheduler.start();
        logger.info('Scheduler started. Press Ctrl+C to stop.');
        break;

      case 'test':
        // Test connections
        await testConnections();
        break;

      case 'stats':
        // Show statistics
        const generator = new ContentGenerator();
        generator.displayStats();
        break;

      default:
        logger.info(`
Available commands:
  npm run generate - Generate content without publishing
  npm run publish  - Generate and publish content immediately
  npm run schedule - Start automated scheduled publishing
  npm test        - Test connections to services
  npm run stats   - Show content generation statistics
        `);
    }
  } catch (error) {
    logger.error('Error:', error);
    process.exit(1);
  }
}

async function testConnections() {
  const { testSupabaseConnection } = await import('./utils/supabase-client.js');
  const { testAIConnection } = await import('./utils/ai-client.js');

  logger.info('Testing connections...');
  
  const supabaseOk = await testSupabaseConnection();
  const aiOk = await testAIConnection();

  if (supabaseOk && aiOk) {
    logger.info('All connections successful!');
  } else {
    logger.error('Some connections failed. Check your configuration.');
  }
}

main().catch(console.error);