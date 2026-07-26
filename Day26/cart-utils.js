// ============================================
// FoodieFleet — Cart Utilities (localStorage)
// ============================================

const CART_STORAGE_KEY = 'foodiefleet_cart';
const CART_RESTAURANT_KEY = 'foodiefleet_cart_restaurant';

const CartUtils = {
  // ── Get current cart ──
  getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  },

  // ── Save cart ──
  saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    this.updateBadge();
  },

  // ── Get stored restaurant info ──
  getCartRestaurant() {
    try {
      return JSON.parse(localStorage.getItem(CART_RESTAURANT_KEY));
    } catch {
      return null;
    }
  },

  // ── Save restaurant info ──
  saveCartRestaurant(restaurant) {
    localStorage.setItem(CART_RESTAURANT_KEY, JSON.stringify({
      id: restaurant.id,
      name: restaurant.name,
      image: restaurant.image,
      deliveryFee: restaurant.deliveryFee,
      deliveryTime: restaurant.deliveryTime,
    }));
  },

  // ── Add item to cart ──
  // Returns { success: boolean, conflict: boolean }
  addToCart(restaurant, item) {
    const currentRestaurant = this.getCartRestaurant();
    const cart = this.getCart();

    // Check if adding from a different restaurant
    if (currentRestaurant && currentRestaurant.id !== restaurant.id && cart.length > 0) {
      return { success: false, conflict: true, currentRestaurantName: currentRestaurant.name };
    }

    // Save restaurant info
    this.saveCartRestaurant(restaurant);

    // Check if item already in cart
    const existingIndex = cart.findIndex(ci => ci.id === item.id);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        isVeg: item.isVeg,
        quantity: 1,
      });
    }

    this.saveCart(cart);
    return { success: true, conflict: false };
  },

  // ── Force add (clear old cart and add new item) ──
  forceAddToCart(restaurant, item) {
    this.clearCart();
    this.saveCartRestaurant(restaurant);
    const cart = [{
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      isVeg: item.isVeg,
      quantity: 1,
    }];
    this.saveCart(cart);
    return { success: true, conflict: false };
  },

  // ── Remove item from cart ──
  removeFromCart(itemId) {
    let cart = this.getCart();
    cart = cart.filter(ci => ci.id !== itemId);
    if (cart.length === 0) {
      localStorage.removeItem(CART_RESTAURANT_KEY);
    }
    this.saveCart(cart);
  },

  // ── Update quantity ──
  updateQuantity(itemId, delta) {
    const cart = this.getCart();
    const item = cart.find(ci => ci.id === itemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(itemId);
      return;
    }
    this.saveCart(cart);
  },

  // ── Get item quantity in cart ──
  getItemQuantity(itemId) {
    const cart = this.getCart();
    const item = cart.find(ci => ci.id === itemId);
    return item ? item.quantity : 0;
  },

  // ── Total item count ──
  getCartCount() {
    return this.getCart().reduce((sum, ci) => sum + ci.quantity, 0);
  },

  // ── Subtotal ──
  getSubtotal() {
    return this.getCart().reduce((sum, ci) => sum + ci.price * ci.quantity, 0);
  },

  // ── Cart total (with delivery & taxes) ──
  getCartTotal() {
    const subtotal = this.getSubtotal();
    const restaurant = this.getCartRestaurant();
    const deliveryFee = restaurant ? restaurant.deliveryFee : 0;
    const gst = Math.round(subtotal * 0.05); // 5% GST
    const platformFee = subtotal > 0 ? 5 : 0;
    return {
      subtotal,
      deliveryFee: subtotal >= 499 ? 0 : deliveryFee,
      gst,
      platformFee,
      total: subtotal + (subtotal >= 499 ? 0 : deliveryFee) + gst + platformFee,
      freeDelivery: subtotal >= 499,
    };
  },

  // ── Apply coupon code ──
  applyCoupon(code) {
    const coupons = {
      'WELCOME50': { discount: 50, minOrder: 199, type: 'flat', description: '₹50 OFF' },
      'FEAST30': { discount: 30, minOrder: 0, type: 'percent', maxDiscount: 150, description: '30% OFF up to ₹150' },
      'FREEDEL': { discount: 0, minOrder: 299, type: 'freeDelivery', description: 'Free Delivery' },
      'YUMMY20': { discount: 20, minOrder: 399, type: 'percent', maxDiscount: 100, description: '20% OFF up to ₹100' },
    };

    const coupon = coupons[code.toUpperCase()];
    if (!coupon) return { valid: false, message: 'Invalid coupon code' };

    const subtotal = this.getSubtotal();
    if (subtotal < coupon.minOrder) {
      return { valid: false, message: `Minimum order of ₹${coupon.minOrder} required` };
    }

    let discountAmount = 0;
    if (coupon.type === 'flat') {
      discountAmount = coupon.discount;
    } else if (coupon.type === 'percent') {
      discountAmount = Math.min(Math.round(subtotal * coupon.discount / 100), coupon.maxDiscount || Infinity);
    }

    return { valid: true, discount: discountAmount, description: coupon.description, type: coupon.type };
  },

  // ── Clear cart ──
  clearCart() {
    localStorage.removeItem(CART_STORAGE_KEY);
    localStorage.removeItem(CART_RESTAURANT_KEY);
    this.updateBadge();
  },

  // ── Update navbar cart badge ──
  updateBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
      const count = this.getCartCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
      // Bounce animation
      badge.classList.remove('bounce');
      void badge.offsetWidth; // reflow
      badge.classList.add('bounce');
    }
  },
};

// Initialize badge on page load
document.addEventListener('DOMContentLoaded', () => {
  CartUtils.updateBadge();
});
