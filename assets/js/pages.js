/* ============================================================================
 * FILE: assets/js/pages.js
 * PURPOSE: Page-specific controllers mounted on top of window.TGZ (engine.js):
 *          - Welcome   (Hero slider, scroll reveals, 3s rotating Shop All stack)
 *          - Catalog   (Category & Shop All filtering, search, auto-scroll)
 *          - Product   (3:4 gallery, thumbnails, swatches, 5x viewport double-tap,
 *                       WhatsApp Buy Now, accordions)
 *          - Favourites (Saved lookbook grid, Move All to Bag, Wishlist Share)
 *          - Cart      (Inline color reselection, qty steppers, Save for Later,
 *                       one-time "No card needed" notice, WhatsApp checkout)
 * DEPENDS ON: assets/js/engine.js (window.TGZ)
 * ============================================================================ */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    if (!window.TGZ) return;

    if (page === "welcome") initWelcome();
    if (page === "category" || page === "shop") initCatalogPage(page);
    if (page === "product") initProductPage();
    if (page === "favourites") initFavouritesPage();
    if (page === "cart") initCartPage();
  });

  // ==========================================================================
  // 1. WELCOME PAGE (Hero Crossfade + Reveals + 3-Second Rotating 3-Card Stack)
  // ==========================================================================
  function initWelcome() {
    const { $, $$ } = window.TGZ;

    // A. Hero Crossfade Slider
    const slides = $$(".hero-slide");
    const dots = $$(".hero-dot");
    if (slides.length > 1) {
      let idx = 0;
      const showSlide = n => {
        idx = (n + slides.length) % slides.length;
        slides.forEach((s, i) => s.classList.toggle("is-active", i === idx));
        dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
      };
      let timer = setInterval(() => showSlide(idx + 1), 4500);
      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          clearInterval(timer);
          showSlide(i);
          timer = setInterval(() => showSlide(idx + 1), 4500);
        });
      });
    }

    // B. Scroll-Triggered Reveals
    const revealEls = $$(".js-reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(el => io.observe(el));
    } else {
      revealEls.forEach(el => el.classList.add("is-revealed"));
    }

    // C. Shop All 3-Card Angled Stack (Cycles all 6 dedicated category images every 3s)
    const stackImgs = $$(".js-stack-img");
    const catImgs = $$(".js-cat-card-img").map(img => img.getAttribute("src")).filter(Boolean);
    if (stackImgs.length === 3 && catImgs.length >= 3) {
      let offset = 0;
      const paintStack = () => {
        stackImgs.forEach((img, slot) => {
          const nextSrc = catImgs[(offset + slot) % catImgs.length];
          img.classList.add("is-fading");
          setTimeout(() => {
            img.src = nextSrc;
            img.classList.remove("is-fading");
          }, 180);
        });
      };
      setInterval(() => {
        offset = (offset + 1) % catImgs.length;
        paintStack();
      }, 3000);
    }
  }

  // ==========================================================================
  // 2. CATEGORY & SHOP ALL PAGES (Filters, Search & Auto-Scroll to Results)
  // ==========================================================================
  function initCatalogPage(page) {
    const { $, $$, Catalog, Store, CardUI, Search, Filters, smoothScrollTo, escapeHtml } = window.TGZ;

    const activeCategory = page === "category" ? (document.body.dataset.category || null) : null;
    const grid = $("#productGrid");
    const resultsAnchor = $("#resultsAnchor") || grid;
    const countBadge = $("#catalogCount");
    const activeStrip = $("#activeFiltersStrip");
    const otherWrap = $("#otherCategoriesWrap");
    const otherToggleBtn = $("#otherCategoriesBtn");
    const otherCountEl = $("#otherCategoriesCount");
    const otherSection = $("#otherCategoriesSection");
    const otherGrid = $("#otherCategoriesGrid");

    if (!grid) return;

    let currentSearchQuery = new URLSearchParams(window.location.search).get("q") || "";
    let otherExpanded = false;

    async function renderCatalog(shouldScroll = false) {
      await Catalog.load();
      const all = Catalog.all();
      const filtersActive = Filters.isActive();
      const searchActive = currentSearchQuery.trim().length > 0;

      // Determine matching pool
      let primaryMatches = [];
      let otherMatches = [];

      if (searchActive) {
        const res = Search.query(currentSearchQuery, activeCategory);
        primaryMatches = res.primary.filter(item => Filters.matches(item));
        otherMatches = res.other.filter(item => Filters.matches(item));
      } else if (activeCategory) {
        primaryMatches = all.filter(item => item.cat === activeCategory && Filters.matches(item));
        if (filtersActive) {
          otherMatches = all.filter(item => item.cat !== activeCategory && Filters.matches(item));
        }
      } else {
        primaryMatches = all.filter(item => Filters.matches(item));
      }

      // Render active filter / search pills
      renderActiveChips(filtersActive, searchActive);

      // Update live counter
      if (countBadge) {
        countBadge.textContent = `${primaryMatches.length} ${primaryMatches.length === 1 ? "style" : "styles"}`;
      }

      // Render primary product grid (empty leaves background vectors clean & visible)
      if (primaryMatches.length === 0) {
        grid.innerHTML = `
          <div class="catalog-empty">
            <p class="catalog-empty__title">No matching pieces here yet</p>
            <p class="catalog-empty__sub">Try clearing a filter or exploring other categories.</p>
            <button type="button" class="btn-solid-dark" id="clearAllEmptyBtn">Reset Filters</button>
          </div>`;
        const resetBtn = $("#clearAllEmptyBtn", grid);
        if (resetBtn) {
          resetBtn.addEventListener("click", () => {
            currentSearchQuery = "";
            Filters.clear();
            renderCatalog(true);
          });
        }
      } else {
        grid.innerHTML = primaryMatches.map(item => CardUI.renderCardHTML(item)).join("");
        CardUI.refreshCorners(grid);
        Store.syncUI(grid);
      }

      // Category-only "From Other Categories" escape hatch
      if (activeCategory && otherWrap && otherGrid) {
        const showOther = (filtersActive || searchActive) && otherMatches.length > 0;
        otherWrap.hidden = !showOther;
        if (otherCountEl) otherCountEl.textContent = String(otherMatches.length);

        if (showOther) {
          otherGrid.innerHTML = otherMatches.map(item => CardUI.renderCardHTML(item)).join("");
          CardUI.refreshCorners(otherGrid);
          Store.syncUI(otherGrid);
          if (otherSection) otherSection.hidden = !otherExpanded;
        } else {
          otherExpanded = false;
          if (otherSection) otherSection.hidden = true;
        }
      }

      if (shouldScroll) {
        smoothScrollTo(resultsAnchor, 18);
      }
    }

    function renderActiveChips(filtersActive, searchActive) {
      if (!activeStrip) return;
      if (!filtersActive && !searchActive) {
        activeStrip.hidden = true;
        activeStrip.innerHTML = "";
        return;
      }

      const chips = [];
      if (searchActive) {
        chips.push(`<button type="button" class="active-chip" data-remove-chip="q">"${escapeHtml(currentSearchQuery)}" <span>&times;</span></button>`);
      }
      Filters.state.moods.forEach(m => {
        chips.push(`<button type="button" class="active-chip" data-remove-chip="mood:${escapeHtml(m)}">${escapeHtml(m)} <span>&times;</span></button>`);
      });
      Filters.state.occasions.forEach(o => {
        chips.push(`<button type="button" class="active-chip" data-remove-chip="occ:${escapeHtml(o)}">${escapeHtml(o)} <span>&times;</span></button>`);
      });
      if (Filters.state.price) {
        chips.push(`<button type="button" class="active-chip" data-remove-chip="price">${escapeHtml(Filters.state.price)} <span>&times;</span></button>`);
      }
      chips.push(`<button type="button" class="active-chip active-chip--clear" data-remove-chip="all">Clear all</button>`);

      activeStrip.innerHTML = chips.join("");
      activeStrip.hidden = false;
    }

    if (activeStrip) {
      activeStrip.addEventListener("click", e => {
        const chip = e.target.closest("[data-remove-chip]");
        if (!chip) return;
        const token = chip.dataset.removeChip;

        if (token === "all") {
          currentSearchQuery = "";
          Filters.clear();
        } else if (token === "q") {
          currentSearchQuery = "";
        } else if (token === "price") {
          Filters.state.price = null;
          Filters.syncPanelUI();
          Filters.pushUrlParams();
        } else if (token.startsWith("mood:")) {
          const val = token.slice(5);
          Filters.state.moods = Filters.state.moods.filter(x => x !== val);
          Filters.syncPanelUI();
          Filters.pushUrlParams();
        } else if (token.startsWith("occ:")) {
          const val = token.slice(4);
          Filters.state.occasions = Filters.state.occasions.filter(x => x !== val);
          Filters.syncPanelUI();
          Filters.pushUrlParams();
        }
        renderCatalog(true);
      });
    }

    if (otherToggleBtn && otherSection) {
      otherToggleBtn.addEventListener("click", () => {
        otherExpanded = !otherExpanded;
        otherSection.hidden = !otherExpanded;
        otherToggleBtn.classList.toggle("is-open", otherExpanded);
        if (otherExpanded) {
          CardUI.refreshCorners(otherGrid);
          smoothScrollTo(otherSection, 18);
        }
      });
    }

    // Listen for live Search & Filter drawer events (auto-scrolls smoothly to results)
    document.addEventListener("tgz:apply-filters", () => {
      otherExpanded = false;
      renderCatalog(true);
    });

    document.addEventListener("tgz:apply-search", e => {
      currentSearchQuery = (e.detail && e.detail.q) || "";
      otherExpanded = false;
      renderCatalog(true);
    });

    // If page opened with URL filters/search (e.g. routed from Welcome), apply & scroll
    if (Filters.isActive() || currentSearchQuery) {
      renderCatalog(true);
    }
  }

  // ==========================================================================
  // 3. PRODUCT DETAIL PAGE (3:4 Gallery, Swatches, 5x Viewport Double-Tap)
  // ==========================================================================
  function initProductPage() {
    const { $, $$, Catalog, Store, Drawers, Toast, STORAGE_KEYS, trackGA } = window.TGZ;
    const dataScript = $("#pdpProductData");
    if (!dataScript) return;

    let product;
    try {
      product = JSON.parse(dataScript.textContent);
    } catch (_) {
      return;
    }

    // GA4 product view
    trackGA("view_item", {
      currency: "UGX",
      value: product.price,
      items: [{ item_id: product.id, item_name: product.title, price: product.price, item_category: product.category }]
    });

    const galleryBox = $("#pdpGallery");
    const slidesTrack = $("#pdpSlides");
    const dotsWrap = $("#pdpDots");
    const thumbsWrap = $("#pdpThumbs");
    const colorLabel = $("#pdpColorName");
    const allPhotosBtn = $("#pdpAllPhotosBtn");
    const prevBtn = $("#pdpPrevBtn");
    const nextBtn = $("#pdpNextBtn");
    const bagBtn = $("#pdpBagBtn");
    const buyNowBtn = $("#pdpBuyNowBtn");
    const favBtn = $("#pdpFavBtn");
    const shareBtn = $("#pdpShareBtn");
    const doubleTapToast = $("#doubleTapNotice");
    const dotsHintEl = $("#pdpDotsHint");

    let activeSlides = product.gallery || []; // [{ file, colorIndex }]
    let currentSlide = 0;
    let selectedColorIndex = product.colors.findIndex(c => c.inStock);
    if (selectedColorIndex < 0) selectedColorIndex = 0;
    let selectedSize = product.sizes && product.sizes.length === 1 ? product.sizes[0] : null;
    let isColorFiltered = false;

    const mainBase = "/assets/images/main/";
    const imgUrl = f => mainBase + encodeURIComponent(f);

    function renderGallery() {
      if (!slidesTrack) return;

      slidesTrack.innerHTML = activeSlides.map((s, i) => `
        <div class="pdp-slide" data-slide-idx="${i}">
          <img src="${imgUrl(s.file)}"
               alt="${product.title} — photo ${i + 1}"
               ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>
        </div>
      `).join("");

      if (dotsWrap) {
        dotsWrap.innerHTML = activeSlides.map((_, i) => `
          <button type="button" class="pdp-dot ${i === 0 ? "is-active" : ""}" data-go-slide="${i}" aria-label="Slide ${i + 1}"></button>
        `).join("");
        dotsWrap.hidden = activeSlides.length <= 1;
      }

      if (thumbsWrap) {
        thumbsWrap.innerHTML = activeSlides.map((s, i) => `
          <button type="button" class="pdp-thumb ${i === 0 ? "is-active" : ""}" data-go-slide="${i}" aria-label="View photo ${i + 1}">
            <img src="${imgUrl(s.file)}" alt="" loading="lazy">
          </button>
        `).join("");
        thumbsWrap.hidden = activeSlides.length <= 1;
      }

      if (prevBtn) prevBtn.hidden = activeSlides.length <= 1;
      if (nextBtn) nextBtn.hidden = activeSlides.length <= 1;

      goToSlide(0, false);
    }

    function goToSlide(index, syncSwatch = true) {
      if (!activeSlides.length) return;
      currentSlide = (index + activeSlides.length) % activeSlides.length;
      if (slidesTrack) {
        slidesTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
      $$(".pdp-dot", dotsWrap || document).forEach((d, i) => d.classList.toggle("is-active", i === currentSlide));
      $$(".pdp-thumb", thumbsWrap || document).forEach((t, i) => {
        t.classList.toggle("is-active", i === currentSlide);
        if (i === currentSlide) t.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
      });

      // Sync active swatch when swiping through the unified _00 -> _## master gallery
      if (syncSwatch && !isColorFiltered) {
        const slideColor = activeSlides[currentSlide].colorIndex;
        if (Number.isInteger(slideColor)) {
          highlightColor(slideColor);
        }
      }
    }

    function highlightColor(colorIdx) {
      const colorObj = product.colors[colorIdx];
      if (!colorObj) return;
      selectedColorIndex = colorIdx;
      if (colorLabel) colorLabel.textContent = colorObj.name;
      $$("[data-pdp-swatch]").forEach(btn => {
        btn.classList.toggle("is-active", Number(btn.dataset.pdpSwatch) === colorIdx);
      });
    }

    function selectColor(colorIdx, filterGallery = true) {
      const colorObj = product.colors[colorIdx];
      if (!colorObj || !colorObj.inStock) return;
      highlightColor(colorIdx);

      if (filterGallery && product.colors.length > 1) {
        isColorFiltered = true;
        activeSlides = colorObj.images.map(file => ({ file, colorIndex: colorIdx }));
        if (allPhotosBtn) allPhotosBtn.hidden = false;
        renderGallery();
      }
    }

    function resetAllPhotos() {
      isColorFiltered = false;
      activeSlides = product.gallery || [];
      if (allPhotosBtn) allPhotosBtn.hidden = true;
      renderGallery();
    }

    // Bind gallery controls
    if (prevBtn) prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));

    document.addEventListener("click", e => {
      const goBtn = e.target.closest("[data-go-slide]");
      if (goBtn) {
        goToSlide(Number(goBtn.dataset.goSlide));
        return;
      }
      const swBtn = e.target.closest("[data-pdp-swatch]");
      if (swBtn) {
        selectColor(Number(swBtn.dataset.pdpSwatch), true);
        return;
      }
      const sizeBtn = e.target.closest("[data-pdp-size]");
      if (sizeBtn) {
        selectedSize = sizeBtn.dataset.pdpSize;
        $$("[data-pdp-size]").forEach(b => b.classList.toggle("is-active", b === sizeBtn));
      }
    });

    if (allPhotosBtn) allPhotosBtn.addEventListener("click", resetAllPhotos);

    document.addEventListener("keydown", e => {
      if (Drawers.isAnyOpen()) return;
      if (e.key === "ArrowLeft") goToSlide(currentSlide - 1);
      if (e.key === "ArrowRight") goToSlide(currentSlide + 1);
    });

    // Touch swipe + Double-Tap to Favourite on the 3:4 Gallery
    if (galleryBox) {
      let startX = 0, startY = 0, lastTapTime = 0;

      galleryBox.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }, { passive: true });

      galleryBox.addEventListener("touchend", e => {
        const dx = startX - e.changedTouches[0].clientX;
        const dy = Math.abs(startY - e.changedTouches[0].clientY);

        if (Math.abs(dx) > 45 && Math.abs(dx) > dy) {
          goToSlide(currentSlide + (dx > 0 ? 1 : -1));
          return;
        }

        // Detect clean double-tap (no swipe)
        if (Math.abs(dx) < 12 && dy < 12) {
          const now = Date.now();
          if (now - lastTapTime < 320) {
            triggerDoubleTapLike(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            lastTapTime = 0;
          } else {
            lastTapTime = now;
          }
        }
      }, { passive: true });

      // Desktop double-click support
      galleryBox.addEventListener("dblclick", e => {
        triggerDoubleTapLike(e.clientX, e.clientY);
      });
    }

    function triggerDoubleTapLike(clientX, clientY) {
      if (!galleryBox) return;
      const rect = galleryBox.getBoundingClientRect();
      const burst = document.createElement("span");
      burst.className = "pdp-heart-burst";
      burst.innerHTML = '<i class="fas fa-heart"></i>';
      burst.style.left = `${clientX - rect.left}px`;
      burst.style.top = `${clientY - rect.top}px`;
      galleryBox.appendChild(burst);
      setTimeout(() => burst.remove(), 750);

      if (!Store.inFavs(product.id)) {
        Store.addFav(product.id, false);
      }
      if (doubleTapToast) doubleTapToast.classList.remove("is-visible");
    }

    // Double-Tap Alert: ONLY when gallery is in view, MAX 5 times per page load
    if (galleryBox && (doubleTapToast || dotsHintEl)) {
      let galleryInView = true;
      let alertCount = 0;
      const MAX_ALERTS = 5;

      if ("IntersectionObserver" in window) {
        const viewObserver = new IntersectionObserver(entries => {
          galleryInView = entries[0].isIntersecting;
          if (!galleryInView && doubleTapToast) {
            doubleTapToast.classList.remove("is-visible");
          }
        }, { threshold: 0.45 });
        viewObserver.observe(galleryBox);
      }

      const fireDoubleTapCue = () => {
        if (alertCount >= MAX_ALERTS) return;
        if (!galleryInView || Drawers.isAnyOpen() || Store.inFavs(product.id)) return;

        alertCount += 1;

        if (doubleTapToast) {
          doubleTapToast.classList.add("is-visible");
          setTimeout(() => doubleTapToast.classList.remove("is-visible"), 3200);
        }
        if (dotsHintEl && dotsWrap) {
          dotsHintEl.classList.add("is-visible");
          dotsWrap.classList.add("is-muted");
          setTimeout(() => {
            dotsHintEl.classList.remove("is-visible");
            dotsWrap.classList.remove("is-muted");
          }, 3200);
        }
      };

      setTimeout(fireDoubleTapCue, 2400);
      const cueInterval = setInterval(() => {
        if (alertCount >= MAX_ALERTS) {
          clearInterval(cueInterval);
          return;
        }
        fireDoubleTapCue();
      }, 14000);
    }

    if (bagBtn) {
      bagBtn.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        Store.toggleCart(product.id, selectedColorIndex, selectedSize);
      });
    }

    if (favBtn) {
      favBtn.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        Store.toggleFav(product.id, false);
      });
    }

    if (buyNowBtn) {
      buyNowBtn.addEventListener("click", () => {
        const colorName = product.colors[selectedColorIndex] ? product.colors[selectedColorIndex].name : "";
        const fullUrl = `${Catalog.siteUrl()}${product.url}`;

        let msg = `*BUY NOW — theGirlyZone*\n\n`;
        msg += `1. *${product.title}*\n`;
        msg += `   Price: UGX ${product.price.toLocaleString("en-US")}\n`;
        if (colorName) msg += `   Color: ${colorName}\n`;
        if (selectedSize) msg += `   Size: ${selectedSize}\n`;
        msg += `   Link: ${fullUrl}\n\n`;
        msg += `*TOTAL: UGX ${product.price.toLocaleString("en-US")}*`;

        trackGA("begin_checkout", {
          currency: "UGX",
          value: product.price,
          items: [{ item_id: product.id, item_name: product.title, price: product.price, quantity: 1 }]
        });

        window.open(`https://wa.me/${Catalog.whatsappNumber()}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
      });
    }

    if (shareBtn) {
      shareBtn.addEventListener("click", () => {
        Drawers.openShare({
          title: product.title,
          text: `Check out ${product.title} (UGX ${product.price.toLocaleString("en-US")}) on theGirlyZone Uganda!`,
          url: window.location.href
        });
      });
    }

    // Expandable Accordions
    $$(".pdp-acc-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".pdp-acc-item");
        const isOpen = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(isOpen));
      });
    });

    // Check if user arrived from a Category/Shop All swatch click
    renderGallery();
    try {
      const handoffRaw = sessionStorage.getItem(STORAGE_KEYS.HANDOFF_COLOR);
      if (handoffRaw) {
        const handoff = JSON.parse(handoffRaw);
        sessionStorage.removeItem(STORAGE_KEYS.HANDOFF_COLOR);
        if (handoff && handoff.id === product.id && Number.isInteger(handoff.c)) {
          selectColor(handoff.c, true);
        }
      }
    } catch (_) { /* ignore */ }

    Store.syncUI();
  }

  // ==========================================================================
  // 4. FAVOURITES PAGE (Saved Lookbook, Move All to Bag & Wishlist Share)
  // ==========================================================================
  function initFavouritesPage() {
    const { $, Catalog, Store, CardUI, Drawers, formatUGX, trackGA } = window.TGZ;

    const listEl = $("#favGrid");
    const emptyEl = $("#favEmpty");
    const summaryBar = $("#favSummaryBar");
    const countEl = $("#favTotalCount");
    const valueEl = $("#favTotalValue");
    const hintBtn = $("#favHintBtn");
    const shareBtn = $("#favShareBtn");
    const recsSection = $("#favRecsSection");
    const recsGrid = $("#favRecsGrid");

    if (!listEl) return;

    async function renderFavourites() {
      await Catalog.load();
      Store.healAgainstCatalog();

      const savedItems = Store.favs.map(id => Catalog.get(id)).filter(Boolean);

      if (savedItems.length === 0) {
        listEl.hidden = true;
        if (summaryBar) summaryBar.hidden = true;
        if (emptyEl) emptyEl.hidden = false;
        if (recsSection) recsSection.hidden = true;
        return;
      }

      if (emptyEl) emptyEl.hidden = true;
      if (summaryBar) summaryBar.hidden = false;
      listEl.hidden = false;

      const totalValue = savedItems.reduce((sum, p) => sum + p.price, 0);
      if (countEl) countEl.textContent = `${savedItems.length} ${savedItems.length === 1 ? "saved look" : "saved looks"}`;
      if (valueEl) valueEl.textContent = formatUGX(totalValue);

      listEl.innerHTML = savedItems.map(item => CardUI.renderCardHTML(item)).join("");
      CardUI.refreshCorners(listEl);
      Store.syncUI(listEl);

      // Build smart recommendations (similar + pairWith, excluding already-saved items)
      if (recsSection && recsGrid) {
        const recIds = new Set();
        savedItems.forEach(item => {
          (item.similar || []).forEach(id => { if (!Store.inFavs(id)) recIds.add(id); });
          (item.pairWith || []).forEach(id => { if (!Store.inFavs(id)) recIds.add(id); });
        });
        const recItems = Array.from(recIds).map(id => Catalog.get(id)).filter(Boolean).slice(0, 4);

        if (recItems.length > 0) {
          recsSection.hidden = false;
          recsGrid.innerHTML = recItems
            .map(item => CardUI.renderCardHTML(item, { useSecondary: true }))
            .join("");
          CardUI.refreshCorners(recsGrid);
          Store.syncUI(recsGrid);
        } else {
          recsSection.hidden = true;
        }
      }
    }

    if (hintBtn) {
      hintBtn.addEventListener("click", () => {
        const savedItems = Store.favs.map(id => Catalog.get(id)).filter(Boolean);
        if (!savedItems.length) return;

        let msg = "";
        if (savedItems.length === 1) {
          const p = savedItems[0];
          msg += `Just dropping a little hint in case you feel like spoiling me 👀✨\n\n`;
          msg += `• *${p.title}* (${formatUGX(p.price)})\n`;
          msg += `  ${Catalog.siteUrl()}${p.url}\n\n`;
          msg += `No pressure... okay maybe a little 🤭💕`;
        } else {
          msg += `Just leaving my theGirlyZone wishlist here in case you feel like spoiling me 👀✨\n\n`;
          savedItems.forEach((p, i) => {
            msg += `${i + 1}. *${p.title}* (${formatUGX(p.price)})\n`;
            msg += `   ${Catalog.siteUrl()}${p.url}\n`;
          });
          msg += `\nPick any one, you literally can't go wrong 🤭💕`;
        }

        trackGA("share", {
          method: "whatsapp_drop_hint",
          content_type: "wishlist",
          item_id: savedItems.map(p => p.id).join(",")
        });

        window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
      });
    }

    if (shareBtn) {
      shareBtn.addEventListener("click", () => {
        const savedItems = Store.favs.map(id => Catalog.get(id)).filter(Boolean);
        if (!savedItems.length) return;
        const lines = savedItems.map((p, i) => `${i + 1}. ${p.title} (${formatUGX(p.price)}) — ${Catalog.siteUrl()}${p.url}`);
        Drawers.openShare({
          title: "My theGirlyZone Wishlist",
          text: `My saved looks on theGirlyZone:\n${lines.join("\n")}`,
          url: `${Catalog.siteUrl()}/shop/`
        });
      });
    }

    document.addEventListener("tgz:favs-change", renderFavourites);
    document.addEventListener("tgz:engine-ready", renderFavourites);
    renderFavourites();
  }

  // ==========================================================================
  // 5. CART PAGE (Inline Color Reselection, Compact Totals, One-Time Notice)
  // ==========================================================================
  function initCartPage() {
    const { $, Catalog, Store, formatUGX, escapeHtml, trackGA } = window.TGZ;

    const listEl = $("#cartList");
    const emptyEl = $("#cartEmpty");
    const totalsBox = $("#cartTotalsBox");
    const totalEl = $("#cartTotal");
    const capPill = $("#cartCapPill");
    const checkoutBtn = $("#cartWhatsappBtn");
    const sliderTrack = $("#waSliderTrack");
    const sliderThumb = $("#waSliderThumb");
    const sliderGlow = $("#waSliderGlow");
    const sliderTarget = $("#waSliderTarget");
    const sliderArrows = $("#waSliderArrows");
    const sliderHint = $("#waSliderHint");
    const noticeEl = $("#cartNoCardNotice");

    if (!listEl) return;

    // One-time "No card needed" notice on page open (auto-dismisses cleanly)
    if (noticeEl) {
      setTimeout(() => noticeEl.classList.add("is-visible"), 450);
      setTimeout(() => noticeEl.classList.remove("is-visible"), 5200);
    }

    async function renderCart() {
      await Catalog.load();
      Store.healAgainstCatalog();

      const entries = Store.cart
        .map(entry => ({ entry, product: Catalog.get(entry.id) }))
        .filter(x => Boolean(x.product));

      const totalUnits = Store.totalBagUnits();
      if (capPill) capPill.textContent = `${totalUnits} / ${window.TGZ.MAX_BAG_ITEMS} items`;

      if (entries.length === 0) {
        listEl.hidden = true;
        if (totalsBox) totalsBox.hidden = true;
        if (emptyEl) emptyEl.hidden = false;
        return;
      }

      if (emptyEl) emptyEl.hidden = true;
      listEl.hidden = false;
      if (totalsBox) totalsBox.hidden = false;

      let subtotal = 0;

      listEl.innerHTML = entries.map(({ entry, product }) => {
        const lineTotal = product.price * entry.q;
        subtotal += lineTotal;

        // Show ONLY in-stock colors (any color marked inStock: false never appears)
        const availColors = product.inStockColors || [];
        const activeColor = availColors.find(c => c.index === entry.c) || availColors[0];
        const imgSrc = Catalog.mainImgUrl(activeColor ? activeColor.preview : product.img);

        const swatchesHTML = availColors.length > 1
          ? `<div class="cart-swatches" role="group" aria-label="Select color">
               ${availColors.map(c => `
                 <button type="button"
                   class="cart-swatch ${activeColor && c.index === activeColor.index ? "is-active" : ""}"
                   data-cart-color="${product.id}:${c.index}"
                   style="background-color:${escapeHtml(c.code)};"
                   title="${escapeHtml(c.name)}"
                   aria-label="${escapeHtml(c.name)}"></button>
               `).join("")}
             </div>`
          : "";

        return `
          <article class="cart-card" data-cart-id="${product.id}">
            <a href="${escapeHtml(product.url)}" class="cart-card__media">
              <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(product.title)}" loading="lazy">
            </a>
            <div class="cart-card__body">
              <div class="cart-card__top">
                <h3 class="cart-card__title"><a href="${escapeHtml(product.url)}">${escapeHtml(product.title)}</a></h3>
                <button type="button" class="cart-card__remove" data-cart-remove="${product.id}" aria-label="Remove item">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <p class="cart-card__price">${formatUGX(lineTotal)}${entry.q > 1 ? ` <span class="cart-card__unit">(${formatUGX(product.price)} each)</span>` : ""}</p>
              ${activeColor ? `<p class="cart-card__meta">Color: <strong>${escapeHtml(activeColor.name)}</strong>${entry.s ? ` &bull; Size: <strong>${escapeHtml(entry.s)}</strong>` : ""}</p>` : ""}
              ${swatchesHTML}
              <div class="cart-card__actions">
                <div class="qty-stepper">
                  <button type="button" class="qty-btn" data-cart-qty="${product.id}:-1" aria-label="Decrease quantity">&minus;</button>
                  <span class="qty-val">${entry.q}</span>
                  <button type="button" class="qty-btn" data-cart-qty="${product.id}:1" aria-label="Increase quantity">+</button>
                </div>
                <!-- Save button paused until needed
                <button type="button" class="cart-save-btn" data-cart-save="${product.id}">
                  <i class="far fa-heart"></i> Save
                </button>
                -->
              </div>
            </div>
          </article>`;
      }).join("");

  if (totalEl) totalEl.textContent = formatUGX(subtotal);
      }

    // Delegated Cart card interactions
    listEl.addEventListener("click", e => {
      const colorBtn = e.target.closest("[data-cart-color]");
      if (colorBtn) {
        const [id, cIdx] = colorBtn.dataset.cartColor.split(":").map(Number);
        Store.updateCartColor(id, cIdx);
        return;
      }

      const qtyBtn = e.target.closest("[data-cart-qty]");
      if (qtyBtn) {
        const [id, delta] = qtyBtn.dataset.cartQty.split(":").map(Number);
        Store.updateCartQty(id, delta);
        return;
      }

      const removeBtn = e.target.closest("[data-cart-remove]");
      if (removeBtn) {
        Store.removeFromCart(Number(removeBtn.dataset.cartRemove), true);
        return;
      }

      // "SAVE" Click handler
      /*const saveBtn = e.target.closest("[data-cart-save]");
      if (saveBtn) {
        const id = Number(saveBtn.dataset.cartSave);
        Store.addFav(id, true);
        Store.removeFromCart(id, false);
        Toast.show("Moved to favourites", { tone: "pink" });
      }
         */
    });
   

    // WhatsApp Checkout (circulates full links, NO SKU)
// Shared WhatsApp Checkout Launcher (circulates full links, NO SKU)
    function launchWhatsAppOrder(isMobileSlider = false) {
      const entries = Store.cart
        .map(entry => ({ entry, product: Catalog.get(entry.id) }))
        .filter(x => Boolean(x.product));

      if (!entries.length) return;

      let total = 0;
      let msg = `*NEW ORDER — theGirlyZone*\n\n`;
      entries.forEach(({ entry, product }, i) => {
        const lineTotal = product.price * entry.q;
        total += lineTotal;
        const colorObj = (product.inStockColors || []).find(c => c.index === entry.c) || product.inStockColors[0];
        msg += `${i + 1}. *${product.title}*${entry.q > 1 ? ` (x${entry.q})` : ""}\n`;
        msg += `   Price: UGX ${lineTotal.toLocaleString("en-US")}\n`;
        if (colorObj) msg += `   Color: ${colorObj.name}\n`;
        if (entry.s) msg += `   Size: ${entry.s}\n`;
        msg += `   Link: ${Catalog.siteUrl()}${product.url}\n\n`;
      });
      msg += `*TOTAL: UGX ${total.toLocaleString("en-US")}*`;

      trackGA("begin_checkout", {
        currency: "UGX",
        value: total,
        items: entries.map(({ entry, product }) => ({
          item_id: product.id,
          item_name: product.title,
          price: product.price,
          quantity: entry.q
        }))
      });

      const waUrl = `https://wa.me/${Catalog.whatsappNumber()}?text=${encodeURIComponent(msg)}`;
      // Direct handoff on mobile prevents iOS Safari popup blocking after snap animation
      if (isMobileSlider) window.location.href = waUrl;
      else window.open(waUrl, "_blank", "noopener");
    }

    // Desktop Click Checkout
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => launchWhatsAppOrder(false));
    }

    /// Mobile Full-Width Translucent Slider (Elastic -> 80%, Magnetic Snap at 80.5% -> 100%)
    if (sliderTrack && sliderThumb && sliderGlow && sliderTarget) {
      let dragging = false;
      let locked = false;
      let startX = 0;
      let maxTravel = 0;
      const SNAP_THRESHOLD = 0.805;

      // Repeating hide-in-out guide intervals: 2s, 3s, 2s, 4s, 5s -> repeat
      const HINT_INTERVALS = [2000, 3000, 2000, 4000, 5000];
      const HINT_VISIBLE_MS = 2200;
      let hintStep = 0;
      let hintShowTimer = null;
      let hintHideTimer = null;

      const hideHintNow = () => {
        clearTimeout(hintHideTimer);
        if (sliderHint) sliderHint.classList.remove("is-visible");
      };

      const scheduleNextHint = () => {
        clearTimeout(hintShowTimer);
        const waitMs = HINT_INTERVALS[hintStep];
        hintStep = (hintStep + 1) % HINT_INTERVALS.length;

        hintShowTimer = setTimeout(() => {
          const isMobileView = window.innerWidth < 768;
          if (sliderHint && isMobileView && Store.cart.length > 0 && !dragging && !locked && !document.hidden) {
            sliderHint.classList.add("is-visible");
            hintHideTimer = setTimeout(() => {
              sliderHint.classList.remove("is-visible");
              scheduleNextHint();
            }, HINT_VISIBLE_MS);
          } else {
            scheduleNextHint();
          }
        }, waitMs);
      };
      scheduleNextHint();

      const setVisual = (x, rawProgress) => {
        const prox = Math.min(1, Math.max(0, x / maxTravel));
        const dist = 1 - prox;

        // Bag stays enlarged & tilted forward while held/sliding
        const bagTilt = 10 + prox * 6; // 10deg -> 16deg forward lean
        const bagScale = 1.14 + prox * 0.04;
        sliderThumb.style.transform = `translate3d(${x}px, 0, 0) scale(${bagScale}) rotate(${bagTilt}deg)`;

        // WA logo size is inversely proportional to remaining distance
        const waScale = 1 + 0.36 * (prox / (0.8 + 0.6 * dist));
        sliderTarget.style.transform = `scale(${waScale.toFixed(3)})`;

        // Smooth obsidian -> WhatsApp green opacity fill & arrow fade
        sliderGlow.style.opacity = String(Math.min(1, rawProgress / SNAP_THRESHOLD));
        if (sliderArrows) {
          sliderArrows.style.opacity = String(Math.max(0, 1 - rawProgress * 1.6));
        }
        sliderTrack.setAttribute("aria-valuenow", String(Math.round(rawProgress * 100)));
      };

      const resetSlider = (animate = true) => {
        dragging = false;
        locked = false;
        sliderTrack.classList.remove("is-holding", "is-snapping", "is-complete");
        if (animate) sliderTrack.classList.add("is-returning");
        else sliderTrack.classList.remove("is-returning");

        sliderThumb.style.transform = "translate3d(0px, 0, 0) scale(1) rotate(0deg)";
        sliderThumb.style.opacity = "1";
        sliderTarget.style.transform = "scale(1)";
        sliderGlow.style.opacity = "0";
        if (sliderArrows) sliderArrows.style.opacity = "1";
        sliderTrack.setAttribute("aria-valuenow", "0");
      };

      const triggerMagneticSnap = () => {
        locked = true;
        dragging = false;
        hideHintNow();
        sliderTrack.classList.remove("is-returning", "is-holding");
        sliderTrack.classList.add("is-snapping", "is-complete");

        sliderThumb.style.transform = `translate3d(${maxTravel}px, 0, 0) scale(0.55) rotate(18deg)`;
        sliderThumb.style.opacity = "0";
        sliderTarget.style.transform = "";
        sliderGlow.style.opacity = "1";
        if (sliderArrows) sliderArrows.style.opacity = "0";
        sliderTrack.setAttribute("aria-valuenow", "100");

        if (navigator.vibrate) navigator.vibrate([18, 30, 22]);

        // Let the celebratory WA burst peak cleanly, then open WhatsApp
        setTimeout(() => {
          launchWhatsAppOrder(true);
        }, 360);

        // Fallback reset if shopper cancels app handoff
        setTimeout(() => resetSlider(true), 2400);
      };

      sliderTrack.addEventListener("pointerdown", e => {
        if (locked || !Store.cart.length) return;
        maxTravel = Math.max(1, sliderTrack.clientWidth - sliderThumb.offsetWidth - 10);
        dragging = true;
        startX = e.clientX;
        hideHintNow();
        sliderTrack.classList.remove("is-returning", "is-snapping", "is-complete");
        sliderTrack.classList.add("is-holding");
        sliderTrack.setPointerCapture(e.pointerId);

        // Immediate playful bag tilt + enlarge on hold
        sliderThumb.style.transform = "translate3d(0px, 0, 0) scale(1.14) rotate(10deg)";
      });

      sliderTrack.addEventListener("pointermove", e => {
        if (!dragging || locked) return;
        const dx = Math.max(0, e.clientX - startX);
        const rawProgress = Math.min(1, dx / maxTravel);

        if (rawProgress >= SNAP_THRESHOLD) {
          triggerMagneticSnap();
          return;
        }

        // Elastic pull feel: responsive 1:1 early, rubbery tension approaching 80%
        const eased = rawProgress <= 0.55
          ? rawProgress
          : 0.55 + (rawProgress - 0.55) * 0.85;
        setVisual(eased * maxTravel, rawProgress);
      });

      const endDrag = () => {
        if (!dragging || locked) return;
        resetSlider(true);
      };

      sliderTrack.addEventListener("pointerup", endDrag);
      sliderTrack.addEventListener("pointercancel", endDrag);

      document.addEventListener("visibilitychange", () => {
        if (!document.hidden && locked) resetSlider(false);
      });
    }

    document.addEventListener("tgz:cart-change", renderCart);
    document.addEventListener("tgz:engine-ready", renderCart);
    renderCart();
  }
})();