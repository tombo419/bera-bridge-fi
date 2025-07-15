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
    id: "esports-urheilu",
    title: "E-urheilu legitiminä urheilulajina",
    category: "Pelaaminen",
  },
  {
    id: "verkkopelaamisen-psykologia",
    title: "Verkkopelaamisen psykologia ja sosiaalinen vuorovaikutus",
    category: "Tutkimus",
  },
]

export default function CS2ChampionshipArticle() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
                <span className="text-sm font-medium text-blue-600">E-urheilu</span>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Suomalaisjoukkue ENCE voittaa Counter-Strike 2 maailmanmestaruuden - historiallinen hetki
                </h1>
                <p className="text-gray-600">Julkaistu 06.06.2025</p>
              </div>

              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/metaverse-identity.svg&text=ENCE+CS2+Championship"
                  alt="ENCE voittaa CS2 maailmanmestaruuden"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  Suomalaisjoukkue ENCE teki historiaa voittamalla Counter-Strike 2:n ensimmäisen virallisen
                  maailmanmestaruuden Kölnissä järjestetyssä IEM Cologne 2025 -turnauksessa. Voitto tuo Suomelle 500 000
                  dollarin palkintopotin ja nostaa maan e-urheilun maailmankartalle.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dramaattinen finaali</h2>

                <p className="text-gray-700 mb-6">
                  Finaali brasilialaista FURIA-joukkuetta vastaan oli yksi e-urheilun historian jännittävimmistä. ENCE
                  hävisi ensimmäisen kartan 16-13, mutta taisteli takaisin voittamalla seuraavat kaksi karttaa 16-14 ja
                  16-12. Ratkaiseva kolmas kartta päättyi ENCE:n voittoon lukemin 16-14 jatkoajan jälkeen.
                </p>

                <p className="text-gray-700 mb-6">
                  "Tämä on unelmien täyttymys", sanoi ENCE:n kapteeni Aleksi "allu" Jalli kyynelsilmin voiton jälkeen.
                  "Olemme harjoitelleet tätä hetkeä varten viisi vuotta. Suomalaiset ansaitsevat tämän."
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Matka mestaruuteen</h2>

                <p className="text-gray-700 mb-6">
                  ENCE:n tie mestaruuteen alkoi jo vuoden 2024 lopulla, kun joukkue uudisti kokoonpanoaan ja palkkasi
                  uuden valmentajan. Turnauksen aikana suomalaiset kaatoi muun muassa maailman ykkösjoukkue G2:n
                  välierässä ja osoitti tasaisen pelinsä kaikilla kartoilla.
                </p>

                <p className="text-gray-700 mb-6">
                  Erityisesti nuori lupaus Jere "sergej" Salo loisti turnauksessa keskiarvolla 1.31 ja ansaitsi
                  turnauksen MVP-palkinnon. 19-vuotias pelaaja on noussut nopeasti maailman parhaiden joukkoon vasta
                  vuoden pelaamisen jälkeen ENCE:ssä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vaikutus suomalaiseen e-urheiluun</h2>

                <p className="text-gray-700 mb-6">
                  Voitto tulee täydelliseen aikaan Suomen e-urheilustrategian lanseerauksen jälkeen. Opetus- ja
                  kulttuuriministeri Maria Ohisalo onnittelikin joukkuetta välittömästi voiton jälkeen ja lupasi lisätä
                  e-urheilun tukea entisestään.
                </p>

                <p className="text-gray-700 mb-6">
                  "Tämä voitto osoittaa, että Suomella on kaikki edellytykset olla e-urheilun suurvalta", kommentoi
                  Suomen E-urheiluliiton puheenjohtaja Mikael Haveri. "Uskon, että näemme nyt räjähdysmäisen kasvun
                  nuorten kiinnostuksessa e-urheilua kohtaan."
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Taloudelliset vaikutukset</h2>

                <p className="text-gray-700 mb-6">
                  ENCE:n voitto tuo merkittäviä taloudellisia vaikutuksia. Joukkueen pääsponsori Elisa raportoi
                  brändinäkyvyyden kasvaneen 400% turnauksen aikana, ja uusia sponsorointisopimuksia on jo neuvoteltu.
                </p>

                <p className="text-gray-700 mb-6">
                  Suomalaiset pelifirmat ovat myös hyötyneet voitosta. Supercell ja Rovio ilmoittivat investoivansa
                  yhteensä 10 miljoonaa euroa suomalaisen e-urheilun kehittämiseen seuraavan kolmen vuoden aikana.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kansainvälinen huomio</h2>

                <p className="text-gray-700 mb-6">
                  Voitto on saanut laajaa kansainvälistä huomiota. ESPN Sport ja BBC ovat tehneet laajoja juttuja
                  suomalaisesta e-urheilusta, ja ENCE:n pelaajia on kutsuttu lukuisiin kansainvälisiin talk show
                  -ohjelmiin.
                </p>

                <p className="text-gray-700 mb-6">
                  Turnauksen finaalia seurasi yli 2.1 miljoonaa katsojaa samanaikaisesti Twitchissä ja YouTubessa, mikä
                  tekee siitä yhden katsotuimmista e-urheilutapahtumista koskaan. Suomessa ottelua seurasi MTV3:lla yli
                  800 000 katsojaa.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden suunnitelmat</h2>

                <p className="text-gray-700 mb-6">
                  ENCE:n menestys avaa ovia tulevaisuudelle. Joukkue on jo saanut kutsun kaikkiin vuoden 2025
                  suurturnauksiin, ja tavoitteena on puolustaa mestaruutta seuraavassa IEM Cologne -turnauksessa.
                </p>

                <p className="text-gray-700 mb-6">
                  "Tämä on vasta alkua", lupaa ENCE:n toimitusjohtaja Mika Kuusisto. "Haluamme rakentaa Suomesta
                  e-urheilun keskuksen ja inspiroida uutta sukupolvea pelaajia. Mestaruus on todiste siitä, että
                  suomalaisella sinnikkuudella ja kovalla työllä voi saavuttaa mitä tahansa."
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
