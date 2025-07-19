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

from models.schemas import ContentOptimization, ActionResult, OptimizationAction, ActionStatus
from config.settings import settings


class TitleOptimizationInput(BaseModel):
    url: str = Field(description="URL to optimize title for")
    target_queries: List[str] = Field(description="Target queries for optimization")
    current_title: str = Field(description="Current page title")
    current_ctr: float = Field(description="Current click-through rate")
    avg_position: float = Field(description="Average position in search results")


class TitleOptimizationTool(BaseTool):
    name = "optimize_title"
    description = "Generate an optimized title to improve CTR"
    args_schema = TitleOptimizationInput
    
    def __init__(self):
        super().__init__()
    
    def _run(
        self,
        url: str,
        target_queries: List[str],
        current_title: str,
        current_ctr: float,
        avg_position: float
    ) -> ActionResult:
        try:
            llm = ChatOpenAI(
                model="gpt-4",
                temperature=0.3,
                api_key=settings.openai_api_key
            )
            
            prompt = PromptTemplate.from_template("""
            You are an expert SEO copywriter. Optimize this page title to increase click-through rate.
            
            Current title: {current_title}
            Current CTR: {current_ctr:.2%}
            Average position: {avg_position:.1f}
            Target queries: {target_queries}
            URL: {url}
            
            Rules:
            1. Keep title under 60 characters
            2. Include primary keyword naturally
            3. Add emotional triggers or urgency
            4. Make it compelling and click-worthy
            5. Maintain brand consistency
            6. Consider user intent
            
            Provide 3 optimized title options and explain your reasoning.
            
            Format:
            TITLE 1: [optimized title]
            TITLE 2: [optimized title]
            TITLE 3: [optimized title]
            
            REASONING: [Explain why these titles will perform better]
            
            RECOMMENDED: [Choose the best title and explain why]
            """)
            
            response = llm.invoke([
                HumanMessage(content=prompt.format(
                    current_title=current_title,
                    current_ctr=current_ctr,
                    avg_position=avg_position,
                    target_queries=", ".join(target_queries),
                    url=url
                ))
            ])
            
            # Parse the response to extract the recommended title
            content = response.content
            recommended_match = re.search(r'RECOMMENDED:\s*(.+?)(?=\n\n|\Z)', content, re.DOTALL)
            
            if recommended_match:
                recommended_section = recommended_match.group(1).strip()
                # Extract the actual title from the recommendation
                title_match = re.search(r'TITLE \d+:\s*(.+?)(?=\n|$)', recommended_section)
                if title_match:
                    optimized_title = title_match.group(1).strip()
                else:
                    # Fallback: extract first title from the response
                    first_title_match = re.search(r'TITLE 1:\s*(.+?)(?=\n|$)', content)
                    optimized_title = first_title_match.group(1).strip() if first_title_match else current_title
            else:
                optimized_title = current_title
            
            return ActionResult(
                action=OptimizationAction.REWRITE_TITLE,
                status=ActionStatus.COMPLETED,
                old_value=current_title,
                new_value=optimized_title,
                reasoning=content
            )
            
        except Exception as e:
            logger.error(f"Error optimizing title for {url}: {e}")
            return ActionResult(
                action=OptimizationAction.REWRITE_TITLE,
                status=ActionStatus.FAILED,
                old_value=current_title,
                new_value=current_title,
                reasoning=f"Error occurred: {str(e)}",
                error_message=str(e)
            )


class MetaDescriptionOptimizationInput(BaseModel):
    url: str = Field(description="URL to optimize meta description for")
    target_queries: List[str] = Field(description="Target queries for optimization")
    current_meta: str = Field(description="Current meta description")
    current_ctr: float = Field(description="Current click-through rate")


