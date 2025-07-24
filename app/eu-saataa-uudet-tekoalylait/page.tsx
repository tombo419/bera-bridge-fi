import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { getCategoryInfo } from "@/utils/categories"
import { extractTagsFromArticle } from "@/utils/tags"
import { ArticleTags } from "@/components/TagCloud"



export default function EUAILawArticle() {
  const tags = extractTagsFromArticle("eu-saataa-uudet-tekoalylait", "Politiikka");
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
                  { label: 'EU säätää maailman tiukimmat tekoälylait - "Digitaalisten oi...' }
                ]}
              />
              
                <Link href="/uutiset" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Politiikka</Link>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  EU säätää maailman tiukimmat tekoälylait - "Digitaalisten oikeuksien perustuslaki"
                </h1>
                <p className="text-gray-600">Julkaistu 10.07.2025</p>
              </div>

              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/metaverse-identity.svg&text=EU+AI+Act+2025"
                  alt="EU:n tekoälylait"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  Euroopan unioni hyväksyi eilen maailman tiukimmat tekoälyä koskevat lait, jotka tulevat voimaan 1.
                  tammikuuta 2026. Uusi lainsäädäntö asettaa tiukat rajoitukset tekoälyn käytölle ja vaatii yrityksiltä
                  läpinäkyvyyttä algoritmien toiminnasta.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lain keskeiset kohdat</h2>

                <p className="text-gray-700 mb-6">
                  Uusi AI Act 2.0 kieltää kokonaan tekoälyn käytön sosiaalisen luottoluokituksen, massamittaisen
                  kasvojentunnistuksen ja manipulatiivisen mainonnan alueilla. Lisäksi laki asettaa tiukat vaatimukset
                  "korkean riskin" tekoälysovelluksille, kuten rekrytointi- ja lainanhakujärjestelmille.
                </p>

                <p className="text-gray-700 mb-6">
                  "Tämä on digitaalisten oikeuksien perustuslaki", kommentoi EU:n digitaalikomissaari Margrethe
                  Vestager. "Haluamme varmistaa, että tekoäly palvelee ihmisiä, ei päinvastoin."
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vaikutukset teknologiayrityksiin</h2>

                <p className="text-gray-700 mb-6">
                  Suurimmat vaikutukset kohdistuvat teknologiajätteihin kuten Googlelle, Metalle ja OpenAI:lle.
                  Yritykset joutuvat paljastamaan algoritmien toimintaperiaatteet ja osoittamaan, että niiden
                  järjestelmät eivät syrji käyttäjiä.
                </p>

                <p className="text-gray-700 mb-6">
                  Erityisesti generatiivisen tekoälyn kehittäjät joutuvat noudattamaan tiukkoja sääntöjä. Kaikkien yli
                  10 miljardin parametrin mallien on läpäistävä EU:n turvallisuustestit ennen julkaisua.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sosiaalisen median mullistus</h2>

                <p className="text-gray-700 mb-6">
                  Laki kieltää sosiaalisen median alustoilta "dark pattern" -suunnittelun ja vaatii selkeät selitykset
                  siitä, miksi käyttäjä näkee tiettyä sisältöä. Algoritmisuositukset on voitava kytkeä pois päältä, ja
                  käyttäjillä on oikeus kronologiseen syötteeseen.
                </p>

                <p className="text-gray-700 mb-6">
                  Alle 18-vuotiaiden kohdalla säännöt ovat vielä tiukemmat. Heidän tietojaan ei saa käyttää
                  profilointiin, ja heille suunnattu mainonta on käytännössä kielletty.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Työelämän muutokset</h2>

                <p className="text-gray-700 mb-6">
                  Laki asettaa tiukat rajat tekoälyn käytölle työpaikoilla. Työntekijöiden valvonta tekoälyllä on
                  sallittua vain poikkeustapauksissa, ja henkilöstöllä on oikeus saada selitys tekoälyn tekemistä
                  päätöksistä, jotka vaikuttavat heihin.
                </p>

                <p className="text-gray-700 mb-6">
                  Rekrytointitekoäly on testattava säännöllisesti syrjinnän varalta, ja hakijoilla on oikeus vaatia
                  ihmisen tekemä arviointi tekoälyn päätöksen lisäksi.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sakot ja valvonta</h2>

                <p className="text-gray-700 mb-6">
                  Lain rikkomisesta voi seurata jopa 7% yrityksen globaalista liikevaihdosta sakkoina. Tämä on
                  merkittävästi korkeampi kuin GDPR:n 4% maksimisakkotaso. Valvontaa hoitavat kansalliset
                  tietosuojaviranomaiset yhteistyössä uuden EU AI Office -viraston kanssa.
                </p>

                <p className="text-gray-700 mb-6">
                  Suomessa valvonnasta vastaa tietosuojavaltuutetun toimisto, joka on saanut merkittävää lisärahoitusta
                  uusien tehtävien hoitamiseen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Yritysten reaktiot</h2>

                <p className="text-gray-700 mb-6">
                  Teknologiayritykset ovat reagoineet lakiin ristiriitaisesti. Osa pitää sitä innovaatiota
                  tukahduttavana byrokratiana, kun taas toiset näkevät sen mahdollisuutena luoda vastuullisempaa
                  tekoälyä.
                </p>

                <p className="text-gray-700 mb-6">
                  "Laki on liian tiukka ja hidastaa eurooppalaista innovaatiota", kritisoi Googlen Eurooppa-johtaja Matt
                  Brittin. Toisaalta OpenAI:n toimitusjohtaja Sam Altman on todennut, että "selkeät säännöt auttavat
                  kaikkia toimijoita".
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vaikutus kuluttajiin</h2>

                <p className="text-gray-700 mb-6">
                  Kuluttajat hyötyvät laista monin tavoin. Heillä on oikeus saada selitys tekoälyn tekemistä
                  päätöksistä, jotka vaikuttavat heihin merkittävästi. Lisäksi manipulatiivisen mainonnan kieltäminen
                  suojaa erityisesti haavoittuvia ryhmiä.
                </p>

                <p className="text-gray-700 mb-6">
                  "Tämä antaa kuluttajille takaisin kontrollin omista tiedoistaan ja päätöksistään", iloitsee
                  Kuluttajaliiton lakimies Sanna Koskinen. "Enää tekoäly ei voi manipuloida meitä huomaamattamme."
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kansainväliset vaikutukset</h2>

                <p className="text-gray-700 mb-6">
                  EU:n laki vaikuttaa globaalisti, sillä monet yritykset päättävät noudattaa EU:n sääntöjä
                  maailmanlaajuisesti yksinkertaisuuden vuoksi. Tätä kutsutaan "Brysselin efektiksi".
                </p>

                <p className="text-gray-700 mb-6">
                  Yhdysvallat ja Kiina seuraavat EU:n esimerkkiä ja valmistelevat omia tekoälylakejaan. Britanniakin on
                  ilmoittanut harkitsevansa vastaavaa lainsäädäntöä Brexit-eron jälkeen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden näkymät</h2>

                <p className="text-gray-700 mb-6">
                  Lain täytäntöönpano alkaa asteittain. Ensimmäiset kiellot tulevat voimaan jo syksyllä 2025, kun taas
                  monimutkaisemmat vaatimukset astuvat voimaan vuoden 2026 aikana.
                </p>

                <p className="text-gray-700 mb-6">
                  "Tämä on historiallinen hetki", summaa EU-parlamentin tekoälytyöryhmän puheenjohtaja Axel Voss.
                  "Olemme ensimmäinen maanosa, joka asettaa tekoälylle selkeät pelisäännöt. Tämä laki tulee olemaan
                  malli muulle maailmalle."
                </p>
              
              <MoreFromCategory 
                currentArticleId="eu-saataa-uudet-tekoalylait"
                category="Politiikka"
                limit={4}
              />
              
                            
              <ArticleTags tags={tags} articleId="eu-saataa-uudet-tekoalylait" />
              <ArticleNavigation 
                currentArticleId="eu-saataa-uudet-tekoalylait"
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
