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
    <article className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Category Badge */}
        {page.category && (
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              {page.category.name}
            </span>
          </div>
        )}
        
        {/* Title and Meta */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {page.title}
          </h1>
          
          {page.description && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {page.description}
            </p>
          )}

          {/* Author and Date */}
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            {page.author && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {page.author}
              </span>
            )}
            {page.published_at && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(page.published_at).toLocaleDateString('fi-FI', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {page.featured_image && (
          <div className="mb-10 -mx-4 md:mx-0">
            <img 
              src={page.featured_image} 
              alt={page.title}
              className="w-full rounded-none md:rounded-xl shadow-lg"
            />
          </div>
        )}

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>

        {/* Share Section */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg text-center">
          <p className="text-gray-600 mb-4">Piditkö artikkelista? Jaa se ystävillesi!</p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Jaa Facebookissa
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Jaa X:ssä
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}