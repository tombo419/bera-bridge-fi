import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';
import { extractTagsFromArticle, getTagColor } from '@/utils/tags';

interface TagPageProps {
  params: {
    slug: string;
  };
}

async function getArticlesByTag(tag: string) {
  const supabase = createClient();
  
  try {
    // Get all articles
    const { data: articles, error } = await supabase
      .from('pages')
      .select('id, title, excerpt, category, created_at, image')
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Filter articles that have this tag
    const filteredArticles = articles?.filter(article => {
      const tags = extractTagsFromArticle(article.id, article.category);
      return tags.some(articleTag => 
        articleTag.toLowerCase() === tag.toLowerCase()
      );
    }) || [];

    return filteredArticles;
  } catch (error) {
    console.error('Error fetching articles by tag:', error);
    return [];
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.slug);
  const articles = await getArticlesByTag(tag);

  if (articles.length === 0) {
    notFound();
  }

  const tagDisplayName = tag.charAt(0).toUpperCase() + tag.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Etusivu</Link>
            <span className="mx-2">/</span>
            <span>Aihe: {tagDisplayName}</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Aihe: {tagDisplayName}
            </h1>
            <span className={`
              inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
              ${getTagColor(tagDisplayName)}
            `}>
              #{tagDisplayName}
            </span>
          </div>
          
          <p className="text-gray-600">
            {articles.length} artikkelia aiheesta "{tagDisplayName}"
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/${article.id}`}
              className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                {article.image && (
                  <div className="aspect-video relative mb-4 rounded overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="mb-2">
                  <span className="text-sm text-blue-600 font-medium">
                    {article.category}
                  </span>
                </div>
                
                <h2 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {article.title}
                </h2>
                
                {article.excerpt && (
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {article.excerpt}
                  </p>
                )}
                
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">
                    {new Date(article.created_at).toLocaleDateString('fi-FI')}
                  </p>
                  <span className="text-blue-600 text-sm font-medium group-hover:underline">
                    Lue lisää →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Related Tags */}
        <div className="mt-12 bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Aiheeseen liittyvät tagit
          </h2>
          <div className="flex flex-wrap gap-2">
            {/* Show some related tags based on the current tag */}
            {['Teknologia', 'Tutkimus', 'Pelaaminen', 'Sosiaalinen media'].map((relatedTag) => (
              <Link
                key={relatedTag}
                href={`/tag/${encodeURIComponent(relatedTag.toLowerCase())}`}
                className={`
                  inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                  ${getTagColor(relatedTag)}
                  hover:scale-105 transition-transform duration-200
                `}
              >
                #{relatedTag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.slug);
  const tagDisplayName = tag.charAt(0).toUpperCase() + tag.slice(1);
  
  return {
    title: `${tagDisplayName} - Bera Bridge`,
    description: `Kaikki artikkelit aiheesta ${tagDisplayName}. Löydä kiinnostavaa sisältöä ja syvällistä analyysia.`,
  };
}