"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const reveal = { initial: { opacity: 0, y: 34 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .22 }, transition: { duration: .75, ease: [0.22, 1, 0.36, 1] as const } };

function Mark({ className = "" }: { className?: string }) {
  return <Image src="/zion-mark.jpg" width={2560} height={2560} alt="ZION" className={className} priority />;
}

function RuleLabel({ children }: { children: React.ReactNode }) {
  return <div className="rule-label"><span>{children}</span><i /></div>;
}

function Star() {
  return <svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 3 61 37 97 27 68 50 92 79 58 66 50 98 41 66 8 80 32 51 4 28 39 37Z" /></svg>;
}

export function ArchiveExperience() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: .001 });
  const [menu, setMenu] = useState(false);
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    document.body.style.overflow = intro ? "hidden" : "";
    const timer = window.setTimeout(() => setIntro(false), 5200);
    return () => { window.clearTimeout(timer); document.body.style.overflow = ""; };
  }, [intro]);
  return <main>
    <AnimatePresence>
      {intro && <motion.div className="intro" exit={{ y: "-100%" }} transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}>
        <div className="intro-top"><span>ZN / TRANSMISSION 001</span><button onClick={() => setIntro(false)}>PASSER</button></div>
        <motion.div className="intro-mark" initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1 }}><Image src="/brand-icon" width={512} height={512} alt="ZION" priority /></motion.div>
        <div className="intro-copy" aria-label="Welcome to Zion">
          <div className="intro-line"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: .8, duration: .85, ease: [0.22,1,0.36,1] }}>WELCOME</motion.span></div>
          <div className="intro-line"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 1.05, duration: .85, ease: [0.22,1,0.36,1] }}>TO ZION.</motion.span></div>
        </div>
        <div className="intro-progress"><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 4.4, ease: "linear" }} /></div>
        <div className="intro-foot"><span>UNE ARCHIVE VIVANTE</span><span>NÉE D’AFRIQUE · DESTINÉE AU MONDE</span></div>
      </motion.div>}
    </AnimatePresence>
    <motion.div className="progress" style={{ scaleX }} />
    <header className="nav">
      <a href="#top" className="brand"><Mark /><span>ZION</span></a>
      <div className="file-id">DOSSIER Nº ZN–001 / 2026</div>
      <nav className={menu ? "open" : ""}>
        <a href="/manifesto" onClick={() => setMenu(false)}>L’HISTOIRE</a>
        <a href="/boutique" onClick={() => setMenu(false)}>L’ARCHIVE</a>
        <a href="/boutique/buzzoff" onClick={() => setMenu(false)}>LA PIÈCE</a>
      </nav>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? "FERMER" : "INDEX"}</button>
    </header>

    <section id="top" className="hero">
      <div className="hero-meta"><span>ARCHIVE VIVANTE</span><span>AFRIQUE / MONDE</span><span>ÉDITION 001</span></div>
      <motion.div className="hero-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <span>CE QUE NOUS</span><br/><span className="indent">PORTONS</span><br/><em>NOUS</em><span>RACONTE.</span>
      </motion.div>
      <div className="hero-bottom">
        <p>ZION documente ce qui nous a été transmis.<br/>La mémoire devient matière. Le vêtement devient archive.</p>
        <a href="#story" className="round-link" aria-label="Ouvrir le dossier"><span>OUVRIR<br/>LE DOSSIER</span>↓</a>
      </div>
      <div className="hero-stamp">CLASSÉ<br/><b>VIVANT</b><small>11·07·26</small></div>
      <div className="hero-star"><Star /></div>
    </section>

    <section id="story" className="story paper-section">
      <RuleLabel>NOTE D’OUVERTURE / 001</RuleLabel>
      <motion.div className="statement" {...reveal}>
        <p className="side-note">OBJET<br/>IDENTITÉ & TRANSMISSION</p>
        <h2>Avant d’être un style,<br/>nos cheveux sont une <em>mémoire.</em></h2>
        <p className="lead">Ils racontent les gestes appris, les mains de nos proches, les matins d’enfance et les codes transmis sans discours.</p>
      </motion.div>
      <div className="evidence-grid">
        <motion.article {...reveal}><span>01</span><h3>IDENTITÉ</h3><p>Une façon d’habiter son visage, son corps et son histoire sans demander la permission.</p></motion.article>
        <motion.article {...reveal}><span>02</span><h3>TRANSMISSION</h3><p>Des gestes, des formes et des savoirs passés d’une génération à la suivante.</p></motion.article>
        <motion.article {...reveal}><span>03</span><h3>CONFIANCE</h3><p>Se reconnaître pleinement. Porter ce que l’on est avec calme, précision et fierté.</p></motion.article>
      </div>
    </section>

    <section className="black-section">
      <div className="black-index">ZION / RAPPORT D’INTENTION</div>
      <motion.div className="black-copy" {...reveal}>
        <span>NOUS NE CRÉONS PAS</span>
        <h2>POUR EXPLIQUER<br/>L’AFRIQUE AU MONDE.</h2>
        <p>Nous créons depuis elle.<br/>Avec ce qu’elle nous a donné.<br/>Et avec ce que nous choisissons d’en faire.</p>
      </motion.div>
      <div className="seal"><Mark /><span>DOCUMENT<br/>AUTHENTIQUE</span></div>
    </section>

    <section id="archive" className="archive paper-section">
      <RuleLabel>ARCHIVE 001 / ROOTS</RuleLabel>
      <motion.div className="archive-head" {...reveal}>
        <div><span>PREMIER CHAPITRE</span><h2>ROOTS</h2></div>
        <p>Une étude visuelle sur les cheveux noirs comme territoire d’identité, de transmission et d’estime de soi.</p>
      </motion.div>
      <div className="archive-card">
        <div className="card-code">ZN–A001<br/>PIÈCE Nº 01</div>
        <div className="card-visual"><div className="crosshair"/><Image src="/buzzoff-product.png" width={960} height={2079} alt="Tee-shirt BUZZOFF, recto et verso" /></div>
        <div className="card-copy"><span>PIÈCE À CONVICTION Nº 001</span><h3>BUZZOFF</h3><p>Une réponse calme à tout ce qui cherche encore à définir nos cheveux à notre place.</p><dl><div><dt>TYPE</dt><dd>Tee-shirt archive</dd></div><div><dt>COULEUR</dt><dd>Papier écru</dd></div><div><dt>ÉDITION</dt><dd>Première série</dd></div></dl></div>
      </div>
    </section>

    <section id="piece" className="product">
      <div className="product-copy">
        <RuleLabel>EXHIBIT 001 / BUZZOFF</RuleLabel>
        <motion.div {...reveal}><span className="eyebrow">ARCHIVE 001 — ROOTS</span><h2>BUZZ<br/><em>OFF.</em></h2><p>La discrimination capillaire existe encore. Cette pièce ne demande pas l’acceptation. Elle affirme la valeur, la beauté et la mémoire de nos cheveux.</p></motion.div>
        <div className="buy-row"><a href="mailto:contact@zion.archive?subject=Précommande BUZZOFF">DEMANDER L’ACCÈS <span>↗</span></a><small>PRÉCOMMANDE<br/>OUVERTURE PROCHAINE</small></div>
      </div>
      <div className="product-image"><Image src="/buzzoff-product.png" width={960} height={2079} alt="BUZZOFF — vue du produit" /><div className="number">001</div></div>
    </section>

    <section className="manifesto paper-section">
      <RuleLabel>MANIFESTE / À CONSERVER</RuleLabel>
      <motion.div {...reveal}><p>NOUS AVONS HÉRITÉ D’UNE HISTOIRE.</p><h2>NOUS CHOISISSONS<br/>CE QU’ELLE DEVIENT.</h2></motion.div>
      <div className="manifesto-foot"><span>ZION N’EST PAS UN RETOUR EN ARRIÈRE.</span><span>C’EST UNE MANIÈRE D’AVANCER ENTIÈREMENT.</span></div>
    </section>

    <section className="archive-two-link">
      <div className="archive-two-image"><img src="/archive-002" alt="Des tresses écrivent THERE’S ZION sur un crâne vu de dessus." /></div>
      <div><span>ARCHIVE 002 / PIÈCE DOCUMENTAIRE</span><h2>THERE’S<br /><em>ZION.</em></h2><p>Ce qui a été transmis ne disparaît pas. Il trouve une autre manière de parler.</p><a href="/manifesto">OUVRIR LE DOSSIER →</a></div>
    </section>

    <section className="arrival">
      <div className="arrival-meta"><span>COMMUNIQUÉ Nº 001</span><span>11 / 07 / 2026</span><span>DIFFUSION MONDIALE</span></div>
      <motion.div className="arrival-copy" {...reveal}>
        <p>NOUS N’ARRIVONS PAS POUR SUIVRE UNE ÉPOQUE.</p>
        <h2><span>ZION</span><br/>IS COMING.</h2>
        <p className="arrival-note">Nous arrivons pour laisser une trace.<br/>Pour porter ce qui nous précède vers ce qui vient.</p>
      </motion.div>
      <div className="arrival-tape"><span>WELCOME TO ZION</span><span>ARCHIVE 001</span><span>COMING SOON</span><span>WELCOME TO ZION</span></div>
    </section>

    <section className="community">
      <div className="community-star"><Star /></div>
      <motion.div {...reveal}><span>COMMUNAUTÉ / REGISTRE OUVERT</span><h2>ENTREZ<br/>DANS<br/>L’ARCHIVE.</h2><p>Recevez les prochains chapitres, les récits et l’ouverture des pièces avant leur publication.</p><form onSubmit={e => e.preventDefault()}><label><span>VOTRE ADRESSE E-MAIL</span><input type="email" placeholder="nom@adresse.com" aria-label="Adresse e-mail" required /></label><button>REJOINDRE →</button></form></motion.div>
    </section>

    <footer><div className="footer-mark"><Mark /><b>ZION</b></div><p>UNE ARCHIVE VIVANTE<br/>NÉE D’AFRIQUE.</p><div><a href="#top">INSTAGRAM</a><a href="#top">CONTACT</a><a href="#top">HAUT DE PAGE ↑</a></div><small>© 2026 ZION — TOUS DROITS CONSERVÉS</small></footer>
  </main>;
}
