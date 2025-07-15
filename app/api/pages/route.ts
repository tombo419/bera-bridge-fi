import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  const supabase = await createClient()
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get('category')
  const status = searchParams.get('status') || 'published'

  let query = supabase
    .from('pages')
    .select(`
      *,
      category:categories(*)
    `)
    .eq('status', status)
    .order('created_at', { ascending: false })

  if (category) {
    const { data: categoryData } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', category)
      .single()

    if (categoryData) {
      query = query.eq('category_id', categoryData.id)
    }
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const body = await request.json()

  const { data, error } = await supabase
    .from('pages')
    .insert([{
      title: body.title,
      slug: body.slug,
      description: body.description,
      content: body.content,
      category_id: body.category_id,
      featured_image: body.featured_image,
      status: body.status || 'draft',
      author: body.author,
      metadata: body.metadata || {},
      published_at: body.status === 'published' ? new Date().toISOString() : null
    }])
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}