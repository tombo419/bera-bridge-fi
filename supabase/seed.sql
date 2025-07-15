-- Seed file for sample content data
-- Simple version without special characters for initial setup

-- Insert sample pages
INSERT INTO pages (title, slug, description, content, category_id, status, published_at, author) VALUES
(
  'Digital Future of Finland: Vision to 2030',
  'digital-future-finland-2030',
  'Overview of Finland digital transformation and opportunities',
  '<p>Finland is one of the most digital countries in the world, but the journey continues. In this article, we examine how digital development will shape our society over the next decade.</p><h2>Digital Infrastructure</h2><p>Finland 5G network already covers most of the country, and 6G development is underway. Fast and reliable connections enable new services and business models.</p>',
  (SELECT id FROM categories WHERE slug = 'digitaalinen-kulttuuri'),
  'published',
  NOW(),
  'Anna Virtanen'
),
(
  'AI in Finnish Education',
  'ai-finnish-education',
  'How artificial intelligence is changing learning and teaching in Finland',
  '<p>Artificial intelligence is revolutionizing the education sector globally, and Finland is at the forefront of this development. We look at how AI technologies are being integrated into the Finnish education system.</p><h2>Personalized Learning</h2><p>AI enables the creation of individual learning paths for each student. Algorithms analyze learning styles and pace, offering tailored exercises and materials.</p>',
  (SELECT id FROM categories WHERE slug = 'tekoaly'),
  'published',
  NOW() - INTERVAL '2 days',
  'Mikko Jarvinen'
),
(
  'Rise of Gaming Industry in Finland',
  'gaming-industry-finland',
  'The success story of the Finnish gaming industry and future prospects',
  '<p>The Finnish gaming industry has grown into a significant player in the global market. After Angry Birds and Clash of Clans, a new generation of game studios has emerged.</p><h2>Keys to Growth</h2><p>Finland success in gaming is based on strong technical expertise, creativity and networking. Gaming education and the startup ecosystem support the creation of new companies.</p>',
  (SELECT id FROM categories WHERE slug = 'teknologia'),
  'published',
  NOW() - INTERVAL '5 days',
  'Laura Korhonen'
);