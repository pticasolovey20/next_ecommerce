export const PRODUCTS_PER_PAGE = 10;

export const PRODUCTS = [
  {
    title: "iPhone 15 Pro",
    description:
      "Flagship Apple smartphone with A17 Pro chip, triple 48MP camera and titanium body. Features 6.1-inch Super Retina XDR display",
    category: "smartphones",

    price: 999,
    oldPrice: 1099,
    discount: 9,
    rating: 4.8,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop",
        alt: "iPhone 15 Pro titanium blue",
      },
      {
        src: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop",
        alt: "iPhone 15 Pro camera system",
      },
      {
        src: "https://images.unsplash.com/photo-1512499617640-c2f9996e0b44?auto=format&fit=crop",
        alt: "iPhone 15 Pro side view",
      },
    ],

    features: [
      { label: "Display", value: '6.1" Super Retina XDR' },
      { label: "Processor", value: "Apple A17 Pro" },
      { label: "Camera", value: "48MP triple system" },
      { label: "Storage", value: "128GB" },
    ],
  },

  {
    title: "MacBook Pro 14",
    description:
      "Professional laptop with M3 Pro chip, 14-inch Liquid Retina XDR display and up to 18 hours of battery life",
    category: "laptops",

    price: 1999,
    rating: 4.9,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop",
        alt: "MacBook Pro 14 space gray",
      },
      {
        src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop",
        alt: "MacBook Pro keyboard and trackpad",
      },
      {
        src: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop",
        alt: "MacBook Pro open on desk",
      },
    ],

    features: [
      { label: "Display", value: '14" Liquid Retina XDR' },
      { label: "Processor", value: "Apple M3 Pro" },
      { label: "RAM", value: "18GB" },
      { label: "SSD", value: "512GB" },
    ],
  },

  {
    title: "Meta Quest 3",
    description:
      "Mixed reality VR headset with 4K+ Infinite Display, hand tracking and wireless PC gaming support",
    category: "vr",

    price: 499,
    oldPrice: 599,
    discount: 17,
    rating: 4.6,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop",
        alt: "Meta Quest 3 VR headset",
      },
      {
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop",
        alt: "VR gaming experience",
      },
    ],

    features: [
      { label: "Display", value: "4K+ Infinite Display" },
      { label: "Tracking", value: "Inside-out & hand tracking" },
      { label: "Storage", value: "128GB built-in" },
      { label: "Wireless", value: "PC gaming support" },
    ],
  },

  {
    title: "Bang & Olufsen Beoplay H95",
    description:
      "Luxury wireless headphones with adaptive ANC, 38-hour battery and handcrafted premium materials",
    category: "headphones",

    price: 800,
    rating: 4.8,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop",
        alt: "Bang & Olufsen luxury headphones",
      },
      {
        src: "https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop",
        alt: "Premium audio equipment",
      },
      {
        src: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop",
        alt: "High-end wireless headphones",
      },
    ],

    features: [
      { label: "Materials", value: "Handcrafted leather & aluminum" },
      { label: "ANC", value: "Adaptive noise cancellation" },
      { label: "Battery", value: "38 hours playback" },
      { label: "Codecs", value: "aptX Adaptive" },
    ],
  },

  {
    title: "Steam Deck OLED",
    description:
      "Handheld gaming PC with 7.4-inch HDR OLED display, AMD APU and access to entire Steam library.",
    category: "gaming",

    price: 549,
    oldPrice: 649,
    discount: 15,
    rating: 4.7,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop",
        alt: "Steam Deck OLED handheld",
      },
      {
        src: "https://images.unsplash.com/photo-1640955014216-75201056c829?auto=format&fit=crop",
        alt: "Portable PC gaming device",
      },
    ],

    features: [
      { label: "Display", value: '7.4" HDR OLED 90Hz' },
      { label: "Processor", value: "AMD Zen 2 APU" },
      { label: "Storage", value: "1TB NVMe SSD" },
      { label: "Library", value: "Full Steam compatibility" },
    ],
  },

  {
    title: "Canon EOS R5",
    description:
      "Professional mirrorless camera with 45MP sensor, 8K video recording and in-body image stabilization.",
    category: "cameras",

    price: 3899,
    oldPrice: 4299,
    discount: 9,
    rating: 4.8,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop",
        alt: "Professional mirrorless camera",
      },
      {
        src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop",
        alt: "High-end camera gear",
      },
    ],

    features: [
      { label: "Sensor", value: "45MP full-frame CMOS" },
      { label: "Video", value: "8K30p & 4K120p" },
      { label: "Stabilization", value: "In-body 8-stop IS" },
      { label: "Autofocus", value: "1053-point dual pixel" },
    ],
  },

  {
    title: "Tesla Model S Plaid",
    description:
      "Electric luxury sedan with tri-motor setup, 1020hp power output and 0-60mph in 1.99 seconds.",
    category: "automotive",

    price: 89990,
    oldPrice: 94990,
    discount: 5,
    rating: 4.9,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop",
        alt: "Tesla Model S Plaid",
      },
      {
        src: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop",
        alt: "High-performance EV",
      },
    ],

    features: [
      { label: "Motors", value: "Tri-motor all-wheel drive" },
      { label: "Power", value: "1020hp peak output" },
      { label: "Acceleration", value: "0-60mph in 1.99s" },
      { label: "Range", value: "396 miles EPA" },
    ],
  },

  {
    title: "DJI Mini 4 Pro",
    description:
      "Compact drone with 4K/60fps video, omnidirectional obstacle sensing and 34-minute flight time.",
    category: "drones",

    price: 759,
    oldPrice: 899,
    discount: 16,
    rating: 4.7,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop",
        alt: "DJI Mini 4 Pro drone",
      },
    ],

    features: [
      { label: "Camera", value: "4K/60fps with gimbal" },
      { label: "Obstacle Sensing", value: "Omnidirectional" },
      { label: "Flight Time", value: "34 minutes max" },
      { label: "Weight", value: "Under 249g" },
    ],
  },

  {
    title: "Rolex Submariner",
    description: "Luxury dive watch with 904L steel case, ceramic bezel and 300m water resistance.",
    category: "watches",

    price: 8100,
    oldPrice: 8550,
    discount: 5,
    rating: 4.9,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1594576662544-7a4d4b12f22a?auto=format&fit=crop",
        alt: "Rolex Submariner watch",
      },
      {
        src: "https://images.unsplash.com/photo-1509048191080-d2e2a3ac76b8?auto=format&fit=crop",
        alt: "Luxury dive watch",
      },
      {
        src: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop",
        alt: "Swiss luxury timepiece",
      },
    ],

    features: [
      { label: "Case", value: "904L Oystersteel 41mm" },
      { label: "Bezel", value: "Unidirectional ceramic" },
      { label: "Movement", value: "Perpetual automatic" },
      { label: "Water Resistance", value: "300m/1000ft" },
    ],
  },

  {
    title: "Garmin Fenix 7X",
    description:
      "Premium GPS multisport watch with solar charging, 28-day battery and comprehensive health tracking.",
    category: "wearables",

    price: 799,
    rating: 4.8,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop",
        alt: "Garmin Fenix 7X watch",
      },
      {
        src: "https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop",
        alt: "GPS multisport watch",
      },
      {
        src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop",
        alt: "Outdoor adventure watch",
      },
    ],

    features: [
      { label: "Display", value: '1.4" transflective MIP' },
      { label: "Battery", value: "28 days smartwatch mode" },
      { label: "Solar", value: "Power Glass charging" },
      { label: "GPS", value: "Multi-GNSS support" },
    ],
  },

  {
    title: "Herman Miller Aeron",
    description:
      "Ergonomic office chair with PostureFit SL support, breathable mesh and 12-year warranty.",
    category: "furniture",

    price: 1395,
    oldPrice: 1595,
    discount: 13,
    rating: 4.7,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop",
        alt: "Herman Miller Aeron chair",
      },
      {
        src: "https://images.unsplash.com/photo-1541558869434-2840d308329a?auto=format&fit=crop",
        alt: "Ergonomic office chair",
      },
      {
        src: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop",
        alt: "Premium workspace furniture",
      },
    ],

    features: [
      { label: "Support", value: "PostureFit SL lumbar" },
      { label: "Material", value: "Breathable Pellicle mesh" },
      { label: "Adjustment", value: "8Z Pellicle suspension" },
      { label: "Warranty", value: "12-year coverage" },
    ],
  },

  {
    title: "Sony WH-1000XM5",
    description:
      "Premium wireless headphones with active noise cancellation, Hi-Res Audio and up to 30 hours of playback.",
    category: "headphones",

    price: 279,
    oldPrice: 399,
    discount: 30,
    rating: 4.7,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop",
        alt: "Sony WH-1000XM5 headphones",
      },
      {
        src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop",
        alt: "Premium headphones close-up",
      },
      {
        src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop",
        alt: "Wireless headphones lifestyle",
      },
    ],

    features: [
      { label: "Type", value: "Over-ear wireless" },
      { label: "Noise Cancellation", value: "Active ANC" },
      { label: "Battery Life", value: "30 hours" },
      { label: "Codecs", value: "LDAC, Hi-Res" },
    ],
  },

  {
    title: "Samsung Galaxy S24 Ultra",
    description:
      "Flagship Android smartphone with S Pen stylus, 200MP camera and 6.8-inch Dynamic AMOLED 2X display.",
    category: "smartphones",

    price: 1199,
    rating: 4.6,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop",
        alt: "Samsung Galaxy S24 Ultra",
      },
      {
        src: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop",
        alt: "Galaxy phone with S Pen",
      },
      {
        src: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop",
        alt: "Modern smartphone design",
      },
    ],

    features: [
      { label: "Display", value: '6.8" Dynamic AMOLED 2X' },
      { label: "Processor", value: "Snapdragon 8 Gen 3" },
      { label: "Camera", value: "200MP main sensor" },
      { label: "S Pen", value: "Integrated stylus" },
    ],
  },

  {
    title: "iPad Pro 12.9",
    description:
      "Professional tablet with M2 chip, Liquid Retina XDR display and Apple Pencil 2nd generation support.",
    category: "tablets",

    price: 1099,
    oldPrice: 1199,
    discount: 8,
    rating: 4.8,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=cro",
        alt: "iPad Pro 12.9 inch",
      },
      {
        src: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop",
        alt: "iPad with Apple Pencil",
      },
      {
        src: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop",
        alt: "Professional tablet setup",
      },
    ],

    features: [
      { label: "Display", value: '12.9" Liquid Retina XDR' },
      { label: "Processor", value: "Apple M2" },
      { label: "Storage", value: "256GB" },
      { label: "Support", value: "Apple Pencil 2nd gen" },
    ],
  },

  {
    title: "Dell XPS 13",
    description:
      "Premium ultrabook with Intel Core i7 processor, 13.4-inch InfinityEdge display and aluminum chassis.",
    category: "laptops",

    price: 1199,
    rating: 4.5,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop",
        alt: "Dell XPS 13 ultrabook",
      },
      {
        src: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop",
        alt: "Premium laptop design",
      },
      {
        src: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop",
        alt: "Modern laptop workspace",
      },
    ],

    features: [
      { label: "Display", value: '13.4" InfinityEdge' },
      { label: "Processor", value: "Intel Core i7-1360P" },
      { label: "RAM", value: "16GB LPDDR5" },
      { label: "SSD", value: "512GB NVMe" },
    ],
  },

  {
    title: "AirPods Max",
    description:
      "Premium over-ear headphones with spatial audio, active noise cancellation and up to 20 hours of battery life.",
    category: "headphones",

    price: 549,
    rating: 4.4,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop",
        alt: "AirPods Max space gray",
      },
      {
        src: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop",
        alt: "Apple headphones premium design",
      },
      {
        src: "https://images.unsplash.com/photo-1606220588913-b3adc5798030?auto=format&fit=crop",
        alt: "Over-ear headphones detail",
      },
    ],

    features: [
      { label: "Audio", value: "Spatial audio support" },
      { label: "Noise Cancellation", value: "Active ANC" },
      { label: "Battery Life", value: "20 hours" },
      { label: "Chip", value: "Apple H1" },
    ],
  },

  {
    title: "Nintendo Switch OLED",
    description:
      "Portable gaming console with 7-inch OLED screen, enhanced audio and up to 9 hours of battery life.",
    category: "gaming",

    price: 349,
    rating: 4.7,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop",
        alt: "Nintendo Switch OLED model",
      },
      {
        src: "https://images.unsplash.com/photo-1507457379470-08b800bebc67?auto=format&fit=crop",
        alt: "Gaming setup with controllers",
      },
    ],

    features: [
      { label: "Display", value: '7" OLED screen' },
      { label: "Storage", value: "64GB internal" },
      { label: "Battery Life", value: "Up to 9 hours" },
      { label: "Modes", value: "TV/Tabletop/Handheld" },
    ],
  },

  {
    title: "Sony PlayStation 5",
    description:
      "Next-generation gaming console with SSD, 4K up to 120fps support, ray tracing and 3D audio.",
    category: "gaming",

    price: 499,
    oldPrice: 599,
    discount: 17,
    rating: 4.8,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop",
        alt: "Sony PlayStation 5 console",
      },
      {
        src: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop",
        alt: "PS5 with DualSense controller",
      },
      {
        src: "https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?auto=format&fit=crop",
        alt: "Next-gen gaming console",
      },
    ],

    features: [
      { label: "CPU", value: "AMD Zen 2" },
      { label: "GPU", value: "AMD RDNA 2" },
      { label: "SSD", value: "825GB NVMe" },
      { label: "Resolution", value: "4K up to 120fps" },
    ],
  },

  {
    title: "Google Pixel 8 Pro",
    description:
      "Flagship Google smartphone with Tensor G3 chip, 50MP AI-enhanced camera and pure Android 14.",
    category: "smartphones",

    price: 899,
    oldPrice: 999,
    discount: 10,
    rating: 4.6,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop",
        alt: "Google Pixel 8 Pro",
      },
      {
        src: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop",
        alt: "Android smartphone camera",
      },
    ],

    features: [
      { label: "Display", value: '6.7" LTPO OLED' },
      { label: "Processor", value: "Google Tensor G3" },
      { label: "Camera", value: "50MP with AI features" },
      { label: "OS", value: "Pure Android 14" },
    ],
  },

  {
    title: "JBL Flip 6",
    description:
      "Portable Bluetooth speaker with IP67 protection, 30W power output and up to 12 hours of music playback.",
    category: "speakers",

    price: 79,
    oldPrice: 129,
    discount: 39,
    rating: 4.5,

    assets: [
      {
        src: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop",
        alt: "JBL Flip 6 speaker",
      },
      {
        src: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&",
        alt: "Waterproof speaker design",
      },
    ],

    features: [
      { label: "Power", value: "30W RMS output" },
      { label: "Protection", value: "IP67 water/dust" },
      { label: "Battery Life", value: "12 hours" },
      { label: "Connectivity", value: "Bluetooth" },
    ],
  },
];
