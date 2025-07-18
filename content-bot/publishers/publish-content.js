import { createPage } from '../utils/supabase-client.js';
import { ContentGenerator } from '../generators/content-generator.js';
import { logger } from '../utils/logger.js';

export class ContentPublisher {
  constructor() {
    this.generator = new ContentGenerator();
  }

  async publishContent(pageData) {
    try {
      // Validate content before publishing
      this.validateContent(pageData);

      // Get category ID from category name
      const { getCategories } = await import('../utils/supabase-client.js');
      const categories = await getCategories();
      const category = categories.find(c => c.name === pageData.category);
      
      if (!category) {
        throw new Error(`Category not found: ${pageData.category}`);
      }

      // Format for basic pages table (without enhanced fields)
      const basicPageData = {
        title: pageData.title,
        slug: pageData.slug,
        description: pageData.meta_description || null,
        content: this.generateHTMLContent(pageData),
        category_id: category.id,
        status: pageData.status,
        author: pageData.author,
        metadata: {
          topic_type: pageData.topic_type,
          intro: pageData.intro,
          sections: pageData.sections,
          use_cases: pageData.use_cases,
          pros_cons: pageData.pros_cons,
          final_recommendation: pageData.final_recommendation,
          faqs: pageData.faqs,
          quick_comparison: pageData.quick_comparison
        },
        published_at: pageData.status === 'published' ? new Date().toISOString() : null
      };

      // Publish to Supabase
      const published = await createPage(basicPageData);
      
      logger.info(`Published: ${published.title} (${published.id})`);
      return published;
    } catch (error) {
      logger.error('Publishing failed:', error);
      throw error;
    }
  }

