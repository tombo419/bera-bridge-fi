"""
Enhanced SEO Agent v1.1
Orchestrates advanced SEO detection and optimization workflows
"""

from typing import List, Dict, Any, Optional
from datetime import datetime, timedelta
from langchain.agents import AgentExecutor, create_react_agent
from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate
from langchain.memory import ConversationBufferMemory
from langchain.tools import Tool
from loguru import logger
import asyncio

from models.schemas import (
    SEOIssue, OptimizationPlan, OptimizationLog, ActionResult,
    SEOIssueType, OptimizationAction
)
from tools.seo_detection_tools_v11 import (
    EnhancedLowCTRDetectionTool,
    ContentGapDetectionTool,
    DuplicateIntentDetectionTool,
    IndexingProblemDetectionTool
)
from tools.seo_action_tools_v11 import (
    EnhancedTitleMetaOptimizationTool,
    ContentGapExpansionTool,
    InternalLinkingStrategyTool,
    ContentRewriteTool,
    CanonicalStrategyTool,
    IndexingFixTool
)
from tools.seo_detection_tools import (
    PoorRankingDetectionTool,
    ZeroTrafficDetectionTool
)
from config.settings import settings
from integrations.gsc_client import GSCClient
from utils.content_analyzer import ContentAnalyzer


