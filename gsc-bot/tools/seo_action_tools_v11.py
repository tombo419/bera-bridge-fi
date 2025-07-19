"""
Enhanced SEO Action Tools v1.1
Implements sophisticated action strategies for each issue type
"""

import requests
from typing import List, Dict, Any, Optional
from langchain.tools import BaseTool
from langchain.pydantic_v1 import BaseModel, Field
from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate
from langchain.schema import HumanMessage, SystemMessage
from bs4 import BeautifulSoup
from loguru import logger
import re

from models.schemas import ContentOptimization, ActionResult, OptimizationAction, ActionStatus, SEOIssue
from config.settings import settings


class EnhancedTitleMetaOptimizationInput(BaseModel):
    url: str = Field(description="URL to optimize")
    issue: dict = Field(description="The SEO issue details as dict")
    current_title: str = Field(description="Current page title")
    current_meta: str = Field(description="Current meta description")
    
    class Config:
        arbitrary_types_allowed = True


class EnhancedTitleMetaOptimizationTool(BaseTool):
    name = "optimize_title_meta_v11"
    description = "Generate 3 optimized title/meta options using emotional triggers and keywords"
    args_schema = EnhancedTitleMetaOptimizationInput
    
    def _run(
        self,
        url: str,
        issue: SEOIssue,
        current_title: str,
        current_meta: str
    ) -> List[ActionResult]:
        try:
            llm = ChatOpenAI(
                model="gpt-4",
                temperature=0.3,
                api_key=settings.openai_api_key
            )
            
            # Extract queries and metrics
            target_queries = issue.metrics.queries[:5]
            ctr = issue.metrics.ctr
            position = issue.metrics.position
            
            prompt = PromptTemplate.from_template("""
            You are an expert SEO copywriter. Optimize title and meta description to dramatically increase CTR.
            
            Current Performance:
            - Title: {current_title}
            - Meta: {current_meta}
            - CTR: {ctr:.2%}
            - Position: {position:.1f}
            - Target queries: {target_queries}
            
            Generate 3 optimized title/meta combinations following these rules:
            
            TITLE RULES:
            1. Maximum 60 characters
            2. Include primary keyword naturally in first 30 characters
            3. Use power words: Ultimate, Essential, Complete, Proven, Expert
            4. Add numbers when relevant (2024, Top 10, 5 Ways)
            5. Create urgency or curiosity
            6. Match search intent precisely
            
            META RULES:
            1. 150-160 characters exactly
            2. Include primary keyword naturally
            3. Clear value proposition in first 100 characters
            4. Strong call-to-action
            5. Address user pain points
            6. Use active voice
            
            Format your response EXACTLY as:
            
            OPTION 1:
            Title: [title here]
            Meta: [meta description here]
            Keywords targeted: [list keywords this targets]
            Emotional triggers: [list triggers used]
            
            OPTION 2:
            Title: [title here]
            Meta: [meta description here]
            Keywords targeted: [list keywords this targets]
            Emotional triggers: [list triggers used]
            
            OPTION 3:
            Title: [title here]
            Meta: [meta description here]
            Keywords targeted: [list keywords this targets]
            Emotional triggers: [list triggers used]
            
            RECOMMENDED: Option [1/2/3]
            REASONING: [Why this option will increase CTR from {ctr:.2%} to an estimated X%]
            """)
            
            response = llm.invoke([
                HumanMessage(content=prompt.format(
                    current_title=current_title,
                    current_meta=current_meta,
                    ctr=ctr,
                    position=position,
                    target_queries=", ".join(target_queries)
                ))
            ])
            
            content = response.content
            
            # Parse recommended option
            recommended_match = re.search(r'RECOMMENDED: Option (\d+)', content)
            if recommended_match:
                option_num = recommended_match.group(1)
                
                # Extract the recommended title and meta
                option_pattern = rf'OPTION {option_num}:\s*Title: (.+?)\s*Meta: (.+?)\s*Keywords targeted:'
                option_match = re.search(option_pattern, content, re.DOTALL)
                
                if option_match:
                    new_title = option_match.group(1).strip()
                    new_meta = option_match.group(2).strip()
                else:
                    # Fallback to first option
                    first_option = re.search(r'OPTION 1:\s*Title: (.+?)\s*Meta: (.+?)\s*Keywords targeted:', content, re.DOTALL)
                    if first_option:
                        new_title = first_option.group(1).strip()
                        new_meta = first_option.group(2).strip()
                    else:
                        new_title = current_title
                        new_meta = current_meta
            else:
                new_title = current_title
                new_meta = current_meta
            
            results = []
            
            # Title optimization result
            results.append(ActionResult(
                action=OptimizationAction.REWRITE_TITLE,
                status=ActionStatus.COMPLETED,
                old_value=current_title,
                new_value=new_title,
                reasoning=content
            ))
            
            # Meta optimization result
            results.append(ActionResult(
                action=OptimizationAction.REWRITE_META,
                status=ActionStatus.COMPLETED,
                old_value=current_meta,
                new_value=new_meta,
                reasoning=content
            ))
            
            return results
            
        except Exception as e:
            logger.error(f"Error optimizing title/meta for {url}: {e}")
            return [
                ActionResult(
                    action=OptimizationAction.REWRITE_TITLE,
                    status=ActionStatus.FAILED,
                    old_value=current_title,
                    new_value=current_title,
                    reasoning=f"Error: {str(e)}",
                    error_message=str(e)
                )
            ]


