import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "TikTok ja Kiina - miksi tietoturva-asiantuntijat ovat huolissaan? | Bera Bridge",
  description:
    "TikTokin yhteydet Kiinaan herättävät huolta tietoturvasta ja kansallisesta turvallisuudesta. Mitä riskejä sovellus todella aiheuttaa?",
  keywords: "TikTok, Kiina, tietoturva, kansallinen turvallisuus, ByteDance",
}

export default function TikTokKiinaTietoturvaHuoli() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-600 mb-4">
          <Link href="/" className="hover:text-blue-600">
            Etusivu
          </Link>
          <span className="mx-2">/</span>
          <Link href="/teknologia" className="hover:text-blue-600">
            Teknologia
          </Link>
          <span className="mx-2">/</span>
          <span>TikTok Kiina tietoturva huoli</span>
        </nav>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src="/metaverse-identity.svg&text=TikTok+tietoturva"
              alt="TikTok tietoturva"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Tietoturva</span>
              <time>2. tammikuuta 2025</time>
              <span>Lukuaika: 9 min</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              TikTok ja Kiina - miksi tietoturva-asiantuntijat ovat huolissaan?
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                TikTok on maailman suosituin sosiaalisen median sovellus, mutta sen yhteydet Kiinaan herättävät vakavaa
                huolta tietoturva-asiantuntijoissa. Mitä riskejä sovellus todella aiheuttaa, ja pitäisikö se kieltää
                Suomessa?
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">ByteDance ja Kiinan yhteydet</h2>
              <p>
                TikTokin omistaa kiinalainen ByteDance-yhtiö, joka on Kiinan lakien alainen. Kiinan kansallinen
                tiedustelulaki velvoittaa kaikki kiinalaiset yritykset yhteistyöhön tiedustelupalvelujen kanssa, jos
                sitä vaaditaan.
              </p>

              <p>
                "Tämä tarkoittaa, että ByteDance ei voi kieltäytyä luovuttamasta käyttäjätietoja Kiinan viranomaisille",
                selittää kyberturvallisuuden professori Jarno Limnéll Aalto-yliopistosta.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Mitä tietoja TikTok kerää?</h2>
              <p>TikTok kerää valtavan määrän tietoja käyttäjistään. Sovellus pääsee käsiksi:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Sijaintitietoihin ja liikkumiseen</li>
                <li>Kontakteihin ja puheluhistoriaan</li>
                <li>Selaamishistoriaan ja hakuihin</li>
                <li>Biometrisiin tietoihin (kasvontunnistus)</li>
                <li>Laitteen teknisiin tietoihin</li>
                <li>Käyttäytymismalleihin ja mieltymyksiin</li>
              </ul>

              <p>
                Erityisen huolestuttavaa on, että TikTok kerää tietoja myös niistä, jotka eivät käytä sovellusta, mutta
                joiden kontakteissa on TikTok-käyttäjiä.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Algoritmin vaikutusvalta</h2>
              <p>
                TikTokin algoritmi on erittäin tehokas määrittämään, mitä sisältöä käyttäjät näkevät. Tämä antaa
                valtavan vaikutusvallan mielipiteisiin ja maailmankuvaan, erityisesti nuorten keskuudessa.
              </p>

              <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 my-6">
                "TikTok voi vaikuttaa miljoonien nuorten ajatteluun ja arvoihin. Se on valtava geopoliittinen ase, jos
                sitä käytetään väärin." - Tietoturva-asiantuntija Maria Kronberg
              </blockquote>

              <h2 className="text-2xl font-bold mt-8 mb-4">Yhdysvaltojen toimet</h2>
              <p>
                Yhdysvallat on ottanut tiukkoja toimia TikTokia vastaan. Presidentti Biden allekirjoitti lain, joka
                vaatii ByteDancea myymään TikTokin tai sovellus kielletään Yhdysvalloissa.
              </p>

              <p>
                Myös monet osavaltiot ja liittovaltion virastot ovat kieltäneet TikTokin käytön työpuhelimissa. Armeija
                ja tiedustelupalvelut ovat kieltäneet sovelluksen kokonaan.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">EU:n ja Suomen linja</h2>
              <p>
                Euroopan unioni on ollut varovaisempi TikTokin suhteen, mutta huoli kasvaa. EU:n komissio on kieltänyt
                TikTokin henkilökunnan puhelimista, ja jäsenmaat harkitsevat omia toimiaan.
              </p>

              <p>
                Suomessa hallitus on asettanut työryhmän selvittämään TikTokin riskejä. Puolustusministeriö on jo
                kieltänyt sovelluksen käytön työpuhelimissa.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Nuorten näkökulma</h2>
              <p>
                Nuoret suhtautuvat TikTok-huoliin skeptisesti. Heille sovellus on tärkeä osa sosiaalista elämää ja
                itseilmaisua.
              </p>

              <div className="bg-gray-100 p-4 rounded-lg my-6">
                <h3 className="font-bold mb-2">Nuorten TikTok-käyttö Suomessa:</h3>
                <ul className="space-y-1">
                  <li>• 78% 16-24-vuotiaista käyttää TikTokia</li>
                  <li>• Keskimäärin 95 minuuttia päivässä</li>
                  <li>• 34% saa uutisia ensisijaisesti TikTokista</li>
                  <li>• 67% ei ole huolissaan yksityisyydestä</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Vaihtoehtoisia sovelluksia</h2>
              <p>
                Jos TikTok kiellettäisiin, markkinoille on tulossa vaihtoehtoisia sovelluksia. Instagram Reels, YouTube
                Shorts ja Snapchat Spotlight kilpailevat jo TikTokin kanssa.
              </p>

              <p>
                Myös eurooppalaisia vaihtoehtoja kehitetään. Ranskalainen Triller ja saksalainen Likee yrittävät
                houkutella käyttäjiä pois TikTokista.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Taloudellinen vaikutus</h2>
              <p>
                TikTok työllistää Suomessa satoja ihmisiä ja tukee tuhansia sisällöntuottajia. Sovelluksen kieltäminen
                aiheuttaisi merkittäviä taloudellisia menetyksiä.
              </p>

              <p>
                "Monet nuoret ansaitsevat TikTokilla elantonsa. Kielto olisi katastrofi heille", sanoo sosiaalisen
                median asiantuntija Elina Nykänen.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Teknisiä ratkaisuja</h2>
              <p>
                TikTok on yrittänyt rauhoittaa huolia teknisillä ratkaisuilla. "Project Texas" -niminen aloite siirtää
                amerikkalaisten käyttäjien tiedot Yhdysvaltoihin.
              </p>

              <p>
                Kriitikot epäilevät, että nämä toimet ovat riittämättömiä. Algoritmi ja päätöksenteko pysyvät edelleen
                Kiinassa.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Mitä voit tehdä?</h2>
              <p>Jos käytät TikTokia, voit suojata itseäsi:</p>

              <div className="bg-yellow-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-bold mb-4">Yksityisyyden suojaaminen:</h3>
                <ul className="space-y-2">
                  <li>• Rajoita sovelluksen käyttöoikeuksia</li>
                  <li>• Älä jaa arkaluontoisia tietoja</li>
                  <li>• Käytä yksityistä tiliä</li>
                  <li>• Tarkista säännöllisesti yksityisyysasetukset</li>
                  <li>• Harkitse vaihtoehtoisia sovelluksia</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Tulevaisuuden näkymät</h2>
              <p>
                TikTokin tulevaisuus on epävarma. Geopoliittinen tilanne kiristyy, ja paineet kieltää sovellus kasvavat.
                Samaan aikaan miljoonat käyttäjät vastustavat kieltoa.
              </p>

              <p>
                "Todennäköisesti näemme tiukempaa sääntelyä ja vaatimuksia läpinäkyvyydestä", ennustaa
                kyberturvallisuuden asiantuntija Mikko Hyppönen.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Lue myös:</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/tiktok-algoritmi-tutkimus" className="text-blue-600 hover:underline">
                      TikTok-algoritmi tutkimus
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/some-vaikuttajat-nuorten-kulutuskayttaytyminen"
                      className="text-blue-600 hover:underline"
                    >
                      Some-vaikuttajat ohjaavat nuorten kulutusta
                    </Link>
                  </li>
                  <li>
                    <Link href="/lasten-tietosuoja-verkossa-suomi" className="text-blue-600 hover:underline">
                      Lasten tietosuoja verkossa
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
