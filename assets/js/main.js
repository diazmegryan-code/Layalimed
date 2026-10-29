/* ============================================================
   Layali 2.0 — homepage interactions
   ============================================================ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── NAV: scroll state + theme-aware background ──────────────────────── */
(function navScroll() {
  const nav = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('solid', window.scrollY > 24);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
  });

  const darkSections = document.querySelectorAll('[data-nav-theme="dark"]');
  if (darkSections.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          nav.classList.add('on-dark-section');
        }
      });
      const anyDarkVisible = Array.from(darkSections).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top < 90 && r.bottom > 90;
      });
      if (!anyDarkVisible) nav.classList.remove('on-dark-section');
    }, { threshold: [0, 0.5, 1] });
    darkSections.forEach((el) => io.observe(el));
  }
})();

/* ─── MOBILE DRAWER ────────────────────────────────────────────────────── */
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
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.getElementById('mobileDrawer').classList.contains('open')) closeMenu();
});

/* ─── REVEAL ON SCROLL ─────────────────────────────────────────────────── */
(function reveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), (i % 4) * 70);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
})();

/* ─── GSAP: hero entrance, light→dark scroll transition, subtle parallax ─
   Loaded from CDN only when motion is allowed; everything still works
   (statically, fully visible) if GSAP fails to load or reduced motion
   is requested — GSAP only adds choreography on top of visible content.

   Ownership boundary (see assets/js/animations.js for the full map):
   GSAP here is scoped to major page choreography ONLY — hero entrance,
   hero parallax, and the light→dark scroll transition. It does not touch
   the Hemodialysis tab panels; that small UI swap is Anime.js's job
   (assets/js/animations.js exposes window.LayaliMotion.panelSwap, called
   from hdSignature() below). No other script animates the elements/
   properties listed above. */
(function motion() {
  if (prefersReducedMotion) return;

  const g = document.createElement('script');
  g.src = 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js';
  g.onload = () => {
    const st = document.createElement('script');
    st.src = 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js';
    st.onload = initGsap;
    document.head.appendChild(st);
  };
  document.head.appendChild(g);

  function initGsap() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      .from('.hero-copy .eyebrow', { opacity: 0, y: 16, duration: 0.6 })
      .from('.hero-h1-line', { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.08 }, '-=0.3')
      .from('.hero-sub', { opacity: 0, y: 16, duration: 0.6 }, '-=0.4')
      .from('.hero-actions', { opacity: 0, y: 16, duration: 0.6 }, '-=0.4')
      .from('.hero-chips', { opacity: 0, y: 16, duration: 0.6 }, '-=0.4')
      .from('.hero-visual', { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'power4.inOut' }, '-=1');

    // Safety net: on very throttled devices/tabs (rAF deprioritized while
    // backgrounded), guarantee the hero is fully visible within 2.5s rather
    // than leaving it stuck mid-reveal indefinitely.
    setTimeout(() => { if (heroTl.progress() < 1) heroTl.progress(1); }, 2500);

    // Subtle hero parallax
    gsap.to('.hero-collage', {
      yPercent: 6,
      ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
    });

    // Light -> dark scroll transition: interpolate CSS vars on #transition
    const transitionEl = document.getElementById('transition');
    if (transitionEl) {
      const light = { bg: [255, 255, 255], fg: [23, 24, 27] };
      const dark = { bg: [17, 18, 20], fg: [243, 242, 239] };
      const lerp = (a, b, t) => Math.round(a + (b - a) * t);
      const setVars = (t) => {
        const bg = light.bg.map((c, i) => lerp(c, dark.bg[i], t));
        const fg = light.fg.map((c, i) => lerp(c, dark.fg[i], t));
        transitionEl.style.setProperty('--transition-bg', `rgb(${bg.join(',')})`);
        transitionEl.style.setProperty('--transition-fg', `rgb(${fg.join(',')})`);
      };
      setVars(0);
      ScrollTrigger.create({
        trigger: transitionEl,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => setVars(self.progress),
      });
    }

    ScrollTrigger.refresh();
  }
})();

