# Product Source Register — Manufacturer Pilot Batch

**Internal / research use only.** This document is not linked from the public
site and is not referenced by any customer-facing page. It exists purely for
traceability: for every manufacturer product incorporated into
`assets/data/product-catalog.json` during this pilot, it records where the
data came from, what was and wasn't verified, and what remains open.

None of the URLs listed here are rendered on the website. `catalog.js` stores
`sourceUrl` on each `verifiedProducts` entry but never displays it.

**Approved manufacturers for this pilot:** Nipro, Fresenius Medical Care,
Terumo, 3M, Ansell. No other manufacturers were introduced.

**Relationship disclaimer:** Nothing in this pilot states or implies that
Layali Medical Supply is an authorized distributor, exclusive distributor,
official partner, or manufacturer representative of any of the five
manufacturers above. These are catalog-identification records only (real
products that exemplify a generic Layali catalog entry), not supplier
relationship claims.

---

## #109 — High-flux dialyzer

### Nipro ELISIO-H
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/elisio-h-dialyzer (accessed during this task)
- **Fields taken from source:** brand name (ELISIO-H), 8 surface-area size variants (0.9–2.5 m²), membrane material (polyethersulfone/Polynephron), housing material (polypropylene, BPA/DEHP-free), classification (single-use, high-flux), packaging (24/case)
- **Not verified / left out:** exact sterilization method (not stated on the fetched page), performance/clearance figures (Kuf, KoA, etc.) — not pulled from a data sheet this session
- **Image:** none obtained. A teaser image exists on the Nipro page but was not downloaded (see Image Decision below).

### Fresenius Medical Care FX CorDiax
- **Official source:** https://freseniusmedicalcare.com/en-gb/healthcare-professionals/haemodialysis/dialyser/fx-cordiax-dialysers/ (accessed during this task)
- **Fields taken from source:** 6 high-flux model variants with exact surface areas and article numbers (FX CorDiax 40/50/60/80/100/120 = 0.6/1.0/1.4/1.8/2.2/2.5 m²), membrane brand (Helixone plus), sterilization (INLINE steam), housing (polypropylene), packaging (24/box)
- **Not used:** the haemodiafilter variants (FX CorDiax 600/800/1000) — out of scope for a "high-flux dialyzer" mapping, not included
- **Image:** none obtained.

---

## #118 — Adult blood tubing set

### Fresenius Medical Care CombiSet True Flow
- **Official source:** https://freseniusmedicalcare.com/en-us/products/disposables/bloodlines/combiset/ (accessed during this task)
- **Fields taken from source:** brand name (CombiSet True Flow), pump segment size (14 in × 8 mm), compatible machine series (2008 Series)
- **Not verified / left out:** specific priming volumes (a search snippet referenced 82 cc arterial / 60 cc venous from a third-party/PDF source, but this was not independently confirmed against the official page fetched this session, so it was omitted rather than guessed)
- **Note:** #116 (Arterial bloodline), #117 (Venous bloodline), #119 (Pediatric tubing set), and #120 (Online HDF tubing set) were deliberately **not** given verified manufacturer data this pass — CombiSet is a general adult set most directly matching #118; the pediatric and HDF-specific variants would need their own distinct verified products, which weren't researched this session.
- **Image:** none obtained.

---

## #121 — 15G / 16G / 17G AV fistula needles

