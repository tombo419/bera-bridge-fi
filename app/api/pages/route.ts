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

  // Get category_id from category name if provided
  let category_id = body.category_id
  if (body.category && !category_id) {
    const { data: category, error: categoryError } = await supabase
      .from('categories')
      .select('id')
      .eq('name', body.category)
      .single()

    if (category && !categoryError) {
      category_id = category.id
    }
  }

  // Generate content from sections if not provided
  let content = body.content
  if (!content && body.sections && body.sections.length > 0) {
    content = body.sections.map((section: any) => 
      `<h2>${section.title}</h2><p>${section.body}</p>`
    ).join('\n')
  }

  const { data, error } = await supabase
    .from('pages')
    .insert([{
      title: body.title,
      slug: body.slug,
      description: body.description,
      content: content || `<h1>${body.title}</h1>`,
      category_id: category_id,
      featured_image: body.featured_image,
      status: body.status || 'draft',
      author: body.author,
      metadata: body.metadata || {},
      published_at: body.status === 'published' ? new Date().toISOString() : null,
      // Enhanced content fields
      meta_description: body.meta_description,
      topic_type: body.topic_type,
      intro: body.intro || {},
      quick_comparison: body.quick_comparison || [],
      sections: body.sections || [],
      use_cases: body.use_cases || [],
      pros_cons: body.pros_cons || {},
      final_recommendation: body.final_recommendation || {},
      faqs: body.faqs || []
    }])
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}