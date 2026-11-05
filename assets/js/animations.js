/* ============================================================
   Layali 2.0 — Micro-interactions (native Web Animations API)
   ============================================================
   No animation library: these are three small, short effects, so they use
   element.animate() (built into every current browser). Nothing here is
   needed to read or use the site; if the API is missing or reduced motion is
   requested, nothing runs and the page stays fully static and usable.

     - .hd-visual-inner panel swap (opacity/translateY), called from
       main.js's hdSignature() tab controller via window.LayaliMotion.panelSwap.
     - #cat-grid re-render reveal (opacity/translateY), fired once per
       catalog render (never per card) on 'catalog:resultsRendered'.
     - Quote-field validation flash (backgroundColor), called from main.js
       via window.LayaliMotion.flashInvalid.

   The arrow nudge on CTAs is plain CSS (.cta-arrow in main.css).
   Hero entrance, hero parallax and the light-to-dark transition live in
   main.js (motion block).
   ============================================================ */

(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof Element === 'undefined' || typeof Element.prototype.animate !== 'function') return;

  var EASE_OUT = 'cubic-bezier(0.215, 0.61, 0.355, 1)'; // out-cubic
  var SMALL = 280; // ms: small interface transitions (panel / grid reveal)

  window.LayaliMotion = window.LayaliMotion || {};

  window.LayaliMotion.panelSwap = function (panel) {
    if (!panel) return;
    panel.animate(
      [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: SMALL, easing: EASE_OUT }
    );
  };

  window.LayaliMotion.flashInvalid = function (el) {
    if (!el) return;
    el.animate(
      [{ backgroundColor: 'rgba(184,0,31,0.08)' }, { backgroundColor: 'rgba(184,0,31,0)' }],
      { duration: 500, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' } // out-quad
    );
  };

  var grid = document.getElementById('cat-grid');
  if (grid) {
    document.addEventListener('catalog:resultsRendered', function () {
      grid.animate(
        [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: SMALL, easing: EASE_OUT }
      );
    });
  }
})();
