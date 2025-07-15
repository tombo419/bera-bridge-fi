import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Gamepad2, Trophy } from "lucide-react"

const gamingArticles = [
  {
    id: "suomi-esports-strategia-2025",
    title: "Suomi julkaisee kansallisen e-urheilustrategian - tavoitteena maailman kärkeen",
    summary:
      "Opetus- ja kulttuuriministeriö esittelee kunnianhimoisen suunnitelman Suomen nostamiseksi e-urheilun kärkimaaksi.",
    image: "/finland-esports-strategy.svg",
    date: "11.06.2025",
    category: "E-urheilu",
    featured: true,
  },
  {
    id: "verkkopelaamisen-psykologia",
    title: "Verkkopelaamisen psykologia ja sosiaalinen vuorovaikutus",
    summary:
      "Tutkimus siitä, miten online-pelit muokkaavat sosiaalisia suhteita ja yhteisöllisyyttä digitaalisessa ympäristössä.",
    image: "/gaming-psychology.svg",
    date: "07.07.2025",
    category: "Tutkimus",
    featured: false,
  },
  {
    id: "esports-urheilu",
    title: "E-urheilu legitiminä urheilulajina",
    summary: "E-urheilun nousu ja sen hyväksyminen perinteisen urheilun rinnalla.",
    image: "/blog-placeholder.svg",
    date: "19.06.2025",
    category: "E-urheilu",
    featured: false,
  },
  {
    id: "peliriippuvuus-yhteiskunnallinen-ongelma",
    title: "Peliriippuvuus yhteiskunnallisena haasteena",
    summary: "Vertaileva analyysi peliriippuvuuden hoidosta ja ehkäisystä eri maissa.",
    image: "/gaming-addiction-analysis.svg",
    date: "22.05.2025",
    category: "Terveys",
    featured: false,
  },
]

export default function GamingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Gamepad2 className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Pelaaminen ja e-urheilu</h1>
          </div>
          <p className="text-lg text-gray-600">
            Ajankohtaista tietoa pelimaailmasta, e-urheilusta ja pelaamisen yhteiskunnallisista vaikutuksista
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            {gamingArticles
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
                          <Badge className="bg-green-600">PÄÄUUTINEN</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6">
                      <Badge variant="outline" className="mb-3">
                        {article.category}
                      </Badge>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h2>
                      <p className="text-gray-600 mb-4">{article.summary}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{article.date}</span>
                      </div>
                      <Button asChild>
                        <Link href={`/${article.id}`}>Lue artikkeli</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

            {/* Other Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gamingArticles
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
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>{article.date}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={`/${article.id}`}>Lue lisää</Link>
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
                  <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                  E-urheilun tilastot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Suomalaiset ammattipelaajat</span>
                    <span className="font-medium">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">E-urheilu-turnaukset 2024</span>
                    <span className="font-medium">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Palkintorahat (milj. €)</span>
                    <span className="font-medium">12.4</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Suosituimmat pelit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["League of Legends", "Counter-Strike 2", "Valorant", "Dota 2", "Rocket League"].map((game) => (
                    <div key={game} className="p-2 rounded hover:bg-gray-100 transition-colors text-sm">
                      {game}
                    </div>
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
