# Vendored scripts

Self-hosted copies of third-party scripts, so pages do not depend on a third-party CDN.

| File | Library | Version | License |
|---|---|---|---|
| `emailjs.min.js` | @emailjs/browser | 4.x (as served by jsDelivr on 2026-10-29) | MIT |

Fonts (Cormorant Garamond, DM Sans, Newsreader, DM Mono) are self-hosted in `assets/fonts/` (latin subset, SIL Open Font License 1.1) and declared in `assets/css/fonts.css`.

GSAP, ScrollTrigger and Anime.js were removed on 2026-11-05: the hero entrance, parallax, scroll transition and micro-interactions now use the browser's built-in Web Animations API and CSS (see `assets/js/main.js` and `assets/js/animations.js`).