class MetaDescriptionOptimizationTool(BaseTool):
    name = "optimize_meta_description"
    description = "Generate an optimized meta description to improve CTR"
    args_schema = MetaDescriptionOptimizationInput
    
    def __init__(self):
        super().__init__()
    
    def _run(
        self,
        url: str,
        target_queries: List[str],
        current_meta: str,
        current_ctr: float
    ) -> ActionResult:
        try:
            llm = ChatOpenAI(
                model="gpt-4",
                temperature=0.3,
                api_key=settings.openai_api_key
            )
            
            prompt = PromptTemplate.from_template("""
            You are an expert SEO copywriter. Optimize this meta description to increase click-through rate.
            
            Current meta description: {current_meta}
            Current CTR: {current_ctr:.2%}
            Target queries: {target_queries}
            URL: {url}
            
            Rules:
            1. Keep between 150-160 characters
            2. Include primary keyword naturally
            3. Add a clear call-to-action
            4. Highlight unique value proposition
            5. Create urgency or curiosity
            6. Make it compelling and descriptive
            
            Provide the optimized meta description and explain your reasoning.
            
            Format:
            OPTIMIZED META: [optimized meta description]
            
            REASONING: [Explain why this meta description will perform better]
            """)
            
            response = llm.invoke([
                HumanMessage(content=prompt.format(
                    current_meta=current_meta,
                    current_ctr=current_ctr,
                    target_queries=", ".join(target_queries),
                    url=url
                ))
            ])
            
            content = response.content
            meta_match = re.search(r'OPTIMIZED META:\s*(.+?)(?=\n\n|\Z)', content, re.DOTALL)
            
            if meta_match:
                optimized_meta = meta_match.group(1).strip()
            else:
                optimized_meta = current_meta
            
            return ActionResult(
                action=OptimizationAction.REWRITE_META,
                status=ActionStatus.COMPLETED,
                old_value=current_meta,
                new_value=optimized_meta,
                reasoning=content
            )
            
        except Exception as e:
            logger.error(f"Error optimizing meta description for {url}: {e}")
            return ActionResult(
                action=OptimizationAction.REWRITE_META,
                status=ActionStatus.FAILED,
                old_value=current_meta,
                new_value=current_meta,
                reasoning=f"Error occurred: {str(e)}",
                error_message=str(e)
            )


class ContentExpansionInput(BaseModel):
    url: str = Field(description="URL to expand content for")
    target_queries: List[str] = Field(description="Target queries to optimize for")
    current_content: str = Field(description="Current page content")
    gap_analysis: Dict[str, Any] = Field(description="Content gap analysis results")


class ContentExpansionTool(BaseTool):
    name = "expand_content"
    description = "Generate additional content to fill gaps and improve rankings"
    args_schema = ContentExpansionInput
    
    def __init__(self):
        super().__init__()
    
    def _run(
        self,
        url: str,
        target_queries: List[str],
        current_content: str,
        gap_analysis: Dict[str, Any]
    ) -> ActionResult:
        try:
            llm = ChatOpenAI(
                model="gpt-4",
                temperature=0.4,
                api_key=settings.openai_api_key
            )
            
            # Extract key insights from gap analysis
            gap_queries = gap_analysis.get('top_opportunities', [])
            gap_query_list = [q.get('query', '') for q in gap_queries[:5]]
            
            prompt = PromptTemplate.from_template("""
            You are an expert SEO content writer. Expand this content to better target the gap queries and improve rankings.
            
            Current content preview: {current_content_preview}
            Target queries: {target_queries}
            Gap queries (queries where page shows but doesn't get clicks): {gap_queries}
            
            Your task:
            1. Identify content gaps that prevent the page from ranking for gap queries
            2. Create additional content sections that naturally address these gaps
            3. Maintain the existing content quality and tone
            4. Focus on user intent and comprehensive coverage
            
            Format your response as:
            CONTENT ADDITIONS:
            [New content sections to add]
            
            REASONING:
            [Explain why these additions will improve rankings]
            
            INTEGRATION SUGGESTIONS:
            [How to integrate new content with existing content]
            """)
            
            # Limit content preview to avoid token limits
            content_preview = current_content[:2000] + "..." if len(current_content) > 2000 else current_content
            
            response = llm.invoke([
                HumanMessage(content=prompt.format(
                    current_content_preview=content_preview,
                    target_queries=", ".join(target_queries),
                    gap_queries=", ".join(gap_query_list),
                    url=url
                ))
            ])
            
            content = response.content
            additions_match = re.search(r'CONTENT ADDITIONS:\s*(.+?)(?=REASONING:|$)', content, re.DOTALL)
            
            if additions_match:
                new_content = additions_match.group(1).strip()
            else:
                new_content = "No specific content additions generated."
            
            return ActionResult(
                action=OptimizationAction.EXPAND_CONTENT,
                status=ActionStatus.COMPLETED,
                old_value=f"Content length: {len(current_content)} characters",
                new_value=new_content,
                reasoning=content
            )
            
        except Exception as e:
            logger.error(f"Error expanding content for {url}: {e}")
            return ActionResult(
                action=OptimizationAction.EXPAND_CONTENT,
                status=ActionStatus.FAILED,
                old_value=current_content[:100] + "...",
                new_value="",
                reasoning=f"Error occurred: {str(e)}",
                error_message=str(e)
            )


