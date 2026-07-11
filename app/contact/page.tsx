import { ArchiveEyebrow, ArchiveFooter, SiteHeader } from "@/components/site-chrome";

export const metadata = { title: "Rejoindre l’archive — ZION", description: "Contact, presse et registre ZION." };

export default function ContactPage() {
  return <main className="archive-page contact-page"><SiteHeader current="/contact" />
    <section className="contact-hero"><ArchiveEyebrow>REGISTRE / OUVERT</ArchiveEyebrow><h1>LAISSEZ<br />UNE <em>TRACE.</em></h1><p>Pour recevoir les prochains chapitres, parler d’un projet ou rejoindre la conversation autour de ZION.</p></section>
    <section className="contact-grid"><form action="mailto:contact@zion.archive" method="post" encType="text/plain"><p>CONTACTER L’ARCHIVE</p><label>VOTRE NOM<input name="name" autoComplete="name" required /></label><label>VOTRE E-MAIL<input name="email" type="email" autoComplete="email" required /></label><label>VOTRE MESSAGE<textarea name="message" rows={5} required /></label><button type="submit">ENVOYER LE MESSAGE <span>↗</span></button></form><aside><p>REGISTRE DES NOUVELLES</p><h2>RESTER<br />DANS<br /><em>LA BOUCLE.</em></h2><p>Pas de bruit. Seulement les nouveaux dossiers, les pièces et les moments qui comptent.</p><form action="mailto:contact@zion.archive" method="post" encType="text/plain"><label>VOTRE E-MAIL<input name="newsletter-email" type="email" autoComplete="email" required /></label><button type="submit">M’INSCRIRE →</button></form></aside></section>
    <ArchiveFooter />
  </main>;
}
