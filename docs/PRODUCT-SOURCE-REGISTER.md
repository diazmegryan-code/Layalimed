# Product Source Register — Manufacturer Pilot Batch

**Internal / research use only.** This document is not linked from the public
site and is not referenced by any customer-facing page. It exists purely for
traceability: for every manufacturer product incorporated into
`assets/data/product-catalog.json` during this pilot, it records where the
data came from, what was and wasn't verified, and what remains open.

None of the URLs listed here are rendered on the website. `catalog.js` stores
`sourceUrl` on each `verifiedProducts` entry but never displays it.

**Approved manufacturers for this pilot:** Nipro, Fresenius Medical Care,
Terumo, 3M, Ansell. No other manufacturers were introduced in Batches 1–3.

**Additional manufacturer introduced in Batch 4:** Teleflex (Arrow brand) —
researched and added under Batch 4's explicit "research permission only"
grant, specifically for dialysis catheter entries (#125, #127; #126 was
attached to the same record in an earlier pass and later corrected back to
pending — see the Batch 4 cleanup note) after confirming none of the
original five make a genuine central-venous hemodialysis catheter. See the
Batch 4 section below for full reasoning. This does not change the status
of the original five as the primary pilot manufacturers; Teleflex is
documented separately wherever it appears.

**Additional manufacturers introduced in Batch 5:** ICU Medical, Inc.
(#128 only), BD/Becton Dickinson (#137 only), and Dirinco B.V. (#138
only) — each explicitly authorized in the Batch 5 task brief for that one
specific entry. See the Batch 5 section below for full reasoning.