### Nipro SafeTouch AVF Needle
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/safetouchtm-avf-needle (accessed during this task)
- **Fields taken from source:** gauge sizes (14G/15G/16G/17G — the source list includes 14G in addition to Layali's stated 15/16/17G), needle length options (20/25/32mm), tubing length options (150mm or 300mm), sterilization (gamma), safety mechanism description
- **Image:** none obtained.

---

## #123 — Buttonhole needles

### Nipro BIOHOLE SafeTouch Tulip AVF Needle
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/bioholetm-safetouch-tuliptm-avf-needle (accessed during this task)
- **Fields taken from source:** gauge sizes (14–17G), needle length (25/32mm), tubing length (300mm), buttonhole-specific design (siliconized dull needle, integrated scab remover), sterilization (gamma), latex-free/DEHP-free
- **Note:** #124 ("Sharp needles & blunt needles") was **not** given verified data this pass — its mapping to a specific Nipro SKU (vs. the sharp SafeTouch already used for #121, or this blunt BIOHOLE needle) was judged ambiguous enough to leave for a follow-up decision rather than force a fit.
- **Image:** none obtained.

---

## #131 and #132 — Acid concentrates / Ca and K variants

### Fresenius Medical Care NaturaLyte Liquid Acid Concentrate
- **Official source:** https://freseniusmedicalcare.com/en-us/products/disposables/concentrates/naturalyte-liquid-acid/ (accessed during this task)
- **Fields taken from source:** product line name (NaturaLyte 4000 Series), packaging (0.905 gal / 3.43 L jug, 4/case; also available in 55-gallon drums), concentrate type (acetic-acid based), dilution system (45X three-stream)
- **Not verified / left out:** exact potassium (K2/K3/K4) and calcium formulation numbers. Several third-party distributor listings (Medline, CIA Medical, etc.) named specific formulations (e.g. "2K, 2.5 Ca, 1.0 Mg"), but the official Fresenius product page fetched this session did not itself list the formulation table — per the research rule to prefer official sources and never guess, these specific numbers were **not** added to `verifiedSpecs`. Both #131 and #132 reference the same NaturaLyte product family since the underlying real-world product is the same line, differentiated only by formulation.
- **Image:** none obtained.

---

## #134 — Bicarbonate powder & cartridges

### Fresenius Medical Care bibag Online Dry Bicarbonate
- **Official source:** https://freseniusmedicalcare.com/en-us/products/disposables/concentrates/bibag-online-dry-bicarbonate/ (accessed during this task)
- **Fields taken from source:** bag sizes (650 g and 900 g), material (sodium bicarbonate powder, PP/PE bag), compatible machines (2008T, 2008T BlueStar, 2008K@home), dilution (45x / 1:44)
- **Note:** bibag is a **dry** bicarbonate system, not a liquid one — it was mapped to #134 ("Bicarbonate powder & cartridges"), not #133 ("Liquid bicarbonate"). #133 was **not** given verified data this pass; a distinct liquid-bicarbonate product would need separate research.
- **Image:** none obtained.

---

## #72 — Surgical Masks / N95 Respirators

### 3M 1860 Series Health Care Particulate Respirator and Surgical Mask
- **Official source:** 3M product listing on 3m.com (product family page `b00038114`), corroborated via 3M's own technical data sheet hosted at multimedia.3m.com — both on official 3m.com/multimedia.3m.com domains (accessed during this task via search; a direct live re-fetch of the JS-rendered product page timed out, so this is sourced from 3M's own indexed page content rather than a fresh manual fetch — flagged for a follow-up direct-page confirmation if higher certainty is wanted)
- **Fields taken from source:** model variants (1860, 1860S), NIOSH rating (N95), FDA clearance (surgical mask), fluid resistance (ASTM F1862 Level 3 / 120 mmHg), filtration (>99% Bacterial Filtration Efficiency), packaging (120 EA/Case)
- **Note:** #72 covers both "Surgical Masks" and "N95 Respirators" generically; only the N95 portion (3M 1860) was addressed per the pilot brief.
- **Image:** none obtained.

---

## #73 — Syringes

