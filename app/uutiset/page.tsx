import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Clock, Filter } from "lucide-react"

const newsArticles = [
  {
    id: "suomi-voittaa-cs2-maailmanmestaruuden",
    title: "Suomalaisjoukkue ENCE voittaa Counter-Strike 2 maailmanmestaruuden - historiallinen hetki",
    summary:
      "ENCE teki historiaa voittamalla CS2:n ensimmäisen virallisen maailmanmestaruuden Kölnissä järjestetyssä turnauksessa.",
    image: "/cs2-championship.svg",
    category: "E-urheilu",
    date: "15.06.2025",
    time: "18:45",
    readTime: "6 min",
    urgent: false,
  },
  {
    id: "threads-haastaa-twitterin-suomessa",
    title: 'Threads ohittaa X:n käyttäjämäärässä Suomessa - "Twitterin aikakausi on ohi"',
    summary: "Metan Threads-sovellus on virallisesti ohittanut X:n aktiivisten käyttäjien määrässä Suomessa.",
    image: "/threads-vs-twitter.svg",
    category: "Sosiaalinen media",
    date: "08.07.2025",
    time: "14:30",
    readTime: "8 min",
    urgent: false,
  },
  {
    id: "apple-vision-pro-2-julkaisu",
    title: 'Apple Vision Pro 2 mullistaa virtuaalitodellisuuden - "Tämä muuttaa kaiken"',
    summary: "Uusi laite on 40% kevyempi, tarjoaa 8K-resoluution per silmä ja maksaa 2,499 euroa.",
    image: "/apple-vision-pro-2.svg",
    category: "Teknologia",
    date: "22.06.2025",
    time: "19:00",
    readTime: "10 min",
    urgent: false,
  },
  {
    id: "nuorten-ruutuaika-kasvaa-huolestuttavasti",
    title: "Nuorten ruutuaika kasvaa huolestuttavasti - keskimäärin 9 tuntia päivässä",
    summary: "THL:n uusi tutkimus paljastaa huolestuttavan kehityksen suomalaisten nuorten ruutuajan käytössä.",
    image: "/youth-screen-time.svg",
    category: "Terveys",
    date: "22.05.2025",
    time: "11:15",
    readTime: "12 min",
    urgent: false,
  },
  {
    id: "eu-saataa-uudet-tekoalylait",
    title: 'EU säätää maailman tiukimmat tekoälylait - "Digitaalisten oikeuksien perustuslaki"',
    summary: "Euroopan unioni hyväksyi maailman tiukimmat tekoälyä koskevat lait, jotka tulevat voimaan 2026.",
    image: "/eu-ai-laws.svg",
    category: "Politiikka",
    date: "08.07.2025",
    time: "16:20",
    readTime: "15 min",
    urgent: false,
  },
  {
    id: "suomi-esports-strategia-2025",
    title: "Suomi julkaisee kansallisen e-urheilustrategian - tavoitteena maailman kärkeen",
    summary:
      "Opetus- ja kulttuuriministeriö esittelee kunnianhimoisen suunnitelman Suomen nostamiseksi e-urheilun kärkimaaksi.",
    image: "/finland-esports-strategy.svg",
    category: "Politiikka",
    date: "07.06.2025",
    time: "08:30",
    readTime: "5 min",
    urgent: false,
  },
]

const categories = ["Kaikki", "Teknologia", "Politiikka", "Tutkimus", "Talous", "Terveys", "Pelaaminen"]

export default function NewsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Uutiset</h1>
          <p className="text-lg text-gray-600">
            Ajankohtaiset uutiset digitaalisesta kulttuurista, teknologiasta ja yhteiskunnasta
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="font-medium text-gray-700">Suodata kategorialla:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "Kaikki" ? "default" : "outline"}
                className="cursor-pointer hover:bg-gray-100 px-3 py-1"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News Column */}
          <div className="lg:col-span-2 space-y-6">
            {newsArticles.map((article, index) => (
              <Card
                key={article.id}
                className={`bg-white shadow-sm hover:shadow-md transition-shadow ${
                  index === 0 ? "border-l-4 border-l-blue-600" : ""
                }`}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="aspect-video relative">
                      <Image
                        src={article.image || "/blog-placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover rounded-l-lg"
                      />
                      {article.urgent && (
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-red-600">KIIREELLINEN</Badge>
                        </div>
                      )}
                      <div className="absolute bottom-2 left-2">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>
                        {article.date} klo {article.time}
                      </span>
                      <span>•</span>
                      <span>{article.readTime} lukuaika</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{article.title}</h2>
                    <p className="text-gray-600 mb-4">{article.summary}</p>
                    <Button variant="outline" asChild>
                      <Link href={`/${article.id}`}>Lue uutinen</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Most Read */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Luetuimmat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newsArticles.slice(0, 5).map((article, index) => (
                    <div
                      key={article.id}
                      className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <Link href={`/${article.id}`} className="block hover:text-blue-600 transition-colors">
                          <h4 className="font-medium text-sm leading-tight mb-1">{article.title}</h4>
                          <span className="text-xs text-gray-500">{article.date}</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Breaking News */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-lg text-red-900">Tuoreimmat uutiset</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border-l-4 border-l-red-600">
                    <div className="flex items-center space-x-2 text-xs text-red-600 mb-1">
                      <Clock className="w-3 h-3" />
                      <span>2 tuntia sitten</span>
                    </div>
                    <Link href="#" className="font-medium text-sm hover:text-red-700">
                      EU säätää uusia lakeja tekoälyn käytölle
                    </Link>
                  </div>
                  <div className="p-3 bg-white rounded border-l-4 border-l-orange-500">
                    <div className="flex items-center space-x-2 text-xs text-orange-600 mb-1">
                      <Clock className="w-3 h-3" />
                      <span>4 tuntia sitten</span>
                    </div>
                    <Link href="#" className="font-medium text-sm hover:text-orange-700">
                      Suomalainen peliyritys kerää 50M€ rahoitusta
                    </Link>
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
