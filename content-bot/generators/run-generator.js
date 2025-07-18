import dotenv from 'dotenv';
import { ContentGenerator } from './content-generator.js';
import { logger } from '../utils/logger.js';

dotenv.config();

async function runGenerator() {
  try {
    const generator = new ContentGenerator();
    const content = await generator.generateContent();
    
    logger.info('Generated content successfully!');
    logger.info(`Title: ${content.title}`);
    logger.info(`Category: ${content.category}`);
    logger.info(`Type: ${content.topic_type}`);
    logger.info(`Sections: ${content.sections.length}`);
    logger.info(`Status: ${content.status}`);
    
    console.log('\n--- Generated Content Preview ---');
    console.log(JSON.stringify(content, null, 2));
    
  } catch (error) {
    logger.error('Failed to generate content:', error);
    process.exit(1);
  }
}

runGenerator();