/* ============================================================================
 * FILE: utils/productEngine.js
 * PURPOSE: Validates raw products at build time, expands positional arrays,
 *          builds numerically sorted _## PDP galleries, extracts fabrics from
 *          `desc`, and computes Same-Category & Cross-Category (`pairWith`) IDs.
 * USED BY: _data/products.js -> module.exports = enrichProducts(rawProducts)
 * ============================================================================ */

const fs = require("fs");
const path = require("path");
const site = require("../_data/site.js");

// ============================================================================
// 1. ENGINE SETTINGS
// ============================================================================
const CONFIG = {
  // Missing or case-mismatched filenames log warnings locally and halt builds
  // automatically on Netlify (CI) or when running `npm run build:strict`.
  STRICT_IMAGES: process.env.CI === "true" || process.env.STRICT_IMAGES === "true",

  // Since rawProducts is currently ordered 1 -> 55 (newest at bottom), keep true
  // so newest items get freshnessRank 0. Set false if you reverse rawProducts.
  NEWEST_AT_BOTTOM: true,

  // Relative paths from project root to verify image files on disk
  MAIN_IMG_DIR: path.resolve(process.cwd(), "assets/images/main"),
  SEC_IMG_DIR:  path.resolve(process.cwd(), "assets/images/secondary")
};

// Fabric dictionary scanned automatically against `desc` for Search & JSON-LD
const FABRIC_MAP = {
  cotton:   ["cotton"],
  silk:     ["silk", "silky"],
  satin:    ["satin", "silky", "luminous sheen"],
  linen:    ["linen"],
  lace:     ["lace"],
  leather:  ["leather"],
  fleece:   ["fleece"],
  knit:     ["knit", "knitted"],
  stretch:  ["stretch", "stretchy", "bodycon", "curve-hugging"],
  chiffon:  ["chiffon"],
  denim:    ["denim"],
  velvet:   ["velvet"],
  fur:      ["fur", "faux-fur"]
};

// Cross-category styling matrix for `pairWithIds` (ordered by styling strength)
const COMPLEMENT_MATRIX = {
  dresses: ["bags", "others"],
  tops:    ["bags", "others", "bottoms"],
  bottoms: ["others", "tops", "bags"],
  sets:    ["bags", "others"],
  bags:    ["dresses", "sets", "tops", "bottoms", "others"],
  others:  ["dresses", "sets", "tops", "bottoms", "bags"]
};

// ============================================================================
// 2. HELPER UTILITIES
// ============================================================================

/** Convert any title to a clean URL slug */
function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Expand a suffix ("02") or pass through a full ".webp" filename */
function resolveMainImage(title, token) {
  return token.endsWith(".webp") ? token : `${title}_${token}.webp`;
}

/** Expand secondary thumb ("02" -> "s<Title>_02.webp", default "00") */
function resolveSecondaryImage(title, thumbToken) {
  if (!thumbToken) return `s${title}_00.webp`;
  return thumbToken.endsWith(".webp") ? thumbToken : `s${title}_${thumbToken}.webp`;
}

/** Extract trailing numeric index from "_00.webp", "_14.webp" for true numeric sort */
function extractImageOrder(filename) {
  const match = filename.match(/_(\d+)\.webp$/i);
  return match ? parseInt(match[1], 10) : 9999;
}

/** Derive price filter bracket from UGX integer */
function getPriceBracket(price) {
  if (price < 25000) return "under-25k";
  if (price <= 45000) return "25k-45k";
  return "45k+";
}

/** Scan `desc` and extract normalized fabric tags for search + SEO schema */
function extractFabrics(desc) {
  const lower = String(desc || "").toLowerCase();
  const found = new Set();
  for (const [fabric, triggers] of Object.entries(FABRIC_MAP)) {
    if (triggers.some(term => lower.includes(term))) {
      found.add(fabric);
    }
  }
  return Array.from(found);
}

