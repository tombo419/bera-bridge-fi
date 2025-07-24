import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { getCategoryInfo } from "@/app/utils/categories"
import { extractTagsFromArticle } from "@/app/utils/tags"
import { ArticleTags } from "@/app/components/TagCloud"
import { MoreFromCategory } from "@/app/components/MoreFromCategory"
import { ArticleNavigation } from "@/app/components/ArticleNavigation"




const relatedArticles = [
  { id: "tekoaly-muuttaa-tyomarkkinoita", title: "Tekoäly muuttaa työmarkkinoita", category: "Teknologia" },
  { id: "metaverse-tulevaisuus", title: "Metaverse ja virtuaalitodellisuuden tulevaisuus", category: "Teknologia" },
  { id: "kryptovaluuttojen-tulevaisuus", title: "Kryptovaluuttojen tulevaisuus", category: "Teknologia" }
];

export default function EsportsStrategyArticle() {
  const tags = extractTagsFromArticle("suomi-esports-strategia-2025", "Politiikka");
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
              <Breadcrumbs 
                items={[
                  { label: 'Etusivu', href: '/' },
                  { label: 'Uutiset', href: '/uutiset' },
                  { label: 'Suomi julkaisee kansallisen e-urheilustrategian - tavoitteen...' }
                ]}
              />
              
                <Link href="/uutiset" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Politiikka</Link>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Suomi julkaisee kansallisen e-urheilustrategian - tavoitteena maailman kärkeen
                </h1>
                <p className="text-gray-600">Julkaistu 12.06.2025</p>
              </div>

              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/finland-esports-strategy.svg"
                  alt="Suomen e-urheilustrategia"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  Opetus- ja kulttuuriministeriö julkaisi tänään kunnianhimoisen kansallisen e-urheilustrategian, jonka
                  tavoitteena on nostaa Suomi maailman johtavaksi e-urheilumaaksi vuoteen 2030 mennessä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Strategian keskeiset tavoitteet</h2>

                <p className="text-gray-700 mb-6">
                  Strategia sisältää kolme pääpilaria: koulutuksen kehittäminen, infrastruktuurin parantaminen ja
                  kansainvälisen kilpailukyvyn vahvistaminen. Ministeriö on varannut strategian toteuttamiseen 50
                  miljoonaa euroa seuraavien viiden vuoden aikana.
                </p>

                <p className="text-gray-700 mb-6">
                  "Haluamme luoda Suomesta e-urheilun Piilaakson", sanoo opetus- ja kulttuuriministeri Maria Ohisalo.
                  "Meillä on vahva perinne teknologiassa ja pelaamisessa, ja nyt on aika yhdistää nämä vahvuudet
                  maailmanluokan e-urheilun ekosysteemiksi."
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Koulutus ja nuorisotyö</h2>

                <p className="text-gray-700 mb-6">
                  Strategian mukaan e-urheilu integroidaan osaksi koulujen liikunnanopetusta ja vapaa-ajan toimintaa.
                  Lukioihin ja ammattioppilaitoksiin perustetaan e-urheilulinjoja, ja korkeakouluihin luodaan e-urheilun
                  tutkinto-ohjelmia.
                </p>

                <p className="text-gray-700 mb-6">
                  Nuorisotyössä panostetaan erityisesti syrjäytymisen ehkäisyyn e-urheilun avulla. Strategia sisältää
                  suunnitelman 200 uuden e-urheilukeskuksen perustamisesta ympäri Suomea.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kansainvälinen kilpailukyky</h2>

                <p className="text-gray-700 mb-6">
                  Suomi pyrkii isännöimään merkittäviä kansainvälisiä e-urheiluturnauksia ja houkuttelemaan
                  kansainvälisiä e-urheiluorganisaatioita sijoittumaan Suomeen. Tavoitteena on tehdä Helsingistä
                  Euroopan e-urheilun pääkaupunki.
                </p>

                <p className="text-gray-700 mb-6">
                  Strategia sisältää myös suunnitelman kansallisen e-urheiluliiton perustamisesta, joka koordinoisi
                  suomalaista e-urheilutoimintaa ja edustaisi Suomea kansainvälisissä järjestöissä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reaktiot ja kritiikki</h2>

                <p className="text-gray-700 mb-6">
                  Strategia on saanut pääosin positiivisen vastaanoton e-urheiluyhteisössä. Suomen E-urheiluliiton
                  puheenjohtaja Mikael Haveri kuvailee strategiaa "historialliseksi askeleeksi e-urheilun
                  tunnustamisessa".
                </p>

                <p className="text-gray-700 mb-6">
                  Kritiikkiä on kuitenkin esitetty strategian painottumisesta kilpaurheiluun perinteisen liikunnan
                  kustannuksella. Liikunnan ja urheilun keskusliiton mukaan resursseja tulisi kohdentaa ensisijaisesti
                  fyysisen aktiivisuuden edistämiseen.
                </p>
              
              <MoreFromCategory 
                currentArticleId="suomi-esports-strategia-2025"
                category="Politiikka"
                limit={4}
              />
              
                            
              <ArticleTags tags={tags} articleId="suomi-esports-strategia-2025" />
              <ArticleNavigation 
                currentArticleId="suomi-esports-strategia-2025"
                category="Politiikka"
              />
            
</div>
            </div>
          </article>

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
