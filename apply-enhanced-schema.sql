-- Apply Enhanced Content Schema to Production
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/rmmnwpieqldnozmkgewm/sql

-- Add new columns to pages table
ALTER TABLE pages ADD COLUMN IF NOT EXISTS meta_description TEXT;
ALTER TABLE pages ADD COLUMN IF NOT EXISTS topic_type VARCHAR(50) CHECK (topic_type IN ('comparison', 'guide', 'news', 'listicle'));

-- Add structured content columns as JSONB
ALTER TABLE pages ADD COLUMN IF NOT EXISTS intro JSONB DEFAULT '{}';
ALTER TABLE pages ADD COLUMN IF NOT EXISTS quick_comparison JSONB DEFAULT '[]';
ALTER TABLE pages ADD COLUMN IF NOT EXISTS sections JSONB DEFAULT '[]';
ALTER TABLE pages ADD COLUMN IF NOT EXISTS use_cases JSONB DEFAULT '[]';
ALTER TABLE pages ADD COLUMN IF NOT EXISTS pros_cons JSONB DEFAULT '{}';
ALTER TABLE pages ADD COLUMN IF NOT EXISTS final_recommendation JSONB DEFAULT '{}';
ALTER TABLE pages ADD COLUMN IF NOT EXISTS faqs JSONB DEFAULT '[]';

-- Update categories to match new structure
UPDATE categories SET name = 'AI', slug = 'ai', description = 'Artificial Intelligence and Machine Learning content' WHERE slug = 'tekoaly';
UPDATE categories SET name = 'Gaming', slug = 'gaming', description = 'Gaming industry, reviews, and technology' WHERE slug = 'teknologia';
UPDATE categories SET name = 'Security', slug = 'security', description = 'Cybersecurity, privacy, and digital safety' WHERE slug = 'yhteiskunta';

-- Add new categories if they don't exist
INSERT INTO categories (name, slug, description) VALUES
  ('AI', 'ai', 'Artificial Intelligence and Machine Learning content'),
  ('Gaming', 'gaming', 'Gaming industry, reviews, and technology'),
  ('Security', 'security', 'Cybersecurity, privacy, and digital safety')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description;

-- Create indexes for better JSON querying
CREATE INDEX IF NOT EXISTS idx_pages_topic_type ON pages(topic_type);
CREATE INDEX IF NOT EXISTS idx_pages_intro ON pages USING GIN (intro);
CREATE INDEX IF NOT EXISTS idx_pages_sections ON pages USING GIN (sections);
CREATE INDEX IF NOT EXISTS idx_pages_faqs ON pages USING GIN (faqs);

-- Create a view for easy content querying
CREATE OR REPLACE VIEW enhanced_pages AS
SELECT 
  p.id,
  p.slug,
  p.title,
  p.meta_description,
  c.name as category,
  p.topic_type,
  p.intro,
  p.quick_comparison,
  p.sections,
  p.use_cases,
  p.pros_cons,
  p.final_recommendation,
  p.faqs,
  p.status,
  p.published_at,
  p.author,
  p.created_at,
  p.updated_at
FROM pages p
LEFT JOIN categories c ON p.category_id = c.id
WHERE p.status = 'published'
ORDER BY p.published_at DESC;

-- Grant permissions for the view
GRANT SELECT ON enhanced_pages TO anon;
GRANT SELECT ON enhanced_pages TO authenticated;