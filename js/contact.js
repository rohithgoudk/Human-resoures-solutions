/* ===========================================================
   Stackly — Contact page
   Header scroll state, hamburger, mobile nav open/close, the
   FAQ accordion, and .reveal scroll-in are all handled by the
   SHARED js/index.js (identical to every other page) — none of
   that logic lives here anymore.

   This file only covers what's unique to Contact:
   1) Floating labels for the form
   2) Letters-only First/Last name fields
   3) Contact form validation + a simulated "sent" success state
      (this form isn't a [data-demo-form], so index.js's generic
      demo-form handler doesn't touch it — this is the real one)
=========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1) Floating labels ---------- */
  document.querySelectorAll('.input-group input, .input-group select, .input-group textarea')
    .forEach(field => {
      const group = field.closest('.input-group');
      const sync = () => group.classList.toggle('filled', field.value.trim().length > 0);
      field.addEventListener('input', sync);
      field.addEventListener('change', sync);
      field.addEventListener('blur', sync);
      sync();
    });

  /* ---------- 2) Letters-only name fields ----------
     First Name / Last Name should only ever contain letters
     (plus spaces, hyphens, and apostrophes for names like
     "Anne-Marie" or "O'Brien") — block anything else as the
     person types, rather than only flagging it after submit. */
  ['firstName', 'lastName'].forEach(id => {
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
    field.addEventListener('paste', () => {
      setTimeout(() => {
        const cleaned = field.value.replace(/[^A-Za-z\s'-]/g, '');
        if (cleaned !== field.value) field.value = cleaned;
      }, 0);
    });
  });

  /* ---------- 3) Contact form validation + submit ---------- */
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
});