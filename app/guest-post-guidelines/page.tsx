import { Metadata } from 'next'
import { FileText, Mail, AlertCircle, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Guest Post Guidelines | Bera Bridge',
  description: 'Learn how to submit guest posts to Bera Bridge. Our guidelines for gaming, technology, and digital culture content.',
}

export default function GuestPostGuidelinesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* English Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Guest Post Guidelines</h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about contributing to Bera Bridge
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              We welcome guest contributions from writers, researchers, and industry experts who share 
              our passion for gaming, technology, and digital culture. Follow these guidelines to ensure 
              your submission meets our standards.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content Requirements</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <strong>Original Content:</strong> All submissions must be 100% original and not published elsewhere
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <strong>Word Count:</strong> Articles should be between 800-2000 words
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <strong>Topics:</strong> Gaming, esports, technology trends, digital well-being, online safety, and related subjects
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <strong>Quality:</strong> Well-researched, factual, and engaging content with proper citations
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Submission Process</h2>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Send your article pitch or complete draft via email</li>
              <li>Include a brief author bio (50-100 words)</li>
              <li>Wait for our editorial team's response (typically 3-5 business days)</li>
              <li>Make any requested revisions</li>
              <li>Your article will be published once approved</li>
            </ol>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> We reserve the right to edit submissions for clarity, style, and length. 
                  All accepted content becomes property of Bera Bridge.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Your Guest Post</h3>
              <p className="text-gray-700 mb-4">
                Ready to share your expertise? Send us your article following these guidelines.
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Guest Post Submission"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Email us at info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>

        {/* Finnish Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vieraskirjoittajan ohjeet</h2>
            <p className="text-xl text-gray-600">
              Kaikki mitä sinun tarvitsee tietää Bera Bridgelle kirjoittamisesta
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Otamme mielellämme vastaan vieraskirjoituksia kirjoittajilta, tutkijoilta ja alan 
              asiantuntijoilta, jotka jakavat intohimomme pelaamiseen, teknologiaan ja digitaaliseen 
              kulttuuriin. Noudata näitä ohjeita varmistaaksesi, että lähetyksesi täyttää standardimme.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sisältövaatimukset</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <strong>Alkuperäinen sisältö:</strong> Kaikkien lähetysten tulee olla 100% alkuperäisiä eikä julkaistu muualla
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <strong>Sanamäärä:</strong> Artikkelien tulisi olla 800-2000 sanaa
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <strong>Aiheet:</strong> Pelaaminen, e-urheilu, teknologiatrendit, digitaalinen hyvinvointi, verkkoturvallisuus ja vastaavat aiheet
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <strong>Laatu:</strong> Hyvin tutkittua, faktoihin perustuvaa ja mukaansatempaavaa sisältöä asianmukaisilla lähdeviitteillä
                </div>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Lähetysprosessi</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Lähetä artikkeliehdotuksesi tai valmis tekstisi sähköpostitse</li>
              <li>Sisällytä lyhyt kirjoittajaesittely (50-100 sanaa)</li>
              <li>Odota toimituksemme vastausta (yleensä 3-5 arkipäivää)</li>
              <li>Tee mahdolliset pyydetyt muutokset</li>
              <li>Artikkelisi julkaistaan hyväksynnän jälkeen</li>
            </ol>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  <strong>Huomio:</strong> Pidätämme oikeuden muokata lähetyksiä selkeyden, tyylin ja pituuden vuoksi. 
                  Kaikki hyväksytty sisältö siirtyy Bera Bridge Oy:n omistukseen.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lähetä vieraskirjoituksesi</h3>
              <p className="text-gray-700 mb-4">
                Valmis jakamaan asiantuntemuksesi? Lähetä artikkelisi näiden ohjeiden mukaisesti.
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Vieraskirjoituksen lähetys"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Lähetä sähköpostia: info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}