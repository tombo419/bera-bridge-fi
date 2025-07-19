"""
Enhanced SEO Detection Tools v1.1
Implements sophisticated detection rules for underperforming pages
"""

from typing import List, Dict, Any, Optional, Tuple
from langchain.tools import BaseTool
from langchain.pydantic_v1 import BaseModel, Field
from loguru import logger
from datetime import datetime, timedelta
from collections import defaultdict

from models.schemas import SEOIssue, SEOIssueType, GSCMetrics, QueryData
from integrations.gsc_client import GSCClient
from config.settings import settings


class CTRBenchmarks:
    """Expected CTR benchmarks by position"""
    EXPECTED_CTR = {
        1: 0.31,   # 31% CTR for position 1
        2: 0.24,   # 24% CTR for position 2
        3: 0.18,   # 18% CTR for position 3
        4: 0.13,   # 13% CTR for position 4
        5: 0.09,   # 9% CTR for position 5
        6: 0.06,   # 6% CTR for position 6-10
        7: 0.04,
        8: 0.03,
        9: 0.03,
        10: 0.03,
        11: 0.02,  # 2% CTR for position 11-20
        20: 0.01   # 1% CTR for position 20+
    }
    
    @classmethod
    def get_expected_ctr(cls, position: float) -> float:
        """Get expected CTR for a given position"""
        pos = int(position)
        if pos <= 0:
            return 0.0
        elif pos <= 5:
            return cls.EXPECTED_CTR.get(pos, 0.09)
        elif pos <= 10:
            return cls.EXPECTED_CTR.get(6, 0.06)
        elif pos <= 20:
            return cls.EXPECTED_CTR.get(11, 0.02)
        else:
            return cls.EXPECTED_CTR.get(20, 0.01)
    
    @classmethod
    def is_ctr_below_expected(cls, ctr: float, position: float, threshold: float = 0.5) -> bool:
        """Check if CTR is significantly below expected (default: 50% below expected)"""
        expected_ctr = cls.get_expected_ctr(position)
        return ctr < (expected_ctr * threshold)


class EnhancedLowCTRDetectionInput(BaseModel):
    days_back: int = Field(default=30, description="Number of days to analyze")
    min_impressions: int = Field(default=50, description="Minimum impressions threshold")
    ctr_threshold_multiplier: float = Field(default=0.5, description="CTR must be this % of expected")


