import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { extractTagsFromArticle } from "@/app/utils/tags"
import { ArticleTags } from "@/app/components/TagCloud"
import { MoreFromCategory } from "@/app/components/MoreFromCategory"
import { ArticleNavigation } from "@/app/components/ArticleNavigation"

export const metadata: Metadata = {
  title: "Pelialan työelämä: luovuutta vai loppuunpalamista? | Bera Bridge",
  description:
    "Peliteollisuuden työelämä on kuormittavaa. Tutkimme crunch-kulttuuria, burnoutia ja alan työolosuhteita Suomessa.",
  keywords: "peliteollisuus, työelämä, burnout, crunch, työhyvinvointi",
}

export default function PelialanTyoelamaBurnout() {
  const tags = extractTagsFromArticle("pelialan-tyoelama-burnout", "Uutiset");
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
          <span>Pelialan työelämä burnout</span>
        </nav>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src="/metaverse-identity.svg&text=Pelialan+työelämä"
              alt="Pelialan työelämä"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Työelämä</span>
              <time>4. tammikuuta 2025</time>
              <span>Lukuaika: 7 min</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pelialan työelämä: luovuutta vai loppuunpalamista?
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Peliteollisuus houkuttelee nuoria luovalla työllään ja innovatiivisella kulttuurillaan. Pinnan alla
                piilee kuitenkin vakavia ongelmia: ylitöitä, burnoutia ja epäterveellistä kilpailua. Miten Suomi pärjää
                kansainvälisessä vertailussa?
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Crunch-kulttuuri pelialalla</h2>
              <p>
                "Crunch" tarkoittaa pelialalla intensiivisiä työjaksoja ennen pelin julkaisua, jolloin työntekijät
                tekevät 60-80 tuntia viikossa kuukausia putkeen. Tämä on yleistä erityisesti suurissa kansainvälisissä
                studioissa.
              </p>

              <p>
                Suomessa tilanne on hieman parempi kuin muualla maailmassa, mutta ongelmia on silti. Tekes-tutkimuksen
                mukaan 34 prosenttia suomalaisista pelialan työntekijöistä on kokenut burnoutin viimeisen kahden vuoden
                aikana.
              </p>

              <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 my-6">
                "Tein kuusi kuukautta 70-tuntisia työviikkoja. Lopulta en pystynyt nukkumaan, ja terveys romahti.
                Jouduin pitämään kolmen kuukauden sairausloman." - Anonyymi peliohjelmoija
              </blockquote>

              <h2 className="text-2xl font-bold mt-8 mb-4">Suomalaisten yritysten lähestymistapa</h2>
              <p>
                Supercell on ollut edelläkävijä terveellisessä työkulttuurissa. Yhtiö on tunnettu "fail fast"
                -filosofiastaan ja siitä, että se ei pakota työntekijöitä ylitöihin. Tämä on osaltaan vaikuttanut yhtiön
                menestykseen.
              </p>

              <p>
                "Luovuus ei synny väkisin. Väsyneet ihmiset eivät tee hyviä pelejä", sanoo Supercell-veteraani Jaakko
                Harlas. Yhtiö tarjoaa työntekijöilleen joustavia työaikoja ja mahdollisuuden etätöihin.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Nuorten houkuttelu alalle</h2>
              <p>
                Peliteollisuus houkuttelee nuoria lupaamalla unelmatyöpaikan: mahdollisuuden tehdä pelejä ja
                työskennellä rennossa ympäristössä. Todellisuus voi olla kuitenkin karua.
              </p>

              <p>
                Monet nuoret ohjelmoijat ja taiteilijat ovat valmiita hyväksymään huonot työolot päästäkseen
                "unelma-alalle". Tätä hyväksikäyttäen jotkut yritykset maksavat alhaisia palkkoja ja vaativat
                kohtuuttomia työaikoja.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Sukupuolten välinen epätasa-arvo</h2>
              <p>
                Pelialalla työskentelee edelleen vähän naisia, erityisesti teknisessä kehityksessä. Naiset muodostavat
                vain 23 prosenttia alan työntekijöistä Suomessa, ja he kohtaavat usein syrjintää ja häirintää.
              </p>

              <p>
                "Jouduin todistamaan kykyni jatkuvasti tavalla, jota miespuolisilta kollegoilta ei vaadittu", kertoo
                pelisuunnittelija Maria Lindberg. "Se oli henkisesti kuluttavaa."
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Freelancer-kulttuurin ongelmat</h2>
              <p>
                Yhä useampi pelialan ammattilainen työskentelee freelancerina tai lyhyissä projekteissa. Tämä tuo
                joustavuutta, mutta myös epävarmuutta ja stressiä.
              </p>

              <div className="bg-gray-100 p-4 rounded-lg my-6">
                <h3 className="font-bold mb-2">Freelancer-työn haasteet:</h3>
                <ul className="space-y-1">
                  <li>• Epäsäännölliset tulot</li>
                  <li>• Ei työterveyshuoltoa tai eläke-etuja</li>
                  <li>• Jatkuva tarve etsiä uusia projekteja</li>
                  <li>• Eristäytyneisyys ja yksinäisyys</li>
                  <li>• Vaikeus erottaa työ ja vapaa-aika</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Mielenterveysongelmat yleisiä</h2>
              <p>
                Pelialan työntekijöillä on keskimääräistä enemmän mielenterveysongelmia. IGDA:n (International Game
                Developers Association) tutkimuksen mukaan 53 prosenttia pelialan työntekijöistä kärsii ahdistuksesta ja
                37 prosenttia masennuksesta.
              </p>

              <p>
                Suomessa tilanne on hieman parempi, mutta ongelmat ovat silti merkittäviä. Monet yritykset ovat alkaneet
                tarjota työntekijöilleen mielenterveyspalveluja ja stressinhallinnan koulutusta.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Ammattiliittojen rooli</h2>
              <p>
                Peliala on perinteisesti ollut heikosti järjestäytynyt, mutta tilanne on muuttumassa. Suomessa Tekniikan
                Akateemiset TEK ja Tradenomiliitto TRAL ovat alkaneet kiinnittää huomiota pelialan työolosuhteisiin.
              </p>

              <p>
                Kansainvälisesti Game Workers Unite -liike on pyrkinyt parantamaan alan työoloja. Liike on saanut tukea
                myös Suomesta.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Positiivisia kehityssuuntia</h2>
              <p>
                Onneksi pelialalla on myös positiivisia kehityssuuntia. Monet yritykset ovat alkaneet ymmärtää, että
                hyvinvoivat työntekijät tekevät parempia pelejä.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Joustava työaika ja etätyömahdollisuudet</li>
                <li>Mielenterveyspalvelut ja työhyvinvoinnin tuki</li>
                <li>Realistiset aikataulut ja projektinhallinta</li>
                <li>Diversiteetti- ja inkluusio-ohjelmat</li>
                <li>Avoin keskustelu työhyvinvoinnista</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Vinkkejä alan työntekijöille</h2>
              <p>Jos työskentelet pelialalla tai harkitset alalle siirtymistä, muista:</p>

              <div className="bg-green-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-bold mb-4">Työhyvinvoinnin vinkit:</h3>
                <ul className="space-y-2">
                  <li>• Aseta selkeät rajat työn ja vapaa-ajan välille</li>
                  <li>• Ota säännöllisiä taukoja ja lomia</li>
                  <li>• Keskustele avoimesti työhyvinvoinnista esimiehen kanssa</li>
                  <li>• Hae apua mielenterveysongelmiin ajoissa</li>
                  <li>• Verkostoidu alan muiden ammattilaisten kanssa</li>
                  <li>• Pidä huolta fyysisestä kunnostasi</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Tulevaisuuden näkymät</h2>
              <p>
                Pelialan työolot paranevat hitaasti mutta varmasti. Nuoremmat sukupolvet vaativat parempaa
                work-life-balanssia, ja yritykset joutuvat mukautumaan kilpaillakseen osaajista.
              </p>

              <p>
                "Uskon, että 10 vuoden kuluttua peliala on huomattavasti terveellisempi työskennellä", ennustaa
                työpsykologi Elina Koskinen. "Mutta se vaatii jatkuvaa työtä kaikilta alan toimijoilta."
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Lue myös:</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/suomen-peliteollisuus-kasvaa-ennatystahtia" className="text-blue-600 hover:underline">
                      Suomen peliteollisuus kasvaa ennätystahtia
                    </Link>
                  </li>
                  <li>
                    <Link href="/naisten-osuus-e-urheilussa-kasvaa" className="text-blue-600 hover:underline">
                      Naisten osuus e-urheilussa kasvaa
                    </Link>
                  </li>
                  <li>
                    <Link href="/digitaalinen-hyvinvointi-tutkimus" className="text-blue-600 hover:underline">
                      Digitaalinen hyvinvointi tutkimus
                    </Link>
                  </li>
                </ul>
              </div>
            
              <MoreFromCategory 
                currentArticleId="pelialan-tyoelama-burnout"
                category="Uutiset"
                limit={4}
              />
              
                            
              <ArticleTags tags={tags} articleId="pelialan-tyoelama-burnout" />
              <ArticleNavigation 
                currentArticleId="pelialan-tyoelama-burnout"
                category="Uutiset"
              />
            
</div>
          </div>
        </article>
      </div>
    </div>
  )
}
