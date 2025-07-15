export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Käyttöehdot</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Voimassa alkaen: 1.1.2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Yleistä</h2>
            <p className="text-gray-700 mb-6">
              Nämä käyttöehdot koskevat Bera Bridge -verkkosivuston (berabridge.fi) käyttöä. Käyttämällä sivustoa
              hyväksyt nämä ehdot kokonaisuudessaan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Sivuston käyttö</h2>
            <p className="text-gray-700 mb-6">Sivustoa saa käyttää vain laillisiin tarkoituksiin. Kiellettyä on:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Haitallisen koodin levittäminen</li>
              <li>Sivuston toiminnan häiritseminen</li>
              <li>Toisten käyttäjien häirintä</li>
              <li>Tekijänoikeuksien loukkaaminen</li>
              <li>Vihapuheen levittäminen</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Sisältö ja tekijänoikeudet</h2>
            <p className="text-gray-700 mb-6">
              Sivuston kaikki sisältö on Bera Bridge Oy:n omaisuutta tai käytössä asianmukaisten lisenssien perusteella.
              Sisällön kopiointi, jakelu tai muu käyttö ilman lupaa on kielletty.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Vastuunrajoitukset</h2>
            <p className="text-gray-700 mb-6">Bera Bridge ei vastaa:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Sivuston käytöstä aiheutuvista vahingoista</li>
              <li>Sisällön virheellisyydestä tai puutteellisuudesta</li>
              <li>Sivuston käyttökatkoksista</li>
              <li>Kolmansien osapuolten sisällöstä</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Muutokset ehtoihin</h2>
            <p className="text-gray-700 mb-6">
              Pidätämme oikeuden muuttaa näitä ehtoja milloin tahansa. Muutokset tulevat voimaan heti, kun ne
              julkaistaan sivustolla.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Sovellettava laki</h2>
            <p className="text-gray-700 mb-6">
              Näihin ehtoihin sovelletaan Suomen lakia. Mahdolliset riidat ratkaistaan Helsingin käräjäoikeudessa.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Yhteystiedot</h2>
            <p className="text-gray-700 mb-6">
              Kysymykset käyttöehdoista:
              <br />
              Sähköposti: info@berabridge.fi
              <br />
              Puhelin: +358 40 123 4567
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
