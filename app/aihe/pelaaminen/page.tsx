import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Trophy, TrendingUp, BookOpen, Users } from 'lucide-react';
import { PopularArticles } from "@/app/components/PopularArticles";
import { TagCloud } from "@/app/components/TagCloud";

const gamingArticles = [
  {
    id: "suomi-voittaa-cs2-maailmanmestaruuden",
    title: "Suomalaisjoukkue ENCE voittaa Counter-Strike 2 maailmanmestaruuden - historiallinen hetki",
    excerpt: "ENCE teki historiaa voittamalla CS2:n ensimmäisen virallisen maailmanmestaruuden Kölnissä järjestetyssä turnauksessa.",
    category: "E-urheilu",
    date: "2025-06-06",
    readTime: "12 min",
    featured: true
  },
  {
    id: "verkkopelaamisen-psykologia",
    title: "Verkkopelaamisen psykologia ja sosiaalinen vuorovaikutus",
    excerpt: "Tutkimus siitä, miten online-pelit muokkaavat sosiaalisia suhteita ja yhteisöllisyyttä digitaalisessa ympäristössä.",
    category: "Tutkimus",
    date: "2025-06-16",
    readTime: "8 min"
  },
  {
    id: "suomi-esports-strategia-2025",
    title: "Suomi julkaisee kansallisen e-urheilustrategian",
    excerpt: "Opetus- ja kulttuuriministeriö esittelee kunnianhimoisen suunnitelman Suomen nostamiseksi e-urheilun kärkimaaksi.",
    category: "Politiikka",
    date: "2025-06-29",
    readTime: "6 min"
  },
  {
    id: "esports-urheilu",
    title: "E-urheilu legitiminä urheilulajina",
    excerpt: "Keskustelu e-urheilun asemasta perinteisten urheilulajien rinnalla kiihtyy. Mitä tämä tarkoittaa tulevaisuudelle?",
    category: "Kulttuuri",
    date: "2025-06-20",
    readTime: "7 min"
  },
  {
    id: "naisten-osuus-e-urheilussa-kasvaa",
    title: "Naisten osuus e-urheilussa kasvaa - tasa-arvon edistyminen",
    excerpt: "E-urheilu on perinteisesti miesten dominoima ala, mutta tilanne on muuttumassa positiiviseen suuntaan.",
    category: "Tasa-arvo",
    date: "2025-06-12",
    readTime: "5 min"
  },
  {
    id: "mobiilipelien-mikromaksut-ongelma",
    title: "Mobiilipelien mikromaksut - kasvava ongelma?",
    excerpt: "Mikromaksujen yleistyminen mobiilipeleissä herättää huolta erityisesti nuorten keskuudessa.",
    category: "Talous",
    date: "2025-06-08",
    readTime: "6 min"
  },
  {
    id: "pelialan-tyoelama-burnout",
    title: "Pelialan työelämä ja burnout - hiljainen kriisi",
    excerpt: "Peliteollisuuden työntekijät kärsivät burnoutista tavallista enemmän. Mitä alan tulisi tehdä?",
    category: "Työelämä",
    date: "2025-06-01",
    readTime: "9 min"
  },
  {
    id: "suomen-peliteollisuus-kasvaa-ennatystahtia",
    title: "Suomen peliteollisuus kasvaa ennätystahtia",
    excerpt: "Suomalainen peliteollisuus jatkaa vahvaa kasvuaan ja vakiinnuttaa asemaansa maailmanmarkkinoilla.",
    category: "Liiketoiminta",
    date: "2025-05-28",
    readTime: "8 min"
  }
];

const gamingTags = ['Pelaaminen', 'E-urheilu', 'Pelit', 'Gaming', 'Mobiilipelit', 'Counter-Strike'];

const gamingStats = [
  { label: 'Artikkelia aiheesta', value: '15+', icon: BookOpen },
  { label: 'E-urheilu artikkelia', value: '8', icon: Trophy },
  { label: 'Kuukausittaisia lukijoita', value: '25k+', icon: Users },
  { label: 'Nousussa olevat aiheet', value: '4', icon: TrendingUp }
];

export default function GamingTopicHub() {
  const featuredArticle = gamingArticles.find(article => article.featured);
  const otherArticles = gamingArticles.filter(article => !article.featured);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Gamepad2 className="w-16 h-16 text-green-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pelaaminen ja E-urheilu
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Pelikulttuurin, e-urheilun ja peliteollisuuden uusimmat kehitykset ja analyysit
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <TagCloud tags={gamingTags} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {gamingStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            {featuredArticle && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
                  Pääjuttu
                </h2>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="aspect-video relative">
                        <Image
                          src="/ence-championship.svg"
                          alt={featuredArticle.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6">
                      <Badge className="mb-3 bg-yellow-100 text-yellow-800">{featuredArticle.category}</Badge>
                      <Link href={`/${featuredArticle.id}`}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                          {featuredArticle.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4">{featuredArticle.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{new Date(featuredArticle.date).toLocaleDateString('fi-FI')}</span>
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>
            )}

            {/* Articles Grid */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kaikki pelaamisen artikkelit</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>
                      <Link href={`/${article.id}`}>
                        <CardTitle className="hover:text-green-600 transition-colors line-clamp-2">
                          {article.title}
                        </CardTitle>
                      </Link>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {new Date(article.date).toLocaleDateString('fi-FI')}
                        </span>
                        <Link 
                          href={`/${article.id}`}
                          className="text-green-600 hover:text-green-800 text-sm font-medium"
                        >
                          Lue lisää →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <PopularArticles category="Pelaaminen" limit={5} />
            
            {/* E-Sports Highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                  E-urheilu korostukset
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">ENCE CS2 voitto</p>
                    <p className="text-gray-600">Ensimmäinen suomalainen MM-voitto</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Kansallinen strategia</p>
                    <p className="text-gray-600">Suomi panostaa e-urheiluun</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Naisten e-urheilu</p>
                    <p className="text-gray-600">Tasa-arvon edistyminen</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Aiheeseen liittyvät tagit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/tag/e-urheilu" className="block text-green-600 hover:text-green-800">
                    #E-urheilu
                  </Link>
                  <Link href="/tag/counter-strike" className="block text-green-600 hover:text-green-800">
                    #Counter-Strike
                  </Link>
                  <Link href="/tag/mobiilipelit" className="block text-green-600 hover:text-green-800">
                    #Mobiilipelit
                  </Link>
                  <Link href="/tag/peliteollisuus" className="block text-green-600 hover:text-green-800">
                    #Peliteollisuus
                  </Link>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: 'Pelaaminen ja E-urheilu | Bera Bridge',
    description: 'Pelikulttuurin, e-urheilun ja peliteollisuuden uusimmat kehitykset. Syvällistä analyysia pelaamisesta ja sen vaikutuksista yhteiskuntaan.',
    keywords: 'pelaaminen, e-urheilu, pelit, gaming, counter-strike, mobiilipelit, esports'
  };
}