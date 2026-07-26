// ============================================
// FoodieFleet — Application Data Store
// ============================================

// Helper to build Unsplash image URLs
const IMG = (id, w = 400, h = 300) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

// ── Cuisine Categories ──────────────────────
const CUISINES = [
  { id: 'north-indian', name: 'North Indian', emoji: '🍛', gradient: 'linear-gradient(135deg, #FF6B35, #F7C59F)' },
  { id: 'south-indian', name: 'South Indian', emoji: '🥘', gradient: 'linear-gradient(135deg, #2ECC71, #A8E6CF)' },
  { id: 'chinese', name: 'Chinese', emoji: '🥡', gradient: 'linear-gradient(135deg, #E74C3C, #F9BF3B)' },
  { id: 'italian', name: 'Italian', emoji: '🍕', gradient: 'linear-gradient(135deg, #E55D87, #5FC3E4)' },
  { id: 'mexican', name: 'Mexican', emoji: '🌮', gradient: 'linear-gradient(135deg, #F2994A, #F2C94C)' },
  { id: 'japanese', name: 'Japanese', emoji: '🍣', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
  { id: 'thai', name: 'Thai', emoji: '🍜', gradient: 'linear-gradient(135deg, #11998e, #38ef7d)' },
  { id: 'street-food', name: 'Street Food', emoji: '🧆', gradient: 'linear-gradient(135deg, #fc4a1a, #f7b733)' },
  { id: 'desserts', name: 'Desserts', emoji: '🍰', gradient: 'linear-gradient(135deg, #ee9ca7, #ffdde1)' },
  { id: 'healthy', name: 'Healthy', emoji: '🥗', gradient: 'linear-gradient(135deg, #56ab2f, #a8e063)' },
  { id: 'american', name: 'American', emoji: '🍔', gradient: 'linear-gradient(135deg, #f46b45, #eea849)' },
  { id: 'hyderabadi', name: 'Hyderabadi', emoji: '🍚', gradient: 'linear-gradient(135deg, #c94b4b, #4b134f)' },
];

// ── Restaurants ─────────────────────────────
const RESTAURANTS = [
  // ─── 1. Spice Garden ───
  {
    id: 1,
    name: 'Spice Garden',
    cuisine: ['North Indian', 'Mughlai'],
    cuisineIds: ['north-indian'],
    rating: 4.5,
    reviewCount: 1280,
    deliveryTime: '30-35 min',
    deliveryFee: 30,
    priceRange: '₹₹',
    image: IMG('1585937421612-70a008356fbe', 600, 400),
    banner: IMG('1585937421612-70a008356fbe', 1200, 400),
    description: 'Authentic North Indian flavors with rich, aromatic spices. From creamy butter chicken to smoky tandoori — a royal feast awaits.',
    address: '123 MG Road, Koramangala, Bangalore',
    isOpen: true,
    offers: ['60% OFF up to ₹120', 'Free delivery on orders above ₹299'],
    menu: [
      { id: 'sg_1', name: 'Butter Chicken', description: 'Tender chicken in a velvety tomato-cream sauce with aromatic spices', price: 320, category: 'Main Course', isVeg: false, bestSeller: true, image: IMG('1603894584373-5ac82b2ae328') },
      { id: 'sg_2', name: 'Paneer Tikka', description: 'Marinated cottage cheese cubes grilled to smoky perfection', price: 260, category: 'Starters', isVeg: true, bestSeller: true, image: IMG('1567188040759-fb8a883dc6d8') },
      { id: 'sg_3', name: 'Dal Makhani', description: 'Slow-cooked black lentils in a rich, buttery gravy', price: 220, category: 'Main Course', isVeg: true, bestSeller: false, image: IMG('1546833999-b9f581d1db4b') },
      { id: 'sg_4', name: 'Garlic Naan', description: 'Soft, fluffy bread brushed with garlic butter, baked in tandoor', price: 60, category: 'Breads', isVeg: true, bestSeller: false, image: IMG('1565557623262-b51c2513a641') },
      { id: 'sg_5', name: 'Chicken Biryani', description: 'Fragrant basmati rice layered with spiced chicken and saffron', price: 340, category: 'Rice', isVeg: false, bestSeller: true, image: IMG('1563379091339-03b21ab4a4f8') },
      { id: 'sg_6', name: 'Tandoori Chicken', description: 'Whole chicken marinated in yogurt & spices, roasted in clay oven', price: 380, category: 'Starters', isVeg: false, bestSeller: false, image: IMG('1599487488170-d11ec9c172f0') },
      { id: 'sg_7', name: 'Gulab Jamun', description: 'Soft milk-solid dumplings soaked in rose-flavored sugar syrup', price: 120, category: 'Desserts', isVeg: true, bestSeller: false, image: IMG('1666190093844-6e079d1ed9e2') },
      { id: 'sg_8', name: 'Mango Lassi', description: 'Refreshing yogurt drink blended with sweet Alphonso mangoes', price: 100, category: 'Beverages', isVeg: true, bestSeller: false, image: IMG('1527661591475-527312dd65f0') },
      { id: 'sg_9', name: 'Palak Paneer', description: 'Cottage cheese cubes in a creamy spinach gravy with mild spices', price: 240, category: 'Main Course', isVeg: true, bestSeller: false, image: IMG('1601050690597-df0568f70950') },
      { id: 'sg_10', name: 'Seekh Kebab', description: 'Minced lamb kebabs with herbs, grilled on skewers over charcoal', price: 290, category: 'Starters', isVeg: false, bestSeller: false, image: IMG('1599487488170-d11ec9c172f0', 400, 300) },
    ]
  },

  // ─── 2. Biryani Blues ───
  {
    id: 2,
    name: 'Biryani Blues',
    cuisine: ['Hyderabadi', 'Mughlai'],
    cuisineIds: ['hyderabadi', 'north-indian'],
    rating: 4.7,
    reviewCount: 2450,
    deliveryTime: '25-30 min',
    deliveryFee: 25,
    priceRange: '₹₹',
    image: IMG('1563379091339-03b21ab4a4f8', 600, 400),
    banner: IMG('1563379091339-03b21ab4a4f8', 1200, 400),
    description: 'The ultimate biryani destination — slow-cooked with authentic Hyderabadi dum technique.',
    address: '45 Jubilee Hills, Hyderabad',
    isOpen: true,
    offers: ['50% OFF up to ₹100', 'Free delivery on first order'],
    menu: [
      { id: 'bb_1', name: 'Hyderabadi Chicken Dum Biryani', description: 'Aromatic basmati rice layered with tender chicken, slow-cooked on dum', price: 299, category: 'Biryani', isVeg: false, bestSeller: true, image: IMG('1563379091339-03b21ab4a4f8') },
      { id: 'bb_2', name: 'Mutton Biryani', description: 'Rich, flavorful biryani with succulent mutton pieces and whole spices', price: 399, category: 'Biryani', isVeg: false, bestSeller: true, image: IMG('1563379091339-03b21ab4a4f8', 450, 300) },
      { id: 'bb_3', name: 'Veg Dum Biryani', description: 'Mixed vegetables and paneer cooked with fragrant rice in dum style', price: 229, category: 'Biryani', isVeg: true, bestSeller: false, image: IMG('1596797038530-2c107229654b') },
      { id: 'bb_4', name: 'Chicken 65', description: 'Spicy deep-fried chicken bites with curry leaves and red chilies', price: 250, category: 'Starters', isVeg: false, bestSeller: true, image: IMG('1610057099443-fde6c7d78804') },
      { id: 'bb_5', name: 'Mirchi Ka Salan', description: 'Hyderabadi green chili curry in peanut and sesame gravy', price: 180, category: 'Sides', isVeg: true, bestSeller: false, image: IMG('1455619452474-d2be8b1e70cd') },
      { id: 'bb_6', name: 'Double Ka Meetha', description: 'Bread pudding soaked in saffron milk, topped with dry fruits', price: 130, category: 'Desserts', isVeg: true, bestSeller: false, image: IMG('1578985545062-69928b1d9587') },
      { id: 'bb_7', name: 'Haleem', description: 'Slow-cooked meat porridge with wheat, lentils, and aromatic spices', price: 280, category: 'Main Course', isVeg: false, bestSeller: false, image: IMG('1547592180-85f173990554') },
      { id: 'bb_8', name: 'Raita', description: 'Cool, refreshing yogurt with cucumber, mint, and mild spices', price: 70, category: 'Sides', isVeg: true, bestSeller: false, image: IMG('1571091718767-18b5b1457add') },
    ]
  },

  // ─── 3. Dragon Wok ───
  {
    id: 3,
    name: 'Dragon Wok',
    cuisine: ['Chinese', 'Asian'],
    cuisineIds: ['chinese'],
    rating: 4.3,
    reviewCount: 890,
    deliveryTime: '25-30 min',
    deliveryFee: 35,
    priceRange: '₹₹',
    image: IMG('1525755662778-989d0524087e', 600, 400),
    banner: IMG('1525755662778-989d0524087e', 1200, 400),
    description: 'Wok-tossed excellence — fiery flavors of Indo-Chinese cuisine made with fresh ingredients.',
    address: '78 Brigade Road, Bangalore',
    isOpen: true,
    offers: ['40% OFF up to ₹80'],
    menu: [
      { id: 'dw_1', name: 'Chicken Manchurian', description: 'Crispy chicken balls in tangy soy-based Manchurian sauce', price: 270, category: 'Starters', isVeg: false, bestSeller: true, image: IMG('1525755662778-989d0524087e') },
      { id: 'dw_2', name: 'Veg Hakka Noodles', description: 'Stir-fried noodles with fresh vegetables and soy sauce', price: 200, category: 'Noodles', isVeg: true, bestSeller: true, image: IMG('1569718212165-3a8278d5f624') },
      { id: 'dw_3', name: 'Chicken Fried Rice', description: 'Wok-tossed rice with chicken, egg, and vegetables', price: 230, category: 'Rice', isVeg: false, bestSeller: false, image: IMG('1603133872878-684f208fb84b') },
      { id: 'dw_4', name: 'Spring Rolls', description: 'Crispy rolls stuffed with vegetables, served with sweet chili sauce', price: 180, category: 'Starters', isVeg: true, bestSeller: false, image: IMG('1562967916-eb82221dfb44') },
      { id: 'dw_5', name: 'Hot & Sour Soup', description: 'Spicy and tangy soup with mushrooms, tofu, and bamboo shoots', price: 150, category: 'Soups', isVeg: true, bestSeller: false, image: IMG('1547592166-23ac45744acd') },
      { id: 'dw_6', name: 'Chilli Chicken', description: 'Crispy chicken tossed with peppers, onions, and fiery chili sauce', price: 280, category: 'Main Course', isVeg: false, bestSeller: true, image: IMG('1525755662778-989d0524087e', 450, 300) },
      { id: 'dw_7', name: 'Dim Sum Basket', description: 'Steamed dumplings with chicken and prawn filling, 6 pieces', price: 260, category: 'Starters', isVeg: false, bestSeller: false, image: IMG('1496116218417-1a56e4f15dca') },
      { id: 'dw_8', name: 'Honey Chilli Potato', description: 'Crispy potato fingers glazed in a sweet-spicy honey chili sauce', price: 190, category: 'Starters', isVeg: true, bestSeller: false, image: IMG('1529692236671-f1f6cf9683ba') },
      { id: 'dw_9', name: 'Schezwan Noodles', description: 'Fiery Schezwan-style noodles with vegetables and bold spices', price: 220, category: 'Noodles', isVeg: true, bestSeller: false, image: IMG('1569718212165-3a8278d5f624', 450, 300) },
    ]
  },

  // ─── 4. Pizza Paradise ───
  {
    id: 4,
    name: 'Pizza Paradise',
    cuisine: ['Italian', 'Continental'],
    cuisineIds: ['italian'],
    rating: 4.6,
    reviewCount: 1650,
    deliveryTime: '30-40 min',
    deliveryFee: 40,
    priceRange: '₹₹₹',
    image: IMG('1565299624946-b28f40a0ae38', 600, 400),
    banner: IMG('1565299624946-b28f40a0ae38', 1200, 400),
    description: 'Wood-fired pizzas and handmade pastas — a slice of Italy delivered to your door.',
    address: '22 Indiranagar, Bangalore',
    isOpen: true,
    offers: ['Buy 1 Get 1 Free on Pizzas', '30% OFF up to ₹150'],
    menu: [
      { id: 'pp_1', name: 'Margherita Pizza', description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil', price: 299, category: 'Pizza', isVeg: true, bestSeller: true, image: IMG('1574071318508-1cdbab80d002') },
      { id: 'pp_2', name: 'Pepperoni Pizza', description: 'Loaded with spicy pepperoni slices and melted mozzarella', price: 399, category: 'Pizza', isVeg: false, bestSeller: true, image: IMG('1565299624946-b28f40a0ae38') },
      { id: 'pp_3', name: 'Pasta Alfredo', description: 'Creamy white sauce pasta with mushrooms and parmesan', price: 280, category: 'Pasta', isVeg: true, bestSeller: false, image: IMG('1621996346565-e3dbc646d9a9') },
      { id: 'pp_4', name: 'Garlic Bread with Cheese', description: 'Toasted garlic bread topped with melted mozzarella cheese', price: 160, category: 'Starters', isVeg: true, bestSeller: false, image: IMG('1619531040576-f9416aaee4a8') },
      { id: 'pp_5', name: 'Tiramisu', description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone', price: 250, category: 'Desserts', isVeg: true, bestSeller: false, image: IMG('1571877227200-a36aeb6a627e') },
      { id: 'pp_6', name: 'BBQ Chicken Pizza', description: 'Smoky BBQ sauce, grilled chicken, onions, and bell peppers', price: 449, category: 'Pizza', isVeg: false, bestSeller: true, image: IMG('1565299624946-b28f40a0ae38', 450, 300) },
      { id: 'pp_7', name: 'Bruschetta', description: 'Toasted bread topped with diced tomatoes, garlic, and fresh basil', price: 180, category: 'Starters', isVeg: true, bestSeller: false, image: IMG('1572695157366-5e8ad9b589be') },
      { id: 'pp_8', name: 'Penne Arrabbiata', description: 'Penne pasta in a spicy tomato sauce with garlic and red chili flakes', price: 260, category: 'Pasta', isVeg: true, bestSeller: false, image: IMG('1563379926898-05f4575a45d8') },
    ]
  },

  // ─── 5. Taco Fiesta ───
  {
    id: 5,
    name: 'Taco Fiesta',
    cuisine: ['Mexican'],
    cuisineIds: ['mexican'],
    rating: 4.2,
    reviewCount: 720,
    deliveryTime: '25-35 min',
    deliveryFee: 30,
    priceRange: '₹₹',
    image: IMG('1551504734-5ee1c4a1479b', 600, 400),
    banner: IMG('1551504734-5ee1c4a1479b', 1200, 400),
    description: 'Vibrant Mexican flavors — crunchy tacos, loaded burritos, and zesty salsas.',
    address: '56 HSR Layout, Bangalore',
    isOpen: true,
    offers: ['20% OFF on orders above ₹500'],
    menu: [
      { id: 'tf_1', name: 'Chicken Tacos (3 pcs)', description: 'Crispy corn tortillas with spiced chicken, salsa, and sour cream', price: 280, category: 'Tacos', isVeg: false, bestSeller: true, image: IMG('1551504734-5ee1c4a1479b') },
      { id: 'tf_2', name: 'Loaded Burrito', description: 'Flour tortilla packed with rice, beans, cheese, and grilled chicken', price: 320, category: 'Burritos', isVeg: false, bestSeller: true, image: IMG('1626700051175-6818013e1d4f') },
      { id: 'tf_3', name: 'Nachos Supreme', description: 'Crispy tortilla chips with cheese sauce, jalapeños, and guacamole', price: 250, category: 'Starters', isVeg: true, bestSeller: false, image: IMG('1513456852971-30c0b8199d4d') },
      { id: 'tf_4', name: 'Quesadilla', description: 'Grilled flour tortilla filled with melted cheese and vegetables', price: 220, category: 'Main Course', isVeg: true, bestSeller: false, image: IMG('1618040996337-56904b7850b7') },
      { id: 'tf_5', name: 'Churros', description: 'Fried dough pastries coated in cinnamon sugar with chocolate dip', price: 180, category: 'Desserts', isVeg: true, bestSeller: false, image: IMG('1624353365286-3f8d62daad51') },
      { id: 'tf_6', name: 'Guacamole & Chips', description: 'Fresh avocado dip with lime, cilantro, and crispy tortilla chips', price: 200, category: 'Starters', isVeg: true, bestSeller: false, image: IMG('1600335895229-6b424d3de83e') },
      { id: 'tf_7', name: 'Mexican Rice Bowl', description: 'Cilantro-lime rice with grilled chicken, black beans, and corn salsa', price: 290, category: 'Main Course', isVeg: false, bestSeller: false, image: IMG('1512058564366-18510be2db19') },
      { id: 'tf_8', name: 'Veg Tacos (3 pcs)', description: 'Crunchy tacos with spiced beans, lettuce, cheese, and pico de gallo', price: 230, category: 'Tacos', isVeg: true, bestSeller: false, image: IMG('1551504734-5ee1c4a1479b', 450, 300) },
    ]
  },

  // ─── 6. Sushi Zen ───
  {
    id: 6,
    name: 'Sushi Zen',
    cuisine: ['Japanese', 'Asian'],
    cuisineIds: ['japanese'],
    rating: 4.8,
    reviewCount: 980,
    deliveryTime: '35-45 min',
    deliveryFee: 50,
    priceRange: '₹₹₹',
    image: IMG('1579871494447-9811cf80d66c', 600, 400),
    banner: IMG('1579871494447-9811cf80d66c', 1200, 400),
    description: 'Premium Japanese dining — expertly crafted sushi, ramen, and more with the freshest ingredients.',
    address: '10 Lavelle Road, Bangalore',
    isOpen: true,
    offers: ['15% OFF on first order'],
    menu: [
      { id: 'sz_1', name: 'California Roll (8 pcs)', description: 'Crab, avocado, and cucumber wrapped in sushi rice and nori', price: 450, category: 'Sushi', isVeg: false, bestSeller: true, image: IMG('1579584425555-c3ce17fd4351') },
      { id: 'sz_2', name: 'Tonkotsu Ramen', description: 'Rich pork bone broth with chashu pork, egg, noodles, and nori', price: 420, category: 'Main Course', isVeg: false, bestSeller: true, image: IMG('1569718212165-3a8278d5f624') },
      { id: 'sz_3', name: 'Vegetable Tempura', description: 'Lightly battered and fried seasonal vegetables with dipping sauce', price: 280, category: 'Starters', isVeg: true, bestSeller: false, image: IMG('1562967916-eb82221dfb44', 400, 350) },
      { id: 'sz_4', name: 'Miso Soup', description: 'Traditional Japanese soup with tofu, wakame seaweed, and green onions', price: 150, category: 'Soups', isVeg: true, bestSeller: false, image: IMG('1547592166-23ac45744acd', 400, 350) },
      { id: 'sz_5', name: 'Edamame', description: 'Steamed young soybeans sprinkled with sea salt', price: 180, category: 'Starters', isVeg: true, bestSeller: false, image: IMG('1564834744159-ff0ea41ba4b9') },
      { id: 'sz_6', name: 'Salmon Nigiri (4 pcs)', description: 'Fresh sliced salmon over pressed vinegared rice', price: 380, category: 'Sushi', isVeg: false, bestSeller: true, image: IMG('1579871494447-9811cf80d66c') },
      { id: 'sz_7', name: 'Chicken Gyoza (6 pcs)', description: 'Pan-fried Japanese dumplings with chicken filling and dipping sauce', price: 260, category: 'Starters', isVeg: false, bestSeller: false, image: IMG('1496116218417-1a56e4f15dca', 400, 350) },
      { id: 'sz_8', name: 'Matcha Ice Cream', description: 'Creamy green tea ice cream made with premium Kyoto matcha', price: 200, category: 'Desserts', isVeg: true, bestSeller: false, image: IMG('1497034825429-c343d7c6a68f') },
    ]
  },

  // ─── 7. Bangkok Kitchen ───
  {
    id: 7,
    name: 'Bangkok Kitchen',
    cuisine: ['Thai', 'Asian'],
    cuisineIds: ['thai'],
    rating: 4.4,
    reviewCount: 1100,
    deliveryTime: '30-40 min',
    deliveryFee: 35,
    priceRange: '₹₹',
    image: IMG('1562565652-a0d8f0c59eb4', 600, 400),
    banner: IMG('1562565652-a0d8f0c59eb4', 1200, 400),
    description: 'A burst of Thai flavors — aromatic curries, stir-fries, and the perfect balance of sweet, sour, and spicy.',
    address: '33 Whitefield, Bangalore',
    isOpen: true,
    offers: ['Flat ₹75 OFF on orders above ₹399'],
    menu: [
      { id: 'bk_1', name: 'Pad Thai', description: 'Stir-fried rice noodles with shrimp, peanuts, egg, and tamarind sauce', price: 310, category: 'Noodles', isVeg: false, bestSeller: true, image: IMG('1559314809-0d155014e29e') },
      { id: 'bk_2', name: 'Green Curry with Rice', description: 'Creamy coconut green curry with vegetables, served with jasmine rice', price: 290, category: 'Main Course', isVeg: true, bestSeller: true, image: IMG('1455619452474-d2be8b1e70cd') },
      { id: 'bk_3', name: 'Tom Yum Soup', description: 'Hot and sour Thai soup with mushrooms, lemongrass, and galangal', price: 200, category: 'Soups', isVeg: true, bestSeller: false, image: IMG('1547592166-23ac45744acd', 450, 300) },
      { id: 'bk_4', name: 'Thai Spring Rolls', description: 'Fresh rice paper rolls with vegetables, herbs, and peanut sauce', price: 190, category: 'Starters', isVeg: true, bestSeller: false, image: IMG('1562967916-eb82221dfb44') },
      { id: 'bk_5', name: 'Mango Sticky Rice', description: 'Sweet coconut sticky rice topped with ripe mango slices', price: 220, category: 'Desserts', isVeg: true, bestSeller: true, image: IMG('1578985545062-69928b1d9587', 400, 350) },
      { id: 'bk_6', name: 'Red Curry Chicken', description: 'Thai red curry with tender chicken, bamboo shoots, and basil', price: 330, category: 'Main Course', isVeg: false, bestSeller: false, image: IMG('1455619452474-d2be8b1e70cd', 450, 300) },
      { id: 'bk_7', name: 'Thai Iced Tea', description: 'Creamy, sweet Thai tea served over ice with condensed milk', price: 120, category: 'Beverages', isVeg: true, bestSeller: false, image: IMG('1556679343-c7306c1976bc') },
      { id: 'bk_8', name: 'Basil Fried Rice', description: 'Fragrant rice stir-fried with holy basil, chili, and garlic', price: 250, category: 'Rice', isVeg: true, bestSeller: false, image: IMG('1512058564366-18510be2db19', 400, 350) },
    ]
  },

  // ─── 8. Dosa Corner ───
  {
    id: 8,
    name: 'Dosa Corner',
    cuisine: ['South Indian'],
    cuisineIds: ['south-indian'],
    rating: 4.5,
    reviewCount: 2100,
    deliveryTime: '20-25 min',
    deliveryFee: 20,
    priceRange: '₹',
    image: IMG('1630383249896-424e482df921', 600, 400),
    banner: IMG('1630383249896-424e482df921', 1200, 400),
    description: 'Crispy dosas, fluffy idlis, and authentic South Indian flavors — a taste of home.',
    address: '88 BTM Layout, Bangalore',
    isOpen: true,
    offers: ['₹50 OFF on orders above ₹199', 'Free filter coffee on orders above ₹299'],
    menu: [
      { id: 'dc_1', name: 'Masala Dosa', description: 'Crispy golden crepe filled with spiced potato masala, served with chutneys', price: 120, category: 'Dosas', isVeg: true, bestSeller: true, image: IMG('1630383249896-424e482df921') },
      { id: 'dc_2', name: 'Idli Sambar (4 pcs)', description: 'Soft steamed rice cakes served with sambar and coconut chutney', price: 80, category: 'Idli & Vada', isVeg: true, bestSeller: true, image: IMG('1589301760435-2d423b124e5b') },
      { id: 'dc_3', name: 'Medu Vada (2 pcs)', description: 'Crispy lentil fritters with a soft center, served with chutneys', price: 70, category: 'Idli & Vada', isVeg: true, bestSeller: false, image: IMG('1601050690597-df0568f70950') },
      { id: 'dc_4', name: 'Mysore Masala Dosa', description: 'Dosa with spicy red chutney spread, filled with potato masala', price: 140, category: 'Dosas', isVeg: true, bestSeller: true, image: IMG('1630383249896-424e482df921', 450, 300) },
      { id: 'dc_5', name: 'Rava Dosa', description: 'Crispy semolina crepe with onions and cashews, served with chutneys', price: 130, category: 'Dosas', isVeg: true, bestSeller: false, image: IMG('1630383249896-424e482df921', 400, 250) },
      { id: 'dc_6', name: 'Bisibele Bath', description: 'Karnataka-style lentil and rice dish cooked with vegetables and spices', price: 150, category: 'Rice', isVeg: true, bestSeller: false, image: IMG('1596797038530-2c107229654b') },
      { id: 'dc_7', name: 'Filter Coffee', description: 'Authentic South Indian filter coffee with frothy milk', price: 50, category: 'Beverages', isVeg: true, bestSeller: true, image: IMG('1509042239860-f550ce710b93') },
      { id: 'dc_8', name: 'Uttapam', description: 'Thick rice pancake topped with onions, tomatoes, and green chilies', price: 110, category: 'Dosas', isVeg: true, bestSeller: false, image: IMG('1630383249896-424e482df921', 350, 250) },
    ]
  },

  // ─── 9. Burger Barn ───
  {
    id: 9,
    name: 'Burger Barn',
    cuisine: ['American', 'Fast Food'],
    cuisineIds: ['american'],
    rating: 4.1,
    reviewCount: 1350,
    deliveryTime: '20-25 min',
    deliveryFee: 25,
    priceRange: '₹₹',
    image: IMG('1568901346375-23c9450c58cd', 600, 400),
    banner: IMG('1568901346375-23c9450c58cd', 1200, 400),
    description: 'Juicy handcrafted burgers, loaded fries, and thick shakes — American comfort food at its best.',
    address: '15 Electronic City, Bangalore',
    isOpen: true,
    offers: ['Combo Meal at ₹299', '25% OFF up to ₹125'],
    menu: [
      { id: 'bbn_1', name: 'Classic Smash Burger', description: 'Juicy beef patty with lettuce, tomato, pickles, and special sauce', price: 250, category: 'Burgers', isVeg: false, bestSeller: true, image: IMG('1568901346375-23c9450c58cd') },
      { id: 'bbn_2', name: 'Double Cheese Burger', description: 'Two beef patties with double cheese, caramelized onions, and bacon', price: 350, category: 'Burgers', isVeg: false, bestSeller: true, image: IMG('1551782450-a2132b4ba21d') },
      { id: 'bbn_3', name: 'Crispy Chicken Burger', description: 'Crispy fried chicken breast with coleslaw and spicy mayo', price: 280, category: 'Burgers', isVeg: false, bestSeller: false, image: IMG('1568901346375-23c9450c58cd', 450, 300) },
      { id: 'bbn_4', name: 'Loaded Fries', description: 'Crispy fries topped with cheese sauce, jalapeños, and bacon bits', price: 180, category: 'Sides', isVeg: false, bestSeller: false, image: IMG('1573080496219-bb080dd4f877') },
      { id: 'bbn_5', name: 'Onion Rings', description: 'Golden crispy onion rings served with BBQ dipping sauce', price: 150, category: 'Sides', isVeg: true, bestSeller: false, image: IMG('1639024471283-03518883512d') },
      { id: 'bbn_6', name: 'Chocolate Milkshake', description: 'Thick, creamy chocolate milkshake with whipped cream', price: 180, category: 'Beverages', isVeg: true, bestSeller: true, image: IMG('1572490122747-3968b75cc699') },
      { id: 'bbn_7', name: 'Veggie Burger', description: 'Grilled vegetable patty with lettuce, tomato, and chipotle mayo', price: 220, category: 'Burgers', isVeg: true, bestSeller: false, image: IMG('1550547660-d9450f859349') },
      { id: 'bbn_8', name: 'Chicken Wings (8 pcs)', description: 'Crispy buffalo wings with your choice of hot, BBQ, or honey mustard', price: 320, category: 'Starters', isVeg: false, bestSeller: false, image: IMG('1527477396000-e27163ad2a42') },
    ]
  },

  // ─── 10. Chai & Chaat ───
  {
    id: 10,
    name: 'Chai & Chaat',
    cuisine: ['Street Food', 'North Indian'],
    cuisineIds: ['street-food', 'north-indian'],
    rating: 4.3,
    reviewCount: 1800,
    deliveryTime: '15-20 min',
    deliveryFee: 15,
    priceRange: '₹',
    image: IMG('1601050690597-df0568f70950', 600, 400),
    banner: IMG('1601050690597-df0568f70950', 1200, 400),
    description: 'The best of Indian street food — tangy chaats, crispy snacks, and piping hot chai.',
    address: '99 Jayanagar, Bangalore',
    isOpen: true,
    offers: ['Flat ₹30 OFF on first order', 'Free chai on orders above ₹199'],
    menu: [
      { id: 'cc_1', name: 'Pani Puri (8 pcs)', description: 'Crispy hollow puris filled with spiced potato and tangy mint water', price: 80, category: 'Chaat', isVeg: true, bestSeller: true, image: IMG('1601050690597-df0568f70950') },
      { id: 'cc_2', name: 'Samosa (2 pcs)', description: 'Crispy pastry filled with spiced potatoes and peas, deep fried', price: 60, category: 'Snacks', isVeg: true, bestSeller: true, image: IMG('1601050690597-df0568f70950', 350, 250) },
      { id: 'cc_3', name: 'Bhel Puri', description: 'Puffed rice mixed with onions, tomatoes, chutneys, and sev', price: 90, category: 'Chaat', isVeg: true, bestSeller: false, image: IMG('1606491956689-2ea866880049') },
      { id: 'cc_4', name: 'Vada Pav', description: 'Mumbai-style spiced potato fritter in a soft bun with chutneys', price: 50, category: 'Snacks', isVeg: true, bestSeller: true, image: IMG('1606491956689-2ea866880049', 400, 300) },
      { id: 'cc_5', name: 'Masala Chai', description: 'Indian spiced tea with ginger, cardamom, and fresh milk', price: 30, category: 'Beverages', isVeg: true, bestSeller: true, image: IMG('1556679343-c7306c1976bc') },
      { id: 'cc_6', name: 'Jalebi', description: 'Crispy, syrup-soaked spiral-shaped sweet, served warm', price: 100, category: 'Sweets', isVeg: true, bestSeller: false, image: IMG('1666190093844-6e079d1ed9e2', 400, 300) },
      { id: 'cc_7', name: 'Aloo Tikki', description: 'Crispy spiced potato patties served with chutneys and yogurt', price: 90, category: 'Snacks', isVeg: true, bestSeller: false, image: IMG('1601050690597-df0568f70950', 400, 250) },
      { id: 'cc_8', name: 'Chole Bhature', description: 'Fluffy fried bread with spicy chickpea curry — a Punjab classic', price: 150, category: 'Main Course', isVeg: true, bestSeller: false, image: IMG('1585937421612-70a008356fbe', 400, 300) },
    ]
  },

  // ─── 11. Sweet Tooth ───
  {
    id: 11,
    name: 'Sweet Tooth',
    cuisine: ['Desserts', 'Bakery'],
    cuisineIds: ['desserts'],
    rating: 4.6,
    reviewCount: 1420,
    deliveryTime: '25-30 min',
    deliveryFee: 30,
    priceRange: '₹₹',
    image: IMG('1551024601-bec78aea704b', 600, 400),
    banner: IMG('1551024601-bec78aea704b', 1200, 400),
    description: 'Indulge your sweet cravings — artisan cakes, traditional mithai, and decadent desserts.',
    address: '42 Richmond Road, Bangalore',
    isOpen: true,
    offers: ['20% OFF on cakes', 'Free delivery on orders above ₹499'],
    menu: [
      { id: 'st_1', name: 'Belgian Chocolate Brownie', description: 'Rich, fudgy brownie made with premium Belgian chocolate', price: 180, category: 'Brownies', isVeg: true, bestSeller: true, image: IMG('1578985545062-69928b1d9587') },
      { id: 'st_2', name: 'Gulab Jamun (6 pcs)', description: 'Soft milk dumplings soaked in rose-scented cardamom syrup', price: 150, category: 'Indian Sweets', isVeg: true, bestSeller: true, image: IMG('1666190093844-6e079d1ed9e2') },
      { id: 'st_3', name: 'New York Cheesecake', description: 'Creamy baked cheesecake with a graham cracker crust and berry compote', price: 280, category: 'Cakes', isVeg: true, bestSeller: false, image: IMG('1533134242443-d4fd215305ad') },
      { id: 'st_4', name: 'Butterscotch Ice Cream', description: 'Creamy butterscotch ice cream with crunchy caramel bits', price: 130, category: 'Ice Cream', isVeg: true, bestSeller: false, image: IMG('1497034825429-c343d7c6a68f') },
      { id: 'st_5', name: 'Rasgulla (6 pcs)', description: 'Soft, spongy cottage cheese balls in light sugar syrup', price: 120, category: 'Indian Sweets', isVeg: true, bestSeller: false, image: IMG('1666190093844-6e079d1ed9e2', 350, 250) },
      { id: 'st_6', name: 'Death by Chocolate Cake', description: 'Triple-layer chocolate cake with ganache, fudge, and chocolate shavings', price: 450, category: 'Cakes', isVeg: true, bestSeller: true, image: IMG('1578985545062-69928b1d9587', 450, 300) },
      { id: 'st_7', name: 'Kulfi Falooda', description: 'Traditional Indian ice cream with vermicelli, rose syrup, and nuts', price: 160, category: 'Ice Cream', isVeg: true, bestSeller: false, image: IMG('1497034825429-c343d7c6a68f', 350, 300) },
      { id: 'st_8', name: 'Red Velvet Cupcake', description: 'Moist red velvet cupcake with cream cheese frosting', price: 120, category: 'Cakes', isVeg: true, bestSeller: false, image: IMG('1614707267537-b85aaf00c4b7') },
    ]
  },

  // ─── 12. Green Bowl ───
  {
    id: 12,
    name: 'Green Bowl',
    cuisine: ['Healthy', 'Salads'],
    cuisineIds: ['healthy'],
    rating: 4.4,
    reviewCount: 650,
    deliveryTime: '20-30 min',
    deliveryFee: 30,
    priceRange: '₹₹',
    image: IMG('1512621776951-a57141f2eefd', 600, 400),
    banner: IMG('1512621776951-a57141f2eefd', 1200, 400),
    description: 'Eat clean, feel amazing — nutrient-packed bowls, fresh salads, and wholesome smoothies.',
    address: '7 Sarjapur Road, Bangalore',
    isOpen: true,
    offers: ['Flat ₹60 OFF on orders above ₹399'],
    menu: [
      { id: 'gb_1', name: 'Buddha Bowl', description: 'Quinoa, roasted vegetables, chickpeas, avocado, and tahini dressing', price: 350, category: 'Bowls', isVeg: true, bestSeller: true, image: IMG('1512621776951-a57141f2eefd') },
      { id: 'gb_2', name: 'Grilled Chicken Caesar Salad', description: 'Romaine lettuce, grilled chicken, parmesan, croutons, Caesar dressing', price: 320, category: 'Salads', isVeg: false, bestSeller: true, image: IMG('1546793665-c74683f339c1') },
      { id: 'gb_3', name: 'Acai Smoothie Bowl', description: 'Blended acai berries topped with granola, banana, and chia seeds', price: 280, category: 'Bowls', isVeg: true, bestSeller: true, image: IMG('1505252585461-04db1eb84625') },
      { id: 'gb_4', name: 'Avocado Toast', description: 'Multigrain toast with smashed avocado, cherry tomatoes, and microgreens', price: 250, category: 'Light Bites', isVeg: true, bestSeller: false, image: IMG('1541519227354-08fa5d869a5c') },
      { id: 'gb_5', name: 'Greek Salad', description: 'Cucumber, olives, feta cheese, tomatoes, and oregano vinaigrette', price: 240, category: 'Salads', isVeg: true, bestSeller: false, image: IMG('1540189549336-e6e99c3679fe') },
      { id: 'gb_6', name: 'Green Detox Smoothie', description: 'Spinach, kale, banana, ginger, and coconut water blend', price: 180, category: 'Smoothies', isVeg: true, bestSeller: false, image: IMG('1505252585461-04db1eb84625', 350, 300) },
      { id: 'gb_7', name: 'Protein Power Bowl', description: 'Brown rice, grilled chicken, edamame, avocado, and teriyaki sauce', price: 380, category: 'Bowls', isVeg: false, bestSeller: false, image: IMG('1546793665-c74683f339c1', 400, 300) },
      { id: 'gb_8', name: 'Peanut Butter Banana Smoothie', description: 'Creamy peanut butter, banana, oat milk, and honey smoothie', price: 200, category: 'Smoothies', isVeg: true, bestSeller: false, image: IMG('1505252585461-04db1eb84625', 400, 250) },
    ]
  },
];

// ── Testimonials ────────────────────────────
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    avatar: '👩‍💼',
    rating: 5,
    text: 'FoodieFleet has transformed my dinner routine! The biryani from Biryani Blues arrives piping hot every single time. Best food delivery app in Bangalore!',
    date: '2 days ago'
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    avatar: '👨‍💻',
    rating: 5,
    text: 'Love the variety! From sushi to street food — everything is available. The delivery is super fast and the packaging is always neat.',
    date: '1 week ago'
  },
  {
    id: 3,
    name: 'Ananya Krishnan',
    avatar: '👩‍🎨',
    rating: 4,
    text: 'The dosas from Dosa Corner taste exactly like my grandmother makes. Fresh, crispy, and absolutely delicious. Highly recommend!',
    date: '3 days ago'
  },
  {
    id: 4,
    name: 'Vikram Patel',
    avatar: '👨‍🍳',
    rating: 5,
    text: 'As a food enthusiast, I appreciate the quality restaurants on FoodieFleet. The Green Bowl salads are amazing — healthy and tasty!',
    date: '5 days ago'
  },
  {
    id: 5,
    name: 'Meera Iyer',
    avatar: '👩‍⚕️',
    rating: 5,
    text: 'Ordered late at night and got my pizza in 25 minutes! Pizza Paradise makes the best wood-fired pizzas. FoodieFleet never disappoints.',
    date: '1 day ago'
  }
];

// ── How It Works Steps ──────────────────────
const HOW_IT_WORKS = [
  { icon: '🔍', title: 'Browse', description: 'Explore restaurants and cuisines near you' },
  { icon: '🛒', title: 'Order', description: 'Add your favorite dishes to cart and checkout' },
  { icon: '🚀', title: 'Enjoy', description: 'Get your food delivered fast to your doorstep' },
];
