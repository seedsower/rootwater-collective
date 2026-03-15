/**
 * ROOTWATER COLLECTIVE — MAIN JAVASCRIPT
 * Handles scroll reveals, mobile navigation, custom cursor, and interactions
 */

// ====================================
// INITIALIZATION
// ====================================

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initMobileNav();
  initCustomCursor();
  initSmoothScroll();
});

// ====================================
// SCROLL REVEAL
// ====================================

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optionally unobserve after reveal
          // revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

// ====================================
// MOBILE NAVIGATION
// ====================================

function initMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-overlay a');

  if (!menuToggle || !mobileOverlay) return;

  // Toggle menu
  menuToggle.addEventListener('click', () => {
    const isActive = mobileOverlay.classList.toggle('active');
    menuToggle.innerHTML = isActive ? '✕' : '☰';
    document.body.style.overflow = isActive ? 'hidden' : '';
  });

  // Close menu when link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileOverlay.classList.remove('active');
      menuToggle.innerHTML = '☰';
      document.body.style.overflow = '';
    });
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileOverlay.classList.contains('active')) {
      mobileOverlay.classList.remove('active');
      menuToggle.innerHTML = '☰';
      document.body.style.overflow = '';
    }
  });
}

// ====================================
// CUSTOM CURSOR (Desktop only)
// ====================================

function initCustomCursor() {
  // Only enable on desktop devices with mouse
  if (window.innerWidth <= 768 || 'ontouchstart' in window) return;

  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.classList.add('active');
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
  });

  // Smooth cursor movement
  function animateCursor() {
    const speed = 0.15;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    cursor.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Expand cursor on hover over interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .album-card');

  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// ====================================
// SMOOTH SCROLL
// ====================================

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

// ====================================
// ACCORDION (for track listings)
// ====================================

function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const accordion = header.parentElement;
      const content = accordion.querySelector('.accordion-content');
      const isActive = accordion.classList.contains('active');

      // Close all accordions
      document.querySelectorAll('.accordion').forEach((acc) => {
        acc.classList.remove('active');
        acc.querySelector('.accordion-content').style.maxHeight = null;
      });

      // Open clicked accordion if it wasn't active
      if (!isActive) {
        accordion.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// Call if accordions exist on page
if (document.querySelector('.accordion')) {
  initAccordions();
}

// ====================================
// NEWSLETTER FORM
// ====================================

function initNewsletterForm() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('button[type="submit"]');
    const email = emailInput.value;

    // Basic validation
    if (!email || !email.includes('@')) {
      showMessage(form, 'Please enter a valid email address.', 'error');
      return;
    }

    // Disable button during submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Joining...';

    // TODO: Replace with actual API endpoint
    // For now, simulate submission
    setTimeout(() => {
      showMessage(form, 'You\'ve joined the frequency. Check your email.', 'success');
      emailInput.value = '';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Join the Frequency';
    }, 1000);

    // Example API call:
    /*
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        showMessage(form, 'You\'ve joined the frequency. Check your email.', 'success');
        emailInput.value = '';
      } else {
        showMessage(form, 'Something went wrong. Try again.', 'error');
      }
    } catch (error) {
      showMessage(form, 'Connection error. Try again.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Join the Frequency';
    }
    */
  });
}

function showMessage(form, message, type) {
  const existingMessage = form.querySelector('.form-message');
  if (existingMessage) existingMessage.remove();

  const messageEl = document.createElement('p');
  messageEl.className = `form-message form-message--${type}`;
  messageEl.textContent = message;
  messageEl.style.cssText = `
    margin-top: 1rem;
    font-size: 0.9rem;
    color: ${type === 'success' ? 'var(--gold)' : 'var(--red)'};
  `;

  form.appendChild(messageEl);

  setTimeout(() => messageEl.remove(), 5000);
}

if (document.querySelector('.newsletter-form')) {
  initNewsletterForm();
}

// ====================================
// CONTACT FORM
// ====================================

function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const submitBtn = form.querySelector('button[type="submit"]');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // TODO: Replace with actual API endpoint
    setTimeout(() => {
      showMessage(form, 'Message received. We\'ll respond soon.', 'success');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }, 1000);

    // Example API call:
    /*
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        showMessage(form, 'Message received. We\'ll respond soon.', 'success');
        form.reset();
      } else {
        showMessage(form, 'Failed to send. Try again.', 'error');
      }
    } catch (error) {
      showMessage(form, 'Connection error. Try again.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
    */
  });
}

if (document.querySelector('.contact-form')) {
  initContactForm();
}

// ====================================
// LYRICS SEARCH
// ====================================

function initLyricsSearch() {
  const searchInput = document.querySelector('.lyrics-search-input');
  const searchResults = document.querySelector('.lyrics-search-results');

  if (!searchInput) return;

  let debounceTimer;

  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);

    const query = e.target.value.trim();

    if (query.length < 2) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
      return;
    }

    debounceTimer = setTimeout(() => {
      performLyricsSearch(query, searchResults);
    }, 300);
  });

  // Close results when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.lyrics-search')) {
      searchResults.style.display = 'none';
    }
  });
}

function performLyricsSearch(query, resultsContainer) {
  // TODO: Replace with actual lyrics data
  // This would typically search through a JSON file or API
  const mockResults = [
    {
      track: 'Rivers Still Rising',
      album: 'Rivers & Roots',
      line: 'The river runs clean when the frequency is pure',
      url: '/pages/lyrics.html#rivers-still-rising',
    },
    {
      track: 'Theory of Everything',
      album: 'Rivers & Roots',
      line: 'Every part contains the whole',
      url: '/pages/lyrics.html#theory-of-everything',
    },
  ];

  const filteredResults = mockResults.filter(
    (result) =>
      result.track.toLowerCase().includes(query.toLowerCase()) ||
      result.line.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredResults.length === 0) {
    resultsContainer.innerHTML = '<p style="padding: 1rem; color: var(--cream-dim);">No results found</p>';
  } else {
    resultsContainer.innerHTML = filteredResults
      .map(
        (result) => `
        <a href="${result.url}" class="search-result-item">
          <strong>${result.track}</strong>
          <span class="mono-text" style="color: var(--gold-dim); font-size: 0.75rem;">${result.album}</span>
          <p style="color: var(--cream-dim); margin-top: 0.5rem;">"${result.line}..."</p>
        </a>
      `
      )
      .join('');
  }

  resultsContainer.style.display = 'block';
}

if (document.querySelector('.lyrics-search-input')) {
  initLyricsSearch();
}
