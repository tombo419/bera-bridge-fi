#!/bin/bash

# Complete Cloud Setup Script for Bera Bridge
# This script guides you through the final setup steps

echo "🚀 Bera Bridge - Complete Cloud Setup"
echo "====================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Your Supabase Project Details:${NC}"
echo "Project Reference: rmmnwpieqldnozmkgewm"
echo "Project Name: supabase-lime-elephant"
echo "Dashboard URL: https://supabase.com/dashboard/project/rmmnwpieqldnozmkgewm"
echo ""

echo -e "${YELLOW}STEP 1: Push Schema to Cloud Database${NC}"
echo "Run this command and enter your database password when prompted:"
echo ""
echo -e "${GREEN}supabase db push${NC}"
echo ""
echo "If you don't know your password, reset it at:"
echo "https://supabase.com/dashboard/project/rmmnwpieqldnozmkgewm/settings/database"
echo ""

echo -e "${YELLOW}STEP 2: Verify Schema Applied${NC}"
echo "After pushing, verify your tables exist by visiting:"
echo "https://supabase.com/dashboard/project/rmmnwpieqldnozmkgewm/editor"
echo ""
echo "You should see:"
echo "• categories table with sample data"
echo "• pages table (may be empty initially)"
echo "• Proper indexes and policies"
echo ""

echo -e "${YELLOW}STEP 3: Test Production Environment${NC}"
echo "Update your .env.local to use production:"
echo ""
echo "# Comment out local, uncomment production"
echo "# NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321"
echo "# NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
echo ""
echo "NEXT_PUBLIC_SUPABASE_URL=https://rmmnwpieqldnozmkgewm.supabase.co"
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtbW53cGllcWxkbm96bWtnZXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjAwMTUsImV4cCI6MjA2NzAzNjAxNX0.OE4x3F49uM-Gm9mh3yw4JM1aK6gMSX1wavG2ExNaPPE"
echo ""
echo "Then test: npm run dev"
echo ""

echo -e "${YELLOW}STEP 4: Configure Vercel Environment${NC}"
echo "Add these environment variables to your Vercel project:"
echo ""
echo "Go to: https://vercel.com/dashboard → Your Project → Settings → Environment Variables"
echo ""
echo "Add these variables:"
echo "Name: NEXT_PUBLIC_SUPABASE_URL"
echo "Value: https://rmmnwpieqldnozmkgewm.supabase.co"
echo ""
echo "Name: NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtbW53cGllcWxkbm96bWtnZXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjAwMTUsImV4cCI6MjA2NzAzNjAxNX0.OE4x3F49uM-Gm9mh3yw4JM1aK6gMSX1wavG2ExNaPPE"
echo ""

echo -e "${YELLOW}STEP 5: Deploy to Production${NC}"
echo "Deploy your app to Vercel:"
echo ""
echo -e "${GREEN}vercel --prod${NC}"
echo ""

echo -e "${YELLOW}STEP 6: Test Your Live API${NC}"
echo "After deployment, test your production API:"
echo ""
echo 'curl -X POST https://your-app.vercel.app/api/pages \'
echo '  -H "Content-Type: application/json" \'
echo '  -d "{\"title\": \"Production Test\", \"slug\": \"production-test\", \"content\": \"<p>Live API test</p>\", \"status\": \"published\"}"'
echo ""

echo -e "${GREEN}✅ Ready to Complete Setup!${NC}"
echo ""
echo "Your system is 95% ready. Just run:"
echo "1. supabase db push (with your database password)"
echo "2. Configure Vercel environment variables"
echo "3. Deploy with vercel --prod"
echo ""
echo -e "${BLUE}Need help? Check these resources:${NC}"
echo "• Supabase Dashboard: https://supabase.com/dashboard/project/rmmnwpieqldnozmkgewm"
echo "• Local test: http://localhost:3001/test-db"
echo "• Documentation: DEPLOYMENT_GUIDE.md"
echo ""

# Ask user if they want to continue
echo -e "${YELLOW}Would you like to run 'supabase db push' now? (y/N)${NC}"
read -r response
if [[ "$response" =~ ^[Yy]$ ]]; then
    echo ""
    echo "Running supabase db push..."
    echo "Please enter your database password when prompted:"
    supabase db push
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Schema pushed successfully!${NC}"
        echo ""
        echo "Next steps:"
        echo "1. Visit: https://supabase.com/dashboard/project/rmmnwpieqldnozmkgewm/editor"
        echo "2. Verify your tables are created"
        echo "3. Configure Vercel environment variables"
        echo "4. Deploy with 'vercel --prod'"
    else
        echo -e "${RED}❌ Failed to push schema. Please check your password and try again.${NC}"
    fi
else
    echo ""
    echo "No problem! Run 'supabase db push' when you're ready."
fi