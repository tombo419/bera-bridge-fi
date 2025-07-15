-- Enhanced Content Schema Migration
-- This migration adds new columns and structures to support rich content generation

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
UPDATE categories SET name = 'AI', slug = 'ai' WHERE slug = 'tekoaly';
UPDATE categories SET name = 'Gaming', slug = 'gaming' WHERE slug = 'teknologia';
UPDATE categories SET name = 'Security', slug = 'security' WHERE slug = 'yhteiskunta';

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

-- Create a function to validate content structure
CREATE OR REPLACE FUNCTION validate_content_structure()
RETURNS TRIGGER AS $$
BEGIN
  -- Validate intro structure
  IF NEW.intro IS NOT NULL AND NEW.intro != '{}' THEN
    IF NOT (NEW.intro ? 'hook' AND NEW.intro ? 'context' AND NEW.intro ? 'why_now') THEN
      RAISE EXCEPTION 'intro must contain hook, context, and why_now fields';
    END IF;
  END IF;
  
  -- Validate quick_comparison structure
  IF NEW.quick_comparison IS NOT NULL AND jsonb_array_length(NEW.quick_comparison) > 0 THEN
    IF NOT (NEW.quick_comparison->0 ? 'item' AND NEW.quick_comparison->0 ? 'highlight') THEN
      RAISE EXCEPTION 'quick_comparison items must contain item and highlight fields';
    END IF;
  END IF;
  
  -- Validate sections structure
  IF NEW.sections IS NOT NULL AND jsonb_array_length(NEW.sections) > 0 THEN
    IF NOT (NEW.sections->0 ? 'title' AND NEW.sections->0 ? 'body') THEN
      RAISE EXCEPTION 'sections must contain title and body fields';
    END IF;
  END IF;
  
  -- Validate pros_cons structure
  IF NEW.pros_cons IS NOT NULL AND NEW.pros_cons != '{}' THEN
    IF NOT (NEW.pros_cons ? 'pros' AND NEW.pros_cons ? 'cons') THEN
      RAISE EXCEPTION 'pros_cons must contain pros and cons arrays';
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for content validation
DROP TRIGGER IF EXISTS validate_content_trigger ON pages;
CREATE TRIGGER validate_content_trigger
  BEFORE INSERT OR UPDATE ON pages
  FOR EACH ROW EXECUTE FUNCTION validate_content_structure();

-- Grant permissions for the view
GRANT SELECT ON enhanced_pages TO anon;
GRANT SELECT ON enhanced_pages TO authenticated;