class EnhancedLowCTRDetectionTool(BaseTool):
    name = "detect_low_ctr_v11"
    description = "Detect pages with CTR well below expected for their ranking position"
    args_schema = EnhancedLowCTRDetectionInput
    
    def __init__(self):
        super().__init__()
    
    def _calculate_priority_score(self, metrics: GSCMetrics) -> float:
        """Calculate priority score based on traffic opportunity"""
        expected_ctr = CTRBenchmarks.get_expected_ctr(metrics.position)
        potential_clicks = metrics.impressions * expected_ctr
        current_clicks = metrics.clicks
        missed_clicks = max(0, potential_clicks - current_clicks)
        
        # Score based on missed traffic opportunity (0-100)
        score = min(100, (missed_clicks / 100) * 20)  # Every 100 missed clicks = 20 points
        
        # Boost score for high-impression pages
        if metrics.impressions > 1000:
            score *= 1.5
        elif metrics.impressions > 500:
            score *= 1.2
            
        # Boost score for top positions
        if metrics.position <= 5:
            score *= 1.3
        elif metrics.position <= 10:
            score *= 1.1
            
        return min(100, score)
    
    def _run(
        self, 
        days_back: int = 30,
        min_impressions: int = 50,
        ctr_threshold_multiplier: float = 0.5
    ) -> List[SEOIssue]:
        try:
            gsc_client = GSCClient()
            end_date = datetime.now()
            start_date = end_date - timedelta(days=days_back)
            
            # Get metrics with query data
            metrics_list = gsc_client.get_search_analytics(
                start_date=start_date,
                end_date=end_date,
                dimensions=['page', 'query']
            )
            
            # Aggregate by URL
            url_metrics = defaultdict(lambda: {
                'clicks': 0, 'impressions': 0, 'positions': [], 'queries': []
            })
            
            for metric in metrics_list:
                data = url_metrics[metric.url]
                data['clicks'] += metric.clicks
                data['impressions'] += metric.impressions
                data['positions'].append(metric.position * metric.impressions)
                if metric.queries:
                    data['queries'].extend(metric.queries)
            
            issues = []
            for url, data in url_metrics.items():
                if data['impressions'] < min_impressions:
                    continue
                    
                avg_position = sum(data['positions']) / data['impressions']
                ctr = data['clicks'] / data['impressions'] if data['impressions'] > 0 else 0
                
                # Check if CTR is below expected
                if CTRBenchmarks.is_ctr_below_expected(ctr, avg_position, ctr_threshold_multiplier):
                    expected_ctr = CTRBenchmarks.get_expected_ctr(avg_position)
                    
                    # Create GSCMetrics object
                    gsc_metrics = GSCMetrics(
                        url=url,
                        clicks=data['clicks'],
                        impressions=data['impressions'],
                        ctr=ctr,
                        position=avg_position,
                        date=end_date,
                        queries=list(set(data['queries']))[:10]  # Top 10 unique queries
                    )
                    
                    priority_score = self._calculate_priority_score(gsc_metrics)
                    
                    issue = SEOIssue(
                        id=f"issue_{datetime.now().timestamp()}_{url[:50]}",
                        url=url,
                        issue_type=SEOIssueType.LOW_CTR,
                        severity="high" if priority_score > 70 else "medium" if priority_score > 40 else "low",
                        description=f"Low CTR - {ctr:.1%} CTR at position {avg_position:.1f} (expected ~{expected_ctr:.1%})",
                        metrics=gsc_metrics,
                        priority_score=priority_score
                    )
                    issues.append(issue)
            
            logger.info(f"Found {len(issues)} low CTR issues")
            return sorted(issues, key=lambda x: x.priority_score, reverse=True)
            
        except Exception as e:
            logger.error(f"Error detecting low CTR issues: {e}")
            return []


class ContentGapDetectionInput(BaseModel):
    days_back: int = Field(default=30, description="Number of days to analyze")
    min_impressions: int = Field(default=10, description="Minimum impressions for gap queries")
    min_position: float = Field(default=10, description="Minimum position to consider as gap")


class ContentGapDetectionTool(BaseTool):
    name = "detect_content_gaps_v11"
    description = "Detect queries where page shows impressions but no clicks and ranks poorly"
    args_schema = ContentGapDetectionInput
    
    def __init__(self):
        super().__init__()
    
    def _run(
        self,
        days_back: int = 30,
        min_impressions: int = 10,
        min_position: float = 10
    ) -> List[SEOIssue]:
        try:
            gsc_client = GSCClient()
            end_date = datetime.now()
            start_date = end_date - timedelta(days=days_back)
            
            # Get query-level data
            metrics_list = gsc_client.get_search_analytics(
                start_date=start_date,
                end_date=end_date,
                dimensions=['page', 'query']
            )
            
            # Group by URL and find gap queries
            url_gaps = defaultdict(lambda: {
                'gap_queries': [],
                'total_metrics': {'clicks': 0, 'impressions': 0, 'positions': []}
            })
            
            for metric in metrics_list:
                # Check if this is a gap query
                if (metric.impressions >= min_impressions and 
                    metric.clicks == 0 and 
                    metric.position > min_position):
                    
                    url_gaps[metric.url]['gap_queries'].append({
                        'query': metric.queries[0] if metric.queries else 'Unknown',
                        'impressions': metric.impressions,
                        'position': metric.position
                    })
                
                # Aggregate total metrics
                data = url_gaps[metric.url]['total_metrics']
                data['clicks'] += metric.clicks
                data['impressions'] += metric.impressions
                data['positions'].append(metric.position * metric.impressions)
            
            issues = []
            for url, data in url_gaps.items():
                if not data['gap_queries']:
                    continue
                
                gap_queries = sorted(data['gap_queries'], 
                                   key=lambda x: x['impressions'], 
                                   reverse=True)[:10]
                
                # Calculate metrics
                total_gap_impressions = sum(q['impressions'] for q in gap_queries)
                avg_gap_position = sum(q['position'] * q['impressions'] for q in gap_queries) / total_gap_impressions
                
                # Overall metrics
                total_metrics = data['total_metrics']
                if total_metrics['impressions'] > 0:
                    avg_position = sum(total_metrics['positions']) / total_metrics['impressions']
                    ctr = total_metrics['clicks'] / total_metrics['impressions']
                else:
                    avg_position = 0
                    ctr = 0
                
                # Create GSCMetrics
                gsc_metrics = GSCMetrics(
                    url=url,
                    clicks=total_metrics['clicks'],
                    impressions=total_metrics['impressions'],
                    ctr=ctr,
                    position=avg_position,
                    date=end_date,
                    queries=[q['query'] for q in gap_queries]
                )
                
                # Priority score based on gap opportunity
                priority_score = min(100, (total_gap_impressions / 50) * 10)  # Every 50 impressions = 10 points
                
                issue = SEOIssue(
                    id=f"issue_{datetime.now().timestamp()}_{url[:50]}",
                    url=url,
                    issue_type=SEOIssueType.CONTENT_GAP,
                    severity="high" if priority_score > 60 else "medium" if priority_score > 30 else "low",
                    description=f"Content gaps - {len(gap_queries)} queries with {total_gap_impressions} impressions but 0 clicks",
                    metrics=gsc_metrics,
                    priority_score=priority_score,
                    gap_queries=[q['query'] for q in gap_queries]
                )
                issues.append(issue)
            
            logger.info(f"Found {len(issues)} content gap issues")
            return sorted(issues, key=lambda x: x.priority_score, reverse=True)
            
        except Exception as e:
            logger.error(f"Error detecting content gaps: {e}")
            return []


