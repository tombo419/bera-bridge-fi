import { Metadata } from 'next'
import { UserPlus, Mail, Trophy, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Become a Contributor | Bera Bridge',
  description: 'Join our team of expert contributors. Write about gaming, technology, and digital culture for Bera Bridge.',
}

export default function BecomeContributorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* English Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="text-center mb-8">
            <UserPlus className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Become a Contributor</h1>
            <p className="text-xl text-gray-600">
              Join our community of expert writers and thought leaders
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Are you passionate about gaming, technology, or digital culture? Do you have unique insights 
              and expertise to share? We're looking for talented contributors to join our growing team 
              of writers at Bera Bridge.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Contribute to Bera Bridge?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Trophy className="w-8 h-8 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Build Your Portfolio</h3>
                  <p className="text-gray-600">
                    Showcase your writing skills and establish yourself as an expert in your field
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Sparkles className="w-8 h-8 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Reach New Audiences</h3>
                  <p className="text-gray-600">
                    Connect with thousands of readers interested in technology and gaming
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We're Looking For</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Deep knowledge in gaming, esports, technology, or digital culture</li>
              <li>Strong writing skills and ability to explain complex topics clearly</li>
              <li>Commitment to producing high-quality, original content</li>
              <li>Enthusiasm for staying current with industry trends</li>
              <li>Professional approach to deadlines and communication</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contributor Benefits</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Author profile and bio on our website</li>
              <li>Full credit and byline for all published articles</li>
              <li>Opportunity to cover major gaming and tech events</li>
              <li>Access to our editorial team for guidance and support</li>
              <li>Flexible writing schedule</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Your Journey</h3>
              <p className="text-gray-700 mb-4">
                Ready to become a Bera Bridge contributor? We'd love to hear from you!
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Become a Contributor Application"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Apply at info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>

        {/* Finnish Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ryhdy kirjoittajaksi</h2>
            <p className="text-xl text-gray-600">
              Liity asiantuntijakirjoittajien ja ajatusjohtajien yhteisöömme
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Oletko intohimoinen pelaamisesta, teknologiasta tai digitaalisesta kulttuurista? 
              Onko sinulla ainutlaatuisia näkemyksiä ja asiantuntemusta jaettavana? Etsimme 
              lahjakkaita kirjoittajia liittymään kasvavaan Bera Bridgen kirjoittajatiimiimme.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Miksi kirjoittaa Bera Bridgelle?</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Trophy className="w-8 h-8 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rakenna portfoliosi</h4>
                  <p className="text-gray-600">
                    Esittele kirjoitustaitojasi ja vakiinnuta asemasi alasi asiantuntijana
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Sparkles className="w-8 h-8 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tavoita uusia yleisöjä</h4>
                  <p className="text-gray-600">
                    Tavoita tuhansia teknologiasta ja pelaamisesta kiinnostuneita lukijoita
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mitä etsimme</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Syvällistä tietämystä pelaamisesta, e-urheilusta, teknologiasta tai digitaalisesta kulttuurista</li>
              <li>Vahvat kirjoitustaidot ja kyky selittää monimutkaisia aiheita selkeästi</li>
              <li>Sitoutuminen korkealaatuisen, alkuperäisen sisällön tuottamiseen</li>
              <li>Innostus pysyä ajan tasalla alan trendeistä</li>
              <li>Ammattimainen suhtautuminen aikatauluihin ja viestintään</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kirjoittajan edut</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Kirjoittajaprofiili ja esittely verkkosivuillamme</li>
              <li>Täysi tunnustus ja tekijämaininta kaikissa julkaistuissa artikkeleissa</li>
              <li>Mahdollisuus raportoida suurista peli- ja teknologiatapahtumista</li>
              <li>Pääsy toimitustiimimme ohjaukseen ja tukeen</li>
              <li>Joustava kirjoitusaikataulu</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aloita matkasi</h3>
              <p className="text-gray-700 mb-4">
                Valmis ryhtymään Bera Bridgen kirjoittajaksi? Haluamme kuulla sinusta!
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Kirjoittajaksi hakeminen"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Hae osoitteessa info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}