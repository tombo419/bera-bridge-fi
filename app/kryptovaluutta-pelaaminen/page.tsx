import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const relatedArticles = [
  {
    id: "tekoaly-etiikka-peliteollisuus",
    title: "Tekoälyn etiikka peliteollisuudessa - missä menee raja?",
    category: "Etiikka",
  },
  {
    id: "verkkopelaamisen-psykologia",
    title: "Verkkopelaamisen psykologia ja sosiaalinen vuorovaikutus",
    category: "Tutkimus",
  },
  {
    id: "meta-virtuaalimaailma-investointi",
    title: "Meta investoi 2 miljardia euroa virtuaalimaailmojen kehitykseen",
    category: "Teknologia",
  },
]

export default function CryptoGamingArticle() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
                <span className="text-sm font-medium text-blue-600">Talous</span>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Kryptovaluuttojen integrointi pelimaailmaan herättää huolta
                </h1>
                <p className="text-gray-600">Julkaistu 27.05.2025</p>
              </div>

              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image src="/crypto-gaming.svg" alt="Kryptovaluutat ja pelaaminen" fill className="object-cover" />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  Kryptovaluuttojen ja NFT-teknologian integrointi pelimaailmaan on herättänyt laajaa keskustelua ja
                  huolta sekä pelaajien että asiantuntijoiden keskuudessa. Kuluttajansuojaviranomaiset varoittavat
                  uusista riskeistä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Play-to-earn -pelien nousu</h2>

                <p className="text-gray-700 mb-6">
                  Play-to-earn (P2E) -pelit, joissa pelaajat voivat ansaita kryptovaluuttoja tai NFT-esineitä
                  pelaamalla, ovat kasvaneet räjähdysmäisesti viime vuosina. Suosituimmat pelit kuten Axie Infinity ja
                  The Sandbox ovat keränneet miljoonia käyttäjiä ympäri maailmaa.
                </p>

                <p className="text-gray-700 mb-6">
                  Pelit lupaavat pelaajille mahdollisuuden ansaita oikeaa rahaa pelaamalla, mikä on houkutellut
                  erityisesti kehitysmaiden pelaajia. Filippiineillä ja Venezuelassa tuhannet ihmiset ovat tehneet
                  P2E-pelaamisesta päätoimisen tulonlähteensä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Taloudelliset riskit ja epävakaus</h2>

                <p className="text-gray-700 mb-6">
                  Kryptovaluuttojen tunnettu volatiliteetti tekee P2E-pelaamisesta erittäin riskialtista. Axie Infinityn
                  pelivaluutta AXS menetti yli 95% arvostaan vuoden 2021 huipusta, jättäen tuhannet pelaajat
                  taloudellisiin vaikeuksiin.
                </p>

                <p className="text-gray-700 mb-6">
                  {
                    "Kuluttajavirasto varoittaa, että P2E-pelit muistuttavat enemmän sijoittamista kuin perinteistä pelaamista"
                  }
                  , sanoo kuluttaja-asianajaja Marja Kivistö.{" "}
                  {"Pelaajat voivat menettää merkittäviä summia rahaa, jos pelin talous romahtaa."}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">NFT-esineet ja omistajuuden illuusio</h2>

                <p className="text-gray-700 mb-6">
                  NFT-esineet peleissä markkinoidaan usein {"todellisena omistajuutena"}, mutta todellisuudessa
                  pelaajien oikeudet ovat rajalliset. Jos peliyhtiö päättää sulkea palvelimensa tai muuttaa
                  pelimekaniikkoja, NFT-esineet voivat menettää arvonsa kokonaan.
                </p>

                <p className="text-gray-700 mb-6">
                  Lisäksi NFT-markkinapaikat ovat täynnä huijauksia ja väärennettyä sisältöä. Pelaajat ovat menettäneet
                  rahaa ostaessaan NFT-esineitä, jotka osoittautuivat kopioiksi tai joiden alkuperäinen luoja ei ollut
                  oikeutettu myymään niitä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ympäristövaikutukset</h2>

                <p className="text-gray-700 mb-6">
                  Kryptovaluuttojen ja NFT:iden ympäristövaikutukset ovat merkittäviä. Vaikka uudemmat
                  blockchain-teknologiat kuluttavat vähemmän energiaa, monet suositut P2E-pelit toimivat edelleen
                  energiaintensiivisissä verkoissa.
                </p>

                <p className="text-gray-700 mb-6">
                  Ympäristöjärjestöt ovat kritisoineet peliteollisuutta siitä, että se edistää kryptovaluuttojen käyttöä
                  huolimatta ilmastonmuutoksen torjunnan kiireellisyydestä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Säätelyn tarve</h2>

                <p className="text-gray-700 mb-6">
                  Asiantuntijat vaativat tiukempaa sääntelyä kryptopeleille. EU:n rahoituspalvelukomissaari on
                  ilmoittanut selvittävänsä, tulisiko P2E-pelejä säännellä rahoituspalveluina sijoitustuotteiden sijaan.
                </p>

                <p className="text-gray-700 mb-6">
                  {"Tarvitsemme selkeät säännöt, jotka suojaavat kuluttajia mutta eivät tukahduta innovaatiota"}, toteaa
                  Helsingin yliopiston taloustieteen professori Antti Virtanen.
                  {"Erityisesti alaikäisten suojelu on tärkeää, sillä monet kryptopelit houkuttelevat nuoria pelaajia."}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden näkymät</h2>

                <p className="text-gray-700 mb-6">
                  Huolimatta riskeistä ja kritiikistä, blockchain-teknologia voi tuoda pelimaailmaan myös positiivisia
                  innovaatioita. Todellinen pelaajien välinen kaupankäynti ja pelien välinen yhteentoimivuus voivat
                  parantaa pelikokemusta.
                </p>

                <p className="text-gray-700 mb-6">
                  Avain on löytää tasapaino innovaation ja kuluttajansuojan välillä. Vastuullinen kehitys ja läpinäkyvä
                  viestintä riskeistä ovat välttämättömiä kryptopelien tulevaisuudelle.
                </p>
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
