import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: 'Tietoa meistä | Bera Bridge Oy',
  description: 'Bera Bridge Oy on suomalainen digitaalisen median ja teknologian asiantuntijayritys.',
}

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tietoa Bera Bridge Oy:stä</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Olemme suomalainen digitaalisen median ja teknologian asiantuntijayritys, joka tuottaa laadukasta sisältöä 
            teknologiasta, pelaamisesta ja digitaalisesta kulttuurista kiinnostuneille.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-600" />
                Missiomme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Tehdä digitaalisesta maailmasta ymmärrettävämpi ja saavutettavampi kaikille. Tuomme esiin 
                teknologian mahdollisuudet ja haasteet tavalla, joka resonoi suomalaisten kanssa.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-600" />
                Visiomme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Olla Suomen johtava digitaalisen median toimija, joka yhdistää syvällisen asiantuntemuksen 
                ja helposti lähestyttävän sisällön tuottamisen.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Mitä teemme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Uutissisältö</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tuotamme päivittäin tuoreita uutisia teknologiasta, pelaamisesta ja digitaalisesta kulttuurista. 
                  Seuraamme alan kehitystä sekä Suomessa että maailmalla.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Analyysit ja tutkimukset</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Julkaisemme syväluotaavia analyysejä ja tutkimuksia digitaalisen maailman ilmiöistä. 
                  Autamme lukijoitamme ymmärtämään teknologian vaikutuksia yhteiskuntaan.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Oppaat ja neuvonta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tarjoamme käytännöllisiä oppaita ja neuvoja digitaalisen maailman haasteisiin. 
                  Autamme lukijoitamme hyödyntämään teknologiaa turvallisesti ja tehokkaasti.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Arvomme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Luotettavuus</h3>
              <p className="text-gray-600 text-sm">
                Tarkistamme faktat ja tuotamme luotettavaa sisältöä
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Yhteisöllisyys</h3>
              <p className="text-gray-600 text-sm">
                Rakennamme aktiivista yhteisöä lukijoidemme kanssa
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovatiivisuus</h3>
              <p className="text-gray-600 text-sm">
                Etsimme jatkuvasti uusia tapoja palvella lukijoitamme
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Vastuullisuus</h3>
              <p className="text-gray-600 text-sm">
                Kannamme vastuun sisällöstämme ja sen vaikutuksista
              </p>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Yritystiedot</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
            <div>
              <p className="font-semibold">Yrityksen nimi:</p>
              <p>Bera Bridge Oy</p>
            </div>
            <div>
              <p className="font-semibold">Y-tunnus:</p>
              <p>3520299-2</p>
            </div>
            <div>
              <p className="font-semibold">Kotipaikka:</p>
              <p>Helsinki, Suomi</p>
            </div>
            <div>
              <p className="font-semibold">Perustettu:</p>
              <p>2024</p>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Haluatko tietää lisää?</h2>
          <p className="text-lg mb-6">
            Ota meihin yhteyttä, jos sinulla on kysyttävää tai haluat tehdä yhteistyötä kanssamme.
          </p>
          <a
            href="/yhteystiedot"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Ota yhteyttä
          </a>
        </div>
      </div>
    </div>
  )
}