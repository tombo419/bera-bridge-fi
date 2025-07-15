import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

interface Params {
  params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = await params
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('pages')
    .select(`
      *,
      category:categories(*)
    `)
    .eq('id', id)
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 })
  }

  return NextResponse.json(data)
}

export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = await params
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

  const updateData: any = {
    ...(body.title && { title: body.title }),
    ...(body.slug && { slug: body.slug }),
    ...(body.description && { description: body.description }),
    ...(body.content && { content: body.content }),
    ...(category_id && { category_id }),
    ...(body.featured_image && { featured_image: body.featured_image }),
    ...(body.status && { status: body.status }),
    ...(body.author && { author: body.author }),
    ...(body.metadata && { metadata: body.metadata }),
    // Enhanced content fields
    ...(body.meta_description && { meta_description: body.meta_description }),
    ...(body.topic_type && { topic_type: body.topic_type }),
    ...(body.intro && { intro: body.intro }),
    ...(body.quick_comparison && { quick_comparison: body.quick_comparison }),
    ...(body.sections && { sections: body.sections }),
    ...(body.use_cases && { use_cases: body.use_cases }),
    ...(body.pros_cons && { pros_cons: body.pros_cons }),
    ...(body.final_recommendation && { final_recommendation: body.final_recommendation }),
    ...(body.faqs && { faqs: body.faqs })
  }

  if (body.status === 'published' && !body.published_at) {
    updateData.published_at = new Date().toISOString()
  }

  // Update content field for backward compatibility when sections are provided
  if (body.sections) {
    updateData.content = body.sections.map((section: any) => 
      `<h2>${section.title}</h2><p>${section.body}</p>`
    ).join('\n')
  }

  const { data, error } = await supabase
    .from('pages')
    .update(updateData)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const { id } = await params
  const supabase = await createClient()

  const { error } = await supabase
    .from('pages')
    .delete()
    .eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}