  generateHTMLContent(pageData) {
    let html = '';
    
    // Add intro
    if (pageData.intro) {
      html += `<div class="intro bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p class="text-lg font-semibold text-gray-800 mb-3">${pageData.intro.hook}</p>
        <p class="text-gray-700 mb-2">${pageData.intro.context}</p>
        <p class="text-gray-600 italic">${pageData.intro.why_now}</p>
      </div>\n\n`;
    }

    // Add quick comparison if it's a comparison type
    if (pageData.quick_comparison && pageData.quick_comparison.length > 0) {
      html += '<h2>Nopea vertailu</h2>\n';
      html += '<div class="table-wrapper">\n';
      html += '<table>\n<thead>\n<tr><th>Tuote</th><th>Kohokohta</th><th>Hinta</th><th>Arvosana</th><th>Toiminto</th></tr>\n</thead>\n<tbody>\n';
      pageData.quick_comparison.forEach((item, index) => {
        const ratingStars = '★'.repeat(Math.floor(item.rating)) + '☆'.repeat(5 - Math.floor(item.rating));
        html += `<tr>
          <td class="font-medium">${item.item}</td>
          <td>${item.highlight}</td>
          <td class="font-semibold">${item.price}</td>
          <td><span class="text-yellow-500">${ratingStars}</span> ${item.rating}/5</td>
          <td><a href="${item.cta_url}" class="text-blue-600 hover:text-blue-800 font-medium">${item.cta_text}</a></td>
        </tr>\n`;
      });
      html += '</tbody>\n</table>\n';
      html += '</div>\n\n';
    }

    // Add sections
    pageData.sections.forEach(section => {
      html += `<h2>${section.title}</h2>\n`;
      html += `<p>${section.body}</p>\n`;
      
      // Add statistics if present
      if (section.statistics && section.statistics.length > 0) {
        html += '<div class="statistics">\n<h3>Keskeiset tilastot:</h3>\n<ul>\n';
        section.statistics.forEach(stat => {
          html += `  <li>${stat}</li>\n`;
        });
        html += '</ul>\n</div>\n';
      }
      
      if (section.key_points && section.key_points.length > 0) {
        html += '<div class="key-points">\n<h3>Keskeiset kohdat:</h3>\n<ul>\n';
        section.key_points.forEach(point => {
          html += `  <li>${point}</li>\n`;
        });
        html += '</ul>\n</div>\n\n';
      }
    });

    // Add use cases
    if (pageData.use_cases && pageData.use_cases.length > 0) {
      html += '<h2>Käyttötapaukset</h2>\n';
      html += '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">\n';
      pageData.use_cases.forEach((useCase, index) => {
        html += `  <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
    <div class="flex items-center mb-2">
      <span class="text-2xl mr-2">${['💡', '🚀', '🎯'][index % 3]}</span>
      <h4 class="font-medium text-gray-800">${useCase}</h4>
    </div>
  </div>\n`;
      });
      html += '</div>\n\n';
    }

    // Add pros and cons
    if (pageData.pros_cons && (pageData.pros_cons.pros.length > 0 || pageData.pros_cons.cons.length > 0)) {
      html += '<h2>Hyvät ja huonot puolet</h2>\n';
      html += '<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">\n';
      
      if (pageData.pros_cons.pros.length > 0) {
        html += '<div class="bg-green-50 p-6 rounded-lg border border-green-200">\n';
        html += '<h3 class="flex items-center text-green-800 font-semibold mb-4"><span class="text-2xl mr-2">✓</span> Edut</h3>\n<ul class="space-y-2">\n';
        pageData.pros_cons.pros.forEach(pro => {
          html += `  <li class="flex items-start"><span class="text-green-600 mr-2 mt-1">•</span><span>${pro}</span></li>\n`;
        });
        html += '</ul>\n</div>\n';
      }
      
      if (pageData.pros_cons.cons.length > 0) {
        html += '<div class="bg-red-50 p-6 rounded-lg border border-red-200">\n';
        html += '<h3 class="flex items-center text-red-800 font-semibold mb-4"><span class="text-2xl mr-2">✗</span> Haitat</h3>\n<ul class="space-y-2">\n';
        pageData.pros_cons.cons.forEach(con => {
          html += `  <li class="flex items-start"><span class="text-red-600 mr-2 mt-1">•</span><span>${con}</span></li>\n`;
        });
        html += '</ul>\n</div>\n';
      }
      html += '</div>\n\n';
    }

    // Add final recommendations
    if (pageData.final_recommendation) {
      html += '<h2>Lopulliset suositukset</h2>\n';
      html += '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">\n';
      
      if (pageData.final_recommendation.best_overall) {
        html += `<div class="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
          <h3 class="font-bold text-blue-800 mb-2 flex items-center"><span class="text-2xl mr-2">🏆</span> Paras kokonaisuus</h3>
          <p class="text-gray-700">${pageData.final_recommendation.best_overall}</p>
        </div>\n`;
      }
      
      if (pageData.final_recommendation.best_for_budget) {
        html += `<div class="bg-green-50 p-6 rounded-lg border-2 border-green-300">
          <h3 class="font-bold text-green-800 mb-2 flex items-center"><span class="text-2xl mr-2">💰</span> Paras budjettivalinta</h3>
          <p class="text-gray-700">${pageData.final_recommendation.best_for_budget}</p>
        </div>\n`;
      }
      
      if (pageData.final_recommendation.best_for_power_users) {
        html += `<div class="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
          <h3 class="font-bold text-purple-800 mb-2 flex items-center"><span class="text-2xl mr-2">⚡</span> Paras tehokäyttäjille</h3>
          <p class="text-gray-700">${pageData.final_recommendation.best_for_power_users}</p>
        </div>\n`;
      }
      
      html += '</div>\n\n';
    }

    // Add FAQs
    if (pageData.faqs && pageData.faqs.length > 0) {
      html += '<h2>Usein kysytyt kysymykset</h2>\n';
      html += '<div class="space-y-4 mb-8">\n';
      pageData.faqs.forEach((faq, index) => {
        html += `<div class="faq-item bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 class="faq-question flex items-start">
            <span class="text-blue-600 font-bold mr-3 text-xl">Q${index + 1}.</span>
            <span>${faq.question}</span>
          </h3>
          <p class="faq-answer ml-9 mt-2">${faq.answer}</p>
        </div>\n`;
      });
      html += '</div>\n';
    }

    // Add conclusion
    if (pageData.conclusion) {
      html += '<div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200 mt-12">\n';
      html += '<h2 class="text-2xl font-bold mb-4">Yhteenveto</h2>\n';
      if (pageData.conclusion.summary) {
        html += `<p class="text-gray-700 mb-4">${pageData.conclusion.summary}</p>\n`;
      }
      if (pageData.conclusion.call_to_action) {
        html += `<p class="text-lg font-semibold text-blue-800 mb-2">${pageData.conclusion.call_to_action}</p>\n`;
      }
      if (pageData.conclusion.final_thought) {
        html += `<p class="text-gray-600 italic">${pageData.conclusion.final_thought}</p>\n`;
      }
      html += '</div>\n';
    }

    return html;
  }

  async publishNewContent() {
    // Generate new content
    const content = await this.generator.generateContent();
    
    // Publish it
    return await this.publishContent(content);
  }

  async publishMultipleContents(count = 3) {
    const published = [];
    
    for (let i = 0; i < count; i++) {
      try {
        const result = await this.publishNewContent();
        published.push(result);
        
        // Add delay between publishes
        if (i < count - 1) {
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
      } catch (error) {
        logger.error(`Failed to publish content ${i + 1}:`, error);
      }
    }

    return published;
  }

  validateContent(pageData) {
    const required = ['title', 'slug', 'category', 'sections'];
    
    for (const field of required) {
      if (!pageData[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    // Validate sections
    if (!Array.isArray(pageData.sections) || pageData.sections.length === 0) {
      throw new Error('Content must have at least one section');
    }

    // Validate slug format
    if (!/^[a-z0-9-]+$/.test(pageData.slug)) {
      throw new Error('Invalid slug format. Use only lowercase letters, numbers, and hyphens.');
    }

    // Check content length (aim for 800+ words as per SEO requirements)
    const totalContent = pageData.sections.reduce((acc, section) => {
      return acc + (section.body?.length || 0);
    }, 0);

    if (totalContent < 800) {
      throw new Error('Content too short. Each article should have at least 800 characters for SEO optimization.');
    }

    // Validate that sections have statistics for authority
    const sectionsWithStats = pageData.sections.filter(section => 
      section.statistics && section.statistics.length > 0
    );
    
    if (sectionsWithStats.length === 0) {
      logger.warn('No sections contain statistics. This may impact SEO authority.');
    }

    return true;
  }
}