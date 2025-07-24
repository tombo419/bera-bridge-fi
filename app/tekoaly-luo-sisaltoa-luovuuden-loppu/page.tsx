import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { getCategoryInfo } from "@/utils/categories"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import { extractTagsFromArticle } from "@/utils/tags"

export const metadata = {
  title: "Tekoäly luo sisältöä - onko luovuuden aikakausi ohi? | Bera Bridge",
  description:
    "Tekoäly kykenee luomaan tekstiä, kuvia, musiikkia ja videoita. Mitä tämä tarkoittaa luoville aloille ja ihmisen luovuudelle?",
}



export default function AIContentCreationPage() {
  const tags = extractTagsFromArticle("tekoaly-luo-sisaltoa-luovuuden-loppu", "Uutiset");
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Takaisin etusivulle
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-purple-100 text-purple-800">Teknologia</Badge>
            <Badge variant="outline">Luovuus</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Tekoäly luo sisältöä - onko luovuuden aikakausi ohi?
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Tekoäly kykenee nykyään luomaan tekstiä, kuvia, musiikkia ja videoita, jotka ovat lähes erottamattomia
            ihmisen tekemistä. Mitä tämä tarkoittaa luoville aloille ja ihmisen ainutlaatuiselle luovuudelle?
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>6.1.2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>9 min lukuaika</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Kulttuuri-toimitus</span>
            </div>
          </div>

          <Button variant="outline" size="sm" className="mb-8 bg-transparent">
            <Share2 className="w-4 h-4 mr-2" />
            Jaa artikkeli
          </Button>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src="/ai-creates-content.svg"
            alt="Tekoäly luo digitaalista taidetta"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Tekoäly kykenee luomaan taidetta, joka on lähes erottamatonta ihmisen tekemästä. Kuva: Midjourney AI
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Tekoälyn luovat kyvyt</strong> ovat kehittyneet räjähdysmäisesti viimeisen kahden vuoden aikana.
            ChatGPT kirjoittaa runoja, Midjourney maalaa tauluja, ja Suno säveltää kappaleita. Kysymys kuuluu: onko
            ihmisen luovuus menettämässä ainutlaatuisuutensa?
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tekoälyn luovat työkalut vallankumouksessa</h2>

          <p className="mb-4">
            Vuonna 2024 tekoälyn luovat kyvyt saavuttivat pisteen, jossa ne voivat kilpailla ammattilaisten kanssa
            monilla aloilla. OpenAI:n DALL-E 3, Googlen Gemini ja Anthropicin Claude kykenevät luomaan sisältöä, joka on
            laadultaan vertailukelpoista ihmisen tekemän kanssa.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Tekoälyn luovat sovellukset 2025:</h4>
            <ul className="list-disc pl-4 text-blue-800 space-y-1">
              <li>
                <strong>Tekstin luominen:</strong> ChatGPT, Claude, Gemini
              </li>
              <li>
                <strong>Kuvien generointi:</strong> Midjourney, DALL-E, Stable Diffusion
              </li>
              <li>
                <strong>Musiikin säveltäminen:</strong> Suno, Udio, AIVA
              </li>
              <li>
                <strong>Videoiden tuottaminen:</strong> Runway, Pika Labs, Luma AI
              </li>
              <li>
                <strong>Koodin kirjoittaminen:</strong> GitHub Copilot, Cursor, Replit
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Suomalaiset taiteilijat kohtaavat uuden todellisuuden
          </h2>

          <p className="mb-4">
            Suomalainen taidemaailma on reagoinut tekoälyyn ristiriitaisesti. Osa taiteilijoista näkee sen uhkana, kun
            taas toiset omaksuvat sen työkaluna luovuuden laajentamiseksi.
          </p>

          <p className="mb-6">
            "Tekoäly ei korvaa taiteilijan visiota, mutta se muuttaa tapaa, jolla toteutamme ideamme", sanoo
            helsinkiläinen digitaalitaiteilija Anna Virtanen. "Se on kuin uusi sivellin - työkalu, joka vaatii taitoa
            käyttää."
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Esimerkkejä tekoälyn käytöstä taiteessa:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Visuaalinen taide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Taiteilijat käyttävät AI:ta luonnosten tekemiseen ja ideoiden visualisointiin. Lopullinen teos syntyy
                  ihmisen ja koneen yhteistyönä.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Kirjallisuus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Kirjailijat hyödyntävät AI:ta juonien kehittämisessä ja kirjoitusprosessin nopeuttamisessa, mutta
                  säilyttävät luovan kontrollin.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Uhka vai mahdollisuus luoville aloille?</h2>

          <p className="mb-4">
            Tekoälyn vaikutus luoviin aloihin on monimutkainen. Yhtäältä se uhkaa perinteisiä ammatteja, kuten graafista
            suunnittelua ja copywritingia. Toisaalta se avaa täysin uusia mahdollisuuksia luovuudelle.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <h4 className="font-semibold text-red-900 mb-2">Uhkia luoville aloille:</h4>
            <ul className="list-disc pl-4 text-red-800 space-y-1">
              <li>Graafisten suunnittelijoiden työpaikkojen väheneminen</li>
              <li>Freelance-kirjoittajien kysynnän lasku</li>
              <li>Valokuvauksen ja kuvituksen alan muutos</li>
              <li>Musiikin tuotannon demokratisoituminen</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
            <h4 className="font-semibold text-green-900 mb-2">Mahdollisuuksia luoville aloille:</h4>
            <ul className="list-disc pl-4 text-green-800 space-y-1">
              <li>Uusien taiteellisten ilmaisumuotojen syntyminen</li>
              <li>Luovan prosessin nopeutuminen ja tehostuminen</li>
              <li>Pienempien toimijoiden pääsy ammattitason työkaluihin</li>
              <li>Personoidun sisällön massatuotanto</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tekijänoikeudet ja eettiset kysymykset</h2>

          <p className="mb-4">
            Tekoälyn luoma sisältö herättää merkittäviä oikeudellisia ja eettisiä kysymyksiä. Kuka omistaa tekoälyn
            luoman taideteoksen? Voiko tekoäly rikkoa tekijänoikeuksia oppimalla olemassa olevista teoksista?
          </p>

          <p className="mb-6">
            EU:n tekoälylaki, joka tulee voimaan 2026, pyrkii vastaamaan näihin kysymyksiin. Laki vaatii tekoälymallit
            ilmoittamaan, jos ne on koulutettu tekijänoikeudellisesti suojatulla materiaalilla.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ihmisen luovuuden ainutlaatuisuus</h2>

          <p className="mb-4">
            Vaikka tekoäly kykenee jäljittelemään ihmisen luovuutta, se ei voi kokea tunteita, elämyksiä tai
            henkilökohtaisia merkityksiä, jotka ovat ihmisen luovuuden ytimessä. Tekoäly luo yhdistämällä olemassa
            olevia elementtejä, mutta ei kykene todelliseen innovaatioon tai syvälliseen ymmärrykseen.
          </p>

          <p className="mb-6">
            "Tekoäly voi matkia tyylejä ja tekniikoita, mutta se ei voi luoda merkitystä samalla tavalla kuin ihminen",
            selittää Helsingin yliopiston estetiikan professori Marja Saksman. "Ihmisen luovuus kumpuaa
            elämänkokemuksesta ja tunteista."
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulevaisuuden luovat ammatit</h2>

          <p className="mb-4">
            Tekoälyn yleistyminen ei välttämättä tarkoita luovien ammattien loppua, vaan niiden muuttumista. Uusia
            ammatteja syntyy, kuten AI-promptien suunnittelu, tekoälyn luoman sisällön kuratointi ja ihmisen ja tekoälyn
            välisen yhteistyön koordinointi.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Tulevaisuuden luovat ammatit:</h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>AI Prompt Engineer:</strong> Tekoälyn ohjaamiseen erikoistunut ammattilainen
            </li>
            <li>
              <strong>AI Content Curator:</strong> Tekoälyn luoman sisällön laadunvalvoja
            </li>
            <li>
              <strong>Human-AI Collaboration Specialist:</strong> Ihmisen ja tekoälyn yhteistyön asiantuntija
            </li>
            <li>
              <strong>AI Ethics Consultant:</strong> Tekoälyn eettisen käytön neuvonantaja
            </li>
            <li>
              <strong>Synthetic Media Detective:</strong> Tekoälyn luoman sisällön tunnistaja
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Suomen luovien alojen strategia</h2>

          <p className="mb-4">
            Suomen hallitus on tunnistanut tekoälyn merkityksen luoville aloille ja laatinut strategian, joka tukee alan
            sopeutumista uuteen teknologiaan. Tavoitteena on säilyttää Suomen kilpailukyky luovilla aloilla ja hyödyntää
            tekoälyn tuomia mahdollisuuksia.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 className="font-semibold text-blue-900 mb-2">Suomen toimenpiteet:</h4>
            <ul className="list-disc pl-4 text-blue-800 space-y-1">
              <li>Koulutuksen lisääminen tekoälyn käytöstä luovilla aloilla</li>
              <li>Tuki startup-yrityksille, jotka kehittävät luovia AI-sovelluksia</li>
              <li>Tutkimusrahoituksen kohdentaminen ihmisen ja tekoälyn yhteistyöhön</li>
              <li>Eettisten ohjeiden laatiminen tekoälyn käytölle taiteessa</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lopuksi: Luovuuden tulevaisuus</h2>

          <p className="mb-4">
            Tekoäly ei todennäköisesti korvaa ihmisen luovuutta, vaan muuttaa sen muotoa. Tulevaisuudessa menestyvät ne
            luovat ammattilaiset, jotka osaavat hyödyntää tekoälyä työkaluna säilyttäen samalla ainutlaatuisen
            inhimillisen näkemyksensä.
          </p>

          <p className="mb-6">
            Luovuuden arvo ei ole vain lopputuloksessa, vaan myös prosessissa, merkityksessä ja inhimillisessä
            kokemuksessa. Nämä elementit säilyvät ihmisen ainutlaatuisina ominaisuuksina tekoälyn aikakaudellakin.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Yhteenveto</h3>
            <p className="text-gray-700">
              Tekoäly muuttaa luovia aloja perusteellisesti, mutta ei korvaa ihmisen luovuutta. Sen sijaan se tarjoaa
              uusia työkaluja ja mahdollisuuksia. Menestys tulevaisuudessa vaatii tekoälyn ja ihmisen luovuuden
              yhteensovittamista, ei toisen korvaamista toisella.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Lue myös</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-lg leading-tight">
                    <Link href={article.href} className="hover:text-blue-600">
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Kysymyksiä tai kommentteja? Ota yhteyttä:{" "}
            <a href="mailto:info@bera-bridge.fi" className="text-blue-600 hover:underline">
              info@bera-bridge.fi
            </a>
          </p>
        </section>
      </article>
    </div>
  )
}
