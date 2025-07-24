import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, BookOpen, Users } from 'lucide-react';
import { PopularArticles } from "@/components/PopularArticles";
import { TagCloud } from "@/components/TagCloud";

const aiArticles = [
  {
    id: "tekoaly-muuttaa-koulutusta-suomessa",
    title: "Tekoäly mullistaa koulutuksen Suomessa - opettajat pelkäävät työpaikkojaan",
    excerpt: "Tekoäly muuttaa koulutusta radikaalisti. Opettajat pelkäävät työpaikkojaan, mutta teknologia voi myös parantaa oppimista.",
    category: "Koulutus",
    date: "2025-07-15",
    readTime: "8 min",
    featured: true
  },
  {
    id: "tekoaly-moderointi",
    title: "Tekoäly mullistaa sisällön moderoinnin sosiaalisessa mediassa",
    excerpt: "Uudet AI-työkalut lupaavat tehokkaampaa haitallisen sisällön tunnistamista.",
    category: "Teknologia",
    date: "2025-07-12",
    readTime: "6 min"
  },
  {
    id: "tekoaly-luo-sisaltoa-luovuuden-loppu",
    title: "Tekoäly luo sisältöä - onko luovuuden aikakausi ohi?",
    excerpt: "Tekoäly kykenee luomaan tekstiä, kuvia, musiikkia ja videoita. Mitä tämä tarkoittaa luoville aloille ja ihmisen luovuudelle?",
    category: "Kulttuuri",
    date: "2025-07-08",
    readTime: "10 min"
  },
  {
    id: "tekoaly-ja-peliteollisuus",
    title: "Tekoäly ja peliteollisuus: Kun koneet oppivat pelaamaan",
    excerpt: "Miten tekoäly muuttaa pelien kehitystä ja pelaajien kokemuksia? Tutkimme AI:n roolia modernissa peliteollisuudessa.",
    category: "Pelaaminen",
    date: "2025-07-05",
    readTime: "7 min"
  },
  {
    id: "suomalaiset-startup-yritykset-tekoaly",
    title: "Suomalaiset startup-yritykset mullistavat tekoälyä",
    excerpt: "Suomalaiset teknologiayritykset ovat nousseet tekoälyn kärkikastiin. Tutkimme menestystarinoita ja tulevaisuuden näkymiä.",
    category: "Liiketoiminta",
    date: "2025-06-30",
    readTime: "9 min"
  },
  {
    id: "eu-saataa-uudet-tekoalylait",
    title: "EU säätää maailman tiukimmat tekoälylait",
    excerpt: "Euroopan unioni hyväksyi maailman tiukimmat tekoälyä koskevat lait, jotka tulevat voimaan 2026.",
    category: "Politiikka",
    date: "2025-06-25",
    readTime: "5 min"
  }
];

const aiTags = ['Tekoäly', 'AI', 'Koneoppiminen', 'Teknologia', 'Automaatio', 'Etiikka'];

const aiStats = [
  { label: 'Artikkelia aiheesta', value: '12+', icon: BookOpen },
  { label: 'Käsiteltyjä aihealueita', value: '6', icon: Brain },
  { label: 'Kuukausittaisia lukijoita', value: '15k+', icon: Users },
  { label: 'Nousussa olevat aiheet', value: '3', icon: TrendingUp }
];

export default function AITopicHub() {
  const featuredArticle = aiArticles.find(article => article.featured);
  const otherArticles = aiArticles.filter(article => !article.featured);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Brain className="w-16 h-16 text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tekoäly ja AI
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Syvällistä analyysia tekoälyn vaikutuksista yhteiskuntaan, työelämään ja tulevaisuuteen
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <TagCloud tags={aiTags} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aiStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-blue-600" />
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
                  <TrendingUp className="w-6 h-6 mr-2 text-orange-500" />
                  Nostettu esiin
                </h2>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="aspect-video relative">
                        <Image
                          src="/ai-education.svg"
                          alt={featuredArticle.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6">
                      <Badge className="mb-3">{featuredArticle.category}</Badge>
                      <Link href={`/${featuredArticle.id}`}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kaikki tekoälyartikkelit</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>
                      <Link href={`/${article.id}`}>
                        <CardTitle className="hover:text-blue-600 transition-colors line-clamp-2">
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
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
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
            <PopularArticles limit={5} />
            
            {/* Related Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Aiheeseen liittyvät tagit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/tag/teknologia" className="block text-blue-600 hover:text-blue-800">
                    #Teknologia
                  </Link>
                  <Link href="/tag/tutkimus" className="block text-blue-600 hover:text-blue-800">
                    #Tutkimus
                  </Link>
                  <Link href="/tag/etiikka" className="block text-blue-600 hover:text-blue-800">
                    #Etiikka
                  </Link>
                  <Link href="/tag/innovaatio" className="block text-blue-600 hover:text-blue-800">
                    #Innovaatio
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
    title: 'Tekoäly ja AI - Syvällistä analyysia | Bera Bridge',
    description: 'Kaikki tekoälyyn liittyvät artikkelit yhdessä paikassa. Tutkimme AI:n vaikutuksia yhteiskuntaan, työelämään ja tulevaisuuteen.',
    keywords: 'tekoäly, AI, koneoppiminen, teknologia, automaatio, etiikka'
  };
}