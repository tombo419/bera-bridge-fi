from typing import List, Dict, Any, Optional
from langchain.agents import AgentExecutor, create_openai_tools_agent
from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate
from langchain.schema import HumanMessage, SystemMessage
from langchain.tools import Tool
from loguru import logger
from datetime import datetime

from config.settings import settings
from models.schemas import (
    SEOIssue, OptimizationPlan, OptimizationAction, ActionResult, 
    OptimizationLog, ContentOptimization
)
from tools.seo_detection_tools import (
    LowCTRDetectionTool, PoorRankingDetectionTool, IndexStatusCheckTool,
    ZeroTrafficDetectionTool, ContentGapAnalysisTool, DuplicateContentDetectionTool
)
from tools.seo_action_tools import (
    TitleOptimizationTool, MetaDescriptionOptimizationTool, ContentExpansionTool,
    FAQGenerationTool, SchemaMarkupTool, InternalLinkingTool
)


class SEOAgent:
    def __init__(self):
        self.llm = ChatOpenAI(
            model="gpt-4",
            temperature=0.3,
            api_key=settings.openai_api_key
        )
        
        # Initialize detection tools
        self.detection_tools = [
            LowCTRDetectionTool(),
            PoorRankingDetectionTool(),
            IndexStatusCheckTool(),
            ZeroTrafficDetectionTool(),
            ContentGapAnalysisTool(),
            DuplicateContentDetectionTool()
        ]
        
        # Initialize action tools
        self.action_tools = [
            TitleOptimizationTool(),
            MetaDescriptionOptimizationTool(),
            ContentExpansionTool(),
            FAQGenerationTool(),
            SchemaMarkupTool(),
            InternalLinkingTool()
        ]
        
        # Combine all tools
        self.all_tools = self.detection_tools + self.action_tools
        
        # Create agent executor
        self.agent_executor = self._create_agent()
        
    def _create_agent(self) -> AgentExecutor:
        """Create the main SEO agent executor"""
        system_prompt = """
        You are an expert SEO automation agent. Your goal is to identify and fix SEO issues to grow organic traffic.
        
        Your capabilities:
        1. Detect SEO issues: low CTR, poor rankings, indexing problems, zero traffic pages
        2. Analyze content gaps and duplicate content issues
        3. Generate optimized titles, meta descriptions, and content expansions
        4. Create FAQ sections and schema markup
        5. Suggest internal linking improvements
        
        Process:
        1. Always start by detecting issues using the detection tools
        2. Prioritize issues by potential impact (high impressions + fixable issues first)
        3. Create optimization plans with clear reasoning
        4. Execute optimizations using the action tools
        5. Log all actions and results for monitoring
        
        Focus on:
        - High-impact, low-effort optimizations first
        - Data-driven decisions based on GSC metrics
        - User intent and search behavior
        - Technical SEO best practices
        
        Be thorough but efficient. Prioritize actions that will drive the most traffic growth.
        """
        
        agent = create_openai_tools_agent(
            llm=self.llm,
            tools=self.all_tools,
            prompt=PromptTemplate.from_template(system_prompt + "\n\n{input}\n\n{agent_scratchpad}")
        )
        
        return AgentExecutor(
            agent=agent,
            tools=self.all_tools,
            verbose=True,
            handle_parsing_errors=True,
            max_iterations=10
        )
    
    def detect_all_issues(self, days_back: int = 30) -> List[SEOIssue]:
        """Detect all types of SEO issues"""
        logger.info(f"Starting comprehensive SEO issue detection for last {days_back} days")
        
        all_issues = []
        
        try:
            # Detect low CTR issues
            low_ctr_tool = LowCTRDetectionTool()
            low_ctr_issues = low_ctr_tool.run({"days_back": days_back, "min_impressions": 100})
            all_issues.extend(low_ctr_issues)
            
            # Detect poor ranking issues
            poor_ranking_tool = PoorRankingDetectionTool()
            poor_ranking_issues = poor_ranking_tool.run({"days_back": days_back, "min_impressions": 50})
            all_issues.extend(poor_ranking_issues)
            
            # Detect zero traffic issues
            zero_traffic_tool = ZeroTrafficDetectionTool()
            zero_traffic_issues = zero_traffic_tool.run({"days_back": days_back})
            all_issues.extend(zero_traffic_issues)
            
            logger.info(f"Detected {len(all_issues)} total SEO issues")
            
            # Sort by severity and potential impact
            all_issues.sort(key=lambda x: (
                x.severity == "high",
                x.metrics.impressions,
                x.metrics.clicks
            ), reverse=True)
            
            return all_issues
            
        except Exception as e:
            logger.error(f"Error detecting SEO issues: {e}")
            return []
    
    def create_optimization_plan(self, issues: List[SEOIssue]) -> List[OptimizationPlan]:
        """Create optimization plans for detected issues"""
        logger.info(f"Creating optimization plans for {len(issues)} issues")
        
        plans = []
        
        for issue in issues:
            try:
                # Determine appropriate actions based on issue type
                actions = self._determine_actions(issue)
                
                # Generate reasoning using LLM
                reasoning = self._generate_reasoning(issue, actions)
                
                # Calculate priority score
                priority = self._calculate_priority(issue)
                
                plan = OptimizationPlan(
                    issue_id=issue.id or f"issue_{datetime.now().timestamp()}",
                    url=issue.url,
                    actions=actions,
                    reasoning=reasoning,
                    priority=priority,
                    estimated_impact=self._estimate_impact(issue)
                )
                
                plans.append(plan)
                
            except Exception as e:
                logger.error(f"Error creating optimization plan for {issue.url}: {e}")
                continue
        
        # Sort plans by priority
        plans.sort(key=lambda x: x.priority, reverse=True)
        
        return plans
    
    def execute_optimization_plan(self, plan: OptimizationPlan) -> OptimizationLog:
        """Execute an optimization plan"""
        logger.info(f"Executing optimization plan for {plan.url}")
        
        log = OptimizationLog(
            url=plan.url,
            issue_id=plan.issue_id,
            plan=plan,
            results=[]
        )
        
        success_count = 0
        
        for action in plan.actions:
            try:
                result = self._execute_action(action, plan)
                log.results.append(result)
                
                if result.status == "completed":
                    success_count += 1
                    
            except Exception as e:
                logger.error(f"Error executing action {action} for {plan.url}: {e}")
                error_result = ActionResult(
                    action=action,
                    status="failed",
                    reasoning=f"Error occurred: {str(e)}",
                    error_message=str(e)
                )
                log.results.append(error_result)
        
        log.completed_at = datetime.now()
        log.success = success_count > 0
        
        logger.info(f"Completed optimization plan for {plan.url}: {success_count}/{len(plan.actions)} actions successful")
        
        return log
    
    def _determine_actions(self, issue: SEOIssue) -> List[OptimizationAction]:
        """Determine appropriate actions based on issue type"""
        actions = []
        
        if issue.issue_type == "low_ctr":
            actions.extend([
                OptimizationAction.REWRITE_TITLE,
                OptimizationAction.REWRITE_META
            ])
        elif issue.issue_type == "poor_ranking":
            actions.extend([
                OptimizationAction.EXPAND_CONTENT,
                OptimizationAction.ADD_FAQ,
                OptimizationAction.FIX_INTERNAL_LINKS
            ])
        elif issue.issue_type == "zero_traffic":
            actions.extend([
                OptimizationAction.REWRITE_TITLE,
                OptimizationAction.REWRITE_META,
                OptimizationAction.ADD_SCHEMA
            ])
        elif issue.issue_type == "not_indexed":
            actions.append(OptimizationAction.SUBMIT_REINDEX)
        
        return actions
    
    def _generate_reasoning(self, issue: SEOIssue, actions: List[OptimizationAction]) -> str:
        """Generate reasoning for optimization plan using LLM"""
        try:
            prompt = f"""
            Explain why these optimization actions are appropriate for this SEO issue:
            
            Issue: {issue.description}
            URL: {issue.url}
            Issue Type: {issue.issue_type}
            Severity: {issue.severity}
            Current metrics: {issue.metrics.clicks} clicks, {issue.metrics.impressions} impressions, {issue.metrics.ctr:.2%} CTR
            
            Planned actions: {', '.join(actions)}
            
            Provide a clear, concise explanation of why these actions will help improve organic traffic.
            """
            
            response = self.llm.invoke([HumanMessage(content=prompt)])
            return response.content
            
        except Exception as e:
            logger.error(f"Error generating reasoning: {e}")
            return f"Standard optimization approach for {issue.issue_type} issues"
    
    def _calculate_priority(self, issue: SEOIssue) -> int:
        """Calculate priority score (1-10) for an issue"""
        base_score = 5
        
        # Adjust based on severity
        if issue.severity == "high":
            base_score += 3
        elif issue.severity == "medium":
            base_score += 1
        
        # Adjust based on impressions (traffic potential)
        if issue.metrics.impressions > 1000:
            base_score += 2
        elif issue.metrics.impressions > 500:
            base_score += 1
        
        # Adjust based on current position (easier wins)
        if issue.metrics.position > 0:
            if issue.metrics.position <= 10:
                base_score += 1
            elif issue.metrics.position <= 20:
                base_score += 2
        
        return min(base_score, 10)
    
    def _estimate_impact(self, issue: SEOIssue) -> str:
        """Estimate the potential impact of fixing this issue"""
        if issue.metrics.impressions > 1000 and issue.metrics.ctr < 0.01:
            return "high"
        elif issue.metrics.impressions > 500 or 11 <= issue.metrics.position <= 20:
            return "medium"
        else:
            return "low"
    
    def _execute_action(self, action: OptimizationAction, plan: OptimizationPlan) -> ActionResult:
        """Execute a specific optimization action"""
        
        if action == OptimizationAction.REWRITE_TITLE:
            tool = TitleOptimizationTool()
            # This would need current title from page scraping
            return tool.run({
                "url": plan.url,
                "target_queries": ["example query"],  # Would come from GSC data
                "current_title": "Current Title",  # Would come from page scraping
                "current_ctr": 0.01,
                "avg_position": 15.0
            })
        
        elif action == OptimizationAction.REWRITE_META:
            tool = MetaDescriptionOptimizationTool()
            return tool.run({
                "url": plan.url,
                "target_queries": ["example query"],
                "current_meta": "Current meta description",
                "current_ctr": 0.01
            })
        
        elif action == OptimizationAction.ADD_FAQ:
            tool = FAQGenerationTool()
            return tool.run({
                "url": plan.url,
                "target_queries": ["example query"],
                "content_topic": "Content topic"
            })
        
        # Add other action implementations as needed
        
        return ActionResult(
            action=action,
            status="completed",
            reasoning=f"Executed {action} successfully"
        )
    
    def run_full_optimization_cycle(self, days_back: int = 30, max_issues: int = 10) -> List[OptimizationLog]:
        """Run a complete optimization cycle"""
        logger.info("Starting full SEO optimization cycle")
        
        # Step 1: Detect issues
        issues = self.detect_all_issues(days_back)
        
        # Step 2: Limit to manageable batch
        priority_issues = issues[:max_issues]
        
        # Step 3: Create optimization plans
        plans = self.create_optimization_plan(priority_issues)
        
        # Step 4: Execute plans
        logs = []
        for plan in plans:
            log = self.execute_optimization_plan(plan)
            logs.append(log)
        
        logger.info(f"Completed optimization cycle: {len(logs)} plans executed")
        
        return logs