import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const allArticles = [
  {
    id: "verkkopelaamisen-psykologia",
    category: "Pelaaminen ja e-urheilu",
    title: "Verkkopelaamisen psykologia ja sosiaalinen vuorovaikutus",
    summary:
      "Tutkimus siitä, miten online-pelit muokkaavat sosiaalisia suhteita ja yhteisöllisyyttä digitaalisessa ympäristössä.",
    image: "/gaming-psychology.svg",
    date: "21.06.2025",
  },
  {
    id: "metaversumi-ja-identiteetti",
    category: "Virtuaalimaailmat ja metaversumi",
    title: "Identiteetin rakentaminen metaversumissa",
    summary: "Miten virtuaaliset maailmat mahdollistavat uudenlaisen identiteetin kokeilun ja ilmaisun.",
    image: "/virtual-worlds-metaverse.svg",
    date: "31.05.2025",
  },
  {
    id: "rahapelien-digitalisaatio",
    category: "Kasinokulttuuri ja kolikkopelit",
    title: "Rahapelien digitalisaatio ja uudet riskit",
    summary: "Digitaalisten rahapelien kehitys ja niiden vaikutukset pelaajien käyttäytymiseen.",
    image: "/digital-casino.svg",
    date: "28.05.2025",
  },
  {
    id: "sosiaalisen-median-riippuvuus",
    category: "Digitaalinen riski ja käyttäytyminen",
    title: "Sosiaalisen median riippuvuuden tunnusmerkit",
    summary: "Miten tunnistaa ja käsitellä digitaalista riippuvuutta ja sen vaikutuksia hyvinvointiin.",
    image: "/social-media-addiction.svg",
    date: "03.06.2025",
  },
  {
    id: "tekoaly-ja-peliteollisuus",
    category: "Ala ja teknologia",
    title: "Tekoälyn rooli peliteollisuuden tulevaisuudessa",
    summary: "Kuinka AI muuttaa pelien kehitystä, personointia ja pelaajien kokemuksia.",
    image: "/ai-gaming-technology.svg",
    date: "04.06.2025",
  },
  {
    id: "esports-urheilu",
    category: "Pelaaminen ja e-urheilu",
    title: "E-urheilu legitiminä urheilulajina",
    summary: "E-urheilun nousu ja sen hyväksyminen perinteisen urheilun rinnalla.",
    image: "/blog-placeholder.svg",
    date: "29.06.2025",
  },
]

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blogi</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tuoreimmat artikkelit digitaalisesta kulttuurista, pelaamisesta ja teknologian vaikutuksista yhteiskuntaan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allArticles.map((article) => (
            <Card key={article.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image src={article.image || "/blog-placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="text-sm font-medium text-blue-600 mb-2">{article.category}</div>
                <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                <CardDescription className="text-gray-600">{article.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/${article.id}`}>Lue lisää</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
