import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"

export const metadata = {
  title: "Digitaalinen kiusaaminen lisääntyy - koulut etsivät ratkaisuja | Bera Bridge",
  description:
    "Verkkokiusaaminen on yleistynyt huolestuttavasti suomalaisissa kouluissa. Miten ongelma voidaan ratkaista ja mitä vanhemmat voivat tehdä?",
}

const relatedArticles = [
  {
    title: "Some-vaikuttajat ohjaavat nuorten kulutuskäyttäytymistä",
    href: "/some-vaikuttajat-nuorten-kulutuskayttaytyminen",
    category: "Sosiaalinen media",
  },
  {
    title: "Nuorten ruutuaika kasvaa huolestuttavasti",
    href: "/nuorten-ruutuaika-kasvaa-huolestuttavasti",
    category: "Terveys",
  },
  {
    title: "Lasten tietosuoja verkossa - Suomi kiristää sääntelyä",
    href: "/lasten-tietosuoja-verkossa-suomi",
    category: "Politiikka",
  },
]

export default function CyberbullyingPage() {
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
            <Badge className="bg-red-100 text-red-800">Yhteiskunta</Badge>
            <Badge variant="outline">Nuoret</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Digitaalinen kiusaaminen lisääntyy - koulut etsivät ratkaisuja
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Verkkokiusaaminen on yleistynyt huolestuttavasti suomalaisissa kouluissa. Uudet teknologiat ja alustat
            luovat jatkuvasti uusia tapoja kiusata, ja perinteiset ratkaisut eivät enää riitä.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>4.1.2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>8 min lukuaika</span>
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
            src="/metaverse-identity.svg&text=Nuori+surullisena+puhelimen+kanssa"
            alt="Nuori kärsii verkkokiusaamisesta"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Verkkokiusaaminen voi jatkua 24/7 ja seurata uhria kotiin asti. Kuva: Unsplash
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>14-vuotias Aino</strong> ei halua enää mennä kouluun. Häntä kiusataan WhatsAppissa, Instagramissa ja
            TikTokissa ympäri vuorokauden. Kotikaan ei ole enää turvallinen paikka, kun kiusaaminen jatkuu verkossa.
            Ainon tarina ei ole harvinainen - verkkokiusaaminen on yleistynyt räjähdysmäisesti suomalaisissa kouluissa.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Verkkokiusaamisen määrä kasvaa huolestuttavasti
          </h2>

          <p className="mb-4">
            Opetushallituksen tuoreen selvityksen mukaan 34% suomalaisista 13-16-vuotiaista on kokenut verkkokiusaamista
            viimeisen vuoden aikana. Luku on kasvanut 15 prosenttiyksikköä viimeisen viiden vuoden aikana.
          </p>

          <p className="mb-6">
            Erityisen huolestuttavaa on, että verkkokiusaaminen on usein julmempaa ja pitkäkestoisempaa kuin perinteinen
            kiusaaminen. Digitaaliset jäljet säilyvät, ja kiusaaminen voi jatkua ympäri vuorokauden.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <h4 className="font-semibold text-red-900 mb-2">Verkkokiusaamisen tilastoja Suomessa:</h4>
            <ul className="list-disc pl-4 text-red-800 space-y-1">
              <li>
                <strong>34%</strong> nuorista on kokenut verkkokiusaamista
              </li>
              <li>
                <strong>67%</strong> tapauksista jatkuu yli kuukauden
              </li>
              <li>
                <strong>89%</strong> uhreista kokee ahdistusta ja masennusta
              </li>
              <li>
                <strong>23%</strong> on harkinnut koulun lopettamista
              </li>
              <li>
                <strong>12%</strong> on harkinnut itsemurhaa
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Uudet alustat, uudet kiusaamisen muodot</h2>

          <p className="mb-4">
            Verkkokiusaaminen on kehittynyt perinteisistä sähköposteista ja keskustelupalstoista monimutkaisemmiksi ja
            haitallisemmiksi muodoiksi. Uudet sosiaalisen median alustat luovat jatkuvasti uusia mahdollisuuksia
            kiusaamiselle.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Yleisimmät verkkokiusaamisen muodot 2025:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ryhmäkiusaaminen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  WhatsApp-ryhmissä ja Discord-servereillä järjestetään koordinoituja hyökkäyksiä yksittäistä oppilasta
                  vastaan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Deepfake-kiusaaminen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Tekoälyä käytetään luomaan vääriä kuvia tai videoita uhreista nöyryyttämis- tai
                  kiristystarkoituksessa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Anonyymi kiusaaminen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Alustoilla kuten Yolo ja NGL lähetetään nimettömiä viestejä, jotka voivat olla erittäin loukkaavia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sosiaalinen eristäminen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Uhri jätetään systemaattisesti pois ryhmäkeskusteluista ja sosiaalisista tapahtumista verkossa.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verkkokiusaamisen vaikutukset ovat vakavia</h2>

          <p className="mb-4">
            Verkkokiusaamisen psykologiset vaikutukset voivat olla jopa pahempia kuin fyysisen kiusaamisen. Uhrit
            kärsivät usein pitkäaikaisista mielenterveysongelmista, ja pahimmissa tapauksissa kiusaaminen voi johtaa
            itsemurhaan.
          </p>

          <p className="mb-6">
            "Verkkokiusaaminen ei lopu koulupäivän päättyessä", selittää Helsingin yliopiston psykologian professori
            Marja Korhonen. "Se seuraa lasta kotiin, viikonloppuihin ja lomille. Uhri ei saa rauhaa missään."
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <h4 className="font-semibold text-yellow-900 mb-2">Verkkokiusaamisen tunnusmerkkejä lapsessa:</h4>
            <ul className="list-disc pl-4 text-yellow-800 space-y-1">
              <li>Haluttomuus käyttää puhelinta tai tietokonetta</li>
              <li>Ahdistuneisuus viestien saapuessa</li>
              <li>Sosiaalinen vetäytyminen ja eristäytyminen</li>
              <li>Koulumenestyksen heikkeneminen</li>
              <li>Unihäiriöt ja syömisongelmät</li>
              <li>Itsetuhoiset ajatukset</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Koulujen haasteet ja ratkaisuyritykset</h2>

          <p className="mb-4">
            Suomalaiset koulut kamppailevat verkkokiusaamisen kanssa, koska se tapahtuu usein koulun ulkopuolella ja
            virka-ajan jälkeen. Perinteiset kiusaamisen vastaisen työn menetelmät eivät toimi digitaalisessa
            ympäristössä.
          </p>

          <p className="mb-6">
            "Meidän on opittava ymmärtämään, että digitaalinen ja fyysinen maailma ovat nuorille sama asia", sanoo
            Espoon kaupungin kiusaamisen vastaisen työn koordinaattori Liisa Virtanen. "Emme voi enää erottaa niitä
            toisistaan."
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Koulujen uusia toimenpiteitä:</h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Digitaalisen kansalaisuuden opetus:</strong> Opetetaan vastuullista verkossa toimimista
            </li>
            <li>
              <strong>Vertaistuki-ohjelmat:</strong> Koulutetaan oppilaita tunnistamaan ja puuttumaan kiusaamiseen
            </li>
            <li>
              <strong>Teknologiset ratkaisut:</strong> Käytetään tekoälyä kiusaamisen tunnistamiseen
            </li>
            <li>
              <strong>Vanhempien koulutus:</strong> Opetetaan vanhempia tunnistamaan verkkokiusaaminen
            </li>
            <li>
              <strong>Yhteistyö alustojen kanssa:</strong> Tehdään yhteistyötä some-alustojen kanssa
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vanhempien rooli on keskeinen</h2>

          <p className="mb-4">
            Vanhemmilla on tärkeä rooli verkkokiusaamisen ehkäisyssä ja siihen puuttumisessa. Moni vanhempi ei
            kuitenkaan tiedä, miten tunnistaa verkkokiusaamista tai miten siihen tulisi reagoida.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Ohjeita vanhemmille:</h4>
            <ul className="list-disc pl-4 text-blue-800 space-y-1">
              <li>
                <strong>Keskustele säännöllisesti:</strong> Kysy lapsen verkkoaktiviteeteista
              </li>
              <li>
                <strong>Aseta rajoja:</strong> Sovi yhdessä ruutuajan käytöstä
              </li>
              <li>
                <strong>Opeta empatiaa:</strong> Korosta toisten kunnioittamista verkossa
              </li>
              <li>
                <strong>Reagoi nopeasti:</strong> Ota kiusaaminen aina vakavasti
              </li>
              <li>
                <strong>Hae apua:</strong> Ota yhteyttä kouluun ja tarvittaessa ammattilaisiin
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Teknologiset ratkaisut apuna</h2>

          <p className="mb-4">
            Uudet teknologiat voivat olla osa ratkaisua verkkokiusaamisen torjunnassa. Tekoäly kykenee tunnistamaan
            kiusaamista sosiaalisessa mediassa, ja erilaiset sovellukset auttavat vanhempia seuraamaan lastensa
            verkkoaktiviteettia.
          </p>

          <p className="mb-6">
            Suomalainen startup-yritys SafeSpace on kehittänyt tekoälyä, joka tunnistaa kiusaamista reaaliajassa ja
            varoittaa siitä vanhempia ja opettajia. Ratkaisu on otettu käyttöön jo kymmenissä suomalaisissa kouluissa.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lainsäädäntö ja sääntely</h2>

          <p className="mb-4">
            Suomen lainsäädäntö on päivittynyt verkkokiusaamisen osalta. Uusi laki digitaalisesta häirinnästä tuli
            voimaan 2024, ja se tekee vakavasta verkkokiusaamisesta rikoksen, josta voi seurata sakko tai vankeutta.
          </p>

          <p className="mb-6">
            Lisäksi EU:n digitaalipalvelulaki velvoittaa sosiaalisen median alustoja puuttumaan kiusaamiseen
            tehokkaammin ja poistamaan haitallista sisältöä nopeammin.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden näkymät</h2>

          <p className="mb-4">
            Verkkokiusaamisen torjunta vaatii pitkäjänteistä työtä ja kaikkien osapuolten sitoutumista. Ratkaisuna ei
            ole teknologian kieltäminen, vaan sen vastuullisen käytön opettaminen ja haitallisen käytön tehokas
            torjunta.
          </p>

          <p className="mb-6">
            Tulevaisuudessa tarvitaan entistä tiiviimpää yhteistyötä koulujen, vanhempien, teknologiayritysten ja
            viranomaisten välillä. Vain yhdessä voimme luoda turvallisen digitaalisen ympäristön nuorille.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Yhteenveto</h3>
            <p className="text-gray-700">
              Verkkokiusaaminen on vakava ja kasvava ongelma suomalaisissa kouluissa. Sen torjunta vaatii uudenlaisia
              lähestymistapoja, teknologisia ratkaisuja ja kaikkien osapuolten sitoutumista. Vanhempien, koulujen ja
              yhteiskunnan on toimittava yhdessä luodakseen turvallisen digitaalisen ympäristön nuorille.
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
