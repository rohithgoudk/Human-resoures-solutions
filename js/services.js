// ============================================================
// Stackly HR — Services page effects
// Shared header/hamburger/hero-parallax/hero-top timeline and
// generic .reveal handling already live in js/index.js.
// This file only covers what's unique to Services.
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  const hasGSAP = typeof gsap !== 'undefined';
  if (hasGSAP && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Search widget entrance (its own section, scrolls into view) ---------- */
  if (hasGSAP && !reduceMotion && document.querySelector('.services-search-card')) {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.from('.services-search-card', {
        y: 50, opacity: 0, scale: 0.96, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.services-search-section', start: 'top 85%' }
      });
    } else {
      gsap.from('.services-search-card', {
        y: 40, opacity: 0, scale: 0.96, duration: 1.1, ease: 'power4.out', delay: 0.5
      });
    }
  }

  /* ---------- Generic stagger-reveal for this page's card grids ---------- */
  if (hasGSAP && typeof ScrollTrigger !== 'undefined') {
    const groups = ['.sig-grid', '.browse-grid'];
    groups.forEach(sel => {
      document.querySelectorAll(sel).forEach(grid => {
        const items = gsap.utils.toArray(grid.children);
        if (!items.length) return;
        gsap.set(items, { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 30 });
        gsap.to(items, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: grid, start: 'top 85%' }
        });
      });
    });

    // Section headers (badge/title/subtitle) fade up as they arrive
    document.querySelectorAll('.sig-header, .browse-header, .trending-header, .reviews-header').forEach(el => {
      gsap.from(el.children, {
        opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 22, duration: 0.7, stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' }
      });
    });

    // Trending carousel + reviews rows fade in as a whole (no per-card
    // scroll-jacking — the cards themselves are just static flex children
    // inside a manually-scrollable row now)
    document.querySelectorAll('.trending-carousel, .reviews-row').forEach(el => {
      gsap.from(el, {
        opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%' }
      });
    });

    // Portal CTA
    const ctaText = document.querySelector('.cta-text-content');
    if (ctaText) {
      gsap.from(ctaText.children, {
        opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24, duration: 0.7, stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.portal-cta-section', start: 'top 75%' }
      });
    }
    const ctaVisual = document.querySelector('.cta-visual');
    if (ctaVisual && !reduceMotion) {
      gsap.from(ctaVisual, {
        opacity: 0, scale: 0.94, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.portal-cta-section', start: 'top 75%' }
      });
      gsap.from('.floating-badge', {
        opacity: 0, scale: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(1.6)', delay: 0.4,
        scrollTrigger: { trigger: '.portal-cta-section', start: 'top 75%' }
      });
      // Gentle ambient float once visible
      gsap.to('.badge-1', { y: -12, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      gsap.to('.badge-2', { y: 12, duration: 2.8, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.4 });
    }

    // Insider section
    const insiderContent = document.querySelector('.insider-content');
    if (insiderContent) {
      gsap.from(insiderContent, {
        opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 30, scale: reduceMotion ? 1 : 0.97,
        duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.insider-section', start: 'top 75%' }
      });
    }
  }

  /* ---------- Arrow-controlled carousels (Trending + both Reviews rows) ----------
     Plain manual horizontal scroll — no auto-play, no scroll-jacking/pin.
     Works the same way on desktop (click) and mobile (tap, or swipe the
     row directly — scroll-snap keeps cards aligned either way). */
  function refreshArrowState(track) {
    if (!track) return;
    const prevBtn = document.querySelector('.carousel-arrow[data-target="' + track.id + '"][data-dir="prev"]');
    const nextBtn = document.querySelector('.carousel-arrow[data-target="' + track.id + '"][data-dir="next"]');
    const maxScroll = track.scrollWidth - track.clientWidth - 2;
    if (prevBtn) prevBtn.disabled = track.scrollLeft <= 2;
    if (nextBtn) nextBtn.disabled = maxScroll <= 2 || track.scrollLeft >= maxScroll;
  }

  function stepDistance(track) {
    const firstCard = track.firstElementChild;
    if (!firstCard) return track.clientWidth;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || '0') || 0;
    return firstCard.getBoundingClientRect().width + gap;
  }

  document.querySelectorAll('.carousel-arrow').forEach(btn => {
    btn.addEventListener('click', () => {
      const track = document.getElementById(btn.dataset.target);
      if (!track) return;
      const dist = stepDistance(track);
      track.scrollBy({ left: btn.dataset.dir === 'prev' ? -dist : dist, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.trending-track-container, .reviews-track').forEach(track => {
    refreshArrowState(track);
    track.addEventListener('scroll', () => window.requestAnimationFrame(() => refreshArrowState(track)), { passive: true });
    window.addEventListener('resize', () => refreshArrowState(track));
  });

  /* ---------- Services search form (validated, redirects to 404.html) ---------- */
  const searchForm = document.getElementById('servicesSearchForm');
  if (searchForm) {
    const teamInput = document.getElementById('teamSizeInput');
    const focusInput = document.getElementById('focusInput');
    const priorityInput = document.getElementById('priorityInput');

    const showFieldError = (input, errorId, message) => {
      input.classList.add('is-invalid');
      const el = document.getElementById(errorId);
      el.textContent = message;
      el.style.display = 'block';
    };
    const clearFieldError = (input) => {
      input.classList.remove('is-invalid');
      const el = input.parentElement.querySelector('.error-message');
      if (el) el.style.display = 'none';
    };

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      if (!teamInput.value) {
        showFieldError(teamInput, 'teamSizeError', 'Select a team size.');
        valid = false;
      }
      if (!focusInput.value) {
        showFieldError(focusInput, 'focusError', 'Select what you need help with.');
        valid = false;
      }
      if (!priorityInput.value) {
        showFieldError(priorityInput, 'priorityError', 'Select your top priority.');
        valid = false;
      }

      if (valid) {
        const btn = document.getElementById('servicesSearchBtn');
        const original = btn.textContent;
        btn.textContent = 'Searching…';
        setTimeout(() => {
          window.location.href = '404.html';
          btn.textContent = original;
        }, 900);
      }
    });

    [teamInput, focusInput, priorityInput].forEach(input => {
      input.addEventListener('input', () => clearFieldError(input));
      input.addEventListener('change', () => clearFieldError(input));
    });
  }

  /* ---------- Insider list email validation ----------
     FIX: the old regex (/^[^\s@]+@[^\s@]+\.[^\s@]+$/) accepted a SINGLE
     character after the dot — "gmail.c" passed as "valid" and the form
     redirected to 404.html. Two changes fix this:
       1. Require a real-length ending (2+ letters), same rule as the
          homepage newsletter form.
       2. Explicitly catch well-known provider typos ("gmail.co" instead
          of "gmail.com") that are technically valid-*looking* domains
          but clearly not what the person meant to type. */
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  const KNOWN_PROVIDERS = {
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

  function getEmailError(rawValue) {
    const value = (rawValue || '').trim();
    if (!value) return 'Email address is required.';
    if (!EMAIL_PATTERN.test(value)) return 'Please enter a complete, valid email address.';

    const domain = (value.split('@')[1] || '').toLowerCase();
    const domainRoot = domain.split('.')[0];
    const canonical = KNOWN_PROVIDERS[domainRoot];
    if (canonical && domain !== canonical) {
      return 'Did you mean ' + canonical + '? Please enter a complete, correct email address.';
    }
    return '';
  }

  /* ---------- Insider list form (validated email, magnetic button) ---------- */
  const insiderForm = document.getElementById('insiderForm');
  if (insiderForm) {
    const emailInput = document.getElementById('insiderEmail');
    const emailError = document.getElementById('insiderEmailError');

    const showError = (msg) => {
      emailInput.classList.add('is-invalid');
      emailError.textContent = msg;
      emailError.style.display = 'block';
    };
    const clearError = () => {
      emailInput.classList.remove('is-invalid');
      emailError.textContent = '';
      emailError.style.display = 'none';
    };

    insiderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const err = getEmailError(emailInput.value);
      if (err) { showError(err); return; }
      clearError();

      const btnText = document.querySelector('#insiderForm .btn-text');
      const original = btnText.textContent;
      btnText.textContent = 'Requesting…';
      setTimeout(() => {
        insiderForm.reset();
        btnText.textContent = original;
        window.location.href = '404.html';
      }, 1200);
    });

    // Re-validate live so the error clears the moment the address is
    // actually complete and correct — not just on any keystroke.
    emailInput.addEventListener('input', () => {
      if (!getEmailError(emailInput.value)) clearError();
    });
    emailInput.addEventListener('blur', () => {
      const err = getEmailError(emailInput.value);
      if (err && emailInput.value.trim()) showError(err);
    });
  }

  /* Magnetic pull toward the cursor on desktop, ignored on touch */
  const magneticBtn = document.getElementById('insiderMagneticBtn');
  if (hasGSAP && magneticBtn && window.matchMedia('(hover: hover)').matches && !reduceMotion) {
    magneticBtn.addEventListener('mousemove', (e) => {
      const r = magneticBtn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.3;
      const y = (e.clientY - r.top - r.height / 2) * 0.4;
      gsap.to(magneticBtn, { x, y, duration: 0.3, ease: 'power2.out' });
    });
    magneticBtn.addEventListener('mouseleave', () => {
      gsap.to(magneticBtn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' });
    });
  }

});