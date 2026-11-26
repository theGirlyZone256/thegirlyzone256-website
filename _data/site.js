/* ============================================================================
 * FILE: _data/site.js
 * PURPOSE: Global brand identity, BitWare Technologies Ltd credits, Kampala
 *          boutique operations, WhatsApp routing, and strict tag vocabularies.
 * ============================================================================ */

module.exports = {
  name: "theGirlyZone",
  legalName: "theGirlyZone Uganda",
  tagline: "where style meets affordability",
  url: "https://thegirlyzone.com",
  currency: "UGX",
  ga4Id: "G-9KVBZGRJ6L",

  // Boutique Contacts & WhatsApp Checkout
  whatsappNumber: "256744868456",
  phones: ["+256 777 645 472", "+256 756 588 826", "+256 752 066 276"],
  email: "shop.thegirlyzone@gmail.com",
  location: {
    shop: "Top City Plaza, Shop No. LT 78",
    landmark: "Opposite Ham Shopping Grounds",
    city: "Kampala",
    country: "UG"
  },
  hours: {
    weekdays: "Monday - Saturday: 7:30 AM - 7:30 PM",
    sunday: "Sunday: 11:00 AM - 6:30 PM"
  },
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61581841650975&mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/thegirlyzone_official?igsh=MXd3b29oOWRuN3h1cA==",
    tiktok: "https://www.tiktok.com/@thegirlyzone_official?_t=ZM-8zM9BHadNIb&_r=1",
    whatsappChannel: "https://whatsapp.com/channel/0029Vb5WMMdDJ6GtKChLhR0m"
  },

  // Developer & Architect Credits
  developer: {
    name: "BitWare Technologies Ltd",
    logo: "btw_logo.webp",
    email: "dev.bitware@gmail.com",
    phones: ["0706 338 694", "0780 537 744"],
    tagline: "Engineering modern web systems & digital commerce."
  },

  // Dedicated Asset Roots
  paths: {
    mainImages: "/assets/images/main/",
    secondaryImages: "/assets/images/secondary/",
    categoryImages: "/assets/images/categories/",
    filterImages: "/assets/images/filters/",
    heroImages: "/assets/images/hero-section/",
    logos: "/assets/images/logos/",
    brandLogo: "/assets/images/logos/tgz_logo.webp",
    footerLogo: "/assets/images/logos/tgz.webp",
    devLogo: "/assets/images/logos/btw_logo.webp"
  },

  // Strict Build-Time Validation Vocabularies
  vocab: {
    categories: ["dresses", "tops", "bottoms", "sets", "bags", "others"],
    moods: ["elegant", "free", "romantic", "smart"],
    occasions: ["casual", "office", "party", "date", "vacation"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },

  // Shown on PDP whenever a product omits `sizes`
  unknownSizeMessage: "Message us on WhatsApp for exact fit & measurements."
};