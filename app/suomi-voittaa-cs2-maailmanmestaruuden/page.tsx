import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { getCategoryInfo } from "@/app/utils/categories"
import { RelatedArticles } from "@/app/components/RelatedArticles"
import { MoreFromCategory } from "@/app/components/MoreFromCategory"
import { ArticleNavigation } from "@/app/components/ArticleNavigation"
import { ArticleTags } from "@/app/components/TagCloud"
import { extractTagsFromArticle } from "@/app/utils/tags"



export default function CS2ChampionshipArticle() {
  const tags = extractTagsFromArticle("suomi-voittaa-cs2-maailmanmestaruuden", "E-urheilu");

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <Breadcrumbs 
                items={[
                  { label: 'Etusivu', href: '/' },
                  { label: 'Pelaaminen', href: '/pelaaminen' },
                  { label: 'Suomalaisjoukkue ENCE voittaa Counter-Strike 2 maaillanmestaruuden' }
                ]}
              />
              <div className="mb-6">
                <Link href="/pelaaminen" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">E-urheilu</Link>
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
              
              <MoreFromCategory 
                currentArticleId="suomi-voittaa-cs2-maailmanmestaruuden"
                category="E-urheilu"
                limit={4}
              />
              
                            
              <ArticleTags tags={tags} articleId="suomi-voittaa-cs2-maailmanmestaruuden" />
              <ArticleNavigation 
                currentArticleId="suomi-voittaa-cs2-maailmanmestaruuden"
                category="E-urheilu"
              />
            
</div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <RelatedArticles 
              currentArticleId="suomi-voittaa-cs2-maailmanmestaruuden"
              category="E-urheilu"
              limit={5}
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
