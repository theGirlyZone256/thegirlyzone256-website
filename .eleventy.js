/* ============================================================================
 * FILE: .eleventy.js
 * PURPOSE: Configures Eleventy build pipeline, passthrough assets, SEO/UGX
 *          Liquid filters, and live product collections.
 * ============================================================================ */

module.exports = function (eleventyConfig) {
  // 1. Copy static assets & Netlify redirects directly to _site/
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("_redirects");

  // 2. Watch CSS, JS, and ProductEngine for live reload during `npm run dev`
  eleventyConfig.addWatchTarget("./assets/css/");
  eleventyConfig.addWatchTarget("./assets/js/");
  eleventyConfig.addWatchTarget("./utils/");

  // 3. Liquid Filters
  // Format integer UGX prices: 70000 -> "70,000"
  eleventyConfig.addFilter("formatUGX", function (value) {
    const num = Number(value) || 0;
    return num.toLocaleString("en-US");
  });

  // Safe JSON serialization for <script> tags and JSON-LD
  eleventyConfig.addFilter("json", function (value) {
    return JSON.stringify(value);
  });

  // URL-encode filenames with spaces for og:image & JSON-LD (keeps slashes intact)
  eleventyConfig.addFilter("encodeImg", function (filename) {
    return encodeURIComponent(String(filename || "")).replace(/%2F/g, "/");
  });

  // Filter product arrays by category slug
  eleventyConfig.addFilter("byCategory", function (products, categorySlug) {
    if (!Array.isArray(products)) return [];
    return products.filter(p => p.availability && p.category === categorySlug);
  });

  // Resolve an array of product IDs (e.g., similarIds / pairWithIds) into full product objects
  eleventyConfig.addFilter("byIds", function (allProducts, idList) {
    if (!Array.isArray(allProducts) || !Array.isArray(idList)) return [];
    const lookup = new Map(allProducts.map(p => [p.id, p]));
    return idList.map(id => lookup.get(id)).filter(Boolean);
  });

  // Count live products in a specific category (for Welcome category badges)
  eleventyConfig.addFilter("countCategory", function (products, categorySlug) {
    if (!Array.isArray(products)) return 0;
    return products.filter(p => p.availability && p.category === categorySlug).length;
  });

  // ISO date string for sitemap.xml <lastmod>
  eleventyConfig.addFilter("isoDate", function () {
    return new Date().toISOString().split("T")[0];
  });

  // 4. Directory Configuration (clean root layout -> compiles into _site/)
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["liquid", "html", "md"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};