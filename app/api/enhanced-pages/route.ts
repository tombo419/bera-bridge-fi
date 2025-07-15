import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import type { CreateEnhancedPageRequest } from '@/lib/supabase/types'

export async function GET(request: NextRequest) {
  const supabase = await createClient()
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get('category')
  const topic_type = searchParams.get('topic_type')
  const limit = searchParams.get('limit')

  let query = supabase
    .from('enhanced_pages')
    .select('*')
    .order('published_at', { ascending: false })

  if (category) {
    query = query.eq('category', category)
  }

  if (topic_type) {
    query = query.eq('topic_type', topic_type)
  }

  if (limit) {
    query = query.limit(parseInt(limit))
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const body: CreateEnhancedPageRequest = await request.json()

  // Get category_id from category name
  const { data: category, error: categoryError } = await supabase
    .from('categories')
    .select('id')
    .eq('name', body.category)
    .single()

  if (categoryError || !category) {
    return NextResponse.json({ error: 'Category not found' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('pages')
    .insert([{
      title: body.title,
      slug: body.slug,
      meta_description: body.meta_description,
      category_id: category.id,
      topic_type: body.topic_type,
      intro: body.intro,
      quick_comparison: body.quick_comparison,
      sections: body.sections,
      use_cases: body.use_cases,
      pros_cons: body.pros_cons,
      final_recommendation: body.final_recommendation,
      faqs: body.faqs,
      status: body.status || 'draft',
      author: body.author,
      published_at: (body.status === 'published') ? new Date().toISOString() : null,
      // Keep content field for backward compatibility
      content: body.sections.map(section => 
        `<h2>${section.title}</h2><p>${section.body}</p>`
      ).join('\n')
    }])
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}