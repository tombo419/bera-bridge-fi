import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: 'Yhteystiedot | Bera Bridge Oy',
  description: 'Ota yhteyttä Bera Bridge Oy:hyn. Vastaamme mielellämme kysymyksiisi.',
}

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Yhteystiedot</h1>
          <p className="text-lg text-gray-600">Ota yhteyttä - vastaamme mielellämme kysymyksiisi</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Yhteystiedot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Yleinen</p>
                    <p className="text-gray-600">info@bera-bridge.fi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Toimituksellinen yhteistyö</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Oletko kiinnostunut kirjoittamaan meille artikkelin tai ehdottamaan uutisaihetta? Otamme mielellämme
                  vastaan ehdotuksia ja yhteistyöideoita.
                </p>
                <Button asChild>
                  <a href="mailto:info@bera-bridge.fi">Ota yhteyttä toimitukseen</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Lähetä viesti</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nimi *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Sähköposti *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Aihe *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Viesti *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Lähetä viesti
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">Tutkimusyhteistyö</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-sm mb-3">Oletko tutkija tai asiantuntija? Haluamme kuulla sinusta!</p>
              <Button size="sm" variant="outline" asChild>
                <a href="mailto:info@bera-bridge.fi">info@bera-bridge.fi</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-lg text-green-900">Lehdistö</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 text-sm mb-3">Lehdistötiedustelut ja haastattelupyynnöt</p>
              <Button size="sm" variant="outline" asChild>
                <a href="mailto:info@bera-bridge.fi">info@bera-bridge.fi</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-lg text-purple-900">Tekninen tuki</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 text-sm mb-3">Sivuston teknisiä ongelmia tai palautetta</p>
              <Button size="sm" variant="outline" asChild>
                <a href="mailto:info@bera-bridge.fi">info@bera-bridge.fi</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
