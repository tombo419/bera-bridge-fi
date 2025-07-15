import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const relatedArticles = [
  {
    id: "metaversumi-ja-identiteetti",
    title: "Metaversumi ja digitaalinen identiteetti",
    category: "Teknologia",
  },
  {
    id: "apple-vision-pro-2-julkaisu",
    title: "Apple Vision Pro 2 julkaistaan kesällä 2025",
    category: "Teknologia",
  },
  {
    id: "kryptovaluutta-pelaaminen",
    title: "Kryptovaluuttojen integrointi pelimaailmaan herättää huolta",
    category: "Talous",
  },
]

export default function MetaVirtualWorldInvestmentArticle() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
                <span className="text-sm font-medium text-blue-600">Liiketoiminta ja investoinnit</span>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Meta investoi 50 miljardia dollaria virtuaalimaailmojen kehitykseen
                </h1>
                <p className="text-gray-600">Julkaistu 30.06.2025</p>
              </div>

              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/meta-investment.svg"
                  alt="Meta virtuaalimaailma investointi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  Meta Platforms ilmoitti massiivisesta 50 miljardin dollarin investoinnista virtuaalimaailmojen ja
                  metaversumi-teknologioiden kehittämiseen seuraavan viiden vuoden aikana. Investointi on yksi
                  suurimmista yksittäisistä teknologia-alan panostuksista koskaan.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Investoinnin yksityiskohdat</h2>

                <p className="text-gray-700 mb-6">
                  Meta CEO Mark Zuckerbergin mukaan investointi jakautuu usealle osa-alueelle: 20 miljardia menee
                  VR/AR-laitteiston kehitykseen, 15 miljardia ohjelmistoalustojen rakentamiseen, 10 miljardia
                  sisällöntuotantoon ja loput 5 miljardia infrastruktuurin ja tutkimuksen tukemiseen.
                </p>

                <p className="text-gray-700 mb-6">
                  "Tämä on suurin yksittäinen investointi teknologian tulevaisuuteen, jonka Meta on koskaan tehnyt",
                  kommentoi Zuckerberg yhtiön sijoittajapuhelussa. "Uskomme, että metaversumi tulee määrittämään
                  seuraavan vuosikymmenen digitaalisen vuorovaikutuksen."
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Teknologiset tavoitteet</h2>

                <p className="text-gray-700 mb-6">
                  Investoinnin myötä Meta pyrkii kehittämään seuraavan sukupolven VR-lasit, jotka ovat kevyemmät,
                  tehokkaammat ja edullisemmat kuin nykyiset mallit. Tavoitteena on saada VR-lasien paino alle 100
                  grammaa ja hinta alle 300 dollaria.
                </p>

                <p className="text-gray-700 mb-6">
                  Lisäksi yhtiö kehittää haptiikkateknologiaa, joka mahdollistaa fyysisten tuntojen välittämisen
                  virtuaalimaailmassa. Tämä teknologia voisi mullistaa tapaa, jolla ihmiset kokevat digitaalisia
                  ympäristöjä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kilpailijoiden reaktiot</h2>

                <p className="text-gray-700 mb-6">
                  Metan massiivinen investointi on herättäneet reaktioita kilpailijoissa. Apple on ilmoittanut
                  kiihdyttävänsä oman Vision Pro -tuotteensa kehitystä, ja Google on paljastanut uuden
                  AR-lasiprojektinsa.
                </p>

                <p className="text-gray-700 mb-6">
                  Microsoft on puolestaan keskittynyt yritysmarkkinoihin HoloLens-tuotteellaan, mutta yhtiö harkitsee
                  nyt myös kuluttajamarkkinoille suunnattua tuotetta vastauksena Metan haasteeseen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Työpaikkojen luominen</h2>

                <p className="text-gray-700 mb-6">
                  Investointi luo merkittävästi uusia työpaikkoja. Meta aikoo palkata 40,000 uutta työntekijää
                  metaversumi-projekteihinsa, pääasiassa insinöörejä, suunnittelijoita ja sisällöntuottajia.
                </p>

                <p className="text-gray-700 mb-6">
                  Suurin osa uusista työpaikoista sijoittuu Yhdysvaltoihin, mutta Meta avaa myös uusia kehityskeskuksia
                  Eurooppaan ja Aasiaan. Suomeen on suunnitteilla pieni tutkimuskeskus Helsinkiin.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sijoittajien epäilykset</h2>

                <p className="text-gray-700 mb-6">
                  Kaikki sijoittajat eivät ole vakuuttuneita Metan strategiasta. Yhtiön osakkeet laskivat 8%
                  investoinnin julkistamisen jälkeen, kun sijoittajat ilmaisivat huolensa massiivisista kuluista ilman
                  takeita tuotoista.
                </p>

                <p className="text-gray-700 mb-6">
                  "50 miljardia dollaria on valtava summa investoitavaksi teknologiaan, joka ei ole vielä todistannut
                  kaupallista elinkelpoisuuttaan", kommentoi Wall Streetin analyytikko Sarah Johnson. "Meta ottaa
                  valtavan riskin."
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kuluttajien vastaanotto</h2>

                <p className="text-gray-700 mb-6">
                  Kuluttajatutkimukset osoittavat ristiriitaisia näkemyksiä metaversumista. Nuoret ovat innostuneempia
                  virtuaalimaailmoista, kun taas vanhemmat ikäryhmät suhtautuvat skeptisemmin.
                </p>

                <p className="text-gray-700 mb-6">
                  Suurimmat huolet liittyvät yksityisyyteen, turvallisuuteen ja virtuaalimaailmojen mahdollisiin
                  negatiivisiin vaikutuksiin sosiaalisiin taitoihin ja mielenterveyteen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sääntelyhaasteet</h2>

                <p className="text-gray-700 mb-6">
                  Metan investointi herättää myös sääntelykysymyksiä. EU:n komissio on ilmoittanut seuraavansa tarkasti
                  metaversumi-kehitystä ja harkitsevansa uutta lainsäädäntöä virtuaalimaailmojen sääntelemiseksi.
                </p>

                <p className="text-gray-700 mb-6">
                  Erityisesti huolta herättävät lasten turvallisuus virtuaalimaailmoissa, tietosuoja ja Metan
                  mahdollinen monopoliasema metaversumi-markkinoilla.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ympäristövaikutukset</h2>

                <p className="text-gray-700 mb-6">
                  Massiivinen investointi herättää kysymyksiä myös ympäristövaikutuksista. Virtuaalimaailmojen
                  pyörittäminen vaatii valtavia määriä laskentatehoa ja energiaa, mikä voi lisätä hiilijalanjälkeä
                  merkittävästi.
                </p>

                <p className="text-gray-700 mb-6">
                  Meta on sitoutunut käyttämään 100% uusiutuvaa energiaa uusissa datakeskuksissaan, mutta kriitikot
                  kyseenalaistavat, riittääkö tämä kompensoimaan lisääntyneen energiankulutuksen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Aikataulu ja virstanpylväät</h2>

                <p className="text-gray-700 mb-6">
                  Meta on asettanut kunnianhimoisen aikataulun investointilleen. Ensimmäiset uuden sukupolven VR-lasit
                  julkaistaan vuoden 2026 lopussa, ja täysi metaversumi-alusta on tarkoitus lanseerata vuonna 2028.
                </p>

                <p className="text-gray-700 mb-6">
                  Yhtiö aikoo julkaista säännöllisiä päivityksiä projektin edistymisestä ja järjestää vuosittaisen
                  "Metaverse Summit" -tapahtuman kehittäjille ja kumppaneille.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pitkän aikavälin vaikutukset</h2>

                <p className="text-gray-700 mb-6">
                  Jos Meta onnistuu tavoitteissaan, se voisi muuttaa perustavanlaatuisesti tapaa, jolla ihmiset
                  työskentelevät, viihtyivät ja ovat vuorovaikutuksessa toistensa kanssa. Virtuaalimaailmat voisivat
                  korvata monia fyysisiä aktiviteetteja.
                </p>

                <p className="text-gray-700 mb-6">
                  Toisaalta epäonnistuminen voisi olla katastrofaalista Metalle ja koko VR/AR-teollisuudelle, hidastaen
                  teknologian kehitystä vuosiksi. Panokset ovat korkeat, ja seuraavat vuodet ratkaisevat Metan ja
                  metaversumin tulevaisuuden.
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
