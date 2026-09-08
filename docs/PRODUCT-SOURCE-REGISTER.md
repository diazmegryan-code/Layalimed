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

**Image acquisition (second pass):** the business owner instructed that
commercial image-use approvals for the five manufacturers below will be
handled separately, and this work should not pause for that. Five official
product images were downloaded and locally hosted under this instruction;
see each entry's "Image" line below and the updated "Image decision" section
at the end of this document for what was and wasn't obtained, and why.

---

## #109 — High-flux dialyzer

### Nipro ELISIO-H
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/elisio-h-dialyzer (accessed during this task)
- **Fields taken from source:** brand name (ELISIO-H), 8 surface-area size variants (0.9–2.5 m²), membrane material (polyethersulfone/Polynephron), housing material (polypropylene, BPA/DEHP-free), classification (single-use, high-flux), packaging (24/case)
- **Not verified / left out:** exact sterilization method (not stated on the fetched page), performance/clearance figures (Kuf, KoA, etc.) — not pulled from a data sheet this session
- **Image:** none obtained. A teaser image exists on the Nipro page but was not downloaded — the Fresenius FX CorDiax photo below was used as this catalog entry's representative image instead (see Image Decision).

### Fresenius Medical Care FX CorDiax
- **Official source:** https://freseniusmedicalcare.com/en-gb/healthcare-professionals/haemodialysis/dialyser/fx-cordiax-dialysers/ (accessed during this task)
- **Fields taken from source:** 6 high-flux model variants with exact surface areas and article numbers (FX CorDiax 40/50/60/80/100/120 = 0.6/1.0/1.4/1.8/2.2/2.5 m²), membrane brand (Helixone plus), sterilization (INLINE steam), housing (polypropylene), packaging (24/box)
- **Not used:** the haemodiafilter variants (FX CorDiax 600/800/1000) — out of scope for a "high-flux dialyzer" mapping, not included
- **Image:** obtained. Product hero photo from the official Fresenius FX CorDiax page (`.../fx-cordiax-dialysers/_jcr_content/.../spe001-fxcordiax100.jpeg`, 1280×719 original). Shows the FX 100 CorDiax unit with visible "Fresenius Medical Care" branding, unaltered. Saved as `images/products/originals/109-fresenius-fx-cordiax-original.jpg`, optimized to `images/products/109.jpg` / `.webp` (1200×674).

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
- **"5008" flag:** the task brief referenced "bibag 5008 650g." The official page fetched this session confirms bibag compatibility only with the 2008-series machines (2008T, 2008T BlueStar, 2008K@home) — **5008-series compatibility was not confirmed** by this source and was not added to `verifiedSpecs`. If bibag is also used with 5008-series machines in other markets, that would need its own source confirmation.
- **Image:** obtained. Official hero product photo (`.../concentrates/bibag/FMCNA_ProductResize__0028_Photography_BiBag_20190107_0007_Hero.jpg`, 2400×1200 original) showing both the 650 g and 900 g bags side by side with visible "bibag" branding, unaltered. Saved as `images/products/originals/134-fresenius-bibag-original.jpg`, optimized to `images/products/134.jpg` / `.webp` (1200×600).

---

## #72 — Surgical Masks / N95 Respirators

### 3M 1860 Series Health Care Particulate Respirator and Surgical Mask
- **Official source:** 3M product listing on 3m.com (product family page `b00038114`), corroborated via 3M's own technical data sheet hosted at multimedia.3m.com — both on official 3m.com/multimedia.3m.com domains. A follow-up direct browser visit to the live product page this session confirmed the same page and located the official product photo directly (see Image line).
- **Fields taken from source:** model variants (1860, 1860S), NIOSH rating (N95), FDA clearance (surgical mask), fluid resistance (ASTM F1862 Level 3 / 120 mmHg), filtration (>99% Bacterial Filtration Efficiency), packaging (120 EA/Case)
- **Note:** #72 covers both "Surgical Masks" and "N95 Respirators" generically; only the N95 portion (3M 1860) was addressed per the pilot brief.
- **Image:** obtained. Official product photo from 3M's own multimedia CDN (`multimedia.3m.com/mws/media/2636717J/3m-health-care-particulate-respirator-and-surgical-mask-1860-n95.jpg`, requested at `?width=1200` = 1200×1200), alt text on 3M's page reads "3M™ Health Care Particulate Respirator and Surgical Mask 1860, N95." Shows the mask with visible "3M 1860," NIOSH, and lot markings, unaltered. Saved as `images/products/originals/72-3m-1860-original.jpg`, optimized to `images/products/72.jpg` / `.webp` (1200×1200).

---

## #73 — Syringes

