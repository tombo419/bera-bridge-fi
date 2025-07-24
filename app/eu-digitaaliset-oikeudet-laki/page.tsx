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
  title: "EU:n digitaalisten oikeuksien laki - mitä se tarkoittaa suomalaisille? | Bera Bridge",
  description:
    "EU:n uusi digitaalisten oikeuksien laki muuttaa tapaamme käyttää internetiä. Selvitämme, mitä laki tarkoittaa käytännössä suomalaisille kuluttajille.",
}




const relatedArticles = [
  { id: "tekoaly-muuttaa-tyomarkkinoita", title: "Tekoäly muuttaa työmarkkinoita", category: "Teknologia" },
  { id: "metaverse-tulevaisuus", title: "Metaverse ja virtuaalitodellisuuden tulevaisuus", category: "Teknologia" },
  { id: "kryptovaluuttojen-tulevaisuus", title: "Kryptovaluuttojen tulevaisuus", category: "Teknologia" }
];

export default function EUDigitalRightsPage() {
  const tags = extractTagsFromArticle("eu-digitaaliset-oikeudet-laki", "Uutiset");
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
            <Badge className="bg-purple-100 text-purple-800">Politiikka</Badge>
            <Badge variant="outline">EU</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            EU:n digitaalisten oikeuksien laki - mitä se tarkoittaa suomalaisille?
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Euroopan unionin uusi digitaalisten oikeuksien laki astuu voimaan 2025. Se muuttaa perusteellisesti tapaamme
            käyttää internetiä ja digitaalisia palveluja. Selvitämme, mitä laki tarkoittaa käytännössä suomalaisille
            kuluttajille.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>30.12.2024</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>12 min lukuaika</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Politiikka-toimitus</span>
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
            src="/metaverse-identity.svg&text=EU+lippu+ja+digitaaliset+oikeudet"
            alt="Euroopan unionin lippu ja digitaalisten oikeuksien symboliikka"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            EU:n digitaalisten oikeuksien laki on merkittävin digitaalisia oikeuksia koskeva uudistus vuosikymmeniin.
            Kuva: EU
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Euroopan unioni</strong> ottaa merkittävän askeleen digitaalisten oikeuksien suojaamisessa. Uusi
            digitaalisten oikeuksien laki (Digital Rights Act) astuu voimaan tammikuussa 2025 ja vaikuttaa kaikkiin EU:n
            kansalaisiin. Laki on laajin digitaalisia oikeuksia koskeva uudistus sitten internetin yleistymisen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mikä on digitaalisten oikeuksien laki?</h2>

          <p className="mb-4">
            Digitaalisten oikeuksien laki on EU:n vastaus kasvaviin huoliin digitaalisten palvelujen vallasta,
            tietosuojaongelmista ja kansalaisten oikeuksien puutteesta verkkomaailmassa. Laki täydentää GDPR:ää ja
            Digital Services Act:ia.
          </p>

          <p className="mb-6">
            "Digitaaliset oikeudet ovat ihmisoikeuksia", sanoo EU:n digitaalikomissaari Margrethe Vestager.
            "Kansalaisilla on oltava samat oikeudet verkossa kuin fyysisessä maailmassa."
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Lain keskeiset periaatteet:</h4>
            <ul className="list-disc pl-4 text-blue-800 space-y-1">
              <li>
                <strong>Digitaalinen itsemääräämisoikeus:</strong> Oikeus hallita omaa digitaalista identiteettiä
              </li>
              <li>
                <strong>Algoritminen läpinäkyvyys:</strong> Oikeus tietää, miten algoritmit vaikuttavat sinuun
              </li>
              <li>
                <strong>Digitaalinen tasa-arvo:</strong> Yhtäläiset mahdollisuudet digitaalisiin palveluihin
              </li>
              <li>
                <strong>Verkkoneutraliteetti:</strong> Vapaa ja avoin internet kaikille
              </li>
              <li>
                <strong>Digitaalinen turvallisuus:</strong> Suoja verkkohäirinnältä ja -rikollisuudelta
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Keskeiset muutokset käytännössä</h2>

          <p className="mb-4">
            Laki tuo mukanaan konkreettisia muutoksia, jotka vaikuttavat jokaisen suomalaisen arkeen. Muutokset koskevat
            sosiaalista mediaa, verkkokauppoja, hakukoneita ja kaikkia digitaalisia palveluja.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Algoritmien läpinäkyvyys</h3>

          <p className="mb-4">
            Kaikki suuret digitaaliset alustat joutuvat paljastamaan, miten niiden algoritmit toimivat. Käyttäjillä on
            oikeus tietää, miksi he näkevät tiettyjä sisältöjä tai mainoksia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sosiaalinen media</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Selitys, miksi tietty sisältö näytetään</li>
                  <li>• Mahdollisuus vaikuttaa algoritmin toimintaan</li>
                  <li>• Läpinäkyvyys mainontargettauksessa</li>
                  <li>• Oikeus "algoritmittomaan" syötteeseen</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hakukoneet</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Selitys hakutulosten järjestyksestä</li>
                  <li>• Mahdollisuus personoimattomiin hakuihin</li>
                  <li>• Läpinäkyvyys maksullisissa tuloksissa</li>
                  <li>• Oikeus korjata virheellistä tietoa</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Digitaalinen itsemääräämisoikeus</h3>

          <p className="mb-4">
            Käyttäjät saavat laajemmat oikeudet hallita digitaalista identiteettiään ja läsnäoloaan verkossa. Tämä
            sisältää oikeuden "digitaaliseen kuolemaan" ja identiteetin siirtämiseen palvelusta toiseen.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
            <h4 className="font-semibold text-green-900 mb-2">Uudet oikeudet:</h4>
            <ul className="list-disc pl-4 text-green-800 space-y-1">
              <li>
                <strong>Oikeus digitaaliseen kuolemaan:</strong> Tietojen poistaminen kuoleman jälkeen
              </li>
              <li>
                <strong>Identiteetin siirrettävyys:</strong> Profiilin siirtäminen palvelusta toiseen
              </li>
              <li>
                <strong>Pseudonymiteetti:</strong> Oikeus käyttää nimimerkkiä ilman todellisen identiteetin
                paljastamista
              </li>
              <li>
                <strong>Digitaalinen perintö:</strong> Oikeus määrätä digitaalisen omaisuuden kohtalosta
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Tekoälyn sääntely</h3>

          <p className="mb-4">
            Laki asettaa tiukat säännöt tekoälyn käytölle, erityisesti päätöksenteossa, joka vaikuttaa ihmisten elämään.
            Kaikki tekoälypäätökset on voitava perustella ja niitä vastaan voi valittaa.
          </p>

          <div className="space-y-3 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Kielletyt tekoälysovellukset</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sosiaalinen pisteytys (kuten Kiinassa)</li>
                  <li>• Reaaliaikainen kasvojentunnistus julkisilla paikoilla</li>
                  <li>• Manipuloivat chatbotit ilman selkeää merkintää</li>
                  <li>• Alitajuinen vaikuttaminen käyttäytymiseen</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-yellow-600">Säännellyt sovellukset</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Luottoluokitus ja lainapäätökset</li>
                  <li>• Työnhakusovellusten seulonta</li>
                  <li>• Vakuutusmaksujen määrittäminen</li>
                  <li>• Opetusteknologia ja arviointi</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vaikutukset suomalaisille</h2>

          <p className="mb-4">
            Lain vaikutukset näkyvät nopeasti suomalaisten arjessa. Suurimmat muutokset koskevat sosiaalisen median
            käyttöä, verkko-ostoksia ja digitaalisten palvelujen käyttöä.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Positiiviset vaikutukset:</h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Parempi tietosuoja:</strong> Tiukemmat säännöt henkilötietojen käsittelylle
            </li>
            <li>
              <strong>Vähemmän manipuloivaa mainontaa:</strong> Läpinäkyvyys ja käyttäjän kontrolli
            </li>
            <li>
              <strong>Oikeudenmukaisemmat algoritmit:</strong> Vähemmän syrjintää ja bias-ongelmia
            </li>
            <li>
              <strong>Parempi asiakaspalvelu:</strong> Velvollisuus tarjota inhimillistä tukea
            </li>
            <li>
              <strong>Kilpailun lisääntyminen:</strong> Helpompi vaihtaa palveluntarjoajaa
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Mahdolliset haitat:</h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Palvelujen kallistuminen:</strong> Compliance-kustannukset siirtyvät kuluttajille
            </li>
            <li>
              <strong>Hitaampi innovaatio:</strong> Byrokratia voi hidastaa uusien palvelujen kehitystä
            </li>
            <li>
              <strong>Geo-blocking:</strong> Jotkut palvelut voivat vetäytyä EU:sta
            </li>
            <li>
              <strong>Monimutkaisemmat käyttöliittymät:</strong> Lisää valintoja ja asetuksia
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Suuret teknologiayritykset reagoivat</h2>

          <p className="mb-4">
            Suuret teknologiayritykset kuten Google, Meta, Apple ja Amazon joutuvat tekemään merkittäviä muutoksia
            palveluihinsa. Monet ovat jo aloittaneet valmistelut lain vaatimusten täyttämiseksi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Meta (Facebook, Instagram)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Uusi "Algoritmin selitys" -ominaisuus</li>
                  <li>• Mahdollisuus poistaa personointi</li>
                  <li>• Läpinäkyvyys mainosten kohdentamisessa</li>
                  <li>• Parannetut tietosuoja-asetukset</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Google</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hakutulosten selitykset</li>
                  <li>• "Neutraali haku" -vaihtoehto</li>
                  <li>• YouTube-algoritmin läpinäkyvyys</li>
                  <li>• Parannettu tietojen siirrettävyys</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Apple</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• App Store -algoritmin avaaminen</li>
                  <li>• Siri-suositusten selitykset</li>
                  <li>• Parannettu tietosuojan hallinta</li>
                  <li>• Kolmannen osapuolen app storet</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Amazon</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tuotesuositusten perustelu</li>
                  <li>• Alexa-päätösten läpinäkyvyys</li>
                  <li>• Hinnoittelualgoritmin avaaminen</li>
                  <li>• Parannettu asiakastietojen hallinta</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Valvonta ja rangaistukset</h2>

          <p className="mb-4">
            Lain noudattamista valvoo uusi EU:n digitaalisten oikeuksien virasto (European Digital Rights Agency).
            Suomessa valvonnasta vastaa Liikenne- ja viestintävirasto Traficom yhdessä tietosuojavaltuutetun kanssa.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <h4 className="font-semibold text-red-900 mb-2">Rangaistukset rikkomuksista:</h4>
            <ul className="list-disc pl-4 text-red-800 space-y-1">
              <li>
                <strong>Suuret yritykset:</strong> Jopa 6% vuotuisesta liikevaihdosta
              </li>
              <li>
                <strong>Pienet yritykset:</strong> Jopa 2% vuotuisesta liikevaihdosta
              </li>
              <li>
                <strong>Toistuvat rikkomukset:</strong> Palvelun käytön kieltäminen EU:ssa
              </li>
              <li>
                <strong>Vakavat rikkomukset:</strong> Rikosvastuun mahdollisuus
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Miten valmistautua muutoksiin?</h2>

          <p className="mb-4">
            Kuluttajien ei tarvitse tehdä mitään erityistä valmistautuakseen lakiin. Muutokset tulevat automaattisesti
            käyttämissäsi palveluissa. On kuitenkin hyvä tietää uusista oikeuksistaan.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Vinkkejä kuluttajille:</h4>
            <ul className="list-disc pl-4 text-blue-800 space-y-1">
              <li>
                <strong>Tutustu uusiin asetuksiin:</strong> Palvelut lisäävät uusia tietosuoja-asetuksia
              </li>
              <li>
                <strong>Käytä läpinäkyvyystyökaluja:</strong> Kysy, miksi näet tiettyjä sisältöjä
              </li>
              <li>
                <strong>Hallitse algoritmeja:</strong> Muokkaa personointiasetuksia tarpeidesi mukaan
              </li>
              <li>
                <strong>Valvo oikeuksiasi:</strong> Ilmoita rikkomuksista viranomaisille
              </li>
              <li>
                <strong>Pysy ajan tasalla:</strong> Seuraa lakiin liittyviä uutisia ja päivityksiä
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kritiikki ja huolenaiheet</h2>

          <p className="mb-4">
            Laki ei ole saanut osakseen pelkästään kiitosta. Teknologiayritykset varoittavat innovaation hidastumisesta,
            ja jotkut asiantuntijat pelkäävät lain olevan liian monimutkainen toteutettavaksi käytännössä.
          </p>

          <p className="mb-6">
            "Laki on hyvä tarkoitukseltaan, mutta se voi johtaa byrokratiahelvettiin", varoittaa teknologia-asiantuntija
            Mikko Hyppönen. "Pienemmät yritykset voivat jäädä suurten jalkoihin, kun compliance-kustannukset kasvavat."
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Keskeiset huolenaiheet:</h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Innovaation hidastuminen:</strong> Byrokratia voi jarruttaa uusien teknologioiden kehitystä
            </li>
            <li>
              <strong>Kustannusten kasvu:</strong> Compliance-kustannukset siirtyvät kuluttajahintoihin
            </li>
            <li>
              <strong>Kilpailun vääristyminen:</strong> Suuret yritykset selviävät paremmin sääntelystä
            </li>
            <li>
              <strong>Tekninen toteutus:</strong> Joidenkin vaatimusten tekninen toteutus on haastavaa
            </li>
            <li>
              <strong>Kansainvälinen kilpailukyky:</strong> EU:n yritykset voivat jäädä jälkeen globaalissa kilpailussa
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden näkymät</h2>

          <p className="mb-4">
            Digitaalisten oikeuksien laki on vasta alkua EU:n digitaalisten oikeuksien sääntelylle. Komissio on jo
            suunnittelemassa lisäsääntelyä tekoälylle, metaversumille ja kvanttitietokoneille.
          </p>

          <p className="mb-6">
            Lain vaikutukset näkyvät todennäköisesti myös EU:n ulkopuolella, kun yritykset soveltavat samoja standardeja
            globaalisti. Tätä kutsutaan "Brysselin efektiksi".
          </p>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Yhteenveto</h3>
            <p className="text-gray-700">
              EU:n digitaalisten oikeuksien laki on merkittävä askel kohti parempaa digitaalisten oikeuksien suojaa. Se
              tuo mukanaan sekä mahdollisuuksia että haasteita. Suomalaiset kuluttajat saavat paremman kontrollin
              digitaalisesta identiteetistään, mutta samalla palvelut voivat kallistua ja monimutkaistua. Lain
              todellinen vaikutus selviää vasta käytännön toteutuksen myötä.
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
