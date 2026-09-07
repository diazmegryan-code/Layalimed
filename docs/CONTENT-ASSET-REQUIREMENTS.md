# Layali 2.0 — Content & Asset Requirements

**Status:** Phase 1 (approved homepage design/interaction) is complete. This document is the checklist for the next phase — gathering real content and assets — before any product pages are built or the redesign is considered launch-ready.

**Scope note:** Nothing in this document is real inventory, real specifications, or a confirmed business fact unless it is explicitly marked as already verified. Every row is a request for the business to supply or confirm information — none of it should be treated as ready to publish as-is.

**Catalog update:** the business has since supplied its actual, final product catalog (196 items/variants across 21 categories). Section 1 below still accurately describes the *current homepage's* placeholders (unchanged). Section 2's taxonomy is superseded — see [`docs/FINAL-PRODUCT-CATALOG-MAPPING.md`](FINAL-PRODUCT-CATALOG-MAPPING.md) for the real catalog and its proposed website mapping. Once that mapping is approved and a full catalog experience is designed, this document's asset audit will need a much larger follow-up pass covering all approved categories, not just the four homepage placeholders below.

---

## 1. Asset & Content Requirement Audit

Every placeholder or product-photography area currently on the homepage, with what's needed to replace it.

### 1.1 Hero — editorial placeholder composition (`#hero .hero-collage`)

Four collage cells, currently abstract line-art icons on a dark panel, explicitly tagged "Development Placeholder."

| Item | Recommended image type | Orientation / aspect ratio | Min. source resolution | Background | Brand/logo needed | Product info fields required |
|---|---|---|---|---|---|---|
| Dialyzer (large cell) | Studio product photo, single hero item | Portrait, ~4:5 | 1600 × 2000 px | Transparent (isolated cutout) preferred; clean neutral background acceptable | Optional — only if brand is confirmed and OK to display | Product name, brand/manufacturer (if shown), category (Dialyzers) |
| Blood Tubing | Studio product photo | Square, ~1:1 | 1400 × 1400 px | Transparent (isolated cutout) preferred | Optional | Product name, brand (if shown), category (Blood Tubing Sets) |
| Injection Consumable | Studio product photo (e.g. syringe or representative injection item) | Square, ~1:1 | 1400 × 1400 px | Transparent (isolated cutout) preferred | Optional | Product name, brand (if shown), category (Injection & Infusion) |
| Consumables Selection | Either one representative product photo, or a small flat-lay of 3–4 items | Square, ~1:1 | 1400 × 1400 px | Transparent or a clean flat-lay background | Optional | Product name(s) shown, category label |

**Alternative option:** if isolated product photography isn't available for launch, a single wide lifestyle/campaign photograph (e.g. products styled together, professionally shot) could replace the 4-cell collage entirely. This would require a design adjustment to the hero markup and is noted here as an open option, not a decision.

### 1.2 Medical Consumables — editorial feature + list (`#consumables`)

| Item | Current state | Recommended image type | Orientation | Min. source resolution | Background | Brand needed | Product info fields required |
|---|---|---|---|---|---|---|---|
| 3-Ply Earloop Masks (feature) | **Using a real photo** (`images/deliveries/delivery-02.jpg/.webp` — a delivery/carton photo, not a dedicated product shot) | Dedicated product photo recommended for final polish | Landscape, ~5:4 | 1800 × 1440 px | Lifestyle/context (box + product) or clean studio shot | Yes, if a specific brand is being sold | Product name, brand, package size/count, category |
| Alcohol Prep Pads (list) | **Using a real photo** (`images/deliveries/delivery-04.jpg/.webp` — same caveat as above) | Dedicated product photo recommended | Square, ~1:1 | 900 × 900 px | Lifestyle or studio | Yes, if brand-specific | Product name, brand, package size/count |
| Wound Care Essentials (list) | Placeholder ("Photo pending") | Studio or lifestyle product photo | Square, ~1:1 | 900 × 900 px | Studio (transparent or clean) preferred | If applicable | Product name, brand, category, short descriptor |
| Patient Care Consumables (list) | Placeholder ("Photo pending") | Studio or lifestyle product photo | Square, ~1:1 | 900 × 900 px | Studio (transparent or clean) preferred | If applicable | Product name, brand, category, short descriptor |
| Laboratory / Specimen | **Not yet represented on the homepage at all** — no card, no placeholder | Studio or lifestyle product photo | Square, ~1:1 | 900 × 900 px | Studio preferred | If applicable | Product name, brand, category, short descriptor |

