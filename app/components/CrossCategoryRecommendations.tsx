"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shuffle } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { getCategoryInfo } from "@/utils/categories";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  created_at: string;
  image?: string;
}

interface CrossCategoryRecommendationsProps {
  currentCategory: string;
  currentArticleId: string;
  limit?: number;
}

export function CrossCategoryRecommendations({ 
  currentCategory, 
  currentArticleId, 
  limit = 4 
}: CrossCategoryRecommendationsProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCrossCategoryArticles() {
      const supabase = createClient();
      
      try {
        // Get articles from different categories
        const { data, error } = await supabase
          .from('pages')
          .select('id, title, excerpt, category, created_at, image')
          .neq('category', currentCategory)
          .neq('id', currentArticleId)
          .order('created_at', { ascending: false })
          .limit(limit * 2); // Get more to have variety

        if (error) throw error;
        
        // Mix articles from different categories
        const diverseArticles = [];
        const usedCategories = new Set();
        
        // First, try to get one article from each different category
        if (data) {
          for (const article of data) {
            if (!usedCategories.has(article.category) && diverseArticles.length < limit) {
              diverseArticles.push(article);
              usedCategories.add(article.category);
            }
          }
          
          // If we need more articles, add remaining ones
          for (const article of data) {
            if (diverseArticles.length >= limit) break;
            if (!diverseArticles.some(a => a.id === article.id)) {
              diverseArticles.push(article);
            }
          }
        }

        setArticles(diverseArticles);
      } catch (error) {
        console.error('Error fetching cross-category articles:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCrossCategoryArticles();
  }, [currentCategory, currentArticleId, limit]);

  if (loading) {
    return (
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Shuffle className="w-5 h-5 mr-2 text-indigo-500" />
            Muita mielenkiintoisia aiheita
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border rounded-lg p-4">
                <div className="h-32 bg-gray-200 rounded animate-pulse mb-3"></div>
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
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Shuffle className="w-5 h-5 mr-2 text-indigo-500" />
          Muita mielenkiintoisia aiheita
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article) => {
            const categoryInfo = getCategoryInfo(article.category);
            return (
              <div key={article.id} className="group border rounded-lg p-4 hover:shadow-md transition-shadow">
                {article.image && (
                  <div className="aspect-video relative mb-3 rounded overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="mb-2">
                  <Link href={categoryInfo.href}>
                    <Badge className="text-xs hover:bg-indigo-100 transition-colors">
                      {article.category}
                    </Badge>
                  </Link>
                </div>
                
                <Link href={`/${article.id}`} className="block">
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                </Link>
                
                {article.excerpt && (
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                    {article.excerpt}
                  </p>
                )}
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>
                    {new Date(article.created_at).toLocaleDateString('fi-FI', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <Link 
                    href={`/${article.id}`}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Lue lisää →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500 mb-3">
            Löydä mielenkiintoisia artikkeleita eri aihealueilta
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/aihe/tekoaly" className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 transition-colors">
              Tekoäly-hub
            </Link>
            <Link href="/aihe/pelaaminen" className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded hover:bg-green-100 transition-colors">
              Pelaaminen-hub
            </Link>
            <Link href="/aihe/sosiaalinen-media" className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded hover:bg-purple-100 transition-colors">
              Some-hub
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}