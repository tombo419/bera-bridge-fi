#!/bin/bash

echo "🧪 Testing Content API"
echo "====================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

BASE_URL="http://localhost:3001"

echo -e "${YELLOW}Testing API endpoints...${NC}"

echo ""
echo "1. Testing GET /api/categories"
curl -s "$BASE_URL/api/categories" | jq '.[0:2]' 2>/dev/null || curl -s "$BASE_URL/api/categories"

echo ""
echo "2. Testing GET /api/pages"
curl -s "$BASE_URL/api/pages" | jq '.[0:2]' 2>/dev/null || curl -s "$BASE_URL/api/pages"

echo ""
echo "3. Creating a new test article..."
RESPONSE=$(curl -s -X POST "$BASE_URL/api/pages" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "API Test Article",
    "slug": "api-test-article",
    "description": "Created via API test",
    "content": "<p>This article was created programmatically via the API!</p><h2>Features</h2><ul><li>Automatic publishing</li><li>Dynamic routing</li><li>SEO friendly</li></ul>",
    "status": "published",
    "author": "API Tester"
  }')

echo "$RESPONSE" | jq '.' 2>/dev/null || echo "$RESPONSE"

echo ""
echo -e "${GREEN}✅ Test complete!${NC}"
echo ""
echo "Visit your new article at:"
echo "$BASE_URL/api-test-article"
echo ""
echo "Visit the test page at:"
echo "$BASE_URL/test-db"