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

export default function ScreenTimeStudyArticle() {
  const tags = extractTagsFromArticle("nuorten-ruutuaika-kasvaa-huolestuttavasti", "Terveys");
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
                  { label: 'Tutkimus', href: '/tutkimus' },
                  { label: 'Nuorten ruutuaika kasvaa huolestuttavasti - keskimäärin 9 tu...' }
                ]}
              />
              
                <Link href="/tutkimus" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Terveys</Link>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Nuorten ruutuaika kasvaa huolestuttavasti - keskimäärin 9 tuntia päivässä
                </h1>
                <p className="text-gray-600">Julkaistu 08.07.2025 • THL:n tutkimus</p>
              </div>

              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/youth-screentime-study.svg"
                  alt="Nuorten ruutuaika tutkimus"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  Terveyden ja hyvinvoinnin laitoksen (THL) uusi tutkimus paljastaa huolestuttavan kehityksen: 13-17
                  -vuotiaiden suomalaisten keskimääräinen ruutuaika on kasvanut 9 tuntiin päivässä. Kasvu on ollut
                  erityisen nopeaa viimeisen kahden vuoden aikana.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dramaattinen kasvu pandemiasta lähtien</h2>

                <p className="text-gray-700 mb-6">
                  Tutkimus seurasi 5,000 nuoren ruutuajan kehitystä vuosina 2020-2025. Pandemia-ajan 6 tunnista
                  päivittäinen ruutuaika on kasvanut tasaisesti, ja viimeisen vuoden aikana kasvu on kiihtynyt
                  entisestään.
                </p>

                <p className="text-gray-700 mb-6">
                  {"Tilanne on huolestuttava"}, sanoo THL:n tutkimuspäällikkö Dr. Sari Koskinen.{" "}
                  {
                    "Yhdeksän tuntia päivässä tarkoittaa, että nuoret viettävät lähes kaikki valveillaoloaikansa ruutujen ääressä koulupäivän jälkeen."
                  }
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sosiaalinen media dominoi</h2>

                <p className="text-gray-700 mb-6">
                  Tutkimuksen mukaan suurin osa ruutuajasta kuluu sosiaalisessa mediassa. TikTok vie keskimäärin 3.2
                  tuntia päivässä, Instagram 2.1 tuntia ja YouTube 1.8 tuntia. Perinteinen televisio on pudonnut vain 30
                  minuuttiin päivässä.
                </p>

                <p className="text-gray-700 mb-6">
                  Erityisen huolestuttavaa on, että 34% nuorista käyttää sosiaalista mediaa myös yöllä. Keskimäärin
                  nuoret tarkistavat puhelintaan 150 kertaa päivässä, mikä tarkoittaa noin 6 minuutin välein
                  valveillaoloaikana.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vaikutukset uneen ja mielenterveyteen</h2>

                <p className="text-gray-700 mb-6">
                  Tutkimus osoittaa selkeän yhteyden ruutuajan ja unihäiriöiden välillä. Nuoret, jotka käyttävät ruutuja
                  yli 8 tuntia päivässä, nukkuvat keskimäärin tunnin vähemmän kuin suositellut 8-9 tuntia.
                </p>

                <p className="text-gray-700 mb-6">
                  Mielenterveysongelmien yleisyys on kasvanut samaan tahtiin ruutuajan kanssa. Ahdistuneisuushäiriöiden
                  esiintyvyys on noussut 23%:sta 31%:iin viimeisen kolmen vuoden aikana tutkitussa ikäryhmässä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fyysisen aktiivisuuden lasku</h2>

                <p className="text-gray-700 mb-6">
                  Ruutuajan kasvu on tapahtunut fyysisen aktiivisuuden kustannuksella. Vain 18% tutkituista nuorista
                  täyttää WHO:n suosituksen 60 minuutista päivittäistä liikuntaa, kun vastaava luku oli 28% vuonna 2020.
                </p>

                <p className="text-gray-700 mb-6">
                  {"Nuoret istuvat keskimäärin 11 tuntia päivässä"}, kertoo tutkija Koskinen.{" "}
                  {
                    "Tämä yhdistettynä korkeaan ruutuaikaan luo täydellisen myrskyn fyysiselle ja henkiselle hyvinvoinnille."
                  }
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vanhempien huoli kasvaa</h2>

                <p className="text-gray-700 mb-6">
                  Tutkimukseen osallistuneista vanhemmista 78% ilmaisi olevansa huolissaan lapsensa ruutuajan määrästä,
                  mutta vain 23% oli onnistunut asettamaan toimivia rajoja. Monet vanhemmat kokevat olevansa avuttomia
                  tilanteen edessä.
                </p>

                <p className="text-gray-700 mb-6">
                  {
                    "Lapset osaavat teknologian paremmin kuin me, ja he löytävät keinoja kiertää asettamamme rajoitukset"
                  }
                  , kertoo tutkimukseen osallistunut äiti Marja Virtanen.{" "}
                  {"Tuntuu, että taistelemme tuulimyllyjä vastaan."}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Koulutuksen haasteet</h2>

                <p className="text-gray-700 mb-6">
                  Opettajat raportoivat kasvavista keskittymisongelmista luokkahuoneissa. Nuorten kyky keskittyä
                  pitkäkestoisiin tehtäviin on heikentynyt merkittävästi, ja monet tarvitsevat jatkuvaa stimulaatiota
                  pysyäkseen mukana opetuksessa.
                </p>

                <p className="text-gray-700 mb-6">
                  {"Näemme selkeästi, miten sosiaalisen median nopea sisältösykli vaikuttaa oppimiseen"}, kommentoi
                  helsinkiläisen lukion rehtori Pekka Lahtinen.{" "}
                  {
                    "Nuoret ovat tottuneet saamaan uutta sisältöä sekunnin välein, joten 45 minuutin oppitunti tuntuu ikuisuudelta."
                  }
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ratkaisuehdotuksia</h2>

                <p className="text-gray-700 mb-6">
                  THL suosittelee useita toimenpiteitä tilanteen korjaamiseksi. Kouluihin tulisi ottaa käyttöön
                  {"digitaalinen detox"} -päiviä, ja perheille tarjota konkreettisia työkaluja ruutuajan hallintaan.
                </p>

                <p className="text-gray-700 mb-6">
                  Lisäksi ehdotetaan sosiaalisen median alustoille tiukempia ikärajoja ja algoritmien sääntelyä.
                  {
                    "Teknologiayrityksillä on vastuu kehittää tuotteitaan tavalla, joka ei vahingoita nuorten hyvinvointia"
                  }
                  , painottaa Dr. Koskinen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kansainvälinen vertailu</h2>

                <p className="text-gray-700 mb-6">
                  Suomen tilanne ei ole ainutlaatuinen. Vastaavia trendejä nähdään kaikissa kehittyneissä maissa, mutta
                  Suomi on noussut kärkeen ruutuajan määrässä. Vain Etelä-Korea ja Japani ovat edellämme
                  kansainvälisissä vertailuissa.
                </p>

                <p className="text-gray-700 mb-6">
                  Jotkut maat ovat jo ryhtyneet toimiin. Kiina on rajoittanut alle 18-vuotiaiden pelaamista kolmeen
                  tuntiin viikossa, ja Ranska harkitsee sosiaalisen median ikärajan nostamista 16 vuoteen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden näkymät</h2>

                <p className="text-gray-700 mb-6">
                  Jos nykyinen trendi jatkuu, THL ennustaa nuorten ruutuajan nousevan 12 tuntiin päivässä vuoteen 2030
                  mennessä. Tämä tarkoittaisi käytännössä sitä, että kaikki vapaa-aika vietettäisiin ruutujen ääressä.
                </p>

                <p className="text-gray-700 mb-6">
                  {"Olemme kriittisessä käännekohdassa"}, varoittaa Dr. Koskinen.{" "}
                  {
                    "Jos emme toimi nyt, saatamme menettää kokonaisen sukupolven fyysiselle ja henkiselle hyvinvoinnille. Tarvitsemme yhteiskunnallista heräämistä ja konkreettisia toimia."
                  }
                </p>
              
              <MoreFromCategory 
                currentArticleId="nuorten-ruutuaika-kasvaa-huolestuttavasti"
                category="Terveys"
                limit={4}
              />
              
                            
              <ArticleTags tags={tags} articleId="nuorten-ruutuaika-kasvaa-huolestuttavasti" />
              <ArticleNavigation 
                currentArticleId="nuorten-ruutuaika-kasvaa-huolestuttavasti"
                category="Terveys"
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
