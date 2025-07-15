export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Tietosuojaseloste</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Päivitetty viimeksi: 1.1.2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Rekisterinpitäjä</h2>
            <p className="text-gray-700 mb-6">
              Bera Bridge Oy
              <br />
              Y-tunnus: 1234567-8
              <br />
              Osoite: Teknologiantie 1, 00100 Helsinki
              <br />
              Sähköposti: tietosuoja@berabridge.fi
              <br />
              Puhelin: +358 40 123 4567
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Henkilötietojen käsittelyn tarkoitus</h2>
            <p className="text-gray-700 mb-6">Käsittelemme henkilötietojasi seuraaviin tarkoituksiin:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Uutiskirjeen toimittaminen</li>
              <li>Verkkosivuston toiminnallisuuden varmistaminen</li>
              <li>Käyttäjäkokemuksen parantaminen</li>
              <li>Tilastotietojen kerääminen</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Käsiteltävät henkilötiedot</h2>
            <p className="text-gray-700 mb-6">Keräämme ja käsittelemme seuraavia henkilötietoja:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Sähköpostiosoite (uutiskirje)</li>
              <li>IP-osoite (analytiikka)</li>
              <li>Evästetiedot (käyttäjäkokemus)</li>
              <li>Sivuston käyttötiedot (analytiikka)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Henkilötietojen säilytysaika</h2>
            <p className="text-gray-700 mb-6">
              Säilytämme henkilötietojasi vain niin kauan kuin se on tarpeellista käsittelyn tarkoituksen kannalta:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Uutiskirjeen tilaus: kunnes tilaus peruutetaan</li>
              <li>Analytiikkatiedot: 26 kuukautta</li>
              <li>Evästetiedot: enintään 12 kuukautta</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Oikeutesi</h2>
            <p className="text-gray-700 mb-6">Sinulla on oikeus:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Saada tietoa henkilötietojesi käsittelystä</li>
              <li>Tarkastaa sinusta tallennetut tiedot</li>
              <li>Oikaista virheellisiä tietoja</li>
              <li>Poistaa henkilötietosi</li>
              <li>Rajoittaa käsittelyä</li>
              <li>Vastustaa käsittelyä</li>
              <li>Siirtää tietosi toiselle rekisterinpitäjälle</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Yhteystiedot</h2>
            <p className="text-gray-700 mb-6">
              Jos sinulla on kysymyksiä tietosuojasta, ota yhteyttä:
              <br />
              Sähköposti: tietosuoja@berabridge.fi
              <br />
              Puhelin: +358 40 123 4567
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
