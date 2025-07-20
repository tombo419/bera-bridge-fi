import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Bera Bridge</h3>
            <p className="text-gray-300 mb-4">
              Tutkimme digitaalisen kulttuurin, pelaamisen ja verkon riskien risteyskohtia. Tarjoamme syvällistä
              analyysia ja tutkimustietoa digitaalisen maailman ilmiöistä.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Mail className="h-5 w-5 text-blue-400" />
              <a
                href="mailto:info@bera-bridge.fi"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                itemProp="email"
              >
                info@bera-bridge.fi
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Pikalinkit</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/uutiset" className="text-gray-300 hover:text-white transition-colors">
                  Uutiset
                </Link>
              </li>
              <li>
                <Link href="/analyysit" className="text-gray-300 hover:text-white transition-colors">
                  Analyysit
                </Link>
              </li>
              <li>
                <Link href="/tutkimus" className="text-gray-300 hover:text-white transition-colors">
                  Tutkimus
                </Link>
              </li>
              <li>
                <Link href="/blogi" className="text-gray-300 hover:text-white transition-colors">
                  Blogi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Yhteystiedot</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a
                  href="mailto:info@bera-bridge.fi"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  itemProp="email"
                >
                  info@bera-bridge.fi
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Bera Bridge. Kaikki oikeudet pidätetään.
              <span className="ml-2">
                Ota yhteyttä:
                <a
                  href="mailto:info@bera-bridge.fi"
                  className="text-blue-400 hover:text-blue-300 ml-1"
                  itemProp="email"
                >
                  info@bera-bridge.fi
                </a>
              </span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/tietosuoja" className="text-gray-400 hover:text-white transition-colors">
                Tietosuoja
              </Link>
              <Link href="/kayttoehdot" className="text-gray-400 hover:text-white transition-colors">
                Käyttöehdot
              </Link>
              <Link href="/yhteystiedot" className="text-gray-400 hover:text-white transition-colors">
                Yhteystiedot
              </Link>
              <Link href="/tietoa-meista" className="text-gray-400 hover:text-white transition-colors">
                Tietoa meistä
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
