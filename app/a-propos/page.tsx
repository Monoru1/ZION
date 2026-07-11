import Link from "next/link";
import { ArchiveEyebrow, ArchiveFooter, SiteHeader } from "@/components/site-chrome";

export const metadata = { title: "À propos — ZION", description: "Pourquoi ZION existe et ce que l’archive choisit de transmettre." };

export default function AboutPage() {
  return <main className="archive-page about-page"><SiteHeader current="/a-propos" />
    <section className="about-hero"><ArchiveEyebrow>À PROPOS / DOSSIER OUVERT</ArchiveEyebrow><h1>UNE MARQUE<br />NE SUFFIT<br /><em>PAS.</em></h1><p>ZION est un projet culturel qui choisit le vêtement comme support, l’archive comme méthode et la transmission comme horizon.</p></section>
    <section className="about-statement"><p className="margin-note">NOTE DES FONDATEURS<br />2026 / EN COURS</p><h2>NOUS VOULIONS CRÉER DES PIÈCES QUI NE DEMANDENT PAS À ÊTRE EXPLIQUÉES POUR ÊTRE RESSENTIES.</h2><p>Alors nous avons commencé par ce qui nous suit depuis toujours : les racines, les gestes, les détails que personne ne peut nous retirer. ZION construit un espace où l’héritage est traité avec l’exigence d’un futur.</p></section>
    <section className="about-principles"><div><span>01</span><h3>RESTER JUSTE</h3><p>Pas de folklore prêt-à-porter. Pas de slogan vidé de sa matière. Chaque image et chaque mot doivent avoir une raison d’exister.</p></div><div><span>02</span><h3>FAIRE DURER</h3><p>Créer des formes qui ne dépendent pas d’un moment de mode. Des pièces que l’on garde parce qu’elles continuent de raconter.</p></div><div><span>03</span><h3>AVANCER ENSEMBLE</h3><p>Une archive vivante ne se ferme pas sur elle-même. Elle grandit avec celles et ceux qui y reconnaissent une part d’eux-mêmes.</p></div></section>
    <section className="about-join"><span>LE DOSSIER RESTE OUVERT.</span><h2>IL Y A DE LA PLACE<br />DANS <em>L’ARCHIVE.</em></h2><Link href="/contact">REJOINDRE ZION →</Link></section>
    <ArchiveFooter />
  </main>;
}
