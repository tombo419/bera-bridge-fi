import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { getCategoryInfo } from "@/utils/categories"
import { extractTagsFromArticle } from "@/utils/tags"
import { ArticleTags } from "@/components/TagCloud"
import { ContextualLinks } from "@/components/ContextualLinks"



export default function TikTokResearchArticle() {
  const tags = extractTagsFromArticle("tiktok-algoritmi-tutkimus", "Tutkimus");
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
              <Breadcrumbs 
                items={[
                  { label: 'Etusivu', href: '/' },
                  { label: 'Tutkimus', href: '/tutkimus' },
                  { label: 'Uusi tutkimus paljastaa TikTokin algoritmin vaikutukset nuor...' }
                ]}
              />
              
                <Link href="/tutkimus" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Tutkimus</Link>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Uusi tutkimus paljastaa TikTokin algoritmin vaikutukset nuorten mielenterveyteen
                </h1>
                <p className="text-gray-600">Julkaistu 30.06.2025 • Helsingin yliopisto</p>
              </div>

              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image src="/tiktok-research.svg" alt="TikTok algoritmi tutkimus" fill className="object-cover" />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  Helsingin yliopiston psykologian laitoksen laaja tutkimus osoittaa, että TikTokin algoritmi voi
                  merkittävästi vaikuttaa nuorten mielenterveyteen ja itsetuntoon. Tutkimus seurasi 2,500 suomalaista
                  15-25-vuotiasta kuuden kuukauden ajan.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tutkimuksen keskeiset havainnot</h2>

                <p className="text-gray-700 mb-6">
                  Tutkimus paljasti, että TikTokin algoritmi luo {"kaikukammioita"}, jotka vahvistavat käyttäjien
                  olemassa olevia ajatuksia ja tunteita. Erityisen huolestuttavaa on, että algoritmi näyttää suosivan
                  sisältöä, joka herättää voimakkaita tunteita - mukaan lukien negatiivisia tunteita kuten ahdistusta ja
                  surua.
                </p>

                <p className="text-gray-700 mb-6">
                  {
                    "Algoritmi oppii käyttäjän mieltymyksistä, mutta se ei osaa erottaa, mikä sisältö on hyväksi käyttäjän mielenterveydelle"
                  }
                  , selittää tutkimusta johtanut professori Elina Katainen.{" "}
                  {
                    "Jos nuori kärsii masennuksesta ja katsoo siihen liittyvää sisältöä, algoritmi tarjoaa yhä enemmän samankaltaista materiaalia."
                  }
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vaikutukset itsetuntoon ja kehonkuvaan</h2>

                <p className="text-gray-700 mb-6">
                  Tutkimus osoitti erityisen selvän yhteyden TikTokin käytön ja kehonkuvan häiriöiden välillä. Nuoret,
                  jotka käyttivät sovellusta yli kolme tuntia päivässä, raportoivat merkittävästi enemmän
                  tyytymättömyyttä ulkonäköönsä kuin vähemmän käyttävät ikätoverinsa.
                </p>

                <p className="text-gray-700 mb-6">
                  Erityisesti kauneusfilttereillä ja muokkaussovelluksilla käsitelty sisältö vaikutti negatiivisesti
                  nuorten realistiseen käsitykseen omasta ulkonäöstään. Tutkijat havaitsivat myös yhteyden TikTokin
                  käytön ja syömishäiriöiden oireiden välillä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sosiaalinen vertailu ja FOMO</h2>

                <p className="text-gray-700 mb-6">
                  TikTokin {"For You"} -sivu luo jatkuvan sosiaalisen vertailun kierteen. Nuoret vertaavat elämäänsä
                  huolellisesti kuratoituun ja editoituun sisältöön, mikä johtaa epärealistisiin odotuksiin omasta
                  elämästä.
                </p>

                <p className="text-gray-700 mb-6">
                  FOMO (Fear of Missing Out) -ilmiö korostuu erityisesti TikTokissa, jossa sisältö vaihtuu nopeasti ja
                  trendit syntyvät ja kuolevat päivien sisällä. Tämä luo paineita pysyä jatkuvasti ajan tasalla ja
                  osallistua uusimpiin trendeihin.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Suositukset ja ratkaisuehdotukset</h2>

                <p className="text-gray-700 mb-6">
                  Tutkijat suosittelevat, että TikTok ottaisi käyttöön {"hyvinvointialgoritmeja"}, jotka tunnistavat
                  haitallisen sisällön kierteen ja tarjoavat käyttäjille positiivisempaa sisältöä. Lisäksi sovellukseen
                  tulisi lisätä parempia työkaluja käyttöajan hallintaan.
                </p>

                <p className="text-gray-700 mb-6">
                  Vanhemmille ja opettajille tutkijat suosittelevat avointa keskustelua sosiaalisen median vaikutuksista
                  ja medialukutaidon opettamista.{" "}
                  {
                    "On tärkeää, että nuoret ymmärtävät, miten algoritmit toimivat ja miksi he näkevät juuri tietynlaista sisältöä"
                  }
                  , korostaa professori Katainen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Jatkotutkimus ja kansainvälinen yhteistyö
                </h2>

                <p className="text-gray-700 mb-6">
                  Helsingin yliopisto jatkaa tutkimusta yhteistyössä Oxfordin ja Stanfordin yliopistojen kanssa.
                  Tavoitteena on kehittää kansainvälisiä suosituksia sosiaalisen median alustojen vastuullisemmalle
                  suunnittelulle.
                </p>

                <p className="text-gray-700 mb-6">
                  Tutkimus julkaistaan kokonaisuudessaan Journal of Digital Psychology -lehdessä helmikuussa 2025.
                  Tutkimusdata on saatavilla avoimesti muiden tutkijoiden käyttöön.
                </p>
              
              <MoreFromCategory 
                currentArticleId="tiktok-algoritmi-tutkimus"
                category="Tutkimus"
                limit={4}
              />
              
                            
              <ArticleTags tags={tags} articleId="tiktok-algoritmi-tutkimus" />
              <ArticleNavigation 
                currentArticleId="tiktok-algoritmi-tutkimus"
                category="Tutkimus"
              />
            
</div>
                
                <ContextualLinks 
                  currentArticleId="tiktok-algoritmi-tutkimus"
                  content="Sample content for contextual analysis"
                  limit={3}
                />
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