class ContentGapExpansionInput(BaseModel):
    url: str = Field(description="URL to expand content for")
    issue: dict = Field(description="The content gap issue as dict")
    current_content: str = Field(description="Current page content")
    
    class Config:
        arbitrary_types_allowed = True


class ContentGapExpansionTool(BaseTool):
    name = "expand_content_gaps_v11"
    description = "Suggest 2-3 new H2/H3 sections with sample content to fill gaps"
    args_schema = ContentGapExpansionInput
    
    def _run(
        self,
        url: str,
        issue: SEOIssue,
        current_content: str
    ) -> ActionResult:
        try:
            llm = ChatOpenAI(
                model="gpt-4",
                temperature=0.4,
                api_key=settings.openai_api_key
            )
            
            # Get gap queries
            gap_queries = issue.gap_queries[:10]
            
            prompt = PromptTemplate.from_template("""
            You are an expert SEO content strategist. Analyze content gaps and suggest new sections.
            
            Current situation:
            - URL: {url}
            - Gap queries (showing impressions but no clicks): {gap_queries}
            - Current content preview: {content_preview}
            
            Create 2-3 new H2/H3 sections that will capture these gap queries.
            
            For each section provide:
            1. Heading (H2 or H3)
            2. 150-200 word sample content
            3. Keywords naturally integrated
            4. User intent addressed
            
            Format your response as:
            
            NEW SECTION 1:
            Heading: [H2/H3 heading targeting gap queries]
            Content: [Sample paragraph with keywords naturally integrated]
            Target queries: [Which gap queries this addresses]
            Integration notes: [Where to place in existing content]
            
            NEW SECTION 2:
            Heading: [H2/H3 heading]
            Content: [Sample paragraph]
            Target queries: [Gap queries addressed]
            Integration notes: [Placement recommendation]
            
            NEW SECTION 3 (if needed):
            Heading: [H2/H3 heading]
            Content: [Sample paragraph]
            Target queries: [Gap queries addressed]
            Integration notes: [Placement recommendation]
            
            OVERALL STRATEGY:
            [Explain how these additions will capture the gap traffic]
            """)
            
            # Limit content preview
            content_preview = current_content[:1500] + "..." if len(current_content) > 1500 else current_content
            
            response = llm.invoke([
                HumanMessage(content=prompt.format(
                    url=url,
                    gap_queries=", ".join(gap_queries),
                    content_preview=content_preview
                ))
            ])
            
            return ActionResult(
                action=OptimizationAction.ADD_CONTENT_SECTIONS,
                status=ActionStatus.COMPLETED,
                old_value=f"Missing content for queries: {', '.join(gap_queries[:5])}",
                new_value=response.content,
                reasoning="Generated targeted content sections to capture gap query traffic"
            )
            
        except Exception as e:
            logger.error(f"Error expanding content for {url}: {e}")
            return ActionResult(
                action=OptimizationAction.ADD_CONTENT_SECTIONS,
                status=ActionStatus.FAILED,
                old_value="",
                new_value="",
                reasoning=f"Error: {str(e)}",
                error_message=str(e)
            )


