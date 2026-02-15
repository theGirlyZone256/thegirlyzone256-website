// CART & FAVOURITES MANAGEMENT
class CartFavouritesManager {
  constructor() {
    this.cartKey = 'thegirlyzone_cart';
    this.favouritesKey = 'thegirlyzone_favourites';
    this.init();
  }

    // Add this method to the class
  handleProductPage(productId) {
      const product = this.getProductDataFromPage(productId);
      if (product) {
          this.updateFavouriteButtons(productId);
      }
  }

  // Add this helper method
  getProductDataFromPage(productId) {
      // For product pages, we might need to extract data differently
      const productTitle = document.querySelector('.product-info-details h1')?.textContent;
      const productPrice = document.querySelector('.product-price-details')?.textContent;
      
      if (productTitle) {
          const price = productPrice ? parseInt(productPrice.replace(/[^\d]/g, '')) : 0;
          return {
              id: parseInt(productId),
              title: productTitle.trim(),
              price: price,
              image: document.querySelector('.gallery-slide img')?.src?.split('/').pop() || 'default.jpg',
              slug: window.location.pathname.split('/').filter(Boolean).pop()
          };
      }
      
      return null;
  }

  init() {
    this.attachProductCardListeners();
    this.updateCartCount();
    this.updateFavouritesCount();
    this.updateAllFavouriteButtons();
  }

