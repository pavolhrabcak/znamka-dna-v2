# Známka dňa

Blog o klasických gravírovaných poštových známkach.

## Rýchly štart

```bash
npm install
npm run dev
```

Otvor `http://localhost:4321`

## Pridanie novej známky

### Možnosť A — Markdown súbor

Vytvor `src/content/stamps/nazov.md` a obrázok vlož do `public/stamps/`.

```markdown
---
title: Názov známky
date: 2026-06-04
country: Krajina
region: Britské kolónie
denomination: 4 centy
year_issued: 1956
printer: De La Rue
technique: recess
tags: [britske-kolonie, krajina]
image: /stamps/nazov.webp
draft: false
---

Text článku...
```

### Možnosť B — Admin UI

Po nasadení: `https://tvoja-domena.vercel.app/admin`
(vyžaduje GitHub OAuth nastavené vo Vercel)

## Build

```bash
npm run build   # astro build + pagefind index
```

## Štruktúra

```
src/content/stamps/     ← Markdown článkov
src/layouts/Base.astro  ← Nav + footer
src/components/StampCard.astro
src/pages/
  index.astro           ← Domovská stránka
  archiv.astro          ← Filtrovateľný archív
  hladat.astro          ← Fulltext (Pagefind)
  rss.xml.ts            ← RSS feed
  znamky/[slug].astro
  krajiny/[country].astro
  tlaciarene/[printer].astro
public/stamps/          ← Obrázky známok
public/admin/           ← Decap CMS
```
# znamka-dna
# znamka-dna-v2
# znamka-dna-v2