/** Read real case-sensitive filenames from disk (catches Netlify Linux 404s on Windows!) */
function loadDiskFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return null;
  const exactSet = new Set();
  const lowerMap = new Map();
  for (const file of fs.readdirSync(dirPath)) {
    exactSet.add(file);
    lowerMap.set(file.toLowerCase(), file);
  }
  return { exactSet, lowerMap };
}

/** Build a compact, deduplicated lowercase token string for instant fuzzy search */
function buildSearchBlob(product) {
  const parts = [
    product.title,
    product.desc,
    product.category,
    product.subCategory.replace(/-/g, " "),
    ...product.moods,
    ...product.occasions,
    ...product.fabrics,
    ...product.colors.map(c => c.name),
    String(product.price)
  ];
  return parts.join(" ").toLowerCase().replace(/\s+/g, " ").trim();
}

// ============================================================================
// 3. MAIN ENRICHMENT & BUILD-TIME VALIDATION PIPELINE
// ============================================================================
function enrichProducts(rawProducts) {
  const errors = [];
  const warnings = [];
  const seenIds = new Set();
  const seenSlugs = new Set();

  const mainDisk = loadDiskFiles(CONFIG.MAIN_IMG_DIR);
  const secDisk  = loadDiskFiles(CONFIG.SEC_IMG_DIR);

  function checkImage(disk, folderLabel, filename, id) {
    if (!disk) return; // Skip silently if asset folder not mounted yet
    if (disk.exactSet.has(filename)) return;

    const actualCase = disk.lowerMap.get(filename.toLowerCase());
    const msg = actualCase
      ? `[ID ${id}] Case mismatch in ${folderLabel}/: expected "${filename}", found "${actualCase}" (WILL 404 ON NETLIFY)`
      : `[ID ${id}] Missing image in ${folderLabel}/: "${filename}"`;

    if (CONFIG.STRICT_IMAGES) errors.push(msg);
    else warnings.push(msg);
  }

  // Normalize order so newest items always sit at index 0 (freshnessRank 0)
  const orderedRaw = CONFIG.NEWEST_AT_BOTTOM ? [...rawProducts].reverse() : [...rawProducts];

  // --- PASS 1: Validate & Compile Individual Products ---
  const compiled = orderedRaw.map((raw, index) => {
    const id = raw.id;

    // 1. Validate ID & Title
    if (!Number.isInteger(id) || id <= 0) {
      errors.push(`[Index ${index}] Invalid or missing integer id.`);
    } else if (seenIds.has(id)) {
      errors.push(`[ID ${id}] Duplicate product ID detected.`);
    }
    seenIds.add(id);

    if (!raw.title || typeof raw.title !== "string") {
      errors.push(`[ID ${id}] Missing product title.`);
    }

    const slug = raw.slug || slugify(raw.title);
    if (seenSlugs.has(slug)) {
      errors.push(`[ID ${id}] Duplicate slug "${slug}".`);
    }
    seenSlugs.add(slug);

    // 2. Validate Price & Description
    if (typeof raw.price !== "number" || raw.price <= 0) {
      errors.push(`[ID ${id}] Price must be a positive number (got ${raw.price}).`);
    }
    if (!raw.desc || /N\/A/i.test(raw.desc)) {
      errors.push(`[ID ${id}] Description is missing or contains "N/A".`);
    }

    // 3. Validate Positional `taxonomy: [category, subCategory]`
    const [category, subCategory] = Array.isArray(raw.taxonomy) ? raw.taxonomy : [];
    if (!site.vocab.categories.includes(category)) {
      errors.push(`[ID ${id}] Invalid category "${category}". Allowed: ${site.vocab.categories.join(", ")}`);
    }
    if (!subCategory || typeof subCategory !== "string") {
      errors.push(`[ID ${id}] Missing subCategory in taxonomy[1].`);
    }

    // 4. Validate Positional `vibes: [[...moods], [...occasions]]`
    const [rawMoods = [], rawOccasions = []] = Array.isArray(raw.vibes) ? raw.vibes : [];
    const moods = [...new Set(rawMoods)];
    const occasions = [...new Set(rawOccasions)];

    if (moods.length === 0) errors.push(`[ID ${id}] Must have at least 1 mood.`);
    moods.forEach(m => {
      if (!site.vocab.moods.includes(m)) {
        errors.push(`[ID ${id}] Invalid mood "${m}". Allowed: ${site.vocab.moods.join(", ")}`);
      }
    });

    if (occasions.length === 0) errors.push(`[ID ${id}] Must have at least 1 occasion.`);
    occasions.forEach(o => {
      if (!site.vocab.occasions.includes(o)) {
        errors.push(`[ID ${id}] Invalid occasion "${o}". Allowed: ${site.vocab.occasions.join(", ")}`);
      }
    });

    // 5. Validate Optional `sizes` (Reject "one-size")
    const sizes = Array.isArray(raw.sizes) ? raw.sizes : [];
    sizes.forEach(s => {
      if (!site.vocab.sizes.includes(s)) {
        errors.push(`[ID ${id}] Invalid size "${s}". Omit \`sizes\` instead of using "one-size".`);
      }
    });

    // 6. Expand Positional `colors: [name, hex, [suffixes...], inStock?]`
    if (!Array.isArray(raw.colors) || raw.colors.length === 0) {
      errors.push(`[ID ${id}] Must define at least 1 color tuple.`);
    }

    const galleryEntries = [];
    const seenGalleryFiles = new Set();

    const colors = (raw.colors || []).map((tuple, colorIndex) => {
      const [name, code, suffixes, inStockFlag] = tuple;
      const inStock = inStockFlag !== false; // Defaults to true unless explicitly false

      if (!name || !/^#[0-9a-fA-F]{6}$/.test(code || "")) {
        errors.push(`[ID ${id}] Color #${colorIndex} needs a valid name and 6-digit hex (got "${name}", "${code}").`);
      }
      if (!Array.isArray(suffixes) || suffixes.length === 0) {
        errors.push(`[ID ${id}] Color "${name}" must have at least 1 image suffix.`);
      }

      const images = (suffixes || []).map(token => {
        const file = resolveMainImage(raw.title, token);
        checkImage(mainDisk, "main", file, id);

        if (inStock && !seenGalleryFiles.has(file)) {
          seenGalleryFiles.add(file);
          galleryEntries.push({
            file,
            colorIndex,
            order: extractImageOrder(file)
          });
        }
        return file;
      });

      return {
        index: colorIndex,
        name,
        code,
        preview: images[0], // Used by Category/Shop All/Cart swatch switcher
        images,
        inStock
      };
    });

    // Sort master PDP gallery ascending by _00, _01, _02 ... _14
    galleryEntries.sort((a, b) => a.order - b.order);
    const gallery = galleryEntries.map(({ file, colorIndex }) => ({ file, colorIndex }));

    // Resolve Secondary Image (for "You Might Also Like" grids)
    const secondaryImage = resolveSecondaryImage(raw.title, raw.thumb);
    checkImage(secDisk, "secondary", secondaryImage, id);

    const availability = raw.availability !== false && colors.some(c => c.inStock);
    const fabrics = extractFabrics(raw.desc);

    const product = {
      id,
      slug,
      url: `/product/${slug}/`,
      title: raw.title,
      desc: raw.desc,
      price: raw.price,
      priceBracket: getPriceBracket(raw.price),
      availability,
      pinned: Boolean(raw.pinned),
      pinRank: typeof raw.pinned === "number" && raw.pinned > 0 ? raw.pinned : (raw.pinned === true ? 1000 : Infinity),
      freshnessRank: index,
      category,
      subCategory,
      moods,
      occasions,
      sizes,
      hasSizes: sizes.length > 0,
      fitNote: sizes.length === 0 ? site.unknownSizeMessage : null,
      secondaryImage,
      defaultImage: colors[0]?.preview || gallery[0]?.file || "",
      gallery,
      colors,
      fabrics,
      manualPairWith: Array.isArray(raw.pairWith) ? raw.pairWith : []
    };

    product.searchBlob = buildSearchBlob(product);
    return product;
  });

  // Halt build immediately if any data integrity error was detected
  if (warnings.length > 0) {
    console.warn(`\n⚠️  [theGirlyZone ProductEngine] ${warnings.length} image warning(s):`);
    warnings.slice(0, 15).forEach(w => console.warn("   " + w));
    if (warnings.length > 15) console.warn(`   ... and ${warnings.length - 15} more.\n`);
  }

  if (errors.length > 0) {
    console.error(`\n❌ [theGirlyZone ProductEngine] Build halted — ${errors.length} catalog error(s):`);
    errors.forEach(e => console.error("   • " + e));
    throw new Error(`ProductEngine validation failed with ${errors.length} error(s).`);
  }

  // --- PASS 2: Compute Same-Category (`similarIds`) & Cross-Category (`pairWithIds`) ---
  const liveProducts = compiled.filter(p => p.availability);
  const liveMap = new Map(liveProducts.map(p => [p.id, p]));

  function overlapCount(a, b) {
    return a.filter(item => b.includes(item)).length;
  }

  compiled.forEach(product => {
    // A. Same-Category Recommendations ("You Might Also Like")
    product.similarIds = liveProducts
      .filter(candidate => candidate.id !== product.id && candidate.category === product.category)
      .map(candidate => {
        let score = 0;
        if (candidate.subCategory === product.subCategory) score += 3;
        score += overlapCount(product.moods, candidate.moods) * 2;
        score += overlapCount(product.occasions, candidate.occasions) * 2;
        if (Math.abs(candidate.price - product.price) <= 15000) score += 1;
        return { id: candidate.id, score, rank: candidate.freshnessRank };
      })
      .sort((a, b) => b.score - a.score || a.rank - b.rank)
      .slice(0, 4)
      .map(item => item.id);

    // B. Cross-Category Outfit Builder (`pairWithIds` — strictly DIFFERENT category)
    const partnerTiers = COMPLEMENT_MATRIX[product.category] || [];
    const pinned = product.manualPairWith.filter(
      pid => pid !== product.id && liveMap.has(pid) && liveMap.get(pid).category !== product.category
    );

    const autoPairs = liveProducts
      .filter(candidate =>
        candidate.id !== product.id &&
        candidate.category !== product.category &&
        partnerTiers.includes(candidate.category) &&
        !pinned.includes(candidate.id)
      )
      .map(candidate => {
        const tierIndex = partnerTiers.indexOf(candidate.category);
        let score = tierIndex === 0 ? 5 : tierIndex === 1 ? 3 : tierIndex > 1 ? 1 : 0;
        score += overlapCount(product.moods, candidate.moods) * 2;
        score += overlapCount(product.occasions, candidate.occasions) * 2;
        return { id: candidate.id, score, rank: candidate.freshnessRank };
      })
      .sort((a, b) => b.score - a.score || a.rank - b.rank)
      .map(item => item.id);

    product.pairWithIds = [...pinned, ...autoPairs].slice(0, 4);

// Strip internal helper property before exporting
    delete product.manualPairWith;
  });

  // Float pinned products to the top (pinned: 1, 2, 3... first -> pinned: true -> newest arrivals)
  compiled.sort((a, b) => a.pinRank - b.pinRank || a.freshnessRank - b.freshnessRank);
  compiled.forEach(p => delete p.pinRank);

  console.log(`✅👌 [theGirlyZone ProductEngine] Validated & compiled ${compiled.length} products (${liveProducts.length} live).`);
  return compiled;
}

module.exports = enrichProducts;