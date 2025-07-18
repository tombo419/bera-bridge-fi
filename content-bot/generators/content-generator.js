import { generateStructuredContent } from '../utils/ai-client.js';
import { getRecentPages } from '../utils/supabase-client.js';
import { logger } from '../utils/logger.js';
import slugify from 'slugify';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { SeedTopicsTracker } from '../utils/seed-topics-tracker.js';

export class ContentGenerator {
  constructor() {
    this.categories = (process.env.CONTENT_CATEGORIES || 'Teknologiauutiset,Pelaaminen,Sosiaalinen media,Tietojenkäsittelytiede,Tekoäly,Teknologia-arvostelut,Mobiililaitteet,Kyberturvallisuus,Laitteisto & tee-se-itse -tekniikka,Ohjelmistot ja työkalut,Teknologia opetuksessa,Suoratoisto ja viihdeteknologia,Teknologiatapahtumat ja trendit').split(',');
    this.contentTypes = ['comparison', 'guide', 'news', 'listicle'];
    
    // Load seed topics
    try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);
      const seedTopicsPath = join(__dirname, '../config/seed-topics.json');
      const seedTopicsData = readFileSync(seedTopicsPath, 'utf8');
      this.seedTopics = JSON.parse(seedTopicsData);
    } catch (error) {
      logger.warn('Could not load seed topics, using fallback topics:', error.message);
      this.seedTopics = { seed_topics: {}, priority_keywords: [] };
    }
    
    // Initialize tracker
    this.tracker = new SeedTopicsTracker();
  }

  async generateContent() {
    try {
      // Select random category and content type
      const category = this.categories[Math.floor(Math.random() * this.categories.length)];
      const contentType = this.selectContentType();

      // Generate topic based on category and recent content
      const topic = await this.generateTopic(category, contentType);
      
      logger.info(`Generating ${contentType} content for ${category}: ${topic}`);

      // Generate structured content using AI
      const content = await generateStructuredContent(topic, category, contentType);

      // Create slug from title
      const slug = slugify(content.title, { lower: true, strict: true });

      // Format for our API
      const pageData = {
        title: content.title,
        slug: slug,
        meta_description: content.meta_description,
        category: category,
        topic_type: contentType,
        intro: content.intro,
        quick_comparison: content.quick_comparison || [],
        sections: content.sections,
        use_cases: content.use_cases || [],
        pros_cons: content.pros_cons || { pros: [], cons: [] },
        final_recommendation: content.final_recommendation || {},
        faqs: content.faqs || [],
        status: process.env.AUTO_PUBLISH === 'true' ? 'published' : 'draft',
        author: process.env.DEFAULT_AUTHOR || 'AI Content Bot'
      };

      return pageData;
    } catch (error) {
      logger.error('Content generation failed:', error);
      throw error;
    }
  }

  selectContentType() {
    // Use weighted selection based on seed topics configuration
    const weights = this.seedTopics.content_type_weights || {
      comparison: 0.3,
      guide: 0.4,
      news: 0.2,
      listicle: 0.1
    };

    const random = Math.random();
    let cumulative = 0;
    
    for (const [type, weight] of Object.entries(weights)) {
      cumulative += weight;
      if (random <= cumulative) {
        return type;
      }
    }
    
    return 'guide'; // fallback
  }

  async generateTopic(category, contentType) {
    // Get recent pages to avoid duplicates
    const recentPages = await getRecentPages(20);
    const recentTitles = recentPages.map(p => p.title).join(', ');

    // Check if we should use a seed topic (70% chance)
    const useSeedTopic = Math.random() < 0.7;
    
    if (useSeedTopic && this.seedTopics.seed_topics[category] && this.seedTopics.seed_topics[category].length > 0) {
      const topic = await this.generateFromSeedTopic(category, contentType, recentTitles);
      this.tracker.recordContentGeneration(category, contentType, true);
      return topic;
    } else {
      const topic = await this.generateCustomTopic(category, contentType, recentTitles);
      this.tracker.recordContentGeneration(category, contentType, false);
      return topic;
    }
  }

  async generateFromSeedTopic(category, contentType, recentTitles) {
    const seedTopics = this.seedTopics.seed_topics[category];
    const randomSeedTopic = seedTopics[Math.floor(Math.random() * seedTopics.length)];
    const priorityKeywords = this.seedTopics.priority_keywords || [];
    
    const { generateWithAI } = await import('../utils/ai-client.js');
    const prompt = `Generate a specific article topic IN FINNISH inspired by "${randomSeedTopic}" for the ${category} category as a ${contentType} article.

Priority keywords to consider including: ${priorityKeywords.join(', ')}

Recent articles to avoid duplicating: ${recentTitles}

Make the title engaging, SEO-optimized, and specific. Use Finnish language only. 
Example format: "Parhaat [category items] 2025: Kattava vertailu suomalaisille"

Return ONLY the Finnish title, nothing else.`;

    const topic = await generateWithAI(prompt, 'claude-3-haiku-20240307');
    return topic.trim();
  }

  async generateCustomTopic(category, contentType, recentTitles) {
    const topicPrompts = {
      'Teknologiauutiset': {
        comparison: 'Teknologiatuotteiden ja -palveluiden vertailu',
        guide: 'Teknologian käyttöoppaat ja vinkit',
        news: 'Viimeisimmät teknologia-alan uutiset ja innovaatiot',
        listicle: 'Teknologiatrendit ja mielenkiintoisimmat laitteet'
      },
      'Pelaaminen': {
        comparison: 'Pelilaitteistojen ja pelien vertailut',
        guide: 'Pelaamiseen liittyvät oppaat ja optimointi',
        news: 'Peliteollisuuden uusimmat uutiset',
        listicle: 'Parhaat pelit ja pelialan trendit'
      },
      'Sosiaalinen media': {
        comparison: 'Sosiaalisen median alustojen vertailu',
        guide: 'Sosiaalisen median strategiat ja käyttövinkit',
        news: 'Sosiaalisen median uutiset ja päivitykset',
        listicle: 'Sosiaalisen median trendit ja vinkit'
      },
      'Tietojenkäsittelytiede': {
        comparison: 'Ohjelmointikielten ja työkalujen vertailu',
        guide: 'Ohjelmoinnin oppaat ja parhaat käytännöt',
        news: 'Tietojenkäsittelytieteen uutiset ja tutkimus',
        listicle: 'Tärkeimmät ohjelmointikielet ja teknologiat'
      },
      'Tekoäly': {
        comparison: 'Tekoälytyökalujen ja -palveluiden vertailu',
        guide: 'Tekoälyn käyttöönotto ja hyödyntäminen',
        news: 'Tekoälyn viimeisimmät läpimurrot ja uutiset',
        listicle: 'Tekoälyn sovellukset eri toimialoilla'
      },
      'Teknologia-arvostelut': {
        comparison: 'Laitteiden ja ohjelmistojen yksityiskohtaiset vertailut',
        guide: 'Ostopäätösten tueksi tehdyt arvostelut',
        news: 'Uusimmat tuotearvostelut ja -julkaisut',
        listicle: 'Parhaat teknologiatuotteet kategoriassa'
      },
      'Mobiililaitteet': {
        comparison: 'Älypuhelinten ja tablettien vertailu',
        guide: 'Mobiililaitteiden käyttövinkit ja optimointi',
        news: 'Mobiilialan uutiset ja tuotejulkaisut',
        listicle: 'Parhaat mobiilisovellukset ja -laitteet'
      },
      'Kyberturvallisuus': {
        comparison: 'Tietoturvatyökalujen ja -palveluiden vertailu',
        guide: 'Kyberturvallisuuden parhaat käytännöt',
        news: 'Uusimmat tietoturvauhkat ja -ratkaisut',
        listicle: 'Tärkeimmät tietoturvavinkit käyttäjille'
      },
      'Laitteisto & tee-se-itse -tekniikka': {
        comparison: 'PC-komponenttien ja laitteistojen vertailu',
        guide: 'Tietokoneen rakennusoppaat ja DIY-projektit',
        news: 'Laitteistouutiset ja tuotejulkaisut',
        listicle: 'Parhaat DIY-teknologiaprojektit'
      },
      'Ohjelmistot ja työkalut': {
        comparison: 'Ohjelmistojen ja työkalujen vertailu',
        guide: 'Ohjelmistojen käyttöoppaat ja vinkit',
        news: 'Ohjelmistoalan uutiset ja päivitykset',
        listicle: 'Välttämättömät työkalut eri tarpeisiin'
      },
      'Teknologia opetuksessa': {
        comparison: 'Opetustyökalujen ja -alustojen vertailu',
        guide: 'Teknologian hyödyntäminen opetuksessa',
        news: 'Oppimisteknologian uutiset ja trendit',
        listicle: 'Parhaat oppimissovellukset ja -työkalut'
      },
      'Suoratoisto ja viihdeteknologia': {
        comparison: 'Suoratoistopalveluiden ja -laitteiden vertailu',
        guide: 'Suoratoiston optimointi ja käyttövinkit',
        news: 'Viihdealan teknologiauutiset',
        listicle: 'Parhaat suoratoistopalvelut ja -sisällöt'
      },
      'Teknologiatapahtumat ja trendit': {
        comparison: 'Teknologiatapahtumien ja messujen vertailu',
        guide: 'Teknologiatrendien analyysit ja ennusteet',
        news: 'Teknologia-alan tapahtumat ja ilmiöt',
        listicle: 'Vuoden tärkeimmät teknologiatrendit'
      }
    };

    const basePrompt = topicPrompts[category]?.[contentType] || 'Trending topics';
    
    // Use AI to generate a unique topic
    const { generateWithAI } = await import('../utils/ai-client.js');
    const prompt = `Generate a specific, unique article topic IN FINNISH about "${basePrompt}" for the ${category} category.
    
Recent articles to avoid duplicating: ${recentTitles}

Return ONLY the topic title in Finnish, nothing else. Make it specific and engaging. The title must be in Finnish language.`;

    const topic = await generateWithAI(prompt, 'claude-3-haiku-20240307');
    return topic.trim();
  }

  async generateMultipleContents(count = 3) {
    const contents = [];
    
    for (let i = 0; i < count; i++) {
      try {
        const content = await this.generateContent();
        contents.push(content);
        
        // Add delay to avoid rate limiting
        if (i < count - 1) {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      } catch (error) {
        logger.error(`Failed to generate content ${i + 1}:`, error);
      }
    }

    return contents;
  }

  displayStats() {
    this.tracker.displayStats();
  }
}