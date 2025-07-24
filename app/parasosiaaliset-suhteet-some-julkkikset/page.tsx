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
  title: "Parasosiaalinen suhde some-julkkiksiin - terve vai haitallinen? | Bera Bridge",
  description:
    "Nuoret muodostavat syvällisiä tunnesiteitä some-julkkiksiin. Milloin parasosiaaliset suhteet ovat terveitä ja milloin ne muuttuvat haitallisiksi?",
}




const relatedArticles = [
  { id: "tekoaly-muuttaa-tyomarkkinoita", title: "Tekoäly muuttaa työmarkkinoita", category: "Teknologia" },
  { id: "metaverse-tulevaisuus", title: "Metaverse ja virtuaalitodellisuuden tulevaisuus", category: "Teknologia" },
  { id: "kryptovaluuttojen-tulevaisuus", title: "Kryptovaluuttojen tulevaisuus", category: "Teknologia" }
];

export default function ParasocialRelationshipsPage() {
  const tags = extractTagsFromArticle("parasosiaaliset-suhteet-some-julkkikset", "Uutiset");

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
            <Badge className="bg-purple-100 text-purple-800">Psykologia</Badge>
            <Badge variant="outline">Sosiaalinen media</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Parasosiaalinen suhde some-julkkiksiin - terve vai haitallinen?
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Nuoret muodostavat yhä syvempiä tunnesiteitä sosiaalisen median julkkiksiin. Parasosiaaliset suhteet voivat
            olla terveitä, mutta milloin ne muuttuvat haitallisiksi ja miten vanhemmat voivat tunnistaa varoitusmerkit?
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>3.1.2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>9 min lukuaika</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Psykologia-toimitus</span>
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
            src="/metaverse-identity.svg&text=Nuori+seuraa+some-julkkista+puhelimella"
            alt="Nuori seuraa sosiaalisen median julkkista intensiivisesti"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Parasosiaaliset suhteet some-julkkiksiin voivat olla hyvin intensiivisiä. Kuva: Unsplash
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>17-vuotias Liisa</strong> tuntee olevansa läheinen ystävä suosikki-YouTuberin kanssa. Hän seuraa
            tämän jokaista videota, tietää hänen lempiruokansa ja huolehtii hänen hyvinvoinnistaan. Liisa ei ole koskaan
            tavannut tätä henkilöä, mutta kokee syvää tunnesidettä häneen. Kyseessä on parasosiaalinen suhde - ilmiö,
            joka on yleistynyt räjähdysmäisesti sosiaalisen median aikakaudella.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mitä parasosiaaliset suhteet ovat?</h2>

          <p className="mb-4">
            Parasosiaalinen suhde tarkoittaa yksipuolista tunnesidettä, jonka henkilö muodostaa mediahahmoon tai
            julkisuuden henkilöön. Käsite kehitettiin alun perin kuvaamaan television katsojan suhdetta
            tv-persoonallisuuksiin, mutta sosiaalinen media on vienyt ilmiön aivan uudelle tasolle.
          </p>

          <p className="mb-6">
            "Parasosiaaliset suhteet ovat täysin normaaleja ja voivat olla jopa hyödyllisiä", selittää Helsingin
            yliopiston sosiaalipsykologian professori Marja Salmela. "Ongelma syntyy, kun ne alkavat korvata todellisia
            ihmissuhteita tai vaikuttavat haitallisesti nuoren kehitykseen."
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Parasosiaalisten suhteiden ominaisuuksia:</h4>
            <ul className="list-disc pl-4 text-blue-800 space-y-1">
              <li>
                <strong>Yksipuolisuus:</strong> Vain toinen osapuoli tuntee toisen
              </li>
              <li>
                <strong>Tunnelataus:</strong> Vahvoja tunteita ja empatiaa
              </li>
              <li>
                <strong>Jatkuvuus:</strong> Suhde kehittyy ajan myötä
              </li>
              <li>
                <strong>Henkilökohtaisuus:</strong> Kokemus läheisyydestä ja ymmärryksestä
              </li>
              <li>
                <strong>Huolenpito:</strong> Välittäminen "ystävän" hyvinvoinnista
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Sosiaalinen media syventää parasosiaalisia suhteita
          </h2>

          <p className="mb-4">
            Perinteisessä mediassa parasosiaaliset suhteet olivat rajallisia - tv-ohjelmia katsottiin tiettyinä aikoina,
            ja vuorovaikutus oli yksipuolista. Sosiaalinen media on muuttanut tämän täysin.
          </p>

          <p className="mb-6">
            YouTube, Instagram, TikTok ja Twitch mahdollistavat jatkuvan "yhteyden" suosikkijulkkiksiin. Stories,
            livestreamit ja kommentit luovat illuusion kaksisuuntaisesta suhteesta, vaikka todellisuudessa kyse on
            edelleen yksipuolisesta suhteesta.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Miten some syventää parasosiaalisia suhteita:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Jatkuva läsnäolo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Stories ja päivitykset luovat tunteen siitä, että "ystävä" on jatkuvasti läsnä elämässä.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Henkilökohtaiset paljastukset</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Vaikuttajat jakavat intiimejä yksityiskohtia elämästään, mikä syventää tunnesidettä.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vuorovaikutuksen illuusio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Kommentit, tykkäykset ja mahdolliset vastaukset luovat tunteen todellisesta vuorovaikutuksesta.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Saavutettavuus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  "Ystävä" on aina saatavilla puhelimessa, toisin kuin todelliset ystävät.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Terveet parasosiaaliset suhteet - hyötyjä ja positiivisia vaikutuksia
          </h2>

          <p className="mb-4">
            Parasosiaaliset suhteet eivät ole automaattisesti haitallisia. Päinvastoin, ne voivat tarjota monia
            psykologisia hyötyjä, erityisesti nuorille, jotka etsivät identiteettiään ja paikkaansa maailmassa.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
            <h4 className="font-semibold text-green-900 mb-2">Terveiden parasosiaalisten suhteiden hyötyjä:</h4>
            <ul className="list-disc pl-4 text-green-800 space-y-1">
              <li>
                <strong>Emotionaalinen tuki:</strong> Lohdutus vaikeina aikoina
              </li>
              <li>
                <strong>Roolimallit:</strong> Positiivisia esimerkkejä ja inspiraatiota
              </li>
              <li>
                <strong>Yhteisöllisyys:</strong> Tunne kuulumisesta johonkin ryhmään
              </li>
              <li>
                <strong>Oppiminen:</strong> Uusien taitojen ja tietojen omaksuminen
              </li>
              <li>
                <strong>Itsetunnon tuki:</strong> Hyväksyntä ja ymmärrys
              </li>
              <li>
                <strong>Stressin lievitys:</strong> Rentoutuminen ja viihdytys
              </li>
            </ul>
          </div>

          <p className="mb-6">
            "Hyvä some-vaikuttaja voi toimia mentorina ja tukea nuoren kasvua", sanoo nuorisopsykologi Antti Virtanen.
            "Esimerkiksi fitness-vaikuttaja voi motivoida terveellisiin elämäntapoihin, tai opiskeluvaikuttaja voi
            auttaa oppimisessa."
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Milloin parasosiaaliset suhteet muuttuvat haitallisiksi?
          </h2>

          <p className="mb-4">
            Ongelma syntyy, kun parasosiaaliset suhteet alkavat hallita nuoren elämää tai korvata todellisia
            ihmissuhteita. Äärimmäisissä tapauksissa ne voivat johtaa sosiaaliseen eristäytymiseen, taloudellisiin
            ongelmiin tai jopa mielenterveysongelmiin.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <h4 className="font-semibold text-red-900 mb-2">
              Varoitusmerkkejä haitallisista parasosiaalisista suhteista:
            </h4>
            <ul className="list-disc pl-4 text-red-800 space-y-1">
              <li>Todellisten ystävyyssuhteiden laiminlyönti</li>
              <li>Liiallinen rahan käyttö vaikuttajan tuotteisiin</li>
              <li>Äärimmäinen ahdistus, jos vaikuttaja ei päivitä</li>
              <li>Vaikuttajan elämän asettaminen oman elämän edelle</li>
              <li>Epärealistiset odotukset vuorovaikutuksesta</li>
              <li>Aggressiivinen puolustaminen kritiikkiä vastaan</li>
              <li>Identiteetin rakentaminen vaikuttajan ympärille</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Nuorten haavoittuvuus parasosiaalisille suhteille
          </h2>

          <p className="mb-4">
            Nuoret ovat erityisen alttiita muodostamaan voimakkaita parasosiaalisia suhteita. Tämä johtuu heidän
            kehitysvaiheestaan: identiteetti muotoutuu, sosiaaliset taidot kehittyvät, ja tarve kuulua johonkin on
            voimakas.
          </p>

          <p className="mb-6">
            Lisäksi nuoret viettävät paljon aikaa verkossa ja ovat taitavia käyttämään sosiaalista mediaa, mikä altistaa
            heitä vaikuttajien vaikutukselle. He eivät myöskään aina ymmärrä kaupallisia motiiveja vaikuttajien
            toiminnan takana.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Miksi nuoret ovat haavoittuvia:</h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Identiteetin etsiminen:</strong> Nuoret etsivät roolimalleja ja identiteettinsä rakennusaineita
            </li>
            <li>
              <strong>Sosiaalinen paine:</strong> Tarve kuulua johonkin ja olla hyväksytty
            </li>
            <li>
              <strong>Emotionaalinen epävakaus:</strong> Tunteet vaihtelevat voimakkaasti
            </li>
            <li>
              <strong>Rajallinen elämänkokemus:</strong> Vaikea arvioida realistisuutta
            </li>
            <li>
              <strong>Teknologinen osaaminen:</strong> Taitavat käyttäjät, mutta kriittinen ajattelu puuttuu
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vanhempien rooli ja tunnistaminen</h2>

          <p className="mb-4">
            Vanhemmilla on tärkeä rooli parasosiaalisten suhteiden terveellisyyden arvioinnissa ja tukemisessa.
            Avainasemassa on avoin kommunikaatio ja ymmärrys siitä, että nämä suhteet ovat nuorelle todellisia ja
            merkityksellisiä.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Ohjeita vanhemmille:</h4>
            <ul className="list-disc pl-4 text-blue-800 space-y-1">
              <li>
                <strong>Osoita kiinnostusta:</strong> Kysy, ketä nuori seuraa ja miksi
              </li>
              <li>
                <strong>Älä vähättele:</strong> Ota nuoren tunteet vakavasti
              </li>
              <li>
                <strong>Keskustele kriittisesti:</strong> Opeta tunnistamaan kaupalliset motiivit
              </li>
              <li>
                <strong>Tue todellisia suhteita:</strong> Kannusta kasvokkain tapahtuvaan sosiaalisuuteen
              </li>
              <li>
                <strong>Aseta rajoja:</strong> Sovi ruutuajasta ja rahan käytöstä
              </li>
              <li>
                <strong>Hae apua tarvittaessa:</strong> Ota yhteyttä ammattilaisiin huolien kasvaessa
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vaikuttajien vastuu</h2>

          <p className="mb-4">
            Sosiaalisen median vaikuttajilla on merkittävä vastuu siitä, miten he kohtelevat seuraajiaan, erityisesti
            nuoria. Monet vaikuttajat eivät täysin ymmärrä, kuinka syvällisiä tunnesiteitä heidän seuraajiensa kanssa
            voi syntyä.
          </p>

          <p className="mb-6">
            Vastuullinen vaikuttaja tunnistaa valtansa ja käyttää sitä positiivisesti. Hän on läpinäkyvä kaupallisista
            yhteistöistään, välttää haitallisten tuotteiden mainostamista ja rohkaisee seuraajiaan itsenäiseen
            ajatteluun.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tutkimus ja tulevaisuus</h2>

          <p className="mb-4">
            Parasosiaalisten suhteiden tutkimus on vielä suhteellisen uutta, erityisesti sosiaalisen median
            kontekstissa. Tutkijat ympäri maailmaa selvittävät parhaillaan näiden suhteiden pitkäaikaisia vaikutuksia
            nuorten kehitykseen.
          </p>

          <p className="mb-6">
            Alustavat tulokset viittaavat siihen, että kohtuullisina parasosiaaliset suhteet voivat olla hyödyllisiä,
            mutta liiallisina ne voivat haitata sosiaalisten taitojen kehitystä ja todellisten ihmissuhteiden
            muodostamista.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Käytännön vinkkejä tasapainon löytämiseksi</h2>

          <p className="mb-4">
            Tavoitteena ei ole parasosiaalisten suhteiden täydellinen välttäminen, vaan tasapainon löytäminen
            virtuaalisten ja todellisten suhteiden välillä. Tässä muutamia käytännön vinkkejä:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Nuorille</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">• Muista, että vaikuttaja ei tunne sinua henkilökohtaisesti</p>
                <p className="text-sm text-gray-600">• Älä unohda todellisia ystäviä virtuaalisten vuoksi</p>
                <p className="text-sm text-gray-600">• Kyseenalaista vaikuttajan motiivit</p>
                <p className="text-sm text-gray-600">• Aseta budjetti vaikuttajan tuotteille</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vanhemmille</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">• Keskustele avoimesti nuoren kiinnostuksen kohteista</p>
                <p className="text-sm text-gray-600">• Tue todellisten ystävyyssuhteiden muodostamista</p>
                <p className="text-sm text-gray-600">• Opeta medialukutaitoa ja kriittistä ajattelua</p>
                <p className="text-sm text-gray-600">• Aseta selkeät rajat ruutuajalle</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Yhteenveto</h3>
            <p className="text-gray-700">
              Parasosiaaliset suhteet some-julkkiksiin ovat normaali osa nykyajan nuoruutta. Ne voivat tarjota tukea,
              inspiraatiota ja yhteisöllisyyttä, mutta voivat myös muuttua haitallisiksi, jos ne alkavat hallita elämää
              tai korvata todellisia ihmissuhteita. Avain on tasapainon löytäminen ja kriittisen ajattelun kehittäminen.
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