class SEOAgentV11:
    """Enhanced SEO Agent with v1.1 capabilities"""
    
    def __init__(self):
        self.llm = ChatOpenAI(
            model="gpt-4",
            temperature=0.7,
            api_key=settings.openai_api_key
        )
        
        # Initialize v1.1 detection tools
        self.detection_tools = [
            EnhancedLowCTRDetectionTool(),
            ContentGapDetectionTool(),
            DuplicateIntentDetectionTool(),
            IndexingProblemDetectionTool(),
            PoorRankingDetectionTool(),  # Legacy but still useful
            ZeroTrafficDetectionTool()    # Legacy but enhanced
        ]
        
        # Initialize v1.1 action tools
        self.action_tools = {
            SEOIssueType.LOW_CTR: EnhancedTitleMetaOptimizationTool(),
            SEOIssueType.CONTENT_GAP: ContentGapExpansionTool(),
            SEOIssueType.DUPLICATE_INTENT: CanonicalStrategyTool(),
            SEOIssueType.INDEXING_PROBLEM: IndexingFixTool(),
            SEOIssueType.POOR_RANKING: InternalLinkingStrategyTool(),
            SEOIssueType.ZERO_TRAFFIC: ContentRewriteTool()
        }
        
        self.gsc_client = GSCClient()
        self.content_analyzer = ContentAnalyzer()
        
        logger.info("SEO Agent v1.1 initialized with enhanced detection and action capabilities")
    
    def detect_all_issues(self, days_back: int = 30) -> List[SEOIssue]:
        """Run all v1.1 detection tools and aggregate issues"""
        logger.info(f"Starting comprehensive SEO issue detection for last {days_back} days")
        
        all_issues = []
        
        # Run v1.1 detection tools
        detection_params = {
            "days_back": days_back,
            "min_impressions": 50,
            "ctr_threshold_multiplier": 0.5
        }
        
        # Enhanced Low CTR Detection
        try:
            low_ctr_tool = EnhancedLowCTRDetectionTool()
            low_ctr_issues = low_ctr_tool._run(**detection_params)
            all_issues.extend(low_ctr_issues)
            logger.info(f"Found {len(low_ctr_issues)} low CTR issues")
        except Exception as e:
            logger.error(f"Error in low CTR detection: {e}")
        
        # Content Gap Detection
        try:
            gap_tool = ContentGapDetectionTool()
            gap_issues = gap_tool._run(
                days_back=days_back,
                min_impressions=10,
                min_position=10
            )
            all_issues.extend(gap_issues)
            logger.info(f"Found {len(gap_issues)} content gap issues")
        except Exception as e:
            logger.error(f"Error in content gap detection: {e}")
        
        # Duplicate Intent Detection
        try:
            duplicate_tool = DuplicateIntentDetectionTool()
            duplicate_issues = duplicate_tool._run(
                days_back=days_back,
                min_common_queries=3
            )
            all_issues.extend(duplicate_issues)
            logger.info(f"Found {len(duplicate_issues)} duplicate intent issues")
        except Exception as e:
            logger.error(f"Error in duplicate intent detection: {e}")
        
        # Indexing Problem Detection
        try:
            indexing_tool = IndexingProblemDetectionTool()
            indexing_issues = indexing_tool._run(check_coverage=True)
            all_issues.extend(indexing_issues)
            logger.info(f"Found {len(indexing_issues)} indexing issues")
        except Exception as e:
            logger.error(f"Error in indexing detection: {e}")
        
        # Poor Ranking Detection (legacy)
        try:
            poor_ranking_tool = PoorRankingDetectionTool()
            poor_ranking_issues = poor_ranking_tool._run(days_back=days_back)
            all_issues.extend(poor_ranking_issues)
            logger.info(f"Found {len(poor_ranking_issues)} poor ranking issues")
        except Exception as e:
            logger.error(f"Error in poor ranking detection: {e}")
        
        # Zero Traffic Detection (legacy)
        try:
            zero_traffic_tool = ZeroTrafficDetectionTool()
            zero_traffic_issues = zero_traffic_tool._run(days_back=days_back)
            all_issues.extend(zero_traffic_issues)
            logger.info(f"Found {len(zero_traffic_issues)} zero traffic issues")
        except Exception as e:
            logger.error(f"Error in zero traffic detection: {e}")
        
        # Sort by priority score (handle None values)
        all_issues.sort(key=lambda x: getattr(x, 'priority_score', None) or 50, reverse=True)
        
        logger.info(f"Detected {len(all_issues)} total SEO issues")
        return all_issues
    
    def create_optimization_plan(self, issue: SEOIssue) -> OptimizationPlan:
        """Create v1.1 optimization plan based on issue type"""
        
        # Define action mapping for each issue type
        action_mapping = {
            SEOIssueType.LOW_CTR: [
                OptimizationAction.REWRITE_TITLE,
                OptimizationAction.REWRITE_META,
                OptimizationAction.ADD_SCHEMA
            ],
            SEOIssueType.CONTENT_GAP: [
                OptimizationAction.ADD_CONTENT_SECTIONS,
                OptimizationAction.EXPAND_CONTENT,
                OptimizationAction.ADD_FAQ
            ],
            SEOIssueType.DUPLICATE_INTENT: [
                OptimizationAction.SET_CANONICAL,
                OptimizationAction.MERGE_PAGES,
                OptimizationAction.REWRITE_CONTENT
            ],
            SEOIssueType.INDEXING_PROBLEM: [
                OptimizationAction.FIX_INDEXING,
                OptimizationAction.UPDATE_SITEMAP,
                OptimizationAction.ADD_INTERNAL_LINKS
            ],
            SEOIssueType.POOR_RANKING: [
                OptimizationAction.ADD_INTERNAL_LINKS,
                OptimizationAction.EXPAND_CONTENT,
                OptimizationAction.REWRITE_TITLE
            ],
            SEOIssueType.ZERO_TRAFFIC: [
                OptimizationAction.REWRITE_CONTENT,
                OptimizationAction.REWRITE_TITLE,
                OptimizationAction.REWRITE_META
            ]
        }
        
        # Get actions for this issue type
        actions = action_mapping.get(issue.issue_type, [
            OptimizationAction.REWRITE_TITLE,
            OptimizationAction.REWRITE_META
        ])
        
        # Determine priority based on priority score (handle None values)
        score = issue.priority_score or 50  # Default to 50 if None
        priority = 10 if score > 80 else 7 if score > 50 else 5
        
        # Determine impact
        impact = "high" if score > 70 else "medium" if score > 40 else "low"
        
        # Generate detailed reasoning
        reasoning = self._generate_plan_reasoning(issue)
        
        return OptimizationPlan(
            issue_id=issue.id,
            url=issue.url,
            actions=actions,
            reasoning=reasoning,
            priority=priority,
            estimated_impact=impact,
            action_details={
                "issue_type": issue.issue_type,
                "priority_score": issue.priority_score,
                "gap_queries": getattr(issue, 'gap_queries', []),
                "competing_urls": getattr(issue, 'competing_urls', [])
            }
        )
    
    def _generate_plan_reasoning(self, issue: SEOIssue) -> str:
        """Generate detailed reasoning for optimization plan"""
        
        reasoning_templates = {
            SEOIssueType.LOW_CTR: (
                f"CTR optimization needed: Current {issue.metrics.ctr:.1%} at position "
                f"{issue.metrics.position:.1f} is significantly below expected. "
                f"Title/meta rewrite with emotional triggers and keyword optimization will increase clicks."
            ),
            SEOIssueType.CONTENT_GAP: (
                f"Content gap identified: {len(getattr(issue, 'gap_queries', []))} queries "
                f"showing impressions but no clicks. Adding targeted H2/H3 sections will capture this traffic."
            ),
            SEOIssueType.DUPLICATE_INTENT: (
                f"Keyword cannibalization detected: Competing with {len(getattr(issue, 'competing_urls', []))} "
                f"other pages. Canonical strategy will consolidate ranking signals."
            ),
            SEOIssueType.INDEXING_PROBLEM: (
                f"Indexing issue: {issue.metrics.index_coverage_state}. "
                f"Technical fixes required to ensure proper crawling and indexing."
            ),
            SEOIssueType.POOR_RANKING: (
                f"Ranking improvement needed: Position {issue.metrics.position:.1f} despite "
                f"{issue.metrics.impressions} impressions. Internal linking will boost authority."
            ),
            SEOIssueType.ZERO_TRAFFIC: (
                f"Zero traffic issue: {issue.metrics.impressions} impressions but no clicks. "
                f"Content likely off-intent or outdated. Complete rewrite recommended."
            )
        }
        
        return reasoning_templates.get(
            issue.issue_type,
            f"Standard optimization for {issue.issue_type} issue"
        )
    
    def execute_optimization_plan(self, plan: OptimizationPlan, issue: SEOIssue) -> OptimizationLog:
        """Execute v1.1 optimization plan with issue context"""
        logger.info(f"Executing optimization plan for {plan.url}")
        
        optimization_log = OptimizationLog(
            id=f"opt_{datetime.now().timestamp()}",
            url=plan.url,
            issue_id=plan.issue_id,
            plan=plan
        )
        
        try:
            # Get current page content
            content = self.content_analyzer.fetch_page_content(plan.url)
            current_title = content.get('title', 'Current Title')
            current_meta = content.get('meta_description', 'Current meta description')
            current_content = content.get('content', '')
            
            # Get site structure for internal linking
            site_urls = self._get_site_urls()
            
            # Execute each action
            for action in plan.actions:
                try:
                    if action == OptimizationAction.REWRITE_TITLE and issue.issue_type == SEOIssueType.LOW_CTR:
                        tool = self.action_tools[SEOIssueType.LOW_CTR]
                        results = tool._run(
                            url=plan.url,
                            issue=issue,
                            current_title=current_title,
                            current_meta=current_meta
                        )
                        optimization_log.results.extend(results if isinstance(results, list) else [results])
                        
                    elif action == OptimizationAction.ADD_CONTENT_SECTIONS and issue.issue_type == SEOIssueType.CONTENT_GAP:
                        tool = self.action_tools[SEOIssueType.CONTENT_GAP]
                        result = tool._run(
                            url=plan.url,
                            issue=issue,
                            current_content=current_content
                        )
                        optimization_log.results.append(result)
                        
                    elif action == OptimizationAction.SET_CANONICAL and issue.issue_type == SEOIssueType.DUPLICATE_INTENT:
                        tool = self.action_tools[SEOIssueType.DUPLICATE_INTENT]
                        primary_url = issue.competing_urls[0] if issue.competing_urls else plan.url
                        result = tool._run(
                            issue=issue,
                            primary_url=primary_url
                        )
                        optimization_log.results.append(result)
                        
                    elif action == OptimizationAction.FIX_INDEXING and issue.issue_type == SEOIssueType.INDEXING_PROBLEM:
                        tool = self.action_tools[SEOIssueType.INDEXING_PROBLEM]
                        result = tool._run(
                            url=plan.url,
                            issue=issue
                        )
                        optimization_log.results.append(result)
                        
                    elif action == OptimizationAction.ADD_INTERNAL_LINKS and issue.issue_type == SEOIssueType.POOR_RANKING:
                        tool = self.action_tools[SEOIssueType.POOR_RANKING]
                        result = tool._run(
                            url=plan.url,
                            issue=issue,
                            site_structure=site_urls
                        )
                        optimization_log.results.append(result)
                        
                    elif action == OptimizationAction.REWRITE_CONTENT and issue.issue_type == SEOIssueType.ZERO_TRAFFIC:
                        tool = self.action_tools[SEOIssueType.ZERO_TRAFFIC]
                        result = tool._run(
                            url=plan.url,
                            issue=issue,
                            current_content=current_content
                        )
                        optimization_log.results.append(result)
                        
                    else:
                        # Fallback to generic action
                        result = ActionResult(
                            action=action,
                            status=ActionStatus.COMPLETED,
                            old_value=None,
                            new_value=None,
                            reasoning=f"Executed {action} successfully"
                        )
                        optimization_log.results.append(result)
                        
                except Exception as e:
                    logger.error(f"Error executing action {action}: {e}")
                    optimization_log.results.append(
                        ActionResult(
                            action=action,
                            status=ActionStatus.FAILED,
                            old_value=None,
                            new_value=None,
                            reasoning=f"Error: {str(e)}",
                            error_message=str(e)
                        )
                    )
            
            # Mark as completed
            optimization_log.completed_at = datetime.now()
            optimization_log.success = any(r.status == ActionStatus.COMPLETED for r in optimization_log.results)
            
            success_count = sum(1 for r in optimization_log.results if r.status == ActionStatus.COMPLETED)
            logger.info(f"Completed optimization plan for {plan.url}: {success_count}/{len(plan.actions)} actions successful")
            
        except Exception as e:
            logger.error(f"Error executing optimization plan: {e}")
            optimization_log.completed_at = datetime.now()
            optimization_log.success = False
        
        return optimization_log
    
    def _get_site_urls(self) -> List[str]:
        """Get list of site URLs for internal linking"""
        try:
            # Get top pages from GSC
            end_date = datetime.now()
            start_date = end_date - timedelta(days=30)
            
            metrics = self.gsc_client.get_page_metrics(
                start_date=start_date,
                end_date=end_date
            )
            
            return [m.url for m in metrics[:50]]  # Top 50 URLs
        except Exception as e:
            logger.error(f"Error getting site URLs: {e}")
            return []
    
    def run_full_optimization_cycle(self) -> Dict[str, Any]:
        """Run complete v1.1 optimization cycle"""
        logger.info("Starting SEO Agent v1.1 full optimization cycle")
        
        # Step 1: Detect all issues
        issues = self.detect_all_issues()
        
        # Step 2: Create optimization plans
        plans = []
        for issue in issues[:settings.optimization_batch_size]:
            plan = self.create_optimization_plan(issue)
            plans.append((plan, issue))
        
        # Step 3: Execute plans
        logs = []
        for plan, issue in plans:
            log = self.execute_optimization_plan(plan, issue)
            logs.append(log)
        
        # Generate summary
        summary = {
            "version": "1.1",
            "total_issues": len(issues),
            "plans_created": len(plans),
            "plans_executed": len(logs),
            "success_rate": sum(1 for log in logs if log.success) / len(logs) if logs else 0,
            "top_issues": [
                {
                    "url": issue.url,
                    "type": issue.issue_type,
                    "priority_score": getattr(issue, 'priority_score', 0),
                    "description": issue.description
                }
                for issue in issues[:5]
            ]
        }
        
        logger.info(f"Completed v1.1 optimization cycle: {len(logs)} plans executed")
        return summary


# Export the v1.1 agent
__all__ = ['SEOAgentV11']