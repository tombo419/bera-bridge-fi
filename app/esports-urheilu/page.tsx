import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const relatedArticles = [
  {
    id: "suomi-esports-strategia-2025",
    title: "Suomi julkaisee kansallisen e-urheilustrategian",
    category: "Politiikka",
  },
  {
    id: "verkkopelaamisen-psykologia",
    title: "Verkkopelaamisen psykologia ja sosiaalinen vuorovaikutus",
    category: "Tutkimus",
  },
  {
    id: "suomi-voittaa-cs2-maailmanmestaruuden",
    title: "Suomalaisjoukkue ENCE voittaa Counter-Strike 2 maailmanmestaruuden",
    category: "E-urheilu",
  },
]

export default function EsportsLegitimacyArticle() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
                <span className="text-sm font-medium text-blue-600">Pelaaminen ja e-urheilu</span>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">E-urheilu legitiminä urheilulajina</h1>
                <p className="text-gray-600">Julkaistu 02.06.2025</p>
              </div>

              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/metaverse-identity.svg&text=E-sports+Tournament"
                  alt="E-urheiluturnaus"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  E-urheilu on noussut marginaalisesta harrastuksesta globaaliksi ilmiöksi, joka haastaa perinteisen
                  käsityksen urheilusta. Miljoonat katsojat seuraavat e-urheiluturnauksia, ja ammattipelaajat
                  ansaitsevat miljoonia palkintopoteista.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">E-urheilun kasvu</h2>

                <p className="text-gray-700 mb-6">
                  E-urheilun kasvu on ollut räjähdysmäistä viimeisen vuosikymmenen aikana. Vuonna 2024 globaali
                  e-urheilun yleisö ylitti 500 miljoonaa katsojaa, ja markkinan arvo nousi yli 1,8 miljardiin dollariin.
                  Suurimmat turnaukset täyttävät stadioneja ja keräävät verkossa kymmeniä miljoonia katsojia.
                </p>

                <p className="text-gray-700 mb-6">
                  Perinteisten urheilujärjestöjen ja -seurojen kiinnostus e-urheilua kohtaan on kasvanut merkittävästi.
                  Monet jalkapalloseurat omistavat nykyään e-urheilujoukkueita, ja olympiakomitea on harkinnut
                  e-urheilun sisällyttämistä olympialaisiin.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Argumentit legitimiteettia vastaan</h2>

                <p className="text-gray-700 mb-6">
                  Kriitikot kyseenalaistavat e-urheilun statuksen "oikeana" urheiluna. He väittävät, että fyysisen
                  suorituskyvyn puute erottaa e-urheilun perinteisestä urheilusta. Lisäksi huolta herättää istuminen
                  pitkiä aikoja ja mahdolliset terveysvaikutukset.
                </p>

                <p className="text-gray-700 mb-6">
                  Toinen kritiikki kohdistuu e-urheilun riippuvuuteen teknologiayrityksistä. Toisin kuin perinteiset
                  urheilulajit, e-urheilu on riippuvainen pelintekijöiden päätöksistä ja teknologian kehityksestä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Argumentit legitimiteettia puolesta</h2>

                <p className="text-gray-700 mb-6">
                  E-urheilun puolustajat korostavat, että kilpailullinen pelaaminen vaatii samoja ominaisuuksia kuin
                  perinteinen urheilu: strategista ajattelua, nopeita refleksejä, tiimityötä ja pitkäjänteistä
                  harjoittelua. Huippupelaajat harjoittelevat 10-12 tuntia päivässä.
                </p>

                <p className="text-gray-700 mb-6">
                  Lisäksi e-urheilu on demokratisoinut kilpaurheilua. Se ei vaadi kalliita välineitä tai erityisiä
                  fyysisiä ominaisuuksia, mikä tekee siitä saavutettavamman kuin monet perinteiset urheilulajit.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ammattimaistuminen</h2>

                <p className="text-gray-700 mb-6">
                  E-urheilu on ammattimaistumassa nopeasti. Pelaajilla on managerit, valmentajat, analyytikot ja jopa
                  urheilupsykologit. Joukkueet harjoittelevat organisoidusti ja noudattavat tiukkoja rutiineja kuten
                  perinteiset urheilijat.
                </p>

                <p className="text-gray-700 mb-6">
                  Myös koulutusmahdollisuudet ovat kehittyneet. Yliopistot tarjoavat e-urheilustipendejä, ja lukioihin
                  on perustettu e-urheilulinjoja. Tämä institutionaalinen tuki vahvistaa e-urheilun asemaa legitiiminä
                  urheilulajina.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Terveysnäkökulma</h2>

                <p className="text-gray-700 mb-6">
                  E-urheilun terveysvaikutukset ovat monimutkaisia. Vaikka pitkäaikainen istuminen ja ruutuaika voivat
                  aiheuttaa ongelmia, ammattipelaajat kiinnittävät yhä enemmän huomiota fyysiseen kuntoiluun ja
                  ergonomiaan.
                </p>

                <p className="text-gray-700 mb-6">
                  Monet e-urheilujoukkueet työllistävät fysioterapeutteja ja ravintovalmentajia. Pelaajien hyvinvointi
                  on noussut keskiöön, kun on ymmärretty sen vaikutus suorituskykyyn.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Yhteiskunnallinen vaikutus</h2>

                <p className="text-gray-700 mb-6">
                  E-urheilu on luonut kokonaan uuden teollisuudenhaaran työpaikkoineen ja liiketoimintoineen. Se on myös
                  vaikuttanut positiivisesti nuorten itsetuntoon ja sosiaalisiin taitoihin, tarjoten vaihtoehtoisen
                  tavan menestyä ja saada tunnustusta.
                </p>

                <p className="text-gray-700 mb-6">
                  Lisäksi e-urheilu on edistänyt teknologian kehitystä ja digitaalista lukutaitoa. Se on myös globaali
                  ilmiö, joka yhdistää eri kulttuureista tulevia ihmisiä yhteisen intohimon ympärille.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden näkymät</h2>

                <p className="text-gray-700 mb-6">
                  E-urheilun tulevaisuus näyttää valoisalta. Virtuaalitodellisuus ja lisätty todellisuus voivat tuoda
                  mukaan fyysisempiä elementtejä, mikä saattaa hälventää kritiikkiä fyysisen suorituskyvyn puutteesta.
                </p>

                <p className="text-gray-700 mb-6">
                  Todennäköisesti näemme e-urheilun sisällyttämisen olympialaisiin seuraavan vuosikymmenen aikana. Tämä
                  olisi merkittävä askel e-urheilun täydellisessä legitimoitumisessa urheilulajina.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Johtopäätös</h2>

                <p className="text-gray-700 mb-6">
                  E-urheilu täyttää monet urheilun kriteerit: kilpailullisuus, taitojen kehittäminen, strategia ja
                  tiimityö. Vaikka se eroaa perinteisestä urheilusta, se ansaitsee paikkansa urheilun kentässä omana
                  ainutlaatuisena lajinaan.
                </p>

                <p className="text-gray-700 mb-6">
                  Keskustelu e-urheilun legitimiteettistä jatkuu, mutta sen vaikutus yhteiskuntaan ja kulttuuriin on
                  kiistaton. E-urheilu on tullut jäädäkseen ja muokkaa käsitystämme urheilusta 21. vuosisadalla.
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
