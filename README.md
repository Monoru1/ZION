# ZION — Archive vivante

Site éditorial et e-commerce de ZION : une archive culturelle vivante née d’Afrique, destinée au monde.

## État de l’avancement

### Étape 1 — Fondation et homepage

- Homepage narrative : WELCOME TO ZION → note d’intention → rapport → Archive 001 → BUZZOFF → manifeste → communiqué → registre.
- Intro cinématographique, logo de site et animations retenues avec Framer Motion.
- Favicon et icône Apple construits à partir du logo ZION.

### Étape 2 — Extension de l’archive

- `/manifesto` : dossier long-form sur cheveux, mémoire, transmission et confiance.
- `/boutique` : catalogue des pièces sous forme d’archive.
- `/boutique/buzzoff` : fiche de l’Exhibit 001 avec rapport, spécifications et accès précommande.
- `/a-propos` : note des fondateurs et principes de marque.
- `/contact` : contact et registre newsletter.
- ARCHIVE 002 / THERE’S ZION : pièce documentaire visuelle intégrée à la home et au Manifeste.

## Principes de production

- Une idée majeure par écran : le langage dossier reste présent, la surcharge disparaît de la homepage.
- Palette : écru, noir mat et ocre ; la typographie display porte les déclarations, la monospace porte les références.
- Pages statiques Next.js, images différées hors LCP, HTML sémantique, liens clavier et contrastes élevés.
- Les mouvements respectent `prefers-reduced-motion`.

## Démarrer

```bash
npm install
npm run dev
npm run build
```

Stack : Next.js App Router, TypeScript, CSS, Framer Motion.
