import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"

export const metadata = {
  title: "Lasten tietosuoja verkossa - Suomi kiristää sääntelyä | Bera Bridge",
  description:
    "Suomi ottaa käyttöön tiukemmat säännöt lasten tietosuojan suojaamiseksi verkossa. Uudet lait koskevat sosiaalista mediaa, pelejä ja kaikkia digitaalisia palveluja.",
}

const relatedArticles = [
  {
    title: "EU:n digitaalisten oikeuksien laki - mitä se tarkoittaa suomalaisille?",
    href: "/eu-digitaaliset-oikeudet-laki",
    category: "Politiikka",
  },
  {
    title: "Nuorten ruutuaika kasvaa huolestuttavasti",
    href: "/nuorten-ruutuaika-kasvaa-huolestuttavasti",
    category: "Terveys",
  },
  {
    title: "Digitaalinen kiusaaminen lisääntyy - koulut etsivät ratkaisuja",
    href: "/digitaalinen-kiusaaminen-lisaantyy",
    category: "Yhteiskunta",
  },
]

export default function ChildrenPrivacyPage() {
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
            <Badge className="bg-red-100 text-red-800">Tietosuoja</Badge>
            <Badge variant="outline">Lapset</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Lasten tietosuoja verkossa - Suomi kiristää sääntelyä
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Suomi ottaa käyttöön Euroopan tiukimmat säännöt lasten tietosuojan suojaamiseksi verkossa. Uudet lait
            koskevat sosiaalista mediaa, pelejä ja kaikkia digitaalisia palveluja, joita alle 16-vuotiaat käyttävät.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>29.12.2024</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>10 min lukuaika</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Tietosuoja-toimitus</span>
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
            src="/metaverse-identity.svg&text=Lapsi+käyttää+tablettia+turvallisesti"
            alt="Lapsi käyttää tablettia vanhemman valvonnassa"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Uudet lait parantavat lasten turvallisuutta verkossa merkittävästi. Kuva: Unsplash
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Suomi ottaa</strong> merkittävän askeleen lasten suojelemiseksi verkossa. Uusi lasten tietosuojalaki
            astuu voimaan kesäkuussa 2025 ja asettaa tiukimmat säännöt Euroopassa alle 16-vuotiaiden henkilötietojen
            käsittelylle. Laki vaikuttaa kaikkiin digitaalisiin palveluihin TikTokista Minecraftiin.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Miksi uutta sääntelyä tarvitaan?</h2>

          <p className="mb-4">
            Lasten digitaalisten oikeuksien suojelu on jäänyt jälkeen teknologian kehityksestä. Nykyiset lait eivät
            riitä suojaamaan lapsia kehittyneiltä seurantamenetelmiltä, manipuloivalta mainonnalta ja tiedonkeruulta.
          </p>

          <p className="mb-6">
            "Lapset eivät ole pieniä aikuisia verkossa", sanoo oikeusministeri Anna-Maja Henriksson. "He tarvitsevat
            erityistä suojaa, koska he eivät ymmärrä tiedonkeruun seurauksia tai osaa suojata itseään."
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <h4 className="font-semibold text-red-900 mb-2">Huolestuttavia tilastoja:</h4>
            <ul className="list-disc pl-4 text-red-800 space-y-1">
              <li>
                <strong>89%</strong> suomalaisista 8-15-vuotiaista käyttää sosiaalista mediaa päivittäin
              </li>
              <li>
                <strong>67%</strong> lapsista on jakanut henkilötietojaan verkossa tietämättään
              </li>
              <li>
                <strong>45%</strong> on kohdannut epäsopivaa sisältöä tai mainontaa
              </li>
              <li>
                <strong>34%</strong> on kokenut verkkokiusaamista
              </li>
              <li>
                <strong>78%</strong> vanhemmista ei tiedä, mitä tietoja heidän lapsistaan kerätään
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Uuden lain keskeiset säännöt</h2>

          <p className="mb-4">
            Uusi laki asettaa tiukat rajoitukset sille, miten yritykset voivat kerätä, käsitellä ja käyttää lasten
            henkilötietoja. Säännöt ovat huomattavasti tiukemmat kuin aikuisille.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Ikärajojen valvonta</h3>

          <p className="mb-4">
            Kaikki digitaaliset palvelut joutuvat toteuttamaan tehokkaan ikävarmennuksen. Pelkkä "Olen yli 13-vuotias"
            -ruksin rastittaminen ei enää riitä.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hyväksyttävät menetelmät</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pankkitunnistautuminen</li>
                  <li>• Mobiilivarmenteen käyttö</li>
                  <li>• Vanhemman vahvistus sähköpostitse</li>
                  <li>• Kolmannen osapuolen ikävarmennus</li>
                  <li>• Tekoälypohjainen kasvojen ikäanalyysi</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Kielletyt menetelmät</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pelkkä itse-ilmoittaminen</li>
                  <li>• Luottokorttitietojen pyytäminen</li>
                  <li>• Henkilötunnuksen tallentaminen</li>
                  <li>• Epäluotettavat kolmannet osapuolet</li>
                  <li>• Biometristen tietojen tallentaminen</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Tiedonkeruun rajoitukset</h3>

          <p className="mb-4">
            Lapsilta saa kerätä vain välttämättömiä tietoja palvelun toiminnan kannalta. Profilointi, käyttäytymisen
            seuranta ja personoitu mainonta on kielletty alle 16-vuotiailta.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
            <h4 className="font-semibold text-green-900 mb-2">Sallittu tiedonkeruu:</h4>
            <ul className="list-disc pl-4 text-green-800 space-y-1">
              <li>Käyttäjätunnus ja salasana</li>
              <li>Ikä (vain varmennusta varten)</li>
              <li>Vanhemman yhteystiedot</li>
              <li>Palvelun käyttöön välttämättömät tekniset tiedot</li>
              <li>Turvallisuuden kannalta välttämättömät lokitiedot</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <h4 className="font-semibold text-red-900 mb-2">Kielletty tiedonkeruu:</h4>
            <ul className="list-disc pl-4 text-red-800 space-y-1">
              <li>Sijaintitiedot (paitsi turvallisuussyistä)</li>
              <li>Käyttäytymisen seuranta ja profilointi</li>
              <li>Biometriset tunnisteet</li>
              <li>Sosiaalisten verkostojen kartoitus</li>
              <li>Kolmansien osapuolten evästeet</li>
              <li>Kameran ja mikrofonin käyttö ilman lupaa</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Mainontakielto</h3>

          <p className="mb-4">
            Alle 16-vuotiaille on kielletty näyttää personoitua mainontaa. Sallittua on vain yleinen, ikäsopiva
            mainonta, joka ei perustu käyttäjän henkilötietoihin tai käyttäytymiseen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vanhempien oikeudet vahvistuvat</h2>

          <p className="mb-4">
            Uusi laki antaa vanhemmille laajat oikeudet valvoa ja hallita lastensa digitaalista jalanjälkeä. Vanhemmat
            voivat vaatia tietojen poistamista ja estää tiedonkeruun kokonaan.
          </p>

          <div className="space-y-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vanhempien uudet oikeudet</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>
                    • <strong>Tietojen tarkastusoikeus:</strong> Nähdä kaikki lapsesta kerätyt tiedot
                  </li>
                  <li>
                    • <strong>Poisto-oikeus:</strong> Vaatia kaikkien tietojen poistamista
                  </li>
                  <li>
                    • <strong>Kieltämisoikeus:</strong> Estää tiedonkeruu kokonaan
                  </li>
                  <li>
                    • <strong>Siirto-oikeus:</strong> Siirtää tiedot toiseen palveluun
                  </li>
                  <li>
                    • <strong>Valvontaoikeus:</strong> Saada säännöllisiä raportteja lapsen toiminnasta
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vanhempien velvollisuudet</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>
                    • <strong>Suostumuksen antaminen:</strong> Hyväksyä lapsen palvelujen käyttö
                  </li>
                  <li>
                    • <strong>Valvonta:</strong> Seurata lapsen verkkoaktiviteettia
                  </li>
                  <li>
                    • <strong>Opastaminen:</strong> Opettaa turvallista internetin käyttöä
                  </li>
                  <li>
                    • <strong>Yhteydenpito:</strong> Pitää yhteystiedot ajan tasalla
                  </li>
                  <li>
                    • <strong>Reagointi:</strong> Puuttua ongelmatilanteisiin nopeasti
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vaikutukset eri palveluihin</h2>

          <p className="mb-4">
            Uusi laki vaikuttaa eri tavoin erilaisiin digitaalisiin palveluihin. Suurimmat muutokset koskevat
            sosiaalista mediaa, pelejä ja koulutussovelluksia.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Sosiaalinen media</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">TikTok</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ei personoitua For You -syötettä alle 16v</li>
                  <li>• Tiukka ikävarmennus pakollinen</li>
                  <li>• Vanhempien valvontapaneeli</li>
                  <li>• Automaattinen yksityisyysasetus</li>
                  <li>• Rajoitettu sisällön jakaminen</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">Instagram</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ei mainoksia alle 16-vuotiaille</li>
                  <li>• Stories ja Reels rajoitettu</li>
                  <li>• Pakollinen vanhemman hyväksyntä</li>
                  <li>• Ei sijaintitietojen keruuta</li>
                  <li>• Rajoitettu viestintä tuntemattomien kanssa</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">YouTube</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ei personoituja suosituksia</li>
                  <li>• Tiukka sisällön moderointi</li>
                  <li>• Ei kommentointimahdollisuutta</li>
                  <li>• Vanhempien hyväksyntä kanavien tilaukseen</li>
                  <li>• Automaattinen turvallinen haku</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">Discord</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ei yksityisviestejä tuntemattomilta</li>
                  <li>• Vanhempien valvonta pakollinen</li>
                  <li>• Rajoitettu palvelinten liittyminen</li>
                  <li>• Automaattinen sisällön suodatus</li>
                  <li>• Ei ääni- ja videokeskusteluja</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pelit ja sovellukset</h3>

          <p className="mb-4">
            Pelit joutuvat tekemään merkittäviä muutoksia, erityisesti mikromaksujen, sosiaalisten ominaisuuksien ja
            tiedonkeruun osalta.
          </p>

          <div className="space-y-3 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Minecraft</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Muutokset:</strong> Ei chat-ominaisuutta alle 16v, vanhempien hyväksyntä palvelimille, ei
                  mikromaksuja ilman vanhemman lupaa
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-orange-600">Roblox</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Muutokset:</strong> Tiukka sisällön moderointi, ei Robux-ostoksia, rajoitettu sosiaalinen
                  vuorovaikutus, vanhempien valvontapaneeli
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-purple-600">Fortnite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Muutokset:</strong> Ei V-Bucks-ostoksia, rajoitettu voice chat, ei personoitua sisältöä,
                  vanhempien hyväksyntä Battle Pass -ostoihin
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tekninen toteutus ja haasteet</h2>

          <p className="mb-4">
            Lain tekninen toteutus on monimutkaista. Yritysten on kehitettävä uusia järjestelmiä ikävarmennukseen,
            vanhempien suostumuksen hallintaan ja tietojen suojaamiseen.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <h4 className="font-semibold text-yellow-900 mb-2">Teknisiä haasteita:</h4>
            <ul className="list-disc pl-4 text-yellow-800 space-y-1">
              <li>
                <strong>Ikävarmennus:</strong> Luotettavan mutta yksityisyyttä kunnioittavan järjestelmän kehittäminen
              </li>
              <li>
                <strong>Vanhempien tunnistaminen:</strong> Varmistaminen, että suostumuksen antaja on todella vanhempi
              </li>
              <li>
                <strong>Tietojen erottelu:</strong> Lasten ja aikuisten tietojen pitäminen erillään
              </li>
              <li>
                <strong>Kansainvälisyys:</strong> Eri maiden lakien yhteensovittaminen
              </li>
              <li>
                <strong>Kustannukset:</strong> Compliance-järjestelmien kehittäminen on kallista
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Valvonta ja rangaistukset</h2>

          <p className="mb-4">
            Lain noudattamista valvoo tietosuojavaltuutettu yhdessä Liikenne- ja viestintäviraston kanssa. Rangaistukset
            ovat ankarat, jotta yritykset ottavat lain vakavasti.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <h4 className="font-semibold text-red-900 mb-2">Rangaistukset:</h4>
            <ul className="list-disc pl-4 text-red-800 space-y-1">
              <li>
                <strong>Ensimmäinen rikkomus:</strong> Varoitus ja määräaika korjauksille
              </li>
              <li>
                <strong>Toistuva rikkomus:</strong> Jopa 4% vuotuisesta liikevaihdosta
              </li>
              <li>
                <strong>Vakava rikkomus:</strong> Palvelun käytön kieltäminen Suomessa
              </li>
              <li>
                <strong>Tahallinen rikkomus:</strong> Rikosvastuun mahdollisuus
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kansainvälinen vaikutus</h2>

          <p className="mb-4">
            Suomen tiukka lainsäädäntö voi vaikuttaa myös muihin maihin. Monet EU-maat harkitsevat vastaavia lakeja, ja
            Suomi voi toimia esimerkkinä.
          </p>

          <p className="mb-6">
            Yritykset saattavat soveltaa Suomen standardeja globaalisti, koska erillisten järjestelmien ylläpito on
            kallista. Tämä voisi parantaa lasten suojaa maailmanlaajuisesti.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vanhempien opas uuteen lakiin</h2>

          <p className="mb-4">
            Vanhempien on tärkeää ymmärtää uudet oikeutensa ja velvollisuutensa. Tässä käytännön opas lain
            hyödyntämiseen.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Käytännön vinkkejä vanhemmille:</h4>
            <ul className="list-disc pl-4 text-blue-800 space-y-1">
              <li>
                <strong>Rekisteröidy valvontajärjestelmiin:</strong> Käytä palvelujen vanhempainpaneeleja
              </li>
              <li>
                <strong>Tarkista säännöllisesti:</strong> Katso, mitä tietoja lapsestasi on kerätty
              </li>
              <li>
                <strong>Opeta lasta:</strong> Selitä, miksi tietosuoja on tärkeää
              </li>
              <li>
                <strong>Aseta rajoja:</strong> Käytä teknisiä rajoituksia ja aikarajoja
              </li>
              <li>
                <strong>Pysy ajan tasalla:</strong> Seuraa uusia palveluja ja niiden riskejä
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Yhteenveto</h3>
            <p className="text-gray-700">
              Suomen uusi lasten tietosuojalaki on merkittävä askel lasten suojelemiseksi verkossa. Se asettaa tiukat
              rajat tiedonkeruulle, kieltää manipuloivan mainonnan ja antaa vanhemmille vahvat työkalut lastensa
              suojelemiseksi. Laki voi toimia esimerkkinä muille maille ja parantaa lasten turvallisuutta
              maailmanlaajuisesti.
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
