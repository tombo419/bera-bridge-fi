#!/bin/bash

echo "🚀 Setting up Vercel Environment Variables"
echo "=========================================="

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

echo ""
echo "Setting environment variables for your Vercel project..."

# Set the environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL production <<< "https://rmmnwpieqldnozmkgewm.supabase.co"
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production <<< "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtbW53cGllcWxkbm96bWtnZXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjAwMTUsImV4cCI6MjA2NzAzNjAxNX0.OE4x3F49uM-Gm9mh3yw4JM1aK6gMSX1wavG2ExNaPPE"

echo ""
echo "✅ Environment variables set!"
echo ""
echo "Now you can deploy with:"
echo "vercel --prod"