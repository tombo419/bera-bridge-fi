import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, BarChart3 } from "lucide-react"

const researchArticles = [
  {
    id: "tiktok-algoritmi-tutkimus",
    title: "Uusi tutkimus paljastaa TikTokin algoritmin vaikutukset nuorten mielenterveyteen",
    summary: "Helsingin yliopiston laaja tutkimus analysoi sosiaalisen median algoritmien psykologisia vaikutuksia.",
    image: "/tiktok-research.svg",
    date: "19.06.2025",
    category: "Psykologia",
    institution: "Helsingin yliopisto",
    featured: true,
  },
  {
    id: "digitaalinen-hyvinvointi-tutkimus",
    title: "Suomalaisnuorten digitaalinen hyvinvointi heikkenee",
    summary: "THL:n uusi raportti osoittaa huolestuttavaa kehitystä nuorten ruutuajan ja mielenterveyden suhteessa.",
    image: "/digital-wellbeing.svg",
    date: "10.06.2025",
    category: "Terveys",
    institution: "THL",
    featured: false,
  },
  {
    id: "metaversumi-tulevaisuus-analyysi",
    title: "Metaversumi: Hype vai todellinen tulevaisuus?",
    summary: "Syvällinen analyysi metaversumi-teknologioiden todellisista mahdollisuuksista ja haasteista.",
    image: "/metaverse-analysis.svg",
    date: "27.06.2025",
    category: "Teknologia",
    institution: "Aalto-yliopisto",
    featured: false,
  },
  {
    id: "sosiaalinen-media-demokratia",
    title: "Sosiaalisen median vaikutus demokratiaan - uhka vai mahdollisuus?",
    summary: "Monipuolinen analyysi siitä, miten sosiaalinen media muuttaa poliittista keskustelua ja päätöksentekoa.",
    image: "/social-media-democracy.svg",
    date: "04.06.2025",
    category: "Politiikka",
    institution: "Jyväskylän yliopisto",
    featured: false,
  },
]

export default function ResearchPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Tutkimus</h1>
          </div>
          <p className="text-lg text-gray-600">
            Tieteellistä tutkimusta digitaalisesta kulttuurista, teknologiasta ja niiden yhteiskunnallisista
            vaikutuksista
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Research */}
            {researchArticles
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
                          <Badge className="bg-indigo-600">TUTKIMUS</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="outline">{article.category}</Badge>
                        <Badge variant="secondary">{article.institution}</Badge>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h2>
                      <p className="text-gray-600 mb-4">{article.summary}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{article.date}</span>
                      </div>
                      <Button asChild>
                        <Link href={`/${article.id}`}>Lue tutkimus</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

            {/* Other Research */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchArticles
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
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">
                          {article.institution}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>{article.date}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={`/${article.id}`}>Lue tutkimus</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-green-500" />
                  Tutkimustilastot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Julkaistut tutkimukset</span>
                    <span className="font-medium">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Yhteistyöyliopistot</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Tutkijat</span>
                    <span className="font-medium">89</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Tutkimusalueet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Digitaalinen psykologia",
                    "Sosiaalinen media",
                    "Pelitutkimus",
                    "Tekoälyn etiikka",
                    "Virtuaalimaailmat",
                    "Kybersecurity",
                  ].map((area) => (
                    <div key={area} className="p-2 rounded hover:bg-gray-100 transition-colors text-sm">
                      {area}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Tutkimusyhteistyö</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-700 mb-3">Oletko tutkija ja kiinnostunut yhteistyöstä? Ota yhteyttä!</p>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="mailto:info@bera-bridge.fi">Ota yhteyttä</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
