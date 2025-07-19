from datetime import datetime, timedelta
from typing import List, Dict, Any, Optional
from langchain.tools import BaseTool
from langchain.pydantic_v1 import BaseModel, Field
from loguru import logger

from integrations.gsc_client import GSCClient
from models.schemas import SEOIssue, SEOIssueType, GSCMetrics
from config.settings import settings


class LowCTRDetectionInput(BaseModel):
    days_back: int = Field(default=30, description="Number of days to look back for data")
    min_impressions: int = Field(default=100, description="Minimum impressions threshold")


class LowCTRDetectionTool(BaseTool):
    name = "detect_low_ctr_pages"
    description = "Detect pages with high impressions but low click-through rate"
    args_schema = LowCTRDetectionInput
    
    def _run(self, days_back: int = 30, min_impressions: int = 100) -> List[SEOIssue]:
        gsc = GSCClient()
        end_date = datetime.now()
        start_date = end_date - timedelta(days=days_back)
        
        metrics = gsc.get_low_ctr_pages(start_date, end_date, min_impressions)
        
        issues = []
        for metric in metrics:
            issue = SEOIssue(
                url=metric.url,
                issue_type=SEOIssueType.LOW_CTR,
                severity="high" if metric.impressions > 1000 else "medium",
                description=f"Page has {metric.impressions} impressions but only {metric.ctr:.2%} CTR",
                metrics=metric
            )
            issues.append(issue)
            
        logger.info(f"Found {len(issues)} low CTR issues")
        return issues


class PoorRankingDetectionInput(BaseModel):
    days_back: int = Field(default=30, description="Number of days to look back for data")
    min_impressions: int = Field(default=50, description="Minimum impressions threshold")


class PoorRankingDetectionTool(BaseTool):
    name = "detect_poor_ranking_pages"
    description = "Detect pages ranking in positions 11-20 that could be optimized"
    args_schema = PoorRankingDetectionInput
    
    def _run(self, days_back: int = 30, min_impressions: int = 50) -> List[SEOIssue]:
        gsc = GSCClient()
        end_date = datetime.now()
        start_date = end_date - timedelta(days=days_back)
        
        metrics = gsc.get_poor_ranking_pages(start_date, end_date, min_impressions)
        
        issues = []
        for metric in metrics:
            # Calculate priority score based on impressions and position
            priority_score = min(100, (metric.impressions / 100) * 5)  # Every 100 impressions = 5 points
            if metric.position <= 15:
                priority_score *= 1.5  # Boost for pages closer to page 1
            
            issue = SEOIssue(
                id=f"issue_{datetime.now().timestamp()}_{metric.url[:50]}",
                url=metric.url,
                issue_type=SEOIssueType.POOR_RANKING,
                severity="medium" if metric.position <= 15 else "low",
                description=f"Page ranking at position {metric.position:.1f} with {metric.impressions} impressions",
                metrics=metric,
                priority_score=priority_score
            )
            issues.append(issue)
            
        logger.info(f"Found {len(issues)} poor ranking issues")
        return issues


class IndexStatusCheckInput(BaseModel):
    urls: List[str] = Field(description="List of URLs to check index status")


class IndexStatusCheckTool(BaseTool):
    name = "check_index_status"
    description = "Check the indexing status of specific URLs"
    args_schema = IndexStatusCheckInput
    
    def _run(self, urls: List[str]) -> List[SEOIssue]:
        gsc = GSCClient()
        issues = []
        
        for url in urls:
            status = gsc.inspect_url(url)
            if not status:
                continue
                
            if status.coverage_state in ['Excluded', 'Error', 'Valid with warnings']:
                issue = SEOIssue(
                    url=url,
                    issue_type=SEOIssueType.NOT_INDEXED,
                    severity="high" if status.coverage_state == 'Error' else "medium",
                    description=f"URL has coverage state: {status.coverage_state}",
                    metrics=GSCMetrics(url=url, date=datetime.now())
                )
                issues.append(issue)
                
        logger.info(f"Found {len(issues)} indexing issues from {len(urls)} URLs")
        return issues


class ZeroTrafficDetectionInput(BaseModel):
    days_back: int = Field(default=30, description="Number of days to look back for data")


