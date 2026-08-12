document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------------------------
       Mobile nav toggle
    --------------------------------------------------------- */
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.getElementById('mobileNav');
  
    function closeMobileNav() {
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  
    function toggleMobileNav() {
      const isOpen = hamburger.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileNav.classList.toggle('is-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
  
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', toggleMobileNav);
      mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileNav));
      window.addEventListener('resize', () => {
        if (window.innerWidth > 860) closeMobileNav();
      });
    }
  
    /* ---------------------------------------------------------
       Page-load motion (respects reduced-motion)
    --------------------------------------------------------- */
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
    if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
      gsap.registerPlugin(ScrollTrigger);
  
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
      tl.from('.site-header', { y: -24, opacity: 0, duration: 0.7 })
        .to('.auth-intro .eyebrow', { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
        .to('.auth-intro .reveal-up', {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.09
        }, '-=0.3')
        .to('.auth-card', {
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out'
        }, '-=0.7')
        .from('.field, .check-row, .btn-full, .auth-switch', {
          opacity: 0, y: 12, duration: 0.5, stagger: 0.05
        }, '-=0.35')
        .from('.auth-network', { opacity: 0, scale: 1.08, duration: 1.1, ease: 'power2.out' }, '-=1');
  
      // Subtle ambient drift on the node network — ties the signup page
      // back to the site's "people network" motif from the homepage hero.
      gsap.to('.net-nodes', {
        y: -14, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1
      });
      gsap.to('.net-lines', {
        y: -8, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.2
      });
  
      // Gentle scroll parallax on the network graphic
      gsap.to('.auth-network', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: '.auth-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6
        }
      });
    } else {
      // No-JS-animation fallback: make sure content is visible
      document.querySelectorAll('.reveal-up, .auth-card').forEach(el => {
        el.style.opacity = 1;
        el.style.transform = 'none';
      });
    }
  
    /* ---------------------------------------------------------
       Password visibility toggle
    --------------------------------------------------------- */
    const passToggle = document.querySelector('.pass-toggle');
    const passwordInput = document.getElementById('password');
  
    if (passToggle && passwordInput) {
      passToggle.addEventListener('click', () => {
        const showing = passwordInput.getAttribute('type') === 'text';
        passwordInput.setAttribute('type', showing ? 'password' : 'text');
        passToggle.querySelector('.icon-eye').style.display = showing ? '' : 'none';
        passToggle.querySelector('.icon-eye-off').style.display = showing ? 'none' : '';
        passToggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
      });
    }
  
    /* ---------------------------------------------------------
       Form validation
    --------------------------------------------------------- */
    const signupForm = document.getElementById('signupForm');
    const formError = document.getElementById('formError');
  
    function showError(message) {
      formError.textContent = message;
      formError.style.display = 'block';
      if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
        gsap.fromTo(formError, { x: -6 }, {
          x: 6, duration: 0.09, yoyo: true, repeat: 3,
          onComplete: () => gsap.set(formError, { x: 0 })
        });
      }
    }
  
    function clearError() {
      formError.style.display = 'none';
      formError.textContent = '';
    }
  
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearError();
  
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const workEmail = document.getElementById('workEmail').value.trim();
        const company = document.getElementById('company').value.trim();
        const teamSize = document.getElementById('teamSize').value;
        const password = passwordInput.value;
        const terms = document.getElementById('terms').checked;
  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        if (!firstName || !lastName || !workEmail || !company) {
          showError('Please fill out all fields.');
          return;
        }
        if (!emailRegex.test(workEmail)) {
          showError('Please enter a valid work email address.');
          return;
        }
        if (!teamSize) {
          showError('Please select your company size.');
          return;
        }
        if (password.length < 8) {
          showError('Password must be at least 8 characters long.');
          return;
        }
        if (!terms) {
          showError("You must agree to Stackly's Terms of Service.");
          return;
        }
  
        const btn = signupForm.querySelector('.btn-full');
        const originalLabel = btn.querySelector('.btn-label').textContent;
        btn.style.pointerEvents = 'none';
        btn.querySelector('.btn-label').textContent = 'Creating account…';
  
        setTimeout(() => {
          btn.querySelector('.btn-label').textContent = 'Account created';
          btn.style.background = '#5A8F6B';
          window.location.href = 'login.html';
        }, 1600);
      });
    }
  
    /* ---------------------------------------------------------
       Scroll-triggered reveal for any future in-page sections
    --------------------------------------------------------- */
    if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        gsap.from(el, {
          opacity: 0, y: 24, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' }
        });
      });
    }
  });