"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCategoryInfo } from "@/app/utils/categories";
import { createClient } from '@/lib/supabase/client';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  created_at: string;
  image?: string;
}

interface MoreFromCategoryProps {
  currentArticleId: string;
  category: string;
  limit?: number;
}

export function MoreFromCategory({ currentArticleId, category, limit = 4 }: MoreFromCategoryProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryArticles() {
      const supabase = createClient();
      
      try {
        const { data, error } = await supabase
          .from('pages')
          .select('id, title, excerpt, category, created_at, image')
          .eq('category', category)
          .neq('id', currentArticleId)
          .order('created_at', { ascending: false })
          .limit(limit);

        if (error) throw error;
        setArticles(data || []);
      } catch (error) {
        console.error('Error fetching category articles:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoryArticles();
  }, [currentArticleId, category, limit]);

  const categoryInfo = getCategoryInfo(category);

  if (loading) {
    return (
      <div className="mt-12 border-t pt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Lisää aiheesta {category}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-4 animate-pulse">
              <div className="h-48 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 border-t pt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Lisää aiheesta {category}</h2>
        <Link 
          href={categoryInfo.href} 
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Katso kaikki →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                {article.title}
              </h3>
              {article.excerpt && (
                <p className="text-gray-600 line-clamp-2">{article.excerpt}</p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                {new Date(article.created_at).toLocaleDateString('fi-FI')}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}