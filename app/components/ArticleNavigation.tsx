"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

interface Article {
  id: string;
  title: string;
  category: string;
  created_at: string;
}

interface ArticleNavigationProps {
  currentArticleId: string;
  category: string;
}

export function ArticleNavigation({ currentArticleId, category }: ArticleNavigationProps) {
  const [previousArticle, setPreviousArticle] = useState<Article | null>(null);
  const [nextArticle, setNextArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNavigationArticles() {
      const supabase = createClient();
      
      try {
        // Get current article date first
        const { data: currentArticle, error: currentError } = await supabase
          .from('pages')
          .select('created_at')
          .eq('id', currentArticleId)
          .single();

        if (currentError || !currentArticle) {
          console.error('Error fetching current article:', currentError);
          return;
        }

        const currentDate = currentArticle.created_at;

        // Get previous article (older, same category)
        const { data: prevData, error: prevError } = await supabase
          .from('pages')
          .select('id, title, category, created_at')
          .eq('category', category)
          .lt('created_at', currentDate)
          .order('created_at', { ascending: false })
          .limit(1);

        if (!prevError && prevData && prevData.length > 0) {
          setPreviousArticle(prevData[0]);
        }

        // Get next article (newer, same category)
        const { data: nextData, error: nextError } = await supabase
          .from('pages')
          .select('id, title, category, created_at')
          .eq('category', category)
          .gt('created_at', currentDate)
          .order('created_at', { ascending: true })
          .limit(1);

        if (!nextError && nextData && nextData.length > 0) {
          setNextArticle(nextData[0]);
        }

      } catch (error) {
        console.error('Error fetching navigation articles:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNavigationArticles();
  }, [currentArticleId, category]);

  if (loading) {
    return (
      <div className="flex justify-between items-center py-8 border-t border-gray-200">
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
        </div>
        <div className="flex-1 text-right">
          <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 ml-auto w-1/2"></div>
          <div className="h-6 bg-gray-200 rounded animate-pulse ml-auto w-3/4"></div>
        </div>
      </div>
    );
  }

  if (!previousArticle && !nextArticle) {
    return null;
  }

  return (
    <nav className="flex justify-between items-center py-8 border-t border-gray-200" aria-label="Article navigation">
      <div className="flex-1">
        {previousArticle ? (
          <Link 
            href={`/${previousArticle.id}`}
            className="group flex items-center text-left hover:text-blue-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2 text-gray-400 group-hover:text-blue-600" />
            <div>
              <p className="text-sm text-gray-500 mb-1">Edellinen artikkeli</p>
              <p className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                {previousArticle.title}
              </p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>

      <div className="flex-1 text-right">
        {nextArticle ? (
          <Link 
            href={`/${nextArticle.id}`}
            className="group flex items-center justify-end text-right hover:text-blue-600 transition-colors"
          >
            <div>
              <p className="text-sm text-gray-500 mb-1">Seuraava artikkeli</p>
              <p className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                {nextArticle.title}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 ml-2 text-gray-400 group-hover:text-blue-600" />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
}