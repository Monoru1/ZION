import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const links = [
  { href: "/manifesto", label: "MANIFESTE" },
  { href: "/boutique", label: "L’ARCHIVE" },
  { href: "/a-propos", label: "À PROPOS" },
  { href: "/contact", label: "REJOINDRE" },
];

export function ArchiveMark() {
  return <Image src="/brand-icon" width={72} height={72} alt="ZION" className="archive-mark" />;
}

export function SiteHeader({ current }: { current?: string }) {
  return <header className="site-header">
    <Link href="/" className="site-wordmark" aria-label="Retour à l’accueil ZION"><ArchiveMark /><span>ZION</span></Link>
    <span className="site-file">DOSSIER Nº ZN–001 / 2026</span>
    <nav aria-label="Navigation principale">
      {links.map((link) => <Link href={link.href} key={link.href} aria-current={current === link.href ? "page" : undefined}>{link.label}</Link>)}
    </nav>
    <details className="mobile-nav">
      <summary aria-label="Ouvrir la navigation">INDEX</summary>
      <div>{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div>
    </details>
  </header>;
}

export function ArchiveFooter() {
  return <footer className="archive-footer">
    <div><ArchiveMark /><p>UNE ARCHIVE VIVANTE,<br />NÉE D’AFRIQUE,<br />DESTINÉE AU MONDE.</p></div>
    <nav aria-label="Liens de pied de page"><Link href="/manifesto">MANIFESTE</Link><Link href="/boutique">BOUTIQUE</Link><Link href="/contact">CONTACT</Link></nav>
    <small>© 2026 ZION. TOUS DROITS CONSERVÉS.</small>
  </footer>;
}

export function ArchiveEyebrow({ children }: { children: ReactNode }) {
  return <p className="archive-eyebrow"><span>{children}</span><i /></p>;
}