class DuplicateIntentDetectionInput(BaseModel):
    days_back: int = Field(default=30, description="Number of days to analyze")
    min_common_queries: int = Field(default=3, description="Minimum common queries to flag cannibalization")


class DuplicateIntentDetectionTool(BaseTool):
    name = "detect_duplicate_intent_v11"
    description = "Detect keyword cannibalization where multiple URLs compete for same queries"
    args_schema = DuplicateIntentDetectionInput
    
    def __init__(self):
        super().__init__()
    
    def _run(
        self,
        days_back: int = 30,
        min_common_queries: int = 3
    ) -> List[SEOIssue]:
        try:
            gsc_client = GSCClient()
            end_date = datetime.now()
            start_date = end_date - timedelta(days=days_back)
            
            # Get query-URL data
            metrics_list = gsc_client.get_search_analytics(
                start_date=start_date,
                end_date=end_date,
                dimensions=['query', 'page']
            )
            
            # Map queries to URLs
            query_to_urls = defaultdict(list)
            url_metrics = defaultdict(lambda: {'clicks': 0, 'impressions': 0})
            
            for metric in metrics_list:
                if metric.queries:
                    query = metric.queries[0]
                    query_to_urls[query].append({
                        'url': metric.url,
                        'clicks': metric.clicks,
                        'impressions': metric.impressions,
                        'position': metric.position
                    })
                    url_metrics[metric.url]['clicks'] += metric.clicks
                    url_metrics[metric.url]['impressions'] += metric.impressions
            
            # Find cannibalization groups
            cannibalization_groups = defaultdict(set)
            query_groups = defaultdict(list)
            
            for query, urls_data in query_to_urls.items():
                if len(urls_data) >= 2:
                    # Multiple URLs ranking for same query
                    urls = [data['url'] for data in urls_data]
                    for i, url1 in enumerate(urls):
                        for url2 in urls[i+1:]:
                            pair = tuple(sorted([url1, url2]))
                            cannibalization_groups[pair].add(query)
                            query_groups[pair].extend(urls_data)
            
            issues = []
            for (url1, url2), common_queries in cannibalization_groups.items():
                if len(common_queries) < min_common_queries:
                    continue
                
                # Determine which URL performs better
                url1_metrics = url_metrics[url1]
                url2_metrics = url_metrics[url2]
                
                # Primary URL is the one with more clicks
                if url1_metrics['clicks'] >= url2_metrics['clicks']:
                    primary_url = url1
                    secondary_url = url2
                    primary_metrics = url1_metrics
                else:
                    primary_url = url2
                    secondary_url = url1
                    primary_metrics = url2_metrics
                
                # Create issue for secondary URL
                gsc_metrics = GSCMetrics(
                    url=secondary_url,
                    clicks=url_metrics[secondary_url]['clicks'],
                    impressions=url_metrics[secondary_url]['impressions'],
                    ctr=url_metrics[secondary_url]['clicks'] / url_metrics[secondary_url]['impressions'] if url_metrics[secondary_url]['impressions'] > 0 else 0,
                    position=20.0,  # Placeholder
                    date=end_date,
                    queries=list(common_queries)[:10]
                )
                
                # Priority based on impressions lost
                priority_score = min(100, (url_metrics[secondary_url]['impressions'] / 100) * 5)
                
                issue = SEOIssue(
                    id=f"issue_{datetime.now().timestamp()}_{secondary_url[:50]}",
                    url=secondary_url,
                    issue_type=SEOIssueType.DUPLICATE_INTENT,
                    severity="medium",
                    description=f"Keyword cannibalization - competing with {primary_url} for {len(common_queries)} queries",
                    metrics=gsc_metrics,
                    priority_score=priority_score,
                    competing_urls=[primary_url]
                )
                issues.append(issue)
            
            logger.info(f"Found {len(issues)} duplicate intent issues")
            return sorted(issues, key=lambda x: x.priority_score, reverse=True)
            
        except Exception as e:
            logger.error(f"Error detecting duplicate intent: {e}")
            return []


