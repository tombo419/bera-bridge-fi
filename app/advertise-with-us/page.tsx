import { Metadata } from 'next'
import { Megaphone, Mail, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Advertise With Us | Bera Bridge',
  description: 'Reach engaged audiences interested in gaming and technology. Advertise on Bera Bridge for maximum impact.',
}

export default function AdvertiseWithUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* English Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="text-center mb-8">
            <Megaphone className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Advertise With Us</h1>
            <p className="text-xl text-gray-600">
              Connect with tech-savvy audiences and gaming enthusiasts
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Bera Bridge offers unique advertising opportunities to reach a highly engaged audience 
              interested in gaming, technology, and digital culture. Our readers are decision-makers, 
              early adopters, and influencers in their communities.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Advertise on Bera Bridge?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Users className="w-10 h-10 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Targeted Audience</h3>
                  <p className="text-gray-600">
                    Reach tech enthusiasts, gamers, and digital professionals who actively seek 
                    new products and services
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-10 h-10 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">High Engagement</h3>
                  <p className="text-gray-600">
                    Our readers spend significant time on our site, ensuring your message gets 
                    the attention it deserves
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Advertising Options</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Display Advertising</h3>
                <p className="text-gray-600">
                  Premium banner placements throughout our site with flexible sizing options and targeting capabilities
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Native Content</h3>
                <p className="text-gray-600">
                  Seamlessly integrated content that provides value to readers while promoting your brand
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Newsletter Sponsorship</h3>
                <p className="text-gray-600">
                  Reach our subscribers directly through sponsored sections in our regular newsletters
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Audience</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Tech-savvy professionals and enthusiasts</li>
              <li>Gaming community members and esports fans</li>
              <li>Early technology adopters</li>
              <li>Digital content creators and developers</li>
              <li>Decision-makers in tech and gaming industries</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Started Today</h3>
              <p className="text-gray-700 mb-4">
                Let's discuss how we can help you reach your marketing goals. Contact us for rates and availability.
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Advertising Inquiry"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Contact us at info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>

        {/* Finnish Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mainosta meillä</h2>
            <p className="text-xl text-gray-600">
              Tavoita teknologiatietoiset yleisöt ja pelialan harrastajat
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Bera Bridge tarjoaa ainutlaatuisia mainosmahdollisuuksia tavoittaaksesi erittäin 
              sitoutuneen yleisön, joka on kiinnostunut pelaamisesta, teknologiasta ja digitaalisesta 
              kulttuurista. Lukijamme ovat päätöksentekijöitä, varhaisia omaksujia ja vaikuttajia 
              yhteisöissään.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Miksi mainostaa Bera Bridgessä?</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Users className="w-10 h-10 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Kohdennettu yleisö</h4>
                  <p className="text-gray-600">
                    Tavoita teknologiaharrastajat, pelaajat ja digitaaliset ammattilaiset, jotka 
                    etsivät aktiivisesti uusia tuotteita ja palveluita
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-10 h-10 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Korkea sitoutuminen</h4>
                  <p className="text-gray-600">
                    Lukijamme viettävät merkittävän ajan sivustollamme, varmistaen että viestisi 
                    saa ansaitsemansa huomion
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mainosvaihtoehdot</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Display-mainonta</h4>
                <p className="text-gray-600">
                  Premium-banneripaikkoja sivustollamme joustavilla kokovalinnoilla ja kohdentamismahdollisuuksilla
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Natiivisisältö</h4>
                <p className="text-gray-600">
                  Saumattomasti integroitua sisältöä, joka tarjoaa arvoa lukijoille samalla kun edistää brändiäsi
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Uutiskirjeen sponsorointi</h4>
                <p className="text-gray-600">
                  Tavoita tilaajamme suoraan sponsoroiduilla osioilla säännöllisissä uutiskirjeissämme
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Yleisömme</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Teknologiatietoiset ammattilaiset ja harrastajat</li>
              <li>Peliyhteisön jäsenet ja e-urheilufanit</li>
              <li>Teknologian varhaiset omaksujat</li>
              <li>Digitaalisen sisällön tuottajat ja kehittäjät</li>
              <li>Päätöksentekijät teknologia- ja pelialalla</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aloita tänään</h3>
              <p className="text-gray-700 mb-4">
                Keskustellaan siitä, miten voimme auttaa sinua saavuttamaan markkinointitavoitteesi. 
                Ota yhteyttä hinnoista ja saatavuudesta.
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Mainostiedustelu"
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