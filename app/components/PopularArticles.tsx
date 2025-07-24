"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategoryInfo } from "@/utils/categories";
import { createClient } from '@/lib/supabase/client';
import { TrendingUp } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  created_at: string;
  image?: string;
}

interface PopularArticlesProps {
  limit?: number;
  category?: string;
  showImages?: boolean;
}

export function PopularArticles({ limit = 5, category, showImages = false }: PopularArticlesProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPopularArticles() {
      const supabase = createClient();
      
      try {
        let query = supabase
          .from('pages')
          .select('id, title, category, created_at, image')
          .order('created_at', { ascending: false });

        if (category) {
          query = query.eq('category', category);
        }

        const { data, error } = await query.limit(limit);

        if (error) throw error;
        setArticles(data || []);
      } catch (error) {
        console.error('Error fetching popular articles:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPopularArticles();
  }, [limit, category]);

  if (loading) {
    return (
      <Card className="sticky top-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
            {category ? `Suosituimmat: ${category}` : 'Suosituimmat artikkelit'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(limit)].map((_, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded animate-pulse flex items-center justify-center">
                  <span className="text-sm text-gray-400">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-3 bg-gray-100 rounded animate-pulse w-1/3"></div>
                </div>
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
        <CardTitle className="text-lg flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
          {category ? `Suosituimmat: ${category}` : 'Suosituimmat artikkelit'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {articles.map((article, index) => {
            const categoryInfo = getCategoryInfo(article.category);
            return (
              <div key={article.id} className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  {showImages && article.image && (
                    <div className="aspect-video relative mb-2 rounded overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <Link href={`/${article.id}`} className="block hover:text-blue-600 transition-colors">
                    <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600">
                      {article.title}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between text-sm">
                    <Link href={categoryInfo.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                      {article.category}
                    </Link>
                    <span className="text-gray-400">
                      {new Date(article.created_at).toLocaleDateString('fi-FI', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}