/* ===========================================================
   Stackly — Blog page fixes
   Self-contained: does not depend on blog.js internals, so it
   works whether or not blog.js already has (working or broken)
   handlers for these same elements.

   1) Journal filters — All Stories / Compliance / Benefits /
      Culture. Clicking a pill sets it active and shows only the
      matching .article-card items (matched via their
      item-compliance / item-benefits / item-culture class).
   2) Newsletter — a valid, non-empty email on submit navigates
      to 404.html. Empty/invalid does NOT navigate; the field's
      native validation message shows instead.
   3) Scroll-reveal correction — forces ScrollTrigger to
      recalculate trigger positions once the page has fully
      settled, so cards don't get stuck mid-fade after a reload.
=========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1) Journal filters ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const articleCards = document.querySelectorAll('.article-card');

  if (filterBtns.length && articleCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter || 'all';

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        articleCards.forEach(card => {
          const matches = filter === 'all' || card.classList.contains('item-' + filter);

          if (matches) {
            card.classList.remove('hide');
            // next frame so the display:none → block change is
            // picked up before removing the fade-out state
            requestAnimationFrame(() => card.classList.remove('filtering-out'));
          } else {
            card.classList.add('filtering-out');
            window.setTimeout(() => card.classList.add('hide'), 250);
          }
        });

        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      });
    });
  }

  /* ---------- 2) Newsletter → 404.html on valid submit ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('emailInput');

  if (newsletterForm && emailInput) {
    // Capture phase: runs before any other submit listener blog.js
    // may already have on this same form, so nothing else can
    // block or race the redirect.
    newsletterForm.addEventListener('submit', (e) => {
      const hasValue = emailInput.value.trim().length > 0;
      const isValid = emailInput.checkValidity();

      if (hasValue && isValid) {
        e.preventDefault();
        e.stopImmediatePropagation();
        window.location.href = '404.html';
      } else {
        // Empty/invalid: block navigation, surface the native
        // validation message, let any existing error styling run.
        e.preventDefault();
        emailInput.reportValidity();
      }
    }, { capture: true });
  }

  /* ---------- 3) Fix mistimed ScrollTrigger positions ---------- */
  const refreshScrollTrigger = () => {
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  };
  window.addEventListener('load', () => {
    refreshScrollTrigger();
    setTimeout(refreshScrollTrigger, 400);
    setTimeout(refreshScrollTrigger, 1200);
  });
});