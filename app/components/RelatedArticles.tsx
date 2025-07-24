"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategoryInfo } from "@/app/utils/categories";
import { createClient } from '@/lib/supabase/client';

interface Article {
  id: string;
  title: string;
  category: string;
  created_at: string;
}

interface RelatedArticlesProps {
  currentArticleId: string;
  category: string;
  limit?: number;
}

export function RelatedArticles({ currentArticleId, category, limit = 5 }: RelatedArticlesProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedArticles() {
      const supabase = createClient();
      
      try {
        // First try to get articles from the same category
        let { data, error } = await supabase
          .from('pages')
          .select('id, title, category, created_at')
          .eq('category', category)
          .neq('id', currentArticleId)
          .order('created_at', { ascending: false })
          .limit(limit);

        if (error) throw error;

        // If we don't have enough articles from the same category, get more from other categories
        if (!data || data.length < limit) {
          const remainingLimit = limit - (data?.length || 0);
          const { data: additionalData, error: additionalError } = await supabase
            .from('pages')
            .select('id, title, category, created_at')
            .neq('id', currentArticleId)
            .neq('category', category)
            .order('created_at', { ascending: false })
            .limit(remainingLimit);

          if (!additionalError && additionalData) {
            data = [...(data || []), ...additionalData];
          }
        }

        setArticles(data || []);
      } catch (error) {
        console.error('Error fetching related articles:', error);
        // Fallback to empty array on error
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRelatedArticles();
  }, [currentArticleId, category, limit]);

  if (loading) {
    return (
      <Card className="sticky top-4">
        <CardHeader>
          <CardTitle className="text-lg">Aiheeseen liittyvät artikkelit</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border-b border-gray-100 pb-4 last:border-b-0">
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-3 bg-gray-100 rounded animate-pulse w-1/3"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="text-lg">Aiheeseen liittyvät artikkelit</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {articles.map((article) => {
            const categoryInfo = getCategoryInfo(article.category);
            return (
              <div key={article.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                <Link href={`/${article.id}`} className="block hover:text-blue-600 transition-colors">
                  <h3 className="font-medium text-gray-900 mb-1">{article.title}</h3>
                </Link>
                <Link href={categoryInfo.href} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  {article.category}
                </Link>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}