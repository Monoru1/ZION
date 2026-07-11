import Image from "next/image";
import Link from "next/link";
import { products } from "@/components/archive-data";
import { ArchiveEyebrow, ArchiveFooter, SiteHeader } from "@/components/site-chrome";

export const metadata = { title: "BUZZOFF — ZION", description: "Exhibit 001 de l’archive ZION." };

export default function BuzzoffPage() {
  const product = products[0];
  return <main className="archive-page piece-page"><SiteHeader current="/boutique" />
    <section className="piece-hero"><div><ArchiveEyebrow>{product.chapter}</ArchiveEyebrow><p className="piece-ref">PIÈCE À CONVICTION Nº 001 / {product.id}</p><h1>BUZZ<br /><em>OFF.</em></h1><p className="piece-intro">{product.description}</p><a href="mailto:contact@zion.archive?subject=Précommande%20BUZZOFF" className="solid-cta">DEMANDER L’ACCÈS <span>↗</span></a></div><div className="piece-image"><Image src={product.image} fill priority sizes="(max-width: 800px) 100vw, 50vw" alt="Tee-shirt ZION BUZZOFF, recto et verso sur fond écru." /></div></section>
    <section className="piece-report"><ArchiveEyebrow>RAPPORT DE PIÈCE / 001</ArchiveEyebrow><div className="spec-grid"><div><span>TYPE</span><b>TEE-SHIRT ARCHIVE</b></div><div><span>COULEUR</span><b>{product.colour}</b></div><div><span>ÉDITION</span><b>PREMIÈRE SÉRIE</b></div><div><span>STATUT</span><b>{product.status}</b></div></div><p>Le motif ne cherche pas à illustrer un débat. Il affirme une évidence : nos cheveux ne sont pas un défaut de présentation. Ils font partie de notre présence.</p></section>
    <section className="piece-next"><p>ARCHIVE 001 / ROOTS</p><h2>UNE PIÈCE.<br />UN <em>DOSSIER.</em><br />UNE TRACE.</h2><Link href="/manifesto">LIRE LE MANIFESTE →</Link></section>
    <ArchiveFooter />
  </main>;
}
