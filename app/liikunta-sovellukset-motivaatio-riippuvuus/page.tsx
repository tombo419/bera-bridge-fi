import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"

export const metadata = {
  title: "Liikuntasovellukset: motivaatiota vai riippuvuutta? | Bera Bridge",
  description:
    "Liikuntasovellukset lupaavat motivaatiota ja tuloksia, mutta voivatko ne muuttua riippuvuudeksi? Tutkimus paljastaa sovellusten psykologiset vaikutukset.",
}

const relatedArticles = [
  {
    title: "Digitaalinen detox - tarvitaanko taukoa teknologiasta?",
    href: "/digitaalinen-detox-hyvinvointi",
    category: "Hyvinvointi",
  },
  {
    title: "Digitaalinen hyvinvointi - THL:n tutkimus paljastaa huolestuttavia lukuja",
    href: "/digitaalinen-hyvinvointi-tutkimus",
    category: "Tutkimus",
  },
  {
    title: "Sosiaalisen median riippuvuus - milloin some muuttuu ongelmaksi?",
    href: "/sosiaalisen-median-riippuvuus",
    category: "Terveys",
  },
]

export default function FitnessAppsPage() {
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
            <Badge className="bg-orange-100 text-orange-800">Psykologia</Badge>
            <Badge variant="outline">Liikunta</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Liikuntasovellukset: motivaatiota vai riippuvuutta?
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Liikuntasovellukset lupaavat motivaatiota, tuloksia ja terveellisempiä elämäntapoja. Mutta voivatko ne
            muuttua riippuvuudeksi? Tutkimus paljastaa sovellusten psykologiset vaikutukset ja varoittaa liiallisesta
            riippuvuudesta.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>31.12.2024</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>8 min lukuaika</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Liikunta-toimitus</span>
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
            src="/metaverse-identity.svg&text=Henkilö+tarkistaa+liikuntasovellusta+kuntosalilla"
            alt="Henkilö tarkistaa liikuntasovellusta älypuhelimesta kuntosalilla"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Liikuntasovellukset ovat muuttaneet tapaamme harrastaa liikuntaa. Kuva: Unsplash
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Marja, 34,</strong> tarkistaa MyFitnessPal-sovellustaan keskimäärin 23 kertaa päivässä. Hän laskee
            jokaisen kalorin, mittaa jokaisen askelen ja ahdistuu, jos päivän liikuntatavoite jää saavuttamatta. "En voi
            syödä mitään kirjaamatta sitä ensin", hän kertoo. Onko kyse terveellisestä elämäntavasta vai riippuvuudesta?
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Liikuntasovellusten suosio räjähtänyt</h2>

          <p className="mb-4">
            Liikuntasovellukset ovat yksi nopeimmin kasvavista sovelluskategorioista. Pelkästään Suomessa
            liikuntasovelluksia käyttää yli 2,1 miljoonaa ihmistä, ja määrä kasvaa vuosittain 15-20 prosenttia.
          </p>

          <p className="mb-6">
            Suosituimmat sovellukset kuten MyFitnessPal, Strava, Nike Training Club ja Adidas Running lupaavat helpottaa
            liikuntaharrastusta, parantaa tuloksia ja motivoida terveellisempiin valintoihin. Mutta toimivatko ne
            todella?
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Liikuntasovellusten käyttötilastoja Suomessa:</h4>
            <ul className="list-disc pl-4 text-blue-800 space-y-1">
              <li>
                <strong>2,1 miljoonaa</strong> käyttäjää (38% väestöstä)
              </li>
              <li>
                <strong>47 minuuttia</strong> päivittäinen käyttöaika keskimäärin
              </li>
              <li>
                <strong>67%</strong> käyttää useampaa kuin yhtä sovellusta
              </li>
              <li>
                <strong>89%</strong> tarkistaa sovelluksen päivittäin
              </li>
              <li>
                <strong>156€</strong> keskimääräiset vuosikustannukset
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Positiiviset vaikutukset</h2>

          <p className="mb-4">
            Liikuntasovelluksilla on kiistatta monia positiivisia vaikutuksia. Ne voivat motivoida liikuntaan, helpottaa
            tavoitteiden asettamista ja seurantaa sekä tarjota yhteisöllisyyttä.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Motivaatio ja tavoitteet</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Selkeät, mitattavat tavoitteet</li>
                  <li>• Edistymisen visualisointi</li>
                  <li>• Muistutukset ja kannustus</li>
                  <li>• Saavutusten palkitseminen</li>
                  <li>• Pitkäaikainen seuranta</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Yhteisöllisyys</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vertailu muihin käyttäjiin</li>
                  <li>• Ryhmähaasteet ja kilpailut</li>
                  <li>• Sosiaalinen tuki ja kannustus</li>
                  <li>• Kokemusten jakaminen</li>
                  <li>• Uusien harrastuskavereiden löytäminen</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Tiedon keruu</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tarkat mittaukset ja analytiikka</li>
                  <li>• Kehityksen seuranta ajan myötä</li>
                  <li>• Personoidut suositukset</li>
                  <li>• Terveysdatan kokoaminen</li>
                  <li>• Lääkärille jaettava tieto</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Helppokäyttöisyys</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Aina mukana älypuhelimessa</li>
                  <li>• Automaattinen seuranta</li>
                  <li>• Valmiit harjoitusohjelmat</li>
                  <li>• Videot ja ohjeet</li>
                  <li>• Kustomoitavat asetukset</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kun motivaatio muuttuu pakkomielteeksi</h2>

          <p className="mb-4">
            Liikuntasovellusten pimeä puoli paljastuu, kun terveellinen kiinnostus muuttuu pakkomielteeksi. Psykologit
            ovat havainneet kasvavan määrän tapauksia, joissa sovellukset aiheuttavat ahdistusta, syömishäiriöitä ja
            epäterveellistä suhtautumista liikuntaan.
          </p>

          <p className="mb-6">
            "Liikuntasovellukset voivat laukaista perfektionistisia taipumuksia ja johtaa pakko-oireiseen
            käyttäytymiseen", varoittaa urheilupsykologi Antti Virtanen. "Erityisesti nuoret ja aiemmin syömishäiriöistä
            kärsineet ovat riskiryhmässä."
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <h4 className="font-semibold text-red-900 mb-2">Varoitusmerkkejä riippuvuudesta:</h4>
            <ul className="list-disc pl-4 text-red-800 space-y-1">
              <li>Sovelluksen tarkistaminen kymmeniä kertoja päivässä</li>
              <li>Ahdistus, jos päivän tavoitteet jäävät saavuttamatta</li>
              <li>Ruoan syöminen vain sovelluksen "luvalla"</li>
              <li>Liikunnan harrastaminen vain numeroiden vuoksi</li>
              <li>Sosiaalisten tilanteiden välttäminen sovelluksen vuoksi</li>
              <li>Unen häiriintyminen tavoitteiden miettimisestä</li>
              <li>Itsearvostuksen riippuvuus sovelluksen palautteesta</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Gamification - kaksiteräinen miekka</h2>

          <p className="mb-4">
            Liikuntasovellukset käyttävät voimakkaasti gamification-elementtejä: pisteitä, tasoja, merkkejä ja
            kilpailuja. Nämä elementit voivat olla motivoivia, mutta ne voivat myös luoda riippuvuutta.
          </p>

          <p className="mb-6">
            Gamification hyödyntää samoja psykologisia mekanismeja kuin uhkapelit: satunnaisia palkintoja, sosiaalista
            vertailua ja jatkuvia haasteita. Tämä voi johtaa kompulsiiviseen käyttäytymiseen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Gamification-elementit ja niiden vaikutukset:
          </h3>

          <div className="space-y-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pisteet ja tasot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Positiivista:</strong> Selkeä edistymisen mittari, motivoi jatkamaan
                </p>
                <p className="text-sm text-red-600">
                  <strong>Negatiivista:</strong> Voi johtaa numeroiden metsästämiseen todellisen hyvinvoinnin sijaan
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Merkit ja saavutukset</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Positiivista:</strong> Tunnustus edistymisestä, ylpeyden tunne
                </p>
                <p className="text-sm text-red-600">
                  <strong>Negatiivista:</strong> Pakkomielle kaikkien merkkien keräämiseen
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sosiaalinen vertailu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Positiivista:</strong> Motivoi parempiin suorituksiin, yhteisöllisyys
                </p>
                <p className="text-sm text-red-600">
                  <strong>Negatiivista:</strong> Epäterveellinen kilpailu, itsetunnon lasku
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Päivittäiset haasteet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Positiivista:</strong> Pitää aktiivisena, tarjoaa vaihtelua
                </p>
                <p className="text-sm text-red-600">
                  <strong>Negatiivista:</strong> Luo painetta suorittaa päivittäin, ahdistus epäonnistumisesta
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Syömishäiriöt ja liikuntasovellukset</h2>

          <p className="mb-4">
            Erityisen huolestuttava trendi on liikuntasovellusten yhteys syömishäiriöihin. Kalorilaskenta-sovellukset
            voivat laukaista tai pahentaa anoreksiaa, bulimiaa ja muita syömishäiriöitä.
          </p>

          <p className="mb-6">
            Tutkimukset osoittavat, että 73% syömishäiriöistä kärsivistä käyttää kalorilaskenta-sovelluksia, ja 64%
            kokee niiden pahentavan oireitaan. Sovellukset voivat tehdä pakko-oireisesta ruoan kontrolloimisesta
            helpompaa ja "normaalimpaa".
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <h4 className="font-semibold text-yellow-900 mb-2">Riskiryhmät:</h4>
            <ul className="list-disc pl-4 text-yellow-800 space-y-1">
              <li>
                <strong>Nuoret naiset 16-25 vuotta:</strong> Suurin riski syömishäiriöille
              </li>
              <li>
                <strong>Perfektionistit:</strong> Taipumus liialliseen kontrolliin
              </li>
              <li>
                <strong>Aiemmin syömishäiriöistä kärsineet:</strong> Riski uusiutumiseen
              </li>
              <li>
                <strong>Kilpaurheilijat:</strong> Paine optimaaliseen suoritukseen
              </li>
              <li>
                <strong>Matala itsetunto:</strong> Hakee hyväksyntää numeroista
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Terveen käytön periaatteet</h2>

          <p className="mb-4">
            Liikuntasovellukset voivat olla hyödyllisiä työkaluja, kun niitä käytetään oikein. Avain on tasapainon
            löytäminen ja terveiden rajojen asettaminen.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
            <h4 className="font-semibold text-green-900 mb-2">Terveen käytön ohjeet:</h4>
            <ul className="list-disc pl-4 text-green-800 space-y-1">
              <li>
                <strong>Aseta realistiset tavoitteet:</strong> Älä tavoittele täydellisyyttä
              </li>
              <li>
                <strong>Kuuntele kehoasi:</strong> Lepopäivät ovat tärkeitä
              </li>
              <li>
                <strong>Älä anna numeroiden hallita:</strong> Hyvinvointi on tärkeämpää kuin tilastot
              </li>
              <li>
                <strong>Ota taukoja:</strong> Säännölliset sovellus-vapaat päivät
              </li>
              <li>
                <strong>Keskity prosessiin:</strong> Nauti liikunnasta, älä vain tuloksista
              </li>
              <li>
                <strong>Hae apua tarvittaessa:</strong> Tunnista varoitusmerkit ajoissa
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sovellusten kehittäjien vastuu</h2>

          <p className="mb-4">
            Liikuntasovellusten kehittäjillä on eettinen vastuu käyttäjiensä hyvinvoinnista. Monet yritykset ovat
            alkaneet ottaa tämän vastuun vakavasti ja kehittää turvallisempia käyttökokemuksia.
          </p>

          <p className="mb-6">
            Esimerkiksi MyFitnessPal on lisännyt varoituksia liian alhaisista kaloritavoitteista, ja Strava on
            vähentänyt sosiaalisen vertailun painotusta. Kehitys on kuitenkin hidasta, ja käyttäjien on oltava tietoisia
            riskeistä.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Mitä kehittäjien tulisi tehdä:</h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Varoitukset epäterveellisistä tavoitteista:</strong> Estää liian alhaiset kalorimäärät
            </li>
            <li>
              <strong>Lepopäivien korostaminen:</strong> Muistuttaa palautumisen tärkeydestä
            </li>
            <li>
              <strong>Mielenterveysresurssit:</strong> Linkit apuun syömishäiriöiden varalta
            </li>
            <li>
              <strong>Vähemmän aggressiivinen gamification:</strong> Ei pakota päivittäiseen käyttöön
            </li>
            <li>
              <strong>Kokonaisvaltainen hyvinvointi:</strong> Ei vain numeroiden optimointia
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vaihtoehtoja liikuntasovelluksille</h2>

          <p className="mb-4">
            Jos liikuntasovellukset tuntuvat liian hallitsevilta, on olemassa vaihtoehtoja. Perinteinen
            liikuntapäiväkirja, personal trainer tai ryhmäliikunta voivat tarjota motivaatiota ilman digitaalista
            riippuvuutta.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Analogiset vaihtoehdot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">
                  • <strong>Paperinen treenikirja:</strong> Ei häiriötekijöitä
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Personal trainer:</strong> Henkilökohtainen ohjaus
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Ryhmäliikunta:</strong> Sosiaalinen tuki
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Liikuntakaverit:</strong> Luonnollinen motivaatio
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Minimalistiset sovellukset</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">
                  • <strong>Yksinkertaiset askelmittarit:</strong> Vain perusdata
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Meditaatiosovellukset:</strong> Kokonaisvaltainen hyvinvointi
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Luonto-sovellukset:</strong> Ulkoilun kannustaminen
                </p>
                <p className="text-sm text-gray-600">
                  • <strong>Offline-harjoitukset:</strong> Ei jatkuvaa seurantaa
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden näkymät</h2>

          <p className="mb-4">
            Liikuntasovellusten kehitys jatkuu nopeana. Tekoäly, virtuaalitodellisuus ja kehittyneet sensorit tuovat
            uusia mahdollisuuksia, mutta myös uusia riskejä.
          </p>

          <p className="mb-6">
            Tulevaisuudessa on tärkeää, että teknologia palvelee ihmisen hyvinvointia, ei päinvastoin. Tämä vaatii sekä
            kehittäjiltä että käyttäjiltä vastuullisempaa lähestymistapaa.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Yhteenveto</h3>
            <p className="text-gray-700">
              Liikuntasovellukset voivat olla hyödyllisiä motivaation ja tavoitteiden saavuttamisen työkaluja, mutta ne
              voivat myös muuttua riippuvuudeksi. Avain on tasapainon löytäminen: käytä sovelluksia työkaluina, älä anna
              niiden hallita elämääsi. Kuuntele kehoasi ja hakea apua, jos sovelluksen käyttö aiheuttaa ahdistusta tai
              pakko-oireita.
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
