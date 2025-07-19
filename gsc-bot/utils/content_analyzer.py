import requests
from bs4 import BeautifulSoup
from typing import Dict, List, Optional, Any
from urllib.parse import urljoin, urlparse
from loguru import logger
import re
from dataclasses import dataclass


@dataclass
class PageContent:
    url: str
    title: str
    meta_description: str
    content: str
    headings: Dict[str, List[str]]
    links: List[str]
    images: List[str]
    word_count: int
    schema_markup: List[Dict[str, Any]]


class ContentAnalyzer:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    
    def analyze_page(self, url: str) -> Optional[PageContent]:
        """
        Analyze a webpage and extract all relevant content
        """
        try:
            response = requests.get(url, headers=self.headers, timeout=10)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Extract basic metadata
            title = self._extract_title(soup)
            meta_description = self._extract_meta_description(soup)
            
            # Extract content
            content = self._extract_content(soup)
            
            # Extract headings
            headings = self._extract_headings(soup)
            
            # Extract links
            links = self._extract_links(soup, url)
            
            # Extract images
            images = self._extract_images(soup, url)
            
            # Calculate word count
            word_count = len(content.split())
            
            # Extract schema markup
            schema_markup = self._extract_schema_markup(soup)
            
            return PageContent(
                url=url,
                title=title,
                meta_description=meta_description,
                content=content,
                headings=headings,
                links=links,
                images=images,
                word_count=word_count,
                schema_markup=schema_markup
            )
            
        except Exception as e:
            logger.error(f"Error analyzing page {url}: {e}")
            return None
    
    def _extract_title(self, soup: BeautifulSoup) -> str:
        """Extract page title"""
        title_tag = soup.find('title')
        return title_tag.get_text().strip() if title_tag else ""
    
    def _extract_meta_description(self, soup: BeautifulSoup) -> str:
        """Extract meta description"""
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc:
            return meta_desc.get('content', '').strip()
        return ""
    
    def _extract_content(self, soup: BeautifulSoup) -> str:
        """Extract main content, excluding navigation and footer"""
        
        # Remove script and style elements
        for script in soup(["script", "style", "nav", "footer", "header"]):
            script.decompose()
        
        # Try to find main content area
        main_content = soup.find('main') or soup.find('article') or soup.find('div', class_=re.compile(r'content|post|article'))
        
        if main_content:
            return main_content.get_text(separator=' ', strip=True)
        else:
            # Fallback to body content
            body = soup.find('body')
            if body:
                return body.get_text(separator=' ', strip=True)
            return soup.get_text(separator=' ', strip=True)
    
    def _extract_headings(self, soup: BeautifulSoup) -> Dict[str, List[str]]:
        """Extract all heading tags"""
        headings = {}
        
        for level in range(1, 7):  # h1 through h6
            tag = f'h{level}'
            heading_tags = soup.find_all(tag)
            headings[tag] = [h.get_text().strip() for h in heading_tags]
        
        return headings
    
    def _extract_links(self, soup: BeautifulSoup, base_url: str) -> List[str]:
        """Extract all links from the page"""
        links = []
        
        for link in soup.find_all('a', href=True):
            href = link['href']
            absolute_url = urljoin(base_url, href)
            links.append(absolute_url)
        
        return list(set(links))  # Remove duplicates
    
    def _extract_images(self, soup: BeautifulSoup, base_url: str) -> List[str]:
        """Extract all images from the page"""
        images = []
        
        for img in soup.find_all('img', src=True):
            src = img['src']
            absolute_url = urljoin(base_url, src)
            images.append(absolute_url)
        
        return list(set(images))  # Remove duplicates
    
    def _extract_schema_markup(self, soup: BeautifulSoup) -> List[Dict[str, Any]]:
        """Extract JSON-LD schema markup"""
        schema_scripts = soup.find_all('script', type='application/ld+json')
        schema_markup = []
        
        for script in schema_scripts:
            try:
                import json
                schema_data = json.loads(script.string)
                schema_markup.append(schema_data)
            except json.JSONDecodeError:
                continue
        
        return schema_markup
    
    def analyze_content_quality(self, content: PageContent) -> Dict[str, Any]:
        """
        Analyze content quality and identify areas for improvement
        """
        analysis = {
            'title_analysis': self._analyze_title(content.title),
            'meta_analysis': self._analyze_meta_description(content.meta_description),
            'content_analysis': self._analyze_content_quality(content.content),
            'heading_analysis': self._analyze_headings(content.headings),
            'technical_analysis': self._analyze_technical_seo(content),
            'recommendations': []
        }
        
        # Generate recommendations based on analysis
        analysis['recommendations'] = self._generate_content_recommendations(analysis, content)
        
        return analysis
    
    def _analyze_title(self, title: str) -> Dict[str, Any]:
        """Analyze title quality"""
        return {
            'length': len(title),
            'is_optimal_length': 30 <= len(title) <= 60,
            'word_count': len(title.split()),
            'has_numbers': bool(re.search(r'\d', title)),
            'has_question': '?' in title,
            'has_brackets': bool(re.search(r'[\[\(\{]', title))
        }
    
    def _analyze_meta_description(self, meta_desc: str) -> Dict[str, Any]:
        """Analyze meta description quality"""
        return {
            'length': len(meta_desc),
            'is_optimal_length': 150 <= len(meta_desc) <= 160,
            'word_count': len(meta_desc.split()) if meta_desc else 0,
            'has_call_to_action': any(cta in meta_desc.lower() for cta in ['learn', 'discover', 'find out', 'read more', 'get', 'start']),
            'exists': bool(meta_desc)
        }
    
    def _analyze_content_quality(self, content: str) -> Dict[str, Any]:
        """Analyze content quality metrics"""
        words = content.split()
        sentences = re.split(r'[.!?]+', content)
        
        return {
            'word_count': len(words),
            'sentence_count': len([s for s in sentences if s.strip()]),
            'avg_sentence_length': len(words) / max(len(sentences), 1),
            'readability_score': self._calculate_readability_score(words, sentences),
            'has_sufficient_length': len(words) >= 300,
            'keyword_density': self._calculate_keyword_density(content)
        }
    
    def _analyze_headings(self, headings: Dict[str, List[str]]) -> Dict[str, Any]:
        """Analyze heading structure"""
        return {
            'has_h1': len(headings.get('h1', [])) > 0,
            'h1_count': len(headings.get('h1', [])),
            'has_h2': len(headings.get('h2', [])) > 0,
            'total_headings': sum(len(h_list) for h_list in headings.values()),
            'heading_distribution': {tag: len(h_list) for tag, h_list in headings.items()}
        }
    
    def _analyze_technical_seo(self, content: PageContent) -> Dict[str, Any]:
        """Analyze technical SEO elements"""
        return {
            'has_schema_markup': len(content.schema_markup) > 0,
            'schema_types': [schema.get('@type', 'Unknown') for schema in content.schema_markup],
            'internal_links': len([link for link in content.links if self._is_internal_link(link, content.url)]),
            'external_links': len([link for link in content.links if not self._is_internal_link(link, content.url)]),
            'image_count': len(content.images),
            'total_links': len(content.links)
        }
    
    def _is_internal_link(self, link: str, base_url: str) -> bool:
        """Check if a link is internal"""
        base_domain = urlparse(base_url).netloc
        link_domain = urlparse(link).netloc
        return base_domain == link_domain
    
    def _calculate_readability_score(self, words: List[str], sentences: List[str]) -> float:
        """Calculate a simple readability score"""
        if not words or not sentences:
            return 0.0
        
        avg_sentence_length = len(words) / len(sentences)
        avg_word_length = sum(len(word) for word in words) / len(words)
        
        # Simplified readability score (lower is better)
        return (avg_sentence_length * 0.39) + (avg_word_length * 11.8)
    
    def _calculate_keyword_density(self, content: str) -> Dict[str, float]:
        """Calculate keyword density for common words"""
        words = re.findall(r'\b\w+\b', content.lower())
        word_count = len(words)
        
        if word_count == 0:
            return {}
        
        word_freq = {}
        for word in words:
            if len(word) > 3:  # Only consider words longer than 3 characters
                word_freq[word] = word_freq.get(word, 0) + 1
        
        # Calculate density for top 10 most frequent words
        sorted_words = sorted(word_freq.items(), key=lambda x: x[1], reverse=True)[:10]
        
        return {word: (count / word_count) * 100 for word, count in sorted_words}
    
    def _generate_content_recommendations(self, analysis: Dict[str, Any], content: PageContent) -> List[str]:
        """Generate content improvement recommendations"""
        recommendations = []
        
        # Title recommendations
        title_analysis = analysis['title_analysis']
        if not title_analysis['is_optimal_length']:
            if title_analysis['length'] < 30:
                recommendations.append("Title is too short - consider expanding to 30-60 characters")
            elif title_analysis['length'] > 60:
                recommendations.append("Title is too long - consider shortening to under 60 characters")
        
        # Meta description recommendations
        meta_analysis = analysis['meta_analysis']
        if not meta_analysis['exists']:
            recommendations.append("Add a meta description to improve click-through rates")
        elif not meta_analysis['is_optimal_length']:
            recommendations.append("Optimize meta description length to 150-160 characters")
        
        # Content recommendations
        content_analysis = analysis['content_analysis']
        if not content_analysis['has_sufficient_length']:
            recommendations.append("Content is too short - consider expanding to at least 300 words")
        
        # Heading recommendations
        heading_analysis = analysis['heading_analysis']
        if not heading_analysis['has_h1']:
            recommendations.append("Add an H1 heading to improve content structure")
        elif heading_analysis['h1_count'] > 1:
            recommendations.append("Multiple H1 tags found - use only one H1 per page")
        
        if not heading_analysis['has_h2']:
            recommendations.append("Add H2 headings to improve content structure and readability")
        
        # Technical SEO recommendations
        technical_analysis = analysis['technical_analysis']
        if not technical_analysis['has_schema_markup']:
            recommendations.append("Add schema markup to improve rich snippet potential")
        
        if technical_analysis['internal_links'] < 3:
            recommendations.append("Add more internal links to improve site navigation and SEO")
        
        return recommendations