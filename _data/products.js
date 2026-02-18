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
    searchKeywords: ["wrap dress", "dress", "green dress", "frill hem"],
    
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
    searchKeywords: ["stripped shirt", "long sleeved", "shirt", "button up", "layering", "cotton shirt", "comfortable shirt", "smart shirt", "professional shirt"],
    recommendations: [50, 63],
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
    searchKeywords: ["black dress", "white dress", "long"],
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
    availability: false,
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
    searchKeywords: ["long", "black dress", "party", "bodycon dress"],
    recommendations: [3, 6, 7],
    tags: ["dress", "long dress", "black dress", "party"],
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
    searchKeywords: ["cotton", "floral", "skirt", "long", "lavender"],
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
    searchKeywords: ["cotton", "floral", "long", "wrap skirt", "blue"],
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
    searchKeywords: ["long", "skirt", "luxurious", "pink", "silk"],
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
    searchKeywords: ["long", "skirt", "beach", "vacation", "travel"],
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
    searchKeywords: ["cotton", "floral", "green", "long", "skirt", "comfortable"],
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
    availability: false,
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
  {
    id: 36,
    slug: "gingham-wrap-short-skirt",
    title: "Gingham Wrap Short Skirt",
    shortDescription: "Fashionable wrap-around skirt for office or casual weekend wear.",
    price: 20000,
    availability: true,
    mainImages: ["Gingham Wrap Short Skirt_00.webp", "Gingham Wrap Short Skirt_01.webp", "Gingham Wrap Short Skirt_02.webp"],
    secondaryImage: "sGingham Wrap Short Skirt.webp",
    colors: [
    {
      name: "Checkered-White",
      availability: true,
      mainImages: ["Gingham Wrap Short Skirt_00.webp", "Gingham Wrap Short Skirt_01.webp", "Gingham Wrap Short Skirt_02.webp"],
      secondaryImage: "sGingham Wrap Short Skirt.webp",
      code: "#cfced2"
    }
    ],
    category: "bottoms",
    mood: ["office", "smart"],
    occasion: ["casual", "office"],
    sizeRange: ["n/a"],
    colorNames: ["checkered-white", "black on white"],
    material: "Cotton",
    searchKeywords: ["black", "cotton", "green dress", "mini skirt", "office", "wrap skirt"],
    recommendations: [3, 9],
    tags: ["black", "casual", "cotton", "skirt"],
    featured: true
  },
  {
    id: 37,
    slug: "blue-floral-wrap-skirt",
    title: "Blue Floral Wrap Skirt",
    shortDescription: "Stylish navy blue skirt with beautiful flower patterns.",
    price: 25000,
    availability: true,
    mainImages: ["Blue Floral Wrap Skirt_00.webp", "Blue Floral Wrap Skirt_01.webp", "Blue Floral Wrap Skirt_02.webp"],
    secondaryImage: "sBlue Floral Wrap Skirt.webp",
    colors: [
    {
      name: "Navy Blue",
      availability: true,
      mainImages: ["Blue Floral Wrap Skirt_00.webp", "Blue Floral Wrap Skirt_01.webp", "Blue Floral Wrap Skirt_02.webp"],
      secondaryImage: "sBlue Floral Wrap Skirt.webp",
      code: "#202248"
    }
    ],
    category: "bottoms",
    mood: ["free", "office"],
    occasion: ["casual", "office"],
    sizeRange: ["medium"],
    colorNames: ["navy blue"],
    material: "N/A",
    searchKeywords: ["blue", "casual", "comfortable", "floral", "long", "skirt", "wrap skirt", "tie"],
    recommendations: [3, 5],
    tags: ["blue", "casual", "floral", "long skirt", "skirt"],
    featured: true
  },
  {
    id: 38,
    slug: "yellow-florals-wrap-skirt",
    title: "Yellow Florals Wrap Skirt",
    shortDescription: "Pretty yellow floral skirt with a lovely frill bottom.",
    price: 25000,
    availability: true,
    mainImages: ["Yellow Florals Wrap Skirt_00.webp", "Yellow Florals Wrap Skirt_01.webp", "Yellow Florals Wrap Skirt_02.webp", "Yellow Florals Wrap Skirt_03.webp"],
    secondaryImage: "sYellow Florals Wrap Skirt.webp",
    colors: [
    {
      name: "Yellow-on-White",
      availability: true,
      mainImages: ["Yellow Florals Wrap Skirt_00.webp", "Yellow Florals Wrap Skirt_01.webp", "Yellow Florals Wrap Skirt_02.webp", "Yellow Florals Wrap Skirt_03.webp"],
      secondaryImage: "sYellow Florals Wrap Skirt.webp",
      code: "#e6e6e6"
    }
    ],
    category: "bottoms",
    mood: ["free", "office"],
    occasion: ["casual", "office"],
    sizeRange: ["medium"],
    colorNames: ["yellow-on-white"],
    material: "N/A",
    searchKeywords: ["casual", "comfortable", "floral", "long", "skirt", "wrap skirt"],
    recommendations: [36, 37, 39],
    tags: ["casual", "comfortable", "floral", "long skirt", "skirt"],
    featured: true
  },
  {
    id: 39,
    slug: "black-floral-wrap-skirt",
    title: "Black Floral Wrap Skirt",
    shortDescription: "Beautiful dark flowery skirt with a stylish wrap design.",
    price: 25000,
    availability: true,
    mainImages: ["Black Floral Wrap Skirt_00.webp", "Black Floral Wrap Skirt_01.webp", "Black Floral Wrap Skirt_02.webp", "Black Floral Wrap Skirt_03.webp"],
    secondaryImage: "sBlack Floral Wrap Skirt.webp",
    colors: [
    {
      name: "Black",
      availability: true,
      mainImages: ["Black Floral Wrap Skirt_00.webp", "Black Floral Wrap Skirt_01.webp", "Black Floral Wrap Skirt_02.webp", "Black Floral Wrap Skirt_03.webp"],
      secondaryImage: "sBlack Floral Wrap Skirt.webp",
      code: "#171717"
    }
    ],
    category: "bottoms",
    mood: ["free", "office"],
    occasion: ["casual", "office"],
    sizeRange: ["medium"],
    colorNames: ["black"],
    material: "N/A",
    searchKeywords: ["black", "black skirt", "casual", "floral", "long", "skirt"],
    recommendations: [37, 38],
    tags: ["black", "casual", "comfortable", "long skirt", "skirt"],
    featured: true
  },
  {
    id: 40,
    slug: "green-daisy-wrap-skirt",
    title: "Green Daisy Wrap Skirt",
    shortDescription: "Bright green skirt with large, pretty daisy flower prints.",
    price: 25000,
    availability: false,
    mainImages: ["Green Daisy Wrap Skirt_02.webp", "Green Daisy Wrap Skirt_00.webp", "Green Daisy Wrap Skirt_01.webp", "Green Daisy Wrap Skirt_04.webp"],
    secondaryImage: "sGreen Daisy Wrap Skirt.webp",
    colors: [
    {
      name: "Green",
      availability: true,
      mainImages: ["Green Daisy Wrap Skirt_02.webp", "Green Daisy Wrap Skirt_00.webp", "Green Daisy Wrap Skirt_01.webp", "Green Daisy Wrap Skirt_04.webp"],
      secondaryImage: "sGreen Daisy Wrap Skirt.webp",
      code: "#819e7d"
    }
    ],
    category: "bottoms",
    mood: ["free", "office"],
    occasion: ["casual", "office"],
    sizeRange: ["medium"],
    colorNames: ["green"],
    material: "N/A",
    searchKeywords: ["floral", "green", "long", "office", "wrap skirt"],
    recommendations: [3, 39],
    tags: ["casual", "comfortable", "green", "green skirt", "long skirt", "skirt", "wrap skirt"],
    featured: true
  },
  {
    id: 41,
    slug: "red-floral-ruffled-skirt",
    title: "Red Floral Ruffled Skirt",
    shortDescription: "Stylish red flowery skirt with a beautiful ruffled hem.",
    price: 25000,
    availability: true,
    mainImages: ["Red Floral Ruffled Skirt_00.webp", "Red Floral Ruffled Skirt_01.webp", "Red Floral Ruffled Skirt_02.webp", "Red Floral Ruffled Skirt_03.webp"],
    secondaryImage: "sRed Floral Ruffled Skirt.webp",
    colors: [
    {
      name: "Red",
      availability: true,
      mainImages: ["Red Floral Ruffled Skirt_00.webp", "Red Floral Ruffled Skirt_01.webp", "Red Floral Ruffled Skirt_02.webp", "Red Floral Ruffled Skirt_03.webp"],
      secondaryImage: "sRed Floral Ruffled Skirt.webp",
      code: "#a62a11"
    }
    ],
    category: "bottoms",
    mood: ["office", "smart"],
    occasion: ["casual", "office"],
    sizeRange: ["n/a"],
    colorNames: ["red"],
    material: "N/A",
    searchKeywords: ["casual", "floral", "skirt"],
    recommendations: [19, 36],
    tags: ["casual", "comfortable", "skirt"],
    featured: true
  },
  {
    id: 42,
    slug: "mini-ruffle-tie-skirt",
    title: "Mini Ruffle Tie Skirt",
    shortDescription: "Comfortable short skirt with flowers and a side ribbon.",
    price: 20000,
    availability: true,
    mainImages: ["Mini Ruffle Tie-Skirt_03.webp", "Mini Ruffle Tie-Skirt_00.webp", "Mini Ruffle Tie-Skirt_01.webp", "Mini Ruffle Tie-Skirt_04.webp", "Mini Ruffle Tie-Skirt_05.webp", "Mini Ruffle Tie-Skirt_02.webp"],
    secondaryImage: "sMini Ruffle Tie Skirt.webp",
    colors: [
    {
      name: "Red",
      availability: true,
      mainImages: ["Mini Ruffle Tie-Skirt_03.webp", "Mini Ruffle Tie-Skirt_04.webp", "Mini Ruffle Tie-Skirt_05.webp"],
      secondaryImage: "sMini Ruffle Tie Skirt.webp",
      code: "#a52021"
    },
    {
      name: "Orange",
      availability: true,
      mainImages: ["Mini Ruffle Tie-Skirt_00.webp", "Mini Ruffle Tie-Skirt_01.webp", "Mini Ruffle Tie-0Skirt_02.webp"],
      secondaryImage: "sMini Ruffle Tie Skirt.webp",
      code: "#e04942"
    }
    ],
    category: "bottoms",
    mood: ["elegant", "free", "party", "romantic"],
    occasion: ["casual", "date", "party"],
    sizeRange: ["medium", "small"],
    colorNames: ["red", "orange"],
    material: "N/A",
    searchKeywords: ["floral", "party", "red", "romantic", "skirt", "wrap skirt"],
    recommendations: [2, 9],
    tags: ["floral", "skirt"],
    featured: true
  },
  {
    id: 43,
    slug: "green-floral-ruffle-skirt",
    title: "Green Floral Ruffle Skirt",
    shortDescription: "Beautiful green flowery skirt with a stylish ruffled bottom.",
    price: 20000,
    availability: true,
    mainImages: ["Green Floral Ruffle Skirt_00.webp", "Green Floral Ruffle Skirt_01.webp", "Green Floral Ruffle Skirt_02.webp"],
    secondaryImage: "sGreen Floral Ruffle Skirt.webp",
    colors: [
    {
      name: "Green",
      availability: true,
      mainImages: ["Green Floral Ruffle Skirt_00.webp", "Green Floral Ruffle Skirt_01.webp", "Green Floral Ruffle Skirt_02.webp"],
      secondaryImage: "sGreen Floral Ruffle Skirt.webp",
      code: "#258577"
    }
    ],
    category: "bottoms",
    mood: ["smart"],
    occasion: ["casual"],
    sizeRange: ["small"],
    colorNames: ["green"],
    material: "N/A",
    searchKeywords: ["casual", "green", "skirt"],
    recommendations: [37, 40],
    tags: ["casual", "green", "green skirt", "skirt"],
    featured: true
  },
  {
    id: 44,
    slug: "short-floral-ruffle-skirt",
    title: "Short-Floral Ruffle Skirt",
    shortDescription: "Beautiful flower-print skirt with stylish frills and wrap-tie.",
    price: 20000,
    availability: true,
    mainImages: ["Short-Floral Ruffle Skirt_00.webp", "Short-Floral Ruffle Skirt_01.webp", "Short-Floral Ruffle Skirt_02.webp", "Short-Floral Ruffle Skirt_03.webp", "Short-Floral Ruffle Skirt_04.webp"],
    secondaryImage: "sShort-Floral Ruffle Skirt.webp",
    colors: [
    {
      name: "Floral-White",
      availability: true,
      mainImages: ["Short-Floral Ruffle Skirt_00.webp", "Short-Floral Ruffle Skirt_01.webp", "Short-Floral Ruffle Skirt_02.webp", "Short-Floral Ruffle Skirt_03.webp", "Short-Floral Ruffle Skirt_04.webp"],
      secondaryImage: "sShort-Floral Ruffle Skirt.webp",
      code: "#efeeee"
    }
    ],
    category: "bottoms",
    mood: ["elegant", "free", "party", "smart"],
    occasion: ["casual", "date", "party", "vacation"],
    sizeRange: ["small"],
    colorNames: ["floral-white"],
    material: "N/A",
    searchKeywords: ["floral", "frill hem", "skirt", "wrap skirt"],
    recommendations: [42, 43],
    tags: ["casual", "floral", "party", "wrap skirt"],
    featured: true
  },
  {
    id: 45,
    slug: "green-leaf-floral-skirt",
    title: "Green Leaf Floral Skirt",
    shortDescription: "Elegant long skirt with fresh green floral patterns.",
    price: 25000,
    availability: true,
    mainImages: ["Green Leaf Floral Skirt_00.webp", "Green Leaf Floral Skirt_01.webp", "Green Leaf Floral Skirt_02.webp", "Green Leaf Floral Skirt_03.webp"],
    secondaryImage: "sGreen Leaf Floral Skirt.webp",
    colors: [
    {
      name: "Cool-White",
      availability: true,
      mainImages: ["Green Leaf Floral Skirt_00.webp", "Green Leaf Floral Skirt_01.webp", "Green Leaf Floral Skirt_02.webp", "Green Leaf Floral Skirt_03.webp"],
      secondaryImage: "sGreen Leaf Floral Skirt.webp",
      code: "#bcc2cf"
    }
    ],
    category: "bottoms",
    mood: ["free"],
    occasion: ["vacation"],
    sizeRange: ["medium"],
    colorNames: ["cool-white"],
    material: "N/A",
    searchKeywords: ["casual", "comfortable", "green", "long", "travel", "vacation"],
    recommendations: [37, 38],
    tags: ["casual", "comfortable", "green", "long skirt", "skirt"],
    featured: true
  },
  {
    id: 46,
    slug: "green-mix-floral-skirt",
    title: "Green Mix Floral Skirt",
    shortDescription: "Stylish green skirt with colorful prints and a wavy hem.",
    price: 25000,
    availability: true,
    mainImages: ["Green Mix Floral Skirt_00.webp", "Green Mix Floral Skirt_01.webp", "Green Mix Floral Skirt_02.webp"],
    secondaryImage: "sGreen Mix Floral Skirt.webp",
    colors: [
    {
      name: "Green",
      availability: true,
      mainImages: ["Green Mix Floral Skirt_00.webp", "Green Mix Floral Skirt_01.webp", "Green Mix Floral Skirt_02.webp"],
      secondaryImage: "sGreen Mix Floral Skirt.webp",
      code: "#1d5c2f"
    }
    ],
    category: "bottoms",
    mood: ["free"],
    occasion: ["casual"],
    sizeRange: ["medium", "small"],
    colorNames: ["green"],
    material: "N/A",
    searchKeywords: ["casual", "comfortable", "floral", "green", "long", "skirt"],
    recommendations: [43, 45],
    tags: ["casual", "floral", "green", "green skirt", "long", "skirt"],
    featured: true
  },
  {
    id: 47,
    slug: "navy-floral-wrap-skirt",
    title: "Navy Floral Wrap Skirt",
    shortDescription: "Pretty flowery skirt with a side tie and ruffles.",
    price: 20000,
    availability: true,
    mainImages: ["Navy Floral Wrap Skirt_00.webp", "Navy Floral Wrap Skirt_01.webp", "Navy Floral Wrap Skirt_02.webp"],
    secondaryImage: "sNavy Floral Wrap Skirt.webp",
    colors: [
    {
      name: "Dark-Indigo",
      availability: true,
      mainImages: ["Navy Floral Wrap Skirt_00.webp", "Navy Floral Wrap Skirt_01.webp", "Navy Floral Wrap Skirt_02.webp"],
      secondaryImage: "sNavy Floral Wrap Skirt.webp",
      code: "#2b2b3f"
    }
    ],
    category: "bottoms",
    mood: ["free", "party"],
    occasion: ["casual", "party", "vacation"],
    sizeRange: ["small"],
    colorNames: ["dark-indigo"],
    material: "N/A",
    searchKeywords: ["casual", "floral", "mini skirt", "skirt", "tie", "wrap skirt"],
    recommendations: [36, 42],
    tags: ["black", "casual", "floral", "party", "skirt", "wrap skirt"],
    featured: true
  },
  {
    id: 48,
    slug: "orange-ruched-bodycon-skirt",
    title: "Orange Ruched Bodycon Skirt",
    shortDescription: "Bright, stretchy skirt that fits your body perfectly.",
    price: 25000,
    availability: true,
    mainImages: ["Orange Ruched Bodycon Skirt_00.webp", "Orange Ruched Bodycon Skirt_01.webp", "Orange Ruched Bodycon Skirt_02.webp"],
    secondaryImage: "sOrange Ruched Bodycon Skirt.webp",
    colors: [
    {
      name: "Orange",
      availability: true,
      mainImages: ["Orange Ruched Bodycon Skirt_00.webp", "Orange Ruched Bodycon Skirt_01.webp", "Orange Ruched Bodycon Skirt_02.webp"],
      secondaryImage: "sOrange Ruched Bodycon Skirt.webp",
      code: "#ff6600"
    }
    ],
    category: "bottoms",
    mood: ["party"],
    occasion: ["party"],
    sizeRange: ["small"],
    colorNames: ["orange"],
    material: "N/A",
    searchKeywords: ["mini skirt", "party", "skirt"],
    recommendations: [35, 41],
    tags: ["party", "skirt"],
    featured: true
  },
  {
    id: 49,
    slug: "satin-gala-maxi-dress",
    title: "Satin Gala Maxi Dress",
    shortDescription: "Look smart and elegant in this stylish, figure-hugging long dress.",
    price: 70000,
    availability: false,
    mainImages: ["Satin Gala Maxi Dress_00.webp", "Satin Gala Maxi Dress_01.webp", "Satin Gala Maxi Dress_02.webp"],
    secondaryImage: "sSatin Gala Maxi Dress_00.webp",
    colors: [
    {
      name: "Dark Olive",
      availability: true,
      mainImages: ["Satin Gala Maxi Dress_00.webp", "Satin Gala Maxi Dress_01.webp", "Satin Gala Maxi Dress_02.webp"],
      secondaryImage: "sSatin Gala Maxi Dress_00.webp",
      code: "#717b12"
    }
    ],
    category: "dresses",
    mood: ["elegant", "party", "smart"],
    occasion: ["date", "party"],
    sizeRange: ["n/a"],
    colorNames: ["dark olive"],
    material: "Silk",
    searchKeywords: ["dress","green", "green dress", "long", "luxurious", "party", "satin"],
    recommendations: [53, 54],
    tags: ["dress","green", "long dress", "luxurious", "satin"],
    featured: true
  },
  {
    id: 50,
    slug: "cosy-fleece-half-zip-sweater",
    title: "Cosy Fleece Half-Zip Sweater",
    shortDescription: "Stay warm and look trendy with this soft, fuzzy sweater.",
    price: 35000,
    availability: true,
    mainImages: ["Cosy Fleece Half-Zip Sweater_01.webp", "Cosy Fleece Half-Zip Sweater_00.webp", "Cosy Fleece Half-Zip Sweater_02.webp", "Cosy Fleece Half-Zip Sweater_03.webp", "Cosy Fleece Half-Zip Sweater_04.webp", "Cosy Fleece Half-Zip Sweater_05.webp", "Cosy Fleece Half-Zip Sweater_06.webp", "Cosy Fleece Half-Zip Sweater_07.webp"],
    secondaryImage: "sCosy Fleece Half-Zip Sweater_00.webp",
    colors: [
    {
      name: "Brown",
      availability: true,
      mainImages: ["Cosy Fleece Half-Zip Sweater_00.webp", "Cosy Fleece Half-Zip Sweater_03.webp", "Cosy Fleece Half-Zip Sweater_06.webp", "Cosy Fleece Half-Zip Sweater_07.webp"],
      secondaryImage: "sCosy Fleece Half-Zip Sweater_00.webp",
      code: "#caa276"
    },
    {
      name: "Black",
      availability: true,
      mainImages: ["Cosy Fleece Half-Zip Sweater_02.webp", "Cosy Fleece Half-Zip Sweater_04.webp"],
      secondaryImage: "sCosy Fleece Half-Zip Sweater_00.webp",
      code: "#000000"
    },
    {
      name: "White",
      availability: true,
      mainImages: ["Cosy Fleece Half-Zip Sweater_01.webp", "Cosy Fleece Half-Zip Sweater_05.webp"],
      secondaryImage: "sCosy Fleece Half-Zip Sweater_00.webp",
      code: "#ffffff"
    }
    ],
    category: "tops",
    mood: ["free"],
    occasion: ["casual", "vacation"],
    sizeRange: ["n/a"],
    colorNames: ["brown", "black", "white"],
    material: "Cotton",
    searchKeywords: ["black", "casual", "comfortable", "cotton", "sweater", "white"],
    recommendations: [5, 63],
    tags: ["brown", "casual", "comfortable", "sweater", "white"],
    featured: true
  },
  {
    id: 51,
    slug: "radiant-summer-maxi-dress",
    title: "Radiant Summer Maxi Dress",
    shortDescription: "Slay in this beautiful, stylish dress for your special occasions.",
    price: 35000,
    availability: true,
    mainImages: ["Radiant Summer Maxi Dress_00.webp", "Radiant Summer Maxi Dress_01.webp", "Radiant Summer Maxi Dress_02.webp", "Radiant Summer Maxi Dress_03.webp", "Radiant Summer Maxi Dress_04.webp", "Radiant Summer Maxi Dress_05.webp"],
    secondaryImage: "sRadiant Summer Maxi Dress_02.webp",
    colors: [
    {
      name: "Multi-Colored",
      availability: true,
      mainImages: ["Radiant Summer Maxi Dress_00.webp", "Radiant Summer Maxi Dress_01.webp", "Radiant Summer Maxi Dress_02.webp", "Radiant Summer Maxi Dress_03.webp", "Radiant Summer Maxi Dress_04.webp", "Radiant Summer Maxi Dress_05.webp"],
      secondaryImage: "sRadiant Summer Maxi Dress_02.webp",
      code: "#ac181c"
    }
    ],
    category: "dresses",
    mood: ["elegant"],
    occasion: ["vacation"],
    sizeRange: ["n/a"],
    colorNames: ["multi-colored"],
    material: "silk",
    searchKeywords: ["beach", "casual", "comfortable", "dress","long", "party", "silk"],
    recommendations: [49, 55],
    tags: ["casual", "comfortable", "dress", "elegant"],
    featured: true
  },
  {
    id: 52,
    slug: "alo-two-piece-set",
    title: "alo Two-Piece Set",
    shortDescription: "Look smart and feel comfortable in this trendy matching set.",
    price: 45000,
    availability: true,
    mainImages: ["alo Two-Piece Set_00.webp", "alo Two-Piece Set_01.webp", "alo Two-Piece Set_02.webp", "alo Two-Piece Set_03.webp", "alo Two-Piece Set_04.webp", "alo Two-Piece Set_05.webp"],
    secondaryImage: "salo Two-Piece Set_01.webp",
    colors: [
    {
      name: "Lime Green",
      availability: true,
      mainImages: ["alo Two-Piece Set_00.webp", "alo Two-Piece Set_03.webp", "alo Two-Piece Set_04.webp"],
      secondaryImage: "salo Two-Piece Set_01.webp",
      code: "#b6be03"
    },
    {
      name: "White",
      availability: true,
      mainImages: ["alo Two-Piece Set_01.webp", "alo Two-Piece Set_02.webp", "alo Two-Piece Set_05.webp"],
      secondaryImage: "salo Two-Piece Set_01.webp",
      code: "#d8d7e2"
    }
    ],
    category: "sets",
    mood: ["free", "smart"],
    occasion: ["casual"],
    sizeRange: ["n/a"],
    colorNames: ["Lime Green, White"],
    material: "Linen",
    searchKeywords: ["casual", "comfortable", "green", "hot day", "white", "linen"],
    recommendations: [26, 28],
    tags: ["casual", "comfortable", "green", "white", "linen"],
    featured: true
  },
  {
    id: 53,
    slug: "elegant-satin-luxury-dress",
    title: "Elegant Satin Luxury Dress",
    shortDescription: "Look expensive and stunning at your next wedding or party.",
    price: 70000,
    availability: false,
    mainImages: ["Elegant Satin Luxury Dress_05.webp", "Elegant Satin Luxury Dress_01.webp", "Elegant Satin Luxury Dress_02.webp", "Elegant Satin Luxury Dress_03.webp", "Elegant Satin Luxury Dress_04.webp", "Elegant Satin Luxury Dress_00.webp", "Elegant Satin Luxury Dress_06.webp"],
    secondaryImage: "sElegant Satin Luxury Dress_00.webp",
    colors: [
    {
      name: "Greyed Pink",
      availability: true,
      mainImages: ["Elegant Satin Luxury Dress_01.webp", "Elegant Satin Luxury Dress_02.webp", "Elegant Satin Luxury Dress_04.webp", "Elegant Satin Luxury Dress_06.webp"],
      secondaryImage: "sElegant Satin Luxury Dress_00.webp",
      code: "#bf8ea2"
    },
    {
      name: "Greyed Olive",
      availability: true,
      mainImages: ["Elegant Satin Luxury Dress_00.webp", "Elegant Satin Luxury Dress_03.webp", "Elegant Satin Luxury Dress_05.webp"],
      secondaryImage: "sElegant Satin Luxury Dress_00.webp",
      code: "#a9ae43"
    }
    ],
    category: "dresses",
    mood: ["elegant", "free", "smart"],
    occasion: ["date", "party"],
    sizeRange: ["n/a"],
    colorNames: ["greyed olive", "greyed pink"],
    material: "silk",
    searchKeywords: ["comfortable", "dress","green", "green dress", "long", "long sleeved", "luxurious", "silk"],
    recommendations: [49, 51],
    tags: ["comfortable","long", "long sleeved", "pink", "silk"],
    featured: true
  },
  {
    id: 54,
    slug: "classy-satin-drape-dress",
    title: "Classy Satin Drape Dress",
    shortDescription: "Look like a boss lady at your next big event.",
    price: 70000,
    availability: false,
    mainImages: ["Classy Satin Drape Dress_01.webp", "Classy Satin Drape Dress_03.webp", "Classy Satin Drape Dress_00.webp", "Classy Satin Drape Dress_02.webp", "Classy Satin Drape Dress_04.webp"],
    secondaryImage: "sClassy Satin Drape Dress_00.webp",
    colors: [
    {
      name: "Lure Black",
      availability: true,
      mainImages: ["Classy Satin Drape Dress_00.webp", "Classy Satin Drape Dress_03.webp", "Classy Satin Drape Dress_01.webp", "Classy Satin Drape Dress_02.webp", "Classy Satin Drape Dress_04.webp"],
      secondaryImage: "sClassy Satin Drape Dress_00.webp",
      code: "#000000"
    }
    ],
    category: "dresses",
    mood: ["elegant", "smart"],
    occasion: ["party"],
    sizeRange: ["n/a"],
    colorNames: ["lure black"],
    material: "silk",
    searchKeywords: ["black", "black dress", "comfortable", "dress","long", "luxurious", "night", "party"],
    recommendations: [49, 53],
    tags: ["black", "dress", "elegant","luxurious", "professional"],
    featured: true
  },
  {
    id: 55,
    slug: "casual-luxe-lounge-dress",
    title: "Casual Luxe Lounge Dress",
    shortDescription: "Stay smart and comfortable in this trendy two-piece outfit.",
    price: 70000,
    availability: false,
    mainImages: ["Casual Luxe Lounge Dress_02.webp", "Casual Luxe Lounge Dress_00.webp", "Casual Luxe Lounge Dress_02.webp", "Casual Luxe Lounge Dress_14.webp", "Casual Luxe Lounge Dress_01.webp", "Casual Luxe Lounge Dress_12.webp", "Casual Luxe Lounge Dress_06.webp", "Casual Luxe Lounge Dress_11.webp", "Casual Luxe Lounge Dress_13.webp", "Casual Luxe Lounge Dress_08.webp", "Casual Luxe Lounge Dress_09.webp", "Casual Luxe Lounge Dress_10.webp", "Casual Luxe Lounge Dress_03.webp", "Casual Luxe Lounge Dress_05.webp", "Casual Luxe Lounge Dress_04.webp", "Casual Luxe Lounge Dress_07.webp"],
    secondaryImage: "sCasual Luxe Lounge Dress_02.webp",
    colors: [
    {
      name: "Rust",
      availability: true,
      mainImages: ["Casual Luxe Lounge Dress_00.webp", "Casual Luxe Lounge Dress_08.webp", "Casual Luxe Lounge Dress_10.webp", "Casual Luxe Lounge Dress_03.webp", "Casual Luxe Lounge Dress_05.webp", "Casual Luxe Lounge Dress_07.webp"],
      secondaryImage: "sCasual Luxe Lounge Dress_02.webp",
      code: "#582a19"
    },
    {
      name: "Greyed Brown",
      availability: true,
      mainImages: ["Casual Luxe Lounge Dress_02.webp", "Casual Luxe Lounge Dress_01.webp", "Casual Luxe Lounge Dress_06.webp", "Casual Luxe Lounge Dress_09.webp", "Casual Luxe Lounge Dress_04.webp"],
      secondaryImage: "sCasual Luxe Lounge Dress_02.webp",
      code: "#52453d"
    },
    {
      name: "Black",
      availability: true,
      mainImages: ["Casual Luxe Lounge Dress_14.webp", "Casual Luxe Lounge Dress_12.webp", "Casual Luxe Lounge Dress_11.webp", "Casual Luxe Lounge Dress_13.webp"],
      secondaryImage: "sCasual Luxe Lounge Dress_02.webp",
      code: "#000000"
    }
    ],
    category: "dresses",
    mood: ["elegant", "smart"],
    occasion: ["date", "party"],
    sizeRange: ["n/a"],
    colorNames: ["black", "luxe rust", "greyed brown"],
    material: "silk",
    searchKeywords: ["black", "dress","long", "luxurious", "satin", "silk"],
    recommendations: [49, 53, 54],
    tags: ["black", "black dress", "brown","linen", "long", "luxurious", "smart"],
    featured: true
  },
  {
    id: 56,
    slug: "svelte-desire-dress",
    title: "Svelte Desire Dress",
    shortDescription: "Turn those heads.",
    price: 35000,
    availability: false,
    mainImages: ["Svelte Desire Dress_00.webp", "Svelte Desire Dress_01.webp", "Svelte Desire Dress_02.webp", "Svelte Desire Dress_03.webp", "Svelte Desire Dress_04.webp"],
    secondaryImage: "sSvelte Desire Dress_03.webp",
    colors: [
    {
      name: "Crimson",
      availability: true,
      mainImages: ["Svelte Desire Dress_00.webp", "Svelte Desire Dress_01.webp", "Svelte Desire Dress_02.webp", "Svelte Desire Dress_03.webp", "Svelte Desire Dress_04.webp"],
      secondaryImage: "sSvelte Desire Dress_03.webp",
      code: "#e10b32"
    }
    ],
    category: "dresses",
    mood: ["elegant", "party", "romantic"],
    occasion: ["date", "party"],
    sizeRange: ["n/a"],
    colorNames: ["red", "crimson"],
    material: "Cotton",
    searchKeywords: ["cotton", "date", "dress", "party", "red", "romantic"],
    recommendations: [1, 2],
    tags: ["date", "party"],
    featured: true
  },
  {
    id: 57,
    slug: "elegant-lace-party-dress",
    title: "Elegant Lace Party Dress",
    shortDescription: "Beautiful long dress with classy lace and open back.",
    price: 50000,
    availability: true,
    mainImages: ["Elegant Lace Party Dress_00.webp", "Elegant Lace Party Dress_01.webp", "Elegant Lace Party Dress_02.webp", "Elegant Lace Party Dress_03.webp", "Elegant Lace Party Dress_04.webp"],
    secondaryImage: "sElegant Lace Party Dress_00.webp",
    colors: [
    {
      name: "Scarlet Red",
      availability: true,
      mainImages: ["Elegant Lace Party Dress_00.webp", "Elegant Lace Party Dress_01.webp", "Elegant Lace Party Dress_02.webp", "Elegant Lace Party Dress_03.webp", "Elegant Lace Party Dress_04.webp"],
      secondaryImage: "sElegant Lace Party Dress_00.webp",
      code: "#ff2400"
    }
    ],
    category: "dresses",
    mood: ["elegant", "party", "romantic"],
    occasion: ["date", "party"],
    sizeRange: ["medium"],
    colorNames: ["red"],
    material: "N/A",
    searchKeywords: ["bodycon", "date", "dress", "floral", "long dress", "party", "red", "romantic"],
    recommendations: [7, 56],
    tags: ["dress", "long dress", "luxurious", "night", "party"],
    featured: true
  },
  {
    id: 58,
    slug: "rich-flame-streetwear-set",
    title: "Rich Flame Streetwear Set",
    shortDescription: "Trendy two-piece outfit with stylish graphics and comfortable fit.",
    price: 35000,
    availability: true,
    mainImages: ["Rich Flame Streetwear Set_00.webp", "Rich Flame Streetwear Set_01.webp", "Rich Flame Streetwear Set_02.webp", "Rich Flame Streetwear Set_03.webp", "Rich Flame Streetwear Set_04.webp"],
    secondaryImage: "sRich Flame Streetwear Set_02.webp",
    colors: [
    {
      name: "Grey",
      availability: true,
      mainImages: ["Rich Flame Streetwear Set_00.webp", "Rich Flame Streetwear Set_01.webp", "Rich Flame Streetwear Set_02.webp", "Rich Flame Streetwear Set_03.webp", "Rich Flame Streetwear Set_04.webp"],
      secondaryImage: "sRich Flame Streetwear Set_02.webp",
      code: "#8e9195"
    }
    ],
    category: "sets",
    mood: ["free"],
    occasion: ["casual"],
    sizeRange: ["n/a"],
    colorNames: ["grey"],
    material: "Cotton",
    searchKeywords: ["casual", "comfortable", "cotton", "2 piece"],
    recommendations: [59, 61],
    tags: ["casual", "comfortable", "cotton", "streetwear"],
    featured: true
  },
  {
    id: 59,
    slug: "urban-graphic-tracksuit-set",
    title: "Urban Graphic Tracksuit Set",
    shortDescription: "Comfortable casual wear with unique printed designs for daily style.",
    price: 35000,
    availability: true,
    mainImages: ["Urban Graphic Tracksuit Set_00.webp", "Urban Graphic Tracksuit Set_01.webp", "Urban Graphic Tracksuit Set_02.webp", "Urban Graphic Tracksuit Set_03.webp", "Urban Graphic Tracksuit Set_04.webp"],
    secondaryImage: "sUrban Graphic Tracksuit Set_04.webp",
    colors: [
    {
      name: "Light Pink",
      availability: true,
      mainImages: ["Urban Graphic Tracksuit Set_00.webp", "Urban Graphic Tracksuit Set_01.webp", "Urban Graphic Tracksuit Set_02.webp", "Urban Graphic Tracksuit Set_03.webp", "Urban Graphic Tracksuit Set_04.webp"],
      secondaryImage: "sUrban Graphic Tracksuit Set_04.webp",
      code: "#c294aa"
    }
    ],
    category: "sets",
    mood: ["free"],
    occasion: ["casual"],
    sizeRange: ["n/a"],
    colorNames: ["pink"],
    material: "Cotton",
    searchKeywords: ["2 piece", "casual", "comfortable", "cotton"],
    recommendations: [58, 61],
    tags: ["casual", "comfortable", "cotton", "streetwear"],
    featured: true
  },
  {
    id: 60,
    slug: "cherry-print-casual-set",
    title: "Cherry Print Casual Set",
    shortDescription: "Stylish matching top and trousers for a cool, everyday look.",
    price: 50000,
    availability: true,
    mainImages: ["Cherry Print Casual Set_01.webp", "Cherry Print Casual Set_00.webp", "Cherry Print Casual Set_02.webp"],
    secondaryImage: "sCherry Print Casual Set_01.webp",
    colors: [
    {
      name: "Brushed White",
      availability: true,
      mainImages: ["Cherry Print Casual Set_01.webp", "Cherry Print Casual Set_00.webp", "Cherry Print Casual Set_02.webp"],
      secondaryImage: "sCherry Print Casual Set_01.webp",
      code: "#d5d4da"
    }
    ],
    category: "sets",
    mood: ["free", "smart"],
    occasion: ["casual", "party", "vacation"],
    sizeRange: ["n/a"],
    colorNames: ["white"],
    material: "Cotton",
    searchKeywords: ["2 piece", "casual", "comfortable", "cotton"],
    recommendations: [59, 61],
    tags: ["casual", "comfortable", "cotton"],
    featured: true
  },
  {
    id: 61,
    slug: "milano-3-piece-lounge-set",
    title: "Milano 3-Piece Lounge Set",
    shortDescription: "A stylish crop-top, inner vest, and comfortable wide-leg pants",
    price: 50000,
    availability: true,
    mainImages: ["Milano 3-Piece Lounge Set_00.webp", "Milano 3-Piece Lounge Set_01.webp", "Milano 3-Piece Lounge Set_02.webp", "Milano 3-Piece Lounge Set_03.webp", "Milano 3-Piece Lounge Set_04.webp"],
    secondaryImage: "sMilano 3-Piece Lounge Set_00.webp",
    colors: [
    {
      name: "Pink",
      availability: true,
      mainImages: ["Milano 3-Piece Lounge Set_00.webp", "Milano 3-Piece Lounge Set_01.webp", "Milano 3-Piece Lounge Set_02.webp", "Milano 3-Piece Lounge Set_03.webp", "Milano 3-Piece Lounge Set_04.webp"],
      secondaryImage: "sMilano 3-Piece Lounge Set_00.webp",
      code: "#be7892"
    }
    ],
    category: "sets",
    mood: ["free", "party", "smart"],
    occasion: ["casual", "party", "vacation"],
    sizeRange: ["n/a"],
    colorNames: ["pink"],
    material: "Cotton",
    searchKeywords: ["2 piece", "casual", "comfortable", "cotton"],
    recommendations: [58, 60],
    tags: ["casual", "comfortable", "cotton", "streetwear"],
    featured: true
  },
  {
    id: 62,
    slug: "ribbed-tie-dye-bodycon-dress",
    title: "Ribbed Tie-Dye Bodycon Dress",
    shortDescription: "Stretchy long dress with a beautiful body-hugging fit.",
    price: 30000,
    availability: true,
    mainImages: ["Ribbed Tie-Dye Bodycon Dress_00.webp", "Ribbed Tie-Dye Bodycon Dress_01.webp", "Ribbed Tie-Dye Bodycon Dress_02.webp", "Ribbed Tie-Dye Bodycon Dress_03.webp", "Ribbed Tie-Dye Bodycon Dress_04.webp"],
    secondaryImage: "sRibbed Tie-Dye Bodycon Dress_02.webp",
    colors: [
    {
      name: "Clouded-Brown",
      availability: true,
      mainImages: ["Ribbed Tie-Dye Bodycon Dress_00.webp", "Ribbed Tie-Dye Bodycon Dress_01.webp", "Ribbed Tie-Dye Bodycon Dress_02.webp", "Ribbed Tie-Dye Bodycon Dress_03.webp", "Ribbed Tie-Dye Bodycon Dress_04.webp"],
      secondaryImage: "sRibbed Tie-Dye Bodycon Dress_02.webp",
      code: "#5c4132"
    }
    ],
    category: "dresses",
    mood: ["party", "smart"],
    occasion: ["casual", "party"],
    sizeRange: ["medium"],
    colorNames: ["brown"],
    material: "Cotton",
    searchKeywords: ["dress", "long dress", "party", "bodycon", "tight"],
    recommendations: [8, 48, 57],
    tags: ["brown", "casual", "dress", "long dress", "tight"],
    featured: true
  },
  {
    id: 63,
    slug: "checkered-fur-collar-bomber-jacket",
    title: "Checkered Fur-Collar Bomber Jacket",
    shortDescription: "Warm checkered jacket with a soft, stylish fur collar.",
    price: 55000,
    availability: true,
    mainImages: ["Checkered Fur-Collar Bomber Jacket_00.webp", "Checkered Fur-Collar Bomber Jacket_01.webp", "Checkered Fur-Collar Bomber Jacket_02.webp", "Checkered Fur-Collar Bomber Jacket_03.webp", "Checkered Fur-Collar Bomber Jacket_04.webp", "Checkered Fur-Collar Bomber Jacket_05.webp", "Checkered Fur-Collar Bomber Jacket_06.webp"],
    secondaryImage: "sCheckered Fur-Collar Bomber Jacket_01.webp",
    colors: [
    {
      name: "Eth-Brown",
      availability: true,
      mainImages: ["Checkered Fur-Collar Bomber Jacket_00.webp", "Checkered Fur-Collar Bomber Jacket_01.webp", "Checkered Fur-Collar Bomber Jacket_02.webp", "Checkered Fur-Collar Bomber Jacket_03.webp", "Checkered Fur-Collar Bomber Jacket_04.webp", "Checkered Fur-Collar Bomber Jacket_05.webp", "Checkered Fur-Collar Bomber Jacket_06.webp"],
      secondaryImage: "sCheckered Fur-Collar Bomber Jacket_01.webp",
      code: "#9f8879"
    }
    ],
    category: "tops",
    mood: ["free", "smart"],
    occasion: ["casual", "date"],
    sizeRange: ["medium"],
    colorNames: ["brown"],
    material: "N/A",
    searchKeywords: ["casual", "comfortable", "date", "layering", "long sleeved", "sweater", "jacket"],
    recommendations: [5, 50],
    tags: ["brown", "casual", "comfortable", "smart", "sweater"],
    featured: true
  },
  {
    id: 64,
    slug: "draped-halter-maxi-dress",
    title: "Draped Halter Maxi Dress",
    shortDescription: "Elegant backless dress with a stylish draped front design.",
    price: 40000,
    availability: false,
    mainImages: ["Draped Halter Maxi Dress_00.webp", "Draped Halter Maxi Dress_01.webp", "Draped Halter Maxi Dress_02.webp", "Draped Halter Maxi Dress_03.webp", "Draped Halter Maxi Dress_04.webp", "Draped Halter Maxi Dress_05.webp"],
    secondaryImage: "sDraped Halter Maxi Dress_00.webp",
    colors: [
    {
      name: "Pastel Azure",
      availability: true,
      mainImages: ["Draped Halter Maxi Dress_00.webp", "Draped Halter Maxi Dress_01.webp", "Draped Halter Maxi Dress_02.webp", "Draped Halter Maxi Dress_03.webp", "Draped Halter Maxi Dress_04.webp", "Draped Halter Maxi Dress_05.webp"],
      secondaryImage: "sDraped Halter Maxi Dress_00.webp",
      code: "#88cff2"
    }
    ],
    category: "dresses",
    mood: ["elegant", "party"],
    occasion: ["date", "party"],
    sizeRange: ["medium"],
    colorNames: ["blue"],
    material: "N/A",
    searchKeywords: ["blue", "long dress", "luxurious"],
    recommendations: [54, 57],
    tags: ["blue", "elegant", "smart"],
    featured: true
  },
  {
    id: 65,
    slug: "floral-tiered-maxi-dress",
    title: "Floral Tiered Maxi Dress",
    shortDescription: "Comfortable strapless dress with a beautiful layered design.",
    price: 35000,
    availability: true,
    mainImages: ["Floral Tiered Maxi Dress_00.webp", "Floral Tiered Maxi Dress_01.webp", "Floral Tiered Maxi Dress_02.webp", "Floral Tiered Maxi Dress_03.webp", "Floral Tiered Maxi Dress_04.webp"],
    secondaryImage: "sFloral Tiered Maxi Dress_01.webp",
    colors: [
    {
      name: "Floral Green",
      availability: true,
      mainImages: ["Floral Tiered Maxi Dress_00.webp", "Floral Tiered Maxi Dress_01.webp", "Floral Tiered Maxi Dress_02.webp", "Floral Tiered Maxi Dress_03.webp", "Floral Tiered Maxi Dress_04.webp"],
      secondaryImage: "sFloral Tiered Maxi Dress_01.webp",
      code: "#147c44"
    }
    ],
    category: "dresses",
    mood: ["free"],
    occasion: ["beach", "party", "vacation"],
    sizeRange: ["medium"],
    colorNames: ["green"],
    material: "N/A",
    searchKeywords: ["beach", "casual", "comfortable", "dress", "floral", "long dress"],
    recommendations: [38, 44],
    tags: ["beach", "casual", "comfortable", "dress", "floral"],
    featured: true
  },
  {
    id: 66,
    slug: "elegant-ruched-cutout-gown",
    title: "Elegant Ruched Cutout Gown",
    shortDescription: "Stylish long dress with a sexy side cutout design.",
    price: 35000,
    availability: true,
    mainImages: ["Elegant Ruched Cutout Gown_00.webp", "Elegant Ruched Cutout Gown_01.webp", "Elegant Ruched Cutout Gown_03.webp", "Elegant Ruched Cutout Gown_04.webp", "Elegant Ruched Cutout Gown_05.webp", "Elegant Ruched Cutout Gown_06.webp", "Elegant Ruched Cutout Gown_07.webp"],
    secondaryImage: "sElegant Ruched Cutout Gown_02.webp",
    colors: [
    {
      name: "Olive",
      availability: false,
      mainImages: ["Elegant Ruched Cutout Gown_00.webp", "Elegant Ruched Cutout Gown_01.webp", "Elegant Ruched Cutout Gown_03.webp", "Elegant Ruched Cutout Gown_04.webp", "Elegant Ruched Cutout Gown_05.webp", "Elegant Ruched Cutout Gown_06.webp", "Elegant Ruched Cutout Gown_07.webp"],
      secondaryImage: "sElegant Ruched Cutout Gown_02.webp",
      code: "#999d05"
    }
    ],
    category: "dresses",
    mood: ["elegant", "smart"],
    occasion: ["date", "party"],
    sizeRange: ["medium"],
    colorNames: ["green"],
    material: "N/A",
    searchKeywords: ["bodycon", "date", "dress", "long dress", "luxurious", "party"],
    recommendations: [53, 54, 55],
    tags: ["date", "dress", "long dress"],
    featured: true
  },

  
];

module.exports = products;