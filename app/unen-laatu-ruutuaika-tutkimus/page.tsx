import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { getCategoryInfo } from "@/app/utils/categories"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import { extractTagsFromArticle } from "@/app/utils/tags"
import { ContextualLinks } from "@/app/components/ContextualLinks"

export const metadata = {
  title: "Unen laatu ja ruutuaika - uusi tutkimus paljastaa yhteyden | Bera Bridge",
  description:
    "Tuore tutkimus paljastaa, miten ruutuaika vaikuttaa unen laatuun. Sininen valo, sosiaalinen media ja myöhäinen teknologian käyttö häiritsevät unta merkittävästi.",
}




const relatedArticles = [
  { id: "tekoaly-muuttaa-tyomarkkinoita", title: "Tekoäly muuttaa työmarkkinoita", category: "Teknologia" },
  { id: "metaverse-tulevaisuus", title: "Metaverse ja virtuaalitodellisuuden tulevaisuus", category: "Teknologia" },
  { id: "kryptovaluuttojen-tulevaisuus", title: "Kryptovaluuttojen tulevaisuus", category: "Teknologia" }
];

export default function SleepScreenTimePage() {
  const tags = extractTagsFromArticle("unen-laatu-ruutuaika-tutkimus", "Uutiset");
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
            <Badge className="bg-blue-100 text-blue-800">Tutkimus</Badge>
            <Badge variant="outline">Terveys</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Unen laatu ja ruutuaika - uusi tutkimus paljastaa yhteyden
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Helsingin yliopiston ja THL:n yhteistutkimus paljastaa hätkähdyttäviä tuloksia ruutuajan vaikutuksesta unen
            laatuun. Sininen valo, sosiaalinen media ja myöhäinen teknologian käyttö häiritsevät unta enemmän kuin
            aiemmin ajateltiin.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>1.1.2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>11 min lukuaika</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Tutkimus-toimitus</span>
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
            src="/metaverse-identity.svg&text=Henkilö+käyttää+puhelinta+sängyssä+yöllä"
            alt="Henkilö käyttää älypuhelinta sängyssä myöhään illalla"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Puhelimen käyttö sängyssä on yksi haitallisimmista unihygienian rikkomuksista. Kuva: Unsplash
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Suomalaiset nukkuvat</strong> keskimäärin 37 minuuttia vähemmän kuin 20 vuotta sitten. Samaan aikaan
            ruutuaika on kasvanut räjähdysmäisesti - keskimäärin 7,5 tuntiin päivässä. Onko näiden ilmiöiden välillä
            yhteys? Helsingin yliopiston ja THL:n tuore tutkimus antaa selvän vastauksen: kyllä on.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tutkimuksen keskeiset tulokset</h2>

          <p className="mb-4">
            Vuoden mittainen tutkimus seurasi 2 847 suomalaisen unia ja teknologian käyttöä. Tulokset ovat
            huolestuttavia: ruutuaika korreloi vahvasti unen laadun heikkenemisen kanssa kaikissa ikäryhmissä.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <h4 className="font-semibold text-red-900 mb-2">Tutkimuksen päätuloset:</h4>
            <ul className="list-disc pl-4 text-red-800 space-y-1">
              <li>
                <strong>67%</strong> koehenkilöistä koki unen laadun heikentyneen ruutuajan lisääntyessä
              </li>
              <li>
                <strong>2,3 tuntia</strong> - keskimääräinen unen lyheneminen päivittäin
              </li>
              <li>
                <strong>89%</strong> käyttää laitteita tunnin sisällä nukkumaanmenosta
              </li>
              <li>
                <strong>45%</strong> tarkistaa puhelimen keskellä yötä
              </li>
              <li>
                <strong>78%</strong> kokee väsymystä päivällä ruutuajan vuoksi
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sininen valo häiritsee melatoniinin tuotantoa</h2>

          <p className="mb-4">
            Tutkimuksen merkittävin löydös liittyy sinisen valon vaikutukseen. Digitaaliset laitteet lähettävät sinistä
            valoa, joka häiritsee aivojen melatoniinin tuotantoa - hormonia, joka säätelee uni-valverytmiämme.
          </p>

          <p className="mb-6">
            "Sininen valo huijaa aivoja luulemaan, että on vielä päivä", selittää tutkimuksen johtaja, professori Anna
            Partinen Helsingin yliopistosta. "Melatoniinin tuotanto vähenee, ja nukahtaminen vaikeutuu merkittävästi."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Älypuhelin</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sinisen valon määrä</span>
                    <span>Korkea</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-gray-600">Erityisen haitallinen lähietäisyydeltä</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tabletti</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sinisen valon määrä</span>
                    <span>Kohtalainen</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <p className="text-xs text-gray-600">Suurempi näyttö, mutta kauempana</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Televisio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sinisen valon määrä</span>
                    <span>Matala</span>
                  </div>
                  <Progress value={35} className="h-2" />
                  <p className="text-xs text-gray-600">Kaukana, mutta silti vaikuttaa</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sosiaalinen media aktivoi aivoja</h2>

          <p className="mb-4">
            Tutkimus paljasti, että sosiaalinen media on erityisen haitallista unen laadulle. Toisin kuin passiivinen
            television katselu, sosiaalinen media aktivoi aivoja voimakkaasti ja pitää mielen vireänä.
          </p>

          <p className="mb-6">
            Instagram, TikTok ja Facebook aiheuttavat jatkuvia dopamiinipurkauksita, jotka tekevät rauhoittumisesta
            vaikeaa. Lisäksi sosiaalinen vertailu ja FOMO (fear of missing out) aiheuttavat stressiä, joka häiritsee
            unta.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Eri sovellusten vaikutus uneen (tutkimustulokset):
          </h3>

          <div className="space-y-3 my-6">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="font-medium">TikTok</span>
              <div className="flex items-center gap-2">
                <Progress value={92} className="w-24 h-2" />
                <span className="text-sm text-red-600">92% haitallinen</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="font-medium">Instagram</span>
              <div className="flex items-center gap-2">
                <Progress value={87} className="w-24 h-2" />
                <span className="text-sm text-red-600">87% haitallinen</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span className="font-medium">YouTube</span>
              <div className="flex items-center gap-2">
                <Progress value={73} className="w-24 h-2" />
                <span className="text-sm text-orange-600">73% haitallinen</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="font-medium">Netflix</span>
              <div className="flex items-center gap-2">
                <Progress value={58} className="w-24 h-2" />
                <span className="text-sm text-yellow-600">58% haitallinen</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Spotify</span>
              <div className="flex items-center gap-2">
                <Progress value={23} className="w-24 h-2" />
                <span className="text-sm text-green-600">23% haitallinen</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ikäryhmittäiset erot</h2>

          <p className="mb-4">
            Tutkimus paljasti merkittäviä eroja eri ikäryhmien välillä. Nuoret kärsivät eniten ruutuajan unihaitoista,
            mutta myös vanhemmat ikäryhmät ovat alttiita vaikutuksille.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">13-18 vuotiaat</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>
                    • <strong>9,2h</strong> ruutuaikaa päivässä
                  </li>
                  <li>
                    • <strong>94%</strong> käyttää laitteita sängyssä
                  </li>
                  <li>
                    • <strong>6,1h</strong> keskimääräinen yöuni
                  </li>
                  <li>
                    • <strong>67%</strong> kokee kroonista väsymystä
                  </li>
                  <li>
                    • <strong>Suurin riski:</strong> Kehityshäiriöt
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">19-35 vuotiaat</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>
                    • <strong>8,1h</strong> ruutuaikaa päivässä
                  </li>
                  <li>
                    • <strong>87%</strong> käyttää laitteita sängyssä
                  </li>
                  <li>
                    • <strong>6,8h</strong> keskimääräinen yöuni
                  </li>
                  <li>
                    • <strong>54%</strong> kokee kroonista väsymystä
                  </li>
                  <li>
                    • <strong>Suurin riski:</strong> Työsuorituksen lasku
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">36-50 vuotiaat</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>
                    • <strong>6,7h</strong> ruutuaikaa päivässä
                  </li>
                  <li>
                    • <strong>71%</strong> käyttää laitteita sängyssä
                  </li>
                  <li>
                    • <strong>7,2h</strong> keskimääräinen yöuni
                  </li>
                  <li>
                    • <strong>41%</strong> kokee kroonista väsymystä
                  </li>
                  <li>
                    • <strong>Suurin riski:</strong> Stressi ja burnout
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">50+ vuotiaat</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>
                    • <strong>4,9h</strong> ruutuaikaa päivässä
                  </li>
                  <li>
                    • <strong>52%</strong> käyttää laitteita sängyssä
                  </li>
                  <li>
                    • <strong>7,6h</strong> keskimääräinen yöuni
                  </li>
                  <li>
                    • <strong>28%</strong> kokee kroonista väsymystä
                  </li>
                  <li>
                    • <strong>Suurin riski:</strong> Silmäoireet
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fysiologiset vaikutukset</h2>

          <p className="mb-4">
            Tutkimus mittasi myös fysiologisia muutoksia, joita ruutuaika aiheuttaa. Tulokset osoittavat, että
            vaikutukset ulottuvat paljon pidemmälle kuin pelkkä väsymys.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Mitatut fysiologiset muutokset:</h4>
            <ul className="list-disc pl-4 text-blue-800 space-y-1">
              <li>
                <strong>Melatoniinin tuotanto:</strong> 43% vähemmän illalla
              </li>
              <li>
                <strong>Kortisolipitoisuus:</strong> 28% korkeampi aamulla
              </li>
              <li>
                <strong>Syke:</strong> 12% korkeampi nukkumaanmenon aikaan
              </li>
              <li>
                <strong>Verenpaine:</strong> Lievä nousu illalla
              </li>
              <li>
                <strong>Silmien kuivuus:</strong> 67% lisäys
              </li>
              <li>
                <strong>Niskajännitys:</strong> 54% lisäys
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pitkäaikaiset terveysvaikutukset</h2>

          <p className="mb-4">
            Krooninen univaje ruutuajan vuoksi voi johtaa vakaviin terveysongelmiin. Tutkimus seurasi osallistujia
            vuoden ajan ja havaitsi huolestuttavia trendejä.
          </p>

          <p className="mb-6">
            "Uni ei ole luksusta, vaan biologinen välttämättömyys", korostaa unilääkäri Marja Salmela. "Krooninen
            univaje heikentää immuunijärjestelmää, lisää sairastumisriskiä ja vaikuttaa mielenterveyteen."
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pitkäaikaiset riskit:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Fyysiset riskit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lihavuus (+34% riski)</li>
                  <li>• Diabetes (+28% riski)</li>
                  <li>• Sydänsairaudet (+22% riski)</li>
                  <li>• Heikentynyt immuniteetti</li>
                  <li>• Ennenaikainen ikääntyminen</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Psyykkiset riskit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Masennus (+41% riski)</li>
                  <li>• Ahdistuneisuus (+38% riski)</li>
                  <li>• Keskittymishäiriöt</li>
                  <li>• Muistiongelmat</li>
                  <li>• Impulssikontrollin heikkeneminen</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ratkaisuja ja suosituksia</h2>

          <p className="mb-4">
            Tutkijat kehittivät tulosten perusteella käytännön suosituksia unen laadun parantamiseksi. Pienetkin
            muutokset voivat tuoda merkittäviä parannuksia.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
            <h4 className="font-semibold text-green-900 mb-2">Tutkijoiden suositukset:</h4>
            <ul className="list-disc pl-4 text-green-800 space-y-1">
              <li>
                <strong>2 tunnin sääntö:</strong> Ei ruutuja 2h ennen nukkumaanmenoa
              </li>
              <li>
                <strong>Sinisen valon suodattimet:</strong> Käytä illalla automaattisesti
              </li>
              <li>
                <strong>Makuuhuone teknologiavapaaksi:</strong> Ei laitteita sängyssä
              </li>
              <li>
                <strong>Analoginen herätyskello:</strong> Puhelin pois yöpöydältä
              </li>
              <li>
                <strong>Rentoutumisrutiinit:</strong> Lukeminen, meditaatio, venyttely
              </li>
              <li>
                <strong>Säännöllinen rytmi:</strong> Sama nukkumaanmenoaika joka päivä
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Teknologiset ratkaisut</h2>

          <p className="mb-4">
            Teknologia voi olla myös osa ratkaisua. Monet laitteet ja sovellukset voivat auttaa parantamaan unihygieniaa
            ja vähentämään ruutuajan haittavaikutuksia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Laiteasetukset</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">
                  • <strong>Night Shift (iOS):</strong> Automaattinen sinisen valon vähennys
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Blue Light Filter (Android):</strong> Sinisen valon suodatus
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Do Not Disturb:</strong> Häiriöttömyys yöaikaan
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Ruutuaika-rajoitukset:</strong> Sovellusten käytön rajoitus
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hyödylliset sovellukset</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">
                  • <strong>Sleep Cycle:</strong> Unen seuranta ja optimointi
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Calm:</strong> Meditaatio ja rentoutus
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Forest:</strong> Keskittyminen ilman häiriöitä
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Twilight:</strong> Sinisen valon suodatus
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kansainvälinen vertailu</h2>

          <p className="mb-4">
            Tutkimus vertaili suomalaisten tuloksia muihin maihin. Suomalaiset sijoittuvat keskikastiin ruutuajan
            määrässä, mutta unen laatu on heikompaa kuin monissa muissa Pohjoismaissa.
          </p>

          <div className="space-y-3 my-6">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Norja</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-green-600">7,8h uni / 6,2h ruutuaikaa</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Tanska</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-green-600">7,6h uni / 6,8h ruutuaikaa</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="font-medium">Suomi</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-yellow-600">6,9h uni / 7,5h ruutuaikaa</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="font-medium">Etelä-Korea</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-red-600">6,1h uni / 11,2h ruutuaikaa</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="font-medium">USA</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-red-600">6,8h uni / 9,3h ruutuaikaa</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden näkymät</h2>

          <p className="mb-4">
            Tutkijat jatkavat seurantaa selvittääkseen, miten ruutuajan vaikutukset kehittyvät pitkällä aikavälillä.
            Erityisesti kiinnostuksen kohteena ovat uudet teknologiat kuten VR ja AR.
          </p>

          <p className="mb-6">
            "Tarvitsemme kiireesti toimenpiteitä", varoittaa professori Partinen. "Jos nykyinen kehitys jatkuu,
            kohtaamme kansanterveydellisen kriisin 10-15 vuoden kuluttua."
          </p>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Yhteenveto</h3>
            <p className="text-gray-700">
              Tutkimus osoittaa selkeän yhteyden ruutuajan ja unen laadun välillä. Sininen valo, sosiaalinen media ja
              myöhäinen teknologian käyttö häiritsevät unta merkittävästi. Pienet muutokset arkitottumuksissa voivat
              kuitenkin tuoda suuria parannuksia unen laatuun ja yleiseen hyvinvointiin.
            </p>
          </div>
        </div>
                
                <ContextualLinks 
                  currentArticleId="unen-laatu-ruutuaika-tutkimus"
                  content="Sample content for contextual analysis"
                  limit={3}
                />

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
