import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { User, Calendar, BookOpen } from "lucide-react"

const analysisArticles = [
  {
    id: "metaversumi-tulevaisuus-analyysi",
    title: "Metaversumi: Hype vai todellinen tulevaisuus?",
    summary:
      "Syvällinen analyysi metaversumi-teknologioiden todellisista mahdollisuuksista ja haasteista liiketoiminnassa ja yhteiskunnassa.",
    image: "/metaverse-analysis.svg",
    author: "Dr. Mika Virtanen",
    authorTitle: "Digitaalisen kulttuurin tutkija, Helsingin yliopisto",
    date: "30.06.2025",
    readTime: "12 min",
    category: "Teknologia-analyysi",
    featured: true,
  },
  {
    id: "peliriippuvuus-yhteiskunnallinen-ongelma",
    title: "Peliriippuvuus yhteiskunnallisena haasteena - mitä voimme oppia Etelä-Koreasta?",
    summary:
      "Vertaileva analyysi peliriippuvuuden hoidosta ja ehkäisystä eri maissa, erityisesti Etelä-Korean kokemukset.",
    image: "/gaming-addiction-analysis.svg",
    author: "Prof. Anna Korhonen",
    authorTitle: "Sosiaalipsykologi, Tampereen yliopisto",
    date: "12.06.2025",
    readTime: "15 min",
    category: "Yhteiskunta-analyysi",
    featured: false,
  },
  {
    id: "tekoaly-etiikka-peliteollisuus",
    title: "Tekoälyn etiikka peliteollisuudessa - missä menee raja?",
    summary: "Kriittinen tarkastelu tekoälyn käytöstä pelaajien käyttäytymisen manipuloinnissa ja personoinnissa.",
    image: "/ai-ethics-gaming.svg",
    author: "Lic. Sami Lahtinen",
    authorTitle: "Teknologiafilosofi, Aalto-yliopisto",
    date: "07.07.2025",
    readTime: "10 min",
    category: "Etiikka-analyysi",
    featured: false,
  },
  {
    id: "sosiaalinen-media-demokratia",
    title: "Sosiaalisen median vaikutus demokratiaan - uhka vai mahdollisuus?",
    summary: "Monipuolinen analyysi siitä, miten sosiaalinen media muuttaa poliittista keskustelua ja päätöksentekoa.",
    image: "/social-media-democracy.svg",
    author: "Dr. Liisa Hakkarainen",
    authorTitle: "Viestintätutkija, Jyväskylän yliopisto",
    date: "26.06.2025",
    readTime: "18 min",
    category: "Politiikka-analyysi",
    featured: false,
  },
]

const expertAuthors = [
  {
    name: "Dr. Mika Virtanen",
    title: "Digitaalisen kulttuurin tutkija",
    university: "Helsingin yliopisto",
    image: "/expert-mika.png",
    articles: 23,
  },
  {
    name: "Prof. Anna Korhonen",
    title: "Sosiaalipsykologi",
    university: "Tampereen yliopisto",
    image: "/expert-anna.png",
    articles: 18,
  },
  {
    name: "Lic. Sami Lahtinen",
    title: "Teknologiafilosofi",
    university: "Aalto-yliopisto",
    image: "/expert-sami.png",
    articles: 15,
  },
]

export default function AnalysisPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Analyysit ja mielipiteet</h1>
          <p className="text-lg text-gray-600">
            Syvällisiä analyysejä ja asiantuntijanäkemyksiä digitaalisen kulttuurin ilmiöistä
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Analysis */}
            {analysisArticles
              .filter((article) => article.featured)
              .map((article) => (
                <Card key={article.id} className="bg-white shadow-lg mb-8 overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="aspect-video relative">
                        <Image
                          src={article.image || "/featured-story.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-purple-600">PÄÄANALYYSI</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6">
                      <Badge variant="outline" className="mb-3">
                        {article.category}
                      </Badge>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h2>
                      <p className="text-gray-600 mb-4">{article.summary}</p>

                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{article.author}</p>
                          <p className="text-sm text-gray-600">{article.authorTitle}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>

                      <Button asChild>
                        <Link href={`/${article.id}`}>Lue analyysi</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

            {/* Other Analyses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {analysisArticles
                .filter((article) => !article.featured)
                .map((article) => (
                  <Card key={article.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-video relative">
                      <Image
                        src={article.image || "/trending-article.svg"}
                        alt={article.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                      <CardDescription className="text-sm">{article.summary}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-gray-900">{article.author}</p>
                          <p className="text-xs text-gray-600">{article.authorTitle}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>

                      <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                        <Link href={`/${article.id}`}>Lue analyysi</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Expert Authors */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Asiantuntijat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {expertAuthors.map((expert) => (
                    <div
                      key={expert.name}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{expert.name}</h4>
                        <p className="text-sm text-gray-600">{expert.title}</p>
                        <p className="text-xs text-gray-500">{expert.university}</p>
                        <p className="text-xs text-blue-600">{expert.articles} artikkelia</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Analyysi-kategoriat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Teknologia-analyysi",
                    "Yhteiskunta-analyysi",
                    "Etiikka-analyysi",
                    "Politiikka-analyysi",
                    "Talous-analyysi",
                  ].map((category) => (
                    <Link
                      key={category}
                      href="/analyysit"
                      className="block p-2 rounded hover:bg-gray-100 transition-colors text-sm"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