class InternalLinkingStrategyInput(BaseModel):
    url: str = Field(description="Target URL needing internal links")
    issue: dict = Field(description="The SEO issue as dict")
    site_structure: List[str] = Field(description="List of site URLs for linking opportunities")
    
    class Config:
        arbitrary_types_allowed = True


class InternalLinkingStrategyTool(BaseTool):
    name = "internal_linking_strategy_v11"
    description = "Recommend 2-3 internal links from relevant pages with natural anchor text"
    args_schema = InternalLinkingStrategyInput
    
    def _run(
        self,
        url: str,
        issue: SEOIssue,
        site_structure: List[str]
    ) -> ActionResult:
        try:
            llm = ChatOpenAI(
                model="gpt-4",
                temperature=0.3,
                api_key=settings.openai_api_key
            )
            
            target_queries = issue.metrics.queries[:5]
            
            prompt = PromptTemplate.from_template("""
            You are an SEO internal linking expert. Suggest strategic internal links to boost rankings.
            
            Target page: {url}
            Target keywords: {keywords}
            Current position: {position:.1f}
            
            Available pages to link from (showing first 20):
            {site_pages}
            
            Recommend 2-3 internal linking opportunities following these rules:
            1. Source page must be topically relevant
            2. Anchor text must be natural and varied
            3. Context around link must add value
            4. Prioritize high-authority pages
            
            Format each recommendation as:
            
            LINK 1:
            From: [source URL]
            To: {url}
            Anchor text: [natural anchor text using target keyword variation]
            Context: [1-2 sentences showing where/how to add the link naturally]
            Relevance: [Why this link makes sense]
            
            LINK 2:
            From: [source URL]
            To: {url}
            Anchor text: [different anchor text variation]
            Context: [Natural placement context]
            Relevance: [Connection explanation]
            
            LINK 3:
            From: [source URL]
            To: {url}
            Anchor text: [another variation]
            Context: [Natural placement]
            Relevance: [Why it helps]
            
            IMPACT ASSESSMENT:
            [How these links will improve rankings from position {position:.1f}]
            """)
            
            response = llm.invoke([
                HumanMessage(content=prompt.format(
                    url=url,
                    keywords=", ".join(target_queries),
                    position=issue.metrics.position,
                    site_pages="\n".join(site_structure[:20])
                ))
            ])
            
            return ActionResult(
                action=OptimizationAction.ADD_INTERNAL_LINKS,
                status=ActionStatus.COMPLETED,
                old_value="No internal linking strategy",
                new_value=response.content,
                reasoning="Generated internal linking recommendations to boost page authority"
            )
            
        except Exception as e:
            logger.error(f"Error creating internal linking strategy for {url}: {e}")
            return ActionResult(
                action=OptimizationAction.ADD_INTERNAL_LINKS,
                status=ActionStatus.FAILED,
                old_value="",
                new_value="",
                reasoning=f"Error: {str(e)}",
                error_message=str(e)
            )


class ContentRewriteInput(BaseModel):
    url: str = Field(description="URL needing content rewrite")
    issue: dict = Field(description="The zero traffic issue as dict")
    current_content: str = Field(description="Current content that's not working")
    
    class Config:
        arbitrary_types_allowed = True


