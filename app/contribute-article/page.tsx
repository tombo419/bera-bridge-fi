import { Metadata } from 'next'
import { Edit3, Mail, BookOpen, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contribute an Article | Bera Bridge',
  description: 'Share your expertise by contributing an article about gaming, technology, or digital culture to Bera Bridge.',
}

export default function ContributeArticlePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* English Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="text-center mb-8">
            <Edit3 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contribute an Article</h1>
            <p className="text-xl text-gray-600">
              Your voice matters - share your story with our readers
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              We believe in the power of diverse perspectives and unique insights. Whether you're a 
              researcher, industry professional, or passionate enthusiast, your article can make a 
              difference in our community's understanding of gaming, technology, and digital culture.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article Topics We Love</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <BookOpen className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Gaming & Esports</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Game reviews and analysis</li>
                  <li>• Esports tournament coverage</li>
                  <li>• Gaming culture and trends</li>
                  <li>• Game development insights</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <Target className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Technology & Digital Life</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tech innovation and trends</li>
                  <li>• Digital well-being</li>
                  <li>• Online safety and privacy</li>
                  <li>• Future of technology</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article Requirements</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Original content not published elsewhere</li>
              <li>800-2000 words in length</li>
              <li>Well-researched with credible sources</li>
              <li>Engaging and accessible writing style</li>
              <li>Relevant to our audience interests</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Happens Next?</h2>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Submit your article via email</li>
              <li>Our editorial team reviews your submission</li>
              <li>We'll contact you within 3-5 business days</li>
              <li>Work with our editors on any revisions</li>
              <li>See your article published and promoted</li>
            </ol>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Contribute?</h3>
              <p className="text-gray-700 mb-4">
                We're excited to read your article! Send us your submission today.
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Article Contribution"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Send Your Article to info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>

        {/* Finnish Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kirjoita artikkeli</h2>
            <p className="text-xl text-gray-600">
              Äänesi on tärkeä - jaa tarinasi lukijoidemme kanssa
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Uskomme monipuolisten näkökulmien ja ainutlaatuisten oivallusten voimaan. Olitpa sitten 
              tutkija, alan ammattilainen tai intohimoinen harrastaja, artikkelisi voi vaikuttaa 
              yhteisömme ymmärrykseen pelaamisesta, teknologiasta ja digitaalisesta kulttuurista.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Artikkeliaiheet joista pidämme</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <BookOpen className="w-10 h-10 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Pelaaminen & E-urheilu</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Peliarvostelut ja analyysit</li>
                  <li>• E-urheiluturnausten kattaus</li>
                  <li>• Pelikulttuuri ja trendit</li>
                  <li>• Pelikehityksen näkemykset</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <Target className="w-10 h-10 text-green-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Teknologia & Digitaalinen elämä</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Teknologiainnovaatiot ja trendit</li>
                  <li>• Digitaalinen hyvinvointi</li>
                  <li>• Verkkoturvallisuus ja yksityisyys</li>
                  <li>• Teknologian tulevaisuus</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Artikkelivaatimukset</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Alkuperäistä sisältöä, jota ei ole julkaistu muualla</li>
              <li>800-2000 sanaa pitkä</li>
              <li>Hyvin tutkittu luotettavilla lähteillä</li>
              <li>Mukaansatempaava ja helposti lähestyttävä kirjoitustyyli</li>
              <li>Oleellinen yleisömme kiinnostuksen kohteille</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mitä tapahtuu seuraavaksi?</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Lähetä artikkelisi sähköpostitse</li>
              <li>Toimitustiimimme arvioi lähetyksesi</li>
              <li>Otamme yhteyttä 3-5 arkipäivän sisällä</li>
              <li>Työskentele toimittajiemme kanssa mahdollisissa muokkauksissa</li>
              <li>Näe artikkelisi julkaistuna ja mainostettuna</li>
            </ol>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Valmis kirjoittamaan?</h3>
              <p className="text-gray-700 mb-4">
                Odotamme innolla artikkeliasi! Lähetä se meille tänään.
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Artikkelin lähetys"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Lähetä artikkelisi: info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}