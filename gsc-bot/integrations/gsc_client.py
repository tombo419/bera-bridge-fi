import os
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Any
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from loguru import logger
from config.settings import settings
from models.schemas import GSCMetrics, IndexStatus


class GSCClient:
    def __init__(self):
        self.credentials = service_account.Credentials.from_service_account_file(
            settings.google_application_credentials,
            scopes=['https://www.googleapis.com/auth/webmasters.readonly']
        )
        self.service = build('searchconsole', 'v1', credentials=self.credentials)
        self.site_url = settings.gsc_site_url
        
    def get_search_analytics(
        self,
        start_date: datetime,
        end_date: datetime,
        dimensions: List[str] = None,
        filters: List[Dict] = None,
        row_limit: int = 25000
    ) -> List[GSCMetrics]:
        """
        Fetch search analytics data from GSC API
        """
        if dimensions is None:
            dimensions = ['page', 'query']
            
        request = {
            'startDate': start_date.strftime('%Y-%m-%d'),
            'endDate': end_date.strftime('%Y-%m-%d'),
            'dimensions': dimensions,
            'rowLimit': row_limit
        }
        
        if filters:
            request['dimensionFilterGroups'] = [{'filters': filters}]
            
        try:
            response = self.service.searchanalytics().query(
                siteUrl=self.site_url,
                body=request
            ).execute()
            
            metrics = []
            for row in response.get('rows', []):
                page_url = row['keys'][0] if 'page' in dimensions else None
                query = row['keys'][1] if 'query' in dimensions and len(row['keys']) > 1 else None
                
                metric = GSCMetrics(
                    url=page_url or self.site_url,
                    clicks=row.get('clicks', 0),
                    impressions=row.get('impressions', 0),
                    ctr=row.get('ctr', 0.0),
                    position=row.get('position', 0.0),
                    date=end_date,
                    queries=[query] if query else []
                )
                metrics.append(metric)
                
            logger.info(f"Retrieved {len(metrics)} search analytics records")
            return metrics
            
        except HttpError as e:
            logger.error(f"Error fetching search analytics: {e}")
            return []
    
    def get_page_metrics(
        self,
        start_date: datetime,
        end_date: datetime,
        url_filter: Optional[str] = None
    ) -> List[GSCMetrics]:
        """
        Get page-level metrics aggregated by URL
        """
        filters = []
        if url_filter:
            filters.append({
                'dimension': 'page',
                'operator': 'contains',
                'expression': url_filter
            })
            
        return self.get_search_analytics(
            start_date=start_date,
            end_date=end_date,
            dimensions=['page'],
            filters=filters
        )
    
    def get_query_metrics(
        self,
        start_date: datetime,
        end_date: datetime,
        page_url: Optional[str] = None
    ) -> List[GSCMetrics]:
        """
        Get query-level metrics for a specific page
        """
        filters = []
        if page_url:
            filters.append({
                'dimension': 'page',
                'operator': 'equals',
                'expression': page_url
            })
            
        return self.get_search_analytics(
            start_date=start_date,
            end_date=end_date,
            dimensions=['query'],
            filters=filters
        )
    
    def inspect_url(self, url: str) -> Optional[IndexStatus]:
        """
        Inspect a specific URL for indexing status
        """
        try:
            request = {
                'inspectionUrl': url,
                'siteUrl': self.site_url
            }
            
            response = self.service.urlInspection().index().inspect(
                body=request
            ).execute()
            
            inspection_result = response.get('inspectionResult', {})
            index_status_result = inspection_result.get('indexStatusResult', {})
            
            return IndexStatus(
                url=url,
                coverage_state=index_status_result.get('coverageState', 'unknown'),
                crawl_time=self._parse_datetime(index_status_result.get('crawledAs')),
                last_crawl_time=self._parse_datetime(index_status_result.get('lastCrawlTime')),
                robots_txt_state=index_status_result.get('robotsTxtState'),
                indexing_state=index_status_result.get('indexingState'),
                page_fetch_state=index_status_result.get('pageFetchState')
            )
            
        except HttpError as e:
            logger.error(f"Error inspecting URL {url}: {e}")
            return None
    
    def get_sitemaps(self) -> List[Dict[str, Any]]:
        """
        Get submitted sitemaps for the site
        """
        try:
            response = self.service.sitemaps().list(
                siteUrl=self.site_url
            ).execute()
            
            return response.get('sitemap', [])
            
        except HttpError as e:
            logger.error(f"Error fetching sitemaps: {e}")
            return []
    
    def get_low_ctr_pages(
        self,
        start_date: datetime,
        end_date: datetime,
        min_impressions: int = 100
    ) -> List[GSCMetrics]:
        """
        Find pages with high impressions but low CTR
        """
        metrics = self.get_page_metrics(start_date, end_date)
        
        return [
            metric for metric in metrics
            if metric.impressions >= min_impressions and 
               metric.ctr < settings.low_ctr_threshold
        ]
    
    def get_poor_ranking_pages(
        self,
        start_date: datetime,
        end_date: datetime,
        min_impressions: int = 50
    ) -> List[GSCMetrics]:
        """
        Find pages ranking in positions 11-20 (page 2)
        """
        metrics = self.get_page_metrics(start_date, end_date)
        
        return [
            metric for metric in metrics
            if metric.impressions >= min_impressions and 
               11 <= metric.position <= 20
        ]
    
    def get_zero_traffic_pages(
        self,
        start_date: datetime,
        end_date: datetime
    ) -> List[str]:
        """
        Find indexed pages with zero traffic
        """
        metrics = self.get_page_metrics(start_date, end_date)
        traffic_urls = {metric.url for metric in metrics if metric.clicks > 0}
        
        # This would need to be cross-referenced with your sitemap or known pages
        # For now, return pages with impressions but no clicks
        return [
            metric.url for metric in metrics
            if metric.impressions > 0 and metric.clicks == 0
        ]
    
    def _parse_datetime(self, datetime_str: Optional[str]) -> Optional[datetime]:
        """
        Parse datetime string from GSC API
        """
        if not datetime_str:
            return None
            
        try:
            return datetime.fromisoformat(datetime_str.replace('Z', '+00:00'))
        except ValueError:
            return None