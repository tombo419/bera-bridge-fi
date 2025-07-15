import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import type { Page, EnhancedPage } from '@/lib/supabase/types'
import { EnhancedPageComponent } from '@/components/enhanced-page'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const supabase = await createClient()
  
  const { data: page } = await supabase
    .from('pages')
    .select('title, description')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: page, error } = await supabase
    .from('pages')
    .select(`
      *,
      category:categories(name, slug)
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error || !page) {
    notFound()
  }

  // Check if this is enhanced content
  const hasEnhancedContent = page.intro && Object.keys(page.intro).length > 0
  
  if (hasEnhancedContent) {
    // Cast to EnhancedPage and use enhanced component
    const enhancedPage: EnhancedPage = {
      ...page,
      category: page.category?.name || 'Uncategorized'
    }
    
    return <EnhancedPageComponent page={enhancedPage} />
  }

  // Fall back to regular page layout
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {page.category && (
        <div className="mb-4">
          <span className="text-sm text-muted-foreground">
            {page.category.name}
          </span>
        </div>
      )}
      
      <h1 className="text-4xl font-bold mb-4">{page.title}</h1>
      
      {page.description && (
        <p className="text-xl text-muted-foreground mb-8">
          {page.description}
        </p>
      )}

      {page.featured_image && (
        <img 
          src={page.featured_image} 
          alt={page.title}
          className="w-full rounded-lg mb-8"
        />
      )}

      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />

      {page.author && (
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Kirjoittaja: {page.author}
          </p>
          {page.published_at && (
            <p className="text-sm text-muted-foreground">
              Julkaistu: {new Date(page.published_at).toLocaleDateString('fi-FI')}
            </p>
          )}
        </div>
      )}
    </article>
  )
}