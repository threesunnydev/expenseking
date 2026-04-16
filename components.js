(function () {
  // Derive base path from where this script is referenced.
  // Root pages use src="components.js" → base = ""
  // Subfolder pages use src="../components.js" → base = "../"
  const scriptSrc = document.currentScript
    ? document.currentScript.getAttribute('src')
    : Array.from(document.querySelectorAll('script[src]')).pop().getAttribute('src');
  const base = scriptSrc.replace('components.js', '');

  const path = window.location.pathname;
  const isHelp = path.includes('/help');
  const isPrivacy = path.includes('/privacy-policy');

  const navHTML = `
<nav>
  <a class="nav-brand" href="${base}index.html"><span class="e">Expense</span><span class="k">King</span></a>
  <div class="nav-links">
    <a href="${base}help/"${isHelp ? ' class="active"' : ''}>Help</a>
    <a href="${base}privacy-policy/"${isPrivacy ? ' class="active"' : ''}>Privacy Policy</a>
  </div>
</nav>`;

  const footerHTML = `
<footer>
  <div class="footer-links">
    <a href="${base}help/">Help Center</a>
    <a href="${base}privacy-policy/">Privacy Policy</a>
    <a href="${base}terms/">Terms &amp; Conditions</a>
  </div>
  <p>© 2026 ThreeSunnyDev — Bright ideas into reality.</p>
</footer>`;

  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.outerHTML = navHTML;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.outerHTML = footerHTML;
})();
