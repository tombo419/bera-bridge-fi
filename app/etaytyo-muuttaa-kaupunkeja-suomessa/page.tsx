import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"

export const metadata = {
  title: "Etätyö muuttaa Suomen kaupunkeja - Helsinki menettää asukkaita | Bera Bridge",
  description:
    "Etätyö muuttaa suomalaisten asuinpaikkoja pysyvästi. Helsinki menettää asukkaita pienemmille paikkakunnille, mikä vaikuttaa koko yhteiskuntaan.",
}

const relatedArticles = [
  {
    title: "Suomalaiset startup-yritykset johtavat tekoälyn kehitystä",
    href: "/suomalaiset-startup-yritykset-tekoaly",
    category: "Liiketoiminta",
  },
  {
    title: "5G-verkot mullistavat mobiilipelaamisen - latenssi lähes nollassa",
    href: "/5g-verkot-mahdollistavat-uuden-pelaamisen",
    category: "Teknologia",
  },
  {
    title: "Digitaalinen detox - tarvitaanko taukoa teknologiasta?",
    href: "/digitaalinen-detox-hyvinvointi",
    category: "Hyvinvointi",
  },
]

export default function RemoteWorkCitiesPage() {
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
            <Badge className="bg-orange-100 text-orange-800">Yhteiskunta</Badge>
            <Badge variant="outline">Etätyö</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Etätyö muuttaa Suomen kaupunkeja - Helsinki menettää asukkaita
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Etätyön yleistyminen muuttaa suomalaisten asuinpaikkoja pysyvästi. Helsinki menettää asukkaita pienemmille
            paikkakunnille, mikä vaikuttaa asuntomarkkinoihin, palveluihin ja koko yhteiskunnan rakenteeseen.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>27.12.2024</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>11 min lukuaika</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Yhteiskunta-toimitus</span>
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
            src="/metaverse-identity.svg&text=Henkilö+työskentelee+etänä+mökillä+järven+rannalla"
            alt="Henkilö työskentelee etänä mökillä kauniissa luonnonympäristössä"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Etätyö mahdollistaa työskentelyn mistä tahansa - monet valitsevat luonnon läheisyyden. Kuva: Unsplash
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Marja Virtanen</strong> myi helsinkiläisen kaksionsa ja muutti Savonlinnaan. Hän työskentelee
            edelleen samassa IT-yrityksessä, mutta nyt hänen työhuoneensa ikkunasta näkyy Saimaa Töölönlahden sijaan.
            "Saan saman palkan, mutta elämänlaatuni on parantunut huomattavasti", hän kertoo. Marja ei ole yksin -
            etätyö muuttaa koko Suomen kaupunkirakennetta.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Muuttoliike kääntyy</h2>

          <p className="mb-4">
            Ensimmäistä kertaa vuosikymmeniin Helsingin seudun muuttovoitto on kääntynyt negatiiviseksi. Vuonna 2024
            pääkaupunkiseudulta muutti pois 8 400 ihmistä enemmän kuin sinne muutti. Suurin osa muuttajista on
            korkeakoulutettuja etätyöntekijöitä.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <h4 className="font-semibold text-red-900 mb-2">Helsingin seudun muuttoliike 2024:</h4>
            <ul className="list-disc pl-4 text-red-800 space-y-1">
              <li>
                <strong>-8 400</strong> nettomääräinen muuttovoitto (ensimmäistä kertaa negatiivinen)
              </li>
              <li>
                <strong>67%</strong> muuttajista työskentelee etänä
              </li>
              <li>
                <strong>34 vuotta</strong> muuttajien keski-ikä
              </li>
              <li>
                <strong>78%</strong> korkeakoulutettuja
              </li>
              <li>
                <strong>156 000€</strong> keskimääräinen vuositulo
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Voittajat ja häviäjät</h2>

          <p className="mb-4">
            Etätyön aiheuttama muuttoliike ei jakaudu tasaisesti. Tietyt alueet hyötyvät merkittävästi, kun taas toiset
            kärsivät asukasmenetyksistä.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Voittajakaupungit</h3>

          <div className="space-y-3 my-6">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Savonlinna</span>
              <div className="flex items-center gap-2">
                <Progress value={89} className="w-24 h-2" />
                <span className="text-sm text-green-600">+23% asukasmäärä</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Porvoo</span>
              <div className="flex items-center gap-2">
                <Progress value={76} className="w-24 h-2" />
                <span className="text-sm text-green-600">+18% asukasmäärä</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Rauma</span>
              <div className="flex items-center gap-2">
                <Progress value={67} className="w-24 h-2" />
                <span className="text-sm text-green-600">+15% asukasmäärä</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Mikkeli</span>
              <div className="flex items-center gap-2">
                <Progress value={58} className="w-24 h-2" />
                <span className="text-sm text-green-600">+12% asukasmäärä</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Kotka</span>
              <div className="flex items-center gap-2">
                <Progress value={45} className="w-24 h-2" />
                <span className="text-sm text-green-600">+9% asukasmäärä</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Häviäjäkaupungit</h3>

          <div className="space-y-3 my-6">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="font-medium">Helsinki</span>
              <div className="flex items-center gap-2">
                <Progress value={78} className="w-24 h-2" />
                <span className="text-sm text-red-600">-6% asukasmäärä</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="font-medium">Espoo</span>
              <div className="flex items-center gap-2">
                <Progress value={65} className="w-24 h-2" />
                <span className="text-sm text-red-600">-4% asukasmäärä</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="font-medium">Vantaa</span>
              <div className="flex items-center gap-2">
                <Progress value={52} className="w-24 h-2" />
                <span className="text-sm text-red-600">-3% asukasmäärä</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="font-medium">Tampere</span>
              <div className="flex items-center gap-2">
                <Progress value={34} className="w-24 h-2" />
                <span className="text-sm text-yellow-600">-1% asukasmäärä</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Miksi ihmiset muuttavat?</h2>

          <p className="mb-4">
            Etätyön mahdollistama muutto ei ole pelkästään taloudellinen päätös. Ihmiset hakevat parempaa elämänlaatua,
            luonnon läheisyyttä ja rauhallisempaa elämänrytmiä.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Taloudelliset syyt</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    • <strong>Asumiskustannukset:</strong> 40-60% halvemmat
                  </li>
                  <li>
                    • <strong>Suurempi asunto:</strong> Sama hinta, kaksinkertainen koko
                  </li>
                  <li>
                    • <strong>Ei työmatkakuluja:</strong> 200-400€/kk säästö
                  </li>
                  <li>
                    • <strong>Alhaisemmat elinkustannukset:</strong> Ruoka, palvelut
                  </li>
                  <li>
                    • <strong>Kiinteistösijoitus:</strong> Parempi tuotto-odotus
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">Elämänlaadulliset syyt</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    • <strong>Luonnon läheisyys:</strong> Metsät, järvet, rauha
                  </li>
                  <li>
                    • <strong>Vähemmän stressiä:</strong> Ei ruuhkia, kiire
                  </li>
                  <li>
                    • <strong>Yhteisöllisyys:</strong> Tiiviimpi paikallisyhteisö
                  </li>
                  <li>
                    • <strong>Perhe-elämä:</strong> Enemmän aikaa läheisille
                  </li>
                  <li>
                    • <strong>Harrastukset:</strong> Ulkoilu, liikunta
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-purple-600">Työhön liittyvät syyt</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    • <strong>Parempi keskittyminen:</strong> Vähemmän häiriöitä
                  </li>
                  <li>
                    • <strong>Joustavuus:</strong> Oma aikataulu
                  </li>
                  <li>
                    • <strong>Työympäristö:</strong> Oma suunnittelu
                  </li>
                  <li>
                    • <strong>Work-life balance:</strong> Parempi tasapaino
                  </li>
                  <li>
                    • <strong>Tuottavuus:</strong> Usein korkeampi kuin toimistossa
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-orange-600">Teknologiset mahdollistajat</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    • <strong>Nopeat yhteydet:</strong> Kuitu kaikkialle
                  </li>
                  <li>
                    • <strong>Pilvipalvelut:</strong> Tiedostot saatavilla
                  </li>
                  <li>
                    • <strong>Videoneuvottelut:</strong> Teams, Zoom
                  </li>
                  <li>
                    • <strong>Yhteistyötyökalut:</strong> Slack, Asana
                  </li>
                  <li>
                    • <strong>VPN-yhteydet:</strong> Turvallinen etäkäyttö
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vaikutukset asuntomarkkinoihin</h2>

          <p className="mb-4">
            Etätyön aiheuttama muuttoliike näkyy selvästi asuntomarkkinoilla. Helsingin asuntojen hinnat ovat laskeneet
            ensimmäistä kertaa 15 vuoteen, kun taas pienempien kaupunkien hinnat nousevat.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Asuntojen hintojen muutos 2024:</h3>

          <div className="space-y-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Helsinki</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Hintojen muutos</span>
                    <span className="text-red-600">-8.5%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                  <p className="text-xs text-gray-600">Keskihinta: 5 200€/m² (oli 5 680€/m²)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Savonlinna</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Hintojen muutos</span>
                    <span className="text-green-600">+34%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-gray-600">Keskihinta: 2 100€/m² (oli 1 570€/m²)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Porvoo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Hintojen muutos</span>
                    <span className="text-green-600">+28%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  <p className="text-xs text-gray-600">Keskihinta: 3 400€/m² (oli 2 660€/m²)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-yellow-600">Tampere</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Hintojen muutos</span>
                    <span className="text-yellow-600">+3%</span>
                  </div>
                  <Progress value={53} className="h-2" />
                  <p className="text-xs text-gray-600">Keskihinta: 3 200€/m² (oli 3 100€/m²)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Palvelujen muutos</h2>

          <p className="mb-4">
            Väestön uudelleenjakautuminen vaikuttaa merkittävästi palvelujen tarjontaan. Pienemmät kaupungit joutuvat
            nopeasti laajentamaan palvelujaan, kun taas suurissa kaupungeissa palveluja joudutaan supistamaan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Kasvavat kaupungit</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Palvelujen laajentaminen:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Uusia päiväkoteja ja kouluja</li>
                  <li>• Terveyskeskusten henkilöstön lisäys</li>
                  <li>• Kauppojen ja ravintoloiden avaaminen</li>
                  <li>• Julkisen liikenteen parantaminen</li>
                  <li>• Kulttuuripalvelujen kehittäminen</li>
                  <li>• Coworking-tilojen perustaminen</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Kutistuvat kaupungit</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Palvelujen supistaminen:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Koulujen ja päiväkotien yhdistäminen</li>
                  <li>• Terveyskeskusten aukioloaikojen lyhentäminen</li>
                  <li>• Kauppojen ja ravintoloiden sulkeminen</li>
                  <li>• Julkisen liikenteen harventaminen</li>
                  <li>• Kulttuuripalvelujen vähentäminen</li>
                  <li>• Toimistotilojen tyhjillään</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Infrastruktuurin haasteet</h2>

          <p className="mb-4">
            Nopea väestönkasvu pienemmissä kaupungeissa luo paineita infrastruktuurille. Tieverkot, vesihuolto ja
            sähköverkot eivät ole suunniteltu näin nopeaan kasvuun.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <h4 className="font-semibold text-yellow-900 mb-2">Infrastruktuurin pullonkauloja:</h4>
            <ul className="list-disc pl-4 text-yellow-800 space-y-1">
              <li>
                <strong>Laajakaistayhteydet:</strong> Kapasiteetti ei riitä kaikille etätyöntekijöille
              </li>
              <li>
                <strong>Sähköverkko:</strong> Vanhat verkot eivät kestä lisääntynyttä kulutusta
              </li>
              <li>
                <strong>Vesihuolto:</strong> Putkistot mitoitettu pienemmälle väestölle
              </li>
              <li>
                <strong>Tieverkko:</strong> Ruuhkat lisääntyneet pienissäkin kaupungeissa
              </li>
              <li>
                <strong>Jätehuolto:</strong> Kapasiteetti ei riitä kasvaneeseen jätemäärään
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sosiaalinen muutos</h2>

          <p className="mb-4">
            Etätyöntekijöiden muutto muuttaa myös paikallisia yhteisöjä. Korkeakoulutetut, hyväpalkkaiset etätyöntekijät
            tuovat mukanaan uusia ideoita ja osaamista, mutta voivat myös aiheuttaa jännitteitä.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Positiiviset vaikutukset:</h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Osaamisen lisääntyminen:</strong> Uudet asukkaat tuovat mukanaan digitaalista osaamista
            </li>
            <li>
              <strong>Yrittäjyys:</strong> Etätyöntekijät perustavat paikallisia yrityksiä
            </li>
            <li>
              <strong>Kulttuurin rikastuminen:</strong> Uusia tapahtumia ja aktiviteetteja
            </li>
            <li>
              <strong>Verkostoituminen:</strong> Yhteydet suurempiin kaupunkeihin
            </li>
            <li>
              <strong>Innovaatio:</strong> Uusia ratkaisuja paikallisiin haasteisiin
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Haasteet:</h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Gentrifikaatio:</strong> Hintojen nousu syrjäyttää alkuperäisiä asukkaita
            </li>
            <li>
              <strong>Kulttuuriset erot:</strong> Kaupunkilaiset vs. paikalliset arvot
            </li>
            <li>
              <strong>Palvelujen muutos:</strong> Palvelut suuntautuvat uusille asukkaille
            </li>
            <li>
              <strong>Sosiaalinen eriytyminen:</strong> Tulo- ja koulutuserojen kasvu
            </li>
            <li>
              <strong>Paikallisen identiteetin muutos:</strong> Perinteiden häviäminen
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Yritysten sopeutuminen</h2>

          <p className="mb-4">
            Yritykset joutuvat sopeutumaan uuteen tilanteeseen, jossa työntekijät ovat hajallaan ympäri Suomea. Tämä
            vaatii uusia johtamismalleja, työkaluja ja kulttuuria.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Johtamisen muutos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">
                  • <strong>Tulosjohtaminen:</strong> Keskitytään tuloksiin, ei läsnäoloon
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Luottamus:</strong> Työntekijöihin luotetaan enemmän
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Kommunikaatio:</strong> Säännölliset videotapaamiset
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Tuki:</strong> Etätyön tuki ja koulutus
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Teknologiset ratkaisut</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">
                  • <strong>Pilvipalvelut:</strong> Kaikki data pilvessä
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Yhteistyötyökalut:</strong> Teams, Slack, Asana
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Tietoturva:</strong> VPN ja kaksivaiheinen tunnistus
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Seuranta:</strong> Työajan ja tuottavuuden mittaus
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden näkymät</h2>

          <p className="mb-4">
            Asiantuntijat ennustavat etätyön aiheuttaman muuttoliikkeen jatkuvan. Seuraavien 5-10 vuoden aikana Suomen
            kaupunkirakenne voi muuttua perusteellisesti.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Ennusteet 2025-2030:</h4>
            <ul className="list-disc pl-4 text-blue-800 space-y-1">
              <li>
                <strong>Helsinki:</strong> Asukasmäärä laskee 50 000 hengellä
              </li>
              <li>
                <strong>Pienemmät kaupungit:</strong> Väestö kasvaa 20-40%
              </li>
              <li>
                <strong>Hybridityö:</strong> 2-3 päivää toimistossa, loput etänä
              </li>
              <li>
                <strong>Uudet keskukset:</strong> 10-15 uutta "etätyökaupunkia"
              </li>
              <li>
                <strong>Infrastruktuuri:</strong> 2 miljardin investoinnit
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Politiikan vastaukset</h2>

          <p className="mb-4">
            Hallitus on herännyt etätyön aiheuttamiin muutoksiin ja valmistelee useita toimenpiteitä tasapainon
            palauttamiseksi. Tavoitteena on tukea kasvavia alueita ja ehkäistä kutistuvien alueiden ongelmia.
          </p>

          <div className="space-y-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Kasvualueiden tuki</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 500M€ infrastruktuurin kehittämiseen</li>
                  <li>• Nopeiden yhteyksien takaaminen</li>
                  <li>• Koulutuspalvelujen vahvistaminen</li>
                  <li>• Coworking-tilojen tukeminen</li>
                  <li>• Kaavoituksen nopeuttaminen</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Kutistuvien alueiden tuki</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Palvelujen keskittäminen</li>
                  <li>• Digitaalisten palvelujen kehittäminen</li>
                  <li>• Uudelleenkoulutuksen tukeminen</li>
                  <li>• Yritysten houkutteleminen</li>
                  <li>• Kulttuuripalvelujen säilyttäminen</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Yhteenveto</h3>
            <p className="text-gray-700">
              Etätyö muuttaa Suomen kaupunkirakennetta perusteellisesti. Helsinki menettää asukkaita pienemmille
              paikkakunnille, mikä vaikuttaa asuntomarkkinoihin, palveluihin ja koko yhteiskunnan rakenteeseen. Muutos
              tuo sekä mahdollisuuksia että haasteita, ja sen hallinta vaatii aktiivista politiikkaa ja yhteiskunnan
              sopeutumista.
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
