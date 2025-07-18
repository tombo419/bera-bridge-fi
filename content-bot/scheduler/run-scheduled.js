import { ContentGenerator } from '../generators/content-generator.js';
import { ContentPublisher } from '../publishers/publish-content.js';
import { ContentScheduler } from './content-scheduler.js';
import { logger } from '../utils/logger.js';
import dotenv from 'dotenv';

dotenv.config();

// This file can be run directly for one-time scheduled execution
async function runScheduledContent() {
  try {
    const generator = new ContentGenerator();
    const publisher = new ContentPublisher();
    const scheduler = new ContentScheduler(generator, publisher);

    // Run once and exit
    await scheduler.runOnce();
    
    logger.info('Scheduled run completed successfully');
    process.exit(0);
  } catch (error) {
    logger.error('Scheduled run failed:', error);
    process.exit(1);
  }
}

runScheduledContent();