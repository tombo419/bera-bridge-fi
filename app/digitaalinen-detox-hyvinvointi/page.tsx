import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { getCategoryInfo } from "@/app/utils/categories"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import { extractTagsFromArticle } from "@/app/utils/tags"

export const metadata = {
  title: "Digitaalinen detox - tarvitaanko taukoa teknologiasta? | Bera Bridge",
  description:
    "Digitaalinen detox on noussut suosituksi tapana parantaa hyvinvointia. Miten digitaalinen detox toimii ja mitä hyötyjä siitä voi saada?",
}




const relatedArticles = [
  { id: "tekoaly-muuttaa-tyomarkkinoita", title: "Tekoäly muuttaa työmarkkinoita", category: "Teknologia" },
  { id: "metaverse-tulevaisuus", title: "Metaverse ja virtuaalitodellisuuden tulevaisuus", category: "Teknologia" },
  { id: "kryptovaluuttojen-tulevaisuus", title: "Kryptovaluuttojen tulevaisuus", category: "Teknologia" }
];

export default function DigitalDetoxPage() {
  const tags = extractTagsFromArticle("digitaalinen-detox-hyvinvointi", "Uutiset");
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Takaisin etusivulle
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-green-100 text-green-800">Hyvinvointi</Badge>
            <Badge variant="outline">Terveys</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Digitaalinen detox - tarvitaanko taukoa teknologiasta?
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Digitaalinen detox on noussut suosituksi keinoksi parantaa hyvinvointia ja vähentää teknologiastressiä.
            Mutta toimiiko se todella, ja miten digitaalinen detox tulisi toteuttaa turvallisesti?
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>2.1.2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>10 min lukuaika</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Hyvinvointi-toimitus</span>
            </div>
          </div>

          <Button variant="outline" size="sm" className="mb-8 bg-transparent">
            <Share2 className="w-4 h-4 mr-2" />
            Jaa artikkeli
          </Button>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src="/metaverse-identity.svg&text=Henkilö+meditoi+luonnossa+ilman+puhelinta"
            alt="Henkilö nauttii luonnosta ilman digitaalisia laitteita"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Digitaalinen detox voi tarkoittaa yksinkertaisesti aikaa luonnossa ilman laitteita. Kuva: Unsplash
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Keskimääräinen suomalainen</strong> viettää yli 7 tuntia päivässä digitaalisten laitteiden parissa.
            Älypuhelin tarkistetaan keskimäärin 96 kertaa päivässä, ja monet kokevat olevansa jatkuvasti "päällä".
            Digitaalinen detox lupaa helpotusta tähän teknologiastressiin - mutta toimiiko se todella?
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mitä digitaalinen detox tarkoittaa?</h2>

          <p className="mb-4">
            Digitaalinen detox tarkoittaa tietoista taukoa digitaalisista laitteista ja verkkopalveluista. Se voi olla
            muutaman tunnin mittainen tauko, viikonlopun irtiotto tai jopa viikkojen mittainen jakso ilman älypuhelinta
            ja sosiaalista mediaa.
          </p>

          <p className="mb-6">
            Tavoitteena on vähentää teknologiastressiä, parantaa keskittymiskykyä, vahvistaa todellisia ihmissuhteita ja
            löytää tasapaino digitaalisen ja fyysisen maailman välillä.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Digitaalisen detoxin muotoja:</h4>
            <ul className="list-disc pl-4 text-blue-800 space-y-1">
              <li>
                <strong>Mikro-detox:</strong> Muutaman tunnin tauot päivittäin
              </li>
              <li>
                <strong>Viikonloppu-detox:</strong> Laitteet pois lauantai-sunnuntai
              </li>
              <li>
                <strong>Sovellus-detox:</strong> Tiettyjen sovellusten välttäminen
              </li>
              <li>
                <strong>Täydellinen detox:</strong> Kaikki digitaaliset laitteet pois käytöstä
              </li>
              <li>
                <strong>Loma-detox:</strong> Teknologiavapaa loma
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Miksi digitaalista detoxia tarvitaan?</h2>

          <p className="mb-4">
            Jatkuva teknologian käyttö voi aiheuttaa fyysisiä ja psyykkisiä oireita. Tutkimukset osoittavat, että
            liiallinen ruutuaika voi johtaa stressiin, unihäiriöihin, keskittymisongelmiin ja jopa masennukseen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Teknologiastressin oireita:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fyysiset oireet</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Silmien väsyminen ja kuivuus</li>
                  <li>• Niska- ja hartiakivut</li>
                  <li>• Päänsärky</li>
                  <li>• Unihäiriöt</li>
                  <li>• Käsien ja sormien kipu</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Psyykkiset oireet</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Jatkuva kiire ja stressi</li>
                  <li>• Keskittymiskyvyn heikkeneminen</li>
                  <li>• Ahdistuneisuus</li>
                  <li>• FOMO (pelko jäädä paitsi)</li>
                  <li>• Sosiaalinen eristäytyminen</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Digitaalisen detoxin hyödyt</h2>

          <p className="mb-4">
            Tutkimukset digitaalisen detoxin vaikutuksista ovat vielä rajallisia, mutta alustavat tulokset ovat
            lupaavia. Monet ihmiset raportoivat merkittäviä parannuksia hyvinvoinnissaan jo muutaman päivän detoxin
            jälkeen.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
            <h4 className="font-semibold text-green-900 mb-2">Digitaalisen detoxin hyötyjä:</h4>
            <ul className="list-disc pl-4 text-green-800 space-y-1">
              <li>
                <strong>Parempi unen laatu:</strong> Syvempi ja levollisempi uni
              </li>
              <li>
                <strong>Parantunut keskittymiskyky:</strong> Kyky keskittyä pidempään
              </li>
              <li>
                <strong>Vähentynyt stressi:</strong> Rauhallisuuden tunne lisääntyy
              </li>
              <li>
                <strong>Vahvemmat ihmissuhteet:</strong> Enemmän aikaa läheisille
              </li>
              <li>
                <strong>Lisääntynyt luovuus:</strong> Aivot saavat tilaa luovalle ajattelulle
              </li>
              <li>
                <strong>Parempi fyysinen kunto:</strong> Enemmän liikuntaa ja ulkoilua
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Miten aloittaa digitaalinen detox?</h2>

          <p className="mb-4">
            Digitaalinen detox ei tarkoita teknologian täydellistä hylkäämistä. Kyse on tasapainon löytämisestä ja
            tietoisesta teknologian käytöstä. Aloittaminen kannattaa tehdä asteittain ja realistisesti.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Vaiheittainen lähestymistapa:</h3>

          <div className="space-y-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vaihe 1: Kartoitus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  Seuraa viikon ajan, kuinka paljon aikaa vietät eri laitteilla ja sovelluksilla.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Työkalut:</strong> Puhelimen sisäänrakennetut ruutuaika-raportit, RescueTime-sovellus
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vaihe 2: Tavoitteiden asettaminen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  Päätä, mitä haluat saavuttaa detoxilla ja kuinka pitkän tauon haluat pitää.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Esimerkki:</strong> "Haluan vähentää sosiaalisen median käyttöä 2 tuntiin päivässä"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vaihe 3: Valmistelu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  Kerro läheisille suunnitelmastasi ja valmistele vaihtoehtoisia aktiviteetteja.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Vinkkejä:</strong> Kirjat, liikunta, käsityöt, ystävien tapaaminen
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vaihe 4: Toteutus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">Aloita pienestä ja lisää detoxin pituutta asteittain.</p>
                <p className="text-sm text-gray-600">
                  <strong>Aloittelijalle:</strong> 1-2 tunnin tauot päivittäin, viikonloppudetox
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Käytännön vinkkejä onnistuneeseen detoxiin</h2>

          <p className="mb-4">
            Digitaalinen detox voi olla haastavaa, erityisesti jos teknologia on tiiviisti integroitunut arkeen.
            Seuraavat vinkit auttavat tekemään detoxista onnistuneen ja kestävän.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ennen detoxia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">• Ilmoita tärkeille ihmisille detoxistasi</p>
                <p className="text-sm text-gray-600">• Poista häiritsevät sovellukset puhelimesta</p>
                <p className="text-sm text-gray-600">• Suunnittele vaihtoehtoisia aktiviteetteja</p>
                <p className="text-sm text-gray-600">• Hanki analoginen herätyskello</p>
                <p className="text-sm text-gray-600">• Valmistele hätätilanteiden varalta</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Detoxin aikana</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">• Pidä puhelin toisessa huoneessa</p>
                <p className="text-sm text-gray-600">• Korvaa digitaaliset aktiviteetit fyysisillä</p>
                <p className="text-sm text-gray-600">• Kirjoita päiväkirjaa kokemuksistasi</p>
                <p className="text-sm text-gray-600">• Ole kärsivällinen itsesi kanssa</p>
                <p className="text-sm text-gray-600">• Nauti hetkestä ja läsnäolosta</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Haasteet ja sudenkuopat</h2>

          <p className="mb-4">
            Digitaalinen detox ei ole aina helppoa. Monet kokevat aluksi ahdistusta, tylsyyttä tai pelkoa jäädä paitsi
            tärkeistä asioista. Nämä tunteet ovat normaaleja ja vähenevät yleensä muutaman päivän kuluttua.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <h4 className="font-semibold text-yellow-900 mb-2">Yleisiä haasteita ja ratkaisuja:</h4>
            <ul className="list-disc pl-4 text-yellow-800 space-y-2">
              <li>
                <strong>FOMO (pelko jäädä paitsi):</strong> Muistuta itsellesi, että harvoin mikään on niin kiireellistä
              </li>
              <li>
                <strong>Tylsyys:</strong> Valmistele lista aktiviteeteista, joita voit tehdä
              </li>
              <li>
                <strong>Sosiaalinen paine:</strong> Selitä ystäville ja perheelle detoxin tarkoitus
              </li>
              <li>
                <strong>Työn vaatimukset:</strong> Sovi työnantajan kanssa detoxin rajoista
              </li>
              <li>
                <strong>Takaisin vanhoihin tapoihin:</strong> Aloita pienestä ja ole realistinen
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Digitaalinen detox Suomessa</h2>

          <p className="mb-4">
            Suomessa digitaalinen detox on saanut jalansijaa sekä yksilöiden että organisaatioiden keskuudessa. Monet
            yritykset järjestävät työntekijöilleen detox-päiviä, ja lomakeskukset tarjoavat teknologiavapaita
            viikonloppuja.
          </p>

          <p className="mb-6">
            Suomen luonto tarjoaa erinomaisen ympäristön digitaaliselle detoxille. Mökkikulttuuri ja luonnon läheisyys
            tekevät teknologiatauoista luontevia ja helpommin toteutettavia kuin monissa muissa maissa.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Suomalaisia detox-mahdollisuuksia:</h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Kansallispuistot:</strong> Luonnollinen ympäristö teknologiatauolle
            </li>
            <li>
              <strong>Mökkikulttuurin hyödyntäminen:</strong> Perinteinen tapa irrottautua arjesta
            </li>
            <li>
              <strong>Wellness-keskukset:</strong> Ammattimaisesti ohjattuja detox-ohjelmia
            </li>
            <li>
              <strong>Retriittikeskukset:</strong> Hengellisyyttä ja teknologiavapautta yhdistäviä paikkoja
            </li>
            <li>
              <strong>Liikuntakeskukset:</strong> Fyysistä aktiviteettia teknologian sijaan
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tutkimus ja tieteellinen näyttö</h2>

          <p className="mb-4">
            Digitaalisen detoxin tutkimus on vielä alkuvaiheessa, mutta ensimmäiset tulokset ovat lupaavia. Kalifornian
            yliopiston tutkimus osoitti, että jo viiden päivän teknologiatauko paransi lasten luovuutta ja sosiaalisia
            taitoja merkittävästi.
          </p>

          <p className="mb-6">
            Suomessa Helsingin yliopisto tutkii parhaillaan digitaalisen detoxin vaikutuksia työhyvinvointiin. Alustavat
            tulokset viittaavat siihen, että säännölliset teknologiatauot voivat vähentää työstressiä ja parantaa
            työtehoa.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Detoxin jälkeen - kestävät muutokset</h2>

          <p className="mb-4">
            Digitaalisen detoxin todellinen hyöty tulee siitä, että se auttaa muodostamaan terveellisempiä
            teknologiatottumuksia pitkällä aikavälillä. Detox on alku, ei loppu.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Kestäviä muutoksia detoxin jälkeen:</h4>
            <ul className="list-disc pl-4 text-blue-800 space-y-1">
              <li>Säännölliset teknologiavapaat ajat päivittäin</li>
              <li>Puhelimen pitäminen makuuhuoneen ulkopuolella</li>
              <li>Sosiaalisen median käytön rajoittaminen</li>
              <li>Tietoisten valintojen tekeminen teknologian käytössä</li>
              <li>Vaihtoehtoisten aktiviteettien sisällyttäminen arkeen</li>
              <li>Säännölliset detox-viikonloput</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Milloin detox ei riitä?</h2>

          <p className="mb-4">
            Joskus teknologian käyttö voi muuttua riippuvuudeksi, joka vaatii ammattiapua. Jos digitaalinen detox tuntuu
            mahdottomalta tai aiheuttaa vakavaa ahdistusta, kannattaa hakea apua mielenterveysalan ammattilaiselta.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <h4 className="font-semibold text-red-900 mb-2">Milloin hakea ammattiapua:</h4>
            <ul className="list-disc pl-4 text-red-800 space-y-1">
              <li>Teknologian käyttö häiritsee merkittävästi arkielämää</li>
              <li>Detoxin yrittäminen aiheuttaa paniikkikohtauksia</li>
              <li>Ihmissuhteet kärsivät teknologian käytön vuoksi</li>
              <li>Työ- tai opiskelusuoritukset heikkenevät</li>
              <li>Fyysinen terveys kärsii liiallisesta ruutuajasta</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Yhteenveto</h3>
            <p className="text-gray-700">
              Digitaalinen detox voi olla tehokas tapa parantaa hyvinvointia ja löytää tasapaino teknologian käytössä.
              Aloittaminen kannattaa tehdä asteittain ja realistisesti. Detoxin todellinen hyöty tulee kestävistä
              muutoksista teknologiatottumuksissa, ei pelkästään tilapäisistä tauoista.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Lue myös</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-lg leading-tight">
                    <Link href={article.href} className="hover:text-blue-600">
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Kysymyksiä tai kommentteja? Ota yhteyttä:{" "}
            <a href="mailto:info@bera-bridge.fi" className="text-blue-600 hover:underline">
              info@bera-bridge.fi
            </a>
          </p>
        </section>
      </article>
    </div>
  )
}
