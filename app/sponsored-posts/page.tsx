import { Metadata } from 'next'
import { Badge, Mail, Star, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sponsored Posts | Bera Bridge',
  description: 'Create impactful sponsored content for gaming and technology audiences. Partner with Bera Bridge for authentic storytelling.',
}

export default function SponsoredPostsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* English Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="text-center mb-8">
            <Badge className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sponsored Posts</h1>
            <p className="text-xl text-gray-600">
              Tell your brand story through authentic, engaging content
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Sponsored posts on Bera Bridge offer a powerful way to connect with our audience through 
              high-quality, relevant content. We work with brands to create articles that provide real 
              value while showcasing products and services our readers care about.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Makes Our Sponsored Posts Different?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Star className="w-10 h-10 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality First</h3>
                  <p className="text-gray-600">
                    Every sponsored post meets our editorial standards, ensuring your message is 
                    delivered through compelling, well-crafted content
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="w-10 h-10 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Full Transparency</h3>
                  <p className="text-gray-600">
                    We clearly label sponsored content, building trust with our audience while 
                    ensuring your message reaches engaged readers
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sponsored Post Options</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Product Reviews</h3>
                <p className="text-gray-600">
                  In-depth, honest reviews of gaming hardware, software, and tech products that 
                  help readers make informed decisions
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Brand Stories</h3>
                <p className="text-gray-600">
                  Share your company's journey, mission, and innovations through engaging narratives 
                  that resonate with our tech-savvy audience
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Industry Insights</h3>
                <p className="text-gray-600">
                  Position your brand as a thought leader with expert articles on gaming trends, 
                  technology developments, and digital culture
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What's Included</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Professional content creation by our editorial team</li>
              <li>SEO optimization for maximum visibility</li>
              <li>Social media promotion across our channels</li>
              <li>Performance tracking and reporting</li>
              <li>Long-term content hosting on our platform</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Your Sponsored Post</h3>
              <p className="text-gray-700 mb-4">
                Let's work together to create content that engages and converts. Contact us to discuss your sponsored post.
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Sponsored Post Inquiry"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Get in touch at info@bera-bridge.fi
              </a>
            </div>
          </div>
        </div>

        {/* Finnish Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sponsoroidut artikkelit</h2>
            <p className="text-xl text-gray-600">
              Kerro brändisi tarina autenttisen, mukaansatempaavan sisällön kautta
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Sponsoroidut artikkelit Bera Bridgessä tarjoavat tehokkaan tavan yhdistää yleisömme 
              kanssa korkealaatuisen, relevantin sisällön kautta. Työskentelemme brändien kanssa 
              luodaksemme artikkeleita, jotka tarjoavat todellista arvoa samalla kun esittelevät 
              tuotteita ja palveluita, joista lukijamme välittävät.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mikä tekee sponsoroiduista artikkeleistamme erilaisia?</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Star className="w-10 h-10 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Laatu ensin</h4>
                  <p className="text-gray-600">
                    Jokainen sponsoroitu artikkeli täyttää toimitukselliset standardimme, varmistaen 
                    että viestisi toimitetaan mukaansatempaavan, hyvin laaditun sisällön kautta
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="w-10 h-10 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Täysi läpinäkyvyys</h4>
                  <p className="text-gray-600">
                    Merkitsemme sponsoroidun sisällön selkeästi, rakentaen luottamusta yleisömme 
                    kanssa samalla varmistaen, että viestisi tavoittaa sitoutuneet lukijat
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sponsoroitujen artikkelien vaihtoehdot</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Tuotearvostelut</h4>
                <p className="text-gray-600">
                  Syvälliset, rehelliset arvostelut pelilaitteista, ohjelmistoista ja teknologiatuotteista, 
                  jotka auttavat lukijoita tekemään tietoisia päätöksiä
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Bränditarinat</h4>
                <p className="text-gray-600">
                  Jaa yrityksesi matka, missio ja innovaatiot mukaansatempaavien kertomusten kautta, 
                  jotka resonoivat teknologiatietoisen yleisömme kanssa
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Alan näkemykset</h4>
                <p className="text-gray-600">
                  Asemoi brändisi ajatusjohtajaksi asiantuntija-artikkeleilla pelitrendeistä, 
                  teknologiakehityksestä ja digitaalisesta kulttuurista
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mitä sisältyy</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Ammattimainen sisällöntuotanto toimitustiimiltämme</li>
              <li>SEO-optimointi maksimaalista näkyvyyttä varten</li>
              <li>Sosiaalisen median promootio kanavissamme</li>
              <li>Suorituskyvyn seuranta ja raportointi</li>
              <li>Pitkäaikainen sisällön isännöinti alustallammme</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Luo sponsoroitu artikkelisi</h3>
              <p className="text-gray-700 mb-4">
                Työskennellään yhdessä luodaksemme sisältöä, joka sitouttaa ja konvertoi. 
                Ota yhteyttä keskustellaksesi sponsoroidusta artikkelistasi.
              </p>
              <a
                href="mailto:info@bera-bridge.fi?subject=Sponsoroidun artikkelin tiedustelu"
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