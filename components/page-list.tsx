import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { Page } from '@/lib/supabase/types'

interface PageListProps {
  categorySlug?: string
  limit?: number
}

export async function PageList({ categorySlug, limit }: PageListProps) {
  const supabase = await createClient()

  let query = supabase
    .from('pages')
    .select(`
      id,
      title,
      slug,
      description,
      published_at,
      category:categories(name, slug)
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (categorySlug) {
    const { data: category } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', categorySlug)
      .single()

    if (category) {
      query = query.eq('category_id', category.id)
    }
  }

  if (limit) {
    query = query.limit(limit)
  }

  const { data: pages, error } = await query

  if (error || !pages) {
    return <div>Ei artikkeleita saatavilla.</div>
  }

  return (
    <div className="grid gap-6">
      {pages.map((page) => (
        <article key={page.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <Link href={`/${page.slug}`} className="block">
            <h2 className="text-2xl font-semibold mb-2 hover:text-primary">
              {page.title}
            </h2>
            {page.description && (
              <p className="text-muted-foreground mb-4">
                {page.description}
              </p>
            )}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {page.category && (
                <span>{page.category.name}</span>
              )}
              {page.published_at && (
                <time dateTime={page.published_at}>
                  {new Date(page.published_at).toLocaleDateString('fi-FI')}
                </time>
              )}
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}