/* ============================================================
   Layali 2.0 — Micro-interactions (Anime.js)
   ============================================================
   OWNERSHIP MAP (see docs note in main.js for the GSAP side):

     GSAP (main.js, homepage only) owns EXCLUSIVELY:
       - .hero-copy .eyebrow / .hero-h1-line / .hero-sub /
         .hero-actions / .hero-chips / .hero-visual   (hero entrance)
       - .hero-collage                                (scroll parallax)
       - #transition --transition-bg / --transition-fg (light->dark scroll)

     Anime.js (this file, both pages) owns EXCLUSIVELY:
       - .cta-arrow child spans (translateX)           — never the parent
         CTA's own CSS-owned transform/color/border-color.
       - .hd-visual-inner panel swap (opacity/translateY) — migrated off
         GSAP; GSAP no longer touches this element.
       - #cat-grid re-render reveal (opacity/translateY), fired once per
         catalog render, never per-card.
       - Quote-field validation flash (backgroundColor) — a property no
         existing CSS transition on .fg input/select/textarea touches.

     CSS continues to exclusively own: nav underline sweep, button hover
     colors/translateY, product-photo hover-scale, hd-tab hover/active
     state, marquee loop, delivery-slide crossfade, drawer/lightbox/
     search-overlay open-close, toast, form focus borders. None of those
     properties are touched from this file.

   No element here is ever hidden pending Anime.js: everything animated
   below already exists, visible, in the DOM/CSS before this script runs.
   If the CDN fails or reduced motion is requested, nothing in this file
   executes and the site remains fully static and usable.
   ============================================================ */

(function () {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  var ANIME_SRC = 'https://cdn.jsdelivr.net/npm/animejs@4.5.0/dist/bundles/anime.umd.min.js';

  // Small, shared motion vocabulary -- consistency over ad-hoc numbers.
  var MOTION = {
    micro: 200,       // ms — hover/focus feedback
    small: 280,       // ms — small interface transitions (panel/grid reveal)
    easeOut: 'outCubic',
    distance: 4,      // px — arrow nudge
  };

  var script = document.createElement('script');
  script.src = ANIME_SRC;
  script.onload = init;
  script.onerror = function () {
    /* Anime.js failed to load. Nothing to clean up: every element this
       file would have touched is already visible/usable via HTML+CSS. */
  };
  document.head.appendChild(script);

  function init() {
    if (!window.anime || !window.anime.animate) return;
    var anime = window.anime;

    wireArrowCTAs(anime);
    exposeHdPanelSwap(anime);
    wireCatalogResultsReveal(anime);
    exposeValidationFlash(anime);
  }

  /* ---- CTA arrow micro-motion --------------------------------------------
     Targets only the .cta-arrow child span. The parent link/button keeps
     its own CSS-owned hover transform/color entirely untouched, so there
     is no shared-property conflict. Keyboard focus gets the same feedback
     as pointer hover. */
  function wireArrowCTAs(anime) {
    var arrows = document.querySelectorAll('.cta-arrow');
    arrows.forEach(function (arrow) {
      var host = arrow.closest('a,button');
      if (!host) return;
      var enter = function () {
        anime.animate(arrow, { translateX: MOTION.distance, duration: MOTION.micro, ease: MOTION.easeOut });
      };
      var leave = function () {
        anime.animate(arrow, { translateX: 0, duration: MOTION.micro, ease: MOTION.easeOut });
      };
      host.addEventListener('mouseenter', enter);
      host.addEventListener('mouseleave', leave);
      host.addEventListener('focus', enter);
      host.addEventListener('blur', leave);
    });
  }

  /* ---- Hemodialysis tab-panel swap ----------------------------------------
     Exposed for main.js's existing hdSignature() controller. main.js still
     owns all tab state/accessibility logic (roving tabindex, aria-selected,
     hidden toggling); this only supplies the reveal motion for the panel
     that state logic has just un-hidden. */
  function exposeHdPanelSwap(anime) {
    window.LayaliMotion = window.LayaliMotion || {};
    window.LayaliMotion.panelSwap = function (panel) {
      anime.animate(panel, {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: MOTION.small,
        ease: MOTION.easeOut,
      });
    };
  }

  /* ---- Catalog results-grid reveal ----------------------------------------
     catalog.js dispatches 'catalog:resultsRendered' once per render() call
     (search input, subfilter click, or group switch). This animates the
     grid CONTAINER once, never individual cards, so typing and filtering
     stay immediate and results are never delayed behind a stagger. */
  function wireCatalogResultsReveal(anime) {
    var grid = document.getElementById('cat-grid');
    if (!grid) return;
    document.addEventListener('catalog:resultsRendered', function () {
      anime.animate(grid, {
        opacity: [0, 1],
        translateY: [8, 0],
        duration: MOTION.small,
        ease: MOTION.easeOut,
      });
    });
  }

  /* ---- Quote-form validation flash ----------------------------------------
     A brief background-color pulse on a field that just failed validation
     at submit time. Targets backgroundColor, which none of the existing
     CSS transitions on .fg input/select/textarea touch (CSS only
     transitions border-color) -- no ownership conflict. Ends fully
     transparent, so it never permanently recolors the field. */
  function exposeValidationFlash(anime) {
    window.LayaliMotion = window.LayaliMotion || {};
    window.LayaliMotion.flashInvalid = function (el) {
      if (!el) return;
      anime.animate(el, {
        backgroundColor: ['rgba(184,0,31,0.08)', 'rgba(184,0,31,0)'],
        duration: 500,
        ease: 'outQuad',
      });
    };
  }
})();
