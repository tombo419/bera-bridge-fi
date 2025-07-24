"use client";

import Link from 'next/link';
import { getTagColor } from '@/app/utils/tags';

interface TagCloudProps {
  tags: string[];
  articleId?: string;
  showCount?: boolean;
}

export function TagCloud({ tags, articleId, showCount = false }: TagCloudProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Link
          key={`${tag}-${index}`}
          href={`/tag/${encodeURIComponent(tag.toLowerCase())}`}
          className={`
            inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
            ${getTagColor(tag)}
            hover:scale-105 transition-transform duration-200
            hover:shadow-sm
          `}
        >
          #{tag}
          {showCount && (
            <span className="ml-1 text-xs opacity-75">
              (5)
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}

// Alternative horizontal tag list for article pages
export function ArticleTags({ tags, articleId }: { tags: string[], articleId: string }) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 pt-6 border-t border-gray-200">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Aiheet:</h3>
      <TagCloud tags={tags} articleId={articleId} />
    </div>
  );
}