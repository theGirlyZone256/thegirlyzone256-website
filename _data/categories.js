/* ============================================================================
 * FILE: _data/categories.js
 * PURPOSE: Defines the 6 core storefront categories (/assets/images/categories/)
 *          and Filter Panel chips (/assets/images/filters/).
 * ============================================================================ */

module.exports = {
  // 6 Main Categories (Welcome Grid + Rotating Shop All Stack + Category Routes)
  list: [
    {
      slug: "dresses",
      name: "Dresses",
      subtitle: "Short & Long Dresses",
      image: "dresses.webp", // -> /assets/images/categories/dresses.webp
      seoTitle: "Women's Dresses in Kampala | theGirlyZone Uganda",
      seoDesc: "Shop bodycon, satin maxi, party, and everyday dresses in Kampala with same-day delivery."
    },
    {
      slug: "tops",
      name: "Tops",
      subtitle: "Blouses, Knits & Jackets",
      image: "tops.webp",
      seoTitle: "Trendy Women's Tops & Blouses in Kampala | theGirlyZone Uganda",
      seoDesc: "Off-shoulder tops, ruched blouses, cozy pullovers, and statement jackets available in Kampala."
    },
    {
      slug: "bottoms",
      name: "Bottoms",
      subtitle: "Wrap, Mini & Maxi Skirts",
      image: "bottoms.webp",
      seoTitle: "Women's Skirts & Bottoms in Kampala | theGirlyZone Uganda",
      seoDesc: "Floral wrap skirts, office pencil skirts, and ruffle minis curated at Top City Plaza, Kampala."
    },
    {
      slug: "sets",
      name: "Sets",
      subtitle: "2-Piece Co-ords & Pajamas",
      image: "sets.webp",
      seoTitle: "2-Piece Sets & Silk Pajamas in Kampala | theGirlyZone Uganda",
      seoDesc: "Matching lounge sets, linen co-ords, and breathable silk-cotton pajamas delivered across Kampala."
    },
    {
      slug: "bags",
      name: "Bags",
      subtitle: "Satchels & Everyday Totes",
      image: "bags.webp",
      seoTitle: "Women's Handbags, Satchels & Totes in Kampala | theGirlyZone Uganda",
      seoDesc: "Structured box satchels and everyday woven cotton totes curated for effortless Kampala styling."
    },
    {
      slug: "others",
      name: "Others",
      subtitle: "Curated Boutique Finds",
      image: "others.webp",
      seoTitle: "Accessories & Boutique Finds in Kampala | theGirlyZone Uganda",
      seoDesc: "Finishing touches and limited boutique pieces curated by theGirlyZone in Kampala."
    }
  ],

  // Dedicated Filter Panel Metadata (images in /assets/images/filters/)
  filters: {
    moods: [
      { id: "elegant",  label: "Elegant",  image: "elegant.webp" },
      { id: "free",     label: "Free",     image: "free.webp" },
      { id: "romantic", label: "Romantic", image: "romantic.webp" },
      { id: "smart",    label: "Smart",    image: "smart.webp" }
    ],
    occasions: [
      { id: "casual",   label: "Casual",   image: "casual.webp" },
      { id: "office",   label: "Office",   image: "office.webp" },
      { id: "party",    label: "Party",    image: "party.webp" },
      { id: "date",     label: "Date",     image: "date.webp" },
      { id: "vacation", label: "Vacation", image: "vacation.webp" }
    ],
    priceBrackets: [
      { id: "under-25k", label: "Under 25K",  min: 0,     max: 24999 },
      { id: "25k-45k",   label: "25K – 45K",  min: 25000, max: 45000 },
      { id: "45k+",      label: "45K & Up",   min: 45001, max: Infinity }
    ]
  }
};