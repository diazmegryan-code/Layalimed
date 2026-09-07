# Layali 2.0 — Content & Asset Requirements

**Status:** Phase 1 (approved homepage design/interaction) is complete. This document is the checklist for the next phase — gathering real content and assets — before any product pages are built or the redesign is considered launch-ready.

**Scope note:** Nothing in this document is real inventory, real specifications, or a confirmed business fact unless it is explicitly marked as already verified. Every row is a request for the business to supply or confirm information — none of it should be treated as ready to publish as-is.

**Catalog update:** the business has since supplied its actual, final product catalog (**119 actual numbered catalog entries/rows across 21 source categories; source numbering extends through #196**), and the resulting website catalog architecture is now **approved and locked**. #196 is the highest source item number, not the product count. Many entries group multiple variants, so final SKU count is TBD. Section 1 below still accurately describes the *current homepage's* placeholders (unchanged). Section 2's taxonomy is superseded — see [`docs/FINAL-PRODUCT-CATALOG-MAPPING.md`](FINAL-PRODUCT-CATALOG-MAPPING.md) for the full catalog and its final, locked website mapping. Once a full catalog experience is designed and built, this document's asset audit will need a much larger follow-up pass covering all locked categories, not just the four homepage placeholders below.

**Locked top-level catalog architecture** (full detail and per-item mapping in `FINAL-PRODUCT-CATALOG-MAPPING.md`):
```
01  Medical Consumables
02  Hemodialysis
03  Medical Equipment
04  Procedure & Surgical Supplies
05  Medications
```
Homepage positioning remains **Medical Consumables + Hemodialysis only** — Medical Equipment, Procedure & Surgical Supplies, and Medications are real catalog groups but do not get dedicated homepage sections.

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
| Dialyzers | Studio product photo | Landscape or square, ~4:3 to 1:1 | 1600 × 1200 px | Transparent or dark/neutral studio background | Yes, if brand-specific | Product name, brand, category, basic verified spec if available — no invented specs |
| Blood Tubing Sets | Studio product photo | Landscape or square, ~4:3 to 1:1 | 1600 × 1200 px | Transparent or dark/neutral studio | Yes, if applicable | Same as above |
| AV Fistula Needles | Studio product photo | Landscape or square, ~4:3 to 1:1 | 1600 × 1200 px | Transparent or dark/neutral studio | Yes, if applicable | Same as above |
| Concentrates & Bicarbonate | Studio product photo | Landscape or square, ~4:3 to 1:1 | 1600 × 1200 px | Transparent or dark/neutral studio | Yes, if applicable | Same as above |
| Dialysis Center Essentials | Studio product photo or representative flat-lay | Landscape or square, ~4:3 to 1:1 | 1600 × 1200 px | Transparent or dark/neutral studio | Yes, if applicable | Same as above |

**Design note:** because these images sit on a dark (`--charcoal`) background, either a transparent cutout or a photo shot on a dark/neutral studio background will read best.

### 1.4 Brands We Supply — logo marquee (`#brands`)

| Item | Current state | What's needed |
|---|---|---|
| Fresenius Medical Care logo | Hotlinked from Wikimedia Commons — **not confirmed as an active supplier relationship** | Confirm current supply relationship; obtain official logo file with permission to display it |
| Baxter Healthcare logo | Same as above | Same as above |
| Nipro Medical logo | Same as above | Same as above |
| Medtronic logo | Same as above | Same as above |

**Minimum logo spec (once confirmed):** vector (SVG) preferred; otherwise PNG at minimum 800 px wide, transparent background, grayscale-safe.

### 1.5 Recent Deliveries (`#deliveries`)

Already fulfilled with real photography — no placeholder here.

| Item | Status |
|---|---|
| `delivery-01-primary.jpg` | Real photo, in use |
| `delivery-02.jpg` | Real photo, in use |
| `delivery-03.jpg` | Real photo, in use |
| `delivery-04.jpg` | Real photo, in use |

### 1.6 Site-wide meta image

| Item | Current state | What's needed |
|---|---|---|
| `og-image.png` (root) | Used for Open Graph / Twitter card preview image | Verify relevance to the Medical Consumables + Hemodialysis positioning and update dimensions if needed. |

---

## 2. Proposed Product Taxonomy (Launch Scope) — SUPERSEDED

> **This section is superseded.** The 5+5 taxonomy below was a Phase 1 homepage design simplification, written before the business supplied its actual product catalog. It is **not** the final taxonomy and should not be treated as the complete Medical Consumables or Hemodialysis offering.
>
> The authoritative catalog now lives in **[`docs/FINAL-PRODUCT-CATALOG-MAPPING.md`](FINAL-PRODUCT-CATALOG-MAPPING.md)**. It covers **21 source categories and 119 actual numbered catalog entries/rows, with source numbering extending through #196**. Many entries group multiple variants, so the final SKU count is TBD. Refer to the mapping document, not to the list below, for taxonomy decisions.
>
> The homepage itself remains a curated marketing/navigation experience rather than the complete catalog.

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

Everything below is either carried over from the pre-redesign production site, condensed from it, or written for this redesign and should be checked before production.

### FDA / licensing statements
- "FDA-Licensed Distributor"
- "FDA License to Operate"
- License number **`CDRRHR-RIVA-MDI/W-2074863`** — confirm it is current/valid and correctly transcribed.

### Brands supplied
- Fresenius Medical Care, Baxter Healthcare, Nipro Medical, Medtronic — needs explicit business confirmation before publication.

### Delivery / service areas
- "Southern Luzon & Metro Manila" / "Quezon, Lucena, Laguna, Batangas, Metro Manila" — confirm still accurate.

### Contact information
- Phone: `+63 917 319 9572`
- Address: "Office 07 Sta. Lucia, Dolores, Quezon PH 4326"
- Business hours in JSON-LD: Monday–Saturday, 08:00–17:00 — confirm still accurate.

### Product availability wording
- "Development Placeholder" and "Photo pending" labels must be removed before production.
- Confirm any "stocked and ready" wording against actual order-to-supply lead times.
- Product descriptors must be based on verified product data before publication.

### Company description
- Confirm the B2B distributor positioning and service-area wording before production.

### Credentials
- Confirm FDA License to Operate details.
- Decide whether the physician/partner credential should return on the homepage or wait for a future About page.

---

## 4. Existing Repository Images — Current Usage Map

| File | Used on homepage? | Where |
|---|---|---|
| `images/deliveries/delivery-01-primary.jpg` | Yes | Deliveries carousel and lightbox |
| `images/deliveries/delivery-01-primary.webp` | No | Unused variant |
| `images/deliveries/delivery-02.jpg` | Yes | Consumables feature and Deliveries carousel |
| `images/deliveries/delivery-02.webp` | Yes | Consumables feature image |
| `images/deliveries/delivery-03.jpg` | Yes | Deliveries carousel |
| `images/deliveries/delivery-03.webp` | No | Unused variant |
| `images/deliveries/delivery-04.jpg` | Yes | Consumables list and Deliveries carousel |
| `images/deliveries/delivery-04.webp` | Yes | Consumables list image |
| `images/originals/delivery-01-primary-original.jpg` | No | Backup/original |
| `images/originals/delivery-02-original.jpg` | No | Backup/original |
| `images/originals/delivery-03-original.jpg` | No | Backup/original |
| `images/originals/delivery-04-original.jpg` | No | Backup/original |
| `images/originals/influvac-promotion-original.jpg` | No | Legacy asset |
| `images/promotions/influvac-promotion.jpg` | No | Legacy asset |
| `images/promotions/influvac-promotion.webp` | No | Legacy asset |
| `og-image.png` | Yes | Social preview meta tags |

---

## 5. Summary Checklist

- [ ] Confirm FDA License to Operate number and details
- [ ] Confirm actual brands/manufacturers supplied; obtain logo usage rights
- [ ] Confirm delivery/service area coverage
- [ ] Confirm contact details
- [ ] Decide whether physician/partner credential should return
- [ ] Collect verified product data and photography against the locked 5-group catalog architecture
- [ ] Track all **119 source catalog entries** and preserve source numbering through #196
- [ ] Determine final SKU/variant count only after verified brand/model/size/packaging data is collected
- [ ] Review `og-image.png`
- [ ] Remove all development placeholders before production
