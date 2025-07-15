import { createClient } from '@/lib/supabase/server'

export default async function TestDB() {
  const supabase = await createClient()
  
  // Test fetching categories
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  // Test fetching pages
  const { data: pages, error: pageError } = await supabase
    .from('pages')
    .select('*, category:categories(name)')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Database Connection Test</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Categories ({categories?.length || 0})</h2>
        {catError ? (
          <p className="text-red-500">Error: {catError.message}</p>
        ) : (
          <ul className="list-disc pl-5">
            {categories?.map(cat => (
              <li key={cat.id}>
                <strong>{cat.name}</strong> - {cat.slug}
                {cat.description && <span className="text-gray-600"> - {cat.description}</span>}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Published Pages ({pages?.length || 0})</h2>
        {pageError ? (
          <p className="text-red-500">Error: {pageError.message}</p>
        ) : (
          <div className="space-y-4">
            {pages?.map(page => (
              <div key={page.id} className="border p-4 rounded">
                <h3 className="font-semibold">{page.title}</h3>
                <p className="text-sm text-gray-600">Slug: /{page.slug}</p>
                <p className="text-sm text-gray-600">Category: {page.category?.name || 'None'}</p>
                <p className="text-sm text-gray-600">Author: {page.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Connection Info</h3>
        <p className="text-sm">API URL: {process.env.NEXT_PUBLIC_SUPABASE_URL}</p>
        <p className="text-sm">Using local Supabase instance</p>
      </div>
    </div>
  )
}