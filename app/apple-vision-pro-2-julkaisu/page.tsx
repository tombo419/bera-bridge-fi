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

export default function AppleVisionPro2Article() {
  const tags = extractTagsFromArticle("apple-vision-pro-2-julkaisu", "Teknologia");
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
                  { label: 'Teknologia', href: '/teknologia' },
                  { label: 'Apple Vision Pro 2 mullistaa virtuaalitodellisuuden - "Tämä ...' }
                ]}
              />
              
                <Link href="/teknologia" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Teknologia</Link>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Apple Vision Pro 2 mullistaa virtuaalitodellisuuden - "Tämä muuttaa kaiken"
                </h1>
                <p className="text-gray-600">Julkaistu 22.06.2025</p>
              </div>

              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/apple-vision-pro-2.svg"
                  alt="Apple Vision Pro 2"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  Apple esitteli eilen Vision Pro 2:n, joka lupaa mullistaa virtuaali- ja lisätyn todellisuuden
                  kokemuksen. Uusi laite on 40% kevyempi, tarjoaa 8K-resoluution per silmä ja maksaa 2,499 euroa -
                  merkittävästi vähemmän kuin edeltäjänsä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tekniset parannukset</h2>

                <p className="text-gray-700 mb-6">
                  Vision Pro 2 sisältää Applen uuden M4 Pro -sirun, joka mahdollistaa fotorealistisen grafiikan ja lähes
                  viiveettömän seurannan. Laitteen uusi OLED-näyttöteknologia tarjoaa 8K-resoluution per silmä, mikä on
                  merkittävä parannus edeltäjän 4K-näyttöihin verrattuna.
                </p>

                <p className="text-gray-700 mb-6">
                  Erityisesti silmien seuranta on parantunut huomattavasti. Uusi järjestelmä pystyy seuraamaan
                  silmänliikkeitä 240 Hz taajuudella, mikä tekee käyttöliittymän navigoinnista luonnollista ja
                  intuitiivista. Käsien seuranta toimii nyt myös hämärässä valaistuksessa.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Akkukeston mullistus</h2>

                <p className="text-gray-700 mb-6">
                  Yksi suurimmista parannuksista on akkukesto. Vision Pro 2 toimii nyt 6 tuntia yhdellä latauksella,
                  mikä on kaksinkertainen määrä edeltäjään verrattuna. Lisäksi laite tukee langallista latausta käytön
                  aikana, mikä mahdollistaa pitkät työsessiot.
                </p>

                <p className="text-gray-700 mb-6">
                  "Akkukesto oli suurin este ensimmäisen Vision Pron laajemmalle käytölle", kommentoi Applen
                  toimitusjohtaja Tim Cook. "Vision Pro 2:lla voit työskennellä koko päivän tai nauttia elokuvista ilman
                  huolta akun loppumisesta."
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Uudet sovellukset ja ominaisuudet</h2>

                <p className="text-gray-700 mb-6">
                  Apple esitteli myös uusia sovelluksia, jotka hyödyntävät laitteen parannettuja ominaisuuksia.
                  "Immersive Office" mahdollistaa virtuaalisen työympäristön luomisen, jossa voi käyttää useita näyttöjä
                  ja työkaluja samanaikaisesti.
                </p>

                <p className="text-gray-700 mb-6">
                  "Spatial FaceTime" tuo videoneuvottelut uudelle tasolle, kun osallistujat näkyvät kolmiulotteisina
                  hologrammeina. Microsoft on jo ilmoittanut Teams-integraatiosta, joka tulee saataville laitteen
                  lanseerauksen yhteydessä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pelaamisen vallankumous</h2>

                <p className="text-gray-700 mb-6">
                  Vision Pro 2 tuo myös merkittäviä parannuksia pelaamiseen. Uusi "Game Mode" optimoi laitteen
                  suorituskyvyn pelejä varten ja vähentää viivettä minimiin. Apple on tehnyt yhteistyötä suurten
                  pelistudioiden kanssa tuodakseen AAA-pelejä alustalle.
                </p>

                <p className="text-gray-700 mb-6">
                  Epic Games on jo vahvistanut Fortniten saapuvan Vision Pro 2:lle, ja Valve on ilmoittanut Half-Life:
                  Alyx -pelin optimoidusta versiosta. Nämä pelit hyödyntävät laitteen parannettua grafiikkasuorituskykyä
                  ja tarkkaa käsien seurantaa.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vaikutus työelämään</h2>

                <p className="text-gray-700 mb-6">
                  Asiantuntijat ennustavat Vision Pro 2:n mullistavan etätyön ja yhteistyön. Laitteen parannettu
                  ergonomia ja pidempi akkukesto tekevät siitä käyttökelpoisen työvälineen ensimmäistä kertaa.
                </p>

                <p className="text-gray-700 mb-6">
                  "Tämä voi olla se hetki, jolloin VR siirtyy viihteestä tuottavuustyökaluihin", arvioi teknologia-
                  analyytikko Mika Lahtinen. "Vision Pro 2:n kanssa voit korvata perinteiset monitorit ja luoda
                  rajattoman työympäristön."
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kilpailijoiden reaktiot</h2>

                <p className="text-gray-700 mb-6">
                  Applen ilmoitus on saanut kilpailijat reagoimaan nopeasti. Meta ilmoitti välittömästi Quest 4:n
                  kehityksestä, ja Google vahvisti palaavansa VR-markkinoille uudella laitteella vuoden 2025 lopulla.
                </p>

                <p className="text-gray-700 mb-6">
                  "Apple on asettanut riman erittäin korkealle", myöntää Metan VR-divisioonan johtaja Andrew Bosworth.
                  "Meidän täytyy vastata innovaatioilla, jotka tekevät VR:stä vielä helpommin lähestyttävää."
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Saatavuus ja hinnoittelu</h2>

                <p className="text-gray-700 mb-6">
                  Vision Pro 2 tulee myyntiin Suomessa 15. syyskuuta 2025 hintaan 2,499 euroa. Ennakkotilaukset alkavat
                  1. elokuuta, ja Apple on luvannut riittävän saatavuuden lanseerauksessa, toisin kuin edeltäjän kanssa.
                </p>

                <p className="text-gray-700 mb-6">
                  Suomessa laitetta myydään Applen omien myymälöiden lisäksi Elisassa, Verkkokauppa.comissa ja muissa
                  suurissa elektroniikkaketjuissa. Apple on myös avannut VR-kokeilupisteitä Helsinkiin, Tampereelle ja
                  Turkuun.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden visio</h2>

                <p className="text-gray-700 mb-6">
                  Apple näkee Vision Pro 2:n ensimmäisenä askeleena kohti tulevaisuutta, jossa virtuaali- ja fyysinen
                  maailma sulautuvat saumattomasti yhteen. Yhtiö on jo ilmoittanut työstävänsä AR-laseja, jotka tulevat
                  markkinoille vuonna 2027.
                </p>

                <p className="text-gray-700 mb-6">
                  "Tämä on vasta alkua", lupaa Tim Cook. "Vision Pro 2 on ensimmäinen laite, joka todella tuo spatial
                  computing -kokemuksen massoille. Seuraavien vuosien aikana näemme, miten tämä teknologia muuttaa
                  tapaamme työskennellä, pelata ja olla vuorovaikutuksessa toisten kanssa."
                </p>
              
              <MoreFromCategory 
                currentArticleId="apple-vision-pro-2-julkaisu"
                category="Teknologia"
                limit={4}
              />
              
                            
              <ArticleTags tags={tags} articleId="apple-vision-pro-2-julkaisu" />
              <ArticleNavigation 
                currentArticleId="apple-vision-pro-2-julkaisu"
                category="Teknologia"
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
