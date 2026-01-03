// Main (900x1200)px in webp format.
// Hero (1600x900)px in webp format.
// Secondary (600x800)px in webp format.

// ======================================================================================================================
// _data/products.js
const products = [
  {
    // CORE IDENTIFIERS
    id: 10,
    slug: "ribbed-frill-wrap-dress",
    
    // DISPLAY & SEO FIELDS
    title: "Ribbed Frill Wrap Dress",
    shortDescription: "Short-sleeved wrap dress with a stylish frilled hem design.",
    
    // PRICING & AVAILABILITY
    price: 30000,
    availability: true,
    
    // IMAGES (all .webp)
    mainImages: ["ribbed-frill-wrap_03.webp", "ribbed-frill-wrap_02.webp", "ribbed-frill-wrap_01.webp", "ribbed-frill-wrap_00.webp"],
    secondaryImage: "sribbed-frill-wrap_01.webp",
    
    // COLOR VARIANTS ARRAY - CRITICAL FOR PRODUCT PAGES & CARDS
    colors: [
      {
        name: "Emerald Green",
        code: "#1f5330ff",
        mainImages: ["ribbed-frill-wrap_03.webp"],
        secondaryImage: "sribbed-frill-wrap_03.webp",
        availability: true
      },
      {
        name: "Roso Blue", 
        code: "#3245ebff",
        mainImages: ["ribbed-frill-wrap_02.webp"],
        secondaryImage: "sribbed-frill-wrap_02.webp",
        availability: true
      }
    ],
    
    // SEARCH & FILTERING
    category: "dresses",
    mood: ["elegant", "classic"],
    occasion: ["evening", "cocktail", "formal"],
    sizeRange: ["N/a"],
    colorNames: ["green", "blue"],
    material: "Premium Ribbed Fabric",
    
    // SEO & SEARCH
    searchKeywords: ["wrap dress", "dress", "green dress", "blue dress", "frill hem"],
    
    // RECOMMENDATIONS
    recommendations: [3, 7, 8],
    tags: ["dress", "blue", "elegant", "green", "formal"],
    
    featured: true
  },
  {
    id: 9,
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
    price: 25000,
    availability: true,
    mainImages: ["floral-red-wrap-skirt_00.webp", "floral-red-wrap-skirt_01.webp", "floral-red-wrap-skirt_02.webp", "floral-red-wrap-skirt_03.webp"],
    secondaryImage: "sfloral-red-wrap-skirt_01.webp",
    colors: [
      {
        name: "Synced Red",
        code: "#a70606d2",
        mainImages: ["floral-red-wrap-skirt_00.webp", "floral-red-wrap-skirt_01.webp", "floral-red-wrap-skirt_02.webp", "floral-red-wrap-skirt_03.webp"],
        secondaryImage: "sfloral-red-wrap-skirt_01.webp",
        availability: true
      },
      
    ],
    category: "skirt",
    mood: ["Professional", "Sophisticated"],
    occasion: ["Office", "Formal", "Business"],
    sizeRange: ["Fit-All"],
    colorNames: ["Red"],
    material: "wool blend",
    searchKeywords: ["skirt", "wrap skirt", "red skirt"],
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
    slug: "classic-striped-button-shirt",
    title: "Classic Striped Button Shirt",
    shortDescription: "Smart long-sleeved shirt with a trendy stripe pattern",
    price: 25000,
    availability: true,
    mainImages: ["vertical_strip_shirt_00.webp", "vertical_strip_shirt_01.webp", "vertical_strip_shirt_02.webp", "vertical_strip_shirt_03.webp", "vertical_strip_shirt_04.webp", "vertical_strip_shirt_05.webp","vertical_strip_shirt_06.webp"],
    secondaryImage: "svertical_strip_shirt_00.webp",
    colors: [
      {
        name: "Green",
        code: "#00b652ff",
        mainImages: ["vertical_strip_shirt_00.webp"],
        secondaryImage: "svertical_strip_shirt_00.webp",
        availability: true
      },
      {
        name: "Black",
        code: "#000000",
        mainImages: ["vertical_strip_shirt_05.webp"],
        secondaryImage: "svertical_strip_shirt_06.webp",
        availability: true
      },
      {
        name: "Red",
        code: "#f12a2aff",
        mainImages: ["vertical_strip_shirt_02.webp"],
        secondaryImage: "svertical_strip_shirt_04.webp",
        availability: true
      },
      {
        name: "Blue",
        code: "#0f58dfff",
        mainImages: ["vertical_strip_shirt_03.webp"],
        secondaryImage: "svertical_strip_shirt_01.webp",
        availability: true
      },
    ],
    category: "Shirts",
    mood: ["smart", "luxurious", "comfortable"],
    occasion: ["Day time", "Professional", "layering"],
    sizeRange: ["medium"],
    colorNames: ["Red", "Black", "Blue", "Green"],
    material: "Smooth Cotton",
    searchKeywords: ["stripped shirt", "long sleeved", "shirt", "button up", "layering", "cotton shirt", "comfortable shirt", "luxurious shirt", "smart shirt", "professional shirt"],
    recommendations: [9, 10],
    tags: ["shirt", "smart", "long sleeved", "button up", "cotton", "comfortable", "luxurious", "professional"],
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
    recommendations: [2, 3],
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
    mainImages: ["black-bodycon_00.webp", "black-bodycon_01.webp", "black-bodycon_02.webp", "black-bodycon_03.webp", "black-bodycon_04.webp", "black-bodycon_05.webp"],
    secondaryImage: "sblack-bodycon_01.webp",
    colors: [
      {
        name: "Black",
        code: "#000000",
        mainImages: ["black-bodycon_00.webp"],
        secondaryImage: "sblack-bodycon_01.webp",
        availability: true
      }
    ],
    category: "dresses",
    mood: ["elegant", "comfortable"],
    occasion: ["Excecutive Party", "Formal", "Wedding", "Date"],
    sizeRange: ["medium", "large"],
    colorNames: ["Black"],
    material: "Stretch-Hugging Fabric",
    searchKeywords: ["long dress", "black dress", "party dress", "bodycon dress", "elegant dress",  "hugging dress"],
    recommendations: [3, 6, 7],
    tags: ["dress", "long dress", "black dress", "party dress", "elegant dress"],
    featured: true
  },
  {
    id: 2,
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
    id: 1,
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
    {
    id: 11,
    slug: "the-gilded-rose",
    title: "The Gilded Rose",
    shortDescription: "Capture timeless beauty!",
    price: 10000,
    availability: true,
    mainImages: ["the-gilded-rose_00.webp", "the-gilded-rose_01.webp", "the-gilded-rose_02.webp"],
    secondaryImage: "s_the-gilded-rose_01.webp",
    colors: [
    {
      name: "Metal Silver",
      availability: true,
      mainImages: ["the-gilded-rose_00.webp", "the-gilded-rose_01.webp", "the-gilded-rose_02.webp"],
      secondaryImage: "s_the-gilded-rose_01.webp",
      code: "#c0c0c0"
    }
    ],
    category: "jewelry",
    mood: ["classic", "elegant", "floral", "luxurious"],
    occasion: ["beach", "casual", "date", "day time", "office", "wedding"],
    sizeRange: ["n/a"],
    colorNames: ["metal silver"],
    material: "Metallic",
    searchKeywords: ["floral", "jewelry", "necklace", "floral necklace"],
    recommendations: [12, 13, 14, 15],
    tags: ["floral", "luxurious", "jewelry", "necklace", "floral necklace"],
    featured: true
  },
  {
    id: 12,
    slug: "the-frost-foliage",
    title: "The Frost Foliage",
    shortDescription: "A Nature-inspired touch to your neck.",
    price: 10000,
    availability: true,
    mainImages: ["the-frost-foliage_01.webp", "the-frost-foliage_02.webp", "the-frost-foliage_03.webp"],
    secondaryImage: "sthe-frost-foliage.webp",
    colors: [
    {
      name: "Metallic Silver",
      availability: true,
      mainImages: ["the-frost-foliage_01.webp", "the-frost-foliage_02.webp", "the-frost-foliage_03.webp"],
      secondaryImage: "sthe-frost-foliage.webp",
      code: "#c0c0c0"
    }
    ],
    category: "jewelry",
    mood: ["classic", "elegant", "luxurious"],
    occasion: ["afternoon", "beach", "casual"],
    sizeRange: ["n/a"],
    colorNames: ["metallic silver"],
    material: "Metallic",
    searchKeywords: ["jewelry", "necklace", "silver"],
    recommendations: [11, 13, 14, 15],
    tags: ["elegant", "jewelry", "luxurious", "necklace", "silver"], 
    featured: true
  },
  {
    id: 13,
    slug: "the-silver-talon",
    title: "The Silver Talon",
    shortDescription: "Elevate your style with this sleek, tapered pendant necklace.",
    price: 10000,
    availability: true,
    mainImages: ["the-silver-talon_00.webp", "the-silver-talon_02.webp", "the-silver-talon_03.webp"],
    secondaryImage: "sthe-silver-talon.webp",
    colors: [
    {
      name: "Metallic Silver",
      availability: true,
      mainImages: ["the-silver-talon_00.webp", "the-silver-talon_02.webp", "the-silver-talon_03.webp"],
      secondaryImage: "sthe-silver-talon.webp",
      code: "#c0c0c0"
    }
    ],
    category: "jewelry",
    mood: ["casual", "chic", "classic", "elegant", "luxurious"],
    occasion: ["casual", "in-house"],
    sizeRange: ["n/a"],
    colorNames: ["metallic silver"],
    material: "Metallic",
    searchKeywords: ["jewelry", "necklace"],
    recommendations: [11, 12, 13, 15],
    tags: ["jewelry", "luxurious", "necklace"],
    featured: true
  },
  {
    id: 14,
    slug: "the-silver-cleat",
    title: "The Silver Cleat",
    shortDescription: "Showcase your passion with this finely detailed sneaker-themed pendant necklace.",
    price: 10000,
    availability: true,
    mainImages: ["the-silver-cleat_02.webp", "the-silver-cleat_00.webp", "the-silver-cleat_03.webp"],
    secondaryImage: "sthe-silver-cleat.webp",
    colors: [
    {
      name: "Metallic Silver",
      availability: true,
      mainImages: ["the-silver-cleat_02.webp", "the-silver-cleat_00.webp", "the-silver-cleat_03.webp"],
      secondaryImage: "sthe-silver-cleat.webp",
      code: "#c0c0c0"
    }
    ],
    category: "jewelry",
    mood: ["chic", "classic", "luxurious", "vintage"],
    occasion: ["afternoon", "beach", "casual"],
    sizeRange: ["n/a"],
    colorNames: ["metallic silver"],
    material: "Metallic",
    searchKeywords: ["jewelry", "necklace"],
    recommendations: [11, 12, 13, 15],
    tags: ["jewelry", "necklace"],
    featured: true
  },
  {
    id: 15,
    slug: "the-silver-blade",
    title: "The Silver Blade",
    shortDescription: "Make a sharp statetement with this craft-inspired pendant necklace.",
    price: 10000,
    availability: true,
    mainImages: ["the-silver-blade_01.webp", "the-silver-blade_02.webp", "the-silver-blade_03.webp"],
    secondaryImage: "sthe-silver-blade.webp",
    colors: [
    {
      name: "Metallic Silver",
      availability: true,
      mainImages: ["the-silver-blade_01.webp", "the-silver-blade_02.webp", "the-silver-blade_03.webp"],
      secondaryImage: "sthe-silver-blade.webp",
      code: "#c0c0c0"
    }
    ],
    category: "jewelry",
    mood: ["classic", "vintage"],
    occasion: ["day time"],
    sizeRange: ["n/a"],
    colorNames: ["metallic silver"],
    material: "Metallic",
    searchKeywords: ["jewelry", "necklace", "silver"],
    recommendations: [11, 12, 13, 14],
    tags: ["jewelry", "necklace", "silver"],
    featured: true
  },

  
];

module.exports = products;