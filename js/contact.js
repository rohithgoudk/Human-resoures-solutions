document.addEventListener('DOMContentLoaded', () => {

  /* ============ HEADER SCROLL STATE ============ */
  const siteHeader = document.querySelector('.site-header');
  const heroEl = document.querySelector('.contact-hero');

  const updateHeaderState = () => {
    if (!siteHeader) return;
    const threshold = heroEl ? Math.max(heroEl.offsetHeight - 90, 40) : 40;
    siteHeader.classList.toggle('scrolled', window.scrollY > threshold);
  };
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
  window.addEventListener('resize', updateHeaderState);

  /* ============ MOBILE NAV (full-screen) ============ */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.querySelector('.mobile-nav-close');

  if (hamburger && mobileNav) {
    const openNav = () => {
      mobileNav.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
      if (mobileNavClose) mobileNavClose.focus({ preventScroll: true });

      if (window.gsap) {
        gsap.fromTo('.mobile-nav-links a',
          { x: 24, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out', delay: 0.15 }
        );
        gsap.fromTo('.mobile-nav-ctas .btn',
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: 'power2.out', delay: 0.35 }
        );
      }
    };
    const closeNav = () => {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
      hamburger.focus({ preventScroll: true });
    };

    hamburger.addEventListener('click', () => {
      mobileNav.classList.contains('open') ? closeNav() : openNav();
    });
    if (mobileNavClose) mobileNavClose.addEventListener('click', closeNav);
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeNav();
    });
  }

  /* ============ FLOATING LABELS ============ */
  document.querySelectorAll('.input-group input, .input-group select, .input-group textarea')
    .forEach(field => {
      const group = field.closest('.input-group');
      const sync = () => group.classList.toggle('filled', field.value.trim().length > 0);
      field.addEventListener('input', sync);
      field.addEventListener('change', sync);
      field.addEventListener('blur', sync);
      sync();
    });

  /* ============ LETTERS-ONLY NAME FIELDS ============
     First Name / Last Name should only ever contain letters
     (plus spaces, hyphens, and apostrophes for names like
     "Anne-Marie" or "O'Brien") — block anything else as the
     person types, rather than only flagging it after submit. */
  const nameFieldIds = ['firstName', 'lastName'];
  nameFieldIds.forEach(id => {
    const field = document.getElementById(id);
    if (!field) return;
    field.addEventListener('input', () => {
      const cleaned = field.value.replace(/[^A-Za-z\s'-]/g, '');
      if (cleaned !== field.value) {
        const caret = field.selectionStart - (field.value.length - cleaned.length);
        field.value = cleaned;
        field.setSelectionRange(caret, caret);
      }
    });
    // Also strip anything that slips in via paste
    field.addEventListener('paste', () => {
      setTimeout(() => {
        const cleaned = field.value.replace(/[^A-Za-z\s'-]/g, '');
        if (cleaned !== field.value) field.value = cleaned;
      }, 0);
    });
  });

  /* ============ FAQ ACCORDION ============ */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');

    q.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(other => {
        other.classList.remove('active');
        other.querySelector('.faq-a').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        a.style.maxHeight = a.scrollHeight + 'px';
      }

      if (window.ScrollTrigger) {
        setTimeout(() => ScrollTrigger.refresh(), 420);
      }
    });
  });

  /* ============ CONTACT FORM VALIDATION ============ */
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('contactFormMessage');

  const getErrorMessage = (input) => {
    if (input.validity.valueMissing) {
      switch (input.id) {
        case 'firstName': return 'Please enter your first name.';
        case 'lastName': return 'Please enter your last name.';
        case 'contactEmail': return 'Please enter your email address.';
        case 'inquiryType': return 'Please choose a subject.';
        case 'message': return 'Let us know how we can help.';
        default: return 'This field is required.';
      }
    }
    if (input.validity.typeMismatch && input.type === 'email') {
      return 'Please enter a valid email address.';
    }
    if (input.validity.patternMismatch) {
      if (input.id === 'firstName' || input.id === 'lastName') {
        return 'Letters only, please.';
      }
      return 'Please match the requested format.';
    }
    return 'Please check this field.';
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      const fields = contactForm.querySelectorAll('input, select, textarea');

      fields.forEach(input => {
        const group = input.closest('.input-group');
        const errorText = group.querySelector('.error-text');
        group.classList.remove('error');
        if (errorText) errorText.textContent = '';

        if (!input.checkValidity()) {
          group.classList.add('error');
          if (errorText) errorText.textContent = getErrorMessage(input);
          isValid = false;
        }
      });

      if (!isValid) {
        formMessage.textContent = 'Please fix the highlighted fields before sending.';
        formMessage.className = 'form-message error show';
        return;
      }

      formMessage.textContent = "Thanks — your message is in. We'll be in touch within four business hours.";
      formMessage.className = 'form-message success show';
      contactForm.reset();
      document.querySelectorAll('.input-group').forEach(g => g.classList.remove('filled'));

      setTimeout(() => formMessage.classList.remove('show'), 6000);
    });

    contactForm.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => {
        const group = input.closest('.input-group');
        group.classList.remove('error');
        const errorText = group.querySelector('.error-text');
        if (errorText) errorText.textContent = '';
      });
    });
  }

  /* ============ GSAP MOTION ============ */
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);

    /* Hero load-in sequence */
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .from('.contact-hero .eyebrow', { y: 16, opacity: 0, duration: 0.7 }, 0.1)
      .from('.contact-hero h1', { y: 26, opacity: 0, duration: 0.9 }, 0.25)
      .from('.contact-hero .hero-sub', { y: 20, opacity: 0, duration: 0.8 }, 0.42)
      .from('.qstat', { y: 16, opacity: 0, duration: 0.6, stagger: 0.12 }, 0.6)
      .from('.net-dots circle', { scale: 0, opacity: 0, transformOrigin: 'center', duration: 0.5, stagger: 0.05 }, 0.3)
      .from('.net-lines line', { opacity: 0, duration: 0.8 }, 0.4);

    /* Ambient pulse on network dots */
    gsap.to('.net-dots circle', {
      opacity: 0.25,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: { each: 0.25, from: 'random' }
    });

    /* Scroll reveals */
    document.querySelectorAll('.reveal').forEach((el) => {
      gsap.from(el, {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%'
        }
      });
    });

    /* Info + FAQ card stagger */
    gsap.from('.info-card, .hours-card', {
      x: -24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-info-col', start: 'top 85%' }
    });

    /* App bento section */
    const appTl = gsap.timeline({
      scrollTrigger: { trigger: '.app-section', start: 'top 78%' }
    });
    appTl
      .from('.app-header .eyebrow, .app-header h2', { y: 18, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' })
      .from('.bento-card', { y: 34, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.35')
      .from('.btn-store', { y: 14, opacity: 0, scale: 0.94, duration: 0.55, stagger: 0.1, ease: 'back.out(1.4)' }, '-=0.3');

    gsap.to('.glow-orb', {
      x: 'random(-30,30)', y: 'random(-25,25)',
      duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut',
      stagger: { each: 1.2, from: 'random' }
    });

    gsap.from('.faq-item', {
      y: 18,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.faq-list', start: 'top 88%' }
    });
  }
});