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
  title: "Kvanttitietokoneet uhkaavat nykyistä tietoturvaa - Suomi varautuu muutokseen | Bera Bridge",
  description:
    "Kvanttitietokoneiden kehitys uhkaa murtaa nykyiset salausmenetelmät. Miten Suomi ja maailma varautuvat kvanttitietokoneiden tuomaan tietoturvakriisiin?",
}




const relatedArticles = [
  { id: "tekoaly-muuttaa-tyomarkkinoita", title: "Tekoäly muuttaa työmarkkinoita", category: "Teknologia" },
  { id: "metaverse-tulevaisuus", title: "Metaverse ja virtuaalitodellisuuden tulevaisuus", category: "Teknologia" },
  { id: "kryptovaluuttojen-tulevaisuus", title: "Kryptovaluuttojen tulevaisuus", category: "Teknologia" }
];

export default function QuantumComputingThreatPage() {
  const tags = extractTagsFromArticle("kvanttitietokoneet-uhka-tietoturvalle", "Uutiset");
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
            <Badge className="bg-red-100 text-red-800">Teknologia</Badge>
            <Badge variant="outline">Tietoturva</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Kvanttitietokoneet uhkaavat nykyistä tietoturvaa - Suomi varautuu muutokseen
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Kvanttitietokoneiden kehitys etenee nopeasti ja uhkaa murtaa kaikki nykyiset salausmenetelmät. Suomi ja muut
            maat kilpailevat aikaa vastaan kehittääkseen kvanttikestäviä ratkaisuja.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>8.1.2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>8 min lukuaika</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Teknologia-toimitus</span>
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
            src="/quantum-computing-threat.svg"
            alt="Kvanttitietokone laboratorio-olosuhteissa"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Kvanttitietokoneet vaativat äärimmäisen tarkkoja olosuhteita toimiakseen. Kuva: IBM Research
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Kvanttitietokoneiden kehitys</strong> on saavuttanut pisteen, jossa ne uhkaavat vakavasti nykyistä
            digitaalista tietoturvaa. Googlen Willow-siru ja IBM:n uusimmat kvanttiprosessorit osoittavat, että aika
            alkaa käydä vähiin nykyisten salausmenetelmien suojaamiseksi.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Mikä tekee kvanttitietokoneista niin vaarallisia?
          </h2>

          <p className="mb-4">
            Nykyiset salausmenetelmät, kuten RSA-salaus, perustuvat siihen, että suurten lukujen tekijöihin jakaminen on
            käytännössä mahdotonta tavallisilla tietokoneilla. Prosessi voisi kestää tuhansia vuosia nykyisillä
            superlaskimilla.
          </p>

          <p className="mb-6">
            Kvanttitietokoneet muuttavat tämän yhtälön täysin. Peter Shorin vuonna 1994 kehittämä algoritmi osoittaa,
            että riittävän tehokas kvanttitietokone voisi murtaa RSA-salauksen tunneissa tai päivissä.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <p className="text-yellow-800">
              <strong>Varoitus:</strong> Asiantuntijat arvioivat, että kvanttitietokoneet voivat murtaa nykyiset
              salausmenetelmät jo 10-15 vuoden sisällä. Valmistautuminen on aloitettava nyt.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Suomen varautuminen kvanttihyökkäyksiin</h2>

          <p className="mb-4">
            Suomen kyberturvallisuuskeskus (NCSC-FI) on ottanut kvanttitietokoneiden uhan vakavasti. Organisaatio on
            julkaissut ohjeistuksia siitä, miten yritykset ja viranomaiset voivat valmistautua tulevaan muutokseen.
          </p>

          <p className="mb-6">
            "Kvanttitietokoneiden uhka ei ole enää tieteisfantasiaa, vaan todellinen riski, johon meidän on varauduttava
            jo nyt", sanoo NCSC-FI:n johtaja Jukka Ruohonen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Suomen toimenpiteet:</h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Kansallisen kvanttitietoturvastrategian laatiminen</li>
            <li>Yhteistyö EU:n kvanttitietoturva-aloitteiden kanssa</li>
            <li>Tutkimusrahoituksen lisääminen kvanttikestäville algoritmeille</li>
            <li>Kriittisen infrastruktuurin suojaamisen priorisointi</li>
            <li>Koulutuksen lisääminen kvanttitietoturvasta</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Kvanttikestävä kryptografia - pelastus lähestyy
          </h2>

          <p className="mb-4">
            Onneksi tutkijat eivät ole jääneet toimettomiksi. Kvanttikestävä kryptografia, joka kestää sekä klassisten
            että kvanttitietokoneiden hyökkäykset, on kehittynyt nopeasti.
          </p>

          <p className="mb-6">
            NIST (National Institute of Standards and Technology) on standardoinut ensimmäiset kvanttikestävät
            salausalgoritimit vuonna 2024. Näitä algoritmeja on jo alettu ottaa käyttöön kriittisissä järjestelmissä.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Tärkeimmät kvanttikestävät menetelmät:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lattice-pohjainen kryptografia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Perustuu matemaattisiin ongelmiin, jotka ovat vaikeita sekä klassisille että kvanttitietokoneille.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hash-pohjainen allekirjoitus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Käyttää hash-funktioita, jotka ovat turvallisia kvanttihyökkäyksiä vastaan.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mitä yritysten tulisi tehdä nyt?</h2>

          <p className="mb-4">
            Yritysten ei kannata odottaa kvanttitietokoneiden yleistymistä. Siirtyminen kvanttikestävään kryptografiaan
            on monivuotinen prosessi, joka kannattaa aloittaa jo nyt.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Suositukset yrityksille:</h4>
            <ol className="list-decimal pl-4 text-blue-800 space-y-1">
              <li>Kartoita nykyiset salausmenetelmät ja niiden haavoittuvuudet</li>
              <li>Laadi siirtymäsuunnitelma kvanttikestäviin ratkaisuihin</li>
              <li>Kouluta henkilöstöä kvanttitietoturvasta</li>
              <li>Seuraa standardien kehitystä ja ota käyttöön uusia ratkaisuja</li>
              <li>Tee yhteistyötä tietoturva-asiantuntijoiden kanssa</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kvanttitietokoneet eivät ole vain uhka</h2>

          <p className="mb-4">
            Vaikka kvanttitietokoneet uhkaavat nykyistä tietoturvaa, ne tarjoavat myös valtavia mahdollisuuksia.
            Lääkekehitys, materiaalitutkimus ja tekoäly voivat hyötyä merkittävästi kvanttilaskennan tehosta.
          </p>

          <p className="mb-6">
            Suomi on investoinut kvanttiteknologian tutkimukseen ja kehitykseen. VTT:n ja Aalto-yliopiston yhteistyö on
            tuottanut merkittäviä tuloksia kvanttitietokoneiden kehittämisessä.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden näkymät</h2>

          <p className="mb-4">
            Seuraavat 5-10 vuotta ovat kriittisiä kvanttitietoturvan kannalta. Maat ja yritykset, jotka onnistuvat
            siirtymässä ajoissa kvanttikestäviin ratkaisuihin, säilyttävät kilpailukykynsä digitaalisessa maailmassa.
          </p>

          <p className="mb-6">
            Suomella on hyvät mahdollisuudet olla edelläkävijä tässä muutoksessa. Vahva teknologiaosaaminen, luotettava
            hallinto ja innovatiivinen yrityskenttä luovat hyvän pohjan kvanttitietoturvan kehittämiselle.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Yhteenveto</h3>
            <p className="text-gray-700">
              Kvanttitietokoneiden uhka nykyiselle tietoturvalle on todellinen ja lähestyvä. Suomi on ottanut uhan
              vakavasti ja varautuu muutokseen aktiivisesti. Yritysten ja organisaatioiden on aika aloittaa
              valmistautuminen kvanttikestävään tulevaisuuteen.
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
