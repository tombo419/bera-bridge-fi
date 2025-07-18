import cron from 'node-cron';
import { logger } from '../utils/logger.js';

export class ContentScheduler {
  constructor(generator, publisher) {
    this.generator = generator;
    this.publisher = publisher;
    this.postsPerDay = parseInt(process.env.POSTS_PER_DAY) || 3;
    this.tasks = [];
  }

  start() {
    logger.info(`Starting scheduler: ${this.postsPerDay} posts per day`);

    // Calculate intervals
    const hoursInterval = Math.floor(24 / this.postsPerDay);
    
    // Schedule posts throughout the day
    for (let i = 0; i < this.postsPerDay; i++) {
      const hour = i * hoursInterval + 9; // Start at 9 AM
      const cronTime = `0 ${hour} * * *`; // Run at specific hour each day
      
      const task = cron.schedule(cronTime, async () => {
        logger.info(`Running scheduled content generation at ${new Date().toISOString()}`);
        try {
          await this.publisher.publishNewContent();
        } catch (error) {
          logger.error('Scheduled publish failed:', error);
        }
      });

      this.tasks.push(task);
      logger.info(`Scheduled post ${i + 1} at ${hour}:00 daily`);
    }

    // Also run immediately on start if configured
    if (process.env.RUN_ON_START === 'true') {
      this.runImmediately();
    }
  }

  async runImmediately() {
    logger.info('Running immediate content generation...');
    try {
      await this.publisher.publishNewContent();
    } catch (error) {
      logger.error('Immediate publish failed:', error);
    }
  }

  stop() {
    logger.info('Stopping scheduler...');
    this.tasks.forEach(task => task.stop());
    this.tasks = [];
  }

  // For testing - run once
  async runOnce() {
    logger.info('Running single scheduled task...');
    try {
      const results = await this.publisher.publishMultipleContents(this.postsPerDay);
      logger.info(`Published ${results.length} articles`);
      return results;
    } catch (error) {
      logger.error('Scheduled run failed:', error);
      throw error;
    }
  }
}