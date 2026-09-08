/* ============================================================
   Layali 2.0 — Product Catalog
   Data-driven catalog browsing built from assets/data/product-catalog.json.
   No invented product data: every field rendered comes straight from the
   source record. Missing fields render as neutral "pending" states, never
   fabricated values.
   ============================================================ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── NAV: scroll state + mobile drawer (same behavior as the homepage) ─── */
(function nav() {
  const navEl = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    navEl.classList.toggle('solid', true); // catalog nav is always solid (no hero to sit over)
    if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
  });
})();

function toggleMenu() {
  const drawer = document.getElementById('mobileDrawer');
  const ham = document.querySelector('.hamburger');
  const isOpen = drawer.classList.toggle('open');
  ham.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
function closeMenu() {
  document.getElementById('mobileDrawer').classList.remove('open');
  document.querySelector('.hamburger').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('click', (e) => {
  const drawer = document.getElementById('mobileDrawer');
  const ham = document.querySelector('.hamburger');
  if (drawer.classList.contains('open') && !drawer.contains(e.target) && !ham.contains(e.target)) {
    closeMenu();
  }
});
document.querySelectorAll('.drawer-links a').forEach((a) => a.addEventListener('click', closeMenu));

/* ─── CATALOG GROUPS (fixed order/labels — the locked architecture) ─────── */
const GROUPS = [
  { slug: 'consumables', name: 'Medical Consumables', num: '01', desc: 'Injection & Infusion, PPE & Infection Control, Wound Care, and Patient Care categories.' },
  { slug: 'hemodialysis', name: 'Hemodialysis', num: '02', desc: 'Dialyzers, bloodline sets, vascular access, concentrates, and other categories in this group.' },
  { slug: 'equipment', name: 'Medical Equipment', num: '03', desc: 'Diagnostic equipment items.' },
  { slug: 'procedure', name: 'Procedure & Surgical Supplies', num: '04', desc: 'Procedure consumables and reusable instruments.' },
  { slug: 'medications', name: 'Medications', num: '05', desc: 'A distinct grouping, kept separate from other catalog categories.' },
];
const slugToName = Object.fromEntries(GROUPS.map((g) => [g.slug, g.name]));
const nameToSlug = Object.fromEntries(GROUPS.map((g) => [g.name, g.slug]));
const GROUP_NAMES = GROUPS.map((g) => g.name);

let CATALOG = [];
let state = { view: 'landing', group: null, sub: null, q: '' };

/* ─── DATA LOADING ───────────────────────────────────────────────────────── */
fetch('assets/data/product-catalog.json')
  .then((r) => r.json())
  .then((data) => {
    CATALOG = Array.isArray(data.products) ? data.products : [];
    applyStateFromURL();
    render();
  })
  .catch((err) => {
    console.error('Catalog data failed to load:', err);
    const groupsEl = document.getElementById('cat-groups');
    if (groupsEl) groupsEl.innerHTML = '<p style="padding:40px 0;color:var(--mid)">The catalog could not be loaded right now. Please try again shortly.</p>';
  });

/* ─── URL STATE ──────────────────────────────────────────────────────────── */
function applyStateFromURL() {
  const params = new URLSearchParams(window.location.search);
  const groupSlug = params.get('group');
  const sub = params.get('sub');
  const q = params.get('q');
  if (q) {
    state = { view: 'search', group: null, sub: null, q };
  } else if (groupSlug && slugToName[groupSlug]) {
    state = { view: 'group', group: slugToName[groupSlug], sub: sub || null, q: '' };
  } else {
    state = { view: 'landing', group: null, sub: null, q: '' };
  }
}

function pushURL(replace) {
  const params = new URLSearchParams();
  if (state.view === 'search' && state.q) params.set('q', state.q);
  if (state.view === 'group' && state.group) {
    params.set('group', nameToSlug[state.group]);
    if (state.sub) params.set('sub', state.sub);
  }
  const url = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
  const fn = replace ? 'replaceState' : 'pushState';
  window.history[fn](state, '', url);
}

window.addEventListener('popstate', () => {
  applyStateFromURL();
  render();
});

/* ─── DATA HELPERS ───────────────────────────────────────────────────────── */
function productsForGroup(groupName) {
  return CATALOG.filter((p) => p.websiteGroup === groupName || (p.discoveryTags || []).includes(groupName));
}

function subfiltersForGroup(groupName) {
  const items = productsForGroup(groupName);
  const set = new Set();
  items.forEach((p) => set.add(p.websiteSubcategory));
  // tag-based pseudo-subcategories local to this group (e.g. "IV Solutions", "Wound Care") —
  // exclude tags that are actually other top-level group names (those are cross-listing signals, not pills)
  CATALOG.forEach((p) => {
    if (p.websiteGroup !== groupName) return;
    (p.discoveryTags || []).forEach((tag) => {
      if (!GROUP_NAMES.includes(tag)) set.add(tag);
    });
  });
  return Array.from(set);
}

function matchesSub(product, sub) {
  if (!sub) return true;
  return product.websiteSubcategory === sub || (product.discoveryTags || []).includes(sub);
}

function searchCatalog(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return CATALOG.filter((p) => {
    const verifiedText = (p.verifiedProducts || [])
      .flatMap((vp) => [vp.manufacturer, vp.brand, vp.modelReference, ...(vp.variants || [])])
      .filter(Boolean);
    const haystack = [p.catalogEntry, p.sourceCategory, p.websiteSubcategory, p.websiteGroup, ...(p.discoveryTags || []), ...verifiedText]
      .join(' ').toLowerCase();
    return haystack.includes(q);
  });
}

/* ─── RENDERING ──────────────────────────────────────────────────────────── */
function render() {
  renderLanding();
  const browseEl = document.getElementById('cat-browse');
  const groupsEl = document.getElementById('cat-groups');

  if (state.view === 'landing') {
    browseEl.hidden = true;
    groupsEl.hidden = false;
    return;
  }

  groupsEl.hidden = true;
  browseEl.hidden = false;

  if (state.view === 'search') {
    renderResults(searchCatalog(state.q), `Search results for “${state.q}”`, []);
    document.getElementById('cat-subfilters').innerHTML = '';
  } else if (state.view === 'group') {
    const all = productsForGroup(state.group);
    const filtered = state.sub ? all.filter((p) => matchesSub(p, state.sub)) : all;
    renderSubfilters(state.group, state.sub);
    renderResults(filtered, state.group, []);
  }

  fadeIn(browseEl);
}

function renderLanding() {
  const el = document.getElementById('cat-groups');
  if (el.dataset.rendered === '1') return; // build once; counts don't change at runtime
  el.dataset.rendered = '1';
  el.innerHTML = GROUPS.map((g) => {
    const count = productsForGroup(g.name).length;
    return `
      <button type="button" class="cat-group-tile" data-group="${g.slug}">
        <span class="cat-group-num">${g.num}</span>
        <span class="cat-group-name">${g.name}</span>
        <span class="cat-group-desc">${g.desc}</span>
        <span class="cat-group-meta"><span>${count} catalog ${count === 1 ? 'entry' : 'entries'}</span><span class="cat-group-arrow">→</span></span>
      </button>`;
  }).join('');
  el.querySelectorAll('.cat-group-tile').forEach((btn) => {
    btn.addEventListener('click', () => {
      state = { view: 'group', group: slugToName[btn.dataset.group], sub: null, q: '' };
      pushURL();
      render();
      document.getElementById('cat-browse').scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });
}

function renderSubfilters(groupName, activeSub) {
  const el = document.getElementById('cat-subfilters');
  const subs = subfiltersForGroup(groupName);
  el.innerHTML = ['<button type="button" class="cat-subfilter' + (!activeSub ? ' is-active' : '') + '" data-sub="">All</button>']
    .concat(subs.map((s) => `<button type="button" class="cat-subfilter${activeSub === s ? ' is-active' : ''}" data-sub="${escapeAttr(s)}">${escapeHtml(s)}</button>`))
    .join('');
  el.querySelectorAll('.cat-subfilter').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.sub = btn.dataset.sub || null;
      pushURL();
      render();
    });
  });
}

