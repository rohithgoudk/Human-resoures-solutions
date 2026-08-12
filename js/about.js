/* ===========================================================
   Stackly HR — About page
   Header state + mobile nav open/close are now handled by the
   SHARED js/index.js (same .is-scrolled / .is-open pattern as
   index.html and services.html), so that logic has been
   removed from this file to avoid double-binding.

   This file only covers what's unique to About: hero load-in +
   parallax, mission/vision/values, our story reveal, stats
   counters, trusted/press marquee, team grid, and the CTA
   journey section — plus a ScrollTrigger.refresh() pass once
   the page has fully loaded, which corrects trigger positions
   that were getting miscalculated before background images had
   finished loading (the original cause of sections appearing
   permanently blank after a reload).
=========================================================== */

/* ===========================================================
   HERO — load-in sequence + mouse parallax on floating images
=========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    if (!window.gsap) return;
  
    const aboutTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
  
    aboutTl.from(".about-hero-content .badge-text", { y: 20, opacity: 0, delay: 0.2 })
      .from(".about-title", { y: 40, opacity: 0 }, "-=0.7")
      .from(".about-subtitle", { y: 30, opacity: 0 }, "-=0.7")
      .from(".scroll-indicator", { opacity: 0, duration: 1 }, "-=0.5")
      .from(".float-img", {
        y: 100,
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
        duration: 1.2
      }, "-=1");
  
    const heroSection = document.querySelector('.about-hero-section');
    const images = document.querySelectorAll('.float-img');
  
    if (heroSection && images.length) {
      heroSection.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        images.forEach((img, index) => {
          const speed = (index + 1) * 15;
          gsap.to(img, {
            x: x * speed,
            y: y * speed,
            duration: 1,
            ease: "power2.out"
          });
        });
      });
    }
  });
  
  /* ===========================================================
     MISSION / VISION / VALUES
  =========================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
  
    const mvvTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mission-vision-row",
        start: "top 80%",
      }
    });
  
    mvvTl.from(".mission-block", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
      .from(".mvv-divider", {
        scaleY: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.6")
      .from(".vision-block", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8");
  
    const valuesTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".values-header",
        start: "top 85%",
      }
    });
  
    valuesTl.from(".values-header > *", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    })
      .from(".value-card", {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)"
      }, "-=0.4");
  });
  
  /* ===========================================================
     OUR STORY — clip-path reveal + timeline
  =========================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.gsap || !window.ScrollTrigger) return;
  
    const storyTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".our-story-section",
        start: "top 75%",
      }
    });
  
    storyTl.fromTo(".story-image-wrapper",
      { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
      { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.2, ease: "power3.inOut" }
    )
      .to(".story-image", {
        scale: 1,
        duration: 1.2,
        ease: "power3.inOut"
      }, "<");
  
    storyTl.from(".story-content .badge-text", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.6")
      .from(".story-title", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
      .from(".story-description", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.6");
  
    storyTl.from(".timeline-item", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)"
    }, "-=0.4");
  });
  
  /* ===========================================================
     STATS — pill reveal + counting numbers
  =========================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.gsap || !window.ScrollTrigger) return;
  
    gsap.from(".stats-pill", {
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const counterObj = { val: 0 };
  
      gsap.to(counterObj, {
        val: target,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
        onUpdate: function () {
          counter.innerHTML = Math.ceil(counterObj.val);
        }
      });
    });
  
    const floatCounters = document.querySelectorAll('.counter-float');
    floatCounters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const counterObj = { val: 0 };
  
      gsap.to(counterObj, {
        val: target,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
        onUpdate: function () {
          counter.innerHTML = counterObj.val.toFixed(1);
        }
      });
    });
  });
  
  /* ===========================================================
     TRUSTED / PRESS / PARTNER MARQUEE
  =========================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.gsap || !window.ScrollTrigger) return;
  
    gsap.from(".trusted-container", {
      scrollTrigger: {
        trigger: ".trusted-section",
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  
    gsap.from(".trusted-header > *", {
      scrollTrigger: {
        trigger: ".trusted-container",
        start: "top 75%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    });
  
    gsap.from(".press-card", {
      scrollTrigger: {
        trigger: ".press-quotes-grid",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)"
    });
  
    gsap.from(".logo-marquee-wrapper", {
      scrollTrigger: {
        trigger: ".logo-marquee-wrapper",
        start: "top 90%",
      },
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out"
    });
  });
  
  /* ===========================================================
     TEAM + CTA JOURNEY
  =========================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.gsap || !window.ScrollTrigger) return;
  
    gsap.from(".team-header > *", {
      scrollTrigger: {
        trigger: ".team-header",
        start: "top 85%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    });
  
    gsap.from(".team-card", {
      scrollTrigger: {
        trigger: ".team-grid",
        start: "top 82%",
      },
      y: 50,
      opacity: 0,
      scale: 0.96,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)"
    });
  
    gsap.from(".cta-journey-container > *", {
      scrollTrigger: {
        trigger: ".cta-journey-container",
        start: "top 85%",
      },
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out"
    });
  });
  
  /* ===========================================================
     RELIABILITY FIX — recalculate ScrollTrigger positions once
     the page (fonts, background images, layout) has actually
     settled. Background-image divs don't fire load events the
     way <img> tags do, so trigger start/end points calculated
     too early could end up pointing at the wrong place on the
     page — the root cause of sections staying invisible after a
     reload. This corrects it without altering any of the motion
     defined above.
  =========================================================== */
  window.addEventListener('load', () => {
    if (window.ScrollTrigger) {
      ScrollTrigger.refresh();
      setTimeout(() => ScrollTrigger.refresh(), 500);
    }
  });