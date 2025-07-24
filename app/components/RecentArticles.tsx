"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategoryInfo } from "@/app/utils/categories";
import { createClient } from '@/lib/supabase/client';
import { Clock } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  created_at: string;
  image?: string;
}

interface RecentArticlesProps {
  limit?: number;
  category?: string;
  excludeId?: string;
  showImages?: boolean;
}

export function RecentArticles({ limit = 5, category, excludeId, showImages = false }: RecentArticlesProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecentArticles() {
      const supabase = createClient();
      
      try {
        let query = supabase
          .from('pages')
          .select('id, title, category, created_at, image')
          .order('created_at', { ascending: false });

        if (category) {
          query = query.eq('category', category);
        }

        if (excludeId) {
          query = query.neq('id', excludeId);
        }

        const { data, error } = await query.limit(limit);

        if (error) throw error;
        setArticles(data || []);
      } catch (error) {
        console.error('Error fetching recent articles:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRecentArticles();
  }, [limit, category, excludeId]);

  if (loading) {
    return (
      <Card className="sticky top-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-500" />
            {category ? `Uusimmat: ${category}` : 'Uusimmat artikkelit'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(limit)].map((_, i) => (
              <div key={i} className="border-b border-gray-100 pb-4 last:border-b-0">
                {showImages && (
                  <div className="aspect-video bg-gray-200 rounded animate-pulse mb-3"></div>
                )}
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
        <CardTitle className="text-lg flex items-center">
          <Clock className="w-5 h-5 mr-2 text-blue-500" />
          {category ? `Uusimmat: ${category}` : 'Uusimmat artikkelit'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {articles.map((article) => {
            const categoryInfo = getCategoryInfo(article.category);
            const timeAgo = getTimeAgo(article.created_at);
            
            return (
              <div key={article.id} className="border-b border-gray-100 pb-4 last:border-b-0 group">
                {showImages && article.image && (
                  <div className="aspect-video relative mb-3 rounded overflow-hidden">
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
                  <span className="text-gray-400">{timeAgo}</span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInHours < 1) {
    return 'Juuri nyt';
  } else if (diffInHours < 24) {
    return `${diffInHours}h sitten`;
  } else if (diffInDays < 7) {
    return `${diffInDays}pv sitten`;
  } else {
    return date.toLocaleDateString('fi-FI', { 
      month: 'short', 
      day: 'numeric' 
    });
  }
}