import dotenv from 'dotenv';
import { ContentPublisher } from './publish-content.js';
import { logger } from '../utils/logger.js';

dotenv.config();

async function runPublisher() {
  try {
    const publisher = new ContentPublisher();
    const published = await publisher.publishNewContent();
    
    logger.info('Content published successfully!');
    logger.info(`Title: ${published.title}`);
    logger.info(`URL: ${process.env.SITE_URL}/${published.slug}`);
    logger.info(`ID: ${published.id}`);
    
  } catch (error) {
    logger.error('Failed to publish content:', error);
    process.exit(1);
  }
}

runPublisher();