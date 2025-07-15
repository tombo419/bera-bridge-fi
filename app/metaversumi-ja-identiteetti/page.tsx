import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const relatedArticles = [
  {
    id: "verkkopelaamisen-psykologia",
    title: "Verkkopelaamisen psykologia ja sosiaalinen vuorovaikutus",
    category: "Pelaaminen ja e-urheilu",
  },
  {
    id: "tekoaly-ja-peliteollisuus",
    title: "Tekoälyn rooli peliteollisuuden tulevaisuudessa",
    category: "Teknologia",
  },
  {
    id: "sosiaalisen-median-riippuvuus",
    title: "Sosiaalisen median riippuvuuden tunnusmerkit",
    category: "Digitaalinen riski",
  },
]

export default function MetaverseArticle() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
                <span className="text-sm font-medium text-blue-600">Virtuaalimaailmat ja metaversumi</span>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Identiteetin rakentaminen metaversumissa</h1>
                <p className="text-gray-600">Julkaistu 08.06.2025</p>
              </div>

              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/metaverse-identity.svg"
                  alt="Metaversumi ja identiteetti"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  Metaversumi tarjoaa ennennäkemättömät mahdollisuudet identiteetin kokeilulle ja ilmaisulle.
                  Virtuaaliset maailmat antavat käyttäjille vapauden luoda ja muokata digitaalisia minäkuvia tavalla,
                  joka ei ole mahdollista fyysisessä maailmassa.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Avatarin merkitys identiteetille</h2>

                <p className="text-gray-700 mb-6">
                  Avatar toimii käyttäjän digitaalisena ruumiina virtuaalimaailmassa. Se ei ole pelkästään ulkoinen
                  esitys vaan syvä ilmaisu siitä, miten käyttäjä haluaa nähdä itsensä ja tulla nähdyksi. Avatarin
                  luominen on identiteettityötä, jossa fyysisen maailman rajoitukset häviävät.
                </p>

                <p className="text-gray-700 mb-6">
                  Tutkimukset osoittavat, että ihmiset voivat kokea syvää emotionaalista yhteyttä avatariinsa. Tämä
                  ilmiö, jota kutsutaan "Proteus-efektiksi", voi vaikuttaa käyttäjän käyttäytymiseen sekä virtuaalisessa
                  että fyysisessä maailmassa.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sosiaalinen hyväksyntä ja yhteisöt</h2>

                <p className="text-gray-700 mb-6">
                  Metaversumit luovat uudenlaisia yhteisöjä, joissa identiteetti rakentuu vuorovaikutuksessa muiden
                  kanssa. Nämä digitaaliset yhteisöt voivat tarjota turvallisen tilan identiteetin kokeilulle,
                  erityisesti niille, jotka kokevat haasteita identiteettinsä ilmaisussa fyysisessä maailmassa.
                </p>

                <p className="text-gray-700 mb-6">
                  Virtuaalimaailmojen normit ja kulttuurit muovaavat sitä, miten identiteettiä ilmaistaan. Joissakin
                  ympäristöissä korostuu luovuus ja fantasiaelementit, kun taas toisissa pyritään realistisempaan
                  esitykseen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Haasteet ja eettiset kysymykset</h2>

                <p className="text-gray-700 mb-6">
                  Metaversumien identiteettipolitiikka nostaa esiin tärkeitä kysymyksia. Miten varmistetaan, että
                  kaikilla on yhtäläiset mahdollisuudet identiteetin ilmaisuun? Entä milloin virtuaalinen identiteetti
                  voi muuttua haitalliseksi käyttäjän hyvinvoinnille?
                </p>

                <p className="text-gray-700 mb-6">
                  On tärkeää kehittää eettisiä ohjeistoja ja tukirakenteita, jotka mahdollistavat turvallisen
                  identiteetin kokeilun virtuaalimaailmoissa samalla kun suojellaan käyttäjien hyvinvointia ja
                  yksityisyyttä.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Aiheeseen liittyvät artikkelit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatedArticles.map((article) => (
                    <div key={article.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <Link href={`/${article.id}`} className="block hover:text-blue-600 transition-colors">
                        <h3 className="font-medium text-gray-900 mb-1">{article.title}</h3>
                        <p className="text-sm text-gray-600">{article.category}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
