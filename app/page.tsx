import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Clock, TrendingUp, Users, Zap } from "lucide-react"

const breakingNews = {
  id: "meta-virtuaalimaailma-investointi",
  title: "Meta investoi 2 miljardia euroa virtuaalimaailmojen kehitykseen",
  summary: "Teknologiajätti Meta ilmoitti massiivisesta investoinnista metaversumi-teknologioihin.",
  time: "2 tuntia sitten",
  urgent: true,
}

const featuredStory = {
  id: "suomi-esports-strategia-2025",
  title: "Suomi julkaisee kansallisen e-urheilustrategian - tavoitteena maailman kärkeen",
  summary:
    "Opetus- ja kulttuuriministeriö esittelee kunnianhimoisen suunnitelman Suomen nostamiseksi e-urheilun kärkimaaksi vuoteen 2030 mennessä.",
  image: "/finland-esports-strategy.svg",
  category: "Politiikka",
  readTime: "5 min",
  date: "29.06.2025",
}

const topStories = [
  {
    id: "tiktok-algoritmi-tutkimus",
    title: "Uusi tutkimus paljastaa TikTokin algoritmin vaikutukset nuorten mielenterveyteen",
    summary: "Helsingin yliopiston tutkimus analysoi sosiaalisen median algoritmien psykologisia vaikutuksia.",
    image: "/tiktok-research.svg",
    category: "Tutkimus",
    date: "07.06.2025",
    readTime: "7 min",
  },
  {
    id: "kryptovaluutta-pelaaminen",
    title: "Kryptovaluuttojen integrointi pelimaailmaan herättää huolta",
    summary: "Asiantuntijat varoittavat NFT-pelien ja kryptovaluuttojen riskeistä pelaajille.",
    image: "/crypto-gaming.svg",
    category: "Talous",
    date: "11.07.2025",
    readTime: "4 min",
  },
  {
    id: "tekoaly-moderointi",
    title: "Tekoäly mullistaa sisällön moderoinnin sosiaalisessa mediassa",
    summary: "Uudet AI-työkalut lupaavat tehokkaampaa haitallisen sisällön tunnistamista.",
    image: "/ai-moderation.svg",
    category: "Teknologia",
    date: "27.05.2025",
    readTime: "6 min",
  },
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

const featuredArticles = [
  {
    id: "suomi-voittaa-cs2-maailmanmestaruuden",
    category: "E-urheilu",
    title: "Suomalaisjoukkue ENCE voittaa Counter-Strike 2 maailmanmestaruuden - historiallinen hetki",
    summary:
      "ENCE teki historiaa voittamalla CS2:n ensimmäisen virallisen maailmanmestaruuden Kölnissä järjestetyssä turnauksessa.",
    image: "/blog-placeholder.svg",
    date: "06.06.2025",
  },
  {
    id: "threads-haastaa-twitterin-suomessa",
    category: "Sosiaalinen media",
    title: 'Threads ohittaa X:n käyttäjämäärässä Suomessa - "Twitterin aikakausi on ohi"',
    summary: "Metan Threads-sovellus on virallisesti ohittanut X:n aktiivisten käyttäjien määrässä Suomessa.",
    image: "/blog-placeholder.svg",
    date: "26.05.2025",
  },
  {
    id: "apple-vision-pro-2-julkaisu",
    category: "Teknologia",
    title: 'Apple Vision Pro 2 mullistaa virtuaalitodellisuuden - "Tämä muuttaa kaiken"',
    summary: "Uusi laite on 40% kevyempi, tarjoaa 8K-resoluution per silmä ja maksaa 2,499 euroa.",
    image: "/blog-placeholder.svg",
    date: "01.06.2025",
  },
  {
    id: "nuorten-ruutuaika-kasvaa-huolestuttavasti",
    category: "Terveys",
    title: "Nuorten ruutuaika kasvaa huolestuttavasti - keskimäärin 9 tuntia päivässä",
    summary: "THL:n uusi tutkimus paljastaa huolestuttavan kehityksen suomalaisten nuorten ruutuajan käytössä.",
    image: "/blog-placeholder.svg",
    date: "09.07.2025",
  },
  {
    id: "eu-saataa-uudet-tekoalylait",
    category: "Politiikka",
    title: 'EU säätää maailman tiukimmat tekoälylait - "Digitaalisten oikeuksien perustuslaki"',
    summary: "Euroopan unioni hyväksyi maailman tiukimmat tekoälyä koskevat lait, jotka tulevat voimaan 2026.",
    image: "/blog-placeholder.svg",
    date: "08.07.2025",
  },
  {
    id: "verkkopelaamisen-psykologia",
    category: "Pelaaminen ja e-urheilu",
    title: "Verkkopelaamisen psykologia ja sosiaalinen vuorovaikutus",
    summary:
      "Tutkimus siitä, miten online-pelit muokkaavat sosiaalisia suhteita ja yhteisöllisyyttä digitaalisessa ympäristössä.",
    image: "/gaming-psychology.svg",
    date: "16.06.2025",
  },
]

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
            {/* Featured Story */}
            <section className="mb-12">
              <Card className="bg-white shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3">
                    <div className="aspect-video relative">
                      <Image
                        src={featuredStory.image || "/blog-placeholder.svg?height=400&width=600"}
                        alt={featuredStory.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600">{featuredStory.category}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{featuredStory.title}</h2>
                    <p className="text-gray-600 mb-4">{featuredStory.summary}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{featuredStory.date}</span>
                      <span>{featuredStory.readTime} lukuaika</span>
                    </div>
                    <Button asChild>
                      <Link href={`/${featuredStory.id}`}>Lue artikkeli</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </section>

            {/* Top Stories */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Päivän tärkeimmät</h2>
                <Link href="/uutiset" className="text-blue-600 hover:text-blue-800 font-medium">
                  Katso kaikki →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topStories.map((story) => (
                  <Card key={story.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-video relative">
                      <Image
                        src={story.image || "/blog-placeholder.svg"}
                        alt={story.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {story.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg leading-tight">{story.title}</CardTitle>
                      <CardDescription className="text-sm">{story.summary}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{story.date}</span>
                        <span>{story.readTime}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent" asChild>
                        <Link href={`/${story.id}`}>Lue lisää</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
