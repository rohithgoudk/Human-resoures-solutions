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
  
    /* ---------- Search widget entrance (slides in after the hero-top timeline) ---------- */
    if (hasGSAP && !reduceMotion && document.querySelector('.services-search-card')) {
      gsap.from('.services-search-card', {
        x: 40, opacity: 0, scale: 0.96, duration: 1.1, ease: 'power4.out', delay: 0.5
      });
    }
  
    /* ---------- Generic stagger-reveal for this page's card grids ---------- */
    if (hasGSAP && typeof ScrollTrigger !== 'undefined') {
      const groups = ['.sig-grid', '.browse-grid', '.review-card-row'];
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
  
    /* ---------- Pinned horizontal scroll: trending track ---------- */
    const track = document.querySelector('.trending-track');
    if (hasGSAP && typeof ScrollTrigger !== 'undefined' && track && window.innerWidth > 820 && !reduceMotion) {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);
  
      const tween = gsap.to(track, { x: getScrollAmount, ease: 'none' });
  
      ScrollTrigger.create({
        trigger: '.trending-pin-wrapper',
        start: 'top top',
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true
      });
    }
    // On narrow viewports the CSS switches .trending-track to a plain
    // swipeable overflow-x row instead — no JS needed there.
  
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
        if (focusInput.value.trim().length < 2) {
          showFieldError(focusInput, 'focusError', 'Tell us what you need help with.');
          valid = false;
        }
        if (priorityInput.value.trim().length < 2) {
          showFieldError(priorityInput, 'priorityError', 'Add a priority — speed, cost, compliance…');
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
  
    /* ---------- Insider list form (validated email, magnetic button) ---------- */
    const insiderForm = document.getElementById('insiderForm');
    if (insiderForm) {
      const emailInput = document.getElementById('insiderEmail');
      const emailError = document.getElementById('insiderEmailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
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
        const value = emailInput.value.trim();
        if (!value) { showError('Email address is required.'); return; }
        if (!emailRegex.test(value)) { showError('Please enter a valid email address.'); return; }
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
  
      emailInput.addEventListener('input', clearError);
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