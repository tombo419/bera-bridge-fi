import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Naisten osuus e-urheilussa kasvaa - mutta tasa-arvo ontuu edelleen | Bera Bridge",
  description:
    "Naisten määrä e-urheilussa kasvaa, mutta sukupuolten välinen tasa-arvo on edelleen ongelma. Tutkimme tilannetta Suomessa ja maailmalla.",
  keywords: "e-urheilu, naiset, tasa-arvo, sukupuoli, pelaaminen, esports",
}

export default function NaistenOsuusEUrheilussa() {
  const tags = extractTagsFromArticle("naisten-osuus-e-urheilussa-kasvaa", "Uutiset");

import { extractTagsFromArticle } from "@/utils/tags"
import { ArticleTags } from "@/components/TagCloud";
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-600 mb-4">
          <Link href="/" className="hover:text-blue-600">
            Etusivu
          </Link>
          <span className="mx-2">/</span>
          <Link href="/pelaaminen" className="hover:text-blue-600">
            Pelaaminen
          </Link>
          <span className="mx-2">/</span>
          <span>Naisten osuus e-urheilussa kasvaa</span>
        </nav>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src="/metaverse-identity.svg&text=Naiset+e-urheilussa"
              alt="Naiset e-urheilussa"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">E-urheilu</span>
              <time>6. tammikuuta 2025</time>
              <span>Lukuaika: 6 min</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Naisten osuus e-urheilussa kasvaa - mutta tasa-arvo ontuu edelleen
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                E-urheilun suosio kasvaa räjähdysmäisesti, ja mukana on yhä enemmän naisia. Silti sukupuolten välinen
                tasa-arvo on edelleen merkittävä ongelma alalla, joka näkyy niin pelaajamäärissä kuin palkkioissa.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Naisten määrä kasvaa hitaasti</h2>
              <p>
                Viimeisten viiden vuoden aikana naisten osuus ammattimaisessa e-urheilussa on kasvanut 12 prosentista 18
                prosenttiin. Vaikka kehitys on positiivista, se on edelleen hidasta verrattuna perinteisiin
                urheilulajeihin.
              </p>

              <p>
                Suomessa tilanne on hieman parempi kuin maailmanlaajuisesti. Suomen E-urheiluliiton mukaan naiset
                muodostavat noin 22 prosenttia rekisteröidyistä kilpapelaajista, mikä on EU:n keskiarvoa korkeampi.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Sukupuolierot eri peleissä</h2>
              <p>
                Naisten osuus vaihtelee merkittävästi eri peligenrejen välillä. Strategiapeleissä ja MOBA-peleissä
                (Multiplayer Online Battle Arena) naisia on vähemmän, kun taas battle royale -peleissä sukupuolijakauma
                on tasaisempi.
              </p>

              <div className="bg-gray-100 p-4 rounded-lg my-6">
                <h3 className="font-bold mb-2">Naisten osuus eri peligenreissä:</h3>
                <ul className="space-y-1">
                  <li>• Valorant: 35% naisia</li>
                  <li>• Fortnite: 32% naisia</li>
                  <li>• League of Legends: 15% naisia</li>
                  <li>• Counter-Strike 2: 12% naisia</li>
                  <li>• Overwatch 2: 28% naisia</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Palkkioiden epätasa-arvo</h2>
              <p>
                Yksi suurimmista ongelmista on palkkioiden epätasa-arvo. Naisten turnausten palkintopotit ovat usein
                merkittävästi pienempiä kuin miesten. Esimerkiksi CS2:n Major-turnauksissa miesten palkintopotti on 1,25
                miljoonaa dollaria, kun naisten vastaava turnaus tarjoaa 100 000 dollaria.
              </p>

              <p>
                "Tämä on noidankehä", selittää e-urheilututkija Laura Virtanen Tampereen yliopistosta. "Pienemmät
                palkinnot tarkoittavat vähemmän medianäkyvyyttä, mikä johtaa pienempiin sponsoreihin ja edelleen
                pienempiin palkintoihin."
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Häirintä ja toksisuus</h2>
              <p>
                Monet naispelaajat kohtaavat häirintää ja seksismiä verkossa. Tutkimuksen mukaan 83 prosenttia
                naispelaajista on kokenut sukupuoleen perustuvaa häirintää pelaamisen aikana.
              </p>

              <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700 my-6">
                "Joudun usein piilottamaan sukupuoleni pelissä välttääkseni häirintää. Se on surullista, koska haluan
                vain pelata rauhassa." - Julia, 19-vuotias CS2-pelaaja
              </blockquote>

              <p>
                Peliyhtiöt ovat alkaneet ottaa ongelmaa vakavasti. Riot Games on investoinut merkittävästi häirinnän
                vähentämiseen, ja Valve on tiukentanut rangaistuksia toksisesta käytöksestä.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Menestystarinoita Suomesta</h2>
              <p>
                Suomessa on useita menestyneitä naispelaajia, jotka ovat murtaneet lasikattoja. Esimerkiksi "mimi" eli
                Michaela Lintrup on yksi maailman parhaista naispuolisista Valorant-pelaajista ja pelaa kansainvälisellä
                huipputasolla.
              </p>

              <p>
                Myös striimauksessa suomalaisnaiset ovat menestyneet. Twitch-striimaaja "Loserfruit" on kerännyt yli
                miljoonan seuraajan ja ansaitsee striimauksella kuusinumeroisen summan vuodessa.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Organisaatioiden rooli</h2>
              <p>
                E-urheiluorganisaatiot ovat alkaneet panostaa naisten rekrytointiin. ENCE on perustanut naisten
                CS2-joukkueen, ja Team Liquid on investoinut merkittävästi naisten Valorant-tiimiin.
              </p>

              <p>
                "Meidän tavoitteena on luoda ympäristö, jossa kaikki voivat menestyä sukupuolesta riippumatta", sanoo
                ENCE:n toimitusjohtaja Mika Kuusisto.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Koulutuksen merkitys</h2>
              <p>
                Oppilaitokset ovat alkaneet tarjota e-urheiluun keskittyviä ohjelmia, ja näissä naisten osuus on
                kasvanut. Esimerkiksi Omnia-ammattiopistossa e-urheilulinjalla naisia on 30 prosenttia opiskelijoista.
              </p>

              <p>
                Koulutus ei keskity pelkästään pelaamiseen, vaan myös e-urheilun liiketoimintaan,
                tapahtumajärjestämiseen ja sisällöntuotantoon. Nämä alat tarjoavat naisille mahdollisuuksia vaikuttaa
                e-urheilun kehitykseen.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Tulevaisuuden näkymät</h2>
              <p>
                Asiantuntijat uskovat, että tasa-arvo e-urheilussa paranee vähitellen. Nuoremmat sukupolvet ovat
                tottuneet sukupuolten väliseen tasa-arvoon, ja peliyhtiöt investoivat yhä enemmän inkluusioon.
              </p>

              <p>
                "Uskon, että 10 vuoden kuluttua e-urheilu on huomattavasti tasa-arvoisempaa", ennustaa tutkija Virtanen.
                "Mutta se vaatii aktiivista työtä kaikilta alan toimijoilta."
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Toimenpiteitä tasa-arvon edistämiseksi:</h3>
                <ul className="space-y-2">
                  <li>• Naisten turnausten palkintopotit samalle tasolle miesten kanssa</li>
                  <li>• Tiukemmat rangaistukset häirinnästä</li>
                  <li>• Naisten näkyvyyden lisääminen markkinoinnissa</li>
                  <li>• Mentorointiohjelmia naispelaajille</li>
                  <li>• Sukupuolineutraalit kilpailut</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Lue myös:</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/esports-urheilu" className="text-blue-600 hover:underline">
                      E-sports urheiluna - legitimiteetti kasvaa
                    </Link>
                  </li>
                  <li>
                    <Link href="/suomen-peliteollisuus-kasvaa-ennatystahtia" className="text-blue-600 hover:underline">
                      Suomen peliteollisuus kasvaa ennätystahtia
                    </Link>
                  </li>
                  <li>
                    <Link href="/digitaalinen-kiusaaminen-lisaantyy" className="text-blue-600 hover:underline">
                      Digitaalinen kiusaaminen lisääntyy
                    </Link>
                  </li>
                </ul>
              </div>
            
              <MoreFromCategory 
                currentArticleId="naisten-osuus-e-urheilussa-kasvaa"
                category="Uutiset"
                limit={4}
              />
              
                            
              <ArticleTags tags={tags} articleId="naisten-osuus-e-urheilussa-kasvaa" />
              <ArticleNavigation 
                currentArticleId="naisten-osuus-e-urheilussa-kasvaa"
                category="Uutiset"
              />
            
</div>
          </div>
        </article>
      </div>
    </div>
  )
}
