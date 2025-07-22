import { Metadata } from 'next'
import { Handshake, Mail, Rocket, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partnership Opportunities | Bera Bridge',
  description: 'Explore partnership opportunities with Bera Bridge. Collaborate on gaming, technology, and digital culture initiatives.',
}

export default function PartnershipOpportunitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* English Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="text-center mb-8">
            <Handshake className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h1>
            <p className="text-xl text-gray-600">
              Let's create something amazing together
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              At Bera Bridge, we believe in the power of collaboration. We're always looking for 
              innovative partners who share our passion for gaming, technology, and digital culture. 
              Whether you're a brand, organization, or content creator, let's explore how we can 
              work together to create value for our communities.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Partnerships</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Rocket className="w-10 h-10 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Content Partnerships</h3>
                  <p className="text-gray-600">
                    Collaborate on exclusive content, co-create series, or exchange expertise to 
                    deliver unique value to our audiences
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="w-10 h-10 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Event Partnerships</h3>
                  <p className="text-gray-600">
                    Partner on gaming tournaments, tech conferences, or digital culture events to 
                    amplify reach and impact
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Partnership Benefits</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Expanded Reach:</strong> Access new audiences through cross-promotion and shared platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Shared Resources:</strong> Combine expertise and resources for greater impact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Innovation:</strong> Create unique content and experiences through collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Brand Alignment:</strong> Associate with trusted voices in gaming and technology</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ideal Partners</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Gaming companies and esports organizations</li>
              <li>Technology brands and startups</li>
              <li>Educational institutions and research organizations</li>
              <li>Media companies and content creators</li>
              <li>Digital wellness and safety advocates</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Partner</h2>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Reach out with your partnership idea or proposal</li>
              <li>We'll schedule a discussion to explore opportunities</li>
              <li>Together, we'll develop a partnership framework</li>
              <li>Launch and promote our collaboration</li>
              <li>Measure success and grow the partnership</li>
            </ol>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Let's Partner</h3>
              <p className="text-gray-700 mb-4">
                Have a partnership idea? We're excited to explore how we can work together to create amazing things.
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Partnership Opportunity"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Discuss partnership at info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>

        {/* Finnish Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kumppanuusmahdollisuudet</h2>
            <p className="text-xl text-gray-600">
              Luodaan jotain upeaa yhdessä
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Bera Bridgellä uskomme yhteistyön voimaan. Etsimme jatkuvasti innovatiivisia kumppaneita, 
              jotka jakavat intohimomme pelaamiseen, teknologiaan ja digitaaliseen kulttuuriin. 
              Olitpa brändi, organisaatio tai sisällöntuottaja, tutkitaan miten voimme työskennellä 
              yhdessä luodaksemme arvoa yhteisöillemme.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kumppanuustyypit</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Rocket className="w-10 h-10 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sisältökumppanuudet</h4>
                  <p className="text-gray-600">
                    Yhteistyö eksklusiivisen sisällön parissa, sarjojen yhteistuotanto tai 
                    asiantuntemuksen vaihto ainutlaatuisen arvon toimittamiseksi yleisöillemme
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="w-10 h-10 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tapahtumakumppanuudet</h4>
                  <p className="text-gray-600">
                    Kumppanuus peliturnausten, teknologiakonferenssien tai digitaalisen kulttuurin 
                    tapahtumien parissa tavoittavuuden ja vaikutuksen vahvistamiseksi
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kumppanuuden edut</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Laajennettu tavoittavuus:</strong> Pääsy uusiin yleisöihin ristiinmainonnan ja jaettujen alustojen kautta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Jaetut resurssit:</strong> Yhdistä asiantuntemus ja resurssit suuremman vaikutuksen saavuttamiseksi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Innovaatio:</strong> Luo ainutlaatuista sisältöä ja kokemuksia yhteistyön kautta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Brändin yhteensopivuus:</strong> Yhdisty luotettujen äänten kanssa pelaamisen ja teknologian alalla</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ideaalit kumppanit</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Peliyhtiöt ja e-urheiluorganisaatiot</li>
              <li>Teknologiabrändit ja startup-yritykset</li>
              <li>Oppilaitokset ja tutkimusorganisaatiot</li>
              <li>Mediayhtiöt ja sisällöntuottajat</li>
              <li>Digitaalisen hyvinvoinnin ja turvallisuuden puolestapuhujat</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Miten ryhtyä kumppaniksi</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Ota yhteyttä kumppanuusideallasi tai -ehdotuksellasi</li>
              <li>Sovimme keskustelun mahdollisuuksien tutkimiseksi</li>
              <li>Yhdessä kehitämme kumppanuuskehyksen</li>
              <li>Käynnistämme ja mainostamme yhteistyötämme</li>
              <li>Mittaamme menestystä ja kasvatamme kumppanuutta</li>
            </ol>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ryhdytään kumppaneiksi</h3>
              <p className="text-gray-700 mb-4">
                Onko sinulla kumppanuusidea? Olemme innoissamme tutkimaan, miten voimme työskennellä 
                yhdessä luodaksemme upeita asioita.
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Kumppanuusmahdollisuus"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Keskustele kumppanuudesta: info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}