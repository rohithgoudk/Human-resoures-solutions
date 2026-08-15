/* =========================================================
   Stackly — index.js
   Header scroll state + mobile nav toggle
   ========================================================= */
   (function () {
    var header         = document.querySelector('.site-header');
    var hamburger       = document.querySelector('.hamburger');
    var mobileNav       = document.getElementById('mobileNav');
    var mobileNavClose  = document.querySelector('.mobile-nav-close');
  
    /* ---- Header background swap on scroll ---- */
    function onScroll() {
      if (!header) return;
      if (window.scrollY > 8) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  
    /* ---- Mobile nav open/close ---- */
    if (hamburger && mobileNav) {
      var openNav = function () {
        mobileNav.classList.add('is-open');
        hamburger.classList.add('is-open');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'Close menu');
        document.body.classList.add('nav-open');
      };
  
      var closeNav = function () {
        mobileNav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
        document.body.classList.remove('nav-open');
      };
  
      hamburger.addEventListener('click', function () {
        if (mobileNav.classList.contains('is-open')) {
          closeNav();
        } else {
          openNav();
        }
      });
  
      if (mobileNavClose) {
        mobileNavClose.addEventListener('click', closeNav);
      }
  
      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeNav);
      });
  
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) closeNav();
      });
  
      window.addEventListener('resize', function () {
        if (window.innerWidth > 900 && mobileNav.classList.contains('is-open')) closeNav();
      });
    }
  
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
  
    /* ---- Scroll reveal (fade + rise into view) ---- */
    var revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
      if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(function (el) { revealObserver.observe(el); });
      } else {
        revealEls.forEach(function (el) { el.classList.add('is-visible'); });
      }
    }
  
    /* ---- Email typo / completeness guard ----
       A regex pattern alone can't catch "gmail.co" as wrong, because .co
       is itself a real domain ending — the browser has no way to know you
       meant to keep typing "...com". So instead we explicitly recognise
       the big free-mail providers and require their *exact* real domain.
       Typing "gmail.co", "gmail.con", "yahoo.co" etc. all get caught and
       blocked with a "did you mean ...?" message. Any other domain (a
       company domain, a less common provider) still just goes through
       the normal pattern/required check untouched. */
    var KNOWN_PROVIDERS = {
      'gmail':      'gmail.com',
      'googlemail': 'googlemail.com',
      'yahoo':      'yahoo.com',
      'outlook':    'outlook.com',
      'hotmail':    'hotmail.com',
      'live':       'live.com',
      'msn':        'msn.com',
      'icloud':     'icloud.com',
      'me':         'me.com',
      'aol':        'aol.com',
      'proton':     'proton.me',
      'protonmail': 'protonmail.com',
      'zoho':       'zoho.com',
      'yandex':     'yandex.com',
      'rediffmail': 'rediffmail.com'
    };
  
    function providerTypoMessage(email) {
      if (!email || email.indexOf('@') === -1) return '';
      var domain = email.split('@')[1] || '';
      domain = domain.toLowerCase().trim();
      if (!domain) return '';
  
      var domainRoot = domain.split('.')[0]; // "gmail" out of "gmail.co"
      var canonical = KNOWN_PROVIDERS[domainRoot];
  
      if (canonical && domain !== canonical) {
        return 'Did you mean ' + canonical + '? Please enter a complete, correct email address.';
      }
      return '';
    }
  
    function applyEmailTypoCheck(field) {
      if (!field || field.type !== 'email') return;
      var msg = providerTypoMessage(field.value);
      field.setCustomValidity(msg); // empty string = valid
    }
  
    document.querySelectorAll('input[type="email"]').forEach(function (field) {
      field.addEventListener('input', function () { applyEmailTypoCheck(field); });
      field.addEventListener('blur', function () { applyEmailTypoCheck(field); });
    });
  
    /* ---- Demo form submit ----
       Forms marked [data-demo-form] have no real backend yet.
       We explicitly check form.checkValidity() (which now also includes
       the custom email-typo check above) before redirecting. If it
       fails, we stop, trigger the native validation UI, mark the bad
       field, and show a clear inline message next to it. Only a fully
       valid, complete form redirects to the placeholder page. */
    document.querySelectorAll('[data-demo-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        // Re-run the typo check right before submit too, in case a field
        // was filled by autofill without firing input/blur.
        form.querySelectorAll('input[type="email"]').forEach(applyEmailTypoCheck);
  
        if (!form.checkValidity()) {
          form.reportValidity();
          showFieldErrors(form);
          return;
        }
  
        clearFieldErrors(form);
        var dest = form.getAttribute('data-redirect') || '404.html';
        window.location.href = dest;
      });
  
      // Clear a field's error as soon as the visitor fixes it.
      form.querySelectorAll('input, select, textarea').forEach(function (field) {
        field.addEventListener('input', function () {
          if (field.type === 'email') applyEmailTypoCheck(field);
          if (field.checkValidity()) {
            field.classList.remove('is-invalid');
            var msg = field.parentElement.querySelector('.field-error');
            if (msg) msg.remove();
          }
        });
      });
    });
  
    function showFieldErrors(form) {
      clearFieldErrors(form);
      var invalidFields = form.querySelectorAll(':invalid');
      invalidFields.forEach(function (field) {
        field.classList.add('is-invalid');
        var msg = document.createElement('span');
        msg.className = 'field-error';
        msg.textContent = field.validationMessage || 'Please fill in this field.';
        field.insertAdjacentElement('afterend', msg);
      });
    }
  
    function clearFieldErrors(form) {
      form.querySelectorAll('.field-error').forEach(function (el) { el.remove(); });
      form.querySelectorAll('.is-invalid').forEach(function (el) { el.classList.remove('is-invalid'); });
    }
  })();