### 1.3 Hemodialysis — signature interactive section (`#hemodialysis`)

All five categories are currently abstract line-art icons in the shared visual panel, tagged "Development Placeholder." This is the section that most needs real photography — it's the site's dark "signature moment."

| Category | Recommended image type | Orientation | Min. source resolution | Background | Brand needed | Product info fields required |
|---|---|---|---|---|---|---|
| Dialyzers | Studio product photo | Landscape or square, ~4:3 to 1:1 | 1600 × 1200 px | Transparent or dark/neutral studio background (to sit well on the dark section) | Yes, if brand-specific | Product name, brand, category, basic verified spec if available (e.g. membrane type) — no invented specs |
| Blood Tubing Sets | Studio product photo | Landscape or square, ~4:3 to 1:1 | 1600 × 1200 px | Transparent or dark/neutral studio | Yes, if applicable | Same as above |
| AV Fistula Needles | Studio product photo | Landscape or square, ~4:3 to 1:1 | 1600 × 1200 px | Transparent or dark/neutral studio | Yes, if applicable | Same as above |
| Concentrates | Studio product photo | Landscape or square, ~4:3 to 1:1 | 1600 × 1200 px | Transparent or dark/neutral studio | Yes, if applicable | Same as above |
| Treatment Consumables | Studio product photo (or representative flat-lay if this stays a catch-all category) | Landscape or square, ~4:3 to 1:1 | 1600 × 1200 px | Transparent or dark/neutral studio | Yes, if applicable | Same as above |

**Design note:** because these images sit on a dark (`--charcoal`) background, either a transparent cutout or a photo shot on a dark/neutral studio background will read best. A bright white studio background will need a treatment decision (contain in a light card vs. re-shoot on dark).

### 1.4 Brands We Supply — logo marquee (`#brands`)

| Item | Current state | What's needed |
|---|---|---|
| Fresenius Medical Care logo | Hotlinked from Wikimedia Commons (`upload.wikimedia.org`) — **not hosted in this repo, not confirmed as an active supplier relationship** | Confirm this is an actual current supply relationship; obtain an official logo file (SVG or high-res PNG, transparent background) with permission to display it |
| Baxter Healthcare logo | Same as above | Same as above |
| Nipro Medical logo | Same as above | Same as above |
| Medtronic logo | Same as above | Same as above |

**Minimum logo spec (once confirmed):** vector (SVG) preferred; otherwise PNG at minimum 800 px wide, transparent background, grayscale-safe (the marquee applies a grayscale filter at rest).

### 1.5 Recent Deliveries (`#deliveries`)

Already fulfilled with real photography — no placeholder here. Listed for completeness:

| Item | Status |
|---|---|
| `delivery-01-primary.jpg` | Real photo, in use |
| `delivery-02.jpg` | Real photo, in use |
| `delivery-03.jpg` | Real photo, in use |
| `delivery-04.jpg` | Real photo, in use |

**Opportunity, not a gap:** more real delivery photos (ideally including Hemodialysis-specific deliveries once available) would strengthen this section and could rotate the carousel further.

### 1.6 Site-wide meta image

| Item | Current state | What's needed |
|---|---|---|
| `og-image.png` (root) | Used for Open Graph / Twitter card preview image | Verify this image still represents the narrowed Medical Consumables + Hemodialysis positioning — it predates this redesign and was made for the old, broader pharmaceutical-distributor site. Also confirm its dimensions; the `og:image:width`/`height` meta tags currently declare 400×320, which is smaller than most social platforms recommend (1200×630 is the common target). |

---

## 2. Proposed Product Taxonomy (Launch Scope) — SUPERSEDED

