# Layali 2.0 Agent Rules

This branch contains the isolated redesign of the Layali Medical Supply website.

## Safety boundary

- Production branch: `main`
- Redesign branch: `layali-2.0-redesign`
- Do not modify, merge into, force-update, or deploy `main` unless the user explicitly instructs a production launch.
- Do not change GitHub Pages production settings, DNS, or the `layalimed.com` custom-domain configuration.
- Do not edit the inherited `CNAME` file during redesign work.
- A finished implementation is not permission to publish.

## Locked scope

Layali 2.0 focuses only on:
- Medical Consumables
- Hemodialysis

Core line: **Essential supplies. Reliable care.**

The site is a premium B2B catalog and quotation lead generator, not a complex procurement platform.

## Visual system

- Editorial clinical minimalism
- White / off-white / charcoal / Layali red
- Medical Consumables = bright and airy
- Hemodialysis = dark and technical
- Large typography and oversized `01` / `02` section markers
- Generous whitespace, controlled asymmetry, strong product imagery
- Real Layali deliveries for proof and storytelling
- Red used selectively for actions and emphasis

## Motion system

Use motion sparingly and deliberately:
- hero product composition
- masked text/image reveals
- subtle selected parallax
- light-to-dark scroll transition into Hemodialysis
- polished hover and navigation microinteractions
- slow brand marquee if appropriate
- delivery-image transitions
- `prefers-reduced-motion` support

Avoid generic fade-up everywhere, floating blobs, particles, 3D tilt, constant motion, or decorative animation that delays content.

## Main homepage rhythm

Header → Hero → Trust → 01 Medical Consumables → Featured Consumables → transition → 02 Hemodialysis → Featured Hemodialysis → Brands → Deliveries → Quote CTA → Credentials → Footer.

## Anti-patterns

Do not introduce generic healthcare blue, glassmorphism, emoji icons, excessive rounded cards, stock-doctor-heavy layouts, dashboards, complex RFQ logic, compatibility engines, document-management systems, or unrequested ecommerce/payment features.

## Product truthfulness

Only publish verified product specifications and claims. Do not invent compatibility, registrations, technical data, authorized-partner status, or manufacturer relationships.

## Priority rule

When choosing between extra functionality and better visual execution, prioritize visual execution unless the user explicitly requests the functionality.