/* ─── DELIVERY CAROUSEL + LIGHTBOX ─────────────────────────────────────── */
(function deliveries() {
  const deliveryPhotos = [
    { src: 'images/deliveries/delivery-01-primary.jpg', alt: 'Medical supplies packed for delivery, including bundled gauze swabs, face masks, and PPE cartons inside a Layali Medical Supply delivery vehicle' },
    { src: 'images/deliveries/delivery-02.jpg', alt: 'Boxes of 3-ply face masks with earloop stacked for delivery' },
    { src: 'images/deliveries/delivery-03.jpg', alt: 'Sealed 3M medical supply cartons prepared for delivery' },
    { src: 'images/deliveries/delivery-04.jpg', alt: 'Boxes of alcohol prep pads stacked for delivery' },
  ];

  const slides = Array.from(document.querySelectorAll('.delivery-slide'));
  const dots = Array.from(document.querySelectorAll('.delivery-dot'));
  if (!slides.length) return;

  let index = 0;
  let timer = null;

  function render() {
    slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
  }
  function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }
  function startTimer() {
    stopTimer();
    if (prefersReducedMotion) return;
    timer = setInterval(() => { index = (index + 1) % slides.length; render(); }, 4200);
  }
  function goTo(i) { index = (i + slides.length) % slides.length; render(); startTimer(); }

  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  slides.forEach((s, i) => {
    s.addEventListener('click', () => openLightbox(i));
    s.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(i);
      }
    });
  });

  const stage = document.querySelector('.delivery-stage');
  if (stage) {
    stage.addEventListener('mouseenter', stopTimer);
    stage.addEventListener('mouseleave', startTimer);
  }

  render();
  startTimer();

  // Lightbox
  let lightboxIndex = 0;
  const lb = document.getElementById('deliveryLightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCounter = document.getElementById('lightboxCounter');

  function updateLightbox() {
    const photo = deliveryPhotos[lightboxIndex];
    lbImg.src = photo.src;
    lbImg.alt = photo.alt;
    lbCounter.textContent = (lightboxIndex + 1) + ' / ' + deliveryPhotos.length;
  }
  function openLightbox(i) {
    lightboxIndex = i;
    updateLightbox();
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', lightboxKeyHandler);
  }
  function closeLightbox() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', lightboxKeyHandler);
  }
  function navLightbox(dir) {
    lightboxIndex = (lightboxIndex + dir + deliveryPhotos.length) % deliveryPhotos.length;
    updateLightbox();
  }
  function lightboxKeyHandler(e) {
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') navLightbox(-1);
    else if (e.key === 'ArrowRight') navLightbox(1);
  }

  window.closeLightbox = closeLightbox;
  window.navLightbox = navLightbox;

  lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
})();

/* ─── HEMODIALYSIS SIGNATURE SECTION: vertical tabs ─────────────────────
   WAI-ARIA vertical tabs pattern with roving tabindex + arrow-key nav.
   Hover previews on hover-capable pointers only; click/tap and keyboard
   focus both commit the selection, so touch and keyboard users get the
   same result as a mouse hover on desktop. */
(function hdSignature() {
  const tabs = Array.from(document.querySelectorAll('.hd-tab'));
  const panels = Array.from(document.querySelectorAll('.hd-visual-inner'));
  if (!tabs.length || !panels.length) return;

  const canHover = window.matchMedia('(hover: hover)').matches;

  function activate(key) {
    tabs.forEach((t) => {
      const isActive = t.dataset.hd === key;
      t.classList.toggle('is-active', isActive);
      t.setAttribute('aria-selected', String(isActive));
      t.tabIndex = isActive ? 0 : -1;
    });
    panels.forEach((p) => {
      const isActive = p.dataset.hdActive === key;
      if (isActive && p.hidden) {
        p.hidden = false;
        if (!prefersReducedMotion && window.LayaliMotion && window.LayaliMotion.panelSwap) {
          window.LayaliMotion.panelSwap(p);
        }
      } else if (!isActive) {
        p.hidden = true;
      }
    });
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activate(tab.dataset.hd));
    if (canHover) {
      tab.addEventListener('mouseenter', () => activate(tab.dataset.hd));
    }
    tab.addEventListener('keydown', (e) => {
      let target = null;
      if (e.key === 'ArrowDown') target = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowUp') target = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') target = tabs[0];
      else if (e.key === 'End') target = tabs[tabs.length - 1];
      else return;
      e.preventDefault();
      target.focus();
      activate(target.dataset.hd);
    });
  });
})();

/* ─── HEMODIALYSIS CIRCUIT INFOGRAPHIC ───────────────────────────────────
   Each part of the diagram (and its mobile step list) selects the matching
   tab above; the highlighted part follows the active tab, however it was
   changed (click, hover, or keyboard). */
