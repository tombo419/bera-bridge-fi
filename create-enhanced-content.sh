#!/bin/bash

# Create Enhanced Content - Example Usage Script
# This script demonstrates how to create content with the new enhanced schema

echo "🚀 Creating Enhanced Content Example"
echo "===================================="

# Set API endpoint
API_URL="https://www.bera-bridge.fi/api/enhanced-pages"

# Create example content using the new schema
echo "Creating AI Writing Tools comparison article..."

curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d @example-enhanced-content.json

echo ""
echo "✅ Enhanced content created!"
echo ""
echo "View your new article at:"
echo "https://www.bera-bridge.fi/best-ai-writing-tools-2025"
echo ""

echo "🧪 Testing the enhanced API endpoints:"
echo ""

echo "1. Get all enhanced pages:"
echo "GET $API_URL"
echo ""

echo "2. Filter by category:"
echo "GET $API_URL?category=AI"
echo ""

echo "3. Filter by topic type:"
echo "GET $API_URL?topic_type=comparison"
echo ""

echo "4. Get specific page:"
echo "GET $API_URL/[page-id]"
echo ""

echo "📝 New Schema Features:"
echo "• Structured intro with hook, context, and why_now"
echo "• Quick comparison table with ratings and CTAs"
echo "• Organized sections with key points"
echo "• Use cases list for better targeting"
echo "• Pros/cons analysis"
echo "• Final recommendations for different user types"
echo "• FAQ section for comprehensive coverage"
echo ""

echo "Your enhanced content system is ready for programmatic generation!"