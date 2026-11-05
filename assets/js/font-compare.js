/* TEMPORARY: lets the font change be compared with the previous fonts.
   Visit any page with ?fonts=old (or ?fonts=new to switch back). Remove once the fonts are decided. */
(function () {
  try {
    var m = /[?&]fonts=(old|new)/.exec(location.search);
    if (m) sessionStorage.setItem('fonts', m[1]);
    if (sessionStorage.getItem('fonts') === 'old') document.documentElement.classList.add('fonts-old');
  } catch (e) {}
})();
