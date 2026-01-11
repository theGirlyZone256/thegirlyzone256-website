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
    mood: ["elegant", "party", "office"],
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
    category: "bottoms",
    mood: ["free", "romantic"],
    occasion: ["casual", "vacation"],
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
    category: "Bottoms",
    mood: ["Smart", "Elegant"],
    occasion: ["office"],
    sizeRange: ["N/A"],
    colorNames: ["Red"],
    material: "Wool blend",
    searchKeywords: ["skirt", "wrap skirt", "red"],
    recommendations: [6, 19],
    tags: ["skirt", "professional", "office"],
    featured: true
  },
  {
    id: 4,
    slug: "checkered-pajama-set",
    title: "Checkered Pajama Set",
    shortDescription: "Comfortable 2-piece pajama set with a checkered print.",
    price: 30000,
    availability: true,
    mainImages: ["pijama-2pc_00.webp", "pijama-2pc_02.webp", "pijama-2pc_03.webp","pijama-2pc_06.webp"],
    secondaryImage: "spijama-2pc_00.webp",
    colors: [
      {
        name: "Night Red",
        code: "#a10000ff",
        mainImages: ["pijama-2pc_00.webp", "pijama-2pc_02.webp", "pijama-2pc_03.webp", "pijama-2pc_06.webp"],
        secondaryImage: "spijama-2pc_00.webp",
        availability: true
      },
    ],
    category: "Sets",
    mood: ["Free"],
    occasion: ["Casual"],
    sizeRange: ["N/A"],
    colorNames: ["Red"],
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
    category: "tops",
    mood: ["smart", "elegant", "Free"],
    occasion: ["Casual", "Office"],
    sizeRange: ["Medium"],
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
    category: "Bottoms",
    mood: ["Smart", "Free"],
    occasion: ["Office", "Casual"],
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
    category: "Dresses",
    mood: ["Free", "Elegant"],
    occasion: ["Vacation", "Casual"],
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
    category: "Dresses",
    mood: ["Elegant", "Free"],
    occasion: ["Party", "Office"],
    sizeRange: ["Medium", "Large"],
    colorNames: ["Black"],
    material: "Stretch-Hugging Fabric",
    searchKeywords: ["long dress", "black dress", "party", "bodycon dress", "elegant dress",  "hugging dress"],
    recommendations: [3, 6, 7],
    tags: ["dress", "long dress", "black dress", "party", "elegant dress"],
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
    mood: ["Free"],
    occasion: ["Casual"],
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
    category: "bags",
    mood: ["smart"],
    occasion: ["casual", "vacation"],
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
    category: "accessories",
    mood: ["elegant"],
    occasion: ["vacation", "casual", "party"],
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
    category: "accessories",
    mood: ["elegant"],
    occasion: ["Vacation", "casual"],
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
    category: "accessories",
    mood: ["Free", "elegant"],
    occasion: ["casual"],
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
    category: "accessories",
    mood: ["elegant"],
    occasion: ["vacation", "casual"],
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
    category: "accessories",
    mood: ["elegant"],
    occasion: ["casual"],
    sizeRange: ["n/a"],
    colorNames: ["metallic silver"],
    material: "Metallic",
    searchKeywords: ["jewelry", "necklace", "silver"],
    recommendations: [11, 12, 13, 14],
    tags: ["jewelry", "necklace", "silver"],
    featured: true
  },
  {
    id: 16,
    slug: "violet-bloom-wrap-skirt",
    title: "Violet Bloom Wrap Skirt",
    shortDescription: "Floral elegance meets effortless style for your dreamiest look.",
    price: 30000,
    availability: true,
    mainImages: ["Violet Bloom Wrap Skirt_00.webp", "Violet Bloom Wrap Skirt_01.webp", "Violet Bloom Wrap Skirt_02.webp"],
    secondaryImage: "sViolet Bloom Wrap Skirt.webp",
    colors: [
    {
      name: "Violet(floral)",
      availability: true,
      mainImages: ["Violet Bloom Wrap Skirt_00.webp", "Violet Bloom Wrap Skirt_01.webp", "Violet Bloom Wrap Skirt_02.webp"],
      secondaryImage: "sViolet Bloom Wrap Skirt.webp",
      code: "#76599c"
    }
    ],
    category: "Bottoms",
    mood: ["Free", "Elegant"],
    occasion: ["Vacation", "Casual"],
    sizeRange: ["N/A"],
    colorNames: ["violet(floral)"],
    material: "Cotton",
    searchKeywords: ["cotton", "floral", "skirt", "long skirt", "lavender"],
    recommendations: [2, 6],
    tags: ["comfortable", "cotton", "floral", "skirt"],
    featured: true
  },
  {
    id: 17,
    slug: "art-deco-mirage-skirt",
    title: "Art Deco Mirage Skirt",
    shortDescription: "Capture timeless elegance with this striking, intricate geometric print.",
    price: 25000,
    availability: true,
    mainImages: ["Art Deco Mirage Skirt_00.webp", "Art Deco Mirage Skirt_01.webp"],
    secondaryImage: "sArt Deco Mirage Skirt.webp",
    colors: [
    {
      name: "Dark Blue(Artistic)",
      availability: true,
      mainImages: ["Art Deco Mirage Skirt_00.webp", "Art Deco Mirage Skirt_01.webp"],
      secondaryImage: "sArt Deco Mirage Skirt.webp",
      code: "#181b47"
    }
    ],
    category: "Bottoms",
    mood: ["Free", "Elegant"],
    occasion: ["Vacation", "Casual"],
    sizeRange: ["N/A"],
    colorNames: ["dark blue(artistic)"],
    material: "Cotton",
    searchKeywords: ["cotton", "floral", "long skirt", "wrap skirt", "blue"],
    recommendations: [16],
    tags: ["blue", "casual", "elegant", "floral", "luxurious", "skirt", "long skirt"],
    featured: true
  },
  {
    id: 18,
    slug: "dream-silk-skirt",
    title: "Dream Silk Skirt",
    shortDescription: "Soft, ethereal hues meet a flattering, luxurious wrap silhouette.",
    price: 35000,
    availability: true,
    mainImages: ["Dream Silk Skirt_00.webp", "Dream Silk Skirt_03.webp", "Dream Silk Skirt_01.webp", "Dream Silk Skirt_04.webp", "Dream Silk Skirt_02.webp"],
    secondaryImage: "sDream Silk Skirt.webp",
    colors: [
    {
      name: "Neon Pink",
      availability: true,
      mainImages: ["Dream Silk Skirt_00.webp", "Dream Silk Skirt_01.webp", "Dream Silk Skirt_02.webp"],
      secondaryImage: "sDream Silk Skirt.webp",
      code: "#b594ae"
    },
    {
      name: "Neon Indigo",
      availability: true,
      mainImages: ["Dream Silk Skirt_03.webp", "Dream Silk Skirt_04.webp"],
      secondaryImage: "sDream Silk Skirt.webp",
      code: "#9c94bb"
    }
    ],
    category: "bottoms",
    mood: ["Free", "elegant"],
    occasion: ["Party", "office"],
    sizeRange: ["n/a"],
    colorNames: ["neon pink", "neon indigo"],
    material: "Silky",
    searchKeywords: ["long skirt", "skirt", "luxurious", "pink", "silk"],
    recommendations: [16, 17, 19, 20],
    tags: ["long skirt", "luxurious", "skirt", "silk", "pink"],
    featured: true
  },
  {
    id: 19,
    slug: "tropical-breeze-ruffle-skirt",
    title: "Tropical Breeze Ruffle Skirt",
    shortDescription: "Fresh palm prints and playful ruffles for effortless vacation vibes.",
    price: 25000,
    availability: true,
    mainImages: ["Tropical Breeze Ruffle Skirt_04.webp", "Tropical Breeze Ruffle Skirt_00.webp", "Tropical Breeze Ruffle Skirt_01.webp", "Tropical Breeze Ruffle Skirt_05.webp", "Tropical Breeze Ruffle Skirt_06.webp", "Tropical Breeze Ruffle Skirt_02.webp", "Tropical Breeze Ruffle Skirt_03.webp"],
    secondaryImage: "sTropical Breeze Ruffle Skirt.webp",
    colors: [
    {
      name: "Blued-Olive",
      availability: true,
      mainImages: ["Tropical Breeze Ruffle Skirt_04.webp", "Tropical Breeze Ruffle Skirt_05.webp", "Tropical Breeze Ruffle Skirt_06.webp"],
      secondaryImage: "sTropical Breeze Ruffle Skirt.webp",
      code: "#b1a84a"
    },
    {
      name: "Yellowed-Blue",
      availability: true,
      mainImages: ["Tropical Breeze Ruffle Skirt_00.webp", "Tropical Breeze Ruffle Skirt_01.webp", "Tropical Breeze Ruffle Skirt_02.webp", "Tropical Breeze Ruffle Skirt_03.webp"],
      secondaryImage: "sTropical Breeze Ruffle Skirt.webp",
      code: "#9ba8c8"
    }
    ],
    category: "bottoms",
    mood: ["Free"],
    occasion: ["party", "vacation"],
    sizeRange: ["n/a"],
    colorNames: ["blued-olive", "yellowed-blue"],
    material: "N/A",
    searchKeywords: ["long skirt", "skirt", "beach", "vacation", "travel"],
    recommendations: [17, 18, 20],
    tags: ["green", "skirt", "beach", "green skirt"],
    featured: true
  },
  {
    id: 20,
    slug: "bordeaux-floral-wrap-skirt",
    title: "Bordeaux Floral Wrap Skirt",
    shortDescription: "Rich wine tones paired with delicate, romantic blooms.",
    price: 30000,
    availability: true,
    mainImages: ["Bordeaux Floral Wrap Skirt_01.webp", "Bordeaux Floral Wrap Skirt_00.webp", "Bordeaux Floral Wrap Skirt_02.webp", "Bordeaux Floral Wrap Skirt_03.webp"],
    secondaryImage: "sBordeaux Floral Wrap Skirt.webp",
    colors: [
    {
      name: "Dark-Red",
      availability: true,
      mainImages: ["Bordeaux Floral Wrap Skirt_01.webp", "Bordeaux Floral Wrap Skirt_00.webp", "Bordeaux Floral Wrap Skirt_02.webp", "Bordeaux Floral Wrap Skirt_03.webp"],
      secondaryImage: "sBordeaux Floral Wrap Skirt.webp",
      code: "#723039"
    }
    ],
    category: "bottoms",
    mood: ["romantic", "Free"],
    occasion: ["casual"],
    sizeRange: ["medium"],
    colorNames: ["dark-red"],
    material: "Cotton",
    searchKeywords: ["cotton", "skirt", "wrap skirt", "casual", "date", "romantic"],
    recommendations: [3, 19, 21],
    tags: ["casual", "comfortable", "elegant", "floral", "skirt", "smart"],
    featured: true
  },
  {
    id: 21,
    slug: "emerald-garden-wrap-skirt",
    title: "Emerald Garden Wrap Skirt",
    shortDescription: "Deep forest greens with charming, sunny floral accents.",
    price: 25000,
    availability: true,
    mainImages: ["Emerald Garden Wrap Skirt_00.webp", "Emerald Garden Wrap Skirt_01.webp", "Emerald Garden Wrap Skirt_02.webp"],
    secondaryImage: "sEmerald Garden Wrap Skirt.webp",
    colors: [
    {
      name: "Dark-Green",
      availability: true,
      mainImages: ["Emerald Garden Wrap Skirt_00.webp", "Emerald Garden Wrap Skirt_01.webp", "Emerald Garden Wrap Skirt_02.webp"],
      secondaryImage: "sEmerald Garden Wrap Skirt.webp",
      code: "#3f544d"
    }
    ],
    category: "bottoms",
    mood: ["Free", "romantic"],
    occasion: ["casual", "date"],
    sizeRange: ["medium"],
    colorNames: ["dark-green"],
    material: "Cotton",
    searchKeywords: ["casual", "cotton", "date", "luxurious", "romantic", "skirt", "wrap skirt", "green"],
    recommendations: [3, 20],
    tags: ["cotton", "floral", "green", "green skirt", "skirt", "date"],
    featured: true
  },
  {
    id: 22,
    slug: "midnight-meadow-ruffle-skirt",
    title: "Midnight Meadow Ruffle Skirt",
    shortDescription: "Vibrant floral blooms meet a playful, breezy asymmetric hemline.",
    price: 25000,
    availability: true,
    mainImages: ["Midnight Meadow Ruffle Skirt_00.webp", "Midnight Meadow Ruffle Skirt_01.webp", "Midnight Meadow Ruffle Skirt_02.webp"],
    secondaryImage: "sMidnight Meadow Ruffle Skirt.webp",
    colors: [
    {
      name: "Colourful-Black",
      availability: true,
      mainImages: ["Midnight Meadow Ruffle Skirt_00.webp", "Midnight Meadow Ruffle Skirt_01.webp", "Midnight Meadow Ruffle Skirt_02.webp"],
      secondaryImage: "sMidnight Meadow Ruffle Skirt.webp",
      code: "#2e282e"
    }
    ],
    category: "bottoms",
    mood: ["Free", "smart"],
    occasion: ["beach"],
    sizeRange: ["n/a"],
    colorNames: ["colourful-black"],
    material: "Cotton",
    searchKeywords: ["beach", "black skirt", "casual", "floral", "luxurious", "skirt", "wrap skirt"],
    recommendations: [18, 19],
    tags: ["black", "luxurious", "skirt"],
    featured: true
  },
  {
    id: 23,
    slug: "mint-green-wrap-skirt",
    title: "Mint Green Wrap Skirt",
    shortDescription: "A soft, elegant wrap style for a fresh look.",
    price: 25000,
    availability: true,
    mainImages: ["Mint Green Wrap Skirt_00.webp", "Mint Green Wrap Skirt_01.webp", "Mint Green Wrap Skirt_02.webp"],
    secondaryImage: "sMint Green Wrap Skirt.webp",
    colors: [
    {
      name: "Mint Green",
      availability: true,
      mainImages: ["Mint Green Wrap Skirt_00.webp", "Mint Green Wrap Skirt_01.webp", "Mint Green Wrap Skirt_02.webp"],
      secondaryImage: "sMint Green Wrap Skirt.webp",
      code: "#afc3aa"
    }
    ],
    category: "Bottoms",
    mood: ["Free", "Elegant", "Romantic"],
    occasion: ["Date", "Casual", "Party"],
    sizeRange: ["N/A"],
    colorNames: ["mint green"],
    material: "Cotton",
    searchKeywords: ["casual", "cotton", "date", "green", "luxurious", "skirt"],
    recommendations: [20, 21],
    tags: ["casual", "green", "green skirt", "skirt"],
    featured: true
  },
  {
    id: 24,
    slug: "sunlit-meadow-wrap-skirt",
    title: "Sunlit Meadow Wrap Skirt",
    shortDescription: "Effortless floral elegance for your brightest sunny days.",
    price: 30000,
    availability: true,
    mainImages: ["Sunlit Meadow Wrap Skirt_00.webp", "Sunlit Meadow Wrap Skirt_01.webp", "Sunlit Meadow Wrap Skirt_02.webp"],
    secondaryImage: "sSunlit Meadow Wrap Skirt.webp",
    colors: [
    {
      name: "Floral Olive-Yellow",
      availability: true,
      mainImages: ["Sunlit Meadow Wrap Skirt_00.webp", "Sunlit Meadow Wrap Skirt_01.webp", "Sunlit Meadow Wrap Skirt_02.webp"],
      secondaryImage: "sSunlit Meadow Wrap Skirt.webp",
      code: "#ccbb6f"
    }
    ],
    category: "Bottoms",
    mood: ["Free", "Elegant"],
    occasion: ["Vacation", "Casual"],
    sizeRange: ["N/A"],
    colorNames: ["floral olive-yellow"],
    material: "Cotton",
    searchKeywords: ["cotton", "floral", "green", "long skirt", "skirt", "comfortable"],
    recommendations: [20, 22],
    tags: ["casual", "comfortable", "cotton", "floral"],
    featured: true
  },
  {
    id: 25,
    slug: "midnight-dot-ruched-skirt",
    title: "Midnight Dot Ruched Skirt",
    shortDescription: "A classic polka dot look with flattering side gathers.",
    price: 25000,
    availability: true,
    mainImages: ["Midnight Dot Ruched Skirt_00.webp", "Midnight Dot Ruched Skirt_01.webp", "Midnight Dot Ruched Skirt_02.webp", "Midnight Dot Ruched Skirt_03.webp"],
    secondaryImage: "sMidnight Dot Ruched Skirt.webp",
    colors: [
    {
      name: "Dark Grey-Blue",
      availability: true,
      mainImages: ["Midnight Dot Ruched Skirt_00.webp", "Midnight Dot Ruched Skirt_01.webp", "Midnight Dot Ruched Skirt_02.webp", "Midnight Dot Ruched Skirt_03.webp"],
      secondaryImage: "sMidnight Dot Ruched Skirt.webp",
      code: "#171d2e"
    }
    ],
    category: "bottoms",
    mood: ["elegant", "smart"],
    occasion: ["date", "office"],
    sizeRange: ["medium"],
    colorNames: ["dark grey-blue"],
    material: "silk",
    searchKeywords: ["black skirt", "luxurious", "skirt"],
    recommendations: [23, 24],
    tags: ["black", "date", "elegant", "luxurious", "skirt"],
    featured: true
  },
  {
    id: 26,
    slug: "lime-glow-pajamas",
    title: "Lime Glow Pajamas",
    shortDescription: "Soft, stylish nightwear for a cool and comfortable sleep.",
    price: 30000,
    availability: true,
    mainImages: ["Lime Glow Pajamas_00.webp", "Lime Glow Pajamas_01.webp", "Lime Glow Pajamas_02.webp"],
    secondaryImage: "sLime Glow Pajamas.webp",
    colors: [
    {
      name: "Olive-Lime",
      availability: true,
      mainImages: ["Lime Glow Pajamas_00.webp", "Lime Glow Pajamas_01.webp", "Lime Glow Pajamas_02.webp"],
      secondaryImage: "sLime Glow Pajamas.webp",
      code: "#a9b62c"
    }
    ],
    category: "sets",
    mood: ["free"],
    occasion: ["casual"],
    sizeRange: ["n/a"],
    colorNames: ["olive-lime"],
    material: "Silk-Cotton",
    searchKeywords: ["comfortable", "green", "sleep", "pajama"],
    recommendations: [28, 29, 31],
    tags: ["casual", "cotton", "green", "night", "pajama", "silk", "sleep"],
    featured: true
  },
  {
    id: 27,
    slug: "classy-rust-ruffle-dress",
    title: "Classy Rust Ruffle Dress",
    shortDescription: "Elegant belted dress perfect for office, church, or special dates.",
    price: 35000,
    availability: true,
    mainImages: ["Classy Rust Ruffle Dress_00.webp", "Classy Rust Ruffle Dress_01.webp", "Classy Rust Ruffle Dress_02.webp", "Classy Rust Ruffle Dress_03.webp"],
    secondaryImage: "sClassy Rust Ruffle Dress.webp",
    colors: [
    {
      name: "Rust Red",
      availability: true,
      mainImages: ["Classy Rust Ruffle Dress_00.webp", "Classy Rust Ruffle Dress_01.webp", "Classy Rust Ruffle Dress_02.webp", "Classy Rust Ruffle Dress_03.webp"],
      secondaryImage: "sClassy Rust Ruffle Dress.webp",
      code: "#c3434a"
    }
    ],
    category: "dresses",
    mood: ["office", "romantic", "smart"],
    occasion: ["date", "office"],
    sizeRange: ["n/a"],
    colorNames: ["rust-red"],
    material: "Cotton",
    searchKeywords: ["date", "dress", "romantic", "office"],
    recommendations: [6, 8],
    tags: ["date", "dress", "elegant", "formal", "office", "smart"],
    featured: true
  },
  {
    id: 28,
    slug: "purple-floral-pajamas",
    title: "Purple Floral Pajamas",
    shortDescription: "Relax in style with these soft and beautiful flower pajamas.",
    price: 30000,
    availability: true,
    mainImages: ["Purple Floral Pajamas_00.webp", "Purple Floral Pajamas_01.webp", "Purple Floral Pajamas_02.webp", "Purple Floral Pajamas_03.webp"],
    secondaryImage: "sPurple Floral Pajamas.webp",
    colors: [
    {
      name: "Dark-Magenta",
      availability: true,
      mainImages: ["Purple Floral Pajamas_00.webp", "Purple Floral Pajamas_01.webp", "Purple Floral Pajamas_02.webp", "Purple Floral Pajamas_03.webp"],
      secondaryImage: "sPurple Floral Pajamas.webp",
      code: "#711856"
    }
    ],
    category: "sets",
    mood: ["free"],
    occasion: ["casual"],
    sizeRange: ["n/a"],
    colorNames: ["dark-magenta"],
    material: "Silk-Cotton",
    searchKeywords: ["comfortable", "floral", "pajama", "sleep"],
    recommendations: [26, 29],
    tags: ["casual", "comfortable", "cotton", "pajama", "silk"],
    featured: true
  },
  {
    id: 29,
    slug: "midnight-pleated-mini-dress",
    title: " Midnight Pleated Mini Dress",
    shortDescription: "Effortless elegance with a perfect fit for every special occasion.",
    price: 30000,
    availability: true,
    mainImages: ["Midnight Pleated Mini Dress_00.webp", "Midnight Pleated Mini Dress_01.webp", "Midnight Pleated Mini Dress_02.webp"],
    secondaryImage: "sMidnight Pleated Mini Dress.webp",
    colors: [
    {
      name: "Glossy-Black",
      availability: true,
      mainImages: ["Midnight Pleated Mini Dress_00.webp", "Midnight Pleated Mini Dress_01.webp", "Midnight Pleated Mini Dress_02.webp"],
      secondaryImage: "sMidnight Pleated Mini Dress.webp",
      code: "#000000"
    }
    ],
    category: "dresses",
    mood: ["elegant", "office", "smart"],
    occasion: ["office"],
    sizeRange: ["n/a"],
    colorNames: ["glossy-black"],
    material: "Silky",
    searchKeywords: ["black", "black dress", "dress", "office"],
    recommendations: [27],
    tags: ["black", "black dress", "dress", "elegant", "formal", "office"],
    featured: true
  },
  {
    id: 30,
    slug: "classy-floral-silk-pajama",
    title: "Classy Floral Silk Pajama",
    shortDescription: "Step out in style with this elegant, comfortable designer set.",
    price: 30000,
    availability: true,
    mainImages: ["Classy Floral Silk Pajama_00.webp", "Classy Floral Silk Pajama_01.webp", "Classy Floral Silk Pajama_02.webp"],
    secondaryImage: "sClassy Floral Silk Pajama.webp",
    colors: [
    {
      name: "Black",
      availability: true,
      mainImages: ["Classy Floral Silk Pajama_00.webp", "Classy Floral Silk Pajama_01.webp", "Classy Floral Silk Pajama_02.webp"],
      secondaryImage: "sClassy Floral Silk Pajama.webp",
      code: "#000000"
    }
    ],
    category: "sets",
    mood: ["free"],
    occasion: ["casual"],
    sizeRange: ["n/a"],
    colorNames: ["black"],
    material: "Silk-Cotton",
    searchKeywords: ["black", "casual", "pajama", "sleep"],
    recommendations: [26, 28],
    tags: ["black", "cotton", "floral", "pajama", "sleep"],
    featured: true
  },
  {
    id: 31,
    slug: "trendy-art-pajamas",
    title: "Trendy Art Pajamas",
    shortDescription: "Soft, stylish loungewear perfect for chilling or a cozy night.",
    price: 30000,
    availability: true,
    mainImages: ["Trendy Art Pajamas_00.webp", "pijama-2pc_01.webp", "Trendy Art Pajamas_01.webp", "pijama-2pc_04.webp", "Trendy Art Pajamas_02.webp", "pijama-2pc_05.webp"],
    secondaryImage: "sTrendy Art Pajamas.webp",
    colors: [
    {
      name: "Pink",
      availability: true,
      mainImages: ["Trendy Art Pajamas_00.webp", "Trendy Art Pajamas_01.webp", "Trendy Art Pajamas_02.webp"],
      secondaryImage: "sTrendy Art Pajamas.webp",
      code: "#cf3480"
    },
    {
      name: "Orange",
      availability: true,
      mainImages: ["pijama-2pc_01.webp", "pijama-2pc_04.webp", "pijama-2pc_05.webp"],
      secondaryImage: "sTrendy Art Pajamas.webp",
      code: "#ff751f"
    }
    ],
    category: "sets",
    mood: ["free"],
    occasion: ["casual"],
    sizeRange: ["n/a"],
    colorNames: ["pink", "orange"],
    material: "Silk-Cotton",
    searchKeywords: ["casual", "comfortable", "long sleeved", "pajama", "pink", "sleep"],
    recommendations: [26, 28, 30, 35],
    tags: ["casual", "comfortable", "formal", "night", "sleep"],
    featured: true
  },
  {
    id: 32,
    slug: "emerald-floral-tea-dress",
    title: "Emerald Floral Tea Dress",
    shortDescription: "Charming flowery dress with a perfect fit for any occasion.",
    price: 35000,
    availability: true,
    mainImages: ["Emerald Floral Tea Dress_00.webp", "Emerald Floral Tea Dress_01.webp", "Emerald Floral Tea Dress_02.webp"],
    secondaryImage: "sEmerald Floral Tea Dress.webp",
    colors: [
    {
      name: "Azure",
      availability: true,
      mainImages: ["Emerald Floral Tea Dress_00.webp", "Emerald Floral Tea Dress_01.webp", "Emerald Floral Tea Dress_02.webp"],
      secondaryImage: "sEmerald Floral Tea Dress.webp",
      code: "#2d5966"
    }
    ],
    category: "dresses",
    mood: ["elegant", "free"],
    occasion: ["casual"],
    sizeRange: ["medium"],
    colorNames: ["azure"],
    material: "Cotton",
    searchKeywords: ["casual", "comfortable", "cotton", "dress", "green", "green dress"],
    recommendations: [27, 29],
    tags: ["casual", "comfortable", "cotton", "dress", "floral"],
    featured: true
  },
  {
    id: 33,
    slug: "classy-rose-satin-pajama",
    title: "Classy Rose Satin Pajama",
    shortDescription: "Soft, smart silk pajamas for a cozy and stylish night",
    price: 30000,
    availability: true,
    mainImages: ["Classy Rose Satin Pajama_00.webp", "Classy Rose Satin Pajama_01.webp", "Classy Rose Satin Pajama_02.webp"],
    secondaryImage: "sClassy Rose Satin Pajama.webp",
    colors: [
    {
      name: "Pink-Red",
      availability: true,
      mainImages: ["Classy Rose Satin Pajama_00.webp", "Classy Rose Satin Pajama_01.webp", "Classy Rose Satin Pajama_02.webp"],
      secondaryImage: "sClassy Rose Satin Pajama.webp",
      code: "#cd737c"
    }
    ],
    category: "sets",
    mood: ["free"],
    occasion: ["casual"],
    sizeRange: ["n/a"],
    colorNames: ["pink-red"],
    material: "Silk-Cotton",
    searchKeywords: ["casual", "comfortable", "cotton", "pajama", "pink", "sleep"],
    recommendations: [28, 31, 35],
    tags: ["casual", "comfortable", "cotton", "floral", "pajama", "sleep"],
    featured: true
  },
  {
    id: 34,
    slug: "diamond-flare-set",
    title: "Diamond Flare Set",
    shortDescription: "Look smart and classy in this trendy, stylish office-to-party shirt-skirt set.",
    price: 30000,
    availability: true,
    mainImages: ["Diamond Flare Set_00.webp", "Diamond Flare Set_01.webp", "Diamond Flare Set_02.webp"],
    secondaryImage: "sDiamond Flare Set.webp",
    colors: [
    {
      name: "Vivid Blue",
      availability: true,
      mainImages: ["Diamond Flare Set_00.webp", "Diamond Flare Set_01.webp", "Diamond Flare Set_02.webp"],
      secondaryImage: "sDiamond Flare Set.webp",
      code: "#0a37ca"
    }
    ],
    category: "sets",
    mood: ["free", "office", "party"],
    occasion: ["casual", "office", "party"],
    sizeRange: ["medium"],
    colorNames: ["vivid blue"],
    material: "Silk-Cotton",
    searchKeywords: ["blue", "office", "party", "shirt", "skirt", "tops"],
    recommendations: [5, 27],
    tags: ["blue", "casual", "comfortable", "party", "tops"],
    featured: true
  },
  {
    id: 35,
    slug: "zebra-pattern-pajama-set",
    title: "Zebra Pattern Pajama Set",
    shortDescription: "Stay stylish and comfortable in this elegant, classy designer outfit",
    price: 30000,
    availability: true,
    mainImages: ["Zebra Pattern Pajama Set_00.webp", "Zebra Pattern Pajama Set_01.webp", "Zebra Pattern Pajama Set_02.webp"],
    secondaryImage: "sZebra Pattern Pajama Set.webp",
    colors: [
    {
      name: "Blue",
      availability: true,
      mainImages: ["Zebra Pattern Pajama Set_00.webp", "Zebra Pattern Pajama Set_01.webp", "Zebra Pattern Pajama Set_02.webp"],
      secondaryImage: "sZebra Pattern Pajama Set.webp",
      code: "#0d40c0"
    }
    ],
    category: "sets",
    mood: ["free"],
    occasion: ["casual"],
    sizeRange: ["n/a"],
    colorNames: ["blue"],
    material: "Silk-Cotton",
    searchKeywords: ["blue", "casual", "cotton", "pajama", "sleep"],
    recommendations: [30, 28],
    tags: ["blue", "casual", "night", "pajama", "silk", "sleep"],
    featured: true
  },

  
];

module.exports = products;