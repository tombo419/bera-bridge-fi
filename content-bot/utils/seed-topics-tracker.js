import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class SeedTopicsTracker {
  constructor() {
    this.statsFile = join(__dirname, '../config/seed-topics-stats.json');
    this.loadStats();
  }

  loadStats() {
    try {
      const data = readFileSync(this.statsFile, 'utf8');
      this.stats = JSON.parse(data);
    } catch (error) {
      this.stats = {
        total_generated: 0,
        seed_topics_used: 0,
        custom_topics_used: 0,
        category_usage: {},
        content_type_usage: {},
        last_updated: new Date().toISOString()
      };
    }
  }

  saveStats() {
    try {
      writeFileSync(this.statsFile, JSON.stringify(this.stats, null, 2));
    } catch (error) {
      console.error('Failed to save seed topics stats:', error);
    }
  }

  recordContentGeneration(category, contentType, usedSeedTopic = false) {
    this.stats.total_generated++;
    
    if (usedSeedTopic) {
      this.stats.seed_topics_used++;
    } else {
      this.stats.custom_topics_used++;
    }

    // Track category usage
    if (!this.stats.category_usage[category]) {
      this.stats.category_usage[category] = 0;
    }
    this.stats.category_usage[category]++;

    // Track content type usage
    if (!this.stats.content_type_usage[contentType]) {
      this.stats.content_type_usage[contentType] = 0;
    }
    this.stats.content_type_usage[contentType]++;

    this.stats.last_updated = new Date().toISOString();
    this.saveStats();
  }

  getStats() {
    return {
      ...this.stats,
      seed_topic_percentage: this.stats.total_generated > 0 
        ? ((this.stats.seed_topics_used / this.stats.total_generated) * 100).toFixed(1)
        : 0,
      most_used_category: Object.keys(this.stats.category_usage).reduce((a, b) => 
        this.stats.category_usage[a] > this.stats.category_usage[b] ? a : b, 
        Object.keys(this.stats.category_usage)[0] || 'none'
      ),
      most_used_content_type: Object.keys(this.stats.content_type_usage).reduce((a, b) => 
        this.stats.content_type_usage[a] > this.stats.content_type_usage[b] ? a : b, 
        Object.keys(this.stats.content_type_usage)[0] || 'none'
      )
    };
  }

  displayStats() {
    const stats = this.getStats();
    console.log('\n=== Seed Topics Usage Statistics ===');
    console.log(`Total content generated: ${stats.total_generated}`);
    console.log(`Seed topics used: ${stats.seed_topics_used} (${stats.seed_topic_percentage}%)`);
    console.log(`Custom topics used: ${stats.custom_topics_used}`);
    console.log(`Most used category: ${stats.most_used_category}`);
    console.log(`Most used content type: ${stats.most_used_content_type}`);
    console.log(`Last updated: ${stats.last_updated}`);
    console.log('\n=== Category Usage ===');
    Object.entries(stats.category_usage).forEach(([category, count]) => {
      console.log(`${category}: ${count}`);
    });
    console.log('\n=== Content Type Usage ===');
    Object.entries(stats.content_type_usage).forEach(([type, count]) => {
      console.log(`${type}: ${count}`);
    });
  }
}