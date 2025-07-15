# Supabase Setup Guide

This guide explains how to set up Supabase for programmatic content management on your Bera Bridge website.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Save your project URL and anon key

## 2. Configure Environment Variables

1. Copy the `.env.example` file to `.env.local`
2. Add your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

## 3. Set Up Database Schema

1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Run the SQL schema from `supabase/schema.sql`

This creates:
- `categories` table for content categories
- `pages` table for content pages
- Necessary indexes and triggers
- Row Level Security policies

## 4. Usage

### Creating Content via API

You can create content programmatically using the API endpoints:

```javascript
// Create a new page
fetch('/api/pages', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'My New Article',
    slug: 'my-new-article',
    description: 'Article description',
    content: '<p>HTML content here</p>',
    status: 'published',
    author: 'John Doe'
  })
})

// Create a new category
fetch('/api/categories', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Technology',
    slug: 'technology',
    description: 'Technology articles'
  })
})
```

### Displaying Content

The website automatically displays published content:
- Dynamic pages at `/{slug}` route
- Page listing component available via `<PageList />`
- Category filtering supported

### Content Management Interface

Example content manager interface at `/app/admin/content-example.tsx`

## 5. API Endpoints

- `GET /api/pages` - List all pages
- `POST /api/pages` - Create new page
- `GET /api/pages/[id]` - Get specific page
- `PUT /api/pages/[id]` - Update page
- `DELETE /api/pages/[id]` - Delete page
- `GET /api/categories` - List categories
- `POST /api/categories` - Create category

## 6. Security

- Row Level Security (RLS) is enabled
- Public can only read published pages
- API routes don't include authentication (add as needed)
- Never commit `.env.local` file

## Next Steps

1. Add authentication for admin features
2. Create admin dashboard UI
3. Add image upload functionality
4. Implement search and filtering
5. Add content versioning