class ZeroTrafficDetectionTool(BaseTool):
    name = "detect_zero_traffic_pages"
    description = "Detect pages with zero clicks but some impressions"
    args_schema = ZeroTrafficDetectionInput
    
    def _run(self, days_back: int = 30) -> List[SEOIssue]:
        gsc = GSCClient()
        end_date = datetime.now()
        start_date = end_date - timedelta(days=days_back)
        
        zero_traffic_urls = gsc.get_zero_traffic_pages(start_date, end_date)
        
        issues = []
        for url in zero_traffic_urls:
            # Calculate basic priority score for zero traffic (default: 30)
            priority_score = 30.0
            
            issue = SEOIssue(
                id=f"issue_{datetime.now().timestamp()}_{url[:50]}",
                url=url,
                issue_type=SEOIssueType.ZERO_TRAFFIC,
                severity="low",
                description=f"Page has impressions but zero clicks in last {days_back} days",
                metrics=GSCMetrics(url=url, date=datetime.now()),
                priority_score=priority_score
            )
            issues.append(issue)
            
        logger.info(f"Found {len(issues)} zero traffic issues")
        return issues


class ContentGapAnalysisInput(BaseModel):
    target_url: str = Field(description="URL to analyze for content gaps")
    days_back: int = Field(default=30, description="Number of days to look back for data")


class ContentGapAnalysisTool(BaseTool):
    name = "analyze_content_gaps"
    description = "Analyze queries that show the page but don't get clicks"
    args_schema = ContentGapAnalysisInput
    
    def _run(self, target_url: str, days_back: int = 30) -> Dict[str, Any]:
        gsc = GSCClient()
        end_date = datetime.now()
        start_date = end_date - timedelta(days=days_back)
        
        query_metrics = gsc.get_query_metrics(start_date, end_date, target_url)
        
        gap_queries = []
        for metric in query_metrics:
            if metric.impressions > 10 and metric.clicks == 0 and metric.position > 10:
                gap_queries.append({
                    'query': metric.queries[0] if metric.queries else 'unknown',
                    'impressions': metric.impressions,
                    'position': metric.position,
                    'opportunity_score': metric.impressions * (21 - metric.position)
                })
        
        # Sort by opportunity score
        gap_queries.sort(key=lambda x: x['opportunity_score'], reverse=True)
        
        return {
            'url': target_url,
            'total_gap_queries': len(gap_queries),
            'top_opportunities': gap_queries[:10],
            'potential_traffic': sum(q['impressions'] * 0.1 for q in gap_queries)
        }


class DuplicateContentDetectionInput(BaseModel):
    days_back: int = Field(default=30, description="Number of days to look back for data")


class DuplicateContentDetectionTool(BaseTool):
    name = "detect_duplicate_content"
    description = "Detect pages that might be competing for the same queries"
    args_schema = DuplicateContentDetectionInput
    
    def _run(self, days_back: int = 30) -> List[Dict[str, Any]]:
        gsc = GSCClient()
        end_date = datetime.now()
        start_date = end_date - timedelta(days=days_back)
        
        # Get all page metrics
        page_metrics = gsc.get_page_metrics(start_date, end_date)
        
        # Group by similar queries (this is a simplified approach)
        query_groups = {}
        for metric in page_metrics:
            queries = gsc.get_query_metrics(start_date, end_date, metric.url)
            for query_metric in queries:
                if query_metric.queries:
                    query = query_metric.queries[0]
                    if query not in query_groups:
                        query_groups[query] = []
                    query_groups[query].append({
                        'url': metric.url,
                        'position': query_metric.position,
                        'clicks': query_metric.clicks,
                        'impressions': query_metric.impressions
                    })
        
        # Find queries with multiple competing pages
        duplicates = []
        for query, pages in query_groups.items():
            if len(pages) > 1:
                # Sort by position (lower is better)
                pages.sort(key=lambda x: x['position'])
                duplicates.append({
                    'query': query,
                    'competing_pages': pages,
                    'cannibalization_score': len(pages) * sum(p['impressions'] for p in pages)
                })
        
        # Sort by cannibalization score
        duplicates.sort(key=lambda x: x['cannibalization_score'], reverse=True)
        
        return duplicates[:20]  # Return top 20 duplicate issues