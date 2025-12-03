// Main (900x1200)px in webp format.
// Hero (1600x900)px in webp format.
// Secondary (600x800)px in webp format.

// ======================================================================================================================
// _data/products.js
const products = [
  {
    // CORE IDENTIFIERS
    id: 1,
    slug: "classic-little-black-dress",
    
    // DISPLAY & SEO FIELDS
    title: "Classic Little Black Dress",
    shortDescription: "Timeless black dress for any occasion",
    
    // PRICING & AVAILABILITY
    price: 3000,
    availability: false,
    
    // IMAGES (all .webp)
    mainImages: ["db1.webp", "db2.webp", "db3.webp"],
    secondaryImage: "sdb.webp",
    
    // COLOR VARIANTS ARRAY - CRITICAL FOR PRODUCT PAGES & CARDS
    colors: [
      {
        name: "Black",
        code: "#000000",
        mainImages: ["db1.webp"],
        secondaryImage: "db1.webp",
        availability: true
      },
      {
        name: "Navy Blue", 
        code: "#000080",
        mainImages: ["db3.webp"],
        secondaryImage: "db3.webp",
        availability: true
      }
    ],
    
    // SEARCH & FILTERING
    category: "dresses",
    mood: ["elegant", "classic"],
    occasion: ["evening", "cocktail", "formal"],
    sizeRange: ["small", "medium", "large"],
    colorNames: ["black", "navy blue"],
    material: "premium stretch fabric",
    
    // SEO & SEARCH
    searchKeywords: ["little black dress", "LBD", "cocktail dress"],
    
    // RECOMMENDATIONS
    recommendations: [2, 10],
    tags: ["dress", "black", "elegant"],
    
    featured: true
  },
  {
    id: 2,
    slug: "midnight-bloom-ruffle-mini",
    title: "Midnight Bloom Ruffle Mini",
    shortDescription: "Aplayful, high-waisted mini-skirt featuring a dark floral print.",
    price: 20000,
    availability: true,
    mainImages: ["fsk.webp", "fsk1.webp", "fsk2.webp"],
    secondaryImage: "sfsk.webp",
    colors: [
      {
        name: "Black(Floral)",
        code: "#1f1f1fff",
        mainImages: ["fsk.webp"],
        secondaryImage: "sfsk.webp",
        availability: true
      },

    ],
    category: "skirts",
    mood: ["casual", "romantic"],
    occasion: ["daytime", "brunch", "beach"],
    sizeRange: ["small", "medium"],
    colorNames: ["black",],
    material: "N/A",
    searchKeywords: ["black", "mini skirt", "floral", "hot day"],
    recommendations: [1, 4],
    tags: ["skirt", "floral", "black"],
    featured: true
  },
  {
    id: 3,
    slug: "tailored-blazer",
    title: "Tailored Blazer",
    shortDescription: "Professional blazer for office wear",
    price: 12000,
    availability: true,
    mainImages: ["blazer-1.webp", "blazer-2.webp", "blazer-3.webp"],
    secondaryImage: "blazer-thumb.webp",
    colors: [
      {
        name: "Navy Blue",
        code: "#000080",
        mainImages: ["blazer-navy-1.webp", "blazer-navy-2.webp"],
        secondaryImage: "blazer-navy-thumb.webp",
        availability: true
      },
      {
        name: "Charcoal",
        code: "#36454f",
        mainImages: ["blazer-charcoal-1.webp", "blazer-charcoal-2.webp"],
        secondaryImage: "blazer-charcoal-thumb.webp",
        availability: true
      }
    ],
    category: "tops",
    mood: ["professional", "sophisticated"],
    occasion: ["office", "formal", "business"],
    sizeRange: ["small", "medium", "large"],
    colorNames: ["navy blue", "charcoal"],
    material: "wool blend",
    searchKeywords: ["blazer", "office wear", "professional"],
    recommendations: [5, 1],
    tags: ["blazer", "professional", "office"],
    featured: true
  },
  {
    id: 4,
    slug: "canvas-tote-bag",
    title: "Canvas Tote Bag",
    shortDescription: "Spacious tote for everyday use",
    price: 18000,
    availability: true,
    mainImages: ["tote-1.webp", "tote-2.webp", "tote-3.webp"],
    secondaryImage: "tote-thumb.webp",
    colors: [
      {
        name: "Natural Canvas",
        code: "#e6d7b8",
        mainImages: ["tote-natural-1.webp", "tote-natural-2.webp"],
        secondaryImage: "tote-natural-thumb.webp",
        availability: true
      },
      {
        name: "Black",
        code: "#000000",
        mainImages: ["tote-black-1.webp", "tote-black-2.webp"],
        secondaryImage: "tote-black-thumb.webp",
        availability: true
      }
    ],
    category: "tote bags",
    mood: ["casual", "practical"],
    occasion: ["everyday", "shopping", "beach"],
    sizeRange: ["one-size"],
    colorNames: ["natural canvas", "black"],
    material: "canvas with leather accents",
    searchKeywords: ["tote bag", "canvas bag", "shopping bag"],
    recommendations: [2, 8],
    tags: ["tote", "bag", "canvas"],
    featured: true
  },
  {
    id: 5,
    slug: "silk-camisole",
    title: "Silk Camisole",
    shortDescription: "Luxurious silk camisole for layering",
    price: 23000,
    availability: true,
    mainImages: ["camisole-1.webp", "camisole-2.webp"],
    secondaryImage: "camisole-thumb.webp",
    colors: [
      {
        name: "Ivory",
        code: "#fffff0",
        mainImages: ["camisole-ivory-1.webp", "camisole-ivory-2.webp"],
        secondaryImage: "camisole-ivory-thumb.webp",
        availability: true
      },
      {
        name: "Black",
        code: "#000000",
        mainImages: ["camisole-black-1.webp", "camisole-black-2.webp"],
        secondaryImage: "camisole-black-thumb.webp",
        availability: true
      }
    ],
    category: "intimates",
    mood: ["romantic", "luxurious"],
    occasion: ["evening", "loungewear", "layering"],
    sizeRange: ["small", "medium", "large"],
    colorNames: ["ivory", "black"],
    material: "100% silk",
    searchKeywords: ["camisole", "silk top", "lingerie"],
    recommendations: [6, 10],
    tags: ["camisole", "silk", "intimates"],
    featured: true
  },
  {
    id: 6,
    slug: "block-heel-sandals",
    title: "Block Heel Sandals",
    shortDescription: "Comfortable block heel sandals",
    price: 23000,
    availability: true,
    mainImages: ["sandals-1.webp", "sandals-2.webp", "sandals-3.webp"],
    secondaryImage: "sandals-thumb.webp",
    colors: [
      {
        name: "Tan",
        code: "#d2b48c",
        mainImages: ["sandals-tan-1.webp", "sandals-tan-2.webp"],
        secondaryImage: "sandals-tan-thumb.webp",
        availability: true
      },
      {
        name: "Black",
        code: "#000000",
        mainImages: ["sandals-black-1.webp", "sandals-black-2.webp"],
        secondaryImage: "sandals-black-thumb.webp",
        availability: true
      }
    ],
    category: "shoes",
    mood: ["chic", "comfortable"],
    occasion: ["office", "casual", "evening"],
    sizeRange: ["36", "37", "38", "39", "40"],
    colorNames: ["tan", "black"],
    material: "genuine leather",
    searchKeywords: ["block heel", "sandals", "comfortable shoes"],
    recommendations: [3, 5],
    tags: ["shoes", "sandals", "heels"],
    featured: true
  },
  {
    id: 7,
    slug: "denim-shorts",
    title: "High-Waist Denim Shorts",
    shortDescription: "Vintage style denim shorts",
    price: 29000,
    availability: true,
    mainImages: ["shorts-1.webp", "shorts-2.webp", "shorts-3.webp"],
    secondaryImage: "shorts-thumb.webp",
    colors: [
      {
        name: "Light Wash",
        code: "#6f8eaf",
        mainImages: ["shorts-light-1.webp", "shorts-light-2.webp"],
        secondaryImage: "shorts-light-thumb.webp",
        availability: true
      },
      {
        name: "Medium Wash",
        code: "#4a6385",
        mainImages: ["shorts-medium-1.webp", "shorts-medium-2.webp"],
        secondaryImage: "shorts-medium-thumb.webp",
        availability: true
      }
    ],
    category: "shorts",
    mood: ["casual", "vintage"],
    occasion: ["daytime", "beach", "casual"],
    sizeRange: ["small", "medium", "large"],
    colorNames: ["light wash", "medium wash"],
    material: "100% cotton denim",
    searchKeywords: ["denim shorts", "high waist", "vintage shorts"],
    recommendations: [2, 8],
    tags: ["shorts", "denim", "casual"],
    featured: true
  },
  {
    id: 8,
    slug: "wide-leg-trousers",
    title: "Wide Leg Trousers",
    shortDescription: "Flowy wide leg trousers for comfort",
    price: 35000,
    availability: true,
    mainImages: ["trousers-1.webp", "trousers-2.webp", "trousers-3.webp"],
    secondaryImage: "trousers-thumb.webp",
    colors: [
      {
        name: "Cream",
        code: "#f5f5dc",
        mainImages: ["trousers-cream-1.webp", "trousers-cream-2.webp"],
        secondaryImage: "trousers-cream-thumb.webp",
        availability: true
      },
      {
        name: "Black",
        code: "#000000",
        mainImages: ["trousers-black-1.webp", "trousers-black-2.webp"],
        secondaryImage: "trousers-black-thumb.webp",
        availability: true
      }
    ],
    category: "trousers",
    mood: ["elegant", "comfortable"],
    occasion: ["office", "casual", "evening"],
    sizeRange: ["small", "medium", "large", "x-large"],
    colorNames: ["cream", "black"],
    material: "linen blend",
    searchKeywords: ["wide leg", "trousers", "pants"],
    recommendations: [3, 9],
    tags: ["trousers", "pants", "wide leg"],
    featured: true
  },
  {
    id: 9,
    slug: "striped-cotton-top",
    title: "Stripped Cotton Top",
    shortDescription: "A Brown and White knit top, crew necked, short sleeves.",
    price: 15000,
    availability: true,
    mainImages: ["tp1.webp", "tp1a.webp"],
    secondaryImage: "tp1.webp",
    colors: [
      {
        name: "Brown",
        code: "#5f4230",
        mainImages: ["tp1.webp"],
        secondaryImage: "tp1.webpp",
        availability: true
      },
      
    ],
    category: "tops",
    mood: ["free", "casual"],
    occasion: ["everyday"],
    sizeRange: ["small", "medium", "large"],
    colorNames: ["brown", "white"],
    material: "cotton",
    searchKeywords: ["short sleeve", "cotton", "tops"],
    recommendations: [5, 10],
    tags: ["short sleeve", "cotton", "tops", "brown"],
    featured: true
  },
  {
    id: 10,
    slug: "nike-tote-delight",
    title: "Nike Tote Delight",
    shortDescription: "Essential Carry, Highly Practical.",
    price: 25000,
    availability: true,
    mainImages: ["pinktb.webp", "bluetb.webp", "blacktb.webp", "pinktb1.webp", "pinktb2.webp"],
    secondaryImage: "tb1.webp",
    colors: [
      {
        name: "Pink Haze",
        code: "#caa5bf",
        mainImages: ["pinktb.webp"],
        secondaryImage: "tb1.webp",
        availability: true
      },
      {
        name: "Blue Topaz",
        code: "#565fa3",
        mainImages: ["bluetb.webp"],
        secondaryImage: "tb1.webp",
        availability: true
      },
      {
        name: "Black Onyx",
        code: "#000000",
        mainImages: ["blacktb.webp"],
        secondaryImage: "tb1.webp",
        availability: true
      }
    ],
    category: "tote bags",
    mood: ["chic", "practicle"],
    occasion: ["evening", "casual", "travel"],
    sizeRange: ["medium"],
    colorNames: ["pink", "blue", "black"],
    material: "Threaded Cotton",
    searchKeywords: ["arm", "cotton bag", "tote"],
    recommendations: [4, 6],
    tags: ["arm", "bag", "cotton", "tote"],
    featured: true
  }
];

module.exports = products;