class ContentRewriteTool(BaseTool):
    name = "rewrite_content_v11"
    description = "Identify why content has zero traffic and suggest rewrite strategy"
    args_schema = ContentRewriteInput
    
    def _run(
        self,
        url: str,
        issue: SEOIssue,
        current_content: str
    ) -> ActionResult:
        try:
            llm = ChatOpenAI(
                model="gpt-4",
                temperature=0.4,
                api_key=settings.openai_api_key
            )
            
            prompt = PromptTemplate.from_template("""
            You are an expert content strategist. Diagnose why this content gets zero traffic and suggest fixes.
            
            URL: {url}
            Impressions: {impressions}
            Clicks: 0
            Target queries: {queries}
            
            Current content preview:
            {content_preview}
            
            Diagnose the core issues:
            1. Is the content too thin? (Less than 300 words)
            2. Is it off-intent? (Doesn't match what searchers want)
            3. Is it outdated? (Old information, dates, statistics)
            4. Is it poorly structured? (No clear headings, hard to scan)
            5. Is it missing key information searchers expect?
            
            Provide your analysis as:
            
            DIAGNOSIS:
            Primary issue: [Main reason for zero traffic]
            Secondary issues: [Other problems identified]
            
            REWRITE STRATEGY:
            1. New angle: [How to reposition the content]
            2. New structure: [Suggested H1, H2, H3 outline]
            3. Content additions: [What new information to add]
            4. Content removals: [What to cut]
            5. New word count target: [Recommended length]
            
            NEW TITLE & META:
            Title: [Compelling title that matches intent]
            Meta: [Meta description that entices clicks]
            
            SAMPLE INTRODUCTION:
            [Write a compelling 100-word introduction showing the new approach]
            
            ESTIMATED IMPACT:
            [How this rewrite will go from 0 clicks to X estimated clicks]
            """)
            
            content_preview = current_content[:2000] + "..." if len(current_content) > 2000 else current_content
            
            response = llm.invoke([
                HumanMessage(content=prompt.format(
                    url=url,
                    impressions=issue.metrics.impressions,
                    queries=", ".join(issue.metrics.queries[:5]),
                    content_preview=content_preview
                ))
            ])
            
            return ActionResult(
                action=OptimizationAction.REWRITE_CONTENT,
                status=ActionStatus.COMPLETED,
                old_value="Zero traffic content",
                new_value=response.content,
                reasoning="Comprehensive content rewrite strategy to fix zero traffic issue"
            )
            
        except Exception as e:
            logger.error(f"Error creating rewrite strategy for {url}: {e}")
            return ActionResult(
                action=OptimizationAction.REWRITE_CONTENT,
                status=ActionStatus.FAILED,
                old_value="",
                new_value="",
                reasoning=f"Error: {str(e)}",
                error_message=str(e)
            )


class CanonicalStrategyInput(BaseModel):
    issue: dict = Field(description="The duplicate intent issue as dict")
    primary_url: str = Field(description="The URL that should be canonical")
    
    class Config:
        arbitrary_types_allowed = True


class CanonicalStrategyTool(BaseTool):
    name = "canonical_strategy_v11"
    description = "Recommend canonical URL and content merge strategy for duplicate intent"
    args_schema = CanonicalStrategyInput
    
    def _run(
        self,
        issue: SEOIssue,
        primary_url: str
    ) -> ActionResult:
        try:
            llm = ChatOpenAI(
                model="gpt-4",
                temperature=0.3,
                api_key=settings.openai_api_key
            )
            
            secondary_url = issue.url
            competing_urls = issue.competing_urls
            common_queries = issue.metrics.queries
            
            prompt = PromptTemplate.from_template("""
            You are an SEO canonicalization expert. Resolve keyword cannibalization issues.
            
            Situation:
            - Primary URL (keep): {primary_url}
            - Secondary URL (fix): {secondary_url}
            - Common queries: {queries}
            - All competing URLs: {competing_urls}
            
            Provide a resolution strategy:
            
            CANONICAL RECOMMENDATION:
            1. Set canonical: {secondary_url} → {primary_url}
            2. Reason: [Why primary URL should be the canonical]
            
            CONTENT MERGE STRATEGY:
            1. Unique value from secondary: [What content to preserve]
            2. How to integrate: [How to add it to primary URL]
            3. Redirect plan: [301 redirect after merge? Keep both?]
            
            REFOCUS STRATEGY (if keeping both):
            1. Primary URL focus: [Specific angle/keywords]
            2. Secondary URL focus: [Different angle to avoid overlap]
            3. Differentiation tactics: [How to make them distinct]
            
            IMPLEMENTATION STEPS:
            1. [First action]
            2. [Second action]
            3. [Third action]
            
            EXPECTED OUTCOME:
            [How this resolves cannibalization and improves rankings]
            """)
            
            response = llm.invoke([
                HumanMessage(content=prompt.format(
                    primary_url=primary_url,
                    secondary_url=secondary_url,
                    queries=", ".join(common_queries[:10]),
                    competing_urls=", ".join(competing_urls)
                ))
            ])
            
            return ActionResult(
                action=OptimizationAction.SET_CANONICAL,
                status=ActionStatus.COMPLETED,
                old_value=f"Competing with {primary_url}",
                new_value=response.content,
                reasoning="Canonical and content strategy to resolve keyword cannibalization"
            )
            
        except Exception as e:
            logger.error(f"Error creating canonical strategy: {e}")
            return ActionResult(
                action=OptimizationAction.SET_CANONICAL,
                status=ActionStatus.FAILED,
                old_value="",
                new_value="",
                reasoning=f"Error: {str(e)}",
                error_message=str(e)
            )


