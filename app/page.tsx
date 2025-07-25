import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Clock, TrendingUp, Users, Zap } from "lucide-react"
import { PopularArticles } from "@/app/components/PopularArticles"
import { RecentArticles } from "@/app/components/RecentArticles"
import { CrossCategoryRecommendations } from "@/app/components/CrossCategoryRecommendations"

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
                        <Badge className="bg-blue-600 text-white">
                          {featuredStory.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 p-6">
                    <CardHeader className="p-0">
                      <CardTitle className="text-xl mb-2">
                        <Link
                          href={`/${featuredStory.id}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {featuredStory.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {featuredStory.summary}
                      </CardDescription>
                    </CardHeader>
                    <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredStory.readTime}
                        </span>
                      </div>
                      <span>{featuredStory.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Top Stories Grid */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Päivän tärkeimmät</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topStories.map((story) => (
                  <Card key={story.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-video relative">
                      <Image
                        src={story.image || "/blog-placeholder.svg?height=200&width=300"}
                        alt={story.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {story.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        <Link
                          href={`/${story.id}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {story.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{story.summary}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {story.readTime}
                        </span>
                        <span>{story.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Trending Topics */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trendaavat aiheet</h2>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic) => (
                  <Link
                    key={topic}
                    href={`/tag/${encodeURIComponent(topic.toLowerCase())}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                  >
                    #{topic}
                  </Link>
                ))}
              </div>
            </section>

            {/* Featured Articles */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Suosituimmat artikkelit</h2>
              <div className="space-y-6">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="aspect-video relative">
                          <Image
                            src={article.image || "/blog-placeholder.svg?height=200&width=300"}
                            alt={article.title}
                            fill
                            className="object-cover rounded-l-lg"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{article.category}</Badge>
                          <span className="text-sm text-gray-500">{article.date}</span>
                        </div>
                        <h3 className="font-semibold text-xl mb-2">
                          <Link
                            href={`/${article.id}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {article.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 line-clamp-2">{article.summary}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Cross-Category Recommendations */}
            <CrossCategoryRecommendations />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Category Highlights */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Kategoriat</h2>
                <div className="space-y-4">
                  {categoryHighlights.map((category) => (
                    <Card key={category.category} className="bg-white shadow-sm">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center">
                          <category.icon className="w-5 h-5 mr-2 text-blue-600" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          {category.articles.map((article, index) => (
                            <div key={index} className="flex justify-between items-start">
                              <Link
                                href="#"
                                className="text-sm text-gray-700 hover:text-blue-600 transition-colors line-clamp-2 flex-1 mr-2"
                              >
                                {article.title}
                              </Link>
                              <span className="text-xs text-gray-500 whitespace-nowrap">
                                {article.time}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Popular Articles Sidebar */}
              <PopularArticles />

              {/* Recent Articles Sidebar */}
              <RecentArticles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}