  // ADD/REMOVE FROM CART - MODIFIED: Use secondary images from correct folder
  toggleCart(product) {
    const cart = this.getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
      // Remove from cart
      cart.splice(existingIndex, 1);
      this.showToast('Removed from cart');
    } else {

      // 🆕 CHECK CART LIMIT BEFORE ADDING
        if (cart.length >= 10) {
            this.showToast('Cart is full! Check Out to Add more.');
            return; // Stop here, don't add the product
        }

      
      // Add to cart - FIXED: Use secondaryImage and ensure correct path
      const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: this.getValidImagePath(product), // 🛑 FIXED: Use the new method
      slug: product.slug,
      colors: product.colors || [],
      // Use existing selection if available, otherwise auto-select single colors
      selectedColor: product.selectedColor || (product.colors && product.colors.length === 1 ? product.colors[0].name : null),
      selectedColorIndex: product.selectedColorIndex !== undefined ? product.selectedColorIndex : (product.colors && product.colors.length === 1 ? 0 : null)
  };
      cart.push(cartItem);
      this.showToast('Added to cart!');
    }

    this.saveCart(cart);
    this.updateCartCount();
  }

  // ADD/REMOVE FROM FAVOURITES - MODIFIED: Use secondary images from correct folder
  toggleFavourite(product) {
    const favourites = this.getFavourites();
    const existingIndex = favourites.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
      // Remove from favourites
      favourites.splice(existingIndex, 1);
      this.showToast('Removed from favourites');
    } else {
      // Add to favourites - FIXED: Use secondaryImage and ensure correct path
      const favouriteItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: this.getValidImagePath(product), // 🛑 FIXED: Use the new method
        slug: product.slug
      };
      favourites.push(favouriteItem);
      this.showToast('Added to favourites!');
    }

    this.saveFavourites(favourites);
    this.updateFavouritesCount();
    this.updateFavouriteButtons(product.id);
  }

  // 🆕 NEW METHOD: Get valid image path for secondary images
  getValidImagePath(product) {
    // Use secondaryImage from /assets/images/secondary/ folder
    if (product.secondaryImage) {
      // Just ensure it has .webp extension
      let imageName = product.secondaryImage;
      if (!imageName.toLowerCase().endsWith('.webp')) {
        // Replace any extension with .webp
        imageName = imageName.replace(/\.[^/.]+$/, "") + '.webp';
      }
      return imageName;
    }
    
    // 🚨 This should NEVER happen since secondary images are mandatory
    console.error('❌ MISSING SECONDARY IMAGE for product:', product.id, product.title);
    
    // Return empty string to avoid broken images
    return '';
  }

  // STORAGE METHODS
  getCart() {
    return JSON.parse(localStorage.getItem(this.cartKey) || '[]');
  }

  saveCart(cart) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  getFavourites() {
    return JSON.parse(localStorage.getItem(this.favouritesKey) || '[]');
  }

  saveFavourites(favourites) {
    localStorage.setItem(this.favouritesKey, JSON.stringify(favourites));
  }

  // UPDATE UI COUNTERS
  updateCartCount() {
    const cart = this.getCart();
    const cartCounters = document.querySelectorAll('.cart-count');
    cartCounters.forEach(counter => {
      counter.textContent = cart.length;
      counter.style.display = cart.length > 0 ? 'inline' : 'none';
    });
  }

  updateFavouritesCount() {
    const favourites = this.getFavourites();
    const favCounters = document.querySelectorAll('.favourites-count');
    favCounters.forEach(counter => {
      counter.textContent = favourites.length;
      counter.style.display = favourites.length > 0 ? 'inline' : 'none';
    });
  }

  // UPDATE FAVOURITE BUTTON STATES
  updateFavouriteButtons(productId) {
    const favourites = this.getFavourites();
    const isFavourite = favourites.some(item => item.id === productId);
    
    const favButtons = document.querySelectorAll(`[data-product-id="${productId}"] .favourite-btn, .favourite-btn[data-product-id="${productId}"]`);
    favButtons.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (isFavourite) {
          icon.classList.remove('far');
          icon.classList.add('fas');
          btn.classList.add('active');
          icon.style.color = '#ff004d';
        } else {
          icon.classList.remove('fas');
          icon.classList.add('far');
          btn.classList.remove('active');
          icon.style.color = '';
        }
      }
    });
  }

  // UPDATE ALL FAVOURITE BUTTONS ON PAGE LOAD
  updateAllFavouriteButtons() {
    const favourites = this.getFavourites();
    document.querySelectorAll('.favourite-btn').forEach(btn => {
      const productId = btn.dataset.productId;
      if (productId) {
        const isFavourite = favourites.some(item => item.id === parseInt(productId));
        const icon = btn.querySelector('i');
        if (icon) {
          if (isFavourite) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            btn.classList.add('active');
            icon.style.color = '#ff004d';
          }
        }
      }
    });
  }

  // ATTACH EVENT LISTENERS TO PRODUCT CARDS
  attachProductCardListeners() {
    // Add to Cart buttons
    document.addEventListener('click', (e) => {
      if (e.target.closest('.add-to-cart-btn')) {
        const btn = e.target.closest('.add-to-cart-btn');
        const productId = btn.dataset.productId;
        const product = this.getProductData(productId);
        if (product) this.toggleCart(product);
      }

      // Favourite buttons
      const favBtn = e.target.closest('.favourite-btn');
      if (favBtn) {
        const productId = favBtn.dataset.productId;
        
        // ONLY intercept if it has a productId AND is NOT a direct navigation link
        if (productId && !favBtn.hasAttribute('href')) {
          const product = this.getProductData(productId);
          if (product) {
            e.preventDefault(); // Stop navigation ONLY for toggling favourites
            this.toggleFavourite(product);
          }
        }
        // If it's a nav link (has href) or missing ID, the browser follows the link naturally
      }

  // GET PRODUCT DATA FROM 11TY GENERATED PAGE
  getProductData(productId) {
    // Try to get product data from data attributes first
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    if (productCard && productCard.dataset.productData) {
      try {
        return JSON.parse(productCard.dataset.productData);
      } catch (e) {
        console.error('Error parsing product data:', e);
      }
    }

    // Fallback: Extract from DOM elements
    if (!productCard) return null;

    const priceText = productCard.querySelector('.product-price')?.textContent;
    const price = priceText ? parseInt(priceText.replace(/[^\d]/g, '')) : 0;
    
    return {
      id: parseInt(productId),
      title: productCard.querySelector('.product-title')?.textContent?.trim() || 'Product',
      price: price,
      secondaryImage: productCard.querySelector('.product-image img')?.src?.split('/').pop() || 'default.jpg',
      slug: productCard.querySelector('a')?.href?.split('/').filter(Boolean).pop() || productId.toString(),
      mainImages: ['default.jpg']
    };
  }

  // SIMPLE TOAST NOTIFICATION
  showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) existingToast.remove();

    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: #000;
      color: white;
      padding: 12px 24px;
      border-radius: 4px;
      z-index: 10000;
      font-size: 0.9rem;
      animation: toastSlideUp 0.3s ease;
    `;

    // Add CSS animation
    if (!document.querySelector('#toast-styles')) {
      const style = document.createElement('style');
      style.id = 'toast-styles';
      style.textContent = `
        @keyframes toastSlideUp {
          from { transform: translateX(-50%) translateY(100%); opacity: 0; }
          to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        .cart-count, .favourites-count {
          background: #ff004d;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          font-size: 0.7rem;
          display: none;
          position: absolute;
          top: -5px;
          right: -5px;
          text-align: center;
          line-height: 18px;
        }
        .favourite-btn.active i {
          color: #ff004d !important;
        }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // Auto remove after 2 seconds
    setTimeout(() => {
      if (toast.parentNode) {
        toast.style.animation = 'toastSlideUp 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
      }
    }, 2000);
  }
  
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.cartFavouritesManager = new CartFavouritesManager();
});