// ============================================
// FoodieFleet — Restaurant Detail Page Logic
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // ── Get Restaurant ID from URL ─────────────
  const urlParams = new URLSearchParams(window.location.search);
  const restaurantId = parseInt(urlParams.get('id'));

  if (!restaurantId || typeof RESTAURANTS === 'undefined') {
    window.location.href = 'restaurants.html';
    return;
  }

  const restaurant = RESTAURANTS.find(r => r.id === restaurantId);
  if (!restaurant) {
    window.location.href = 'restaurants.html';
    return;
  }

  // Update page title
  document.title = `${restaurant.name} — FoodieFleet`;

  let activeCategory = 'all';
  let menuSearchQuery = '';
  let pendingItem = null; // For conflict modal

  // ── Render Banner ──────────────────────────
  const bannerImg = document.getElementById('rest-banner-img');
  const bannerContent = document.getElementById('rest-banner-content');

  bannerImg.src = restaurant.banner;
  bannerImg.alt = restaurant.name;
  bannerImg.addEventListener('error', function () {
    this.parentElement.style.background = 'linear-gradient(135deg, var(--bg-card), var(--bg-elevated))';
    this.style.display = 'none';
  });

  bannerContent.innerHTML = `
    <h1 class="rest-name">${restaurant.name}</h1>
    <div class="rest-cuisine-tags">
      ${restaurant.cuisine.map(c => `<span class="rest-cuisine-tag">${c}</span>`).join('')}
    </div>
  `;

  // ── Render Info Bar ────────────────────────
  const infoGrid = document.getElementById('rest-info-grid');
  infoGrid.innerHTML = `
    <div class="rest-info-item">
      <span class="rest-info-icon">
        <span class="rating-badge"><span class="star-icon">★</span> ${restaurant.rating}</span>
      </span>
      <div>
        <div class="rest-info-label">Rating</div>
        <div class="rest-info-value">${restaurant.reviewCount.toLocaleString()}+ reviews</div>
      </div>
    </div>
    <div class="rest-info-item">
      <span class="rest-info-icon">🕐</span>
      <div>
        <div class="rest-info-label">Delivery Time</div>
        <div class="rest-info-value">${restaurant.deliveryTime}</div>
      </div>
    </div>
    <div class="rest-info-item">
      <span class="rest-info-icon">💰</span>
      <div>
        <div class="rest-info-label">Cost for Two</div>
        <div class="rest-info-value">${restaurant.priceRange}</div>
      </div>
    </div>
    <div class="rest-info-item">
      <span class="rest-info-icon">📍</span>
      <div>
        <div class="rest-info-label">Address</div>
        <div class="rest-info-value" style="font-size: 0.85rem;">${restaurant.address}</div>
      </div>
    </div>
    ${restaurant.offers.length > 0 ? `
    <div class="rest-offers" style="width:100%;">
      ${restaurant.offers.map(o => `
        <div class="rest-offer-tag">🏷️ ${o}</div>
      `).join('')}
    </div>
    ` : ''}
  `;

  // ── Get Menu Categories ────────────────────
  function getMenuCategories() {
    const categories = new Map();
    restaurant.menu.forEach(item => {
      if (!categories.has(item.category)) {
        categories.set(item.category, 0);
      }
      categories.set(item.category, categories.get(item.category) + 1);
    });
    return categories;
  }

  // ── Render Sidebar Categories ──────────────
  function renderCategories() {
    const categoriesContainer = document.getElementById('menu-categories');
    const categories = getMenuCategories();

    let html = `
      <button class="menu-category-btn active" data-category="all" id="cat-all">
        All Items
        <span class="menu-category-count">${restaurant.menu.length}</span>
      </button>
    `;

    categories.forEach((count, name) => {
      html += `
        <button class="menu-category-btn" data-category="${name}" id="cat-${name.replace(/\s+/g, '-').toLowerCase()}">
          ${name}
          <span class="menu-category-count">${count}</span>
        </button>
      `;
    });

    categoriesContainer.innerHTML = html;

    // Click handlers
    categoriesContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.menu-category-btn');
      if (!btn) return;

      activeCategory = btn.dataset.category;
      categoriesContainer.querySelectorAll('.menu-category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderMenuItems();
    });
  }

  // ── Render Menu Items ──────────────────────
  function renderMenuItems() {
    const container = document.getElementById('menu-items-container');
    let items = restaurant.menu;

    // Filter by category
    if (activeCategory !== 'all') {
      items = items.filter(item => item.category === activeCategory);
    }

    // Filter by search
    if (menuSearchQuery.trim()) {
      const q = menuSearchQuery.toLowerCase().trim();
      items = items.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 16px;">🍽️</div>
          <h3 style="margin-bottom: 8px;">No items found</h3>
          <p>Try a different search or category</p>
        </div>
      `;
      return;
    }

    // Group items by category
    if (activeCategory === 'all' && !menuSearchQuery.trim()) {
      const grouped = new Map();
      items.forEach(item => {
        if (!grouped.has(item.category)) {
          grouped.set(item.category, []);
        }
        grouped.get(item.category).push(item);
      });

      let html = '';
      grouped.forEach((categoryItems, categoryName) => {
        html += `
          <div class="menu-category-group" id="menu-group-${categoryName.replace(/\s+/g, '-').toLowerCase()}">
            <h3 class="menu-category-heading">
              ${categoryName}
              <span class="item-count">(${categoryItems.length} items)</span>
            </h3>
            ${categoryItems.map(item => renderMenuItem(item)).join('')}
          </div>
        `;
      });
      container.innerHTML = html;
    } else {
      container.innerHTML = items.map(item => renderMenuItem(item)).join('');
    }

    // Setup image error handlers
    container.querySelectorAll('.menu-item-img').forEach(img => {
      img.addEventListener('error', function () {
        this.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.className = 'menu-item-img-fallback';
        fallback.textContent = '🍽️';
        this.parentElement.appendChild(fallback);
      });
    });

    // Setup add-to-cart button handlers
    setupCartButtons();
  }

  // ── Render Single Menu Item ────────────────
  function renderMenuItem(item) {
    const qty = CartUtils.getItemQuantity(item.id);
    const isInCart = qty > 0;

    return `
      <div class="menu-item" data-item-id="${item.id}" id="menu-item-${item.id}">
        <div class="menu-item-info">
          <div class="menu-item-header">
            <div class="veg-indicator ${item.isVeg ? '' : 'non-veg'}"></div>
            <span class="menu-item-name">${item.name}</span>
            ${item.bestSeller ? '<span class="best-seller-tag">★ Bestseller</span>' : ''}
          </div>
          <div class="menu-item-price">₹${item.price}</div>
          <p class="menu-item-desc">${item.description}</p>
        </div>
        <div class="menu-item-img-wrapper">
          <img src="${item.image}" alt="${item.name}" class="menu-item-img" loading="lazy">
        </div>
        <div class="add-to-cart-wrapper">
          ${isInCart
            ? `<div class="qty-stepper" data-item-id="${item.id}">
                <button class="qty-btn qty-minus" data-item-id="${item.id}" aria-label="Decrease quantity">−</button>
                <span class="qty-value">${qty}</span>
                <button class="qty-btn qty-plus" data-item-id="${item.id}" aria-label="Increase quantity">+</button>
              </div>`
            : `<button class="add-to-cart-btn" data-item-id="${item.id}">ADD</button>`
          }
        </div>
      </div>
    `;
  }

  // ── Setup Cart Button Event Handlers ───────
  function setupCartButtons() {
    const container = document.getElementById('menu-items-container');

    // Use event delegation
    container.removeEventListener('click', handleCartClick);
    container.addEventListener('click', handleCartClick);
  }

  function handleCartClick(e) {
    const addBtn = e.target.closest('.add-to-cart-btn');
    const plusBtn = e.target.closest('.qty-plus');
    const minusBtn = e.target.closest('.qty-minus');

    if (addBtn) {
      const itemId = addBtn.dataset.itemId;
      addItemToCart(itemId);
    } else if (plusBtn) {
      const itemId = plusBtn.dataset.itemId;
      CartUtils.updateQuantity(itemId, 1);
      updateItemUI(itemId);
      updateStickyBar();
    } else if (minusBtn) {
      const itemId = minusBtn.dataset.itemId;
      CartUtils.updateQuantity(itemId, -1);
      updateItemUI(itemId);
      updateStickyBar();
    }
  }

  // ── Add Item to Cart ───────────────────────
  function addItemToCart(itemId) {
    const item = restaurant.menu.find(i => i.id === itemId);
    if (!item) return;

    const result = CartUtils.addToCart(restaurant, item);

    if (result.conflict) {
      // Show conflict modal
      pendingItem = item;
      const modal = document.getElementById('conflict-modal');
      const modalText = document.getElementById('conflict-modal-text');
      modalText.textContent = `Your cart contains items from "${result.currentRestaurantName}". Would you like to discard them and add items from "${restaurant.name}"?`;
      modal.style.display = 'flex';
      return;
    }

    if (result.success) {
      updateItemUI(itemId);
      updateStickyBar();
      showToast(`${item.name} added to cart!`);
    }
  }

  // ── Update Single Item UI ──────────────────
  function updateItemUI(itemId) {
    const qty = CartUtils.getItemQuantity(itemId);
    const menuItem = document.querySelector(`.menu-item[data-item-id="${itemId}"]`);
    if (!menuItem) return;

    const wrapper = menuItem.querySelector('.add-to-cart-wrapper');
    if (qty > 0) {
      wrapper.innerHTML = `
        <div class="qty-stepper" data-item-id="${itemId}">
          <button class="qty-btn qty-minus" data-item-id="${itemId}" aria-label="Decrease quantity">−</button>
          <span class="qty-value">${qty}</span>
          <button class="qty-btn qty-plus" data-item-id="${itemId}" aria-label="Increase quantity">+</button>
        </div>
      `;
    } else {
      wrapper.innerHTML = `<button class="add-to-cart-btn" data-item-id="${itemId}">ADD</button>`;
    }

    CartUtils.updateBadge();
  }

  // ── Update Sticky Cart Bar ─────────────────
  function updateStickyBar() {
    const bar = document.getElementById('sticky-cart-bar');
    const count = CartUtils.getCartCount();
    const total = CartUtils.getCartTotal();

    if (count > 0) {
      bar.style.display = '';
      document.getElementById('sticky-cart-count').textContent = `${count} item${count > 1 ? 's' : ''}`;
      document.getElementById('sticky-cart-total').textContent = `₹${total.subtotal}`;
    } else {
      bar.style.display = 'none';
    }
  }

  // ── Conflict Modal Handlers ────────────────
  document.getElementById('conflict-cancel-btn').addEventListener('click', () => {
    document.getElementById('conflict-modal').style.display = 'none';
    pendingItem = null;
  });

  document.getElementById('conflict-confirm-btn').addEventListener('click', () => {
    if (pendingItem) {
      CartUtils.forceAddToCart(restaurant, pendingItem);
      updateItemUI(pendingItem.id);
      updateStickyBar();
      showToast(`Cart updated! ${pendingItem.name} added.`);

      // Re-render all items to reset any stale qty displays
      renderMenuItems();
      pendingItem = null;
    }
    document.getElementById('conflict-modal').style.display = 'none';
  });

  // Close modal on overlay click
  document.getElementById('conflict-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.style.display = 'none';
      pendingItem = null;
    }
  });

  // ── Menu Search ────────────────────────────
  const menuSearch = document.getElementById('menu-search');
  let searchTimer;
  menuSearch.addEventListener('input', (e) => {
    menuSearchQuery = e.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      renderMenuItems();
    }, 200);
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
  renderCategories();
  renderMenuItems();
  updateStickyBar();
  CartUtils.updateBadge();
  window.scrollTo(0, 0);
});
