import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { extractTagsFromArticle } from "@/utils/tags"
import { ArticleTags } from "@/components/TagCloud"

export const metadata: Metadata = {
  title: "Mobiilipelien mikromaksut - milloin hauskanpito muuttuu ongelmaksi? | Bera Bridge",
  description:
    "Mobiilipelien mikromaksut voivat johtaa riippuvuuteen ja taloudellisiin ongelmiin. Tutkimme ilmiön psykologiaa ja riskejä.",
  keywords: "mobiilipelit, mikromaksut, peliriippuvuus, freemium, loot boxit",
}

export default function MobiilipelienMikromaksutOngelma() {
  const tags = extractTagsFromArticle("mobiilipelien-mikromaksut-ongelma", "Uutiset");
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-600 mb-4">
          <Link href="/" className="hover:text-blue-600">
            Etusivu
          </Link>
          <span className="mx-2">/</span>
          <Link href="/pelaaminen" className="hover:text-blue-600">
            Pelaaminen
          </Link>
          <span className="mx-2">/</span>
          <span>Mobiilipelien mikromaksut ongelma</span>
        </nav>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src="/mobile-game-microtransactions.svg"
              alt="Mobiilipelien mikromaksut"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Pelaaminen</span>
              <time>7. tammikuuta 2025</time>
              <span>Lukuaika: 7 min</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mobiilipelien mikromaksut - milloin hauskanpito muuttuu ongelmaksi?
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Mobiilipelit ovat muuttaneet pelaamisen maisemaa radikaalisti. Ilmaiset pelit houkuttelevat miljoonia
                pelaajia, mutta mikromaksujen psykologia voi johtaa vakaviin taloudellisiin ja henkisiin ongelmiin.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Freemium-mallin psykologia</h2>
              <p>
                Freemium-malli perustuu psykologisiin mekanismeihin, jotka saavat pelaajat maksamaan pienistä eduista
                pelissä. Aluksi peli on ilmainen ja hauska, mutta vähitellen edistyminen hidastuu ilman maksullisia
                päivityksiä.
              </p>

              <p>
                "Pelit on suunniteltu luomaan turhautumista juuri sopivassa määrin", selittää pelipsykologi Matti
                Kinnunen Helsingin yliopistosta. "Kun pelaaja on jo sijoittanut aikaa peliin, hän on alttiimpi maksamaan
                edistymisen nopeuttamisesta."
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Loot boxit ja uhkapelimekaniikka</h2>
              <p>
                Erityisen ongelmallisia ovat loot boxit eli "aarrelaatikot", jotka sisältävät satunnaisia palkintoja.
                Pelaaja maksaa todellista rahaa mahdollisuudesta saada harvinaisia esineitä, mutta lopputulos on täysin
                sattuman varassa.
              </p>

              <p>
                Belgia ja Alankomaat ovat luokitelleet loot boxit uhkapelaamiseksi, ja EU harkitsee laajempaa sääntelyä.
                Suomessa keskustelu on vasta alkamassa, vaikka ongelma koskettaa tuhansia suomalaisia.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Lasten erityinen haavoittuvuus</h2>
              <p>
                Lapset ja nuoret ovat erityisen alttiita mikromaksujen houkutuksille. Heidän impulssikontrollinsa on
                vielä kehittymässä, eivätkä he ymmärrä täysin rahan arvoa digitaalisessa ympäristössä.
              </p>

              <p>
                Kuluttaja-asiamies on saanut lukuisia valituksia vanhemmilta, joiden lapset ovat tehneet satoja tai jopa
                tuhansia euroja maksuja mobiilipeleissä. Ongelmaa pahentaa se, että maksut tapahtuvat usein vanhempien
                tietämättä.
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6">
                "12-vuotias poikani teki 800 euron edestä ostoksia Clash of Clans -pelissä viikossa. Huomasin asian
                vasta kun luottokorttilaskuni tuli." - Huolestuneen vanhemman kommentti
              </blockquote>

              <h2 className="text-2xl font-bold mt-8 mb-4">Riippuvuuden merkit</h2>
              <p>Mobiilipeliriippuvuus kehittyy usein huomaamatta. Varoittavia merkkejä ovat:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Jatkuva tarve tarkistaa peliä</li>
                <li>Rahankäytön lisääntyminen peleissä</li>
                <li>Ahdistus, kun ei voi pelata</li>
                <li>Sosiaalisten suhteiden laiminlyönti pelaamisen takia</li>
                <li>Valehteleminen pelaamiseen käytetystä ajasta tai rahasta</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Taloudelliset seuraukset</h2>
              <p>
                Mikromaksujen kumulatiivinen vaikutus voi olla tuhoisa. Vaikka yksittäinen osto on pieni, summa kasvaa
                nopeasti. Keskimääräinen "whale" eli suurkuluttaja käyttää mobiilipeleihin yli 1000 euroa vuodessa.
              </p>

              <p>
                Pahimmissa tapauksissa ihmiset ovat ottaneet lainaa pelatakseen tai jättäneet laskuja maksamatta.
                Peliriippuvuus voi johtaa velkakierteeseen ja perheiden hajoamiseen.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Peliyhtiöiden vastuu</h2>
              <p>
                Peliyhtiöt ovat alkaneet ottaa vastuuta ongelmasta. Apple ja Google ovat tiukentaneet sääntöjään, ja
                monet pelit tarjoavat nyt kulutusrajoja ja aikakatkoja.
              </p>

              <p>
                Supercell on ollut edelläkävijä vastuullisessa pelisuunnittelussa. Yhtiö on lisännyt peleihin
                ominaisuuksia, jotka auttavat pelaajia seuraamaan kulutustaan ja pitämään taukoja.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Sääntelyyn tarvetta</h2>
              <p>
                Asiantuntijat vaativat tiukempaa sääntelyä mobiilipelien mikromaksuille. Ehdotuksia ovat muun muassa:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Pakollinen ikärajamerkintä peleille, jotka sisältävät mikromaksuja</li>
                <li>Kuukausittaiset kulutusrajat</li>
                <li>Selkeämmät varoitukset rahankäytöstä</li>
                <li>Loot boxien kieltäminen tai uhkapeliluokitus</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Vinkkejä vastuulliseen pelaamiseen</h2>
              <p>Mobiilipelejä voi nauttia turvallisesti noudattamalla muutamia periaatteita:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Aseta kuukausittainen budjetti pelaamiselle</li>
                <li>Käytä prepaid-kortteja luottokorttien sijaan</li>
                <li>Ota säännöllisiä taukoja pelaamisesta</li>
                <li>Keskustele perheen kanssa pelikulutuksesta</li>
                <li>Hae apua, jos pelaaminen tuntuu hallitsemattomalta</li>
              </ul>

              <div className="bg-yellow-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Apua peliriippuvuuteen:</h3>
                <p>Jos pelaaminen aiheuttaa ongelmia, ota yhteyttä:</p>
                <ul className="mt-2 space-y-1">
                  <li>• Peluuri: peluuri.fi</li>
                  <li>• A-klinikkasäätiö: a-klinikka.fi</li>
                  <li>• Mielenterveystalo: mielenterveystalo.fi</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Lue myös:</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/suomen-peliteollisuus-kasvaa-ennatystahtia" className="text-blue-600 hover:underline">
                      Suomen peliteollisuus kasvaa ennätystahtia
                    </Link>
                  </li>
                  <li>
                    <Link href="/verkkopelaamisen-psykologia" className="text-blue-600 hover:underline">
                      Verkkopelaamisen psykologia
                    </Link>
                  </li>
                  <li>
                    <Link href="/digitaalinen-hyvinvointi-tutkimus" className="text-blue-600 hover:underline">
                      Digitaalinen hyvinvointi tutkimus
                    </Link>
                  </li>
                </ul>
              </div>
            
              <MoreFromCategory 
                currentArticleId="mobiilipelien-mikromaksut-ongelma"
                category="Uutiset"
                limit={4}
              />
              
                            
              <ArticleTags tags={tags} articleId="mobiilipelien-mikromaksut-ongelma" />
              <ArticleNavigation 
                currentArticleId="mobiilipelien-mikromaksut-ongelma"
                category="Uutiset"
              />
            
</div>
          </div>
        </article>
      </div>
    </div>
  )
}