class FAQGenerationInput(BaseModel):
    url: str = Field(description="URL to generate FAQ for")
    target_queries: List[str] = Field(description="Target queries for FAQ")
    content_topic: str = Field(description="Main topic of the content")


class FAQGenerationTool(BaseTool):
    name = "generate_faq"
    description = "Generate FAQ section to capture more search queries"
    args_schema = FAQGenerationInput
    
    def __init__(self):
        super().__init__()
    
    def _run(
        self,
        url: str,
        target_queries: List[str],
        content_topic: str
    ) -> ActionResult:
        try:
            llm = ChatOpenAI(
                model="gpt-4",
                temperature=0.3,
                api_key=settings.openai_api_key
            )
            
            prompt = PromptTemplate.from_template("""
            You are an expert SEO content writer. Generate a comprehensive FAQ section for this page.
            
            Content topic: {content_topic}
            Target queries: {target_queries}
            URL: {url}
            
            Create 8-12 frequently asked questions that:
            1. Address user intent behind target queries
            2. Include long-tail keyword variations
            3. Provide clear, helpful answers
            4. Use natural language that people actually search for
            5. Include actionable information
            
            Format:
            FAQ SECTION:
            
            **Question 1:** [Question]
            **Answer:** [Detailed answer]
            
            **Question 2:** [Question]
            **Answer:** [Detailed answer]
            
            [Continue for all questions]
            
            SCHEMA MARKUP:
            [JSON-LD schema for FAQ]
            
            REASONING:
            [Explain how this FAQ will improve search performance]
            """)
            
            response = llm.invoke([
                HumanMessage(content=prompt.format(
                    content_topic=content_topic,
                    target_queries=", ".join(target_queries),
                    url=url
                ))
            ])
            
            content = response.content
            faq_match = re.search(r'FAQ SECTION:\s*(.+?)(?=SCHEMA MARKUP:|$)', content, re.DOTALL)
            
            if faq_match:
                faq_content = faq_match.group(1).strip()
            else:
                faq_content = "No FAQ content generated."
            
            return ActionResult(
                action=OptimizationAction.ADD_FAQ,
                status=ActionStatus.COMPLETED,
                old_value="No FAQ section",
                new_value=faq_content,
                reasoning=content
            )
            
        except Exception as e:
            logger.error(f"Error generating FAQ for {url}: {e}")
            return ActionResult(
                action=OptimizationAction.ADD_FAQ,
                status=ActionStatus.FAILED,
                old_value="No FAQ section",
                new_value="",
                reasoning=f"Error occurred: {str(e)}",
                error_message=str(e)
            )


class SchemaMarkupInput(BaseModel):
    url: str = Field(description="URL to generate schema markup for")
    content_type: str = Field(description="Type of content (article, product, etc.)")
    title: str = Field(description="Page title")
    description: str = Field(description="Page description")


