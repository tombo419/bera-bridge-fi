#!/bin/bash

echo "🚀 Completing Supabase Setup for Bera Bridge"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Step 1: Pushing schema to cloud...${NC}"
echo "You'll need to enter your database password when prompted."
echo "If you don't know it, reset it at: https://supabase.com/dashboard/project/rmmnwpieqldnozmkgewm/settings/database"
echo ""

# Try to push the schema
if supabase db push; then
    echo -e "${GREEN}✅ Schema pushed successfully!${NC}"
else
    echo -e "${RED}❌ Failed to push schema. Please run 'supabase db push' manually with your database password.${NC}"
fi

echo ""
echo -e "${YELLOW}Step 2: Your production environment variables are ready!${NC}"
echo "File: .env.production.local"
echo "NEXT_PUBLIC_SUPABASE_URL=https://rmmnwpieqldnozmkgewm.supabase.co"
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

echo ""
echo -e "${YELLOW}Step 3: Vercel deployment configuration${NC}"
echo "Add these environment variables to your Vercel project:"
echo ""
echo "In Vercel Dashboard → Settings → Environment Variables:"
echo "1. NEXT_PUBLIC_SUPABASE_URL = https://rmmnwpieqldnozmkgewm.supabase.co"
echo "2. NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtbW53cGllcWxkbm96bWtnZXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjAwMTUsImV4cCI6MjA2NzAzNjAxNX0.OE4x3F49uM-Gm9mh3yw4JM1aK6gMSX1wavG2ExNaPPE"

echo ""
echo -e "${YELLOW}Step 4: Testing your setup${NC}"
echo "Local test URLs:"
echo "• App: http://localhost:3001"
echo "• Database test: http://localhost:3001/test-db"
echo "• Supabase Studio: http://localhost:54323"

echo ""
echo -e "${YELLOW}Step 5: API endpoints ready${NC}"
echo "Your content management API is ready:"
echo "• GET /api/pages - List all pages"
echo "• POST /api/pages - Create new page"
echo "• GET /api/categories - List categories"
echo "• POST /api/categories - Create category"

echo ""
echo -e "${YELLOW}Step 6: Sample API usage${NC}"
echo "Create a new article:"
echo 'curl -X POST http://localhost:3001/api/pages \'
echo '  -H "Content-Type: application/json" \'
echo '  -d "{"title": "My Test Article", "slug": "test-article", "content": "<p>Hello World</p>", "status": "published"}"'

echo ""
echo -e "${GREEN}🎉 Setup Complete!${NC}"
echo "Your programmatic content system is ready!"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Run 'supabase db push' if schema push failed"
echo "2. Configure Vercel environment variables"
echo "3. Deploy with 'vercel --prod'"
echo "4. Start creating content programmatically!"

echo ""
echo -e "${YELLOW}Need help?${NC}"
echo "• Supabase Dashboard: https://supabase.com/dashboard/project/rmmnwpieqldnozmkgewm"
echo "• Documentation: See DEPLOYMENT_GUIDE.md"