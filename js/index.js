/* =========================================================
   Stackly — index.js
   Header scroll state + mobile nav toggle
   (mirrors the working behaviour from contact.html:
   solid full-screen panel, staggered link reveal via CSS,
   hamburger <-> close icon animation, body scroll lock)
   ========================================================= */
(function () {
  var header    = document.querySelector('.site-header');
  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.getElementById('mobileNav');

  /* ---- Header background swap on scroll ---- */
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav open/close ---- */
  if (!hamburger || !mobileNav) return;

  function openNav() {
    mobileNav.classList.add('is-open');
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
    document.body.classList.add('nav-open');
  }

  function closeNav() {
    mobileNav.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('nav-open');
  }

  hamburger.addEventListener('click', function () {
    if (mobileNav.classList.contains('is-open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close when a nav link/button inside the panel is tapped.
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) closeNav();
  });

  // Close if the viewport is resized back up to desktop.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900 && mobileNav.classList.contains('is-open')) closeNav();
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var wasOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(function (open) {
        open.classList.remove('is-open');
      });
      if (!wasOpen) item.classList.add('is-open');
    });
  });

  /* ---- Testimonial carousel ---- */
  var testimonialEl = document.querySelector('.testimonial[data-testimonials]');
  if (testimonialEl) {
    var data = [];
    try { data = JSON.parse(testimonialEl.getAttribute('data-testimonials')); } catch (e) { data = []; }
    var idx = 0;
    var photoImg = testimonialEl.querySelector('.testi-photo img');
    var quoteEl  = testimonialEl.querySelector('blockquote');
    var nameEl   = testimonialEl.querySelector('.testi-name');
    var roleEl   = testimonialEl.querySelector('.testi-role');

    function renderTestimonial() {
      if (!data.length) return;
      var t = data[idx];
      if (photoImg) photoImg.src = t.photo;
      if (quoteEl)  quoteEl.textContent = '\u201C' + t.quote + '\u201D';
      if (nameEl)   nameEl.textContent = t.name;
      if (roleEl)   roleEl.textContent = t.role;
    }
    renderTestimonial();

    testimonialEl.querySelectorAll('.testi-nav button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (!data.length) return;
        var dir = btn.getAttribute('data-dir') === 'prev' ? -1 : 1;
        idx = (idx + dir + data.length) % data.length;
        renderTestimonial();
      });
    });
  }

  /* ---- Demo form submit (prevents navigation, no backend wired up) ---- */
  document.querySelectorAll('[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  });
})();