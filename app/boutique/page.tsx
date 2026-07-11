import Image from "next/image";
import Link from "next/link";
import { products } from "@/components/archive-data";
import { ArchiveEyebrow, ArchiveFooter, SiteHeader } from "@/components/site-chrome";

export const metadata = { title: "L’Archive des pièces — ZION", description: "Les pièces physiques de l’archive vivante ZION." };

export default function BoutiquePage() {
  return <main className="archive-page boutique-page"><SiteHeader current="/boutique" />
    <section className="catalogue-hero"><ArchiveEyebrow>L’ARCHIVE DES PIÈCES</ArchiveEyebrow><h1>OBJETS<br />À <em>PORTER.</em></h1><p>Chaque pièce est un chapitre. Chaque chapitre est numéroté, conservé, transmis.</p></section>
    <section className="catalogue" aria-label="Catalogue des pièces">
      <div className="catalogue-meta"><span>CATALOGUE / 001</span><span>1 PIÈCE DISPONIBLE</span><span>ARCHIVE OUVERTE</span></div>
      <div className="product-grid">{products.map((product) => <Link href={"/boutique/" + product.slug} className="product-card" key={product.id}><div className="product-art"><Image src={product.image} fill sizes="(max-width: 800px) 100vw, 52vw" alt={"Tee-shirt " + product.name + ", recto et verso"} /></div><div className="product-info"><span>{product.id}</span><h2>{product.name}</h2><p>{product.chapter}</p><b>{product.status} <i>↗</i></b></div></Link>)}</div>
    </section>
    <section className="catalogue-closed"><span>ARCHIVE 002 / EN PRÉPARATION</span><h2>LA SUITE<br />S’ÉCRIT<br /><em>MAINTENANT.</em></h2><p>Le registre reste ouvert. Les prochaines pièces ne seront pas annoncées par hasard.</p><Link href="/contact">REJOINDRE LE REGISTRE →</Link></section>
    <ArchiveFooter />
  </main>;
}