class IndexingProblemDetectionInput(BaseModel):
    check_coverage: bool = Field(default=True, description="Check index coverage status")


class IndexingProblemDetectionTool(BaseTool):
    name = "detect_indexing_problems_v11"
    description = "Detect pages with indexing issues"
    args_schema = IndexingProblemDetectionInput
    
    def __init__(self):
        super().__init__()
    
    def _run(self, check_coverage: bool = True) -> List[SEOIssue]:
        try:
            gsc_client = GSCClient()
            issues = []
            
            # Get pages with impressions to check their indexing status
            end_date = datetime.now()
            start_date = end_date - timedelta(days=7)
            
            metrics_list = gsc_client.get_page_metrics(
                start_date=start_date,
                end_date=end_date
            )
            
            # Check index status for each URL
            for metric in metrics_list[:50]:  # Limit to avoid API quotas
                if not check_coverage:
                    continue
                    
                index_status = gsc_client.inspect_url(metric.url)
                if index_status and index_status.coverage_state not in ['Submitted and indexed', 'Indexed, not submitted in sitemap']:
                    
                    gsc_metrics = GSCMetrics(
                        url=metric.url,
                        clicks=metric.clicks,
                        impressions=metric.impressions,
                        ctr=metric.ctr,
                        position=metric.position,
                        date=metric.date,
                        index_coverage_state=index_status.coverage_state
                    )
                    
                    priority_score = 80 if index_status.coverage_state == 'URL is not on Google' else 60
                    
                    issue = SEOIssue(
                        id=f"issue_{datetime.now().timestamp()}_{metric.url[:50]}",
                        url=metric.url,
                        issue_type=SEOIssueType.INDEXING_PROBLEM,
                        severity="high",
                        description=f"Indexing issue - {index_status.coverage_state}",
                        metrics=gsc_metrics,
                        priority_score=priority_score
                    )
                    issues.append(issue)
            
            logger.info(f"Found {len(issues)} indexing issues")
            return sorted(issues, key=lambda x: x.priority_score, reverse=True)
            
        except Exception as e:
            logger.error(f"Error detecting indexing problems: {e}")
            return []


# Export all v1.1 detection tools
__all__ = [
    'EnhancedLowCTRDetectionTool',
    'ContentGapDetectionTool', 
    'DuplicateIntentDetectionTool',
    'IndexingProblemDetectionTool',
    'CTRBenchmarks'
]