class SchemaMarkupTool(BaseTool):
    name = "generate_schema_markup"
    description = "Generate JSON-LD schema markup for rich snippets"
    args_schema = SchemaMarkupInput
    
    def __init__(self):
        super().__init__()
    
    def _run(
        self,
        url: str,
        content_type: str,
        title: str,
        description: str
    ) -> ActionResult:
        try:
            llm = ChatOpenAI(
                model="gpt-4",
                temperature=0.1,
                api_key=settings.openai_api_key
            )
            
            prompt = PromptTemplate.from_template("""
            Generate appropriate JSON-LD schema markup for this page.
            
            URL: {url}
            Content Type: {content_type}
            Title: {title}
            Description: {description}
            
            Create schema markup that:
            1. Matches the content type appropriately
            2. Includes all relevant properties
            3. Follows schema.org guidelines
            4. Is valid JSON-LD
            5. Helps achieve rich snippets
            
            Common types: Article, BlogPosting, WebPage, Organization, Person, Product, Review
            
            Provide only the JSON-LD markup, properly formatted.
            """)
            
            response = llm.invoke([
                HumanMessage(content=prompt.format(
                    url=url,
                    content_type=content_type,
                    title=title,
                    description=description
                ))
            ])
            
            schema_markup = response.content.strip()
            
            return ActionResult(
                action=OptimizationAction.ADD_SCHEMA,
                status=ActionStatus.COMPLETED,
                old_value="No schema markup",
                new_value=schema_markup,
                reasoning="Generated structured data markup for rich snippets"
            )
            
        except Exception as e:
            logger.error(f"Error generating schema markup for {url}: {e}")
            return ActionResult(
                action=OptimizationAction.ADD_SCHEMA,
                status=ActionStatus.FAILED,
                old_value="No schema markup",
                new_value="",
                reasoning=f"Error occurred: {str(e)}",
                error_message=str(e)
            )


class InternalLinkingInput(BaseModel):
    target_url: str = Field(description="URL to improve internal linking for")
    site_urls: List[str] = Field(description="List of site URLs to consider for linking")
    target_keywords: List[str] = Field(description="Keywords to target with anchor text")


class InternalLinkingTool(BaseTool):
    name = "optimize_internal_linking"
    description = "Suggest internal linking opportunities"
    args_schema = InternalLinkingInput
    
    def __init__(self):
        super().__init__()
    
    def _run(
        self,
        target_url: str,
        site_urls: List[str],
        target_keywords: List[str]
    ) -> ActionResult:
        try:
            llm = ChatOpenAI(
                model="gpt-4",
                temperature=0.3,
                api_key=settings.openai_api_key
            )
            
            prompt = PromptTemplate.from_template("""
            Suggest internal linking opportunities to improve SEO for the target URL.
            
            Target URL: {target_url}
            Target Keywords: {target_keywords}
            Available Site URLs: {site_urls}
            
            Your task:
            1. Identify relevant pages that should link to the target URL
            2. Suggest natural anchor text using target keywords
            3. Recommend contextual placement for links
            4. Ensure links provide value to users
            
            Format:
            INTERNAL LINKING SUGGESTIONS:
            
            FROM: [Source URL]
            TO: {target_url}
            ANCHOR TEXT: [Suggested anchor text]
            CONTEXT: [Where to place the link and why]
            
            [Repeat for each suggestion]
            
            REASONING:
            [Explain how these links will improve rankings]
            """)
            
            # Limit URLs to avoid token limits
            limited_urls = site_urls[:20]
            
            response = llm.invoke([
                HumanMessage(content=prompt.format(
                    target_url=target_url,
                    target_keywords=", ".join(target_keywords),
                    site_urls=", ".join(limited_urls)
                ))
            ])
            
            suggestions = response.content
            
            return ActionResult(
                action=OptimizationAction.FIX_INTERNAL_LINKS,
                status=ActionStatus.COMPLETED,
                old_value="No internal linking optimization",
                new_value=suggestions,
                reasoning="Generated internal linking suggestions to improve page authority"
            )
            
        except Exception as e:
            logger.error(f"Error optimizing internal linking for {target_url}: {e}")
            return ActionResult(
                action=OptimizationAction.FIX_INTERNAL_LINKS,
                status=ActionStatus.FAILED,
                old_value="No internal linking optimization",
                new_value="",
                reasoning=f"Error occurred: {str(e)}",
                error_message=str(e)
            )