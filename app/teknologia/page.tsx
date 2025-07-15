import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Cpu, Brain } from "lucide-react"

const techArticles = [
  {
    id: "tekoaly-moderointi",
    title: "Tekoäly mullistaa sisällön moderoinnin sosiaalisessa mediassa",
    summary: "Uudet AI-työkalut lupaavat tehokkaampaa haitallisen sisällön tunnistamista ja poistamista.",
    image: "/ai-moderation.svg",
    date: "09.07.2025",
    category: "Tekoäly",
    featured: true,
  },
  {
    id: "meta-virtuaalimaailma-investointi",
    title: "Meta investoi 2 miljardia euroa virtuaalimaailmojen kehitykseen",
    summary: "Teknologiajätti Meta ilmoitti massiivisesta investoinnista metaversumi-teknologioihin ja VR-laitteisiin.",
    image: "/meta-investment.svg",
    date: "28.06.2025",
    category: "Metaversumi",
    featured: false,
  },
  {
    id: "tekoaly-etiikka-peliteollisuus",
    title: "Tekoälyn etiikka peliteollisuudessa - missä menee raja?",
    summary: "Kriittinen tarkastelu tekoälyn käytöstä pelaajien käyttäytymisen manipuloinnissa ja personoinnissa.",
    image: "/ai-ethics-gaming.svg",
    date: "13.07.2025",
    category: "Etiikka",
    featured: false,
  },
  {
    id: "kryptovaluutta-pelaaminen",
    title: "Kryptovaluuttojen integrointi pelimaailmaan herättää huolta",
    summary: "Kuluttaja-asiantuntijat ja pelialan ammattilaiset varoittavat NFT-pelien ja kryptovaluuttojen riskeistä.",
    image: "/crypto-gaming.svg",
    date: "16.06.2025",
    category: "Blockchain",
    featured: false,
  },
]

export default function TechnologyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Cpu className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Teknologia</h1>
          </div>
          <p className="text-lg text-gray-600">
            Uusimmat teknologiatrendit, innovaatiot ja niiden vaikutukset yhteiskuntaan ja kulttuuriin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            {techArticles
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
                          <Badge className="bg-purple-600">TEKNOLOGIA</Badge>
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
              {techArticles
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
                  <Brain className="w-5 h-5 mr-2 text-purple-500" />
                  Teknologiatrendit 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Generatiivinen tekoäly",
                    "Kvanttitietokoneet",
                    "Metaversumi-teknologiat",
                    "Web3 ja blockchain",
                    "Lisätty todellisuus",
                  ].map((trend) => (
                    <div key={trend} className="p-2 rounded hover:bg-gray-100 transition-colors text-sm">
                      {trend}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Startup-uutiset</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border-b border-gray-100 pb-3">
                    <h4 className="font-medium text-sm">Suomalainen AI-startup kerää 15M€</h4>
                    <span className="text-xs text-gray-500">2 tuntia sitten</span>
                  </div>
                  <div className="border-b border-gray-100 pb-3">
                    <h4 className="font-medium text-sm">VR-teknologia mullistaa koulutuksen</h4>
                    <span className="text-xs text-gray-500">5 tuntia sitten</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Blockchain-ratkaisut kasvussa</h4>
                    <span className="text-xs text-gray-500">1 päivä sitten</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
