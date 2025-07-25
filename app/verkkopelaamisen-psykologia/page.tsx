import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { getCategoryInfo } from "@/app/utils/categories"
import { extractTagsFromArticle } from "@/app/utils/tags"
import { ContextualLinks } from "@/app/components/ContextualLinks"
import { ArticleTags } from "@/app/components/TagCloud"
import { MoreFromCategory } from "@/app/components/MoreFromCategory"
import { ArticleNavigation } from "@/app/components/ArticleNavigation"




const relatedArticles = [
  { id: "tekoaly-muuttaa-tyomarkkinoita", title: "Tekoäly muuttaa työmarkkinoita", category: "Teknologia" },
  { id: "metaverse-tulevaisuus", title: "Metaverse ja virtuaalitodellisuuden tulevaisuus", category: "Teknologia" },
  { id: "kryptovaluuttojen-tulevaisuus", title: "Kryptovaluuttojen tulevaisuus", category: "Teknologia" }
];

export default function ArticlePage() {
  const tags = extractTagsFromArticle("verkkopelaamisen-psykologia", "Pelaaminen ja e-urheilu");

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
              <Breadcrumbs 
                items={[
                  { label: 'Etusivu', href: '/' },
                  { label: 'Uutiset', href: '/uutiset' },
                  { label: 'Verkkopelaamisen psykologia ja sosiaalinen vuorovaikutus' }
                ]}
              />
              
                <Link href="/uutiset" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Pelaaminen ja e-urheilu</Link>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Verkkopelaamisen psykologia ja sosiaalinen vuorovaikutus
                </h1>
                <p className="text-gray-600">Julkaistu 01.06.2025</p>
              </div>

              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/metaverse-identity.svg"
                  alt="Verkkopelaamisen psykologia"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  Verkkopelaaminen on muuttanut merkittävästi tapaa, jolla ihmiset ovat vuorovaikutuksessa keskenään
                  digitaalisessa ympäristössä. Tämä tutkimus tarkastelee pelaamisen psykologisia vaikutuksia ja
                  yhteisöllisyyden muotoja.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Sosiaalisen vuorovaikutuksen uudet muodot
                </h2>

                <p className="text-gray-700 mb-6">
                  Online-pelit tarjoavat ainutlaatuisen alustan sosiaaliselle vuorovaikutukselle. Pelaajat muodostavat
                  yhteisöjä, jotka voivat olla merkityksellisempiä kuin monet reaalimaailman suhteet. Nämä digitaaliset
                  yhteisöt tarjoavat kuuluvuuden tunteen ja mahdollisuuden kehittää uusia taitoja.
                </p>

                <p className="text-gray-700 mb-6">
                  Tutkimukset osoittavat, että verkkopelaaminen voi parantaa tiimityötaitoja, strategista ajattelua ja
                  ongelmanratkaisukykyä. Kilpailullinen pelaaminen, erityisesti e-urheilu, on kehittänyt omia
                  professionaalisia rakenteita ja uraohjauksia.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Psykologiset vaikutukset ja hyvinvointi</h2>

                <p className="text-gray-700 mb-6">
                  Vaikka pelaaminen voi tarjota positiivisia sosiaalisia kokemuksia, on tärkeää tunnistaa myös
                  mahdolliset riskit. Liiallinen pelaaminen voi johtaa sosiaaliseen eristyneisyyteen, unihäiriöihin ja
                  akateemisten tai ammatillisten velvollisuuksien laiminlyöntiin.
                </p>

                <p className="text-gray-700 mb-6">
                  Tasapainon löytäminen digitaalisen ja fyysisen maailman välillä on keskeistä hyvinvoinnin kannalta.
                  Peliyhteisöt voivat tukea tätä tasapainoa tarjoamalla ohjeistusta ja vertaistukea.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden näkymät</h2>

                <p className="text-gray-700 mb-6">
                  Verkkopelaamisen rooli yhteiskunnassa jatkaa kasvuaan. Virtuaalitodellisuus ja lisätty todellisuus
                  tuovat uusia ulottuvuuksia sosiaaliseen vuorovaikutukseen pelien kautta. On tärkeää, että kehitämme
                  ymmärrystä näiden teknologioiden vaikutuksista ihmisten käyttäytymiseen ja hyvinvointiin.
                </p>
              
              <MoreFromCategory 
                currentArticleId="verkkopelaamisen-psykologia"
                category="Pelaaminen ja e-urheilu"
                limit={4}
              />
              
                            
              <ArticleTags tags={tags} articleId="verkkopelaamisen-psykologia" />
              <ArticleNavigation 
                currentArticleId="verkkopelaamisen-psykologia"
                category="Pelaaminen ja e-urheilu"
              />
            
</div>
                
                <ContextualLinks 
                  currentArticleId="verkkopelaamisen-psykologia"
                  content="Sample content for contextual analysis"
                  limit={3}
                />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Aiheeseen liittyvät artikkelit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatedArticles.map((article) => (
                    <div key={article.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <Link href={`/${article.id}`} className="block hover:text-blue-600 transition-colors">
                        <h3 className="font-medium text-gray-900 mb-1">{article.title}</h3>
                        <p className="text-sm text-gray-600">{article.category}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
