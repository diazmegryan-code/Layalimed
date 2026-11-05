/* Quote list: buyers add several catalog products, then send one quote request.
   The list lives in localStorage (this browser only, nothing is sent anywhere until the quote
   form is submitted). If storage is blocked it still works for the current page. */
(function () {
  var KEY = 'layali.quoteList.v1';
  var MAX_ITEMS = 40;
  var memory = [];

  function valid(i) {
    return i && (typeof i.id === 'number' || typeof i.id === 'string') && typeof i.name === 'string' && i.name;
  }
  function read() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || '[]');
      return Array.isArray(v) ? v.filter(valid) : [];
    } catch (e) { return memory.filter(valid); }
  }
  function write(items, silent) {
    memory = items;
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) { /* storage blocked: keep in memory */ }
    if (!silent) document.dispatchEvent(new CustomEvent('quotelist:change', { detail: items }));
  }
  function same(a, b) { return String(a) === String(b); }

  var api = {
    all: function () { return read(); },
    count: function () { return read().length; },
    has: function (id) { return read().some(function (i) { return same(i.id, id); }); },
    add: function (item) {
      var items = read();
      if (items.some(function (i) { return same(i.id, item.id); })) return false;
      if (items.length >= MAX_ITEMS) return false;
      items.push({ id: item.id, name: String(item.name).slice(0, 160), group: item.group || '', sub: item.sub || '', qty: '' });
      write(items);
      return true;
    },
    remove: function (id) { write(read().filter(function (i) { return !same(i.id, id); })); },
    setQty: function (id, qty) {
      var items = read();
      items.forEach(function (i) { if (same(i.id, id)) i.qty = String(qty).slice(0, 40); });
      write(items, true); // typing must not re-render the list
    },
    clear: function () { write([]); },
    max: MAX_ITEMS
  };
  window.QuoteList = api;

  window.addEventListener('storage', function (e) {
    if (e.key === KEY) document.dispatchEvent(new CustomEvent('quotelist:change', { detail: read() }));
  });

  /* ---- floating tray ---- */
  function init() {
    var tray = document.createElement('a');
    tray.className = 'quote-tray';
    tray.href = 'index.html#quote';
    tray.hidden = true;
    tray.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/></svg>' +
      '<span class="quote-tray-label">Quote list</span><span class="quote-tray-count"></span><span class="quote-tray-go" aria-hidden="true">Review &amp; send &rarr;</span>';
    document.body.appendChild(tray);

    var status = document.createElement('div');
    status.className = 'vh';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    document.body.appendChild(status);

    var quoteInView = false;
    function paint() {
      var n = api.count();
      tray.querySelector('.quote-tray-count').textContent = n;
      tray.setAttribute('aria-label', 'Quote list, ' + n + (n === 1 ? ' item' : ' items') + '. Review and send');
      tray.hidden = n === 0 || quoteInView;
    }
    var quote = document.getElementById('quote');
    if (quote && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        quoteInView = entries[0].isIntersecting;
        paint();
      }, { threshold: 0.15 }).observe(quote);
    }
    var last = api.count();
    document.addEventListener('quotelist:change', function () {
      var n = api.count();
      if (n > last) status.textContent = 'Added to quote list. ' + n + (n === 1 ? ' item' : ' items') + ' in your list.';
      else if (n < last) status.textContent = 'Removed from quote list. ' + n + (n === 1 ? ' item' : ' items') + ' in your list.';
      last = n;
      paint();
    });
    paint();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
