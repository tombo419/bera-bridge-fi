export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  created_at: string
  updated_at: string
}

export interface QuickComparisonItem {
  item: string
  highlight: string
  price: string
  rating: number
  cta_text: string
  cta_url: string
}

export interface ContentSection {
  title: string
  body: string
  key_points: string[]
}

export interface ContentIntro {
  hook: string
  context: string
  why_now: string
}

export interface ProsCons {
  pros: string[]
  cons: string[]
}

export interface FinalRecommendation {
  best_overall: string
  best_for_budget: string
  best_for_power_users: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Page {
  id: string
  title: string
  slug: string
  description: string | null
  content: string
  category_id: string | null
  featured_image: string | null
  status: 'draft' | 'published' | 'archived'
  published_at: string | null
  author: string | null
  metadata: Record<string, any>
  created_at: string
  updated_at: string
  category?: Category
}

export interface EnhancedPage {
  id: string
  slug: string
  title: string
  meta_description: string | null
  category: string
  topic_type: 'comparison' | 'guide' | 'news' | 'listicle' | null
  intro: ContentIntro
  quick_comparison: QuickComparisonItem[]
  sections: ContentSection[]
  use_cases: string[]
  pros_cons: ProsCons
  final_recommendation: FinalRecommendation
  faqs: FAQ[]
  status: 'draft' | 'published' | 'archived'
  published_at: string | null
  author: string | null
  created_at: string
  updated_at: string
}

export interface CreateEnhancedPageRequest {
  slug: string
  title: string
  meta_description: string
  category: string
  topic_type: 'comparison' | 'guide' | 'news' | 'listicle'
  intro: ContentIntro
  quick_comparison: QuickComparisonItem[]
  sections: ContentSection[]
  use_cases: string[]
  pros_cons: ProsCons
  final_recommendation: FinalRecommendation
  faqs: FAQ[]
  status?: 'draft' | 'published' | 'archived'
  author?: string
}