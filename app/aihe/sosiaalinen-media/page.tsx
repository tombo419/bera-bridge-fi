import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, TrendingUp, BookOpen, Users, AlertTriangle } from 'lucide-react';
import { PopularArticles } from "@/components/PopularArticles";
import { TagCloud } from "@/components/TagCloud";

const socialMediaArticles = [
  {
    id: "threads-haastaa-twitterin-suomessa",
    title: 'Threads ohittaa X:n käyttäjämäärässä Suomessa - "Twitterin aikakausi on ohi"',
    excerpt: "Metan Threads-sovellus on virallisesti ohittanut X:n aktiivisten käyttäjien määrässä Suomessa.",
    category: "Alustat",
    date: "2025-05-26",
    readTime: "7 min",
    featured: true
  },
  {
    id: "tiktok-algoritmi-tutkimus",
    title: "Uusi tutkimus paljastaa TikTokin algoritmin vaikutukset nuorten mielenterveyteen",
    excerpt: "Helsingin yliopiston tutkimus analysoi sosiaalisen median algoritmien psykologisia vaikutuksia.",
    category: "Tutkimus",
    date: "2025-06-07",
    readTime: "9 min"
  },
  {
    id: "tiktok-kiina-tietoturva-huoli",
    title: "TikTok ja Kiina - miksi tietoturva-asiantuntijat ovat huolissaan?",
    excerpt: "TikTokin yhteydet Kiinaan herättävät huolta tietoturvasta ja kansallisesta turvallisuudesta.",
    category: "Tietoturva",
    date: "2025-06-15",
    readTime: "8 min"
  },
  {
    id: "sosiaalisen-median-riippuvuus",
    title: "Sosiaalisen median riippuvuus - hiljainen epidemia",
    excerpt: "Tutkimus paljastaa sosiaalisen median riippuvuuden laajuuden ja vaikutukset mielenterveyteen.",
    category: "Mielenterveys",
    date: "2025-06-10",
    readTime: "10 min"
  },
  {
    id: "sosiaalinen-media-demokratia",
    title: "Sosiaalinen media ja demokratia - uhka vai mahdollisuus?",
    excerpt: "Miten sosiaalinen media vaikuttaa demokraattiseen keskusteluun ja poliittiseen päätöksentekoon?",
    category: "Politiikka",
    date: "2025-05-30",
    readTime: "11 min"
  },
  {
    id: "parasosiaaliset-suhteet-some-julkkikset",
    title: "Parasosiaaliset suhteet some-julkkiksiin - uusi riippuvuus?",
    excerpt: "Tutkimme ilmiötä, jossa ihmiset kokevat olevansa läheisiä sosiaalisen median vaikuttajien kanssa.",
    category: "Psykologia",
    date: "2025-05-20",
    readTime: "6 min"
  },
  {
    id: "digitaalinen-kiusaaminen-lisaantyy",
    title: "Digitaalinen kiusaaminen lisääntyy - mitä voidaan tehdä?",
    excerpt: "Verkossa tapahtuva kiusaaminen on lisääntynyt huolestuttavasti. Tutkimme syitä ja ratkaisuja.",
    category: "Turvallisuus",
    date: "2025-05-15",
    readTime: "8 min"
  },
  {
    id: "meta-virtuaalimaailma-investointi",
    title: "Meta investoi 2 miljardia euroa virtuaalimaailmojen kehitykseen",
    excerpt: "Teknologiajätti Meta ilmoitti massiivisesta investoinnista metaversumi-teknologioihin.",
    category: "Liiketoiminta",
    date: "2025-05-10",
    readTime: "5 min"
  }
];

const socialMediaTags = ['Sosiaalinen media', 'TikTok', 'Meta', 'Threads', 'Algoritmi', 'Mielenterveys'];

const socialMediaStats = [
  { label: 'Artikkelia aiheesta', value: '20+', icon: BookOpen },
  { label: 'Alustat käsitelty', value: '8', icon: MessageCircle },
  { label: 'Kuukausittaisia lukijoita', value: '30k+', icon: Users },
  { label: 'Kriittisiä analyysejä', value: '12', icon: AlertTriangle }
];

export default function SocialMediaTopicHub() {
  const featuredArticle = socialMediaArticles.find(article => article.featured);
  const otherArticles = socialMediaArticles.filter(article => !article.featured);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <MessageCircle className="w-16 h-16 text-purple-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sosiaalinen Media
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Kriittistä analyysia sosiaalisen median vaikutuksista yhteiskuntaan, mielenterveyteen ja kulttuuriin
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <TagCloud tags={socialMediaTags} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {socialMediaStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-purple-600" />
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
                  <TrendingUp className="w-6 h-6 mr-2 text-pink-500" />
                  Ajankohtaista
                </h2>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="aspect-video relative">
                        <Image
                          src="/threads-vs-twitter.svg"
                          alt={featuredArticle.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6">
                      <Badge className="mb-3 bg-pink-100 text-pink-800">{featuredArticle.category}</Badge>
                      <Link href={`/${featuredArticle.id}`}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kaikki sosiaalisen median artikkelit</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>
                      <Link href={`/${article.id}`}>
                        <CardTitle className="hover:text-purple-600 transition-colors line-clamp-2">
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
                          className="text-purple-600 hover:text-purple-800 text-sm font-medium"
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
            <PopularArticles category="Sosiaalinen media" limit={5} />
            
            {/* Platform Focus */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-purple-500" />
                  Alustat fokuksessa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">TikTok</p>
                    <p className="text-gray-600">Algoritmi ja mielenterveys</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Threads vs X</p>
                    <p className="text-gray-600">Uusi kilpailu Suomessa</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Meta</p>
                    <p className="text-gray-600">Metaversumi-investoinnit</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health & Safety */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                  Turvallisuus ja hyvinvointi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <Link href="/digitaalinen-kiusaaminen-lisaantyy" className="block text-orange-600 hover:text-orange-800">
                    Digitaalinen kiusaaminen
                  </Link>
                  <Link href="/sosiaalisen-median-riippuvuus" className="block text-orange-600 hover:text-orange-800">
                    Sosiaalisen median riippuvuus
                  </Link>
                  <Link href="/nuorten-ruutuaika-kasvaa-huolestuttavasti" className="block text-orange-600 hover:text-orange-800">
                    Nuorten ruutuaika
                  </Link>
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
                  <Link href="/tag/tiktok" className="block text-purple-600 hover:text-purple-800">
                    #TikTok
                  </Link>
                  <Link href="/tag/meta" className="block text-purple-600 hover:text-purple-800">
                    #Meta
                  </Link>
                  <Link href="/tag/mielenterveys" className="block text-purple-600 hover:text-purple-800">
                    #Mielenterveys
                  </Link>
                  <Link href="/tag/algoritmi" className="block text-purple-600 hover:text-purple-800">
                    #Algoritmi
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
    title: 'Sosiaalinen Media - Kriittistä analyysia | Bera Bridge',
    description: 'Syvällistä analyysia sosiaalisen median vaikutuksista yhteiskuntaan, mielenterveyteen ja kulttuuriin. TikTok, Meta, Threads ja muut alustat.',
    keywords: 'sosiaalinen media, TikTok, Meta, Threads, algoritmi, mielenterveys, some'
  };
}