import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Star, Check, X, ExternalLink } from "lucide-react"
import type { EnhancedPage } from "@/lib/supabase/types"

interface EnhancedPageProps {
  page: EnhancedPage
}

export function EnhancedPageComponent({ page }: EnhancedPageProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">{page.category}</Badge>
          {page.topic_type && (
            <Badge variant="outline" className="capitalize">
              {page.topic_type}
            </Badge>
          )}
        </div>
        
        <h1 className="text-4xl font-bold mb-4 leading-tight">{page.title}</h1>
        
        {page.meta_description && (
          <p className="text-xl text-muted-foreground mb-6">
            {page.meta_description}
          </p>
        )}
      </div>

      {/* Intro Section */}
      {page.intro && Object.keys(page.intro).length > 0 && (
        <div className="mb-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <p className="text-lg font-medium text-blue-900 mb-2">
              {page.intro.hook}
            </p>
            <p className="text-blue-800 mb-4">{page.intro.context}</p>
            <p className="text-sm text-blue-700 font-medium">
              <strong>Why this matters now:</strong> {page.intro.why_now}
            </p>
          </div>
        </div>
      )}

      {/* Quick Comparison */}
      {page.quick_comparison && page.quick_comparison.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Comparison</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.quick_comparison.map((item, index) => (
              <Card key={index} className="relative">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{item.item}</CardTitle>
                    <div className="flex items-center gap-1">
                      {renderStars(item.rating)}
                      <span className="text-sm text-muted-foreground ml-1">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <CardDescription className="text-green-600 font-medium">
                    {item.highlight}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-4">{item.price}</div>
                  <Button asChild className="w-full">
                    <a href={item.cta_url} target="_blank" rel="noopener noreferrer">
                      {item.cta_text}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Sections */}
      {page.sections && page.sections.length > 0 && (
        <div className="mb-8">
          {page.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg mb-4 leading-relaxed">{section.body}</p>
              
              {section.key_points && section.key_points.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Key Points:</h3>
                  <ul className="space-y-1">
                    {section.key_points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Use Cases */}
      {page.use_cases && page.use_cases.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
          <div className="grid gap-2 md:grid-cols-2">
            {page.use_cases.map((useCase, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <Check className="w-4 h-4 text-blue-500" />
                <span>{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pros and Cons */}
      {page.pros_cons && (page.pros_cons.pros?.length > 0 || page.pros_cons.cons?.length > 0) && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Pros & Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {page.pros_cons.pros && page.pros_cons.pros.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Pros</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {page.pros_cons.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            
            {page.pros_cons.cons && page.pros_cons.cons.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Cons</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {page.pros_cons.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* Final Recommendation */}
      {page.final_recommendation && Object.keys(page.final_recommendation).length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Final Recommendations</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {page.final_recommendation.best_overall && (
              <Card className="border-gold">
                <CardHeader>
                  <CardTitle className="text-yellow-600">🏆 Best Overall</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{page.final_recommendation.best_overall}</p>
                </CardContent>
              </Card>
            )}
            
            {page.final_recommendation.best_for_budget && (
              <Card className="border-green-500">
                <CardHeader>
                  <CardTitle className="text-green-600">💰 Best for Budget</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{page.final_recommendation.best_for_budget}</p>
                </CardContent>
              </Card>
            )}
            
            {page.final_recommendation.best_for_power_users && (
              <Card className="border-purple-500">
                <CardHeader>
                  <CardTitle className="text-purple-600">⚡ Best for Power Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{page.final_recommendation.best_for_power_users}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* FAQs */}
      {page.faqs && page.faqs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {page.faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <Separator className="my-8" />
      <div className="text-center text-sm text-muted-foreground">
        {page.author && (
          <p>
            By {page.author} • {' '}
            {page.published_at && (
              <time dateTime={page.published_at}>
                {new Date(page.published_at).toLocaleDateString()}
              </time>
            )}
          </p>
        )}
      </div>
    </article>
  )
}