from datetime import datetime
from typing import Optional, List, Dict, Any
from pydantic import BaseModel, Field
from enum import Enum


class SEOIssueType(str, Enum):
    LOW_CTR = "low_ctr"
    POOR_RANKING = "poor_ranking"
    ZERO_TRAFFIC = "zero_traffic"
    CONTENT_GAP = "content_gap"
    DUPLICATE_INTENT = "duplicate_intent"
    INDEXING_PROBLEM = "indexing_problem"
    LOW_IMPRESSIONS = "low_impressions"  # legacy
    NOT_INDEXED = "not_indexed"  # legacy
    DUPLICATE_CONTENT = "duplicate_content"  # legacy
    TECHNICAL_ISSUE = "technical_issue"  # legacy


class OptimizationAction(str, Enum):
    # Title/Meta optimizations
    REWRITE_TITLE = "rewrite_title"
    REWRITE_META = "rewrite_meta"
    
    # Content optimizations
    EXPAND_CONTENT = "expand_content"
    ADD_FAQ = "add_faq"
    ADD_SCHEMA = "add_schema"
    REWRITE_CONTENT = "rewrite_content"
    ADD_CONTENT_SECTIONS = "add_content_sections"
    
    # Technical optimizations
    FIX_INTERNAL_LINKS = "fix_internal_links"
    ADD_INTERNAL_LINKS = "add_internal_links"
    MERGE_PAGES = "merge_pages"
    SET_CANONICAL = "set_canonical"
    FIX_INDEXING = "fix_indexing"
    UPDATE_SITEMAP = "update_sitemap"
    SUBMIT_REINDEX = "submit_reindex"


class ActionStatus(str, Enum):
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    FAILED = "failed"
    MONITORING = "monitoring"


class QueryData(BaseModel):
    query: str
    clicks: int = 0
    impressions: int = 0
    ctr: float = 0.0
    position: float = 0.0


class GSCMetrics(BaseModel):
    url: str
    clicks: int = 0
    impressions: int = 0
    ctr: float = 0.0
    position: float = 0.0
    date: datetime
    queries: List[str] = []  # Simple query list for backward compatibility
    query_data: List[QueryData] = []  # Detailed query data for v1.1
    device: Optional[str] = None
    country: Optional[str] = None
    index_coverage_state: Optional[str] = None


class IndexStatus(BaseModel):
    url: str
    coverage_state: str
    crawl_time: Optional[datetime] = None
    last_crawl_time: Optional[datetime] = None
    robots_txt_state: Optional[str] = None
    indexing_state: Optional[str] = None
    page_fetch_state: Optional[str] = None


class SEOIssue(BaseModel):
    id: Optional[str] = None
    url: str
    issue_type: SEOIssueType
    severity: str = Field(..., description="high, medium, low")
    description: str
    metrics: GSCMetrics
    detected_at: datetime = Field(default_factory=datetime.now)
    resolved_at: Optional[datetime] = None
    priority_score: Optional[float] = Field(None, description="Estimated traffic opportunity 0-100")
    gap_queries: List[str] = []  # For content gap issues
    competing_urls: List[str] = []  # For duplicate intent issues
    
    
class OptimizationPlan(BaseModel):
    issue_id: str
    url: str
    actions: List[OptimizationAction]
    reasoning: str
    priority: int = Field(..., description="1-10, 10 being highest priority")
    estimated_impact: str = Field(..., description="high, medium, low")
    action_details: Dict[str, Any] = {}  # Specific details per action type
    

class ActionResult(BaseModel):
    action: OptimizationAction
    status: ActionStatus
    old_value: Optional[str] = None
    new_value: Optional[str] = None
    reasoning: str
    executed_at: datetime = Field(default_factory=datetime.now)
    error_message: Optional[str] = None


class OptimizationLog(BaseModel):
    id: Optional[str] = None
    url: str
    issue_id: str
    plan: OptimizationPlan
    results: List[ActionResult] = []
    created_at: datetime = Field(default_factory=datetime.now)
    completed_at: Optional[datetime] = None
    success: bool = False
    

class MonitoringResult(BaseModel):
    url: str
    optimization_id: str
    metrics_before: GSCMetrics
    metrics_after: GSCMetrics
    improvement_percentage: Dict[str, float]
    success: bool
    checked_at: datetime = Field(default_factory=datetime.now)
    notes: Optional[str] = None


class ContentOptimization(BaseModel):
    original_title: str
    optimized_title: str
    original_meta: str
    optimized_meta: str
    content_additions: List[str] = []
    schema_markup: Optional[Dict[str, Any]] = None
    internal_links: List[str] = []
    reasoning: str