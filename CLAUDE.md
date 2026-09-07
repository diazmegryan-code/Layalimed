# Layali 2.0 — Claude Instructions

## Production safety — NON-NEGOTIABLE

- Work ONLY on branch `layali-2.0-redesign` unless the user explicitly authorizes another non-production branch.
- NEVER commit, push, merge, rebase, reset, or otherwise modify `main`.
- NEVER merge a pull request into `main` without an explicit user instruction to launch the redesign.
- NEVER modify GitHub Pages production settings, DNS, the production custom domain, or deployment configuration for `layalimed.com`.
- NEVER treat a completed redesign as authorization to publish it.
- `main` is the current production website and must remain unchanged throughout development and review.
- The `CNAME` file inherited from `main` is production configuration. Do not edit it during redesign work.

## Project goal

Build Layali 2.0 as a premium B2B medical-supply website focused ONLY on:

1. Medical Consumables
2. Hemodialysis

Primary message: **Essential supplies. Reliable care.**

Primary conversion: **Request a Quote**
Secondary conversion: **Explore Products**

The website should be simple in functionality and exceptional in visual design, motion, typography, imagery, responsiveness, and polish.

## Locked visual direction

- Editorial clinical minimalism.
- White / off-white / charcoal / Layali red.
- Medical Consumables: bright, airy, clinical, product-led.
- Hemodialysis: dark, technical, dramatic, premium.
- Strong light-to-dark transition between the two product worlds.
- Large editorial typography and oversized section numbers `01` and `02`.
- Real product photography and real Layali delivery photography whenever available.
- Layali red is an accent, not a background used everywhere.
- Generous whitespace and controlled asymmetry.

## Motion direction

Motion must reinforce hierarchy or interaction, not decorate the page.

Preferred:
- Hero product entrance composition.
- Masked text reveals.
- Image clipping / wipe reveals.
- Subtle parallax for selected hero/product layers.
- Scroll-driven light-to-dark transition into Hemodialysis.
- Refined hover states for products, categories, buttons, and navigation.
- Slow brand marquee where appropriate.
- Large delivery-image transitions.
- Respect `prefers-reduced-motion`.

Avoid:
- generic fade-up animation on every section
- continuous floating objects
- particles
- spinning medical icons
- 3D card tilt
- excessive parallax
- animation that delays access to content

## Do NOT introduce

- Generic blue healthcare styling.
- Glassmorphism.
- Floating gradient blobs.
- Excessive gradients.
- Emoji category icons.
- Excessive rounded cards.
- Dashboard-like UI.
- Stock doctors as the primary visual identity.
- AI-looking medical imagery when real product imagery can be used.
- Complex procurement workflows.
- Dedicated dialysis-center RFQ logic.
- Compatibility engines.
- Regulatory document-management systems.
- Unrequested ecommerce/cart/payment functionality.

## Site scope

### Main navigation
- Products
- Hemodialysis
- Brands
- Deliveries
- About
- Search
- Request a Quote

### Medical Consumables
- Injection & Infusion
- PPE & Infection Control
- Wound Care
- Patient Care
- Laboratory / Specimen

### Hemodialysis
- Dialyzers
- Blood Tubing Sets
- AV Fistula Needles
- Concentrates
- Treatment Consumables

## Homepage structure

1. Header
2. Hero — “Essential supplies. Reliable care.”
3. Trust strip
4. `01` Medical Consumables
5. Featured Consumables
6. Light-to-dark transition
7. `02` Hemodialysis
8. Featured Hemodialysis Products
9. Brands We Supply
10. Recent Deliveries
11. Supply-requirement / quotation CTA
12. Credentials / company trust
13. Footer

## Product experience

Keep product browsing straightforward. Product cards should prioritize imagery, brand, product name, a short useful descriptor, and Request Quote / Add to Quote only if that interaction is deliberately implemented.

Product pages can show basic verified specifications. Do not invent technical data, compatibility, regulatory claims, manufacturer relationships, or authorization status.

## Design quality bar

The final implementation should feel intentionally art-directed, not template-generated. Static sections are welcome; animation should be concentrated in a few memorable moments. Mobile design is first-class, not a compressed desktop layout.

## Review rule

When uncertain between adding functionality and improving design quality, choose design quality unless the user explicitly requests the functionality.