(function hdCircuit() {
  const nodes = Array.from(document.querySelectorAll('[data-hd-node]'));
  const tabs = Array.from(document.querySelectorAll('.hd-tab'));
  const caption = document.getElementById('hd-circuit-caption');
  if (!nodes.length || !tabs.length) return;

  const text = {
    dialyzers: 'Dialyzers: the filter the blood circuit runs through during treatment.',
    tubing: 'Blood tubing sets: carry blood from the patient\'s access to the dialyzer and back.',
    needles: 'AV fistula needles: connect the patient\'s vascular access to the blood tubing.',
    concentrates: 'Concentrates: mixed with water to make the dialysate that flows through the dialyzer.',
    treatment: 'Treatment consumables: dressings and supplies used around each session.',
  };

  function sync() {
    const active = tabs.find((t) => t.classList.contains('is-active'));
    const key = active && active.dataset.hd;
    nodes.forEach((n) => {
      const on = n.dataset.hdNode === key;
      n.classList.toggle('is-active', on);
      if (n.matches('button')) n.setAttribute('aria-pressed', String(on));
    });
    if (caption && key) caption.textContent = text[key] || '';
  }

  function select(key) {
    const tab = tabs.find((t) => t.dataset.hd === key);
    if (tab) tab.click();
  }

  nodes.forEach((n) => {
    n.addEventListener('click', () => select(n.dataset.hdNode));
    n.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(n.dataset.hdNode); }
    });
  });
  const observer = new MutationObserver(sync);
  tabs.forEach((t) => observer.observe(t, { attributes: true, attributeFilter: ['class'] }));
  sync();
})();

/* Full-catalog search. Results open the existing catalog search view. */
(function search() {
  const overlay = document.getElementById('search-overlay');
  if (!overlay) return;
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const closeBtn = document.getElementById('search-close');
  let opener;
  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    input.value = '';
    if (opener) opener.focus();
  }
  function render() {
    const q = input.value.trim();
    results.replaceChildren();
    const link = document.createElement('a');
    link.className = 'search-result';
    link.href = 'catalog.html' + (q ? '?q=' + encodeURIComponent(q) : '');
    link.textContent = q ? 'Search all products for “' + q + '” →' : 'Explore the full product catalog →';
    results.appendChild(link);
  }
  function open(button) {
    opener = button || document.activeElement;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    render();
    input.focus();
  }
  document.querySelectorAll('[data-search-open]').forEach(b => b.addEventListener('click', () => open(b)));
  closeBtn.addEventListener('click', close);
  input.addEventListener('input', render);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); window.location.href = results.querySelector('a').href; }
  });
  document.addEventListener('keydown', e => {
    if (overlay.classList.contains('open')) {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') {
        const items = Array.from(overlay.querySelectorAll('button, input, a[href]')).filter(el => !el.disabled);
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    } else if (e.key === '/' && !e.ctrlKey && !e.metaKey && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) && !document.activeElement.isContentEditable) {
      e.preventDefault(); open();
    }
  });
})();

/* Catalog quote links preserve product/subcategory in the message.
   Match the visible subcategory first, otherwise use its catalog group.
   Option values route to the existing CRM category contract. */
(function prefillFromCatalog() {
  const params = new URLSearchParams(window.location.search);
  const product = params.get('product');
  const category = params.get('category');
  const group = params.get('group');
  if (!product && !category) return;

  const messageEl = document.getElementById('f-message');
  if (messageEl && product) {
    messageEl.value = `I'd like a quote for: ${product}${category ? ' (' + category + ')' : ''}\n\n`;
  }
  const categoryEl = document.getElementById('f-category');
  if (categoryEl && category) {
    const options = Array.from(categoryEl.options);
    const aliases = { 'Dialyzers / Artificial Kidneys': 'Dialyzers', 'Bloodline Sets': 'Blood Tubing Sets', 'Acid Concentrates & Bicarbonate': 'Concentrates', 'Dressing Supplies': 'Treatment Consumables' };
    const wanted = aliases[category] || category;
    const match = options.find(o => o.text === wanted) || options.find(o => o.dataset.group === group && o.dataset.fallback) || options.find(o => o.dataset.group === group);
    if (match) categoryEl.selectedIndex = options.indexOf(match);
  }
})();

/* ─── QUOTE FORM: validation + EmailJS + MedCRM dual-submit ────────────────
   Same EmailJS keys and MedCRM endpoint as the production form. Email was
   added to the EmailJS payload only -- website_leads (MedCRM) has no email
   column, so it is intentionally left out of that fetch body. */
function showToast(msg, isError = false) {
  const t = document.getElementById('toast');
  t.textContent = '';
  if (!isError) {
    const mark = new Image();
    mark.src = 'images/layali-emblem.png'; mark.alt = ''; mark.className = 'toast-emblem'; mark.setAttribute('aria-hidden', 'true');
    t.appendChild(mark);
  }
  t.appendChild(document.createTextNode(msg));
  t.className = 'show' + (isError ? ' error-toast' : '');
  setTimeout(() => { t.className = ''; }, 4500);
}

function validateField(id, groupId, testFn) {
  const el = document.getElementById(id);
  const grp = document.getElementById(groupId);
  const ok = testFn(el.value.trim());
  grp.classList.toggle('error', !ok);
  if (!ok && window.LayaliMotion && window.LayaliMotion.flashInvalid) {
    window.LayaliMotion.flashInvalid(el);
  }
  return ok;
}

