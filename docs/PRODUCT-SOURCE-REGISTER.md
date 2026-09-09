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
- **Note:** #116 (Arterial bloodline), #117 (Venous bloodline), #119 (Pediatric tubing set), and #120 (Online HDF tubing set) were deliberately **not** given verified manufacturer data this pass — CombiSet is a general adult set most directly matching #118; the pediatric and HDF-specific variants would need their own distinct verified products, which weren't researched this session.
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
- **Note:** #124 ("Sharp needles & blunt needles") was **not** given verified data this pass — its mapping to a specific Nipro SKU (vs. the sharp SafeTouch already used for #121, or this blunt BIOHOLE needle) was judged ambiguous enough to leave for a follow-up decision rather than force a fit.
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
#133 is pending, exactly like #110, #116, #117, #119, #120, and #124. A
future pass should either (a) confirm the real relationship/manufacturer
behind what Fresenius presents on this page, or (b) find a distinct,
unambiguously Fresenius-branded liquid bicarbonate product instead.

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

## Entries considered for this pilot but left as placeholders (no verified data added)

| Source ID | Item | Why left as a placeholder |
|---|---|---|
| #110 | Low-flux dialyzer | The Nipro ELISIO-L product page URL guessed from the ELISIO-H pattern did not resolve to a working page in either pass; no distinct low-flux product was independently verified. |
| #116, #117, #119, #120 | Bloodline set variants (arterial/venous lines, pediatric, online HDF) | Neither CombiSet True Flow nor NiproSet (both used for #118) distinguish these as separate named products on their official pages — both are general/adult/machine-specific sets. Confirmed again in the follow-up pass: NiproSet's own page explicitly says sets are "machine-specific" without breaking out arterial/venous/pediatric/HDF variants. |
| #124 | Sharp needles & blunt needles | Ambiguous which Nipro product (or products) most precisely maps here without conflating it with #121/#123; left for a follow-up decision. |
| #132 formulation numbers | Potassium K2/K3/K4 exact concentrations | NaturaLyte's own official page didn't list a formulation table this session; only third-party distributor listings did, which don't meet the "official source" bar. |
| #133 | Liquid bicarbonate | An official Fresenius page exists, but its own hero photo identifies the actual product as "Centrisol / Minntech Renal Systems / Medivators Inc.," not Fresenius, and the real manufacturer/distribution relationship hasn't been independently established. A `verifiedProducts` record naming Fresenius was added in an earlier pass and has been **removed** — #133 is fully pending again, with no manufacturer shown to customers (see the #133 section above for the full explanation). |

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
