/* ============================================================================
 * FILE: assets/js/engine.js
 * PURPOSE: Shared runtime brain for all pages on theGirlyZone:
 *          1. Versioned /catalog.json loader & local cache
 *          2. Pointer-only Cart & Favourites Store (auto-healing + Undo + GA4)
 *          3. Typo-tolerant Fuzzy Search (category-first + smooth auto-scroll)
 *          4. Strict Mood/Occasion/Price Filter Engine (category-locked + escape)
 *          5. Card UI Engine (3:4 swatch switcher, >4 arrow paging, outer corners)
 *          6. Straight-edged Drawers, Share Modal & Cart/Fav-only Toast System
 * EXPORTS: window.TGZ
 * ============================================================================ */

(function () {
  "use strict";

  const STORAGE_KEYS = {
    CART: "tgz_v3_cart",          // [{ id, c (colorIndex), q (qty), s (size?) }]
    FAVS: "tgz_v3_favs",          // [id, id, ...]
    CATALOG: "tgz_v3_catalog",    // Cached /catalog.json payload
    HANDOFF_COLOR: "tgz_handoff_color",
    LEGACY_CART: "thegirlyzone_cart",
    LEGACY_FAVS: "thegirlyzone_favourites"
  };

  const MAX_BAG_ITEMS = 10;
  const SWATCH_PAGE_SIZE = 4;

  // Global synonym map so ditching per-product searchKeywords never hurts search
  const SEARCH_SYNONYMS = {
    gown: ["dress", "maxi", "long"],
    maxi: ["long-dresses", "long", "dress", "skirt"],
    mini: ["short-dresses", "short", "mini"],
    nightwear: ["pajamas", "sleep", "pajama", "lounge"],
    sleepwear: ["pajamas", "sleep", "lounge"],
    pyjama: ["pajamas", "pajama"],
    pjs: ["pajamas", "pajama"],
    purse: ["bags", "satchels", "totes", "bag"],
    handbag: ["bags", "satchels", "totes"],
    beach: ["vacation"],
    resort: ["vacation"],
    holiday: ["vacation"],
    work: ["office", "smart"],
    corporate: ["office", "smart"],
    church: ["elegant", "smart", "office"],
    wedding: ["party", "elegant"],
    club: ["party"],
    dinner: ["date", "party", "elegant"],
    coord: ["2-piece", "sets"],
    two: ["2-piece", "sets"],
    pullover: ["sweater", "tops"],
    coat: ["jacket", "tops"],
    snatched: ["bodycon", "ruched", "stretch"]
  };

  // ==========================================================================
  // 1. UTILITIES
  // ==========================================================================
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function formatUGX(num) {
    return "UGX " + (Number(num) || 0).toLocaleString("en-US");
  }

  function encodeImg(file) {
    return encodeURIComponent(String(file || "")).replace(/%2F/g, "/");
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function smoothScrollTo(el, offset = 16) {
    if (!el) return;
    const header = $(".site-header");
    const headerH = header ? header.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerH - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }

  function trackGA(eventName, params = {}) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  }

  // ==========================================================================
  // 2. CENTRAL CATALOG DATABASE (Versioned /catalog.json Cache)
  // ==========================================================================
  const Catalog = {
    data: null,
    map: new Map(),
    promise: null,

    async load() {
      if (this.data) return this.data;
      if (this.promise) return this.promise;

      // Instant hydrate from localStorage while validating fresh copy
      const cachedRaw = localStorage.getItem(STORAGE_KEYS.CATALOG);
      if (cachedRaw) {
        try {
          const parsed = JSON.parse(cachedRaw);
          if (parsed && Array.isArray(parsed.items)) {
            this._hydrate(parsed);
          }
        } catch (_) { /* ignore corrupt cache */ }
      }

      this.promise = fetch("/catalog.json", { cache: "no-cache" })
        .then(res => {
          if (!res.ok) throw new Error("Failed to load /catalog.json");
          return res.json();
        })
        .then(fresh => {
          if (!this.data || this.data.v !== fresh.v) {
            this._hydrate(fresh);
            try {
              localStorage.setItem(STORAGE_KEYS.CATALOG, JSON.stringify(fresh));
            } catch (_) { /* storage quota fallback */ }
            document.dispatchEvent(new CustomEvent("tgz:catalog-ready", { detail: fresh }));
          }
          return this.data;
        })
        .catch(err => {
          console.warn("[TGZ Catalog] Using cached catalog fallback:", err.message);
          return this.data || { items: [], paths: {}, categories: [], filters: {} };
        });

      return this.promise;
    },

    _hydrate(payload) {
      this.data = payload;
      this.map = new Map();
      (payload.items || []).forEach(item => {
        // Normalize color tuples: [name, hex, previewImg, inStock]
        item.inStockColors = (item.colors || [])
          .map((c, idx) => ({
            index: idx,
            name: c[0],
            code: c[1],
            preview: c[2],
            inStock: c[3] !== false
          }))
          .filter(c => c.inStock);
        this.map.set(item.id, item);
      });
    },

    get(id) {
      return this.map.get(Number(id)) || null;
    },

    all() {
      return this.data ? this.data.items : [];
    },

    mainImgUrl(file) {
      const base = (this.data && this.data.paths && this.data.paths.mainImages) || "/assets/images/main/";
      return base + encodeImg(file);
    },

    secImgUrl(file) {
      const base = (this.data && this.data.paths && this.data.paths.secondaryImages) || "/assets/images/secondary/";
      return base + encodeImg(file);
    },

    siteUrl() {
      return (this.data && this.data.siteUrl) || "https://thegirlyzone.com";
    },

    whatsappNumber() {
      return (this.data && this.data.whatsapp) || "256788484694";
    }
  };

  // ==========================================================================
  // 3. TOAST SYSTEM (Strictly for Cart, Favourites, Undo & Copy Link)
  // ==========================================================================
  const Toast = {
    timer: null,
    show(message, opts = {}) {
      const el = $("#tgzToast");
      if (!el) return;
      clearTimeout(this.timer);

      const { tone = "dark", undoLabel = null, onUndo = null, duration = 3000 } = opts;
      el.className = "tgz-toast is-visible" + (tone === "green" ? " is-green" : tone === "pink" ? " is-pink" : "");
      el.innerHTML = `<span class="tgz-toast__msg">${escapeHtml(message)}</span>` +
        (undoLabel ? `<button type="button" class="tgz-toast__undo">${escapeHtml(undoLabel)}</button>` : "");

      if (undoLabel && typeof onUndo === "function") {
        const btn = $(".tgz-toast__undo", el);
        btn.addEventListener("click", () => {
          this.hide();
          onUndo();
        }, { once: true });
      }

      this.timer = setTimeout(() => this.hide(), duration);
    },

    hide() {
      const el = $("#tgzToast");
      if (el) el.classList.remove("is-visible");
    }
  };

  // ==========================================================================
  // 4. POINTER-ONLY STATE STORE (Cart + Favourites + Multi-Tab Sync)
  // ==========================================================================
  const Store = {
    cart: [], // [{ id, c (colorIndex or null), q (qty >= 1), s (size or null) }]
    favs: [], // [id, ...]

    init() {
      this._migrateLegacy();
      this._read();
      this.syncUI();

      // Multi-tab real-time state sync
      window.addEventListener("storage", e => {
        if (e.key === STORAGE_KEYS.CART || e.key === STORAGE_KEYS.FAVS) {
          this._read();
          this.syncUI();
          document.dispatchEvent(new CustomEvent("tgz:state-change"));
        }
      });
    },

    _migrateLegacy() {
      // Seamlessly upgrade returning shoppers from old snapshot-based storage
      if (!localStorage.getItem(STORAGE_KEYS.CART) && localStorage.getItem(STORAGE_KEYS.LEGACY_CART)) {
        try {
          const oldCart = JSON.parse(localStorage.getItem(STORAGE_KEYS.LEGACY_CART) || "[]");
          const pointers = oldCart
            .filter(item => item && Number.isInteger(Number(item.id)))
            .map(item => ({
              id: Number(item.id),
              c: Number.isInteger(item.selectedColorIndex) ? item.selectedColorIndex : 0,
              q: 1,
              s: null
            }));
          localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(pointers));
        } catch (_) { /* ignore */ }
      }
      if (!localStorage.getItem(STORAGE_KEYS.FAVS) && localStorage.getItem(STORAGE_KEYS.LEGACY_FAVS)) {
        try {
          const oldFavs = JSON.parse(localStorage.getItem(STORAGE_KEYS.LEGACY_FAVS) || "[]");
          const ids = [...new Set(oldFavs.map(i => Number(i.id)).filter(n => n > 0))];
          localStorage.setItem(STORAGE_KEYS.FAVS, JSON.stringify(ids));
        } catch (_) { /* ignore */ }
      }
    },

    _read() {
      try {
        const rawCart = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART) || "[]");
        this.cart = Array.isArray(rawCart) ? rawCart.filter(i => i && Number(i.id) > 0) : [];
      } catch (_) {
        this.cart = [];
      }
      try {
        const rawFavs = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVS) || "[]");
        this.favs = Array.isArray(rawFavs) ? [...new Set(rawFavs.map(Number).filter(n => n > 0))] : [];
      } catch (_) {
        this.favs = [];
      }
    },

    _writeCart() {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(this.cart));
      this.syncUI();
      document.dispatchEvent(new CustomEvent("tgz:cart-change", { detail: this.cart }));
      document.dispatchEvent(new CustomEvent("tgz:state-change"));
    },

    _writeFavs() {
      localStorage.setItem(STORAGE_KEYS.FAVS, JSON.stringify(this.favs));
      this.syncUI();
      document.dispatchEvent(new CustomEvent("tgz:favs-change", { detail: this.favs }));
      document.dispatchEvent(new CustomEvent("tgz:state-change"));
    },

    /** Self-heal cart & fav pointers against live catalog (drops sold-out items/shades) */
    healAgainstCatalog() {
      if (!Catalog.data) return;
      let cartChanged = false;
      let favsChanged = false;

      const healedCart = [];
      for (const entry of this.cart) {
        const product = Catalog.get(entry.id);
        if (!product || product.inStockColors.length === 0) {
          cartChanged = true;
          continue;
        }
        // If previously chosen color went out of stock, switch to first in-stock color
        const validColor = product.inStockColors.some(c => c.index === entry.c);
        const safeColor = validColor ? entry.c : product.inStockColors[0].index;
        if (safeColor !== entry.c) cartChanged = true;

        healedCart.push({
          id: product.id,
          c: safeColor,
          q: Math.max(1, Math.min(MAX_BAG_ITEMS, Number(entry.q) || 1)),
          s: entry.s && product.sizes.includes(entry.s) ? entry.s : null
        });
      }

      const healedFavs = this.favs.filter(id => Boolean(Catalog.get(id)));
      if (healedFavs.length !== this.favs.length) favsChanged = true;

      if (cartChanged) {
        this.cart = healedCart;
        this._writeCart();
      }
      if (favsChanged) {
        this.favs = healedFavs;
        this._writeFavs();
      }
    },

    totalBagUnits() {
      return this.cart.reduce((sum, item) => sum + (Number(item.q) || 1), 0);
    },

    inCart(id) {
      return this.cart.some(item => item.id === Number(id));
    },

    inFavs(id) {
      return this.favs.includes(Number(id));
    },

    addToCart(id, colorIndex = 0, size = null, silent = false) {
      id = Number(id);
      if (this.inCart(id)) return true;

      if (this.totalBagUnits() >= MAX_BAG_ITEMS) {
        if (!silent) Toast.show(`Bag limit reached (${MAX_BAG_ITEMS} items max)`, { tone: "dark" });
        return false;
      }

      const product = Catalog.get(id);
      let safeColor = Number.isInteger(colorIndex) ? colorIndex : 0;
      if (product && product.inStockColors.length > 0) {
        if (!product.inStockColors.some(c => c.index === safeColor)) {
          safeColor = product.inStockColors[0].index;
        }
      }

      this.cart.push({ id, c: safeColor, q: 1, s: size || null });
      this._writeCart();

      trackGA("add_to_cart", {
        currency: "UGX",
        value: product ? product.price : 0,
        items: [{ item_id: id, item_name: product ? product.title : String(id) }]
      });

      if (!silent) Toast.show("Added to bag", { tone: "green" });
      return true;
    },

    removeFromCart(id, withUndo = false) {
      id = Number(id);
      const idx = this.cart.findIndex(item => item.id === id);
      if (idx === -1) return;

      const removed = this.cart[idx];
      this.cart.splice(idx, 1);
      this._writeCart();

      if (withUndo) {
        Toast.show("Removed from bag", {
          tone: "dark",
          undoLabel: "Undo",
          duration: 4500,
          onUndo: () => {
            if (this.totalBagUnits() + removed.q <= MAX_BAG_ITEMS) {
              this.cart.splice(Math.min(idx, this.cart.length), 0, removed);
              this._writeCart();
            }
          }
        });
      } else {
        Toast.show("Removed from bag", { tone: "dark" });
      }
    },

    toggleCart(id, colorIndex = 0, size = null) {
      id = Number(id);
      if (this.inCart(id)) {
        this.removeFromCart(id, false);
        return false;
      }
      return this.addToCart(id, colorIndex, size, false);
    },

    updateCartQty(id, delta) {
      id = Number(id);
      const item = this.cart.find(i => i.id === id);
      if (!item) return;

      const nextQty = item.q + delta;
      if (nextQty <= 0) {
        this.removeFromCart(id, true);
        return;
      }
      if (delta > 0 && this.totalBagUnits() >= MAX_BAG_ITEMS) {
        Toast.show(`Bag limit reached (${MAX_BAG_ITEMS} items max)`, { tone: "dark" });
        return;
      }
      item.q = nextQty;
      this._writeCart();
    },

    updateCartColor(id, colorIndex) {
      id = Number(id);
      const item = this.cart.find(i => i.id === id);
      if (!item) return;
      item.c = Number(colorIndex);
      this._writeCart();
    },

    addFav(id, silent = false) {
      id = Number(id);
      if (this.inFavs(id)) return false;
      this.favs.unshift(id);
      this._writeFavs();

      const product = Catalog.get(id);
      trackGA("add_to_wishlist", {
        currency: "UGX",
        value: product ? product.price : 0,
        items: [{ item_id: id, item_name: product ? product.title : String(id) }]
      });

      if (!silent) Toast.show("Saved to favourites", { tone: "pink" });
      return true;
    },

    removeFav(id, withUndo = false) {
      id = Number(id);
      const idx = this.favs.indexOf(id);
      if (idx === -1) return false;
      this.favs.splice(idx, 1);
      this._writeFavs();

      if (withUndo) {
        Toast.show("Removed from favourites", {
          tone: "dark",
          undoLabel: "Undo",
          duration: 4500,
          onUndo: () => {
            if (!this.inFavs(id)) {
              this.favs.splice(Math.min(idx, this.favs.length), 0, id);
              this._writeFavs();
            }
          }
        });
      } else {
        Toast.show("Removed from favourites", { tone: "dark" });
      }
      return true;
    },

    toggleFav(id, withUndo = false) {
      id = Number(id);
      if (this.inFavs(id)) {
        this.removeFav(id, withUndo);
        return false;
      }
      this.addFav(id, false);
      return true;
    },

    /** Enforce visual sync across badges, hearts, and strict black/green bag buttons */
    syncUI(root = document) {
      const bagCount = this.totalBagUnits();
      const favCount = this.favs.length;

      // Sync all header & bottom-nav counter badges (strictly pink/white for favs, green/white for bag)
      $$(".js-cart-count").forEach(badge => {
        badge.textContent = bagCount;
        badge.hidden = bagCount === 0;
      });
      $$(".js-fav-count").forEach(badge => {
        badge.textContent = favCount;
        badge.hidden = favCount === 0;
      });

// Sync every bag button (CSS drives the playful "+" <-> Green Bag transition)
      $$("[data-bag-btn]", root).forEach(btn => {
        const id = Number(btn.dataset.bagBtn);
        const added = this.inCart(id);
        btn.classList.toggle("is-in-bag", added);
        btn.setAttribute("aria-pressed", String(added));
        btn.setAttribute("aria-label", added ? "Remove from bag" : "Add to bag");
      });

      // Sync every favourite heart button
      $$("[data-fav-btn]", root).forEach(btn => {
        const id = Number(btn.dataset.favBtn);
        const saved = this.inFavs(id);
        btn.classList.toggle("is-saved", saved);
        btn.setAttribute("aria-pressed", String(saved));
        const icon = $("i", btn);
        if (icon) icon.className = saved ? "fas fa-heart" : "far fa-heart";
      });
    }
  };

  // ==========================================================================
  // 5. CARD UI ENGINE (Swatches >4 Arrow Paging, Live Swap & Outer Corners)
  // ==========================================================================
  const CardUI = {
    /** Build HTML string for a standard 3:4 product card from a /catalog.json item */
    renderCardHTML(item, opts = {}) {
      const { useSecondary = false, showBag = true, showFav = true, showSwatches = true } = opts;
      const inStockColors = item.inStockColors || [];
      const firstColor = inStockColors[0];
      const imgSrc = useSecondary
        ? Catalog.secImgUrl(item.thumb)
        : Catalog.mainImgUrl(firstColor ? firstColor.preview : item.img);

      const hasSwatches = showSwatches && inStockColors.length > 0;
      const needsArrow = inStockColors.length > SWATCH_PAGE_SIZE;

      const swatchesHTML = hasSwatches
        ? `<div class="p-swatch-dock" data-swatch-dock data-total="${inStockColors.length}" data-page="0" data-dir="fwd">
             <div class="p-swatch-track">
               ${inStockColors.map((c, pos) => `
                 <button type="button"
                   class="p-swatch ${pos === 0 ? "is-active" : ""}"
                   data-swatch-btn
                   data-pos="${pos}"
                   data-color-index="${c.index}"
                   data-img="${escapeHtml(Catalog.mainImgUrl(c.preview))}"
                   style="background-color:${escapeHtml(c.code)};${pos >= SWATCH_PAGE_SIZE ? "display:none;" : ""}"
                   aria-label="${escapeHtml(c.name)}"
                   title="${escapeHtml(c.name)}"></button>
               `).join("")}
             </div>
             ${needsArrow ? `
               <button type="button" class="p-swatch-arrow" data-swatch-arrow aria-label="More colors">
                 <i class="fas fa-chevron-right"></i>
               </button>
             ` : ""}
           </div>`
        : "";

      const primaryMood = (item.moods && item.moods[0]) ? item.moods[0] : "";
      const subLabel = (item.sub || "").replace(/-/g, " ");
      const eyebrow = [subLabel, primaryMood].filter(Boolean).join(" • ");

      return `
        <article class="p-card" data-product-id="${item.id}" data-selected-color="${firstColor ? firstColor.index : 0}">
          <div class="p-media">
            <a href="${escapeHtml(item.url)}" class="p-media-link" data-pdp-link="${item.id}">
              <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(item.title)}" loading="lazy" decoding="async" class="p-img">
            </a>
            ${showFav ? `
              <button type="button" class="p-fav-btn" data-fav-btn="${item.id}" aria-label="Save ${escapeHtml(item.title)}">
                <i class="far fa-heart"></i>
              </button>
            ` : ""}
            ${swatchesHTML}
          </div>
          <div class="p-body">
            ${eyebrow ? `<p class="p-eyebrow">${escapeHtml(eyebrow)}</p>` : ""}
            <h3 class="p-title"><a href="${escapeHtml(item.url)}" data-pdp-link="${item.id}">${escapeHtml(item.title)}</a></h3>
            <div class="p-foot">
              <span class="p-price">${formatUGX(item.price)}</span>
              ${showBag ? `
                <button type="button" class="p-bag-btn" data-bag-btn="${item.id}" aria-label="Add ${escapeHtml(item.title)} to bag">
                  <i class="fas fa-plus bag-ico bag-ico--plus" aria-hidden="true"></i>
                  <i class="fas fa-shopping-bag bag-ico bag-ico--bag" aria-hidden="true"></i>
                </button>
              ` : ""}
            </div>
          </div>
        </article>`;
    },

    /**
     * Bulletproof >4 swatch pagination:
     * Steps forward in pages of 4 without flipping until ALL swatches have been viewed.
     * Only once the final page is reached does the arrow flip horizontally to step back.
     */
    advanceSwatches(dock) {
      const swatches = $$("[data-swatch-btn]", dock);
      const arrow = $("[data-swatch-arrow]", dock);
      const total = swatches.length;
      if (total <= SWATCH_PAGE_SIZE) return;

      const maxPage = Math.ceil(total / SWATCH_PAGE_SIZE) - 1;
      let page = Number(dock.dataset.page || 0);
      let dir = dock.dataset.dir || "fwd";

      if (dir === "fwd") {
        page += 1;
        if (page >= maxPage) {
          page = maxPage;
          dir = "back";
        }
      } else {
        page -= 1;
        if (page <= 0) {
          page = 0;
          dir = "fwd";
        }
      }

      dock.dataset.page = String(page);
      dock.dataset.dir = dir;

      const start = page * SWATCH_PAGE_SIZE;
      const end = start + SWATCH_PAGE_SIZE;

      swatches.forEach((btn, idx) => {
        btn.style.display = idx >= start && idx < end ? "" : "none";
      });

      if (arrow) {
        arrow.classList.toggle("is-flipped", dir === "back");
      }
    },

    /** Round ONLY the single outer top-left and outer top-right corners of a product grid */
    refreshCorners(gridEl) {
      if (!gridEl) return;
      const cards = $$(".p-card", gridEl).filter(el => el.style.display !== "none");
      cards.forEach(c => c.classList.remove("corner-tl", "corner-tr"));
      if (cards.length === 0) return;

      const styles = window.getComputedStyle(gridEl);
      const cols = styles.gridTemplateColumns.split(" ").filter(Boolean).length || 2;

      cards[0].classList.add("corner-tl");
      const topRightIdx = Math.min(cols, cards.length) - 1;
      cards[topRightIdx].classList.add("corner-tr");
    },

    refreshAllGrids() {
      $$("[data-corner-grid]").forEach(grid => this.refreshCorners(grid));
    },

    /** Single delegated click handler covering every card on the page */
    bindGlobalDelegation() {
      document.addEventListener("click", e => {
        // 1. Swatch pagination arrow
        const arrowBtn = e.target.closest("[data-swatch-arrow]");
        if (arrowBtn) {
          e.preventDefault();
          e.stopPropagation();
          const dock = arrowBtn.closest("[data-swatch-dock]");
          if (dock) this.advanceSwatches(dock);
          return;
        }

        // 2. Color swatch tap -> swap 3:4 preview image & store selected color on card
        const swatchBtn = e.target.closest("[data-swatch-btn]");
        if (swatchBtn) {
          e.preventDefault();
          e.stopPropagation();
          const card = swatchBtn.closest(".p-card");
          if (!card) return;
          const dock = swatchBtn.closest("[data-swatch-dock]");
          $$("[data-swatch-btn]", dock).forEach(b => b.classList.remove("is-active"));
          swatchBtn.classList.add("is-active");

          const imgEl = $(".p-img", card);
          if (imgEl && swatchBtn.dataset.img) {
            imgEl.src = swatchBtn.dataset.img;
          }
          card.dataset.selectedColor = swatchBtn.dataset.colorIndex || "0";
          return;
        }

        // 3. Bag toggle button (skip PDP button — pages.js handles it)
        const bagBtn = e.target.closest("[data-bag-btn]");
        if (bagBtn) {
          if (bagBtn.id === "pdpBagBtn") return;
          e.preventDefault();
          e.stopPropagation();
          const id = Number(bagBtn.dataset.bagBtn);
          const card = bagBtn.closest(".p-card");
          const colorIdx = card ? Number(card.dataset.selectedColor || 0) : 0;
          Store.toggleCart(id, colorIdx);
          return;
        }

        // 4. Favourite heart toggle (skip PDP button — pages.js handles it)
        const favBtn = e.target.closest("[data-fav-btn]");
        if (favBtn) {
          if (favBtn.id === "pdpFavBtn") return;
          e.preventDefault();
          e.stopPropagation();
          const id = Number(favBtn.dataset.favBtn);
          const isFavPage = document.body.dataset.page === "favourites";
          Store.toggleFav(id, isFavPage);
          return;
        }

        // 5. PDP Link click -> pass chosen card swatch color to PDP via sessionStorage
        const pdpLink = e.target.closest("[data-pdp-link]");
        if (pdpLink) {
          const card = pdpLink.closest(".p-card");
          if (card && card.dataset.selectedColor) {
            try {
              sessionStorage.setItem(
                STORAGE_KEYS.HANDOFF_COLOR,
                JSON.stringify({ id: Number(pdpLink.dataset.pdpLink), c: Number(card.dataset.selectedColor) })
              );
            } catch (_) { /* ignore */ }
          }
        }
        
      });

      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => this.refreshAllGrids(), 120);
      });
    }
  };

  // ==========================================================================
  // 6. FUZZY SEARCH ENGINE (Typo-Tolerant + Category-First Grouping)
  // ==========================================================================
  const Search = {
    /** Damerau-Levenshtein edit distance (catches transpositions like "skrit" -> "skirt") */
    distance(a, b) {
      const m = a.length, n = b.length;
      if (Math.abs(m - n) > 2) return 3;
      const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
      for (let i = 0; i <= m; i++) dp[i][0] = i;
      for (let j = 0; j <= n; j++) dp[0][j] = j;

      for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
          const cost = a[i - 1] === b[j - 1] ? 0 : 1;
          dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
          if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
            dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1);
          }
        }
      }
      return dp[m][n];
    },

    expandTokens(query) {
      const raw = String(query || "").toLowerCase().trim().split(/\s+/).filter(Boolean);
      return raw.map(word => {
        const syns = SEARCH_SYNONYMS[word] || [];
        return [word, ...syns];
      });
    },

    scoreItem(item, tokenGroups) {
      const title = item.title.toLowerCase();
      const blob = item.q || "";
      const words = blob.split(/[^a-z0-9]+/).filter(Boolean);
      let totalScore = 0;

      for (const group of tokenGroups) {
        let bestWordScore = 0;

        for (const term of group) {
          if (title.includes(term)) {
            bestWordScore = Math.max(bestWordScore, title.startsWith(term) ? 10 : 8);
            continue;
          }
          if (blob.includes(term)) {
            bestWordScore = Math.max(bestWordScore, 6);
            continue;
          }
          // Fuzzy match for words >= 3 chars
          if (term.length >= 3) {
            const maxDist = term.length >= 6 ? 2 : 1;
            for (const w of words) {
              if (Math.abs(w.length - term.length) > maxDist) continue;
              const d = this.distance(term, w);
              if (d <= maxDist) {
                bestWordScore = Math.max(bestWordScore, d === 1 ? 4 : 2);
                break;
              }
            }
          }
        }

        if (bestWordScore === 0) return 0; // Every typed token group must match
        totalScore += bestWordScore;
      }

      return totalScore;
    },

    query(text, activeCategory = null) {
      const groups = this.expandTokens(text);
      if (groups.length === 0) return { primary: [], other: [] };

      const scored = Catalog.all()
        .map(item => ({ item, score: this.scoreItem(item, groups) }))
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score);

      if (activeCategory) {
        return {
          primary: scored.filter(x => x.item.cat === activeCategory).map(x => x.item),
          other: scored.filter(x => x.item.cat !== activeCategory).map(x => x.item)
        };
      }
      return { primary: scored.map(x => x.item), other: [] };
    },

    initDrawer() {
      const input = $("#searchInput");
      const clearBtn = $("#searchClearBtn");
      const resultsBox = $("#searchResults");
      const form = $("#searchForm");
      if (!input || !resultsBox) return;

      const activeCategory = document.body.dataset.category || null;

      const renderRow = item => `
        <a href="${escapeHtml(item.url)}" class="search-row">
          <div class="search-row__thumb">
            <img src="${escapeHtml(Catalog.mainImgUrl(item.img))}" alt="${escapeHtml(item.title)}" loading="lazy">
          </div>
          <div class="search-row__meta">
            <span class="search-row__title">${escapeHtml(item.title)}</span>
            <span class="search-row__sub">${escapeHtml(item.cat)} • ${formatUGX(item.price)}</span>
          </div>
          <i class="fas fa-arrow-right search-row__arrow"></i>
        </a>`;

      const runLiveSearch = async () => {
        const q = input.value.trim();
        if (clearBtn) clearBtn.hidden = q.length === 0;

        if (!q) {
          resultsBox.innerHTML = `<p class="drawer-hint">Search by style, color, fabric (e.g. <em>cotton</em>, <em>silk</em>), or occasion.</p>`;
          return;
        }

        await Catalog.load();
        const { primary, other } = this.query(q, activeCategory);

        if (primary.length === 0 && other.length === 0) {
          resultsBox.innerHTML = `<p class="drawer-empty">No pieces matched "${escapeHtml(q)}". Try another word or browse Shop All.</p>`;
          return;
        }

        let html = "";
        if (activeCategory) {
          if (primary.length > 0) {
            html += `<div class="search-group-label">In ${escapeHtml(activeCategory)} (${primary.length})</div>`;
            html += primary.slice(0, 8).map(renderRow).join("");
          }
          if (other.length > 0) {
            html += `<div class="search-sep"><span>Other Categories...</span></div>`;
            html += other.slice(0, 8).map(renderRow).join("");
          }
        } else {
          html += primary.slice(0, 14).map(renderRow).join("");
        }

        resultsBox.innerHTML = html;
      };

      input.addEventListener("input", runLiveSearch);

      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          input.value = "";
          input.focus();
          runLiveSearch();
        });
      }

      // Pressing Enter/Submit routes or filters in-place & smoothly scrolls to results
      if (form) {
        form.addEventListener("submit", e => {
          e.preventDefault();
          const q = input.value.trim();
          if (!q) return;

          const page = document.body.dataset.page;
          if (page === "category" || page === "shop") {
            Drawers.closeAll();
            document.dispatchEvent(new CustomEvent("tgz:apply-search", { detail: { q } }));
          } else {
            window.location.href = `/shop/?q=${encodeURIComponent(q)}`;
          }
        });
      }
    }
  };

  // ==========================================================================
  // 7. FILTER ENGINE (Moods + Occasions + UGX Price Brackets)
  // ==========================================================================
  const Filters = {
    state: { moods: [], occasions: [], price: null },

    init() {
      const panel = $("#filterDrawer");
      if (!panel) return;

      // Read URL params if present
      const params = new URLSearchParams(window.location.search);
      const m = params.get("mood");
      const o = params.get("occ");
      const p = params.get("price");
      if (m) this.state.moods = m.split(",").filter(Boolean);
      if (o) this.state.occasions = o.split(",").filter(Boolean);
      if (p) this.state.price = p;

      this.syncPanelUI();

      // Mood & Occasion squircle chip selection (solid black on active, no outlines/ticks)
      $$("[data-filter-mood]", panel).forEach(btn => {
        btn.addEventListener("click", () => {
          const val = btn.dataset.filterMood;
          this._toggleInArray(this.state.moods, val);
          this.syncPanelUI();
        });
      });

      $$("[data-filter-occ]", panel).forEach(btn => {
        btn.addEventListener("click", () => {
          const val = btn.dataset.filterOcc;
          this._toggleInArray(this.state.occasions, val);
          this.syncPanelUI();
        });
      });

      // Price bracket pills (squircle dot selection, single-select toggleable)
      $$("[data-filter-price]", panel).forEach(btn => {
        btn.addEventListener("click", () => {
          const val = btn.dataset.filterPrice;
          this.state.price = this.state.price === val ? null : val;
          this.syncPanelUI();
        });
      });

      // Reset filters
      const resetBtn = $("#filterResetBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          this.clear();
          const page = document.body.dataset.page;
          if (page === "category" || page === "shop") {
            Drawers.closeAll();
            document.dispatchEvent(new CustomEvent("tgz:apply-filters", { detail: { ...this.state } }));
          }
        });
      }

      // Apply filters button
      const applyBtn = $("#filterApplyBtn");
      if (applyBtn) {
        applyBtn.addEventListener("click", () => {
          const page = document.body.dataset.page;
          if (page === "category" || page === "shop") {
            this.pushUrlParams();
            Drawers.closeAll();
            document.dispatchEvent(new CustomEvent("tgz:apply-filters", { detail: { ...this.state } }));
          } else {
            // Welcome & other pages route all filter results to /shop/
            const qs = this.toQueryString();
            window.location.href = qs ? `/shop/?${qs}` : "/shop/";
          }
        });
      }
    },

    _toggleInArray(arr, val) {
      const idx = arr.indexOf(val);
      if (idx > -1) arr.splice(idx, 1);
      else arr.push(val);
    },

    isActive() {
      return this.state.moods.length > 0 || this.state.occasions.length > 0 || Boolean(this.state.price);
    },

    clear() {
      this.state = { moods: [], occasions: [], price: null };
      this.syncPanelUI();
      this.pushUrlParams();
    },

    toQueryString() {
      const params = new URLSearchParams();
      if (this.state.moods.length) params.set("mood", this.state.moods.join(","));
      if (this.state.occasions.length) params.set("occ", this.state.occasions.join(","));
      if (this.state.price) params.set("price", this.state.price);
      return params.toString();
    },

    pushUrlParams() {
      const qs = this.toQueryString();
      const nextUrl = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
      window.history.replaceState({}, "", nextUrl);
    },

    matches(item) {
      const { moods, occasions, price } = this.state;
      if (moods.length > 0 && !moods.some(m => (item.moods || []).includes(m))) return false;
      if (occasions.length > 0 && !occasions.some(o => (item.occasions || []).includes(o))) return false;
      if (price && item.bracket !== price) return false;
      return true;
    },

    syncPanelUI() {
      const panel = $("#filterDrawer");
      if (panel) {
        $$("[data-filter-mood]", panel).forEach(btn => {
          btn.classList.toggle("is-selected", this.state.moods.includes(btn.dataset.filterMood));
        });
        $$("[data-filter-occ]", panel).forEach(btn => {
          btn.classList.toggle("is-selected", this.state.occasions.includes(btn.dataset.filterOcc));
        });
        $$("[data-filter-price]", panel).forEach(btn => {
          btn.classList.toggle("is-selected", this.state.price === btn.dataset.filterPrice);
        });
      }

      // Filter indicator dot shows on Shop All and Category pages when filters are active
      const page = document.body.dataset.page;
      const showDot = (page === "shop" || page === "category") && this.isActive();
      $$(".js-filter-dot").forEach(dot => {
        dot.hidden = !showDot;
      });

      this.updateLiveCount();

    },

    updateLiveCount() {
      const liveBar = $("#filterLiveBar");
      const liveText = $("#filterLiveText");
      const applyBtn = $("#filterApplyBtn");
      if (!applyBtn) return;

      if (!Catalog.data) {
        if (liveText) liveText.textContent = "Counting styles...";
        return;
      }

      const activeCat = document.body.dataset.category || null;
      const all = Catalog.all();
      const active = this.isActive();

      let primaryCount = 0;
      let otherCount = 0;

      for (const item of all) {
        if (!this.matches(item)) continue;
        if (!activeCat || item.cat === activeCat) primaryCount++;
        else otherCount++;
      }

      const styleWord = n => (n === 1 ? "style" : "styles");

      if (activeCat) {
        const catName = activeCat.toUpperCase();
        if (!active) {
          if (liveText) liveText.textContent = `${primaryCount} ${styleWord(primaryCount)} available in ${catName}`;
          applyBtn.textContent = `Show All (${primaryCount})`;
          applyBtn.disabled = false;
        } else if (primaryCount > 0) {
          if (liveText) {
            liveText.textContent = otherCount > 0
              ? `${primaryCount} in ${catName} (+${otherCount} in other categories)`
              : `${primaryCount} ${styleWord(primaryCount)} matched in ${catName}`;
          }
          applyBtn.textContent = `Show ${primaryCount} ${styleWord(primaryCount)}`;
          applyBtn.disabled = false;
        } else if (otherCount > 0) {
          if (liveText) liveText.textContent = `0 in ${catName} — ${otherCount} ${styleWord(otherCount)} in other categories`;
          applyBtn.textContent = `See ${otherCount} Elsewhere`;
          applyBtn.disabled = false;
        } else {
          if (liveText) liveText.textContent = `0 matches across the store`;
          applyBtn.textContent = `No Matches (0)`;
          applyBtn.disabled = true;
        }
      } else {
        if (!active) {
          if (liveText) liveText.textContent = `${primaryCount} live ${styleWord(primaryCount)} in store`;
          applyBtn.textContent = `Show All (${primaryCount})`;
          applyBtn.disabled = false;
        } else if (primaryCount > 0) {
          if (liveText) liveText.textContent = `${primaryCount} ${styleWord(primaryCount)} match your selection`;
          applyBtn.textContent = `Show ${primaryCount} ${styleWord(primaryCount)}`;
          applyBtn.disabled = false;
        } else {
          if (liveText) liveText.textContent = `0 styles match — try removing a filter`;
          applyBtn.textContent = `No Matches (0)`;
          applyBtn.disabled = true;
        }
      }

      if (liveBar) {
        liveBar.classList.toggle("is-empty", primaryCount === 0 && otherCount === 0);
      }
    },
  };

  // ==========================================================================
  // 8. DRAWERS & SHARE MODAL CONTROLLER
  // ==========================================================================
  const Drawers = {
    open(id) {
      this.closeAll();
      const drawer = $("#" + id);
      const backdrop = $("#drawerBackdrop");
      if (!drawer) return;
      drawer.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      if (backdrop) backdrop.classList.add("is-open");
      document.body.classList.add("no-scroll");

      if (id === "searchDrawer") {
        Catalog.load();
        const input = $("#searchInput");
        if (input) setTimeout(() => input.focus(), 180);
      }

      if (id === "filterDrawer") {
        Catalog.load().then(() => Filters.updateLiveCount());
        }
    },

    closeAll() {
      $$(".tgz-drawer.is-open, .tgz-modal.is-open").forEach(el => {
        el.classList.remove("is-open");
        el.setAttribute("aria-hidden", "true");
      });
      const backdrop = $("#drawerBackdrop");
      if (backdrop) backdrop.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    },

    isAnyOpen() {
      return Boolean($(".tgz-drawer.is-open, .tgz-modal.is-open"));
    },

    openShare({ title, text, url }) {
      const modal = $("#shareModal");
      if (!modal) return;
      const shareUrl = url || window.location.href;
      const shareText = text || `Check out ${title || "theGirlyZone"} in Kampala!`;

      modal.dataset.shareUrl = shareUrl;
      modal.dataset.shareTitle = title || document.title;
      modal.dataset.shareText = shareText;

      const subtitle = $("#shareModalSub");
      if (subtitle) subtitle.textContent = title || "Share with a friend";

      this.open("shareModal");
    },

    init() {
      document.addEventListener("click", e => {
        const opener = e.target.closest("[data-open-drawer]");
        if (opener) {
          e.preventDefault();
          this.open(opener.dataset.openDrawer);
          return;
        }
        if (e.target.closest("[data-close-drawer]") || e.target.id === "drawerBackdrop") {
          this.closeAll();
          return;
        }

        // Share modal actions
        const platformBtn = e.target.closest("[data-share-platform]");
        if (platformBtn) {
          const modal = $("#shareModal");
          const url = modal.dataset.shareUrl || window.location.href;
          const title = modal.dataset.shareTitle || document.title;
          const text = modal.dataset.shareText || "";
          const platform = platformBtn.dataset.sharePlatform;

          if (platform === "copy") {
            navigator.clipboard?.writeText(url).catch(() => {});
            Toast.show("Link copied!", { tone: "dark" });
            this.closeAll();
            return;
          }

          const encUrl = encodeURIComponent(url);
          const encText = encodeURIComponent(text);
          const routes = {
            whatsapp: `https://wa.me/?text=${encText}%20${encUrl}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encUrl}`,
            x: `https://twitter.com/intent/tweet?text=${encText}&url=${encUrl}`,
            email: `mailto:?subject=${encodeURIComponent(title)}&body=${encText}%0A%0A${encUrl}`
          };
          this.closeAll();
          if (platform === "email") window.location.href = routes.email;
          else if (routes[platform]) window.open(routes[platform], "_blank", "noopener,noreferrer");
        }
      });

      document.addEventListener("keydown", e => {
        if (e.key === "Escape") this.closeAll();
      });
    }
  };

  // ==========================================================================
  // 9. BOOTSTRAP ENGINE
  // ==========================================================================
  window.TGZ = {
    $, $$,
    formatUGX, encodeImg, escapeHtml, smoothScrollTo, trackGA,
    STORAGE_KEYS, MAX_BAG_ITEMS,
    Catalog, Store, CardUI, Search, Filters, Drawers, Toast
  };

  document.addEventListener("DOMContentLoaded", () => {
    Store.init();
    Drawers.init();
    Search.initDrawer();
    Filters.init();
    CardUI.bindGlobalDelegation();
    CardUI.refreshAllGrids();

    // Warm catalog cache in background & auto-heal stored pointers
    Catalog.load().then(() => {
      Store.healAgainstCatalog();
      Filters.updateLiveCount();
      document.dispatchEvent(new CustomEvent("tgz:engine-ready"));
    });
  });
})();