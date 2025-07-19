"""
Example prompts used by the GSC SEO Bot
This file contains the core prompts that drive the AI optimization decisions
"""

# Title Optimization Prompt
TITLE_OPTIMIZATION_PROMPT = """
You are an expert SEO copywriter specializing in Finnish content. Optimize this page title to increase click-through rate.

Current title: {current_title}
Current CTR: {current_ctr:.2%}
Average position: {avg_position:.1f}
Target queries: {target_queries}
URL: {url}

Context: This is for the Finnish website bera-bridge.fi which covers technology, gaming, and digital culture topics.

Rules:
1. Keep title under 60 characters
2. Include primary keyword naturally in Finnish
3. Add emotional triggers or urgency appropriate for Finnish audience
4. Make it compelling and click-worthy
5. Maintain brand consistency with bera-bridge.fi
6. Consider Finnish search behavior and user intent
7. Use proper Finnish grammar and spelling

Provide 3 optimized title options and explain your reasoning.

Format:
TITLE 1: [optimized title]
TITLE 2: [optimized title]
TITLE 3: [optimized title]

REASONING: [Explain why these titles will perform better for Finnish audience]

RECOMMENDED: [Choose the best title and explain why]
"""

# Meta Description Optimization Prompt
META_DESCRIPTION_PROMPT = """
You are an expert SEO copywriter specializing in Finnish content. Optimize this meta description to increase click-through rate.

Current meta description: {current_meta}
Current CTR: {current_ctr:.2%}
Target queries: {target_queries}
URL: {url}

Context: This is for the Finnish website bera-bridge.fi which covers technology, gaming, and digital culture topics.

Rules:
1. Keep between 150-160 characters
2. Include primary keyword naturally in Finnish
3. Add a clear call-to-action in Finnish
4. Highlight unique value proposition
5. Create urgency or curiosity appropriate for Finnish culture
6. Make it compelling and descriptive
7. Use proper Finnish grammar and spelling

Provide the optimized meta description and explain your reasoning.

Format:
OPTIMIZED META: [optimized meta description]

REASONING: [Explain why this meta description will perform better for Finnish audience]
"""

# Content Expansion Prompt
CONTENT_EXPANSION_PROMPT = """
You are an expert SEO content writer specializing in Finnish digital content. Expand this content to better target the gap queries and improve rankings.

Current content preview: {current_content_preview}
Target queries: {target_queries}
Gap queries (queries where page shows but doesn't get clicks): {gap_queries}
URL: {url}

Context: This is for the Finnish website bera-bridge.fi which covers technology, gaming, and digital culture topics for Finnish audience.

Your task:
1. Identify content gaps that prevent the page from ranking for gap queries
2. Create additional content sections in Finnish that naturally address these gaps
3. Maintain the existing content quality and tone
4. Focus on Finnish user intent and search behavior
5. Include relevant Finnish terminology and cultural context
6. Ensure content is comprehensive and valuable for Finnish readers

Format your response as:
CONTENT ADDITIONS:
[New content sections to add in Finnish]

REASONING:
[Explain why these additions will improve rankings for Finnish searches]

INTEGRATION SUGGESTIONS:
[How to integrate new content with existing content]
"""

# FAQ Generation Prompt
FAQ_GENERATION_PROMPT = """
You are an expert SEO content writer specializing in Finnish digital content. Generate a comprehensive FAQ section for this page.

Content topic: {content_topic}
Target queries: {target_queries}
URL: {url}

Context: This is for the Finnish website bera-bridge.fi which covers technology, gaming, and digital culture topics.

Create 8-12 frequently asked questions in Finnish that:
1. Address user intent behind target queries
2. Include long-tail keyword variations in Finnish
3. Provide clear, helpful answers in Finnish
4. Use natural language that Finnish people actually search for
5. Include actionable information
6. Reflect Finnish cultural context and terminology
7. Use proper Finnish grammar and spelling

Format:
FAQ SECTION:

**Kysymys 1:** [Question in Finnish]
**Vastaus:** [Detailed answer in Finnish]

**Kysymys 2:** [Question in Finnish]
**Vastaus:** [Detailed answer in Finnish]

[Continue for all questions]

SCHEMA MARKUP:
[JSON-LD schema for FAQ in Finnish]

REASONING:
[Explain how this FAQ will improve search performance for Finnish queries]
"""

# Schema Markup Prompt
SCHEMA_MARKUP_PROMPT = """
Generate appropriate JSON-LD schema markup for this Finnish webpage.

URL: {url}
Content Type: {content_type}
Title: {title}
Description: {description}

Context: This is for the Finnish website bera-bridge.fi which covers technology, gaming, and digital culture topics.

Create schema markup that:
1. Matches the content type appropriately
2. Includes all relevant properties
3. Follows schema.org guidelines
4. Is valid JSON-LD
5. Helps achieve rich snippets
6. Includes Finnish language context where appropriate
7. Uses proper Finnish text in relevant fields

Common types: Article, BlogPosting, WebPage, Organization, Person, Product, Review

Provide only the JSON-LD markup, properly formatted with Finnish content where applicable.
"""

# Internal Linking Prompt
INTERNAL_LINKING_PROMPT = """
Suggest internal linking opportunities to improve SEO for the target URL on the Finnish website bera-bridge.fi.

Target URL: {target_url}
Target Keywords: {target_keywords}
Available Site URLs: {site_urls}

Context: This is for the Finnish website bera-bridge.fi which covers technology, gaming, and digital culture topics.

Your task:
1. Identify relevant pages that should link to the target URL
2. Suggest natural anchor text in Finnish using target keywords
3. Recommend contextual placement for links
4. Ensure links provide value to Finnish users
5. Consider Finnish search behavior and terminology
6. Use appropriate Finnish anchor text variations

Format:
INTERNAL LINKING SUGGESTIONS:

FROM: [Source URL]
TO: {target_url}
ANCHOR TEXT: [Suggested anchor text in Finnish]
CONTEXT: [Where to place the link and why, considering Finnish user behavior]

[Repeat for each suggestion]

REASONING:
[Explain how these links will improve rankings for Finnish searches]
"""

# Issue Analysis Prompt
ISSUE_ANALYSIS_PROMPT = """
Analyze this SEO issue and recommend the best optimization strategy.

Issue: {issue_description}
URL: {url}
Issue Type: {issue_type}
Severity: {severity}
Current metrics: {clicks} clicks, {impressions} impressions, {ctr:.2%} CTR, position {position:.1f}

Context: This is for the Finnish website bera-bridge.fi which covers technology, gaming, and digital culture topics.

Consider:
1. Finnish search behavior and preferences
2. Competition in Finnish market
3. User intent for Finnish queries
4. Cultural context and terminology
5. Technical SEO best practices

Provide a clear, actionable optimization strategy explaining:
1. Why this issue occurred
2. What actions to take
3. Expected impact
4. Timeline for results
5. How to measure success

Focus on actions that will drive the most traffic growth for Finnish users.
"""

# Weekly Report Prompt
WEEKLY_REPORT_PROMPT = """
Generate a weekly SEO performance report for bera-bridge.fi.

Performance Data:
- Total optimizations: {total_optimizations}
- Successful optimizations: {successful_optimizations}
- Success rate: {success_rate:.1f}%
- Average improvements: {average_improvements}
- Recent results: {recent_results}

Create a comprehensive report that includes:
1. Executive summary
2. Key performance metrics
3. Top performing optimizations
4. Areas for improvement
5. Recommendations for next week
6. Trends and insights

Format the report in a professional, actionable manner suitable for stakeholders.
"""