### Terumo SS Series Syringe
- **Official source:** Terumo Medical Products sell sheet, hosted on terumotmp.com (an official Terumo domain): https://www.terumotmp.com/en-us/product-assets/Terumo-Needle/Conventional-Needles-and-Syringes-sellsheet.pdf (accessed during this task via search index; not independently re-fetched as a standalone document this session)
- **Fields taken from source:** size range actually used (1cc/3cc/5cc/10cc, matching Layali's own #73 variant list), tip styles (Luer Lock and Luer Slip)
- **Not verified / left out:** the 20cc/50cc sizes also listed in Layali's #73 catalog entry were not specifically re-confirmed against this Terumo sell sheet this session — the SS series is documented as covering a broader range, but the extension to 20/50cc wasn't independently checked.
- **Image:** none obtained.

---

## #74 — Needles (various gauges)

### Terumo Agani Safety Hypodermic Needle
- **Official source:** https://www.terumo-europe.com/en/medical-care-solutions/products/product-type/needles-and-syringes/terumo-agani-safety-hypodermic-needle (accessed during this task, fetched directly)
- **Fields taken from source:** color-coding standard (ISO 6009), packaging (100/unit box, 800/carton), sterilization (EO), shelf life (5 years)
- **Deliberately left ambiguous:** exact gauge sizes. Layali's own catalog entry says "various gauges" and the fetched page did not itself list a gauge table (referenced in a separate brochure not opened this session) — per the explicit instruction to keep ambiguous source descriptions ambiguous, no gauge numbers were added.
- **Image:** none obtained.

---

## #75 — IV Cannula / IV Tubing

### Terumo Surflo I.V. Catheter
- **Official source:** https://www.terumo-europe.com/en-emea/products/surflo%E2%84%A2-i-v-catheter (accessed during this task, fetched directly)
- **Fields taken from source:** product variant names (Surflo straight, Surflo S-Plus, Surflo-W winged, Surflo-WP winged & ported), materials (ETFE for straight, FEP for winged variants)
- **Not verified / left out:** specific gauge sizes (14–24G) were referenced only via third-party distributor product codes (McKesson, Merit Pharmaceutical) in search results, not confirmed on Terumo's own page this session — omitted per the "official source only" rule.
- **Image:** none obtained.

---

## #79 — Examining Gloves

### Ansell MICRO-TOUCH Nitrile
- **Official source:** ansell.com product page `us/en/products/micro-touch-nitrile` (accessed during this task via search index; a direct live re-fetch returned a blank/JS-rendered page, so this is sourced from Ansell's own indexed page content rather than a fresh manual fetch — flagged for a follow-up direct-page confirmation if higher certainty is wanted)
- **Fields taken from source:** material (nitrile), powder status (powder-free)
- **Not verified / left out:** sizing chart, AQL rating, and chemical-permeation test list mentioned in search snippets were associated with a related but distinct Ansell product page (MICRO-TOUCH Micro-Thin) and were not carried over to avoid conflating two different SKUs.
- **Image:** none obtained.

---

## Entries considered for this pilot but left as placeholders (no verified data added)

| Source ID | Item | Why left as a placeholder |
|---|---|---|
| #110 | Low-flux dialyzer | The Nipro ELISIO-L product page URL guessed from the ELISIO-H pattern did not resolve to a working page this session; no distinct low-flux product was independently verified in the time available. |
| #116, #117, #119, #120 | Bloodline set variants (arterial/venous lines, pediatric, online HDF) | CombiSet True Flow (used for #118) is the general adult set; the arterial/venous line, pediatric, and HDF-specific variants would need their own distinct verified SKUs, not researched this session. |
| #124 | Sharp needles & blunt needles | Ambiguous which Nipro product (or products) most precisely maps here without conflating it with #121/#123; left for a follow-up decision. |
| #133 | Liquid bicarbonate | bibag (used for #134) is a *dry* bicarbonate system, not liquid — a distinct liquid bicarbonate product was not researched this session. |
| #132 formulation numbers | Potassium K2/K3/K4 exact concentrations | NaturaLyte's own official page didn't list a formulation table this session; only third-party distributor listings did, which don't meet the "official source" bar. |

---

## Image decision for this pilot

**No manufacturer product images were downloaded or added in this pilot.** Every
pilot entry above still shows the "Photo pending" placeholder.

Reasoning: manufacturer product photography is the manufacturer's copyrighted
material. Confirming genuine reuse rights (an explicit press/media-kit license,
or written permission) for each image was not something this session could
verify with confidence in the time available, and the project's own image
convention (`images/products/README.md`) already treats an honest placeholder
as preferable to an unverified image. This was a judgment call made to avoid
introducing potential copyright exposure into the repository — it is called
out here explicitly so the business can decide whether to pursue proper
licensed/press-kit imagery for these SKUs in a follow-up pass, rather than
this being a silent gap.

## Date accessed

All sources above were accessed during this single work session (see the
commit history on `layali-2.0-redesign` for the exact date of the commit that
introduced this document).
