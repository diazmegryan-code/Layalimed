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
   is requested — GSAP only adds choreography on top of visible content. */
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
  slides.forEach((s, i) => s.addEventListener('click', () => openLightbox(i)));

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
        if (!prefersReducedMotion && window.gsap) {
          gsap.fromTo(p, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' });
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

/* ─── SEARCH OVERLAY (client-side, scoped to homepage content) ─────────── */
(function search() {
  const overlay = document.getElementById('search-overlay');
  const openBtns = document.querySelectorAll('[data-search-open]');
  const closeBtn = document.getElementById('search-close');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!overlay) return;

  const index = Array.from(document.querySelectorAll('[data-searchable]')).map((el) => ({
    name: el.dataset.searchName,
    category: el.dataset.searchCategory,
    target: el,
  }));

  function open() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 200);
    renderResults('');
  }
  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    input.value = '';
  }
  function renderResults(q) {
    const query = q.trim().toLowerCase();
    const matches = query
      ? index.filter((item) => item.name.toLowerCase().includes(query) || item.category.toLowerCase().includes(query))
      : index;

    results.innerHTML = '';
    if (!matches.length) {
      results.innerHTML = '<p class="search-empty">No matches yet — try “dialyzer”, “mask”, or “wound care.”</p>';
      return;
    }
    matches.forEach((item) => {
      const btn = document.createElement('button');
      btn.className = 'search-result';
      btn.innerHTML = `<span class="search-result-name">${item.name}</span><span>${item.category}</span>`;
      btn.addEventListener('click', () => {
        close();
        item.target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
        item.target.classList.add('search-highlight');
        setTimeout(() => item.target.classList.remove('search-highlight'), 1600);
      });
      results.appendChild(btn);
    });
  }

  openBtns.forEach((b) => b.addEventListener('click', open));
  closeBtn.addEventListener('click', close);
  input.addEventListener('input', (e) => renderResults(e.target.value));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
    if (e.key === '/' && !overlay.classList.contains('open') && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      open();
    }
  });
})();

/* ─── QUOTE FORM: validation + EmailJS + MedCRM dual-submit ────────────────
   Preserved as-is from the production form (index.html, main branch) —
   same field ids, same EmailJS keys, same MedCRM endpoint. Only the
   surrounding markup/CSS changed for this redesign. */
function showToast(msg, isError = false) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'show' + (isError ? ' error-toast' : '');
  setTimeout(() => { t.className = ''; }, 4500);
}

function validateField(id, groupId, testFn) {
  const el = document.getElementById(id);
  const grp = document.getElementById(groupId);
  const ok = testFn(el.value.trim());
  grp.classList.toggle('error', !ok);
  return ok;
}

const phPattern = /^(\+?63|0)9\d{9}$/;

function validateForm() {
  const results = [
    validateField('f-firstname', 'fg-firstname', (v) => v.length > 0),
    validateField('f-lastname', 'fg-lastname', (v) => v.length > 0),
    validateField('f-clinic', 'fg-clinic', (v) => v.length > 0),
    validateField('f-phone', 'fg-phone', (v) => phPattern.test(v.replace(/\s/g, ''))),
    validateField('f-category', 'fg-category', (v) => v !== ''),
    validateField('f-message', 'fg-message', (v) => v.length >= 10),
  ];
  return results.every(Boolean);
}

['f-firstname', 'f-lastname', 'f-clinic', 'f-phone', 'f-category', 'f-message'].forEach((id) => {
  const map = {
    'f-firstname': 'fg-firstname', 'f-lastname': 'fg-lastname', 'f-clinic': 'fg-clinic',
    'f-phone': 'fg-phone', 'f-category': 'fg-category', 'f-message': 'fg-message',
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

(function initEmailJS() {
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  s.onload = () => emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  document.head.appendChild(s);
})();

async function handleSubmit() {
  if (!validateForm()) {
    showToast('Please fix the highlighted fields.', true);
    return;
  }

  // Honeypot -- see #fg-website. Bots that fill every field trip this;
  // real visitors never do. Feign success instead of erroring.
  if (document.getElementById('f-website').value.trim() !== '') {
    showToast("✓ Inquiry sent! We'll contact you soon.");
    document.querySelectorAll('#fg-firstname input,#fg-lastname input,#fg-clinic input,#fg-phone input,#fg-category select,#fg-message textarea')
      .forEach((el) => (el.value = ''));
    return;
  }

  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  const firstName = document.getElementById('f-firstname').value.trim();
  const lastName = document.getElementById('f-lastname').value.trim();

  const params = {
    from_name: firstName + ' ' + lastName,
    clinic: document.getElementById('f-clinic').value.trim(),
    phone: document.getElementById('f-phone').value.trim(),
    category: document.getElementById('f-category').value,
    message: document.getElementById('f-message').value.trim(),
  };

  // MedCRM lead intake fires independently of EmailJS, not awaited/chained,
  // so a slow or unreachable CRM never delays the EmailJS toast below.
  fetch(CRM_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      clinic: params.clinic,
      phone: params.phone,
      category: params.category,
      message: params.message,
      website: document.getElementById('f-website').value,
    }),
  }).catch((err) => console.error('CRM lead intake error:', err));

  if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = 'Send Inquiry →';
      showToast("✓ Inquiry sent! We'll contact you soon.");
      document.querySelectorAll('#fg-firstname input,#fg-lastname input,#fg-clinic input,#fg-phone input,#fg-category select,#fg-message textarea')
        .forEach((el) => (el.value = ''));
    }, 1200);
    return;
  }

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
    showToast("✓ Inquiry sent! We'll contact you soon.");
    ['f-firstname', 'f-lastname', 'f-clinic', 'f-phone', 'f-category', 'f-message']
      .forEach((id) => (document.getElementById(id).value = ''));
  } catch (err) {
    console.error('EmailJS error:', err);
    showToast('Failed to send. Please contact us via Viber at +63 917 319 9572.', true);
  } finally {
    btn.disabled = false;
    btn.textContent = 'Send Inquiry →';
  }
}
