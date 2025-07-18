import dotenv from 'dotenv';
import { ContentGenerator } from './generators/content-generator.js';
import { logger } from './utils/logger.js';

dotenv.config();

async function showStats() {
  try {
    const generator = new ContentGenerator();
    
    logger.info('Content Bot Statistics');
    generator.displayStats();
    
  } catch (error) {
    logger.error('Failed to display stats:', error);
    process.exit(1);
  }
}

showStats();