> **This section is superseded.** The 5+5 taxonomy below was a Phase 1 homepage design simplification, written before the business supplied its actual product catalog. It is **not** the final taxonomy and should not be treated as the complete Medical Consumables or Hemodialysis offering.
>
> The authoritative catalog — every real category, every product/variant, and the proposed mapping into website navigation — now lives in **[`docs/FINAL-PRODUCT-CATALOG-MAPPING.md`](FINAL-PRODUCT-CATALOG-MAPPING.md)**. That document covers 21 source categories and 196 items/variants, including a full breakdown of Hemodialysis (17 real subcategories, not 5) and a separate Medications grouping. Refer to it, not to the list below, for taxonomy decisions.
>
> The homepage itself has not changed: it still shows the same small curated set of Medical Consumables cards and Hemodialysis tabs described in Section 1 above. Those remain **marketing/navigation gateways**, not the catalog. The full catalog experience (where the taxonomy below is expanded to the real one) is future work, not yet built.

<details>
<summary>Original Phase 1 taxonomy (kept for history — do not use for planning)</summary>

**MEDICAL CONSUMABLES**
1. Injection & Infusion
2. PPE & Infection Control
3. Wound Care
4. Patient Care
5. Laboratory / Specimen

**HEMODIALYSIS**
1. Dialyzers
2. Blood Tubing Sets
3. AV Fistula Needles
4. Concentrates
5. Treatment Consumables

</details>

---

## 3. Homepage Copy Requiring Business Verification

Everything below is either carried over from the pre-redesign production site, condensed from it, or written for this redesign — none of it has been independently re-confirmed with the business during this redesign. All of it should be checked before this becomes the production homepage.

### FDA / licensing statements
- "FDA-Licensed Distributor" (trust strip, hero chip, footer)
- "FDA License to Operate" (credentials section)
- License number **`CDRRHR-RIVA-MDI/W-2074863`** (credentials section, trust strip) — carried over from the pre-redesign production site; confirm it is still current/valid and correctly transcribed.
- Structured data (`MedicalBusiness` JSON-LD) repeats the same license-adjacent claims implicitly via business identity — no separate license field in the schema, but confirm the schema's business details are still accurate.

### Brands supplied
- Fresenius Medical Care, Baxter Healthcare, Nipro Medical, Medtronic — this list was **narrowed down by this redesign** from a longer pharma-focused brand list on the old site (which also included Pfizer, GSK, Novartis, AstraZeneca, Unilab, B. Braun, 3M). The four kept were a judgment call based on relevance to Medical Consumables + Hemodialysis, not a confirmed current supplier list. **Needs explicit business confirmation** of which brands are actually supplied under the new, narrower scope.

### Delivery / service areas
- "Southern Luzon & Metro Manila" / "Quezon, Lucena, Laguna, Batangas, Metro Manila" (trust strip, hero sub, credentials, footer, JSON-LD `areaServed`) — carried over from the old production site's stated coverage. Confirm still accurate for the narrowed product scope (e.g., does Layali deliver Hemodialysis consumables to all the same areas as general consumables?).

### Contact information
- Phone: `+63 917 319 9572` (nav drawer, quote section, footer)
- Address: "Office 07 Sta. Lucia, Dolores, Quezon PH 4326" (quote section, credentials, footer)
- Business hours in JSON-LD: Monday–Saturday, 08:00–17:00 — not displayed in visible copy, only in structured data; confirm still accurate.
- JSON-LD also separately lists telephone as `+63-917-319-9572` — consistent with visible copy, but worth a final cross-check.

### Product availability wording
- "Development Placeholder" tags and "Photo pending" labels are correct for now but **must be fully removed** once real photography and copy are in place — they should never reach production.
- "Daily-use clinical consumables, stocked and ready for facilities that can't afford supply gaps." (Consumables lede) — confirm "stocked and ready" is accurate messaging vs. order-to-supply lead times.
- Individual product descriptors (e.g. "Hollow-fiber dialyzers for hospital and center-based hemodialysis treatment.") are generic, category-level descriptions written for this redesign, not sourced from actual product listings — confirm they match what's actually offered once real products are identified.