function renderResults(products, headingText, _unused) {
  document.getElementById('cat-browse-title').textContent = headingText;
  document.getElementById('cat-browse-count').textContent = products.length + (products.length === 1 ? ' catalog entry' : ' catalog entries');
  const grid = document.getElementById('cat-grid');
  const empty = document.getElementById('cat-empty');

  if (!products.length) {
    grid.innerHTML = '';
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  grid.innerHTML = products.map(renderCard).join('');
  wireImageFallbacks(grid);
}

/* ─── IMAGE SLOT ──────────────────────────────────────────────────────────
   Convention for future verified product photography (see
   images/products/README.md): a record may set
     "image":     "images/products/<sourceId>.jpg"   (required to show a photo)
     "imageWebp": "images/products/<sourceId>.webp"  (optional, progressive enhancement)
   Nothing here invents a path — a card only ever shows a photo when the
   data record explicitly provides one. If a provided path fails to load,
   the card falls back to the same placeholder used when no image exists
   at all (see wireImageFallbacks). */
function findPhotoSource(p) {
  if (p.image) return { image: p.image, imageWebp: p.imageWebp, alt: p.catalogEntry };
  const withImage = (p.verifiedProducts || []).find((vp) => vp.image);
  if (withImage) {
    return { image: withImage.image, imageWebp: withImage.imageWebp, alt: `${p.catalogEntry} — ${withImage.brand}` };
  }
  return null;
}

function renderPhoto(p) {
  const photo = findPhotoSource(p);
  if (photo) {
    const webpSource = photo.imageWebp ? `<source srcset="${escapeAttr(photo.imageWebp)}" type="image/webp">` : '';
    return `<div class="product-photo cat-photo">
        <picture>
          ${webpSource}
          <img src="${escapeAttr(photo.image)}" alt="${escapeAttr(photo.alt)}" loading="lazy" data-cat-img>
        </picture>
      </div>`;
  }
  return `<div class="product-photo product-photo--placeholder cat-photo-empty">
        <svg class="cat-photo-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="6" y="10" width="36" height="28" rx="2"/><circle cx="16" cy="20" r="3.5"/><path d="M42 30l-10-9-9 8-6-5-11 9"/></svg>
        <span class="placeholder-label">Photo pending</span>
      </div>`;
}

/* If an <img> with a real src fails to load (bad/missing file), swap it
   for the exact same placeholder markup used when no image was provided
   at all — a broken reference degrades gracefully, never to a broken-
   image icon or blank box. */
function wireImageFallbacks(container) {
  container.querySelectorAll('img[data-cat-img]').forEach((img) => {
    img.addEventListener('error', () => {
      const wrap = img.closest('.product-photo');
      if (!wrap) return;
      wrap.className = 'product-photo product-photo--placeholder cat-photo-empty';
      wrap.innerHTML = '<svg class="cat-photo-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="6" y="10" width="36" height="28" rx="2"/><circle cx="16" cy="20" r="3.5"/><path d="M42 30l-10-9-9 8-6-5-11 9"/></svg><span class="placeholder-label">Photo pending</span>';
    }, { once: true });
  });
}

/* ─── VERIFIED FIELDS ─────────────────────────────────────────────────────
   Brand, manufacturer, model, pack size, and specs are rendered only when
   the data record explicitly supplies them. None of these fields exist in
   the catalog yet — every row below currently evaluates to nothing — but
   the moment verified data is added to product-catalog.json, it will
   appear automatically with no further code changes. */
function renderVerifiedDetails(p) {
  const rows = [];
  if (p.brand) rows.push(['Brand', p.brand]);
  if (p.manufacturer) rows.push(['Manufacturer', p.manufacturer]);
  if (p.modelReference) rows.push(['Model', p.modelReference]);
  if (p.packSizeUom) rows.push(['Pack size', p.packSizeUom]);
  if (p.verifiedSpecs && typeof p.verifiedSpecs === 'object') {
    Object.entries(p.verifiedSpecs).forEach(([k, v]) => {
      if (v !== null && v !== undefined && v !== '') rows.push([k, v]);
    });
  }
  if (!rows.length) return '';
  return `<dl class="cat-details">${rows.map(([k, v]) => `<div class="cat-detail-row"><dt>${escapeHtml(k)}</dt><dd>${escapeHtml(String(v))}</dd></div>`).join('')}</dl>`;
}

/* ─── VERIFIED MANUFACTURER PRODUCTS ─────────────────────────────────────
   A catalog entry may list one or more real, sourced manufacturer/brand
   examples under "verifiedProducts" (added for the pilot batch — see
   docs/PRODUCT-SOURCE-REGISTER.md for the research trail). The generic
   Layali catalog entry (catalogEntry, above) always stays the visually
   primary heading; manufacturer/brand is rendered secondary underneath.
   sourceUrl is intentionally never rendered here — it's research-only. */
function renderOneVerifiedProduct(vp) {
  const rows = [];
  if (vp.modelReference) rows.push(['Model', vp.modelReference]);
  if (vp.packSizeUom) rows.push(['Pack size', vp.packSizeUom]);
  if (vp.verifiedSpecs) {
    Object.entries(vp.verifiedSpecs).forEach(([k, v]) => {
      if (v !== null && v !== undefined && v !== '') rows.push([k, v]);
    });
  }
  const detailsHtml = rows.length
    ? `<dl class="cat-details">${rows.map(([k, v]) => `<div class="cat-detail-row"><dt>${escapeHtml(k)}</dt><dd>${escapeHtml(String(v))}</dd></div>`).join('')}</dl>`
    : '';
  const variantsHtml = (vp.variants && vp.variants.length)
    ? `<div class="cat-variants">${vp.variants.map((v) => `<span class="cat-variant-chip">${escapeHtml(v)}</span>`).join('')}</div>`
    : '';
  return `<div class="cat-verified-item">
        <span class="cat-verified-mfr">${escapeHtml(vp.manufacturer)}</span>
        <span class="cat-verified-brand">${escapeHtml(vp.brand)}</span>
        ${variantsHtml}
        ${detailsHtml}
      </div>`;
}

function renderVerifiedProducts(p) {
  if (!p.verifiedProducts || !p.verifiedProducts.length) return '';
  return `<div class="cat-verified-block">${p.verifiedProducts.map(renderOneVerifiedProduct).join('')}</div>`;
}

function renderCard(p) {
  const variantsHtml = (p.variants && p.variants.length)
    ? `<div class="cat-variants">${p.variants.map((v) => `<span class="cat-variant-chip">${escapeHtml(v)}</span>`).join('')}</div>`
    : '';
  const groupLabel = p.websiteGroup !== state.group && state.view !== 'group' ? `${escapeHtml(p.websiteGroup)} · ` : '';
  const quoteHref = 'index.html?product=' + encodeURIComponent(p.catalogEntry) + '&category=' + encodeURIComponent(p.websiteSubcategory) + '#quote';
  const detailsHtml = renderVerifiedDetails(p);
  const verifiedProductsHtml = renderVerifiedProducts(p);

  const hasSpecs = !!detailsHtml || !!verifiedProductsHtml;
  const pendingParts = [];
  if (!findPhotoSource(p)) pendingParts.push('photo');
  if (!hasSpecs) pendingParts.push('specifications');
  const pendingHtml = pendingParts.length
    ? `<span class="cat-status-pill">${pendingParts.join(' & ')} pending verification</span>`
    : '';

  return `
    <article class="cat-card">
      <span class="cat-ref">Ref. ${p.sourceId}</span>
      ${renderPhoto(p)}
      <div class="cat-card-body">
        <span class="cat-card-group">${groupLabel}${escapeHtml(p.websiteSubcategory)}</span>
        <h3 class="product-name">${escapeHtml(p.catalogEntry)}</h3>
        ${variantsHtml}
        ${detailsHtml}
        ${verifiedProductsHtml}
        ${pendingHtml}
        <a href="${quoteHref}" class="product-cta">Request Quote</a>
      </div>
    </article>`;
}

function fadeIn(el) {
  el.classList.remove('cat-fade', 'is-in');
  // eslint-disable-next-line no-unused-expressions
  el.offsetHeight; // force reflow so the transition re-triggers
  el.classList.add('cat-fade');
  requestAnimationFrame(() => el.classList.add('is-in'));
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function escapeAttr(str) {
  return escapeHtml(str).replace(/"/g, '&quot;');
}

/* ─── SEARCH INPUT ───────────────────────────────────────────────────────── */
(function search() {
  const input = document.getElementById('cat-search-input');
  const clearBtn = document.getElementById('cat-search-clear');
  let debounceTimer = null;

  function setFromInput() {
    const q = input.value.trim();
    clearBtn.classList.toggle('visible', q.length > 0);
    if (q) {
      state = { view: 'search', group: null, sub: null, q };
    } else {
      state = { view: 'landing', group: null, sub: null, q: '' };
    }
    pushURL(true);
    render();
  }

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(setFromInput, 180);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    setFromInput();
    input.focus();
  });

  // keep the search box in sync if state changes via back/forward or tile clicks
  document.addEventListener('catalog:statechange', () => {
    input.value = state.view === 'search' ? state.q : '';
    clearBtn.classList.toggle('visible', !!input.value);
  });
})();

/* ─── BACK / EMPTY-STATE CONTROLS ────────────────────────────────────────── */
document.getElementById('cat-back').addEventListener('click', () => {
  state = { view: 'landing', group: null, sub: null, q: '' };
  pushURL();
  render();
  document.getElementById('cat-search-input').value = '';
  document.getElementById('cat-search-clear').classList.remove('visible');
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
});

document.getElementById('cat-empty-reset').addEventListener('click', () => {
  document.getElementById('cat-back').click();
});
