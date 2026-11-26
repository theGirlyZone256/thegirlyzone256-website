/* ============================================================================
 * FILE: _data/archive.js
 * PURPOSE: Compact 1-line stubs for sold-out products so old WhatsApp links
 *          and Google rankings never hit a 404.
 *          Graduate entries older than 3–6 months into Netlify `_redirects`.
 *
 * FORMAT:  [id, slug, title, category, price, secondaryImage]
 * ============================================================================ */

const rawArchive = [
  // Example:
  // [4, "black-bodycon-party-dress", "Black Bodycon Party Dress", "dresses", 50000, "sBlack Bodycon Party Dress_01.webp"]
];

module.exports = rawArchive.map(([id, slug, title, category, price, secondaryImage]) => ({
  id,
  slug,
  url: `/product/${slug}/`,
  title,
  category,
  price,
  secondaryImage,
  archived: true
}));