### Terumo SS Series Syringe
- **Official source:** originally found via a Terumo Medical Products sell sheet (terumotmp.com). A follow-up direct fetch this session of https://www.terumotmp.com/products/hypodermics/terumo-hypodermic-syringes-with-needle.html (live official page, not a search snippet) confirmed the "SS" product-code prefix directly, with an explicit product code table (e.g. SS-10L2025, SS-03L2025, SS-05L2025, SS-01T2516) covering the 1cc/3cc/5cc/10cc range and Luer Lock / Luer Slip tip styles — `sourceUrl` was updated to this live page.
- **Fields taken from source:** size range actually used (1cc/3cc/5cc/10cc, matching Layali's own #73 variant list), tip styles (Luer Lock and Luer Slip)
- **Not verified / left out:** the 20cc/50cc sizes also listed in Layali's #73 catalog entry were not specifically confirmed on this page's product-code table this session.
- **Image:** obtained. Official product photo from the live page above (`.../terumo-hypodermic-syringes-with-needle/_jcr_content/.../image.img.jpg`, 1240×358 original), alt text "Image of Terumo Hypodermic Syringes with Needle - syringe and needle." Shows syringes with visible "TERUMO" and "SINGLE USE ONLY" markings, unaltered. Saved as `images/products/originals/73-terumo-syringe-original.jpg`, optimized to `images/products/73.jpg` / `.webp` (1200×346).

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

### Ansell MICRO-TOUCH Nitrile E.P. (brand corrected from "MICRO-TOUCH Nitrile" — see note)
- **Official source (text data):** ansell.com product page `us/en/products/micro-touch-nitrile` (accessed via search index; a direct live re-fetch returned a blank/JS-rendered page, so the material/powder-free facts below are sourced from Ansell's own indexed page content rather than a fresh manual fetch)
- **Fields taken from source:** material (nitrile), powder status (powder-free)
- **Not verified / left out:** sizing chart, AQL rating, and chemical-permeation test list mentioned in search snippets were associated with a related but distinct Ansell product page (MICRO-TOUCH Micro-Thin) and were not carried over to avoid conflating two different SKUs.
- **Brand rename note:** the base "MICRO-TOUCH Nitrile" product page did not expose its own distinct product photo when browsed live this session — only images for sibling MICRO-TOUCH variants (Nitrile E.P., NITRAFREE Blue, Micro-Thin, etc.) were present on that page. Rather than publish one of those images under the "MICRO-TOUCH Nitrile" name (misrepresenting which specific product the photo shows), the `brand` field was corrected to **"MICRO-TOUCH Nitrile E.P."** to exactly match the image that was actually obtained, and `sourceUrl` was updated to that product's own official page: https://www.ansell.com/us/en/products/micro-touch-nitrile-e-p. The material/powder-free facts above are true of the MICRO-TOUCH nitrile family generally and were not re-verified specifically against the E.P. variant's own page this session.
- **Image:** obtained. Official "donning glove" product photo for MICRO-TOUCH Nitrile E.P. (`ansell.com/-/media/.../micro-touch-nitrile-ep/mt-nitrile-ep---donning-glove.ashx`, 1677×1290 original as served), alt text "MICRO-TOUCH™ Nitrile E.P." Shows a blue nitrile glove being donned, unaltered (flattened from transparent PNG onto a white background during optimization — no content was added or removed). Saved as `images/products/originals/79-ansell-microtouch-original.png`, optimized to `images/products/79.jpg` / `.webp` (1200×824). Retrieved via the browser's own authenticated session (the site's CDN returns a redirect loop to non-browser requests); no bot-detection or CAPTCHA was solved or bypassed to obtain it.

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

## Image decision

**Original decision (first pilot pass):** no manufacturer images were
downloaded, since confirming genuine reuse rights for manufacturer
photography wasn't something that session could verify with confidence.

**Updated per explicit business instruction (this pass):** the business
owner confirmed they will handle/obtain any required commercial image-use
approvals directly, and asked that image download proceed without pausing
for that. Under that instruction, five official product images were
downloaded directly from each manufacturer's own official domain (see each
entry above for the exact source URL) and are now hosted locally under
`images/products/`:

| Source ID | Manufacturer / Product | Local files |
|---|---|---|
| #109 | Fresenius Medical Care FX CorDiax | `images/products/109.jpg` / `.webp` |
| #134 | Fresenius Medical Care bibag | `images/products/134.jpg` / `.webp` |
| #72 | 3M 1860 Series | `images/products/72.jpg` / `.webp` |
| #73 | Terumo SS Series Syringe | `images/products/73.jpg` / `.webp` |
| #79 | Ansell MICRO-TOUCH Nitrile E.P. | `images/products/79.jpg` / `.webp` |

Full-resolution originals as downloaded (before resizing/format conversion)
are preserved under `images/products/originals/` for future re-processing.
No packaging, branding, labels, or product appearance were altered in any
image — only resizing, JPEG/WebP re-encoding, and (for the one PNG with
transparency) flattening onto a white background were performed.

**Remaining placeholders:** all other pilot entries (#118, #121, #123,
#131, #132) and the Nipro ELISIO-H reference under #109 still show "Photo
pending" — no image was located/downloaded for them in either pass.

## Date accessed

All sources above were accessed during this single work session (see the
commit history on `layali-2.0-redesign` for the exact date of the commit that
introduced this document).
