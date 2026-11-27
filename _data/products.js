// _data/products.js
// Main (900x1200)px .webp in /assets/images/main/ | Secondary (600x800)px .webp in /assets/images/secondary/
const enrichProducts = require("../utils/productEngine.js");

const rawProducts = [
  {
    id: 1,
    title: "Midnight Bloom Ruffle Mini",
    desc: "Playful high-waisted mini skirt finished with dark botanical blooms and a flirty ruffled hem.",
    price: 20000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free", "romantic"], ["casual", "vacation"]],
    sizes: ["S", "M"],
    colors: [
      ["Black Floral", "#1f1f1f", ["00", "01", "02"]]
    ]
  },
  {
    id: 2,
    title: "Checkered Pajama Set",
    desc: "Soft, smooth two-piece sleep set tailored in a classic crimson check for breathable overnight comfort.",
    price: 30000,
    taxonomy: ["sets", "pajamas"],
    vibes: [["free"], ["casual"]],
    colors: [
      ["Night Red", "#a10000", ["00", "01", "02", "03"]]
    ]
  },
  {
    id: 3,
    title: "Gold Button Skirt",
    desc: "Tailored high-waist cotton pencil skirt accented with polished gold-tone front buttons.",
    price: 30000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["smart", "free"], ["office", "casual"]],
    sizes: ["M"],
    colors: [
      ["Black", "#000000", ["00", "01"]]
    ]
  },
  {
    id: 4,
    title: "Black Bodycon Party Dress",
    desc: "Curve-hugging stretch midi dress sculpted with a sleek fit and flared pleated hem.",
    price: 50000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["elegant", "free"], ["party", "office"]],
    sizes: ["M", "L"],
    thumb: "01",
    colors: [
      ["Black", "#000000", ["00", "01", "02", "03", "04", "05"]]
    ]
  },
  {
    id: 5,
    title: "Halter Neck Ruffle Dress",
    desc: "Light, soft cotton that feels cool and flowy.",
    pinned: 1,
    price: 45000,
    taxonomy: ["dresses", "short-dresses"],
    vibes: [["elegant", "romantic", "free"], ["casual", "vacation", "party", "date"]],
    colors: [
      ["Deep Yellow",     "#ffca10", ["00"]],
      ["Crimson Red",     "#82051f", ["01"]],
      ["Black",           "#222327", ["02"]],
      ["Gradient Yellow", "#ffe952", ["03"]]
    ]
  },
  {
    id: 6,
    title: "Violet Bloom Wrap Skirt",
    desc: "Breezy cotton wrap maxi skirt dusted in soft lavender florals for effortless daytime movement.",
    price: 20000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free", "elegant"], ["vacation", "casual"]],
    colors: [
      ["Violet Floral", "#76599c", ["00", "01", "02"]]
    ]
  },
  {
    id: 7,
    title: "Art Deco Mirage Skirt",
    desc: "Lightweight cotton wrap skirt patterned in an intricate midnight-blue geometric motif.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free", "elegant"], ["vacation", "casual"]],
    colors: [
      ["Dark Blue", "#181b47", ["00", "01"]]
    ]
  },
  {
    id: 8,
    title: "Dream Silk Skirt",
    desc: "Luminous silky-finish wrap maxi skirt that drapes softly in pastel watercolour tones.",
    price: 35000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free", "elegant"], ["party", "office"]],
    colors: [
      ["Neon Pink",   "#b594ae", ["00", "01", "02"]],
      ["Neon Indigo", "#9c94bb", ["03", "04"]]
    ]
  },
  {
    id: 9,
    title: "Tropical Breeze Ruffle Skirt",
    desc: "Flowing palm-print maxi skirt trimmed with cascading ruffles for sunlit getaway days.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free"], ["party", "vacation"]],
    colors: [
      ["Blue Olive",  "#b1a84a", ["04", "05", "06"]],
      ["Yellow Blue", "#9ba8c8", ["00", "01", "02", "03"]]
    ]
  },
  {
    id: 10,
    title: "Bordeaux Floral Wrap Skirt",
    desc: "Deep wine-toned cotton wrap skirt sprinkled with delicate romantic florals.",
    price: 30000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["romantic", "free"], ["casual"]],
    sizes: ["M"],
    colors: [
      ["Dark Red", "#723039", ["01", "00", "02", "03"]]
    ]
  },
  {
    id: 11,
    title: "Emerald Garden Wrap Skirt",
    desc: "Breathable forest-green cotton wrap skirt brightened with sunlit floral accents.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free", "romantic"], ["casual", "date"]],
    sizes: ["M"],
    colors: [
      ["Dark Green", "#3f544d", ["00", "01", "02"]]
    ]
  },
  {
    id: 12,
    title: "Midnight Meadow Ruffle Skirt",
    desc: "Breezy cotton wrap skirt with vibrant blooms over black and a cascading asymmetric ruffle hem.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free", "smart"], ["vacation"]],
    colors: [
      ["Black Floral", "#2e282e", ["00", "01", "02"]]
    ]
  },
  {
    id: 13,
    title: "Mint Green Wrap Skirt",
    desc: "Crisp pastel-mint cotton wrap skirt with an easy waist tie and clean, airy drape.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free", "elegant", "romantic"], ["date", "casual", "party"]],
    colors: [
      ["Mint Green", "#afc3aa", ["00", "01", "02"]]
    ]
  },
  {
    id: 14,
    title: "Sunlit Meadow Wrap Skirt",
    desc: "Warm golden-olive cotton wrap maxi printed with soft botanicals for bright daytime styling.",
    price: 30000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free", "elegant"], ["vacation", "casual"]],
    colors: [
      ["Olive Yellow", "#ccbb6f", ["00", "01", "02"]]
    ]
  },
  {
    id: 15,
    title: "Midnight Dot Ruched Skirt",
    desc: "Fluid silk-feel polka-dot skirt sculpted with flattering side ruching for desk-to-dinner polish.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["elegant", "smart"], ["date", "office"]],
    sizes: ["M"],
    colors: [
      ["Dark Grey Blue", "#171d2e", ["00", "01", "02", "03"]]
    ]
  },
  {
    id: 16,
    title: "Lime Glow Pajamas",
    desc: "Cool silk-cotton blend sleepwear set in zesty olive-lime for lightweight, breathable nights.",
    price: 30000,
    taxonomy: ["sets", "pajamas"],
    vibes: [["free"], ["casual"]],
    colors: [
      ["Olive Lime", "#a9b62c", ["00", "01", "02"]]
    ]
  },
  {
    id: 17,
    title: "Classy Rust Ruffle Dress",
    desc: "Structured cotton midi dress in rich rust, cinched with a waist belt and subtle ruffle detailing.",
    price: 35000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["romantic", "smart"], ["date", "office"]],
    colors: [
      ["Rust Red", "#c3434a", ["00", "01", "02", "03"]]
    ]
  },
  {
    id: 18,
    title: "Purple Floral Pajamas",
    desc: "Plush silk-cotton pajama set printed in deep magenta florals for relaxed, polished lounging.",
    price: 30000,
    taxonomy: ["sets", "pajamas"],
    vibes: [["free"], ["casual"]],
    colors: [
      ["Dark Magenta", "#711856", ["00", "01", "02", "03"]]
    ]
  },
  {
    id: 19,
    title: "Midnight Pleated Mini Dress",
    desc: "Sleek silky-sheen mini dress with crisp accordion pleats tailored for sharp, effortless polish.",
    price: 30000,
    taxonomy: ["dresses", "short-dresses"],
    vibes: [["elegant", "smart"], ["office"]],
    colors: [
      ["Glossy Black", "#000000", ["00", "01", "02"]]
    ]
  },
  {
    id: 20,
    title: "Classy Floral Silk Pajama",
    desc: "Smooth silk-cotton lounge set in jet black with refined floral artwork and a relaxed cut.",
    price: 30000,
    taxonomy: ["sets", "pajamas"],
    vibes: [["free"], ["casual"]],
    colors: [
      ["Black", "#000000", ["00", "01", "02"]]
    ]
  },
  {
    id: 21,
    title: "Trendy Art Pajamas",
    desc: "Long-sleeved silk-cotton lounge set featuring bold modern art prints for cozy nights in.",
    price: 30000,
    taxonomy: ["sets", "pajamas"],
    vibes: [["free"], ["casual"]],
    colors: [
      ["Pink",   "#cf3480", ["00", "01", "02"]],
    ]
  },
  {
    id: 22,
    title: "Emerald Floral Tea Dress",
    desc: "Airy cotton tea-length dress dotted with delicate blossoms and a flattering, easy-wear silhouette.",
    price: 35000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["elegant", "free"], ["casual"]],
    sizes: ["M"],
    colors: [
      ["Azure", "#2d5966", ["00", "01", "02"]]
    ]
  },
  {
    id: 23,
    title: "Classy Rose Satin Pajama",
    desc: "Silky-soft rose-toned cotton-blend pajama set tailored for cool, comfortable sleep.",
    price: 30000,
    taxonomy: ["sets", "pajamas"],
    vibes: [["free"], ["casual"]],
    colors: [
      ["Rose Pink", "#cd737c", ["00", "01"]]
    ]
  },
  {
    id: 24,
    title: "Diamond Flare Set",
    desc: "Vibrant cobalt silk-cotton shirt and flared skirt co-ord built for seamless office-to-evening wear.",
    price: 30000,
    taxonomy: ["sets", "2-piece"],
    vibes: [["free", "smart"], ["casual", "office", "party"]],
    sizes: ["M"],
    colors: [
      ["Vivid Blue", "#0a37ca", ["00", "01", "02"]]
    ]
  },
  {
    id: 25,
    title: "Zebra Pattern Pajama Set",
    desc: "Statement royal-blue silk-cotton sleep set patterned in crisp zebra stripes for elevated lounging.",
    price: 30000,
    taxonomy: ["sets", "pajamas"],
    vibes: [["free"], ["casual"]],
    colors: [
      ["Royal Blue", "#0d40c0", ["00", "01", "02"]]
    ]
  },
  {
    id: 26,
    title: "Gingham Wrap Short Skirt",
    desc: "Crisp cotton gingham mini skirt with an adjustable wrap front for smart-casual styling.",
    price: 20000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["smart"], ["casual", "office"]],
    colors: [
      ["Checkered White", "#cfced2", ["00", "01", "02"]]
    ]
  },
  {
    id: 27,
    title: "Blue Floral Wrap Skirt",
    desc: "Flowing navy wrap maxi skirt finished with delicate florals and a self-tie waist.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free", "smart"], ["casual", "office"]],
    sizes: ["M"],
    colors: [
      ["Navy Blue", "#202248", ["00", "01", "02"]]
    ]
  },
  {
    id: 28,
    title: "Yellow Florals Wrap Skirt",
    desc: "Fresh white wrap maxi skirt brightened with sunny yellow florals and a soft frilled hem.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free", "smart"], ["casual", "office"]],
    sizes: ["M"],
    colors: [
      ["Yellow & White", "#e6e6e6", ["00", "01", "02", "03"]]
    ]
  },
  {
    id: 29,
    title: "Black Floral Wrap Skirt",
    desc: "Versatile dark-ground floral wrap maxi skirt with an effortless drape for work or weekend.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free", "smart"], ["casual", "office"]],
    sizes: ["M"],
    colors: [
      ["Black", "#171717", ["00", "01", "02", "03"]]
    ]
  },
  {
    id: 30,
    title: "Green Daisy Wrap Skirt",
    desc: "Sage-green wrap maxi skirt patterned with oversized white daisies for crisp daytime charm.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free", "smart"], ["casual", "office"]],
    sizes: ["M"],
    colors: [
      ["Green", "#819e7d", ["02", "00", "01", "04"]]
    ]
  },
  {
    id: 31,
    title: "Red Floral Ruffled Skirt",
    desc: "Vibrant crimson floral skirt accented with a fluid ruffled hem for polished everyday wear.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["smart"], ["casual", "office"]],
    colors: [
      ["Red", "#a62a11", ["00", "01", "02", "03"]]
    ]
  },
  {
    id: 32,
    title: "Mini Ruffle Tie Skirt",
    desc: "Flirty floral mini wrap skirt cinched with a side ribbon tie and playful tiered ruffles.",
    price: 20000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["elegant", "free", "romantic"], ["casual", "date", "party"]],
    sizes: ["S", "M"],
    colors: [
      ["Red",    "#a52021", ["03", "04", "05"]],
      ["Orange", "#e04942", ["00", "01", "02"]]
    ]
  },
  {
    id: 33,
    title: "Green Floral Ruffle Skirt",
    desc: "Teal-green floral skirt styled with a breezy fit and softly ruffled bottom hem.",
    price: 20000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["smart"], ["casual"]],
    sizes: ["S"],
    colors: [
      ["Green", "#258577", ["00", "01", "02"]]
    ]
  },
  {
    id: 34,
    title: "Short Floral Ruffle Skirt",
    desc: "Airy white floral mini skirt with an adjustable wrap-tie waist and delicate frill trim.",
    price: 20000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["elegant", "free", "smart"], ["casual", "date", "party", "vacation"]],
    sizes: ["S"],
    colors: [
      ["Floral White", "#efeeee", ["00", "01", "02", "03", "04"]]
    ]
  },
  {
    id: 35,
    title: "Green Leaf Floral Skirt",
    desc: "Cool-toned botanical maxi skirt featuring lush green foliage prints and a breezy silhouette.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free"], ["vacation"]],
    sizes: ["M"],
    colors: [
      ["Cool White", "#bcc2cf", ["00", "01", "02", "03"]]
    ]
  },
  {
    id: 36,
    title: "Green Mix Floral Skirt",
    desc: "Deep forest-green maxi skirt patterned in vibrant florals with a softly waved hemline.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free"], ["casual"]],
    sizes: ["S", "M"],
    colors: [
      ["Forest Green", "#1d5c2f", ["00", "01", "02"]]
    ]
  },
  {
    id: 37,
    title: "Navy Floral Wrap Skirt",
    desc: "Playful dark-indigo floral mini wrap skirt finished with a side waist tie and soft ruffles.",
    price: 20000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["free"], ["casual", "party", "vacation"]],
    sizes: ["S"],
    colors: [
      ["Dark Indigo", "#2b2b3f", ["00", "01", "02"]]
    ]
  },
  {
    id: 38,
    title: "Orange Ruched Bodycon Skirt",
    desc: "Bold tangerine stretch mini skirt contoured with sculpted ruching for a sleek night-out fit.",
    price: 25000,
    taxonomy: ["bottoms", "skirts"],
    vibes: [["elegant"], ["party"]],
    sizes: ["S"],
    colors: [
      ["Orange", "#ff6600", ["00", "01", "02"]]
    ]
  },
  {
    id: 39,
    title: "Satin Gala Maxi Dress",
    desc: "Lustrous olive silk-satin evening gown cut in a figure-skimming silhouette for formal nights.",
    price: 70000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["elegant", "smart"], ["date", "party"]],
    colors: [
      ["Dark Olive", "#717b12", ["00", "01", "02"]]
    ]
  },
  {
    id: 40,
    title: "Cosy Fleece Half-Zip Sweater",
    desc: "Plush cotton-fleece pullover featuring a high half-zip collar for warm, laid-back layering.",
    price: 35000,
    taxonomy: ["tops", "shirts"],
    vibes: [["free"], ["casual", "vacation"]],
    colors: [
      ["White", "#ffffff", ["01", "05"]],
      ["Brown", "#caa276", ["00", "03", "06", "07"]],
      ["Black", "#000000", ["02", "04"]]
    ]
  },
  {
    id: 41,
    title: "Radiant Summer Maxi Dress",
    desc: "Fluid silky maxi dress in vibrant multicolour prints designed to move effortlessly in warm breezes.",
    price: 35000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["elegant"], ["vacation"]],
    thumb: "02",
    colors: [
      ["Multi-Colored", "#ac181c", ["00", "01", "02", "03", "04", "05"]]
    ]
  },
  {
    id: 42,
    title: "Alo Two-Piece Set",
    desc: "Breathable linen-blend matching co-ord cut for crisp, effortless warm-weather styling.",
    price: 45000,
    taxonomy: ["sets", "2-piece"],
    vibes: [["free", "smart"], ["casual"]],
    thumb: "01",
    colors: [
      ["Lime Green", "#b6be03", ["00", "03", "04"]],
      ["White",      "#d8d7e2", ["01", "02", "05"]]
    ]
  },
  {
    id: 43,
    title: "Elegant Satin Luxury Dress",
    desc: "Long-sleeved silk-satin occasion maxi with a luminous sheen crafted for weddings and soirées.",
    price: 70000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["elegant", "free", "smart"], ["date", "party"]],
    colors: [
      ["Greyed Olive", "#a9ae43", ["05", "00", "03"]],
      ["Greyed Pink",  "#bf8ea2", ["01", "02", "04", "06"]]
    ]
  },
  {
    id: 44,
    title: "Classy Satin Drape Dress",
    desc: "Commanding jet-black silk-satin maxi designed with sculpted front draping for black-tie polish.",
    price: 70000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["elegant", "smart"], ["party"]],
    colors: [
      ["Pure Black", "#000000", ["01", "03", "00", "02", "04"]]
    ]
  },
  {
    id: 45,
    title: "Casual Luxe Lounge Dress",
    desc: "Smooth, silky-drape two-piece lounge dress with an airy, flattering fall.",
    price: 70000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["elegant", "smart"], ["date", "party"]],
    thumb: "02",
    colors: [
      ["Greyed Brown", "#52453d", ["02", "01", "06", "09", "04"]],
      ["Rust",         "#582a19", ["00", "08", "10", "03", "05", "07"]],
      ["Black",        "#000000", ["14", "12", "11", "13"]]
    ]
  },
  {
    id: 46,
    title: "Elegant Lace Party Dress",
    desc: "Statement scarlet maxi dress tailored with intricate floral lace and a sultry open back.",
    price: 50000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["elegant", "romantic"], ["date", "party"]],
    sizes: ["M"],
    colors: [
      ["Scarlet Red", "#ff2400", ["00", "01", "02", "03", "04"]]
    ]
  },
  {
    id: 47,
    title: "Urban Graphic Tracksuit Set",
    desc: "Relaxed cotton two-piece tracksuit featuring statement streetwear graphics in soft blush pink.",
    price: 35000,
    taxonomy: ["sets", "2-piece"],
    vibes: [["free"], ["casual"]],
    thumb: "04",
    colors: [
      ["Light Pink", "#c294aa", ["00", "01", "02", "03", "04"]]
    ]
  },
  {
    id: 48,
    title: "Milano 3-Piece Lounge Set",
    desc: "Coordinated soft-cotton trio pairing a cropped outer top, fitted inner vest, and wide-leg trousers.",
    price: 50000,
    taxonomy: ["sets", "2-piece"],
    vibes: [["free", "smart"], ["casual", "party", "vacation"]],
    colors: [
      ["Dusty Pink", "#be7892", ["00", "01", "02", "03", "04"]]
    ]
  },
  {
    id: 49,
    title: "Checkered Fur-Collar Bomber Jacket",
    desc: "Structured checkered bomber jacket finished with a plush faux-fur collar for crisp evening layering.",
    price: 55000,
    taxonomy: ["tops", "shirts"],
    vibes: [["free", "smart"], ["casual", "date"]],
    sizes: ["M"],
    thumb: "01",
    colors: [
      ["Earth Brown", "#9f8879", ["00", "02", "04", "06"]],
      ["Black",       "#000000", ["01", "03", "05"]]
    ]
  },
  {
    id: 50,
    title: "Draped Halter Maxi Dress",
    desc: "Fluid pastel-azure halter maxi featuring a cascading cowl neckline and an open-back finish.",
    price: 40000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["elegant"], ["date", "party"]],
    sizes: ["M"],
    colors: [
      ["Pastel Azure", "#88cff2", ["00", "01", "02", "03", "04", "05"]]
    ]
  },
  {
    id: 51,
    title: "Floral Tiered Maxi Dress",
    desc: "Breezy strapless emerald floral maxi built with softly cascading tiers for resort and garden days.",
    price: 40000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["free"], ["party", "vacation"]],
    sizes: ["M"],
    thumb: "01",
    colors: [
      ["Floral Green", "#147c44", ["00", "01", "02", "03", "04"]]
    ]
  },
  {
    id: 52,
    title: "The Radiant Sunflower Maxi",
    desc: "Sun-kissed floral maxi dress cut in an airy, ankle-grazing silhouette for effortless warm-weather wear.",
    pinned: 2,
    price: 35000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["elegant", "free"], ["casual", "party", "vacation"]],
    sizes: ["M"],
    colors: [
      ["Azure Blue", "#8eb9d4", ["00", "05"]],
      ["White",      "#ffffff", ["01", "04"]],
      ["Black",      "#212124", ["02"]],
      ["Green",      "#83a20c", ["03", "06"]]
    ]
  },
  {
    id: 53,
    title: "Clasp Off-Shoulder Top",
    desc: "Sculpted off-the-shoulder knit top detailed with a statement front clasp for day-to-night versatility.",
    price: 25000,
    taxonomy: ["tops", "blouses",],
    vibes: [["elegant", "free", "smart"], ["casual", "date", "party"]],
    thumb: "05",
    colors: [
      ["Blue",       "#4978a2", ["00"]],
      ["Cream",      "#eee8d6", ["05"]],
      ["Olive",      "#c9c043", ["07"]],
      ["Army Green", "#5a5129", ["03", "04"]],
      ["Red",        "#b91423", ["01", "02"]],
      ["Black",      "#1e1a16", ["06"]]
    ]
  },
  {
    id: 54,
    title: "Sweetheart Ruched Top",
    desc: "Body-skimming ruched knit blouse accented with delicate heart-shaped buttons and a sweetheart neckline.",
    price: 20000,
    taxonomy: ["tops", "blouses"],
    vibes: [["elegant", "smart"], ["casual", "party", "vacation"]],
    sizes: ["M"],
    colors: [
      ["Brown", "#964025", ["00"]],
      ["Pink",  "#ae1268", ["01"]],
      ["Black", "#000000", ["02"]],
      ["White", "#fbfbfb", ["03", "04", "05", "06"]]
    ]
  },
  {
    id: 55,
    title: "The Signature Box Satchel",
    desc: "Structured textured-leather box satchel elevated with crisp edges and gleaming gold-tone hardware.",
    price: 20000,
    taxonomy: ["bags", "satchels"],
    vibes: [["elegant", "smart"], ["casual", "party"]],
    colors: [
      ["Azure Blue",   "#6091cd", ["00", "02"]],
      ["Lauren Brown", "#afa081", ["01", "03"]]
    ]
  },
  {
    id: 56,
    title: "Belted Plaid Midi Dress",
    desc: "Soft, breathable cotton with crisp texture for effortless elegance.",
    price:55000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["smart"], ["office"]],
    colors: [
      ["Inch Grey", "#979382", ["00", "01", "02", "03", "04"]]
    ]
  },
  {
    id: 57,
    title: "Scarf Tie Tote Bag",
    desc: "Soft, sturdy leather that feels great for daily use.",
    price: 80000,
    taxonomy: ["bags", "totes"],
    vibes: [["elegant", "smart"], ["casual", "office"]],
    sizes: ["L"],
    colors: [
      ["Grey Blue", "#3e465a", ["00", "01", "02", "03", "04"]]
    ]
  },
  {
    id: 58,
    title: "Charm Chain Dome Bag",
    desc: "Soft, sturdy leather-feel material made for daily use.",
    price: 85000,
    taxonomy: ["bags", "hand-bag"],
    vibes: [["elegant", "smart", "romantic"], ["casual", "date", "party"]],
    sizes: ["M"],
    colors: [
      ["Muted Crimson", "#a81441", ["00", "02", "04", "05", "06"]],
      ["Dark Blue",     "#0e1426", ["01", "03"]]
    ]
  },
  {
    id: 59,
    title: "Teddy Charm Tote Bag",
    desc: "Smooth, soft leather with extra space for daily use.",
    price: 75000,
    taxonomy: ["bags", "hand-bag"],
    vibes: [["elegant", "smart", "free"], ["casual", "date", "office"]],
    sizes: ["L"],
    colors: [
      ["Grey Pink",   "#603043", ["00", "04"]],
      ["Grey Orange", "#b9652b", ["01"]],
      ["Dark Brown",  "#603f36", ["02"]],
      ["Light Brown", "#895d3a", ["03"]]
    ]
  },
  {
    id: 60,
    title: "Bow Front Mini Bag",
    desc: "Smooth, firm leather that feels great for any outing.",
    price: 95000,
    taxonomy: ["bags", "hand-bag"],
    vibes: [["elegant", "smart", "free", "romantic"], ["casual", "date", "vacation"]],
    sizes: ["S"],
    colors: [
      ["Soft Pink",    "#cc9389", ["00"]],
      ["Cold Black",   "#10131e", ["01"]],
      ["Vivid Pink",   "#a30041", ["02"]],
      ["Pastel Cream", "#cbbaa4", ["03"]],
      ["Brown",        "#915001", ["04"]]
    ]
  },
  {
    id: 61,
    title: "ChisRosy Woven Chain Bag",
    desc: "Soft, woven leather that feels great for any outing.",
    price: 85000,
    taxonomy: ["bags", "hand-bag"],
    vibes: [["smart", "free"], ["casual", "office"]],
    sizes: ["S"],
    colors: [
      ["Purple",    "#603043", ["00"]],
      ["Grey Blue", "#2e3654", ["01"]],
      ["Brown",     "#895d3a", ["02"]],
      ["Warm Grey", "#4d4943", ["03"]]
    ]
  },
  {
    id: 62,
    title: "Polka Dot Bubble Dress",
    desc: "Smooth, airy cotton offering soft comfort and playful volume.",
    price: 40000,
    taxonomy: ["dresses", "short dresses"],
    vibes: [["elegant", "smart", "free"], ["casual", "vacation", "party", "date"]],
    colors: [
      ["Matte Black", "#070b11", ["00", "01", "02", "03", "04", "05"]]
    ]
  },
  {
    id: 63,
    title: "One Shoulder Long Dress",
    desc: "Soft, stretchy; feels firm and comfortable.",
    price: 40000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["elegant", "smart"], ["party", "date"]],
    colors: [
      ["Olive Green", "#babe08", ["00", "01", "02", "03", "04"]]
    ]
  },
  {
    id: 64,
    title: "Tie Waist Button Dress",
    desc: "Soft, comfy cotton that feels great for everyday wear.",
    price: 40000,
    taxonomy: ["dresses", "long-dresses"],
    vibes: [["elegant", "smart"], ["party", "office", "casual"]],
    colors: [
      ["Pixelated Grey", "#2f2e37", ["00", "01", "02"]]
    ]
  },


];
//========================================================================================================//
// Missing IDs: "none" //

/*Other Flags n wat they do:
bestseller: true/false - This gives produts ranking boost inside the auto recommendation algorithm.
manualRecommendations: -Just like it speaks fro itself; you can use it to manually recommend products for a specific product. It will override the auto recommendation algorithm.
pinned: true/false - This will pin the product to the top of the product listing page. It will override the auto recommendation algorithm.
 */

module.exports = enrichProducts(rawProducts);