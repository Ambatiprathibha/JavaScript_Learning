// ============================================
// FoodieFleet — Landing Page Interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar Scroll Effect ────────────────────
  const navbar = document.getElementById('navbar');
  const heroSection = document.getElementById('hero');

  const handleNavScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ── Hamburger Menu ─────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navOverlay = document.getElementById('nav-overlay');

  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', toggleMenu);

  // Close on nav link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) toggleMenu();
    });
  });

  // ── Scroll Animations (IntersectionObserver) ─
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  animatedElements.forEach(el => observer.observe(el));

  // ── Video Fallback ─────────────────────────
  const heroVideo = document.getElementById('hero-video');
  if (heroVideo) {
    heroVideo.addEventListener('error', () => {
      heroVideo.style.display = 'none';
    });

    // Also try to detect if video can play
    heroVideo.addEventListener('canplay', () => {
      heroVideo.style.opacity = '1';
    });

    // Timeout fallback — if video doesn't load in 5s, hide it
    setTimeout(() => {
      if (heroVideo.readyState < 2) {
        heroVideo.style.display = 'none';
      }
    }, 5000);
  }

  // ── Render "How It Works" Steps ────────────
  const stepsGrid = document.getElementById('steps-grid');
  if (stepsGrid && typeof HOW_IT_WORKS !== 'undefined') {
    stepsGrid.innerHTML = HOW_IT_WORKS.map((step, i) => `
      <div class="step-card animate-on-scroll delay-${i + 1}" id="step-${i + 1}">
        <span class="step-number">${i + 1}</span>
        <span class="step-icon">${step.icon}</span>
        <h3 class="step-title">${step.title}</h3>
        <p class="step-description">${step.description}</p>
      </div>
    `).join('');

    // Re-observe new animated elements
    stepsGrid.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  }

  // ── Render Cuisine Cards ───────────────────
  const cuisinesScroll = document.getElementById('cuisines-scroll');
  if (cuisinesScroll && typeof CUISINES !== 'undefined') {
    cuisinesScroll.innerHTML = CUISINES.map(cuisine => `
      <a href="restaurants.html?cuisine=${cuisine.id}" class="cuisine-card" id="cuisine-${cuisine.id}">
        <div class="cuisine-icon-wrapper" style="background: ${cuisine.gradient};">
          ${cuisine.emoji}
        </div>
        <span class="cuisine-name">${cuisine.name}</span>
      </a>
    `).join('');
  }

  // ── Render Featured Restaurants ────────────
  const featuredGrid = document.getElementById('featured-grid');
  if (featuredGrid && typeof RESTAURANTS !== 'undefined') {
    // Top 4 by rating
    const featured = [...RESTAURANTS]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);

    featuredGrid.innerHTML = featured.map((r, i) => createRestaurantCard(r, i)).join('');

    // Handle image load errors
    featuredGrid.querySelectorAll('.restaurant-card-img img').forEach(img => {
      img.addEventListener('error', function () {
        this.parentElement.classList.add('img-fallback');
        this.style.display = 'none';
        this.parentElement.innerHTML += `<span style="font-size:3rem">🍽️</span>
          <div class="restaurant-card-img-overlay"></div>
          ${this.parentElement.querySelector('.restaurant-offer-tag')?.outerHTML || ''}`;
      });
    });

    // Animate cards
    featuredGrid.querySelectorAll('.restaurant-card').forEach(el => observer.observe(el));
  }

  // ── Render Testimonials ────────────────────
  const testimonialsGrid = document.getElementById('testimonials-grid');
  if (testimonialsGrid && typeof TESTIMONIALS !== 'undefined') {
    testimonialsGrid.innerHTML = TESTIMONIALS.slice(0, 3).map((t, i) => `
      <div class="testimonial-card animate-on-scroll delay-${i + 1}" id="testimonial-${t.id}">
        <div class="testimonial-header">
          <div class="testimonial-avatar">${t.avatar}</div>
          <div class="testimonial-info">
            <div class="testimonial-name">${t.name}</div>
            <div class="testimonial-date">${t.date}</div>
          </div>
        </div>
        <div class="testimonial-stars">
          ${Array.from({ length: 5 }, (_, j) =>
            `<span class="star${j < t.rating ? '' : ' empty'}">${j < t.rating ? '★' : '☆'}</span>`
          ).join('')}
        </div>
        <p class="testimonial-text">${t.text}</p>
      </div>
    `).join('');

    testimonialsGrid.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  }

  // ── Smooth Scroll for Hero Indicator ───────
  const scrollIndicator = document.getElementById('hero-scroll');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
    });
    scrollIndicator.style.cursor = 'pointer';
  }

  // ── Cart Badge ─────────────────────────────
  CartUtils.updateBadge();

});

// ═══ Shared Helper: Create Restaurant Card ═══
function createRestaurantCard(r, i = 0) {
  const offer = r.offers && r.offers[0] ? r.offers[0] : '';
  return `
    <a href="restaurant.html?id=${r.id}" class="restaurant-card animate-on-scroll delay-${(i % 4) + 1}" id="restaurant-card-${r.id}">
      <div class="restaurant-card-img">
        <img src="${r.image}" alt="${r.name}" loading="lazy">
        <div class="restaurant-card-img-overlay"></div>
        ${offer ? `<div class="restaurant-offer-tag">${offer}</div>` : ''}
      </div>
      <div class="restaurant-card-body">
        <div class="restaurant-card-header">
          <h3 class="restaurant-card-name">${r.name}</h3>
          <span class="rating-badge">
            <span class="star-icon">★</span> ${r.rating}
          </span>
        </div>
        <p class="restaurant-card-cuisine">${r.cuisine.join(', ')}</p>
        <div class="restaurant-card-meta">
          <span>🕐 ${r.deliveryTime}</span>
          <span>${r.priceRange} for two</span>
        </div>
      </div>
    </a>
  `;
}

// ═══ Toast Utility ═══
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✅' : '⚠️'}</span> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
