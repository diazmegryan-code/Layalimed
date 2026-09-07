# Layali 2.0 — Product Catalog Implementation Specification

**Status:** APPROVED IMPLEMENTATION INPUT

This specification translates the locked product catalog architecture into implementation rules for the future website catalog. It does not change production or the current homepage.

## Authoritative baseline

- 21 source categories
- 119 actual numbered catalog entries/rows
- Source numbering extends through #196; #196 is an identifier, not the product count
- Many catalog entries contain multiple variants
- Final SKU count is TBD until brand/model/size/packaging information is verified
- Source item numbers must remain traceable

## Locked customer-facing groups

1. Medical Consumables
2. Hemodialysis
3. Medical Equipment
4. Procedure & Surgical Supplies
5. Medications

Homepage emphasis remains Medical Consumables + Hemodialysis.

## Data-model rule

Do not hard-code the catalog as disconnected HTML cards. Build the catalog from a machine-readable data source. Each canonical catalog record must support, at minimum:

- sourceId
- sourceCategory
- catalogEntry
- websiteGroup
- websiteSubcategory
- discoveryTags
- groupedVariants
- variants
- brand
- manufacturer
- modelReference
- packSizeUom
- verifiedSpecs
- image
- dataStatus
- publishStatus

Unknown values must remain null/empty/pending. Never invent missing data.

## Catalog entry vs SKU

A source row is a catalog entry, not necessarily a SKU. A grouped entry may eventually produce multiple SKUs. Split a grouped entry only when the source or later verified commercial data explicitly identifies the variants.

Examples already supported by the source:
- Syringes #73: 1cc, 3cc, 5cc, 10cc, 20cc, 50cc may be represented as known variants.
- Dialyzer surface areas #112: 0.6, 0.8, 1.0, 1.2, 1.5, 1.8, 2.0 m² may be represented as known variants.
- Needles #74 says only “various gauges”; do not invent gauges.

## Canonical placement and discovery

Every record has one canonical website placement. Optional discovery tags may expose it elsewhere without duplicating the canonical record.

Current non-blocking discovery decisions:
- #82 Alcohol / Povidone-Iodine / Chlorhexidine: canonical PPE & Infection Control; optional Wound Care discovery tag.
- #102 Lidocaine: retain canonical Procedure & Surgical Supplies placement from source context; optional Medications discovery tag.
- #135–138 and #183–184: retain canonical Hemodialysis placement; optional Medications discovery tag.

Do not physically duplicate records to implement cross-listing.

## Hemodialysis homepage gateways

The homepage gateway labels remain:

- Dialyzers
- Bloodline Sets
- AV Fistula Needles
- Concentrates & Bicarbonate
- Dialysis Center Essentials

“Dialysis Center Essentials” is a marketing/navigation gateway only. It is not a source category and must not replace or delete any full-catalog Hemodialysis subcategory.

## Catalog UX requirements

Build toward:

- catalog landing page
- five top-level group navigation
- subcategory navigation/filtering
- text search
- product-family/catalog-entry cards
- product detail/family view
- variant presentation where verified
- Add to Quote / Request a Quote path
- responsive mobile behavior
- accessible keyboard/focus states
- empty/pending states that do not expose internal placeholders as customer-facing claims

Do not turn the public site into a full procurement platform. No cart/checkout/payment/inventory receiving system is required.

## Publication safety

Never invent or infer:
- brands or manufacturer relationships
- technical specifications
- FDA status for an individual product
- medication indications
- medication dosing
- clinical claims
- stock availability
- pack sizes
- model numbers

A product may be structurally present in the internal data source while remaining unpublished until its minimum customer-facing data is verified.

## Image rules

Production product images must be verified real product assets or explicitly approved generic/category imagery. Do not generate a fake branded product image and present it as inventory. Homepage photography should be prioritized before attempting to source images for every catalog entry.

## Implementation sequencing

1. Create machine-readable catalog data from all 119 source entries.
2. Validate exact source IDs/categories/entry names against `FINAL-PRODUCT-CATALOG-MAPPING.md`.
3. Add only source-explicit variants; leave ambiguous variants unresolved.
4. Build catalog UI against the data source.
5. Connect homepage gateways to catalog filters/views.
6. Add verified brand/spec/packaging/photo data incrementally.
7. Verify search, filters, quote flow, mobile UX, accessibility and performance.
8. Production merge/deploy only after explicit business approval.

## Production safety

All implementation work remains on `layali-2.0-redesign` until explicit launch approval.

Do not:
- merge to `main`
- modify CNAME
- modify GitHub Pages settings
- modify DNS
- deploy production
- modify MedCRM backend as part of this catalog build

The production branch remains outside this implementation phase.