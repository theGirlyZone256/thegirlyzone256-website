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
    shortDescription: "A playful, high-waisted mini-skirt featuring a dark floral print.",
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
    slug: "floral-red-wrap-skirt",
    title: "Floral Red Wrap Skirt",
    shortDescription: "Stylish, comfortable wrap skirt with a beautiful floral print.",
    price: 12000,
    availability: true,
    mainImages: ["floral-red-wrap-skirt_00.webp", "floral-red-wrap-skirt_01.webp", "floral-red-wrap-skirt_02.webp", "floral-red-wrap-skirt_03.webp"],
    secondaryImage: "sfloral-red-wrap-skirt_00.webp",
    colors: [
      {
        name: "Synced Red",
        code: "#a70606d2",
        mainImages: ["floral-red-wrap-skirt_00.webp", "floral-red-wrap-skirt_01.webp", "floral-red-wrap-skirt_02.webp", "floral-red-wrap-skirt_03.webp"],
        secondaryImage: "sfloral-red-wrap-skirt_00.webp",
        availability: true
      },
      
    ],
    category: "skirt",
    mood: ["Srofessional", "Sophisticated"],
    occasion: ["Office", "Formal", "Business"],
    sizeRange: ["Fit-All"],
    colorNames: ["Red"],
    material: "wool blend",
    searchKeywords: ["skirt", "wrap shirt", "red skirt"],
    recommendations: [2, 6],
    tags: ["skirt", "professional", "office"],
    featured: true
  },
  {
    id: 4,
    slug: "pajama-set",
    title: "Pajama Set",
    shortDescription: "Comfortable 2-piece pajama set with a stylish print.",
    price: 30000,
    availability: true,
    mainImages: ["pijama-2pc_00.webp", "pijama-2pc_01.webp", "pijama-2pc_02.webp", "pijama-2pc_03.webp", "pijama-2pc_04.webp", "pijama-2pc_05.webp", "pijama-2pc_06.webp"],
    secondaryImage: "spijama-2pc_00.webp",
    colors: [
      {
        name: "Night Red",
        code: "#a10000ff",
        mainImages: ["pijama-2pc_00.webp", "pijama-2pc_02.webp", "pijama-2pc_03.webp", "pijama-2pc_06.webp"],
        secondaryImage: "spijama-2pc_00.webp",
        availability: true
      },
      {
        name: "Shaded Blue",
        code: "#006cc4ff",
        mainImages: ["pijama-2pc_01.webp", "pijama-2pc_04.webp", "pijama-2pc_05.webp"],
        secondaryImage: "spijama-2pc_01.webp",
        availability: true
      }
    ],
    category: "2-piece sets",
    mood: ["casual", "free"],
    occasion: ["night", "in-house", "sleep"],
    sizeRange: ["N/A"],
    colorNames: ["red", "blue"],
    material: "Comfy-Smooth Fabric",
    searchKeywords: ["pajama", "night", "sleep"],
    recommendations: [2, 8],
    tags: ["pajama", "sleep", "night"],
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
    slug: "gold-button-skirt",
    title: "Gold Button Skirt",
    shortDescription: "Classy high-waist pencil skirt with elegant gold button details",
    price: 30000,
    availability: true,
    mainImages: ["gold_button_black_skirt_00.webp", "gold_button_black_skirt_01.webp"],
    secondaryImage: "sgold_button_black_skirt_00.webp",
    colors: [
      {
        name: "Black",
        code: "#000000",
        mainImages: ["gold_button_black_skirt_00.webp", "gold_button_black_skirt_01.webp"],
        secondaryImage: "sgold_button_black_skirt_00.webp",
        availability: true
      }
    ],
    category: "skirts",
    mood: ["chic", "office", "comfortable"],
    occasion: ["office", "casual", "afternoon"],
    sizeRange: ["Medium"],
    colorNames: ["black"],
    material: "Cotton",
    searchKeywords: ["black skirt", "black", "gold button", "pencil skirt"],
    recommendations: [2],
    tags: ["skirt", "black", "pencil skirt", "gold button"],
    featured: true
  },
  {
    id: 7,
    slug: "floral-mesh-dress",
    title: "Floral Mesh Dress",
    shortDescription: " Beautiful body-hugging dress with elegant floral details and straps.",
    price: 35000,
    availability: true,
    mainImages: ["floral-mesh-dress_02.webp", "floral-mesh-dress_03.webp", "floral-mesh-dress_04.webp", "floral-mesh-dress_05.webp", "floral-mesh-dress_06.webp", "floral-mesh-dress_07.webp", "floral-mesh-dress_08.webp", "floral-mesh-dress_09.webp", "floral-mesh-dress_10.webp"],
    secondaryImage: "sfloral-mesh-dress_00.webp",
    colors: [
      {
        name: "Black",
        code: "#000000ff",
        mainImages: ["floral-mesh-dress_02.webp", "floral-mesh-dress_00.webp", "floral-mesh-dress_04.webp", "floral-mesh-dress_05.webp", "floral-mesh-dress_06.webp"],
        secondaryImage: "sfloral-mesh-dress_00.webp",
        availability: true
      },
      {
        name: "White",
        code: "#ffffffff",
        mainImages: ["floral-mesh-dress_01.webp", "floral-mesh-dress_07.webp", "floral-mesh-dress_08.webp", "floral-mesh-dress_09.webp", "floral-mesh-dress_10.webp"],
        secondaryImage: "sfloral-mesh-dress_01.webp",
        availability: true
      }
    ],
    category: "dresses",
    mood: ["casual", "elegant", "floral", "vintage"],
    occasion: ["daytime", "beach", "casual"],
    sizeRange: ["medium"],
    colorNames: ["Black", "White"],
    material: "Comfy-Mesh",
    searchKeywords: ["black dress", "white dress", "long dress"],
    recommendations: [2, 8],
    tags: ["black", "long dress", "white", "casual"],
    featured: true
  },
  {
    id: 8,
    slug: "black-bodycon-party-dress",
    title: "Black Bodycon Party Dress",
    shortDescription: "Elegant slim-fit dress with a stylish pleated bottom.",
    price: 50000,
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
  },
  
  
];

module.exports = products;