const phPattern = /^(\+?63|0)9\d{9}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm() {
  const results = [
    validateField('f-firstname', 'fg-firstname', (v) => v.length > 0),
    validateField('f-lastname', 'fg-lastname', (v) => v.length > 0),
    validateField('f-clinic', 'fg-clinic', (v) => v.length > 0),
    validateField('f-phone', 'fg-phone', (v) => phPattern.test(v.replace(/\s/g, ''))),
    validateField('f-email', 'fg-email', (v) => emailPattern.test(v)),
    validateField('f-category', 'fg-category', (v) => v !== ''),
    validateField('f-message', 'fg-message', (v) => v.length >= 10),
  ];
  return results.every(Boolean);
}

['f-firstname', 'f-lastname', 'f-clinic', 'f-phone', 'f-email', 'f-category', 'f-message'].forEach((id) => {
  const map = {
    'f-firstname': 'fg-firstname', 'f-lastname': 'fg-lastname', 'f-clinic': 'fg-clinic',
    'f-phone': 'fg-phone', 'f-email': 'fg-email', 'f-category': 'fg-category', 'f-message': 'fg-message',
  };
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', () => document.getElementById(map[id]).classList.remove('error'));
});

// EmailJS setup: Public Key / Service ID / Template ID (unchanged from production)
const EMAILJS_PUBLIC_KEY = 'sqspYeoqrAUlpMG81';
const EMAILJS_SERVICE_ID = 'service_wvatfra';
const EMAILJS_TEMPLATE_ID = 'template_vr2e83d';

// Public MedCRM lead-intake endpoint (unauthenticated by design -- see
// backend/src/routes/leads-public.js in the medcrm repo). Not a secret.
const CRM_API_URL = 'https://medcrm-production.up.railway.app/api/leads';

// Keep confirmed deliveries for this page session so retries only send to failed channels.
const quoteDeliveries = new Map();
let quoteSending = false;
let emailReady;
function ensureEmailJS() {
  if (emailReady) return emailReady;
  emailReady = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    const timer = setTimeout(() => { s.remove(); reject(new Error('Email service unavailable')); }, 15000);
    s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    s.onload = () => {
      clearTimeout(timer);
      try { window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY }); resolve(window.emailjs); }
      catch (err) { reject(err); }
    };
    s.onerror = () => { clearTimeout(timer); s.remove(); reject(new Error('Email service unavailable')); };
    document.head.appendChild(s);
  }).catch(err => { emailReady = null; throw err; });
  return emailReady;
}

async function handleSubmit() {
  if (quoteSending) return;
  if (!validateForm()) { showToast('Please fix the highlighted fields.', true); return; }
  if (document.getElementById('f-website').value.trim()) {
    showToast('Inquiry received. Thank you.');
    return;
  }
  const value = id => document.getElementById(id).value.trim();
  const params = {
    from_name: value('f-firstname') + ' ' + value('f-lastname'),
    clinic: value('f-clinic'), phone: value('f-phone'), email: value('f-email'),
    category: document.getElementById('f-category').selectedOptions[0].text,
    message: value('f-message'),
  };
  const payload = {
    first_name: value('f-firstname'), last_name: value('f-lastname'),
    clinic: params.clinic, phone: params.phone,
    category: value('f-category'), message: 'Website category: ' + params.category + '\n\n' + params.message, website: '',
  };
  const key = JSON.stringify({ params, payload });
  const delivered = quoteDeliveries.get(key) || { crm: false, email: false };
  quoteDeliveries.set(key, delivered);
  const btn = document.getElementById('submitBtn');
  quoteSending = true;
  btn.disabled = true;
  btn.textContent = 'Sending…';
  try {
    await Promise.allSettled([
      delivered.crm ? Promise.resolve() : (async () => {
        const response = await fetch(CRM_API_URL, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload), signal: AbortSignal.timeout(20000),
        });
        if (!response.ok) throw new Error('CRM request failed: ' + response.status);
        delivered.crm = true;
      })(),
      delivered.email ? Promise.resolve() : (async () => {
        const service = await ensureEmailJS();
        await service.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
        delivered.email = true;
      })(),
    ]);
    if (delivered.email && delivered.crm) {
      quoteDeliveries.delete(key);
      showToast('✓ Inquiry sent! We will contact you soon.');
      ['f-firstname', 'f-lastname', 'f-clinic', 'f-phone', 'f-email', 'f-category', 'f-message'].forEach(id => { document.getElementById(id).value = ''; });
    } else if (delivered.email || delivered.crm) {
      showToast('Inquiry received. One delivery step failed; your details are kept. Retry to finish.', true);
    } else {
      showToast('Unable to confirm delivery. Your details are kept. Retry or call +63 917 319 9572.', true);
    }
  } finally {
    quoteSending = false;
    btn.disabled = false;
    btn.textContent = 'Send Inquiry →';
  }
}
