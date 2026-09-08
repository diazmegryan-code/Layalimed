# Product photo convention

This folder holds verified product photography for catalog entries listed in
`assets/data/product-catalog.json`. It is empty by default — nothing here is
generated or invented. A photo only appears on the site once a real, approved
file is placed here **and** referenced from the corresponding record in the
JSON.

## Naming

Name each file after the catalog entry's `sourceId` (the stable reference
number already shown on every catalog card as "Ref. `<sourceId>`"):

```
images/products/<sourceId>.jpg
images/products/<sourceId>.webp   (optional — same image, WebP-encoded)
```

Example: a verified photo for catalog entry `109` (High-flux dialyzer) would
be `images/products/109.jpg`, optionally paired with `images/products/109.webp`.

If a single catalog entry ever needs more than one photo (e.g. distinct shots
per known variant), extend the convention rather than overloading one file —
for example `images/products/141-1cc.jpg`, `images/products/141-3cc.jpg` — and
reference the specific file needed from that variant's own data, once the
schema supports per-variant images. Don't retrofit this without updating
`assets/js/catalog.js`'s rendering logic to match.

## Wiring a photo into the catalog

Add one or both fields to the matching record in `product-catalog.json`:

```json
{
  "sourceId": 109,
  "...": "...",
  "image": "images/products/109.jpg",
  "imageWebp": "images/products/109.webp"
}
```

`assets/js/catalog.js` checks for `image` on every record automatically —
no code changes are needed to display a photo once the field is set. If
`imageWebp` is present it's offered as a `<picture>` source ahead of the
`.jpg`; if the referenced file is missing or fails to load, the card falls
back to the same "Photo pending" placeholder used when no image exists at
all, so a bad path never shows a broken-image icon.

## What NOT to do

- Don't add `image` before the file actually exists in this folder and is
  committed — a missing file just falls back to the placeholder, so there's
  no reason to point at one that isn't there yet.
- Don't use AI-generated, stock, or stand-in imagery as if it were the real
  product — per the project's product-truthfulness rule, an unverified photo
  is worse than an honest placeholder.
- Don't add brand/manufacturer logos into product photos unless that brand
  relationship and usage right has been separately confirmed.
