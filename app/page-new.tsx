import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Clock, TrendingUp, Users, Zap } from "lucide-react"
import { PageList } from "@/components/page-list"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

// Keep the static content for now
const breakingNews = {
  id: "meta-virtuaalimaailma-investointi",
  title: "Meta investoi 2 miljardia euroa virtuaalimaailmojen kehitykseen",
  summary: "Teknologiajätti Meta ilmoitti massiivisesta investoinnista metaversumi-teknologioihin.",
  time: "2 tuntia sitten",
  urgent: true,
}

const trendingTopics = [
  "Metaversumi",
  "E-urheilu",
  "Tekoäly",
  "Kryptovaluutat",
  "Virtuaalitodellisuus",
  "Sosiaalinen media",
  "Digitaalinen hyvinvointi",
  "Peliriippuvuus",
]

const categoryHighlights = [
  {
    category: "Pelaaminen",
    icon: Users,
    articles: [
      { title: "Suomalaiset e-urheilijat menestyvät kansainvälisesti", time: "3h" },
      { title: "Mobiilipelien markkinaosuus kasvaa edelleen", time: "5h" },
      { title: "Virtuaalitodellisuus mullistaa pelikokemuksen", time: "1d" },
    ],
  },
  {
    category: "Teknologia",
    icon: Zap,
    articles: [
      { title: "5G-verkot mahdollistavat uudenlaisen pelaamisen", time: "2h" },
      { title: "Kvanttitietokoneet uhkaavat nykyistä salausta", time: "4h" },
      { title: "Tekoälyn etiikka digitaalisessa maailmassa", time: "6h" },
    ],
  },
  {
    category: "Yhteiskunta",
    icon: TrendingUp,
    articles: [
      { title: "Digitaalinen kuilu kasvaa ikääntyneiden keskuudessa", time: "1h" },
      { title: "Etätyö muuttaa kaupunkien dynamiikkaa", time: "3h" },
      { title: "Nuorten sosiaalinen media -käyttäytyminen muuttuu", time: "7h" },
    ],
  },
]

function PageListSkeleton() {
  return (
    <div className="grid gap-6">
      {[1, 2, 3].map((i) => (
        <article key={i} className="border rounded-lg p-6">
          <Skeleton className="h-7 w-3/4 mb-2" />
          <Skeleton className="h-5 w-full mb-4" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
        </article>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Breaking News Banner */}
      {breakingNews.urgent && (
        <div className="bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="bg-white text-red-600 font-bold">
                KIIREELLINEN
              </Badge>
              <Link href={`/${breakingNews.id}`} className="hover:underline flex-1">
                <span className="font-medium">{breakingNews.title}</span>
              </Link>
              <span className="text-sm opacity-90 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {breakingNews.time}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Bera Bridge</h1>
            <p className="text-lg text-gray-600">Digitaalisen kulttuurin, teknologian ja yhteiskunnan risteyskohtia</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Dynamic Content from Supabase */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Viimeisimmät artikkelit</h2>
                <Link href="/artikkelit" className="text-blue-600 hover:text-blue-800 font-medium">
                  Katso kaikki →
                </Link>
              </div>
              <Suspense fallback={<PageListSkeleton />}>
                <PageList limit={6} />
              </Suspense>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Trending Topics */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                  Trendaavat aiheet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <Link key={topic} href="/uutiset">
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                        {topic}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Category Highlights */}
            {categoryHighlights.map((category) => (
              <Card key={category.category} className="bg-white shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <category.icon className="w-5 h-5 mr-2 text-blue-600" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.articles.map((article, index) => (
                      <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                        <Link href="/uutiset" className="block hover:text-blue-600 transition-colors">
                          <h4 className="font-medium text-sm leading-tight mb-1">{article.title}</h4>
                          <span className="text-xs text-gray-500">{article.time}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Newsletter Signup */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Tilaa uutiskirje</CardTitle>
                <CardDescription className="text-blue-700">
                  Saa viimeisimmät uutiset digitaalisesta kulttuurista suoraan sähköpostiisi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Sähköpostiosoitteesi"
                    className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Tilaa</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}