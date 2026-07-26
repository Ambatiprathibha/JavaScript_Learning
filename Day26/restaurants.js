// ============================================
// FoodieFleet — Restaurants Listing Page Logic
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const sortSelect = document.getElementById('sort-select');
  const cuisineChips = document.getElementById('cuisine-chips');
  const restaurantsGrid = document.getElementById('restaurants-grid');
  const emptyState = document.getElementById('empty-state');
  const resultsCount = document.getElementById('results-count');
  const clearFiltersBtn = document.getElementById('clear-filters-btn');

  let activeCuisine = 'all';
  let searchQuery = '';
  let sortBy = 'rating';

  // ── Read URL params for pre-filtering ──────
  const urlParams = new URLSearchParams(window.location.search);
  const cuisineParam = urlParams.get('cuisine');
  if (cuisineParam) {
    activeCuisine = cuisineParam;
  }

  // ── Render Cuisine Chips ───────────────────
  function renderCuisineChips() {
    const allChip = cuisineChips.querySelector('[data-cuisine="all"]');
    
    CUISINES.forEach(c => {
      const chip = document.createElement('button');
      chip.className = `cuisine-chip${c.id === activeCuisine ? ' active' : ''}`;
      chip.dataset.cuisine = c.id;
      chip.id = `chip-${c.id}`;
      chip.textContent = `${c.emoji} ${c.name}`;
      cuisineChips.appendChild(chip);
    });

    // Update "All" chip state
    if (activeCuisine !== 'all') {
      allChip.classList.remove('active');
    }

    // Chip click handlers
    cuisineChips.addEventListener('click', (e) => {
      const chip = e.target.closest('.cuisine-chip');
      if (!chip) return;

      activeCuisine = chip.dataset.cuisine;

      // Update active states
      cuisineChips.querySelectorAll('.cuisine-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      renderRestaurants();
    });
  }

  // ── Filter & Sort Restaurants ──────────────
  function getFilteredRestaurants() {
    let filtered = [...RESTAURANTS];

    // Filter by cuisine
    if (activeCuisine !== 'all') {
      filtered = filtered.filter(r =>
        r.cuisineIds.includes(activeCuisine)
      );
    }

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.cuisine.some(c => c.toLowerCase().includes(q)) ||
        r.description.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'delivery':
        filtered.sort((a, b) => {
          const aMin = parseInt(a.deliveryTime);
          const bMin = parseInt(b.deliveryTime);
          return aMin - bMin;
        });
        break;
      case 'priceLow':
        filtered.sort((a, b) => a.priceRange.length - b.priceRange.length);
        break;
      case 'priceHigh':
        filtered.sort((a, b) => b.priceRange.length - a.priceRange.length);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }

  // ── Render Restaurants Grid ────────────────
  function renderRestaurants() {
    const filtered = getFilteredRestaurants();

    // Update results count
    resultsCount.textContent = `${filtered.length} restaurant${filtered.length !== 1 ? 's' : ''} found`;

    // Show/hide empty state
    if (filtered.length === 0) {
      restaurantsGrid.style.display = 'none';
      emptyState.style.display = 'block';
      return;
    }

    restaurantsGrid.style.display = '';
    emptyState.style.display = 'none';

    restaurantsGrid.innerHTML = filtered.map((r, i) => createRestaurantCard(r, i)).join('');

    // Handle image errors
    restaurantsGrid.querySelectorAll('.restaurant-card-img img').forEach(img => {
      img.addEventListener('error', function () {
        this.style.display = 'none';
        this.parentElement.classList.add('img-fallback');
        const overlay = this.parentElement.querySelector('.restaurant-card-img-overlay');
        if (overlay) overlay.insertAdjacentHTML('beforebegin', '<span style="font-size:3rem;position:relative;z-index:1">🍽️</span>');
      });
    });

    // Animate cards
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    restaurantsGrid.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  }

  // ── Search with Debounce ───────────────────
  let debounceTimer;
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    searchClear.style.display = searchQuery ? 'flex' : 'none';

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      renderRestaurants();
    }, 250);
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.style.display = 'none';
    renderRestaurants();
    searchInput.focus();
  });

  // ── Sort Change ────────────────────────────
  sortSelect.addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderRestaurants();
  });

  // ── Clear Filters ──────────────────────────
  clearFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.style.display = 'none';
    activeCuisine = 'all';
    sortBy = 'rating';
    sortSelect.value = 'rating';

    cuisineChips.querySelectorAll('.cuisine-chip').forEach(c => c.classList.remove('active'));
    cuisineChips.querySelector('[data-cuisine="all"]').classList.add('active');

    renderRestaurants();
  });

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

  // ── Initialize ─────────────────────────────
  renderCuisineChips();
  renderRestaurants();
  CartUtils.updateBadge();

  // Scroll to top
  window.scrollTo(0, 0);
});
