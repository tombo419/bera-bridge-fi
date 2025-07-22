import { Metadata } from 'next'
import { Send, Mail, FileEdit, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Submit a Guest Post | Bera Bridge',
  description: 'Submit your guest post about gaming, technology, or digital culture to Bera Bridge. Quick and easy submission process.',
}

export default function SubmitGuestPostPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* English Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="text-center mb-8">
            <Send className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Submit a Guest Post</h1>
            <p className="text-xl text-gray-600">
              Share your insights with thousands of readers
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Have a great article about gaming, technology, or digital culture? We're excited to read it! 
              Bera Bridge provides a platform for thought leaders, researchers, and enthusiasts to share 
              their knowledge with our engaged community.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileEdit className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Content</h3>
                <p className="text-sm text-gray-600">
                  We publish well-researched, original articles that provide value to our readers
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fast Review</h3>
                <p className="text-sm text-gray-600">
                  Our editorial team reviews submissions quickly, typically within 3-5 business days
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Wide Reach</h3>
                <p className="text-sm text-gray-600">
                  Your content will reach our growing audience interested in tech and gaming
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Submit</h2>
            <p className="mb-4">
              Simply send us your article or pitch via email. Include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Your article (Word document or Google Doc link preferred)</li>
              <li>A compelling headline</li>
              <li>Your author bio (50-100 words)</li>
              <li>Any relevant images or graphics</li>
              <li>Your contact information</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Your Post Now</h3>
              <p className="text-gray-700 mb-4">
                Don't wait - share your expertise with our community today!
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Guest Post Submission"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Submit to info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>

        {/* Finnish Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lähetä vieraskirjoitus</h2>
            <p className="text-xl text-gray-600">
              Jaa näkemyksesi tuhansille lukijoille
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Onko sinulla loistava artikkeli pelaamisesta, teknologiasta tai digitaalisesta kulttuurista? 
              Odotamme innolla sen lukemista! Bera Bridge tarjoaa alustan ajatusjohtajille, tutkijoille 
              ja harrastajille jakaa tietämyksensä sitoutuneen yhteisömme kanssa.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileEdit className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Laadukas sisältö</h3>
                <p className="text-sm text-gray-600">
                  Julkaisemme hyvin tutkittuja, alkuperäisiä artikkeleita, jotka tuovat arvoa lukijoillemme
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Nopea arviointi</h3>
                <p className="text-sm text-gray-600">
                  Toimituksemme arvioi lähetykset nopeasti, yleensä 3-5 arkipäivän sisällä
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Laaja tavoittavuus</h3>
                <p className="text-sm text-gray-600">
                  Sisältösi tavoittaa kasvavan teknologiasta ja pelaamisesta kiinnostuneen yleisömme
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Miten lähetät</h3>
            <p className="mb-4">
              Lähetä vain artikkelisi tai ideasi sähköpostitse. Sisällytä:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Artikkelisi (Word-dokumentti tai Google Docs -linkki suositeltava)</li>
              <li>Kiinnostava otsikko</li>
              <li>Kirjoittajaesittelysi (50-100 sanaa)</li>
              <li>Mahdolliset kuvat tai grafiikat</li>
              <li>Yhteystietosi</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lähetä kirjoituksesi nyt</h3>
              <p className="text-gray-700 mb-4">
                Älä odota - jaa asiantuntemuksesi yhteisömme kanssa jo tänään!
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Vieraskirjoituksen lähetys"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Lähetä osoitteeseen info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}