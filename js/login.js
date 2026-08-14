document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------
     Header: solid background once the page is scrolled
  --------------------------------------------------- */
  const header = document.getElementById('siteHeader');
  const setHeaderState = () => {
    if (window.scrollY > 30) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  /* ---------------------------------------------------
     Mobile nav open / close
  --------------------------------------------------- */
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const scrim = document.getElementById('mobileNavScrim');

  const openNav = () => {
    mobileNav.classList.add('open');
    scrim.classList.add('show');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  const closeNav = () => {
    mobileNav.classList.remove('open');
    scrim.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    mobileNav.classList.contains('open') ? closeNav() : openNav();
  });
  mobileNavClose.addEventListener('click', closeNav);
  scrim.addEventListener('click', closeNav);
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeNav(); });

  /* ---------------------------------------------------
     GSAP — page load entrance
  --------------------------------------------------- */
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('.auth-anim', { opacity: 0, y: 26 });
    gsap.set('.auth-network', { opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.site-header', { y: -30, opacity: 0, duration: 0.7 })
      .to('.auth-network', { opacity: 0.9, duration: 1.1, ease: 'power2.out' }, '-=0.4')
      .to('.auth-text-content .auth-anim', { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, '-=0.7')
      .to('.auth-form-glass', { opacity: 1, y: 0, duration: 0.9 }, '-=0.6')
      .from('.auth-form-glass .input-group, .auth-form-glass .form-row, .auth-form-glass .btn-submit-auth, .auth-form-glass .auth-switch, .auth-form-glass .form-head', {
        y: 14, opacity: 0, duration: 0.5, stagger: 0.06
      }, '-=0.5');

    /* -------------------------------------------------
       ScrollTrigger — reveal the trust strip on scroll
    ------------------------------------------------- */
    gsap.utils.toArray('.reveal').forEach((el, i) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: (i % 4) * 0.06,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    /* subtle parallax on the network graphic */
    gsap.to('.auth-network', {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: {
        trigger: '.auth-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  /* ---------------------------------------------------
     Password visibility toggle
     Fix: previously this relied ONLY on the .is-visible
     class + CSS (.eye-open / .eye-closed display rules)
     to decide which icon shows. If any other stylesheet
     on the site declares a competing `svg` display rule
     with equal-or-higher specificity, it can win the
     cascade and both icons render at once ("dual eye"
     bug).
     Now the JS sets each icon's display directly via
     inline style on every toggle (and once on load).
     Inline styles always beat external stylesheet rules
     (short of !important), so exactly one icon can ever
     be visible, regardless of any other CSS on the page.
     The .is-visible class is kept too, purely so any
     :hover / theming CSS keyed off it still works.
  --------------------------------------------------- */
  const toggleBtn = document.querySelector('.btn-toggle-pass');
  const passwordInput = document.getElementById('password');
  const eyeOpenIcon = toggleBtn.querySelector('.eye-open');
  const eyeClosedIcon = toggleBtn.querySelector('.eye-closed');

  const setPasswordVisibility = (show) => {
    passwordInput.setAttribute('type', show ? 'text' : 'password');
    toggleBtn.classList.toggle('is-visible', show);
    eyeOpenIcon.style.display = show ? 'none' : 'flex';
    eyeClosedIcon.style.display = show ? 'flex' : 'none';
    toggleBtn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
  };

  // Lock in the correct starting state as soon as the page loads,
  // instead of trusting CSS defaults alone.
  setPasswordVisibility(false);

  toggleBtn.addEventListener('click', () => {
    const willShow = passwordInput.getAttribute('type') !== 'text';
    setPasswordVisibility(willShow);
  });

  /* ---------------------------------------------------
     Form validation + simulated sign-in
  --------------------------------------------------- */
  const loginForm = document.getElementById('loginForm');
  const formError = document.getElementById('formError');
  const submitBtn = document.querySelector('.btn-submit-auth');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const showError = (message) => {
    formError.textContent = message;
    formError.style.display = 'block';
    if (window.gsap) {
      gsap.fromTo(formError,
        { x: -6 },
        { x: 6, duration: 0.09, yoyo: true, repeat: 3, ease: 'power1.inOut', onComplete: () => gsap.set(formError, { x: 0 }) }
      );
    }
  };

  const clearError = () => {
    formError.style.display = 'none';
    formError.textContent = '';
  };

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearError();

    const email = document.getElementById('email').value.trim();
    const pass = passwordInput.value;
    const role = document.getElementById('role').value;

    if (!email || !pass) return showError('Please fill out Email and Password.');
    if (!emailRegex.test(email)) return showError('Please enter a valid email address.');
    if (pass.length < 8) return showError('Password must be at least 8 characters long.');
    if (!role) return showError('Please select how you want to sign in.');

    /* -------------------------------------------------
       Persist the signed-in user.
       Fix: the dashboard (employee-dashboard.html /
       admin-dashboard.html) reads localStorage.user (a
       JSON object with an `email` and `role`) plus
       localStorage.isAuthenticated === 'true'. This page
       used to only write sessionStorage under different
       key names, so the dashboard never found a user and
       fell back to showing "?" for the avatar/name. Store
       it in the shape the dashboard actually expects.
    ------------------------------------------------- */
    const userRecord = {
      email: email,
      role: role,
      name: email.split('@')[0],
      loginTime: Date.now()
    };
    localStorage.setItem('user', JSON.stringify(userRecord));
    localStorage.setItem('isAuthenticated', 'true');

    // Kept for any page that still reads the old session keys.
    sessionStorage.setItem('stacklyUserEmail', email);
    sessionStorage.setItem('stacklyUserRole', role);

    const originalLabel = submitBtn.querySelector('.btn-label').textContent;
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-label').textContent = 'Signing in…';

    setTimeout(() => {
      submitBtn.querySelector('.btn-label').textContent = 'Welcome back!';

      const destinations = {
        employee: 'employee-dashboard.html',
        admin: 'admin-dashboard.html'
      };

      const redirectTo = destinations[role];
      if (redirectTo) {
        window.location.href = redirectTo;
      } else {
        // Session was still saved correctly above — only the redirect
        // target is unknown, so let the person pick a role again.
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-label').textContent = originalLabel;
        showError('Please select a valid role.');
      }
    }, 1400);
  });

});