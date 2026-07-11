import Link from "next/link";
import { ArchiveEyebrow, ArchiveFooter, SiteHeader } from "@/components/site-chrome";

export const metadata = { title: "Manifeste — ZION", description: "Le dossier vivant de ZION : cheveux, mémoire, transmission et confiance." };

export default function ManifestoPage() {
  return <main className="archive-page manifesto-page">
    <SiteHeader current="/manifesto" />
    <section className="manifesto-opening">
      <div className="page-kicker"><span>COMMUNIQUÉ Nº 001</span><span>À LIRE LENTEMENT</span></div>
      <ArchiveEyebrow>MANIFESTE / L’HISTOIRE</ArchiveEyebrow>
      <h1>CE QUE L’ON<br /><em>PORTE</em> NE S’EFFACE PAS.</h1>
      <p>Ce dossier commence là où beaucoup ont voulu nous faire croire que nos cheveux n’étaient qu’un détail.</p>
      <a href="#dossier" className="scroll-cue">LIRE LE DOSSIER <span>↓</span></a>
    </section>

    <section className="exhibit-002" aria-labelledby="exhibit-title">
      <div className="exhibit-number">ARCHIVE<br />002</div>
      <div className="exhibit-image-wrap">
        <img src="/archive-002-v2" alt="Vue de dessus : des tresses forment les mots THERE’S ZION sur le crâne d’une personne portant un vêtement bordeaux." className="exhibit-image" />
        <span className="exhibit-caption">THERE’S ZION / 2026</span>
      </div>
      <div className="exhibit-copy"><p>PIÈCE DOCUMENTAIRE Nº 002</p><h2 id="exhibit-title">THERE’S<br /><em>ZION.</em></h2><p>Dans chaque geste, dans chaque tresse, il y a une langue. Une façon de dire : nous sommes là.</p></div>
    </section>

    <article id="dossier" className="longform">
      <ArchiveEyebrow>DOSSIER / À CONSERVER</ArchiveEyebrow>
      <div className="longform-lede"><p className="margin-note">OBJET D’ÉTUDE<br />CHEVEUX / MÉMOIRE / ESTIME</p><h2>LES CHEVEUX N’ONT JAMAIS ÉTÉ UNE QUESTION DE TENDANCE.</h2><p>Ils sont une architecture intime : une façon de se reconnaître, de se préparer, de se transmettre une présence.</p></div>
      <div className="longform-grid">
        <div><span>01 / LA MÉMOIRE</span><h3>Nos têtes ont toujours parlé.</h3><p>Bien avant que le monde extérieur tente de nous uniformiser, les coiffures disaient l’âge, l’appartenance, la célébration, la patience et le lien. Elles gardaient la trace des mains qui coiffent, des voix qui conseillent, des familles qui prennent le temps.</p></div>
        <div><span>02 / LA RUPTURE</span><h3>Certains codes ont voulu nous faire taire.</h3><p>À l’école, au travail, dans les institutions, nos cheveux ont parfois été traités comme un problème à corriger. Pas parce qu’ils manquaient de beauté, mais parce qu’ils rappelaient que l’identité ne se plie pas toujours aux mêmes règles.</p></div>
        <div><span>03 / LE GESTE</span><h3>Nous choisissons de les porter entiers.</h3><p>ZION n’est pas une colère mise en vitrine. C’est une décision précise : redonner de la valeur à ce qui a été diminué, et créer des objets qui le portent avec calme, beauté et exigence.</p></div>
      </div>
      <blockquote>« Nous ne créons pas pour expliquer l’Afrique au monde.<br />Nous créons depuis elle. »</blockquote>
      <div className="closing-note"><p>Ce n’est pas un retour en arrière. C’est une manière d’avancer sans laisser une partie de soi à la porte.</p><Link href="/boutique">CONSULTER L’ARCHIVE DES PIÈCES <span>↗</span></Link></div>
    </article>
    <ArchiveFooter />
  </main>;
}