### Company description
- "Premium B2B distributor of medical consumables and hemodialysis supplies." (JSON-LD description, meta description)
- "A focused B2B distributor of medical consumables and hemodialysis supplies, serving clinics, RHUs, dialysis centers, and hospitals across Southern Luzon and Metro Manila." (footer, hero sub)
- "Built for the Filipino Healthcare System" / "Based in Dolores, Quezon, we understand the unique challenges of healthcare delivery in the Philippines..." (About/Credentials section) — positioning language written for this redesign; confirm tone and accuracy with the business.

### Credentials
- The FDA License to Operate details above.
- **Open question, not currently on the homepage:** the pre-redesign production site featured a named physician/medical partner credential ("Diplomate in Internal Medicine... partnering with Layali Medical Supply..."). This redesign's Phase 1 homepage does not include that content (it was deferred, not deleted). Decide whether this should reappear on the homepage or wait for a future About page, and if so, reconfirm the details with the business before publishing a real person's name and credentials.

---

## 4. Existing Repository Images — Current Usage Map

| File | Used on homepage? | Where |
|---|---|---|
| `images/deliveries/delivery-01-primary.jpg` | Yes | Deliveries carousel (first/active slide) and lightbox |
| `images/deliveries/delivery-01-primary.webp` | **No** | Not referenced anywhere — a `.webp` source exists but the carousel only loads the `.jpg` |
| `images/deliveries/delivery-02.jpg` | Yes | Consumables feature ("3-Ply Earloop Masks") and Deliveries carousel |
| `images/deliveries/delivery-02.webp` | Yes | `<picture>` source for the Consumables feature image only (the carousel copy of this photo still loads `.jpg`) |
| `images/deliveries/delivery-03.jpg` | Yes | Deliveries carousel only |
| `images/deliveries/delivery-03.webp` | **No** | Not referenced anywhere |
| `images/deliveries/delivery-04.jpg` | Yes | Consumables list ("Alcohol Prep Pads") and Deliveries carousel |
| `images/deliveries/delivery-04.webp` | Yes | `<picture>` source for the Consumables list image only (carousel copy loads `.jpg`) |
| `images/originals/delivery-01-primary-original.jpg` | No | Unused backup/original file |
| `images/originals/delivery-02-original.jpg` | No | Unused backup/original file |
| `images/originals/delivery-03-original.jpg` | No | Unused backup/original file |
| `images/originals/delivery-04-original.jpg` | No | Unused backup/original file |
| `images/originals/influvac-promotion-original.jpg` | No | Unused — leftover from the old site's vaccine promotion, which is out of scope for Layali 2.0 |
| `images/promotions/influvac-promotion.jpg` | No | Unused — same reason as above |
| `images/promotions/influvac-promotion.webp` | No | Unused — same reason as above |
| `og-image.png` (repo root) | Yes | `og:image` and `twitter:image` meta tags |

**Minor technical finding (noted, not fixed in this pass):** the delivery carousel (`assets/js/main.js`) always loads `.jpg` files even where a `.webp` exists, so the `.webp` variants for photos 01, 02, 03, and 04 are only partially used (02 and 04 get used via `<picture>` elsewhere on the page, 01 and 03's `.webp` files are unused entirely). This is a small optimization opportunity, not a content gap — flagging here since it surfaced during this asset audit.

---

## 5. Summary Checklist

- [ ] Confirm FDA License to Operate number and details
- [ ] Confirm actual brands/manufacturers supplied under the new scope; obtain logo usage rights
- [ ] Confirm delivery/service area coverage for the narrowed product scope
- [ ] Confirm contact details (phone, address, hours)
- [ ] Decide whether the physician/partner credential should return, and reconfirm details if so
- [ ] Supply real product data (name, brand, category, descriptor) for at least 2–4 items per subcategory, across all 10 subcategories — including Laboratory/Specimen, which currently has no homepage representation at all
- [ ] Supply real photography per the specs in Section 1, or approve the transparent-cutout / studio-photo direction for a professional photo shoot
- [ ] Confirm or replace the four Brands logos (currently hotlinked from Wikimedia Commons, not hosted in this repo)
- [ ] Review `og-image.png` for relevance to the new positioning and correct social-preview dimensions
- [ ] Remove all "Development Placeholder" / "Photo pending" labels once real content is in place
