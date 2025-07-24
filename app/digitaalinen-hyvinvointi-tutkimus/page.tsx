import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { getCategoryInfo } from "@/utils/categories"



export default function DigitalWellbeingStudyArticle() {
  const tags = extractTagsFromArticle("digitaalinen-hyvinvointi-tutkimus", "Terveys");

import { extractTagsFromArticle } from "@/utils/tags"
import { ArticleTags } from "@/components/TagCloud";
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
                  { label: 'Suomalaisnuorten digitaalinen hyvinvointi heikkenee' }
                ]}
              />
              
                <Link href="/tutkimus" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Terveys</Link>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Suomalaisnuorten digitaalinen hyvinvointi heikkenee
                </h1>
                <p className="text-gray-600">Julkaistu 01.06.2025 • THL</p>
              </div>

              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/digital-wellbeing.svg"
                  alt="Digitaalinen hyvinvointi tutkimus"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  Terveyden ja hyvinvoinnin laitoksen (THL) uusi laaja tutkimus paljastaa huolestuttavan kehityksen
                  suomalaisten 13-18-vuotiaiden digitaalisessa hyvinvoinnissa. Nuorten mielenterveysongelmat ovat
                  lisääntyneet samaan tahtiin digitaalisen median käytön kanssa.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tutkimuksen keskeiset havainnot</h2>

                <p className="text-gray-700 mb-6">
                  Viiden vuoden seurantatutkimus, johon osallistui 8,500 nuorta ympäri Suomea, osoittaa selkeän yhteyden
                  digitaalisen median käytön ja mielenterveysongelmien välillä. Erityisesti ahdistus- ja masennusoireet
                  ovat lisääntyneet merkittävästi.
                </p>

                <p className="text-gray-700 mb-6">
                  "Tulokset ovat hälyttäviä", kommentoi tutkimusta johtanut THL:n tutkimuspäällikkö Dr. Marja Korhonen.
                  "Näemme selkeän korrelaation sosiaalisen median käytön ja nuorten pahoinvoinnin välillä."
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unihäiriöt yleistyneet</h2>

                <p className="text-gray-700 mb-6">
                  Tutkimus paljastaa, että 67% nuorista kärsii säännöllisistä unihäiriöistä, mikä on 23
                  prosenttiyksikköä enemmän kuin vuonna 2020. Suurin syy unihäiriöihin on ruutujen käyttö myöhään
                  illalla ja yöllä.
                </p>

                <p className="text-gray-700 mb-6">
                  Erityisesti TikTokin ja Instagramin käyttö ennen nukkumaanmenoa häiritsee unta. Näiden alustojen
                  algoritmi on suunniteltu pitämään käyttäjät valveilla mahdollisimman pitkään, mikä on katastrofaalista
                  nuorten unirytmille.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sosiaalinen eristäytyminen</h2>

                <p className="text-gray-700 mb-6">
                  Paradoksaalisesti sosiaalisen median runsas käyttö johtaa sosiaaliseen eristäytymiseen. Nuoret
                  viettävät yhä vähemmän aikaa kasvokkain ystäviensä kanssa ja enemmän aikaa digitaalisissa
                  ympäristöissä.
                </p>

                <p className="text-gray-700 mb-6">
                  Tutkimus osoittaa, että nuoret, jotka käyttävät sosiaalista mediaa yli 4 tuntia päivässä, raportoivat
                  merkittävästi enemmän yksinäisyyttä kuin vähemmän käyttävät ikätoverinsa.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kehonkuvan häiriöt</h2>

                <p className="text-gray-700 mb-6">
                  Instagram ja TikTok ovat erityisen haitallisia nuorten kehonkuvalle. Jatkuva altistuminen
                  "täydellisille" kuville ja videoille, joita on usein muokattu, luo epärealistisia odotuksia omasta
                  ulkonäöstä.
                </p>

                <p className="text-gray-700 mb-6">
                  Syömishäiriöiden esiintyvyys on kasvanut 34% tutkimusjakson aikana, ja suurin kasvu on tapahtunut
                  niiden nuorten keskuudessa, jotka käyttävät runsaasti visuaalista sosiaalista mediaa.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Koulumenestyksen lasku</h2>

                <p className="text-gray-700 mb-6">
                  Digitaalisen median liiallinen käyttö vaikuttaa negatiivisesti koulumenestykseen. Nuorten
                  keskittymiskyky on heikentynyt, ja monet opettajat raportoivat kasvavista ongelmista saada oppilaiden
                  huomio pidettyä oppitunneilla.
                </p>

                <p className="text-gray-700 mb-6">
                  "Näemme selkeästi, miten sosiaalisen median nopea sisältösykli vaikuttaa oppimiseen", kertoo
                  tutkimukseen osallistunut lukion rehtori Pekka Virtanen. "Nuoret ovat tottuneet saamaan uutta sisältöä
                  sekunnin välein."
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vanhempien avuttomuus</h2>

                <p className="text-gray-700 mb-6">
                  Tutkimus paljastaa myös vanhempien kasvavan avuttomuuden lastensa digitaalisen median käytön suhteen.
                  78% vanhemmista ilmaisee olevansa huolissaan, mutta vain 31% kokee pystyvänsä vaikuttamaan asiaan
                  tehokkaasti.
                </p>

                <p className="text-gray-700 mb-6">
                  Monet vanhemmat kokevat olevansa teknologisesti jäljessä lapsiaan ja tuntevat itsensä avuttomiksi
                  asettaessaan rajoja digitaalisen median käytölle.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sukupuolierot</h2>

                <p className="text-gray-700 mb-6">
                  Tutkimus paljastaa merkittäviä sukupuolieroja digitaalisen median vaikutuksissa. Tytöt kärsivät
                  enemmän ahdistuksesta ja kehonkuvan häiriöistä, kun taas pojilla korostuvat peliriippuvuus ja
                  sosiaalinen eristäytyminen.
                </p>

                <p className="text-gray-700 mb-6">
                  Tyttöjen keskuudessa Instagram ja TikTok aiheuttavat eniten ongelmia, kun taas pojilla ongelmat
                  liittyvät useammin pelaamiseen ja YouTube-sisältöön.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ratkaisuehdotuksia</h2>

                <p className="text-gray-700 mb-6">
                  THL esittää useita konkreettisia toimenpiteitä tilanteen parantamiseksi. Kouluihin tulisi ottaa
                  käyttöön säännöllisiä "digitaalisia detox" -päiviä, ja opetussuunnitelmaan tulisi lisätä
                  mediakasvatusta.
                </p>

                <p className="text-gray-700 mb-6">
                  Lisäksi ehdotetaan sosiaalisen median alustoille tiukempia ikärajoja ja algoritmien sääntelyä.
                  Erityisesti alle 16-vuotiaiden altistumista haitalliselle sisällölle tulisi rajoittaa.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kansainvälinen vertailu</h2>

                <p className="text-gray-700 mb-6">
                  Suomen tilanne ei ole ainutlaatuinen, mutta ongelmat ovat täällä erityisen akuutteja. Pohjoismaista
                  Suomi on noussut kärkeen nuorten digitaalisen median käytössä, mikä selittää osaltaan ongelmien
                  vakavuutta.
                </p>

                <p className="text-gray-700 mb-6">
                  Norja ja Tanska ovat ottaneet käyttöön tiukempia säännöksiä sosiaalisen median käytölle kouluissa, ja
                  tulokset ovat olleet lupaavia. Suomi harkitsee vastaavien toimenpiteiden käyttöönottoa.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden näkymät</h2>

                <p className="text-gray-700 mb-6">
                  Jos nykyinen kehitys jatkuu, THL ennustaa nuorten mielenterveysongelmien lisääntyvän entisestään.
                  Tarvitaan pikaisesti yhteiskunnallisia toimia tilanteen kääntämiseksi.
                </p>

                <p className="text-gray-700 mb-6">
                  "Olemme kriittisessä käännekohdassa", varoittaa Dr. Korhonen. "Seuraavien vuosien toimet määrittävät,
                  millainen sukupolvi meillä on kasvamassa. Emme voi jäädä odottamaan."
                </p>
              
              <MoreFromCategory 
                currentArticleId="digitaalinen-hyvinvointi-tutkimus"
                category="Terveys"
                limit={4}
              />
              
                            
              <ArticleTags tags={tags} articleId="digitaalinen-hyvinvointi-tutkimus" />
              <ArticleNavigation 
                currentArticleId="digitaalinen-hyvinvointi-tutkimus"
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