class IndexingFixInput(BaseModel):
    url: str = Field(description="URL with indexing issues")
    issue: dict = Field(description="The indexing issue as dict")
    
    class Config:
        arbitrary_types_allowed = True


class IndexingFixTool(BaseTool):
    name = "fix_indexing_v11"
    description = "Suggest fixes for indexing problems"
    args_schema = IndexingFixInput
    
    def _run(
        self,
        url: str,
        issue: SEOIssue
    ) -> ActionResult:
        try:
            coverage_state = issue.metrics.index_coverage_state or "Unknown"
            
            # Define fix strategies based on coverage state
            fix_strategies = {
                "URL is not on Google": {
                    "actions": ["Submit to Google Search Console", "Add to XML sitemap", "Build internal links", "Check robots.txt"],
                    "priority": "high"
                },
                "Crawled - currently not indexed": {
                    "actions": ["Improve content quality", "Add unique value", "Fix thin content", "Add schema markup"],
                    "priority": "high"
                },
                "Discovered - currently not indexed": {
                    "actions": ["Improve internal linking", "Submit URL for indexing", "Check crawl budget"],
                    "priority": "medium"
                },
                "Alternate page with proper canonical tag": {
                    "actions": ["Review canonical tag", "Ensure it points to correct URL", "Consider if should be self-canonical"],
                    "priority": "medium"
                },
                "Duplicate without user-selected canonical": {
                    "actions": ["Add canonical tag", "Choose primary version", "Implement 301 redirect if needed"],
                    "priority": "high"
                },
                "Page with redirect": {
                    "actions": ["Check if redirect is correct", "Update internal links to final URL", "Remove from sitemap"],
                    "priority": "low"
                }
            }
            
            strategy = fix_strategies.get(coverage_state, {
                "actions": ["Inspect in Google Search Console", "Check for technical issues"],
                "priority": "medium"
            })
            
            fix_plan = f"""
INDEXING ISSUE DETECTED: {coverage_state}

URL: {url}

RECOMMENDED FIXES:
{chr(10).join(f'{i+1}. {action}' for i, action in enumerate(strategy['actions']))}

PRIORITY: {strategy['priority'].upper()}

IMPLEMENTATION DETAILS:

1. Immediate Actions:
   - Open Google Search Console
   - Use URL Inspection tool on: {url}
   - Request indexing if page is ready

2. Technical Fixes:
   - Ensure no 'noindex' meta tag
   - Check robots.txt doesn't block the URL
   - Verify page returns 200 status code
   - Add internal links from important pages

3. Content Improvements:
   - Ensure content is unique (not duplicate)
   - Add at least 300 words of valuable content
   - Include target keywords naturally
   - Add relevant schema markup

4. Sitemap Updates:
   - Add URL to XML sitemap
   - Submit updated sitemap to GSC
   - Monitor indexing status

EXPECTED TIMELINE:
- Indexing typically occurs within 1-2 weeks after fixes
- Monitor weekly in Google Search Console
"""
            
            return ActionResult(
                action=OptimizationAction.FIX_INDEXING,
                status=ActionStatus.COMPLETED,
                old_value=f"Indexing issue: {coverage_state}",
                new_value=fix_plan,
                reasoning=f"Comprehensive fix plan for {coverage_state} issue"
            )
            
        except Exception as e:
            logger.error(f"Error creating indexing fix for {url}: {e}")
            return ActionResult(
                action=OptimizationAction.FIX_INDEXING,
                status=ActionStatus.FAILED,
                old_value="",
                new_value="",
                reasoning=f"Error: {str(e)}",
                error_message=str(e)
            )


# Export all v1.1 action tools
__all__ = [
    'EnhancedTitleMetaOptimizationTool',
    'ContentGapExpansionTool',
    'InternalLinkingStrategyTool',
    'ContentRewriteTool',
    'CanonicalStrategyTool',
    'IndexingFixTool'
]