**Additional manufacturer introduced in Batch 6:** Avrio Health L.P.
(#154 only) — confirmed via the official FDA DailyMed structured product
label for Betadine® Solution Swabsticks. See the Batch 6 section below.

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
- **Image:** obtained (added in a follow-up pass). Official teaser photo (`nipro-group.com/sites/default/files/2019-11/Elisio - Teaser.jpg`, 2000×1600 original) showing an ELISIO-19H unit with visible "ELISIO-19H" and "Nipro" branding, unaltered. Optimized to `images/products/109-nipro-elisio-h.jpg` / `.webp` (1200×960). Kept as a **second** verified product alongside Fresenius FX CorDiax on the same canonical #109 record — see the UI note at the end of this document on how the two are kept visually distinct.

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
- **Note:** at the time of this pass (Batch 2), #116 (Arterial bloodline), #117 (Venous bloodline), #119 (Pediatric tubing set), and #120 (Online HDF tubing set) were deliberately **not** given verified manufacturer data — CombiSet is a general adult set most directly matching #118; the pediatric and HDF-specific variants would need their own distinct verified products, which hadn't been researched yet. *(#120 was subsequently resolved in Batch 3 with a distinct Fresenius product — see the #120 section below. #116, #117, and #119 remain pending.)*
- **Image:** none obtained.

### Nipro NiproSet Blood Tubing Set (added in a follow-up pass)
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/niproset-blood-tubing-set (accessed during this task)
- **Fields taken from source:** brand name (NiproSet), material (clear PVC tubing), compatibility framing (machine-specific, individually pre-labeled per equipment)
- **Why only #118:** the official page explicitly states *"All blood tubing sets are machine-specific; we invite you to consult a Nipro representative for more details"* and does **not** itself distinguish arterial/venous/pediatric/online-HDF variants by name. Per the instruction not to force one product across multiple entries without support, NiproSet was mapped only to #118 ("Adult blood tubing set" — the closest match to a general/adult set), not to #116, #117, #119, or #120.
- **Second manufacturer on #118:** this is now the second verified product on the #118 record, alongside Fresenius CombiSet True Flow — both remain under the one canonical Layali entry, no duplicate records created.
- **Image:** none obtained. The product's own page did not expose a distinct hero photo of its own (only thumbnails of unrelated Nipro renal-care products appeared in its "related products" carousel); rather than guess which unlabeled thumbnail might be it, no image was attached.

---

## #121 — 15G / 16G / 17G AV fistula needles

### Nipro SafeTouch AVF Needle
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/safetouchtm-avf-needle (accessed during this task)
- **Fields taken from source:** gauge sizes (14G/15G/16G/17G — the source list includes 14G in addition to Layali's stated 15/16/17G), needle length options (20/25/32mm), tubing length options (150mm or 300mm), sterilization (gamma), safety mechanism description
- **Image:** obtained (added in a follow-up pass). Official teaser photo (`nipro-group.com/sites/default/files/2019-12/SAFETOUCH AVF NEEDLE - Teaser.jpg`, 2000×1600 original) showing the green-winged SafeTouch AVF needle assembly, unaltered. Optimized to `images/products/121.jpg` / `.webp` (1200×960).

---

## #123 — Buttonhole needles

### Nipro BIOHOLE SafeTouch Tulip AVF Needle
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/bioholetm-safetouch-tuliptm-avf-needle (accessed during this task)
- **Fields taken from source:** gauge sizes (14–17G), needle length (25/32mm), tubing length (300mm), buttonhole-specific design (siliconized dull needle, integrated scab remover), sterilization (gamma), latex-free/DEHP-free
- **Note:** at the time of this pass (Batch 2), #124 ("Sharp needles & blunt needles") was **not** given verified data — its mapping to a specific Nipro SKU (vs. the sharp SafeTouch already used for #121, or this blunt BIOHOLE needle) was judged ambiguous enough to leave for a follow-up decision rather than force a fit. *(Resolved in Batch 3 — see the #124 section below.)*
- **Image:** obtained (added in a follow-up pass). Official teaser photo (`nipro-group.com/sites/default/files/2019-12/BIOHOLE NEEDLE - Tulip - Teaser.jpg`, 2000×1600 original) showing the white-winged BIOHOLE Tulip needle assembly — visually distinct from the SafeTouch AVF needle photo above, confirming these are genuinely different products, not the same photo reused. Unaltered. Optimized to `images/products/123.jpg` / `.webp` (1200×960).

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

## #133 — Liquid bicarbonate (research finding — NOT published to customers)

**Correction (this pass):** an earlier commit added a customer-facing
`verifiedProducts` record for #133 naming "Fresenius Medical Care" as the
manufacturer. That has been **removed** from `product-catalog.json` — #133
is back to its plain generic canonical entry ("Liquid bicarbonate") with no
`verifiedProducts`, the same pending state as any other unresolved entry.
The reasoning below is why, and is kept here for traceability only; none of
it is shown to customers.

### What was found
- **Page:** https://freseniusmedicalcare.com/en-us/products/disposables/concentrates/liquid-sodium-bicarbonate-concentrate/ (accessed during this task, fetched directly) — an official Fresenius Medical Care page, hosted and presented by Fresenius, titled exactly "Liquid Sodium Bicarbonate Concentrate."
- **But the product photographed on that page is not Fresenius-branded.** Its own hero photo (`.../liquid-sodiuim-bicarbonate/FMCNA_ProductResize__0030_..._Centrisol_PartB_..._Hero.jpg`, 2400×1200) shows a bottle whose printed label reads **"Centrisol® Liquid Bicarbonate Concentrate, Part B, MB-330-L"**, identifying the manufacturer on the label as **"MINNTECH RENAL SYSTEMS / MEDIVATORS INC."** — a different company, and not one of the five manufacturers approved for this pilot (Nipro, Fresenius Medical Care, Terumo, 3M, Ansell).
- **The precise relationship between Fresenius and Centrisol/Minntech/Medivators for this specific product has not been independently established** — it could be a private-label/resale arrangement, an OEM relationship, a legacy/acquired product line, or something else. This session did not verify which, and did not attempt to guess.
- Because the `verifiedProducts.manufacturer` field is presented to customers as an actual manufacturer attribution, and that attribution could not be confidently assigned to either company (Fresenius doesn't match the label; Centrisol/Minntech/Medivators is outside the approved pilot scope and unverified), **no manufacturer is currently shown to customers for #133.**
- Per instruction, "Centrisol," "Minntech," and "Medivators" have **not** been introduced into `product-catalog.json` — they appear only in this research document, pending independent verification of the actual relationship/product identity.
- **Text facts that were briefly recorded and are now removed from the catalog data:** dilution system (45X three-stream, mixed with a compatible acid concentrate), regulatory notice ("Federal (US) law restricts these devices to sale by or on the order of a physician"). These may still be accurate for whatever product actually ships under this Fresenius page, but were removed from `product-catalog.json` along with the manufacturer attribution rather than left half-attached to no one.
- **Not verified / left out:** specific concentration/formulation numbers were not read from this page this session; the exact commercial relationship (if any) between Fresenius and Centrisol/Minntech/Medivators.

### Status
#133 remains unresolved and should continue to use the normal pending
catalog state until the actual manufacturer/product identity is
independently verified. A future pass should either (a) confirm the real
relationship/manufacturer behind what Fresenius presents on this page, or
(b) find a distinct, unambiguously Fresenius-branded liquid bicarbonate
product instead.

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
- **Image:** obtained (added in a follow-up pass). Product image embedded directly in the official Terumo Agani Safety Hypodermic Needle page's HTML (`terumo-europe.com/.../needles-and-syringes/media_1fbc07505597392c62efe8668eb66e40639682337.png`, 1821×735 original), showing the teal safety-shield needle assembly consistent with the page's own description of the safety mechanism, unaltered. Optimized to `images/products/74.jpg` / `.webp` (1200×484).

---

## #75 — IV Cannula / IV Tubing

### Terumo SurFlash Polyurethane I.V. Catheter (replaces "Terumo Surflo I.V. Catheter" — see note)
- **Official source:** https://www.terumotmp.com/products/iv-catheters/surflash-polyurethane-iv-catheters.html (accessed during this task, fetched directly)
- **Brand change note:** the previously recorded "Surflo I.V. Catheter" (terumo-europe.com) would not render its page content in this session despite repeated attempts (cookie-consent/JS rendering issue), so no image could be obtained for it. Terumo's US SurFlash Polyurethane I.V. Catheter — a distinct but equally official, equally real Terumo IV catheter product line — was directly fetched instead, with both text data and an official image successfully confirmed. The `brand` field was updated accordingly rather than attaching an unrelated product's image under the "Surflo" name.
- **Fields taken from source:** product name (SurFlash Polyurethane I.V. Catheter), material (polyurethane), packaging (50/box, 4 boxes/case = 200), gauge range confirmed directly in an official product-code table (14G, 16G, 16G×2½", 18G, 18G×2", 18G×2½", 20G, 20G×1¼", 20G×2", 22G, 24G)
- **Image:** obtained. Official product photo (`terumotmp.com/.../surflash-polyurethane-iv-catheters/_jcr_content/image.img.jpg`, 800×800 original), alt text "SurFlash® Polyurethane I.V. Catheters," unaltered (not upscaled beyond its native 800×800). Saved as `images/products/75.jpg` / `.webp`.

---

## #79 — Examining Gloves

### Ansell MICRO-TOUCH Nitrile E.P. (brand corrected from "MICRO-TOUCH Nitrile" — see note)
- **Official source (text data):** ansell.com product page `us/en/products/micro-touch-nitrile` (accessed via search index; a direct live re-fetch returned a blank/JS-rendered page, so the material/powder-free facts below are sourced from Ansell's own indexed page content rather than a fresh manual fetch)
- **Fields taken from source:** material (nitrile), powder status (powder-free)
- **Not verified / left out:** sizing chart, AQL rating, and chemical-permeation test list mentioned in search snippets were associated with a related but distinct Ansell product page (MICRO-TOUCH Micro-Thin) and were not carried over to avoid conflating two different SKUs.
- **Brand rename note:** the base "MICRO-TOUCH Nitrile" product page did not expose its own distinct product photo when browsed live this session — only images for sibling MICRO-TOUCH variants (Nitrile E.P., NITRAFREE Blue, Micro-Thin, etc.) were present on that page. Rather than publish one of those images under the "MICRO-TOUCH Nitrile" name (misrepresenting which specific product the photo shows), the `brand` field was corrected to **"MICRO-TOUCH Nitrile E.P."** to exactly match the image that was actually obtained, and `sourceUrl` was updated to that product's own official page: https://www.ansell.com/us/en/products/micro-touch-nitrile-e-p. The material/powder-free facts above are true of the MICRO-TOUCH nitrile family generally and were not re-verified specifically against the E.P. variant's own page this session.
- **Image:** obtained. Official "donning glove" product photo for MICRO-TOUCH Nitrile E.P. (`ansell.com/-/media/.../micro-touch-nitrile-ep/mt-nitrile-ep---donning-glove.ashx`, 1677×1290 original as served), alt text "MICRO-TOUCH™ Nitrile E.P." Shows a blue nitrile glove being donned, unaltered (flattened from transparent PNG onto a white background during optimization — no content was added or removed). Saved as `images/products/originals/79-ansell-microtouch-original.png`, optimized to `images/products/79.jpg` / `.webp` (1200×824). Retrieved via the browser's own authenticated session (the site's CDN returns a redirect loop to non-browser requests); no bot-detection or CAPTCHA was solved or bypassed to obtain it.

---

## Entries considered for this pilot but left as placeholders (status as of Batch 2 — see Batch 3 below for what has since changed)

| Source ID | Item | Why left as a placeholder |
|---|---|---|
| #110 | Low-flux dialyzer | *(Resolved in Batch 3 — see the #110 section below.)* At the time of Batch 2, the Nipro ELISIO-L product page URL guessed from the ELISIO-H pattern did not resolve to a working page; no distinct low-flux product had yet been independently verified. |
| #116, #117, #119 | Bloodline set variants (arterial/venous lines, pediatric) | Neither CombiSet True Flow nor NiproSet (both used for #118) distinguish these as separate named products on their official pages — both are general/adult/machine-specific sets. Confirmed again in Batch 3: NiproSet's own ordering brochure differentiates sets only by compatible machine, never by arterial-only/venous-only/pediatric. Still pending. |
| #120 | Online HDF tubing set | *(Resolved in Batch 3 — see the #120 section below.)* At the time of Batch 2, neither CombiSet nor NiproSet's pages named an online-HDF-specific set. |
| #124 | Sharp needles & blunt needles | *(Resolved in Batch 3 — see the #124 section below.)* At the time of Batch 2, it was ambiguous which Nipro product(s) most precisely mapped here without conflating it with #121/#123. |
| #132 formulation numbers | Potassium K2/K3/K4 exact concentrations | NaturaLyte's own official page didn't list a formulation table; only third-party distributor listings did, which don't meet the "official source" bar. Re-checked directly against the official SDS in Batch 3 — still not found there either. Still unresolved. |
| #133 | Liquid bicarbonate | An official Fresenius page exists, but its own hero photo identifies the actual product as "Centrisol / Minntech Renal Systems / Medivators Inc.," not Fresenius, and the real manufacturer/distribution relationship hasn't been independently established. A `verifiedProducts` record naming Fresenius was added in an earlier pass and has been **removed** — #133 is fully pending again, with no manufacturer shown to customers (see the #133 section above for the full explanation). Untouched in Batch 3; still pending. |

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

**Second pass (this batch):** per continued instruction not to pause for
copyright approval, five more official images were obtained. Per the
instruction not to keep additional large `originals/` files unless
technically necessary, this batch's full-resolution downloads were **not**
committed to the repository — only the optimized JPG/WebP pairs, with full
provenance recorded in each entry above instead:

| Source ID | Manufacturer / Product | Local files |
|---|---|---|
| #109 (2nd product) | Nipro ELISIO-H | `images/products/109-nipro-elisio-h.jpg` / `.webp` |
| #121 | Nipro SafeTouch AVF Needle | `images/products/121.jpg` / `.webp` |
| #123 | Nipro BIOHOLE SafeTouch Tulip AVF Needle | `images/products/123.jpg` / `.webp` |
| #74 | Terumo Agani Safety Hypodermic Needle | `images/products/74.jpg` / `.webp` |
| #75 | Terumo SurFlash Polyurethane I.V. Catheter | `images/products/75.jpg` / `.webp` |

One additional image was found but deliberately **not** used: the official
Fresenius #133 (Liquid Sodium Bicarbonate Concentrate) page's own hero photo
shows a bottle branded by a different, non-approved company (Minntech/
Medivators/Centrisol) — see the #133 section above. A `verifiedProducts`
record naming Fresenius as #133's manufacturer was briefly added in that
same pass despite this finding; it has since been **removed**, since the
manufacturer field is a customer-facing attribution and the real
relationship between Fresenius and Centrisol/Minntech/Medivators for this
product was never established. #133 is fully pending again.

**UI adjustment made because of #109 now having two manufacturer photos:**
with two verified products (Nipro and Fresenius) each carrying their own
image, a single shared photo at the top of the card could no longer make
clear which photo belonged to which manufacturer. Each manufacturer block
now also shows its own small labeled thumbnail directly beside its name
whenever a record has more than one manufacturer photo — single-manufacturer
cards (the common case) are unaffected and render exactly as before.

**Status as of the end of Batch 2:** #110, #116, #117, #119, #120, #124,
and #133 were all fully pending. Batch 3 (below) resolves #110, #120, and
#124 with verified manufacturer data; #116, #117, #119, and #133 remain
pending; #111 and #125–130 (not previously attempted) are addressed for
the first time in Batch 3, with #111 partially resolved (text only) and
#125–130 remaining pending.

---

# Batch 3 — Hemodialysis catalog completion (dialyzers, bloodlines, needles, catheters, concentrates)

Scope: source IDs 110, 111, 116, 117, 119, 120, 124, 125–134. Priority was
correct mapping over coverage — several entries in this range were
investigated and deliberately left pending rather than force-fit.

## #110 — Low-flux dialyzer

### Nipro SUREFLUX L
- **Official sources:** product page https://www.nipro-group.com/en/our-offer/products-services/surefluxtm (fetched directly) and the official Nipro Medical Europe brochure PDF linked from it (`nipro-group.com/sites/default/files/2019-12/SureFlux - UX-E-L - New Layout - 19Dec2018 - EN - Approved_Original_435.pdf`, fetched and read as images)
- **Why SUREFLUX L, not ELISIO-L:** the task asked to investigate ELISIO-L directly; no working official ELISIO-L-specific page could be located this session (URL patterns guessed from the ELISIO-H page did not resolve, same issue as in Batch 2). SUREFLUX L is independently well-documented and was used instead. ELISIO-H was **not** used for #110, per instruction.
- **Fields taken from source:** SUREFLUX comes in three flux lines (L = low-flux, E = mid-flux, UX = high-flux). The Low-flux (L) line's exact model/size table, read directly from the brochure: 03L (0.3 m²), 05L (0.5 m²), 07L (0.7 m²), 09L (0.9 m²), 11L (1.1 m²), 13L (1.3 m²), 15L (1.5 m²), 17L (1.7 m²), 19L (1.9 m²), 21L (2.1 m²). Membrane: Cellulose Triacetate. Housing: Polypropylene. Sterilization: Dry Gamma. Packaging: 24 pcs/box.
- **Image:** obtained. Official teaser photo (`nipro-group.com/sites/default/files/2019-12/SUREFLUX - Teaser.jpg`, 2000×1600 original) showing a single SUREFLUX-19L unit with clearly printed "SUREFLUX-19L" and "NIPRO HEMODIALYZER" branding, unaltered. Optimized to `images/products/110.jpg` / `.webp` (1200×960).

## #111 — Pediatric dialyzer

### Nipro SUREFLUX (text only, no specific model claimed)
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/surefluxtm (fetched directly) — the same page states outright: *"Suitable for HD, HF, (online) HDF, and pediatric applications."*
- **Why no specific model/variant and no image:** the instruction was explicit not to equate "small dialyzer" with "pediatric" by inference. Nipro's page confirms pediatric suitability for the SUREFLUX line as a whole but does not name a distinct pediatric SKU separate from its regular L/E/UX size lineup. Rather than pick the smallest size (e.g. 03L) and label it "the pediatric one" (an inference this session was told to avoid), the manufacturer's own general statement is recorded as-is, with no variant list and no image. Fresenius pediatric-hemodialysis material was also checked (see #119 below) — it describes a pediatric-capable *machine* (5008 CorDiax Paed), not a distinct pediatric dialyzer product, so it wasn't used here either.
- **Not verified / left out:** any specific pediatric dialyzer model number, surface area, or priming volume.

## #116, #117 — Arterial / Venous bloodline (still pending)

No new mapping. Re-confirmed via the official NiproSet ordering brochure (`nipro-group.picturepark.com/v/z2ugQ2m5/...pdf`, fetched and read as images): every NiproSet item number is a **combined** arterial+venous set distinguished only by compatible machine (Baxter, Fresenius 2008 series, B. Braun Dialog) and pump position (pre-pump/post-pump) — e.g. `BL+A209Y/V803` = "Fresenius 2008 series/8mm/Pre-Pump." No arterial-only or venous-only product exists in this catalog. Per instruction, a combined A/V set does not justify separate #116/#117 records, so both remain pending.

## #119 — Pediatric tubing set (still pending)

Investigated Fresenius's pediatric hemodialysis material (`freseniusmedicalcare.com/en/healthcare-professionals/pediatric-dialysis/pediatric-hemodialysis/`, via search). It describes the **5008 CorDiax Paed**, a pediatric-capable hemodialysis *machine* ("treat young patients starting from 10 kg of dry weight"), not a distinct pediatric bloodline *set* product. A third-party listing referenced a "CombiSet Hemodialysis Low Volume Bloodline," which could plausibly be pediatric-relevant, but this was only found on a reseller site (Medline), not an official Fresenius product page, so it was not used. Per instruction ("only map this if an identifiable product/set can be independently verified" and "do not force pediatric machine information into a [tubing] record unless the actual [set] is identified"), #119 remains pending.

## #120 — Online HDF tubing set

### Fresenius 5008X CAREset bloodline
- **Official source:** https://freseniusmedicalcare.com/en-us/products/in-center-hemodialysis-equipment/5008x-caresystem/ (fetched directly)
- **Fields taken from source:** the page explicitly states *"5008X CAREset bloodline safely delivers sterile non-pyrogenic substitution fluid generated with the 5008X CAREsystem"* — a bloodline product specifically and explicitly tied to online (high-volume) HDF, not inferred from ordinary HD tubing.
- **Image: deliberately NOT used.** The only sizeable image on this page is a marketing photo of a physician and patient, and the page's own text explicitly labels it **"AI generated image."** Per the project's rule against AI-generated imagery, it was not used, even resized/cropped. No other image of the bloodline set itself was found on this page.

## #121, #123 — no changes

Untouched this batch, exactly as committed in Batch 2 (Nipro SafeTouch AVF Needle and Nipro BIOHOLE SafeTouch Tulip AVF Needle, respectively).

## #124 — Sharp needles & blunt needles

### Nipro STANDARD AVF NEEDLE (sharp)
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/standard-avf-needle (fetched directly)
- **Fields taken from source:** "ultra-sharp, siliconized 3-bevel needle," no active safety mechanism described (distinguishing it from #121's SafeTouch, which has one), packaging (2-pack/single-pack/single needle), gamma sterilization
- **Image:** obtained. Official teaser photo (`nipro-group.com/sites/default/files/2019-12/STANDARD AVF NEEDLE - Teaser.jpg`, 2000×1600 original), unaltered. Optimized to `images/products/124-standard-avf.jpg` / `.webp` (1200×960).

### Nipro BIOHOLE AVF NEEDLE (blunt)
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/bioholetm-avf-needle-bioholetm-avf-single-needle (fetched directly)
- **Fields taken from source:** explicitly described as a "blunt, siliconized needle" for the buttonhole technique, with "white occlusion clamp allows easy distinction with standard and safety needles" — the page itself distinguishes this plain BIOHOLE needle from both standard (sharp) and safety (Tulip) variants. Packaging (regular or single dull needle), gamma sterilization.
- **Distinct from #123:** this is the plain BIOHOLE needle, not the BIOHOLE SafeTouch Tulip already used for #123 — confirmed visually distinct (different wing color/shape) and functionally distinct (no safety mechanism described here, vs. Tulip's active safety mechanism).
- **Image:** obtained. Official product photo (`nipro-group.com/sites/default/files/2019-12/Biohole needle 14G-Red.png`, 754×2000 original) clearly showing a rounded/blunt needle tip (visually confirmed, not just from the text description), unaltered aside from flattening its transparency onto white. Optimized to `images/products/124-biohole-plain.jpg` / `.webp` (452×1200).

### Rejected: reusing #121/#123's safety-mechanism needles for #124
Not done — #124 needed the plain (non-safety) sharp and blunt needles specifically, to avoid duplicating the already-distinct #121 and #123 records under a third catalog entry.

## #125–130 — Dialysis catheters and accessories (all pending)

### Rejected mapping: Nipro SAFETOUCH DIALYSIS CATH PLUS
Investigated as the task's suggested starting point. **Important finding:** despite its name, this is not a central-venous dialysis catheter. Its official page (https://www.nipro-group.com/en/our-offer/products-services/safetouch-dialysis-cath-plus) describes an "auto priming hemostatic valve" and a needle-stick "safety mechanism," and its own product photo (`nipro-group.com/sites/default/files/2022-05/Safetouch Dialysis Cath PLUS_High Res_3229.jpg`) shows a lineup of **needle** devices labeled with a gauge/length spec ("15G × 1.8" × 25mm...") — a vascular-access needle product, not a tunneled or temporary CVC catheter, catheter cap, clamp, or dressing kit. It was **not** mapped to any of #125–130.
- A brief search for an official Fresenius CVC catheter product did not surface one within this session's time budget.
- Per instruction ("do not apply one catheter image/product across all six... only map exact products"), all of #125 (double lumen catheter kits), #126 (temporary HD catheter), #127 (tunneled catheter kits), #128 (catheter caps & clamps), #129 (catheter dressing kits), and #130 (Tegaderm/chlorhexidine dressings) remain pending. None of Nipro/Fresenius/Terumo/3M/Ansell's catalogs were confirmed to include an exact match for any of these six within this session.

## #131, #132 — no changes; K2/K3/K4 still unresolved

Re-checked this batch: fetched the official Fresenius NaturaLyte Liquid Acid Concentrate SDS PDF directly (`freseniusmedicalcare.com/content/dam/fmcna/live/products/disposables/concentrates/naturalyte-liquid-acid/2026-07-16 SDS NaturaLyte Liquid Acid Concentrate.pdf`) specifically looking for a K2/K3/K4-style formulation table. None was found in the extracted content (an SDS is a safety data sheet, not a commercial ordering guide, and doesn't list product-variant codes). Only third-party/reseller listings name specific formulations, which don't meet the official-source bar. #131 and #132's existing NaturaLyte `verifiedProducts` records are unchanged from Batch 2.

## #133 — unchanged, still pending

Not touched this batch, per instruction. Still exactly as corrected previously: no `verifiedProducts` record; the Centrisol/Minntech/Medivators finding remains documented above, unresolved.

## #134 — Bicarbonate powder & cartridges — second manufacturer added

### Nipro NIPROCART A2F 760 (added alongside the existing Fresenius bibag — bibag retained, not replaced)
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/niprocart (fetched directly)
- **Fields taken from source:** "a cartridge containing sodium bicarbonate powder that produces dialysate online when combined with acid concentrate and pure water"; exact model and weight read directly off the product label in the official photo: "NiproCart A2F 760 / NaHCO3 760g"
- **Image:** obtained. Official product photo (`nipro-group.com/sites/default/files/2020-07/NiproCart 760.png`, 638×1279 original) showing a fully legible label with "NiproCart A2F 760," "NaHCO3 760g," and "NIPRO RENAL SOLUTIONS SPAIN, S.R.L." branding, unaltered aside from flattening its transparency onto white. Optimized to `images/products/134-niprocart.jpg` / `.webp` (599×1200).

## Batch 3 summary of what changed

| Source ID | Before Batch 3 | After Batch 3 |
|---|---|---|
| #110 | Pending | Nipro SUREFLUX L (image) |
| #111 | Not attempted | Nipro SUREFLUX (text only, no image) |
| #116, #117 | Pending | Still pending (re-confirmed) |
| #119 | Pending | Still pending (re-confirmed) |
| #120 | Pending | Fresenius 5008X CAREset bloodline (text only, no image) |
| #124 | Pending | Nipro STANDARD AVF NEEDLE + Nipro BIOHOLE AVF NEEDLE (both imaged) |
| #125–130 | Not attempted | Investigated, all still pending (rejected mapping documented) |
| #131, #132 | NaturaLyte verified; K2/K3/K4 unresolved | Unchanged |
| #133 | Pending (corrected in prior commit) | Unchanged, still pending |
| #134 | Fresenius bibag only | Fresenius bibag (unchanged) + Nipro NIPROCART A2F 760 (image) added |

## Date accessed

Sources above were accessed across three work sessions on the same
branch (see the commit history on `layali-2.0-redesign` for the exact
dates of the commits that introduced and extended this document).

---

# Batch 4 — Dialysis catheters, anticoagulation/priming, IV/access
# consumables, dressing supplies

Scope requested: #125–130, #135–140, #144–147, #148–154. Priority was
correct mapping over coverage, as with every prior batch. Two new
manufacturers were researched and introduced this batch — see "New
manufacturers introduced in Batch 4" below.

## #125 — Double lumen catheter kits

### Teleflex (Arrow) Arrowg+ard Blue™ Acute Hemodialysis Catheter — ErgoPack™ Complete Kit
- **Official source:** https://teleflex.com/usa/en/product-areas/vascular-access/central-access/acute-hemodialysis-catheters/index.html (fetched directly), cross-checked against the page's own "Order Information" table (fetched via JS from the live DOM)
- **New manufacturer:** Teleflex (Arrow brand) was not one of the five original pilot manufacturers. It was researched under this batch's explicit "research permission only" grant (suggested candidates: BD/Bard, Teleflex/Arrow, Medtronic/Covidien) after confirming that none of Nipro/Fresenius/Terumo/3M/Ansell make a genuine central-venous hemodialysis catheter (see "Rejected" notes below). No Layali distributorship, partnership, or authorization is stated or implied anywhere in the data.
- **Fields taken from source:** two-lumen design, 12Fr/14Fr sizes with multiple lengths (13/16/20/25cm), Arrowg+ard Blue™ antimicrobial technology (chlorhexidine + silver sulfadiazine coated catheter), rotating suture hub, staggered exit ports, Blue FlexTip design, straight or You-Bend™ extension line options. Order-info table confirmed exact item numbers (e.g. CDC-26122-XCN1A = "AGB Hemodialysis 2-L Straight: 12Fr X 25CM, ErgoPack™ Complete with Tegaderm™ CHG Dressing," 5/case) — confirming the product ships as a complete kit and independently cross-confirming that 3M Tegaderm CHG Dressing (see #130) is genuinely bundled with this catheter family, from a source unrelated to 3M's own marketing.
- **Not verified / left out:** any clinical/efficacy claims from the page (CLABSI reduction, clinical study references) — deliberately omitted per the no-clinical-claims rule; only catalog-identification facts were kept.
- **Image:** obtained. Official kit-tray photo (`teleflex.com/.../acute-hemodialysis-catheters/VA-Dialysis-12F-2L-NonPI-AGB-CHG-straight.png`, 580×386 original), showing the ARROW-branded procedure tray with catheter, drapes, syringes, and dressing packets, unaltered. Saved to `images/products/125-126-arrow-agb.jpg` / `.webp` (580×386 — under the 1200px cap, not upscaled).

## #126 — Temporary HD catheter (returned to pending — correction)

**Correction (post-Batch-4 review):** an earlier pass attached the same
Teleflex (Arrow) Arrowg+ard Blue™ Acute Hemodialysis Catheter — ErgoPack™
Complete Kit `verifiedProducts` record to both #125 and #126, reasoning
that the product is genuinely both a double-lumen kit and a temporary/
acute catheter. On review, this was corrected: the catalog standard
requires one canonical manufacturer-product placement per real product,
not attachment across multiple canonical Layali source entries even when
both descriptions are technically true. The exact commercial
configuration verified — the ErgoPack™ Complete Kit — is most precisely a
*kit* product, making #125 (Double lumen catheter kits) the correct single
canonical placement. The `verifiedProducts` record has been **removed**
from #126, which is back to its normal pending state.

The Arrowg+ard Blue catheter genuinely is also an acute/temporary
(non-tunneled) hemodialysis catheter — that fact is not in dispute, and
remains recorded under #125's own specs (`Use: Acute / temporary
(non-tunneled) central venous hemodialysis access`). #126 simply is not
where the manufacturer-product record itself lives. #126 remains open for
a future independently verified temporary HD catheter product whose own
commercial configuration is distinct enough (e.g. sold as a bare catheter
rather than a named kit) to justify its own canonical placement, rather
than reusing #125's kit-specific record.

### Rejected: Nipro Canada / CardioMed "TempCath" hemodialysis catheter
Investigated at https://nipro.ca/product/tempcath-hemodialysis-catheter/ as a way to keep the catheter family inside the original five pilot manufacturers (Nipro). **Rejected** because the page's own text is internally inconsistent about who makes it: one paragraph reads *"CardioMed's TempCath hemodialysis catheters..."* while the page's own "Description" heading reads *"Nipro Canada's TempCath hemodialysis catheters..."* — the same page attributes the product to two different companies. The product photo (`nipro.ca/wp-content/uploads/2017/08/CM-5033B.jpg`) shows no legible manufacturer branding that would resolve the ambiguity. Per the precedent set by the #133 Centrisol/Minntech finding (never publish a manufacturer attribution that cannot be confidently assigned), this product was **not** added to the catalog. Documented here so a future batch does not re-attempt it without first resolving the CardioMed-vs-Nipro-Canada relationship directly with Nipro.

## #127 — Tunneled catheter kits

### Teleflex (Arrow) Arrow-Clark™ VectorFlow® Chronic Hemodialysis Catheter
- **Official source:** https://www.teleflex.com/usa/en/product-areas/interventional/hemodialysis/arrow-clark-vectorflow-chronic-hemodialysis-catheter/index.html (fetched directly)
- **Fields taken from source:** explicitly described as "tunneled hemodialysis catheter," indicated for "long-term vascular access for hemodialysis and apheresis," symmetrical tip design, retrograde and antegrade insertion platforms, preferentially placed in the internal jugular vein (subclavian as an alternative; catheters >40cm for femoral insertion), intended for adult patients. Kit contents per the official brochure search snippet: catheter, SmartSeal™ Dialysis Sheath, spring wire guide, introducer needle, tissue dilators, Luer Lock caps, tunneler, safety scalpel, Tegaderm® dressing.
- **Distinct from #125/#126:** confirmed on a separate official Teleflex product page under a different product-area path ("interventional/hemodialysis" vs. "vascular-access/central-access") — genuinely a different catheter family (tunneled/chronic vs. acute/temporary), not the same product relabeled.
- **Trademark note:** the page's own footer states "VectorFlow is a registered trademark of Aegis Medical Technologies LLC." Teleflex/Arrow is the company that markets, sells, and presents this product on its own official domain, so manufacturer attribution follows Teleflex (Arrow), consistent with how the site already treats products whose trademark chain involves a licensing arrangement (e.g. the 3M/Solventum transition). Flagged here for transparency, not treated as disqualifying.
- **Image:** obtained. Official annotated product diagram (`teleflex.com/.../vectorflow_callout.png`, 850×373 original) showing the actual catheter with its red/blue lumens, ARROW-branded suture wing, and manufacturer's own technical callouts (symmetrical tip, sidehole design, minimal recirculation) — similar in nature to the annotated-diagram treatment already accepted for #130 in this batch. Unaltered. Saved to `images/products/127-vectorflow.jpg` / `.webp` (850×373).
- **Considered but not used:** a marketing hero banner (`vectorflow-product-page-banner.jpg`) with the tagline "Designed for performance" baked into the image — rejected in favor of the technical callout diagram, consistent with the project's preference against promotional/tagline imagery as a catalog photo.

## #128 — Catheter caps & clamps (pending)

Investigated ICU Medical ClearGuard™ HD Caps (a genuine standalone antimicrobial catheter-cap product) and a Curemed Nordic replacement catheter clamp, but neither manufacturer is among the five original pilot manufacturers or the three suggested catheter-research candidates (BD/Bard, Teleflex/Arrow, Medtronic/Covidien) for this batch. The Arrow-Clark VectorFlow kit (see #127) includes "Luer Lock Caps" as a kit component, but these are not sold or documented as a standalone product with their own specifications. Per instruction ("leave pending if no clean match" and never introduce a manufacturer merely because it appears in search results), #128 remains pending.

## #129 — Catheter dressing kits (pending)

Investigated "central line dressing change kit" / "CVC dressing kit" products. All genuine standalone kit products found (Medical Action Industries, Medline, Bioseal, Busse Hospital Disposables, McKesson) are outside every manufacturer permitted for this batch. None of the five pilot manufacturers or Teleflex/Arrow sell a standalone "catheter dressing kit" as its own product (3M sells individual dressings, not assembled kits; the Arrow-Clark VectorFlow kit is a catheter-placement kit, not a dressing-change kit). #129 remains pending rather than mapping an individual dressing product to a "kit" entry.

## #130 — Tegaderm/chlorhexidine dressings

### 3M Tegaderm™ CHG Chlorhexidine Gluconate I.V. Securement Dressing
- **Official sources:** three official 3M PDF documents fetched directly and read as images/pages — package insert (confirms indication: "central venous or arterial catheters"), product guide for model 1657 (confirms exact dimensions and pack size), and a 3M Regulatory Data Sheet (confirms the full model list: 1657, 1657R, 1658, 1658NS, 1658R, 1659, 1659R, 1660, 1660R). All fetched from `multimedia.3m.com`, which continues to host legacy 3M-branded document assets independent of the Solventum corporate spinoff (see the "3M/Solventum" note below).
- **Fields taken from source:** CHG gel pad size 1-3/16" x 1-1/2" (model 1657), overall dressing size 3-1/3" x 4-1/3" (model 1657), 25 dressings/box, 4 boxes/case, 2% w/w chlorhexidine gluconate gel pad, indicated for central venous or arterial catheters.
- **Independent corroboration:** Teleflex's own official Arrow AGB Hemodialysis Catheter order-info table (see #125/#126 above) lists "ErgoPack™ Complete with Tegaderm™ CHG Dressing" as a real, purchasable kit configuration — an independent, non-3M source confirming Tegaderm CHG is genuinely used with hemodialysis catheters, from a different manufacturer's own commercial documentation.
- **Not verified / left out:** a search-snippet claim that the indication text specifically says "dialysis catheters" was not independently confirmed in the three documents actually read this session — only "central venous or arterial catheters" was directly verified, so that is the only indication phrase recorded.
- **3M / Solventum note:** 3M's medical/healthcare business has been spun off into "Solventum" (solventum.com); legacy 3m.com/medical product pages now 404, but PDF assets on multimedia.3m.com remain accessible and the product still carries the 3M™ trademark on its own packaging and documentation. Manufacturer attribution follows the product's own branding (3M), consistent with how #150/#152/#153 are also attributed to 3M despite being fetched from solventum.com.
- **Image:** obtained via a new technique for this project — the official product-guide PDF page was rendered to a high-resolution JPEG via `pdftoppm` (300 DPI), and the product-photo region was cropped out (1340×1030 before final resize), retaining 3M's own diagram annotation lines unaltered (not stripped or redrawn). Optimized to `images/products/130.jpg` / `.webp` (1200×922).

## #135 — Heparin vial & syringes (pending)

No pharmaceutical manufacturer of injectable heparin exists among the five pilot manufacturers, Teleflex/Arrow, or any other manufacturer this batch was authorized to research. Per instruction not to imply a syringe manufacturer makes the drug, and not to guess, #135 remains pending.

## #136 — Low molecular weight heparin (pending)

Same reasoning as #135 — no approved manufacturer in scope makes an LMWH product. Left pending per the explicit "do not guess" instruction for this entry.

## #137 — Prefilled heparin syringes (pending)

Identified BD PosiFlush™ Prefilled Heparin Lock Flush Syringe as a genuine, well-documented commercial product during research, but BD/Bard's new-manufacturer research permission for this batch was scoped specifically to the dialysis catheter entries (#125–130), not to medications/priming products. Rather than extend that permission on its own judgment, this entry is left pending, with the BD PosiFlush finding recorded here for a future batch to evaluate with explicit authorization.

## #138 — Citrate lock solution (pending)

Identified Citra-Lock™ as a genuine branded citrate/catheter-lock solution product, but its manufacturer is outside every manufacturer permitted for this batch. No citrate lock product was found from any of the five pilot manufacturers or Teleflex/Arrow. Left pending.

## #139 — Normal saline 0.9% 1L & 500mL

### Nipro 0.9% Sodium Chloride Injection, USP
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/09-sodium-chloride-injection-usp (fetched directly) — a Nipro Medical Corporation product (Renal Care / Renal Solutions line), not a different Fresenius entity.
- **Important distinction documented for future batches:** a search also surfaced a "Fresenius Injection IV Solution .9% Sodium Chloride 1000ml Bags" product, but its actual manufacturer is **Fresenius Kabi** — a separate legal entity/brand from **Fresenius Medical Care** (this pilot's approved manufacturer, which focuses on dialysis equipment/disposables, not general IV pharmaceuticals). Fresenius Kabi was deliberately **not** used or introduced this batch to avoid the same kind of manufacturer misattribution the #133 Centrisol finding warned against. Using the Nipro product instead avoided this issue entirely, since Nipro is already an approved pilot manufacturer.
- **Fields taken from source:** 1000 mL sterile, single-use, flexible container; manufacturer-stated use is "priming, recirculating, or reinfusing" in hemodialysis; not made with latex or BPA; 12 pcs/case (individually overwrapped); made in the USA.
- **Not verified / left out:** a 500 mL variant. Only the 1000 mL container is confirmed on Nipro's official page — the 500 mL size in Layali's source entry is **not** claimed to exist as a verified Nipro product.
- **Architecture note:** no new canonical record was created; #139 remains the sole Hemodialysis-side entry for normal saline, per instruction.
- **Image:** none obtained — no product photo was found on the official Nipro page (only unrelated "related product" thumbnails).

## #140 — Sterile water / D5W (pending)

Same Fresenius Kabi / Fresenius Medical Care distinction noted under #139 applies here — no D5W or sterile water product was found from Nipro or any other approved manufacturer this batch. Left pending; no new canonical record created or altered.

## #144 — IV cannula & extension tubing (pending)

Investigated whether Terumo (already used for #75, SurFlash Polyurethane I.V. Catheter) or another approved manufacturer offers a distinct cannula+extension-tubing combination product specific to this HD source entry. No such distinctly-named combination product was found this session. Per the explicit instruction not to blindly duplicate #75 into #144 without a documented, non-misleading reason, #144 was left pending rather than force a reference.

## #145 — IV set

### Terumo Terufusion™ Administration Set
- **Official source:** https://www.terumo-europe.com/en/medical-care-solutions/products/product-type/infusion-pumps-and-accessories/administration-set (fetched directly)
- **Fields taken from source:** sharp 2-way spike for bag/bottle penetration, adjustable roller clamp with priming notch, Y-site with needleless connecting device, does not contain DEHP, designed for use with Terumo's Terufusion infusion pump line.
- **Image:** none obtained — no product-only photo was found on the official page.

## #146 — Three-way stopcock

### Nipro Three-Way Stopcock
- **Official sources:** https://nipro.ca/product/stopcocks/ and https://niproasia.com.sg/product/three-way-stopcock/ (both fetched directly)
- **Fields taken from source:** catalog code 17-369C ("3-Way Stopcock with Caps"), 50/box, rotating cocks, clear body for flow-path visibility, pressure and chemical resistant.
- **Image:** deliberately **not** used. The only product photo found on Nipro's own sites (`nipro.ca/wp-content/uploads/2025/06/17-469N-Edited-V2-Edit.png`) is explicitly captioned as showing "17-469N," a different item in the same family (a 4-way large-bore stopcock), not the 3-way stopcock (17-369C) actually mapped here. Rather than show the wrong configuration under this entry, no image was attached.

## #147 — Pressure transducer tubing (pending — correction)

### Rejected: Nipro TP-Sure™ Transducer Protector
**Correction (post-Batch-4 review):** an earlier pass attached this
product to #147 as its closest available match. That mapping has been
**removed** — the catalog standard does not allow "closest available
product" mappings, only exact product matches, and this document's own
original note already identified the mismatch (see below). #147 is back
to its normal pending state with no `verifiedProducts` entry.
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/tp-sure-transducer-protector (fetched directly)
- **Why rejected:** Nipro's own product is a **transducer protector** — an inline filter/housing device positioned between a blood tubing set and the hemodialysis machine's pressure monitor — not "pressure transducer tubing" itself. It is an adjacent pressure-monitoring accessory, not the actual tubing represented by the Layali source entry, so it does not meet the exact-match bar even though it is a genuine, well-documented official Nipro product.
- **Fields (kept for future reference, not customer-facing):** 0.1 micron hydrophobic filter (bacterial/viral barrier), latex-free, 100/box, described by Nipro as "designed to be clear all throughout" for flow-path visibility, used to protect the pressure monitor and help maintain fluid-pathway sterility.
- **Image:** none obtained — no dedicated product photo exists on the fetched page (only unrelated "related product" thumbnails).
- **Note for future batches:** if Nipro, or any approved manufacturer, is found to sell the actual pressure-monitoring line/tubing itself (as opposed to the inline protector/filter accessory), that would be the correct exact match for #147. TP-Sure should not be re-proposed for this entry without that distinction changing.

## #148 — Sterile gauze & cotton balls (pending)

No official 3M, Ansell, Nipro, Fresenius, or Terumo product for sterile gauze sponges or cotton balls was found this session (3M's own product listings under this search term were unrelated cleaning/sanding sponges). Left pending.

## #149 — ABD pads (pending)

Not researched this batch due to time/scope constraints across the full Batch 4 list; no manufacturer match attempted. Left pending.

## #150 — Micropore & silk tape

### 3M Micropore™ Surgical Tape
- **Official source:** https://www.solventum.com/en-us/home/f/b10057822/ (product family page; corrected from a placeholder URL used mid-session — this is the verified official page for the standard 1530-series Micropore Surgical Tape)
- **Fields taken from source:** manufacturer-stated use ("secures light-weight dressings and non-critical tubes"), paper tape material, gentle-to-skin adhesive.
- **Image:** obtained. Official application/lifestyle photo (`s7d9.scene7.com/is/image/mmmspinco/msd-patient-management-micropore-surgical-tape-bplus-image-01-en-us`, 1280×1280 original) showing the tape being applied over a gauze dressing on a patient's arm by a gloved clinician, unaltered aside from cropping out a green marketing-copy banner at the bottom of the original image. Not a pristine product-only photo, but genuine official 3M imagery, consistent with similar lifestyle/application photos already accepted in earlier batches. Cropped to 1280×830, optimized to `images/products/150.jpg` / `.webp` (1200×778).
- **Not used:** the "silk tape" half of this generic Layali entry — no 3M or other approved-manufacturer silk tape product was identified, so the verifiedProducts record covers only the Micropore (paper tape) portion, consistent with the instruction that a verified product may cover only part of a generic entry.
- **Considered but not used:** an alternate Solventum image (`...-image-02-en-us`, "Multi-purpose tape" variant) — the image-01 photo was judged clearer and more directly tied to the "secures dressings/tubes" use case relevant to this catalog.

## #151 — Elastic bandage (pending)

Not researched this batch due to time/scope constraints. Left pending.

## #152 — Transparent film dressing

### 3M Tegaderm™ I.V. Transparent Film Dressing with Border
- **Official source:** https://www.solventum.com/en-us/home/f/b00035596/ (fetched directly)
- **Deliberately distinct from #130:** this is 3M's plain (non-antimicrobial, non-CHG) transparent film dressing family — confirmed both by the product copy (no chlorhexidine or gel-pad mentioned anywhere on the page) and by the product photo actually obtained, which shows a plain transparent pad with no visible gel pad — physically distinct from #130's CHG dressing (which has a visible tinted gel pad in its own photo). The two records are not duplicates of the same underlying product.
- **Fields taken from source:** catalog numbers 1610, 1633, 1635, 1635NS, 1655, 1655NS with their exact sizes; "picture-frame" delivery liner; manufacturer-stated wear time "can be safely left on central venous catheters for up to seven days"; not made with natural rubber latex.
- **Not verified / left out:** any clinical citation details beyond the wear-time fact already directly stated on the product page.
- **Image:** obtained. Official packshot photo (`s7d9.scene7.com/is/image/mmmspinco/1614-Tegaderm-packshot-pic-3M-001`, 1280×708 original) showing the actual dressing on its release liner with a visible 3M identifier printed on the liner, unaltered. Optimized to `images/products/152.jpg` / `.webp` (1200×664).

## #153 — Chlorhexidine & alcohol swabs

### 3M SoluPrep™ QD Small Swab
- **Official source:** https://www.solventum.com/en-ca/home/f/b00041801/ (fetched directly; the en-us equivalent URL 404'd, so the en-ca page was used instead — same 3M/Solventum product family)
- **Exact-match caveat:** the product page's general copy describes the broader SoluPrep Swab family at 2% w/v CHG / 70% v/v IPA (catalog numbers 102.03, 10107, 10203, 10208, 10209), but the actual product photo obtained shows a specific labeled unit reading "SoluPrep™ QD Swab," product code **102.02**, **0.5% w/v** chlorhexidine gluconate + 70% v/v isopropyl alcohol, 1.6 mL single unit dose. The `verifiedSpecs` below deliberately match what is printed on the photographed unit, not the 2% CHG copy from the general page — the same principle used for the #79 Ansell brand-name correction (let the actual obtained image define the exact model recorded).
- **Fields taken from source:** flat tip design ("for easy cleaning under catheters"), peel-apart packaging, latex-free, for hospital/healthcare professional use only.
- **Image:** obtained. Official packaging photo (`s7d9.scene7.com/is/image/mmmspinco/102-02_02_ip_center`, 1280×1280 original) showing the fully legible product label with "3M," "SoluPrep QD Swab," product code, DIN number, and composition, unaltered. Optimized to `images/products/153.jpg` / `.webp` (1200×1200).

## #154 — Povidone iodine (pending)

Not researched this batch due to time/scope constraints. Left pending.

## New manufacturers introduced in Batch 4

**Teleflex (Arrow brand)** — introduced under this batch's explicit "research permission only" grant for dialysis catheters, after confirming none of the five original pilot manufacturers make a genuine central-venous hemodialysis catheter. Used for #125, #126, #127. As with the original five, nothing in this data states or implies that Layali Medical Supply is an authorized distributor, partner, or representative of Teleflex/Arrow — these are catalog-identification records only.

No other new manufacturers were introduced. BD/Bard and Medtronic/Covidien were both researched as candidates (BD's Power-Trialysis and HemoStar catheter lines, and BD's PosiFlush prefilled heparin syringe, all look like genuine potential matches) but were **not** added, since Teleflex/Arrow alone already covered #125–127 cleanly and introducing additional catheter manufacturers in the same batch was judged unnecessary manufacturer sprawl. These are recorded here as viable candidates for a future batch if Teleflex/Arrow ever proves insufficient for a new entry.

## Batch 4 summary of what changed

| Source ID | Before Batch 4 | After Batch 4 |
|---|---|---|
| #125 | Pending | Teleflex (Arrow) Arrowg+ard Blue AGB Catheter — ErgoPack Complete Kit (imaged) |
| #126 | Pending | Still pending (corrected — no longer shares #125's record; see #126 section) |
| #127 | Pending | Teleflex (Arrow) Arrow-Clark VectorFlow Chronic HD Catheter (imaged) |
| #128 | Pending | Still pending (ICU Medical ClearGuard HD Caps identified but not added — manufacturer out of scope) |
| #129 | Pending | Still pending (no standalone kit product found in scope) |
| #130 | Pending | 3M Tegaderm CHG Dressing family, models 1657 et al. (imaged) |
| #135–138, #140 | Pending | Still pending (conservative; no in-scope manufacturer match) |
| #139 | Pending | Nipro 0.9% Sodium Chloride Injection, USP, 1000 mL (text only) |
| #144 | Pending | Still pending (no distinct match; #75 not duplicated) |
| #145 | Pending | Terumo Terufusion Administration Set (text only) |
| #146 | Pending | Nipro Three-Way Stopcock 17-369C (text only) |
| #147 | Pending | Still pending (corrected — Nipro TP-Sure Transducer Protector rejected as not an exact match; see #147 section) |
| #148, #149, #151, #154 | Pending | Still pending (not researched this batch) |
| #150 | Pending | 3M Micropore Surgical Tape (imaged) |
| #152 | Pending | 3M Tegaderm I.V. Transparent Film Dressing with Border (imaged) |
| #153 | Pending | 3M SoluPrep QD Small Swab (imaged) |

## Date accessed (Batch 4)

Sources above were accessed in a single work session on `layali-2.0-redesign`, continuing from HEAD `f9641abeb07ade94df56e20c4f684ec10b1501d9`.

---

# Batch 5 — Catheter accessories, catheter-lock/prefilled products,
# dressing consumables, PPE, machine/water-treatment consumables

Scope requested: #128–129, #137–138, #148–149, #151, #154–159, #190–196.
Continuing from HEAD `92c4675677b47a0f760f8d39bd040b387d625231`. Three new
manufacturers were introduced this batch, each explicitly authorized in the
task brief for a specific entry — see "New manufacturers introduced in
Batch 5" below.

## #128 — Catheter caps & clamps

### ICU Medical ClearGuard® HD Antimicrobial Barrier Cap
- **New manufacturer:** ICU Medical, Inc. — explicitly authorized this batch as the suggested candidate for #128.
- **Official sources:** product page https://www.icumed.com/products/renal-care/clearguard-hd-antimicrobial-barrier-caps-for-hemodialysis-catheters/ (fetched directly) and the official Instructions for Use PDF (`icumed.com/media/2k3bg4xz/lm-0002-rev-g-instructions-for-use-ifu-us.pdf`, fetched and read in full).
- **Fields taken from source:** two caps per shield (color-coded red/blue lock rings), chlorhexidine acetate coating on rod and lock ring threads (≤2.53 mg total per pair, max 0.6 mg released per pair), single-use, gamma sterilized, indicated for use with hemodialysis catheter hubs, used in place of a standard cap or connector, compatible with heparin/citrate/saline lock solutions, recommended max use time 3 days.
- **Deliberately excluded:** every clinical-trial statistic and comparative-efficacy claim on the official page and in the IFU (CLABSI/PBC reduction percentages, the Brunelli/Hymes cluster-randomized trial results, "clinically proven," comparisons to Tego+Curos) — per the strict no-clinical-claims/no-infection-prevention-recommendation rule, none of this was carried into `verifiedSpecs`. Only structural/identification facts were kept.
- **Exact-match reasoning:** this is a genuine, dedicated, standalone dialysis-catheter cap product (not a generic IV needleless connector, and not a repurposed clamp) — the official product name and IFU both confirm it is "a cap for use with hemodialysis catheters."
- **Image:** obtained. Official technical diagram (`icumed.com/media/wt1dq3ww/centered-image_clearguard_how-it-works.png`, 1108×480 original) showing the actual cap attached to a catheter hub with the manufacturer's own annotations ("Coated with chlorhexidine, a broad-spectrum antimicrobial agent," "Antimicrobial agent remains in desired region due to the existing clamps") — informational/structural, not a marketing or clinical-stat graphic. Unaltered. Optimized to `images/products/128-clearguard.jpg` / `.webp` (1108×480).
- **Considered but not used:** a marketing stat graphic ("Reduce CLABSIs... by up to 63%") found on the same page — rejected outright as a clinical-claim visual, not a product photo.

## #129 — Catheter dressing kits (pending)

Re-confirmed this batch: no genuine "catheter dressing kit" (or general central-line/CVC dressing-change kit) product was found from any of the eight now-approved manufacturers (Nipro, Fresenius Medical Care, Terumo, 3M/Solventum, Ansell, Teleflex/Arrow, ICU Medical, Dirinco). All standalone dressing-kit products identified in market research (Medical Action Industries, Medline, Bioseal, McKesson) remain outside every approved manufacturer. Per instruction not to reuse #130 (a single dressing product, not a kit) as a substitute, #129 remains pending.

## #137 — Prefilled heparin syringes

### BD PosiFlush™ Prefilled Heparin Lock Flush Syringe
- **New manufacturer:** BD (Becton, Dickinson and Company) — explicitly authorized this batch for this specific product, following its identification (but non-use) in Batch 4.
- **Official source:** https://www.bd.com/en-us/products-and-solutions/products/product-page.306424 (fetched directly; SKU, fill volume, and concentration confirmed directly from the official page's own title/URL: "5 mL Syringe 5 mL Heparin Fill, 100 USP units/mL").
- **Distinguishing saline vs. heparin:** BD sells a separate, visually similar "BD PosiFlush Pre-Filled **Saline** Syringe" product family (product-families/bd-posiflush-pre-filled-saline-syringe) — confirmed distinct from the heparin family by checking the product name/URL directly; only the explicitly heparin-labeled SKUs (306413, 306414, 306423, 306424) were used here, never assumed.
- **Fields taken from source:** exact SKU 306424 (5 mL syringe, 5 mL heparin fill, 100 USP units/mL); sibling SKUs confirmed via the same product family (306413 = 3 mL/10 U/mL, 306423 = 3 mL/100 U/mL, 306414 = 5 mL/10 U/mL).
- **Not verified / left out:** any dosing, administration, or clinical-guidance text from the BD usage-guidelines PDF — deliberately not carried into the catalog per the no-dosing rule.
- **Image:** obtained. Official product photo, SKU 306424 ("...PosiFlush_5mL_Heparin_Blue.png", 704×400 as served by BD's image CDN in AVIF format — decoded via Pillow, which reads AVIF natively), showing the actual prefilled syringe with its blue cap, unaltered. Optimized to `images/products/137-posiflush.jpg` / `.webp` (704×400, not upscaled).

## #138 — Citrate lock solution

### Dirinco B.V. Citra-Lock™ 4%
- **New manufacturer:** Dirinco B.V. — explicitly authorized this batch as "the actual manufacturer of Citra-Lock."
- **Official source:** https://www.citra-lock.com/producten/citra-lock-4/ (fetched directly).
- **Manufacturer identity double-confirmed:** the citra-lock.com site itself states the manufacturer is "Dirinco" (later reading found a third-party summary calling it "Dirinco AG," but the product's own printed label — read directly off the obtained product photo — clearly states "Dirinco B.V., Ketelmeer 1, 5347 JX Oss, The Netherlands." The label was treated as authoritative over the third-party summary, consistent with the project's practice of trusting an examined photograph over indirect claims.
- **Fields taken from source:** exact product (Citra-Lock™ 4%, 5 mL vial, 20 vials/box, article number 24060201), active ingredient (trisodium citrate 4%), connector type (drip-free Luer-Slip/Luer-Lock).
- **Deliberately excluded:** all comparative/superiority claims present on the official page — "Citra-Lock superior to taurolock," the itemized "clinical advantage... compared to heparine" bullet list (avoids heparin-associated bleeding, safe for HIT patients, reduction of tPA use, cost efficient, etc.), and the ERBP/ASDIN guideline-recommendation claims. None of this comparative/clinical-efficacy language was carried into `verifiedSpecs`, per the explicit instruction against superiority claims and treatment recommendations.
- **Image:** obtained. Official product photo (`citra-lock.com/wp-content/uploads/2017/02/citra-lock-4.png`, 960×960 original) showing three vials with a fully legible label ("Citra-Lock™ 4%, 5 ml," CE 0197, "Dirinco B.V." address), unaltered. Optimized to `images/products/138-citralock.jpg` / `.webp` (960×960).

## #148 — Sterile gauze & cotton balls (pending)

No official sterile gauze sponge or cotton ball product was found from any of the eight approved manufacturers this session. The only sponge-related 3M/Solventum hits were SoluPrep antiseptic-soaked applicator sponges (a chemically different product, already used for a different entry family) — not plain sterile gauze. Left pending.

## #149 — ABD pads (pending)

Not researched this batch due to time/scope constraints across the full Batch 5 list. Left pending.

## #151 — Elastic bandage

### 3M Coban™ Self-Adherent Wrap
- **Official source:** https://www.solventum.com/en-us/home/f/b00003205/ (fetched directly).
- **Fields taken from source:** self-adherent elastic wrap (sticks only to itself, no adhesive/clips/pins/tape needed), contains natural rubber latex, non-sterile, catalog numbers 1581/1581B/1582/1582B/1583/1583B/1583R/1583W/1584/1584B/1586, official 3M category name "Elastic Bandages & Tapes" (directly matching the Layali generic entry name).
- **Product-type note:** Coban is a cohesive/self-adherent wrap rather than a traditional woven (Ace-style) elastic bandage — flagged for transparency, but accepted since 3M's own product-category taxonomy places it under "Elastic Bandages & Tapes."
- **Deliberately excluded:** the "can be worn for up to 7 days... as part of a venous leg ulcer management program" and "used under the supervision of a wound care specialist" treatment-protocol language — not carried into `verifiedSpecs`.
- **Image:** obtained. Official product photo (`s7d9.scene7.com/is/image/mmmspinco/msd-elastic-bandages-tapes-coban-self-adherent-wrap-latex-b00003205-pdp-mainimage1-glbl`, 1280×1280 original) showing four color rolls (pink, tan, white, blue) with legible "3M Coban" printed on each roll core, unaltered. Optimized to `images/products/151.jpg` / `.webp` (1200×1200).

## #154 — Povidone iodine (pending)

Every manufacturer found selling povidone-iodine antiseptic swabsticks (Medline, PDI Healthcare, Dynarex, Lights Medical) is outside the eight approved manufacturers for this project. None of Nipro/Fresenius/Terumo/3M/Ansell/Teleflex/ICU Medical/Dirinco appear to manufacture a povidone-iodine product. Left pending.

## #155 — Sterile & clean gloves

### Ansell GAMMEX™ Non-Latex Sensitive
- **Official source:** https://www.ansell.com/us/en/products/gammex-non-latex-sensitive (fetched directly).
- **Distinct from #79:** #79 (Ansell MICRO-TOUCH Nitrile E.P.) is a non-sterile examination glove; GAMMEX is Ansell's sterile surgical glove brand family — confirmed via the product's own tagline ("Non-latex, sterile neoprene surgical gloves") and via the packaging photo obtained, which explicitly shows "Powder-Free" and pair-count labeling consistent with a sterile surgical product, not an exam-glove box.
- **Fields taken from source:** material (neoprene, non-latex, chemical accelerator-free), sterility (sterile), powder status (powder-free per the obtained packaging photo).
- **Not verified / left out:** the "30% thinner" and "ultra-thin technology" marketing comparison claims — not included as they compare against "standard Ansell neoprene surgical gloves" rather than describing this product's own absolute specs.
- **Image:** obtained. Official inner-box packaging photo (`ansell.com/-/media/.../gammex-non-latex-sensitive---inner-box---horizontal---ergo.ashx`, 480×480 original) showing a fully legible "GAMMEX Non-Latex Sensitive" box with size 7½, "Powder-Free," and "50 Pairs" printed on it, unaltered. Optimized to `images/products/155-gammex.jpg` / `.webp` (480×480, not upscaled).

## #156 — Surgical masks & N95 masks

### 3M VFlex™ Health Care Particulate Respirator & Surgical Mask 1804
- **Official source:** https://www.3m.com/3M/en_US/p/d/v100553014/ (fetched directly), cross-referenced with the 1800-series family page (`b00038115`).
- **Distinct from #72:** #72 already uses the 3M 1860 (cup-shaped, stapled ear loops). The VFlex 1804 is a genuinely separate 3M product line — flat-fold, V-pleat design, its own NIOSH approval number (TC-84A-7789) — not the same SKU or a relabeled duplicate. Confirmed visually distinct via the obtained product photo (flat-fold VFlex shape vs. 1860's molded cup shape).
- **Fields taken from source:** NIOSH N95 approval, FDA clearance as a surgical mask, flat-fold V-pleat design, fluid resistance tested per ASTM F1862, available in Small/Standard sizes.
- **Image:** obtained. Official product photo (`multimedia.3m.com/mws/media/2636709J/3m-vflex-health-care-particulate-respirator-and-surgical-mask-1804-n95.jpg`, requested at `?width=1200` = 1200×1200), fully legible "3M VFlex 1804, Surgical N95 Respirator, NIOSH TC-84A-7789" markings, unaltered. Saved to `images/products/156-vflex.jpg` / `.webp` (1200×1200).

### Rejected: 3M W Series Face Shields & Visors (considered for #156/#157, not used)
Investigated as a possible #157 candidate. **Rejected** — the official 3M page explicitly states "For industrial/occupational use only. Not for consumer sale or use," is categorized under 3M's industrial Personal Protective Equipment line (not Medical), and its suggested applications are automotive/construction/welding/mining/oil & gas — not clinical/healthcare use. Using an industrial safety-glasses-adjacent face shield as dialysis-center medical PPE would misrepresent the product's actual intended use. Not mapped to any entry.

## #157 — Face shields (pending)

### Investigated / rejected: 3M™ Attachable Face Shield, EAG-1
- **Official source:** https://www.solventum.com/en-hk/home/f/b5005026000/ (the en-us equivalent 404'd; the en-hk page for the same global catalog number EAG-1 was used instead).
- **Why not used:** the page states "3M™ Attachable Face Shield, EAG-1 is transitioning to Solventum™ **Adhesive Eye Shield**" and its own packaging (read directly from the obtained product photo) identifies it as "マスクにくっつくアイガード" (an eye guard that attaches to a mask) — a small adhesive eye-protection film sized for mounting onto a surgical mask, not a standard hemodialysis-unit face shield. Given the ambiguity between "eye guard accessory" and "face shield" as the generic Layali entry intends, this was judged too weak a match to accept confidently. Not mapped to #157.
- #157 remains pending; a future batch should look specifically for a full clinical face shield (not an industrial visor, not a mask-mounted eye guard) from an approved manufacturer.

## #158 — Isolation gowns & aprons (pending)

Investigated Ansell's AlphaTec/MICROGARD isolation gown line, but every result found was a third-party distributor listing (Zoro, Capitol Scientific, Magid Glove, Northern Safety) rather than a live official ansell.com product page — direct navigation to guessed ansell.com URLs for this product family returned 404s this session. Per the rule to prefer official manufacturer sources over distributor/reseller pages, #158 was left pending rather than cite a distributor listing as the primary source. Worth a retry in a future batch with a corrected official URL.

## #159 — Shoe covers & head caps (pending)

Investigated Ansell EDGE shoe cover series (67-050, 67-100). Both guessed official ansell.com product URLs returned 404 this session (same issue as #158); only distributor listings (Fisher Scientific, Medline, Capitol Scientific) were reachable. Left pending for the same reason as #158.

## #190 — Dialysis fluid filters

### Fresenius Medical Care DIASAFE®plus
- **Official source:** https://freseniusmedicalcare.com/en-gb/healthcare-professionals/haemodialysis/dialyser/diasafeplus-dialysis-fluid-filter/ (fetched directly).
- **Exact-match reasoning:** a genuine replacement filter cartridge (not a whole machine) — confirmed by the product photo, which shows a single cartridge with a screw-lock connector, not a dialysis machine or system.
- **Fields taken from source:** function (end-of-line ultrapure dialysis fluid filter), membrane (Fresenius Polysulfone®), surface area (2.2 m²), connection system (DIAFIX™ lock system).
- **Image:** obtained. Official product photo (`freseniusmedicalcare.com/.../csm-spe001-diasafeplus-dialyzer-....jpeg`, 728×410 original) showing the actual cartridge with legible "DIASAFE plus ONLINE plus" and "Fresenius Medical Care" branding, CE mark, unaltered. Optimized to `images/products/190-diasafe.jpg` / `.webp` (728×410, not upscaled).

## #191 — RO filters & RO membranes (pending)

Investigated Nipro's LiniXia, RO MEDICAL, RO MEDICAL BASIC, and Phoenix One/One DS product lines, and Fresenius's AquaA2. All of these are **whole reverse-osmosis systems/machines**, not standalone replacement RO membrane/filter consumables — per the explicit instruction not to treat a machine as a consumable, none were mapped to #191. No distinct replacement-membrane product (as opposed to a complete RO unit) was identified from an approved manufacturer this session. Left pending.

## #192 — Carbon & sediment filters (pending)

Not researched this batch due to time/scope constraints. Left pending.

## #193 — UV lamps (pending)

Not researched this batch due to time/scope constraints. Left pending.

## #194 — Disinfection chemicals (pending)

Not researched this batch due to time/scope constraints; see #196 below for the one disinfection-related chemical that was resolved (attached there, not here — see reasoning in the #196 entry). Left pending.

## #195 — Citric acid (pending)

See #196 below — Nipro's "Citric Acid for Heat Disinfection" was deliberately placed under #196, not #195, because its official name and stated use are specific to heat-disinfection procedures rather than a generic citric-acid product. #195 remains open for a distinct generic citric-acid product (e.g. one used in general cleaning/descaling rather than specifically machine heat-disinfection) if verified in a future batch.

## #196 — Heat disinfectant chemicals

### Nipro Citric Acid for Heat Disinfection
- **Official source:** https://www.nipro-group.com/en/our-offer/products-services/citric-acid-heat-disinfection (fetched directly).
- **#194/#195/#196 placement reasoning:** the product's own official name is "Citric Acid for Heat Disinfection" and its description states the resulting solution "is to be used in accordance with the hemodialysis machine manufacturer's citric-heat disinfection procedure instructions" — the heat-disinfection use case is the product's defining, named characteristic, not an incidental application of generic citric acid. It was therefore placed under #196 (Heat disinfectant chemicals) rather than #195 (Citric acid) or #194 (Disinfection chemicals, a broader/different category), and is **not** duplicated across any of the three entries.
- **Fields taken from source:** composition (USP grade anhydrous citric acid, mixed with AAMI-quality water to yield a 50% solution), use (per hemodialysis machine manufacturer's citric-heat disinfection procedure), regulatory note (explicitly "Not licensed for use in Canada" per the manufacturer's own page — recorded as-is, not smoothed over).
- **Deliberately excluded:** "highly effective disinfectant properties," "gentler on machine components relative to more caustic disinfecting agents" — comparative/efficacy marketing language, not carried into `verifiedSpecs`.
- **Image:** none obtained — no product photo was found on the official page (only an unrelated "Acid Concentrate" related-product thumbnail).

## New manufacturers introduced in Batch 5

- **ICU Medical, Inc.** — used for #128 only. Explicitly authorized this batch as the suggested candidate for a genuine catheter cap product.
- **BD (Becton, Dickinson and Company)** — used for #137 only. Explicitly authorized this batch, following its identification (but deliberate non-use) in Batch 4.
- **Dirinco B.V.** — used for #138 only. Explicitly authorized this batch as "the actual manufacturer of Citra-Lock."

As with every prior manufacturer introduced in this project, nothing in this data states or implies that Layali Medical Supply is an authorized distributor, partner, representative, or that these products carry Philippine FDA registration or confirmed Philippine availability — none of that was independently verified, and none of it is claimed.

## Batch 5 summary of what changed

| Source ID | Before Batch 5 | After Batch 5 |
|---|---|---|
| #128 | Pending | ICU Medical ClearGuard HD Antimicrobial Barrier Cap (imaged) |
| #129 | Pending | Still pending (re-confirmed, no in-scope kit product) |
| #137 | Pending | BD PosiFlush Prefilled Heparin Lock Flush Syringe (imaged) |
| #138 | Pending | Dirinco B.V. Citra-Lock 4% (imaged) |
| #148, #149, #154 | Pending | Still pending (no in-scope manufacturer match, or not researched) |
| #151 | Pending | 3M Coban Self-Adherent Wrap (imaged) |
| #155 | Pending | Ansell GAMMEX Non-Latex Sensitive (imaged) |
| #156 | Pending | 3M VFlex 1804 (imaged) |
| #157, #158, #159 | Pending | Still pending (candidates investigated and rejected/deferred — see sections above) |
| #190 | Pending | Fresenius Medical Care DIASAFEplus (imaged) |
| #191, #192, #193, #194, #195 | Pending | Still pending (#191 candidates were whole machines, rejected; #192–195 not researched or intentionally left for #196's chemical) |
| #196 | Pending | Nipro Citric Acid for Heat Disinfection (text only) |

## Date accessed (Batch 5)

Sources above were accessed in a single work session on `layali-2.0-redesign`, continuing from HEAD `92c4675677b47a0f760f8d39bd040b387d625231`.

---

# Batch 6 — Dressing/routine consumables, remaining PPE, water-treatment
# consumables, and a high-bar revisit of older unresolved entries

Scope requested: #129, #148–149, #154, #157–159, #191–195, and (only after
exhausting the above) a high-bar revisit of #116–117, #119, #133, #144,
#147. Continuing from HEAD `05b9ceb9922c579227a9adda5ef070fa1e622dc3`.
Quality was explicitly prioritized over coverage this batch: only **one**
new `verifiedProducts` record was accepted (#154); every other investigated
candidate is documented below as rejected or deferred, several because a
promising-looking product turned out on closer inspection to be an
industrial/non-medical product or to have an unresolved manufacturer
identity.

## #129 — Catheter dressing kits (pending — substantial new research)

### Investigated: Medical Action® / HALYARD CLEAR SEQUENCE™ Dressing Change Kits
- **New-manufacturer research (not accepted):** Medical Action Industries is a genuine brand (a subsidiary of Owens & Minor), with an official manufacturer marketing page at https://www.halyardhealth.com/products/infusion-therapy-kits (fetched directly) describing "MEDICAL ACTION® IV Start, Dressing Change and Port Change Kits" and, specifically, "CLEAR SEQUENCE™ Dressing Change Kits" — a genuine, patent-pending kit design that separates dressing removal from application into two sterile fields.
- **Why not accepted:** the marketing page confirms the brand and kit *category* but does not itself provide an exact SKU, pack configuration, or product photo for a central-line/CVC-specific variant. A dedicated product catalog exists at `products.halyardhealth.com` (search results surfaced pages like "CLEAR SEQUENCE* Procedure Kits-10 Pocket w/Protective Flap" under Infection Prevention > Infusion Therapy > Minor Procedure Kits), but this session could not get that catalog's client-side search/deep-linking to return results (repeated attempts loaded only an unrelated "Featured Products" list of Disney-branded pediatric masks). Per the exact-match and "official source as primary evidence" rules, this was not accepted without a confirmed exact SKU and photo from the manufacturer's own catalog.
- **Distributor-only SKU (not used as primary evidence):** third-party listings (McKesson, DOTmed, others) reference Medical Action kit numbers 262834 ("Central Line Dressing Change Kit with Tegaderm®"), 78937, and 77925, but per instruction these distributor pages were not treated as primary evidence for accepting a mapping.
- **Recommendation for a future batch:** retry `products.halyardhealth.com`'s catalog search with more time/different navigation approach, or contact Halyard/Medical Action directly for an exact central-line-specific CLEAR SEQUENCE SKU and photo.
- #129 remains pending. No canonical entry, structure, or prior work disturbed.

## #148 — Sterile gauze & cotton balls (pending)

Re-confirmed this batch: no plain sterile gauze sponge or cotton ball product was found on any official page of the eight approved manufacturers. 3M/Solventum's only sponge-adjacent products remain antiseptic-soaked applicator sponges (SoluPrep Sponge) and specialized wound-vac/pad dressings (AbThera, Medipore +Pad, Tegaderm +Pad) — none of these are plain sterile gauze. Left pending.

## #149 — ABD pads (pending)

Investigated 3M/Solventum's AbThera™ (open-abdomen negative-pressure wound therapy dressing — a specialized surgical device, not a simple absorbent ABD pad) and Medipore™/Tegaderm™ +Pad (adhesive wound dressings with a small integrated pad, not the bulky standalone abdominal combine pad the generic entry describes). Neither is an exact match for an ordinary ABD pad. Left pending.

## #154 — Povidone iodine

### Avrio Health L.P. (dist.) / Atlantis Consumer Healthcare (packager) — Betadine® Solution Swabsticks
- **Official source:** FDA DailyMed structured product label, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0707b259-52a4-4ae6-b176-d093865906e7 (a government-hosted regulatory document reproducing the manufacturer's own FDA-submitted label — fetched and read directly via the page's own rendered text, not a third-party summary).
- **Why this exact label was used (trademark-licensing caution):** "Betadine" is a trademark with a genuinely tangled licensing history across at least three different corporate entities depending on the exact formulation — confirmed directly by cross-checking two other DailyMed entries before selecting this one:
  - The betadine.com consumer site is a retail first-aid line run by Avrio Health L.P., loaded with "treats," "helps prevent infection," and other consumer-facing efficacy language.
  - A different DailyMed entry (setid `b026de1b-...`) for "Betadine 5% Sterile **Ophthalmic** Prep Solution" turned out, on inspection of its own FDA package-photo, to be manufactured for **Alcon Laboratories, Inc.** (a Novartis company) by **Catalent Pharma Solutions, LLC** — a completely different product and manufacturer chain from what a general topical antiseptic search initially suggested, despite bearing the same "Betadine®" trademark (noted on the carton as "Reg. TM of Purdue Products L.P."). This candidate was rejected for #154 specifically because it is an ophthalmic (eye) preparation, not a general antiseptic.
  - The label actually used (Betadine Solution Swabsticks) cleanly and consistently names one chain start to finish: **Packager: Atlantis Consumer Healthcare, Inc.**; **Distributed by: Avrio Health L.P., Stamford, CT** — no conflicting entity appears anywhere on this specific label, unlike the ophthalmic one. Manufacturer attribution follows what is actually printed on this exact document ("Avrio Health L.P."), not the broader "Purdue Products" trademark-owner claim found in unrelated secondary sources, per the project's standing practice of trusting the exact document over indirect claims.
- **Fields taken from source:** active ingredient (povidone-iodine solution USP, 10%, equal to 1% available iodine), category (antiseptic), use (skin preparation prior to surgery), form (single-use swabstick), packaging (1-swab and 3-swab configurations, NDC 67618-153-01 / 67618-153-03).
- **Deliberately excluded:** all consumer-marketing language from betadine.com ("prep like the pros," "no mess, no touch," "supports healthy healing," the sore-throat-gargle cross-sell) and the standard OTC drug-facts phrase "helps reduce bacteria that can potentially cause skin infection" was trimmed to a neutral "Use: Skin preparation prior to surgery" per the no-infection-reduction-claims rule.
- **Image:** none used. An FDA package photo was found and downloaded during research, but it turned out to belong to the rejected Alcon ophthalmic product (different manufacturer, different formulation) — using it under this entry would have shown a photo for a different model/configuration, which the image rules explicitly prohibit. #154 is text-only.

## #157 — Face shields (pending — new rejected candidate)

### Rejected: Ansell AlphaTec 2300/2000 lines investigated for a face-shield equivalent — none found
No Ansell, 3M, or other approved-manufacturer *face shield* product beyond the two already rejected in Batch 5 (3M W Series — industrial; 3M EAG-1 — a mask-mounted eye guard) was identified this session. Confirmed the Batch 5 rejections remain correct and were **not** reintroduced. #157 remains pending; a future batch should look specifically for an AAMI/ASTM-rated clinical face shield (as opposed to industrial safety-eyewear-category products) from an approved or newly vetted manufacturer.

## #158 — Isolation gowns & aprons (pending — Ansell retried, still rejected)

### Rejected: Ansell AlphaTec™ 2300 STANDARD Gown Bound – Model 214
- **Official source:** https://www.ansell.com/us/en/products/alphatec-2300-standard-gown-bound-model-214 (fetched directly this batch — the official ansell.com URL now resolves correctly, unlike the 404s hit in Batch 5).
- **Why rejected:** despite loading successfully this time, the product itself is explicitly an **industrial chemical-protective garment** — "Medium duty chemical protective barrier," tested to ASTM F1671 (viral penetration, an industrial/lab spec) and EN ISO 13688 (general protective clothing), "Recommended for: Handling structural and body components, Equipment maintenance and repair... Fibre Glass/Resin Applications." Its own "Primary Industries" list is "Life Sciences, Automotive, Agriculture, Food Processing" — no hospital/clinical/patient-care context is stated anywhere on the page. Using this as a medical isolation gown would misrepresent an industrial safety product as clinical PPE, the same category of mistake already made and corrected for #157's 3M W Series rejection. Not mapped to #158.
- No other Ansell isolation-gown page (or page from any other approved manufacturer) explicitly framed for clinical/hospital use was found this session. #158 remains pending.

## #159 — Shoe covers & head caps (pending — Ansell retried, deferred)

### Investigated, not accepted: Ansell Kimtech™ / KleenGuard™ shoe cover lines
- **Official sources:** https://www.ansell.com/us/en/products/kimtech-a7-cleanroom-shoe-covers and related Kimtech/KleenGuard/AlphaTec shoe-cover pages (all resolve correctly on ansell.com this batch, unlike Batch 5's 404s).
- **Why not accepted:** every shoe-cover product found lists "Primary Industries: Life Sciences" (pharmaceutical/lab manufacturing cleanroom contexts) — none explicitly states hospital, clinic, or patient-care use the way #155's GAMMEX page explicitly said "sterile... surgical." One variant (Kimtech A5 Sterile Cleanroom Apparel Boot Covers) is at least sterile, which is a promising signal, but still framed for cleanroom/lab use rather than clinical use. Given this session's repeated pattern of industrial-vs-medical mismatches (see #157/#158 above), this was judged too ambiguous to accept confidently without a clearer hospital-context signal.
- **Recommendation for a future batch:** check whether Ansell (or another approved manufacturer) has a distinct hospital/healthcare-specific shoe-cover or bouffant-cap line separate from its Life-Sciences-cleanroom Kimtech/KleenGuard products.
- #159 remains pending.

## #191 — RO filters & RO membranes (pending)

Investigated Fresenius's AquaA/AquaA2/AquaHT water-technology modules and Nipro's LiniXia, RO MEDICAL, and RO MEDICAL BASIC systems. All of these are **whole reverse-osmosis systems or modules**, not standalone replacement membrane elements/cartridges — consistent with the Batch 5 finding, re-confirmed this batch. No distinct replacement-membrane consumable product was identified from either manufacturer's official site. Left pending per the explicit instruction not to map a complete machine/system.

## #192 — Carbon & sediment filters (pending)

No official Fresenius or Nipro product page for a standalone replacement carbon or sediment filter cartridge was found this session (only generic patent literature and unofficial third-party technical explanations of how such filters function within water-treatment trains generally). Left pending.

## #193 — UV lamps (pending)

No official Fresenius or Nipro product page for a standalone replacement UV lamp was found this session. Left pending.

## #194 — Disinfection chemicals (pending — new rejected candidate)

### Rejected: Nipro "Sanacide-R7" peracetic-acid disinfectant
- **Why investigated:** a genuinely distinct chemistry from #196's citric acid — peracetic acid (4.5%) + hydrogen peroxide + acetic acid, described as a dialysis-machine/dialyzer-reprocessing/RO-system disinfectant, which would be an excellent exact-match candidate for #194 if the manufacturer relationship could be confirmed.
- **Why rejected:** every source found for this product's specifications was a regional distributor site (Thai Amtec Co., Ltd. — a Thai medical-supply distributor) or a regional Nipro-branded distributor portal (niproinindia.com), **not** Nipro's own global corporate domain (nipro-group.com or nipro.com). Per the explicit rule against relying on distributor/reseller pages as primary evidence, and given this session could not independently confirm Sanacide-R7 as an official Nipro-manufactured product on Nipro's own site, it was **not** added to the catalog. Documented here so a future batch can attempt to verify it directly against nipro-group.com or an official Nipro IFU/technical sheet before reconsidering.
- #194 remains pending.

## #195 — Citric acid (pending)

No distinct, generic (non-heat-disinfection-specific) citric-acid cleaning/descaling product was found from Nipro or Fresenius this session — every Nipro citric-acid product found (CA-50, Citrix-50H, Citrix-LA) is explicitly framed as a citric-heat or hot-water-immersion disinfection product, i.e., the same conceptual product family already placed under #196. Per the Batch 5 decision (reaffirmed here), none of these were duplicated under #195. #195 remains pending, open for a genuinely distinct generic citric-acid product if one is found in a future batch.

## Priority D — high-bar revisit of older unresolved entries

### #116, #117 — Arterial / Venous bloodline (pending, unchanged)
Not re-investigated beyond re-confirming the Batch 3 finding remains correct: every Nipro/Fresenius bloodline product found is a **combined** arterial+venous set distinguished only by compatible machine, never separate arterial-only/venous-only products. Per explicit instruction not to split a combined set across #116/#117, both remain pending. No new manufacturer evidence was found this session that would change this conclusion.

### #119 — Pediatric tubing set (pending, unchanged)
Not re-investigated beyond re-confirming the Batch 3 finding: Fresenius's pediatric hemodialysis material describes the 5008 CorDiax Paed *machine*, not a distinct pediatric bloodline *set* product. Per explicit instruction not to infer "pediatric" from low-volume/small size, #119 remains pending.

### #133 — Liquid bicarbonate (pending — manufacturer identity partially resolved, but product's current commercial status now in doubt)
- **New finding this batch:** the historical manufacturer identity question flagged in Batch 3 (a Fresenius page's own hero photo showing a bottle branded "Centrisol® ... MINNTECH RENAL SYSTEMS / MEDIVATORS INC.") has been partially resolved via independent, non-Fresenius sources: FDA AccessGUDID device registry and FDA MAUDE adverse-event reports both confirm **CENTRISOL® is a registered trademark of Medivators Inc.**, manufactured by **Minntech Corporation** — entirely independent confirmation, not reliant on the ambiguous Fresenius page.
- **New complication discovered:** medivators.com now redirects entirely to steris.com (Minntech/Medivators having been absorbed into STERIS Corporation), and STERIS's current Medivators-branded web presence is **exclusively about endoscope reprocessing** — no renal/dialysis/Centrisol/bicarbonate content of any kind was found on the current site. This raises real doubt about whether Centrisol liquid bicarbonate concentrate is still a currently manufactured/available product at all, as opposed to a discontinued/legacy line.
- **Why still not accepted:** per the rule against inferring stock availability or current commercial status, and since "who manufactures this today, if anyone" remains genuinely unresolved (STERIS's own site shows no trace of the product line), #133 remains pending. This is meaningfully better-documented than before, but still not resolved to the standard required for a customer-facing mapping.
- The Fresenius/Centrisol/Minntech attribution was **not** revived as a Fresenius-manufacturer claim — consistent with the explicit instruction not to do so without resolving identity, and identity resolution (Minntech/Medivators/STERIS) still leaves current availability unconfirmed.

### #144 — IV cannula & extension tubing (pending, unchanged)
Not re-investigated this batch. #75 (Terumo SurFlash) was not reused, consistent with the Batch 4 decision. Left pending.

### #147 — Pressure transducer tubing (pending, unchanged — TP-Sure confirmed NOT reintroduced)
Explicitly re-confirmed this batch: Nipro TP-Sure™ Transducer Protector remains excluded from #147's customer-facing data (verified via direct inspection of `product-catalog.json` before and after this batch's edits — #147 has no `verifiedProducts` key). The rejection documented in the Batch 4 cleanup (TP-Sure is a transducer *protector* accessory, not the tubing itself) stands unchanged. No new manufacturer evidence was found this session for genuine pressure-transducer tubing. Left pending.

## New manufacturers introduced in Batch 6

**Avrio Health L.P.** — used for #154 only (Betadine® Solution Swabsticks), per the official FDA DailyMed structured product label naming it as the distributor on this exact product's regulatory document. No Layali distributorship, partnership, Philippine availability, or Philippine FDA registration is stated or implied.

No other new manufacturers were accepted this batch. Medical Action Industries/HALYARD (#129) and Minntech Corporation/Medivators Inc. (#133) were both researched in depth and found to be genuine brand owners with real official web presences, but neither was introduced into customer-facing data — #129 for lack of a confirmed exact SKU+photo, #133 for unresolved current commercial availability. Nipro's Sanacide-R7 (#194) was investigated but its manufacturer relationship to Nipro could not be confirmed on Nipro's own domain, so no new attribution was made there either.

## Batch 6 summary of what changed

| Source ID | Before Batch 6 | After Batch 6 |
|---|---|---|
| #129 | Pending | Still pending (Medical Action/HALYARD CLEAR SEQUENCE identified as a strong future lead; no exact SKU/photo confirmed this session) |
| #148, #149 | Pending | Still pending (re-confirmed, no in-scope manufacturer match) |
| #154 | Pending | Avrio Health L.P. Betadine Solution Swabsticks (text only) |
| #157 | Pending | Still pending (no new candidate found; prior rejections re-confirmed) |
| #158 | Pending | Still pending (Ansell AlphaTec 2300 gown retried and rejected — industrial, not medical) |
| #159 | Pending | Still pending (Ansell Kimtech/KleenGuard shoe covers retried — cleanroom-context, not confirmed clinical) |
| #191, #192, #193 | Pending | Still pending (only whole systems/modules found, correctly not mapped) |
| #194 | Pending | Still pending (Nipro Sanacide-R7 identified but rejected — distributor-only evidence, not confirmed on Nipro's own domain) |
| #195 | Pending | Still pending (no distinct non-heat-disinfection citric-acid product found) |
| #116, #117, #119, #144, #147 | Pending | Unchanged (re-confirmed; #147's TP-Sure exclusion re-verified) |
| #133 | Pending | Still pending (manufacturer identity partially resolved to Minntech Corporation/Medivators Inc., but current commercial availability now in doubt after finding Medivators' web presence fully absorbed into STERIS's endoscopy-only business) |

## Date accessed (Batch 6)

Sources above were accessed in a single work session on `layali-2.0-redesign`, continuing from HEAD `05b9ceb9922c579227a9adda5ef070fa1e622dc3`.
