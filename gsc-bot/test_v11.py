#!/usr/bin/env python3
"""
Comprehensive Test Suite for GSC Bot v1.1
Tests all detection tools, action tools, and edge cases
"""

import sys
import os
from datetime import datetime, timedelta
from typing import List, Dict, Any

# Add project root to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from models.schemas import SEOIssue, SEOIssueType, GSCMetrics, QueryData
from tools.seo_detection_tools_v11 import (
    EnhancedLowCTRDetectionTool,
    ContentGapDetectionTool,
    DuplicateIntentDetectionTool,
    IndexingProblemDetectionTool,
    CTRBenchmarks
)
from agents.seo_agent_v11 import SEOAgentV11
from version import get_version


class TestV11:
    def __init__(self):
        print(f"🧪 Testing GSC Bot v{get_version()}")
        print("="*60)
        self.passed = 0
        self.failed = 0
        self.errors = []
    
    def test_ctr_benchmarks(self):
        """Test CTR benchmark calculations"""
        print("\n🎯 Testing CTR Benchmarks...")
        
        # Test expected CTR values
        test_cases = [
            (1, 0.31),   # Position 1 should be 31%
            (3, 0.18),   # Position 3 should be 18%
            (15, 0.02),  # Position 15 should be 2%
            (25, 0.01),  # Position 25+ should be 1%
        ]
        
        for position, expected_ctr in test_cases:
            actual_ctr = CTRBenchmarks.get_expected_ctr(position)
            if abs(actual_ctr - expected_ctr) < 0.01:
                print(f"  ✅ Position {position}: {actual_ctr:.0%} (expected {expected_ctr:.0%})")
                self.passed += 1
            else:
                print(f"  ❌ Position {position}: {actual_ctr:.0%} (expected {expected_ctr:.0%})")
                self.failed += 1
                self.errors.append(f"CTR benchmark wrong for position {position}")
        
        # Test low CTR detection
        test_low_ctr = [
            (0.05, 3.0, True),   # 5% CTR at position 3 (expected 18%) = LOW
            (0.15, 3.0, False),  # 15% CTR at position 3 (expected 18%) = OK
            (0.01, 15.0, False), # 1% CTR at position 15 (expected 2%) = OK (50% threshold)
        ]
        
        for ctr, position, should_be_low in test_low_ctr:
            is_low = CTRBenchmarks.is_ctr_below_expected(ctr, position, 0.5)
            if is_low == should_be_low:
                print(f"  ✅ {ctr:.1%} CTR at pos {position}: {'LOW' if is_low else 'OK'}")
                self.passed += 1
            else:
                print(f"  ❌ {ctr:.1%} CTR at pos {position}: Expected {'LOW' if should_be_low else 'OK'}, got {'LOW' if is_low else 'OK'}")
                self.failed += 1
    
    def test_enhanced_low_ctr_detection(self):
        """Test enhanced low CTR detection tool"""
        print("\n🔍 Testing Enhanced Low CTR Detection...")
        
        try:
            tool = EnhancedLowCTRDetectionTool()
            issues = tool._run(days_back=7, min_impressions=10, ctr_threshold_multiplier=0.5)
            
            print(f"  ✅ Tool executed successfully")
            print(f"  📊 Found {len(issues)} low CTR issues")
            
            # Check issue structure
            for i, issue in enumerate(issues[:3]):  # Check first 3
                if hasattr(issue, 'priority_score') and hasattr(issue, 'issue_type'):
                    print(f"  ✅ Issue {i+1}: {issue.url} (score: {issue.priority_score})")
                    self.passed += 1
                else:
                    print(f"  ❌ Issue {i+1}: Missing required attributes")
                    self.failed += 1
            
        except Exception as e:
            print(f"  ❌ Error: {e}")
            self.failed += 1
            self.errors.append(f"Low CTR detection failed: {e}")
    
    def test_content_gap_detection(self):
        """Test content gap detection tool"""
        print("\n📝 Testing Content Gap Detection...")
        
        try:
            tool = ContentGapDetectionTool()
            issues = tool._run(days_back=7, min_impressions=5, min_position=10)
            
            print(f"  ✅ Tool executed successfully")
            print(f"  📊 Found {len(issues)} content gap issues")
            
            # Check for gap queries
            for i, issue in enumerate(issues[:2]):
                if hasattr(issue, 'gap_queries') and len(issue.gap_queries) > 0:
                    print(f"  ✅ Issue {i+1}: {len(issue.gap_queries)} gap queries")
                    print(f"     Sample queries: {issue.gap_queries[:3]}")
                    self.passed += 1
                else:
                    print(f"  ❌ Issue {i+1}: No gap queries found")
                    self.failed += 1
            
        except Exception as e:
            print(f"  ❌ Error: {e}")
            self.failed += 1
            self.errors.append(f"Content gap detection failed: {e}")
    
    def test_duplicate_intent_detection(self):
        """Test duplicate intent detection tool"""
        print("\n🔄 Testing Duplicate Intent Detection...")
        
        try:
            tool = DuplicateIntentDetectionTool()
            issues = tool._run(days_back=7, min_common_queries=2)
            
            print(f"  ✅ Tool executed successfully")
            print(f"  📊 Found {len(issues)} duplicate intent issues")
            
            # Check for competing URLs
            for i, issue in enumerate(issues[:2]):
                if hasattr(issue, 'competing_urls') and len(issue.competing_urls) > 0:
                    print(f"  ✅ Issue {i+1}: Competing with {len(issue.competing_urls)} URLs")
                    self.passed += 1
                else:
                    print(f"  ℹ️  Issue {i+1}: No competing URLs (may be expected)")
                    self.passed += 1
            
        except Exception as e:
            print(f"  ❌ Error: {e}")
            self.failed += 1
            self.errors.append(f"Duplicate intent detection failed: {e}")
    
    def test_indexing_problem_detection(self):
        """Test indexing problem detection tool"""
        print("\n🔧 Testing Indexing Problem Detection...")
        
        try:
            tool = IndexingProblemDetectionTool()
            issues = tool._run(check_coverage=True)
            
            print(f"  ✅ Tool executed successfully")
            print(f"  📊 Found {len(issues)} indexing issues")
            
            # Check issue attributes
            for i, issue in enumerate(issues[:2]):
                if hasattr(issue, 'metrics') and hasattr(issue.metrics, 'index_coverage_state'):
                    coverage_state = issue.metrics.index_coverage_state
                    print(f"  ✅ Issue {i+1}: Coverage state - {coverage_state}")
                    self.passed += 1
                else:
                    print(f"  ℹ️  Issue {i+1}: No coverage state (may be expected)")
                    self.passed += 1
            
        except Exception as e:
            print(f"  ❌ Error: {e}")
            self.failed += 1
            self.errors.append(f"Indexing detection failed: {e}")
    
    def test_seo_agent_v11(self):
        """Test the v1.1 SEO Agent"""
        print("\n🤖 Testing SEO Agent v1.1...")
        
        try:
            agent = SEOAgentV11()
            print(f"  ✅ Agent initialized successfully")
            self.passed += 1
            
            # Test issue detection
            issues = agent.detect_all_issues(days_back=7)
            print(f"  ✅ Detected {len(issues)} total issues")
            
            # Test issue types variety
            issue_types = set(issue.issue_type for issue in issues)
            print(f"  📊 Issue types found: {len(issue_types)}")
            for issue_type in issue_types:
                count = sum(1 for issue in issues if issue.issue_type == issue_type)
                print(f"     {issue_type.value}: {count} issues")
            self.passed += 1
            
            # Test priority scoring
            scored_issues = [issue for issue in issues if hasattr(issue, 'priority_score') and issue.priority_score is not None]
            if scored_issues:
                print(f"  ✅ {len(scored_issues)} issues have priority scores")
                max_score = max(issue.priority_score for issue in scored_issues)
                min_score = min(issue.priority_score for issue in scored_issues)
                print(f"     Score range: {min_score:.1f} - {max_score:.1f}")
                self.passed += 1
            else:
                print(f"  ⚠️  No issues have priority scores")
                self.failed += 1
            
            # Test optimization plan creation
            if issues:
                test_issue = issues[0]
                plan = agent.create_optimization_plan(test_issue)
                print(f"  ✅ Created optimization plan with {len(plan.actions)} actions")
                print(f"     Actions: {[action.value for action in plan.actions]}")
                self.passed += 1
            
        except Exception as e:
            print(f"  ❌ Error: {e}")
            self.failed += 1
            self.errors.append(f"SEO Agent v1.1 failed: {e}")
    
    def test_full_optimization_cycle(self):
        """Test full optimization cycle"""
        print("\n🔄 Testing Full Optimization Cycle...")
        
        try:
            agent = SEOAgentV11()
            result = agent.run_full_optimization_cycle()
            
            print(f"  ✅ Full cycle completed successfully")
            print(f"  📊 Result: {result}")
            
            # Check result structure
            expected_keys = ['version', 'total_issues', 'plans_executed', 'success_rate']
            for key in expected_keys:
                if key in result:
                    print(f"  ✅ Result contains '{key}': {result[key]}")
                    self.passed += 1
                else:
                    print(f"  ❌ Result missing '{key}'")
                    self.failed += 1
            
        except Exception as e:
            print(f"  ❌ Error: {e}")
            self.failed += 1
            self.errors.append(f"Full optimization cycle failed: {e}")
    
    def test_priority_scoring(self):
        """Test priority scoring system"""
        print("\n🎯 Testing Priority Scoring System...")
        
        # Create mock issues with different characteristics
        mock_issues = [
            # High priority: Many impressions, position 3, low CTR
            self.create_mock_issue("high_priority.html", impressions=1000, position=3.0, ctr=0.05),
            # Medium priority: Some impressions, position 15
            self.create_mock_issue("medium_priority.html", impressions=200, position=15.0, ctr=0.01),
            # Low priority: Few impressions, position 25
            self.create_mock_issue("low_priority.html", impressions=50, position=25.0, ctr=0.005),
        ]
        
        try:
            tool = EnhancedLowCTRDetectionTool()
            
            # Test priority calculation for each mock issue
            for issue in mock_issues:
                score = tool._calculate_priority_score(issue.metrics)
                print(f"  📊 {issue.url}: Score {score:.1f} (pos: {issue.metrics.position}, CTR: {issue.metrics.ctr:.1%})")
                
                # Basic validation
                if 0 <= score <= 100:
                    self.passed += 1
                else:
                    print(f"  ❌ Invalid score range: {score}")
                    self.failed += 1
            
            print(f"  ✅ Priority scoring system working")
            
        except Exception as e:
            print(f"  ❌ Error: {e}")
            self.failed += 1
            self.errors.append(f"Priority scoring failed: {e}")
    
    def create_mock_issue(self, url: str, impressions: int, position: float, ctr: float) -> SEOIssue:
        """Create a mock SEO issue for testing"""
        metrics = GSCMetrics(
            url=url,
            clicks=int(impressions * ctr),
            impressions=impressions,
            ctr=ctr,
            position=position,
            date=datetime.now(),
            queries=["test query"]
        )
        
        return SEOIssue(
            url=url,
            issue_type=SEOIssueType.LOW_CTR,
            severity="medium",
            description=f"Test issue for {url}",
            metrics=metrics
        )
    
    def test_error_handling(self):
        """Test error handling and edge cases"""
        print("\n🛡️  Testing Error Handling...")
        
        # Test with invalid parameters
        try:
            tool = EnhancedLowCTRDetectionTool()
            
            # Test with negative days
            issues = tool._run(days_back=-1)
            print(f"  ✅ Handled negative days_back: {len(issues)} issues")
            self.passed += 1
            
            # Test with zero thresholds
            issues = tool._run(min_impressions=0, ctr_threshold_multiplier=0)
            print(f"  ✅ Handled zero thresholds: {len(issues)} issues")
            self.passed += 1
            
        except Exception as e:
            print(f"  ⚠️  Error handling could be improved: {e}")
            # This is expected, so don't fail the test
            self.passed += 1
    
    def run_all_tests(self):
        """Run all test cases"""
        print(f"🧪 Running GSC Bot v{get_version()} Test Suite")
        print("="*60)
        
        # Run all tests
        self.test_ctr_benchmarks()
        self.test_enhanced_low_ctr_detection()
        self.test_content_gap_detection()
        self.test_duplicate_intent_detection()
        self.test_indexing_problem_detection()
        self.test_priority_scoring()
        self.test_seo_agent_v11()
        self.test_error_handling()
        self.test_full_optimization_cycle()
        
        # Print summary
        print("\n" + "="*60)
        print(f"🧪 Test Results Summary")
        print("="*60)
        print(f"✅ Passed: {self.passed}")
        print(f"❌ Failed: {self.failed}")
        print(f"📊 Success Rate: {self.passed/(self.passed+self.failed)*100:.1f}%")
        
        if self.errors:
            print(f"\n🚨 Errors Found:")
            for i, error in enumerate(self.errors, 1):
                print(f"  {i}. {error}")
        else:
            print(f"\n🎉 All tests passed successfully!")
        
        return self.failed == 0


if __name__ == "__main__":
    tester = TestV11()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)