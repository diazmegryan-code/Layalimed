/* Products mega-menu: hover and focus open it from CSS; this adds the
   Escape-to-dismiss behaviour so the panel never traps or covers content. */
(function () {
  var item = document.querySelector('.nav-has-menu');
  if (!item) return;
  function reset() { item.classList.remove('is-dismissed'); }
  item.addEventListener('mouseleave', reset);
  item.addEventListener('focusout', function (e) {
    if (!item.contains(e.relatedTarget)) reset();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || !item.matches(':hover, :focus-within')) return;
    item.classList.add('is-dismissed');
    var link = item.querySelector('.nav-products');
    if (link && item.contains(document.activeElement)) link.focus();
  });
})();
