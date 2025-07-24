import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { getCategoryInfo } from "@/app/utils/categories"
import { extractTagsFromArticle } from "@/app/utils/tags"
import { ArticleTags } from "@/app/components/TagCloud"
import { MoreFromCategory } from "@/app/components/MoreFromCategory"
import { ArticleNavigation } from "@/app/components/ArticleNavigation"




const relatedArticles = [
  { id: "tekoaly-muuttaa-tyomarkkinoita", title: "Tekoäly muuttaa työmarkkinoita", category: "Teknologia" },
  { id: "metaverse-tulevaisuus", title: "Metaverse ja virtuaalitodellisuuden tulevaisuus", category: "Teknologia" },
  { id: "kryptovaluuttojen-tulevaisuus", title: "Kryptovaluuttojen tulevaisuus", category: "Teknologia" }
];

export default function SocialMediaAddictionArticle() {
  const tags = extractTagsFromArticle("sosiaalisen-median-riippuvuus", "Digitaalinen riski ja käyttäytyminen");
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
                  { label: 'Uutiset', href: '/uutiset' },
                  { label: 'Sosiaalisen median riippuvuuden tunnusmerkit' }
                ]}
              />
              
                <Link href="/uutiset" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Digitaalinen riski ja käyttäytyminen</Link>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Sosiaalisen median riippuvuuden tunnusmerkit
                </h1>
                <p className="text-gray-600">Julkaistu 26.06.2025</p>
              </div>

              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/social-media-addiction.svg"
                  alt="Sosiaalisen median riippuvuus"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  Sosiaalisen median riippuvuus on noussut yhdeksi aikamme merkittävimmistä mielenterveysongelmista.
                  Miljoonat ihmiset ympäri maailmaa kamppailevat hallitsemattoman sosiaalisen median käytön kanssa, joka
                  vaikuttaa heidän työhönsä, ihmissuhteisiinsa ja hyvinvointiinsa.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Riippuvuuden tunnusmerkit</h2>

                <p className="text-gray-700 mb-6">
                  Sosiaalisen median riippuvuus ilmenee monin eri tavoin. Tyypillisiä oireita ovat pakonomainen tarve
                  tarkistaa sosiaalista mediaa, ahdistus kun puhelin ei ole saatavilla, ja kyvyttömyys kontrolloida
                  käyttöaikaa huolimatta negatiivisista seurauksista.
                </p>

                <p className="text-gray-700 mb-6">
                  Riippuvaiset käyttäjät kokevat usein vieroitusoireita, kuten levottomuutta ja ärtymystä, kun he eivät
                  pääse käyttämään sosiaalista mediaa. He saattavat myös valehdella käyttöajastaan tai salata sen
                  muilta.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Psykologiset mekanismit</h2>

                <p className="text-gray-700 mb-6">
                  Sosiaalisen median alustat on suunniteltu maksimoimaan käyttöaika hyödyntämällä psykologisia
                  periaatteita. Intermittent reinforcement -periaate, jossa palkinnot annetaan ennakoimattomasti, luo
                  voimakkaan riippuvuuden.
                </p>

                <p className="text-gray-700 mb-6">
                  Tykkäykset, kommentit ja jaot aktivoivat aivojen palkitsemisjärjestelmää samalla tavalla kuin huumeet
                  tai uhkapelit. Tämä luo neurobiologisen riippuvuuden, jota on vaikea murtaa pelkällä tahdolla.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vaikutukset mielenterveyteen</h2>

                <p className="text-gray-700 mb-6">
                  Tutkimukset osoittavat selkeän yhteyden liiallisen sosiaalisen median käytön ja mielenterveysongelmien
                  välillä. Erityisesti nuorilla on havaittu lisääntynyttä ahdistusta, masennusta ja alentunutta
                  itsetuntoa.
                </p>

                <p className="text-gray-700 mb-6">
                  Jatkuva sosiaalinen vertailu muiden "täydellisiin" elämiin sosiaalisessa mediassa luo epärealistisia
                  odotuksia ja tyytymättömyyttä omaan elämään. Tämä voi johtaa vakaviin mielenterveysongelmiin.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unihäiriöt ja fyysinen terveys</h2>

                <p className="text-gray-700 mb-6">
                  Sosiaalisen median käyttö erityisesti illalla ja yöllä häiritsee merkittävästi unta. Sininen valo
                  estää melatoniinin tuotantoa, ja jännittävä sisältö pitää mielen virkeänä nukkumaanmenoajan jälkeen.
                </p>

                <p className="text-gray-700 mb-6">
                  Pitkäaikainen unenpuute johtaa lukuisiin terveysongelmiin, kuten heikentyneen immuunijärjestelmän,
                  painonnousun ja kognitiivisten toimintojen heikkenemisen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ihmissuhteiden kärsiminen</h2>

                <p className="text-gray-700 mb-6">
                  Sosiaalisen median riippuvuus vaikuttaa negatiivisesti kasvokkaisiin ihmissuhteisiin. Riippuvaiset
                  käyttäjät saattavat eristäytyä sosiaalisista tilanteista tai olla läsnä vain fyysisesti, kun heidän
                  huomionsa on puhelimessa.
                </p>

                <p className="text-gray-700 mb-6">
                  Paradoksaalisesti sosiaalisen median liiallinen käyttö johtaa usein sosiaaliseen eristyneisyyteen ja
                  yksinäisyyteen, vaikka sen tarkoitus on yhdistää ihmisiä.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hoito ja toipuminen</h2>

                <p className="text-gray-700 mb-6">
                  Sosiaalisen median riippuvuuden hoito vaatii usein ammattiapua. Kognitiivinen käyttäytymisterapia on
                  osoittautunut tehokkaaksi menetelmäksi riippuvuuden käsittelyssä.
                </p>

                <p className="text-gray-700 mb-6">
                  Digitaalinen detox, jossa sosiaalista mediaa vältetään määrätyn ajan, voi auttaa katkaisemaan
                  riippuvuuden kierteen. On tärkeää korvata sosiaalisen median käyttö mielekkäillä aktiviteeteilla ja
                  kasvokkaisilla sosiaalisilla kontakteilla.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ennaltaehkäisy</h2>

                <p className="text-gray-700 mb-6">
                  Paras tapa käsitellä sosiaalisen median riippuvuutta on ennaltaehkäisy. Tietoinen ja rajoitettu
                  käyttö, säännölliset tauot ja kriittinen suhtautuminen näkemäänsä sisältöön voivat auttaa välttämään
                  riippuvuuden kehittymistä.
                </p>

                <p className="text-gray-700 mb-6">
                  Erityisesti nuorten kohdalla on tärkeää opettaa mediakasvatusta ja terveitä digitaalisia
                  käyttäytymismalleja jo varhaisessa vaiheessa.
                </p>
              
              <MoreFromCategory 
                currentArticleId="sosiaalisen-median-riippuvuus"
                category="Digitaalinen riski ja käyttäytyminen"
                limit={4}
              />
              
                            
              <ArticleTags tags={tags} articleId="sosiaalisen-median-riippuvuus" />
              <ArticleNavigation 
                currentArticleId="sosiaalisen-median-riippuvuus"
                category="Digitaalinen riski ja käyttäytyminen"
              />
            
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
