import { Metadata } from 'next'
import { PenTool, Mail, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Write for Us | Bera Bridge',
  description: 'Share your expertise in gaming, technology, and digital culture. Write for Bera Bridge and reach our engaged audience.',
}

export default function WriteForUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* English Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="text-center mb-8">
            <PenTool className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Write for Us</h1>
            <p className="text-xl text-gray-600">
              Share your knowledge and insights with our community
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              We're always looking for talented writers and experts to contribute high-quality content 
              about gaming, technology, digital culture, and related topics. If you have unique insights, 
              research findings, or compelling stories to share, we'd love to hear from you.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We're Looking For</h2>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>In-depth articles about gaming trends and culture</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Technology news and analysis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Digital well-being and online safety topics</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Research and data-driven insights</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Expert opinions and thought leadership pieces</span>
              </li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Contribute?</h3>
              <p className="text-gray-700 mb-4">
                Send us your article ideas or drafts. We'll review your submission and get back to you promptly.
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Write for Us - Article Submission"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Contact Us at info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>

        {/* Finnish Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kirjoita meille</h2>
            <p className="text-xl text-gray-600">
              Jaa asiantuntemuksesi ja näkemyksesi yhteisömme kanssa
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Etsimme jatkuvasti lahjakkaita kirjoittajia ja asiantuntijoita tuottamaan laadukasta 
              sisältöä pelaamisesta, teknologiasta, digitaalisesta kulttuurista ja niihin liittyvistä 
              aiheista. Jos sinulla on ainutlaatuisia näkemyksiä, tutkimustuloksia tai kiinnostavia 
              tarinoita jaettavana, haluamme kuulla sinusta.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mitä etsimme</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Syväluotaavia artikkeleita pelitrendeistä ja -kulttuurista</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Teknologiauutisia ja analyyseja</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Digitaalisen hyvinvoinnin ja verkkoturvallisuuden aiheita</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Tutkimukseen ja dataan perustuvia näkemyksiä</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Asiantuntijamielipiteitä ja ajatusjohtajuutta</span>
              </li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Valmis kirjoittamaan?</h3>
              <p className="text-gray-700 mb-4">
                Lähetä meille artikkeliehdotuksesi tai valmiit tekstit. Käymme lähetykset läpi ja palaamme asiaan pikaisesti.
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Kirjoita meille - Artikkelin lähetys"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Ota yhteyttä: info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}