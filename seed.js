import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const PRODUCTS = [
  {
    title: "Professional Camera",
    description: '24MP | 4K Video | 3.2" Touchscreen',
    color: "Black",
    price: 1199,
    oldPrice: 1299,
    discount: 7.7,

    features: [
      { label: "Sensor", value: "24MP Full Frame" },
      { label: "Video", value: "4K 60fps" },
      { label: "Screen", value: '3.2" Touchscreen' },
      { label: "Connectivity", value: "Wi-Fi, Bluetooth" },
      { label: "Battery", value: "1200mAh" },
    ],

    assets: [
      { src: "/assets/camera.webp", alt: "Professional digital camera" },
      { src: "/assets/camera.webp", alt: "Professional digital camera" },
      { src: "/assets/camera.webp", alt: "Professional digital camera" },
      { src: "/assets/camera.webp", alt: "Professional digital camera" },
    ],

    rating: 4.8,
  },

  {
    title: "Black Earphones",
    description: "ANC | 24h Battery | Bluetooth 5.2",
    color: "Black",
    price: 199,
    oldPrice: 199,

    features: [
      { label: "Noise Cancellation", value: "Active" },
      { label: "Battery", value: "24 hours" },
      { label: "Bluetooth", value: "5.2" },
      { label: "Water Resistance", value: "IPX4" },
      { label: "Microphones", value: "Dual Beamforming" },
    ],

    assets: [
      { src: "/assets/earphones_black.webp", alt: "Black wireless earphones" },
      { src: "/assets/earphones_black.webp", alt: "Black wireless earphones" },
      { src: "/assets/earphones_black.webp", alt: "Black wireless earphones" },
      { src: "/assets/earphones_black.webp", alt: "Black wireless earphones" },
    ],

    rating: 4.5,
  },

  {
    title: "Gaming Laptop",
    description: "Intel i9 | 32GB RAM | RTX 4080",
    color: "Black",
    price: 1799,
    oldPrice: 1899,
    discount: 5.3,

    features: [
      { label: "CPU", value: "Intel Core i9" },
      { label: "RAM", value: "32 GB" },
      { label: "GPU", value: "NVIDIA RTX 4080" },
      { label: "Storage", value: "1TB SSD" },
      { label: "Display", value: '17" QHD 165Hz' },
    ],

    assets: [
      { src: "/assets/gaming_laptop.webp", alt: "Gaming laptop" },
      { src: "/assets/gaming_laptop.webp", alt: "Gaming laptop" },
      { src: "/assets/gaming_laptop.webp", alt: "Gaming laptop" },
      { src: "/assets/gaming_laptop.webp", alt: "Gaming laptop" },
    ],

    rating: 4.7,
  },

  {
    title: "Blue Headphones",
    description: "Hi-Res Audio | 40h Battery | Bluetooth 5.0",
    color: "Blue",
    price: 139,
    oldPrice: 149,
    discount: 6.7,
    features: [
      { label: "Audio", value: "Hi-Res certified" },
      { label: "Battery", value: "40 hours" },
      { label: "Bluetooth", value: "5.0" },
      { label: "Weight", value: "210 g" },
      { label: "Foldable", value: "Yes" },
    ],

    assets: [
      { src: "/assets/headphones_blue.webp", alt: "Blue over-ear headphones" },
      { src: "/assets/headphones_blue.webp", alt: "Blue over-ear headphones" },
      { src: "/assets/headphones_blue.webp", alt: "Blue over-ear headphones" },
      { src: "/assets/headphones_blue.webp", alt: "Blue over-ear headphones" },
    ],

    rating: 4.3,
  },

  {
    title: "PlayStation Console",
    description: "825GB SSD | Ray Tracing | DualSense",
    color: "White",
    price: 499,
    oldPrice: 499,

    features: [
      { label: "Storage", value: "825GB SSD" },
      { label: "Graphics", value: "Ray Tracing" },
      { label: "Controller", value: "DualSense Wireless" },
      { label: "Resolution", value: "Up to 8K" },
      { label: "Games", value: "Exclusive Titles" },
    ],

    assets: [
      { src: "/assets/playstation.webp", alt: "PlayStation gaming console" },
      { src: "/assets/playstation.webp", alt: "PlayStation gaming console" },
      { src: "/assets/playstation.webp", alt: "PlayStation gaming console" },
      { src: "/assets/playstation.webp", alt: "PlayStation gaming console" },
    ],

    rating: 4.9,
  },

  {
    title: "White Earphones",
    description: "20h Battery | Crystal Clear Mic | IPX5",
    color: "White",
    price: 169,
    oldPrice: 179,
    discount: 5.6,

    features: [
      { label: "Battery", value: "20 hours" },
      { label: "Waterproof", value: "IPX5" },
      { label: "Microphone", value: "Clear Voice Capture" },
      { label: "Charging", value: "USB-C + Wireless" },
      { label: "Case", value: "Magnetic Lid" },
    ],

    assets: [
      { src: "/assets/earphones_white.webp", alt: "White wireless earphones" },
      { src: "/assets/earphones_white.webp", alt: "White wireless earphones" },
      { src: "/assets/earphones_white.webp", alt: "White wireless earphones" },
      { src: "/assets/earphones_white.webp", alt: "White wireless earphones" },
    ],

    rating: 4.4,
  },

  {
    title: "HD Projector",
    description: '1080p | 300" Display | HDMI + USB-C',
    color: "Black",
    price: 699,
    oldPrice: 699,

    features: [
      { label: "Resolution", value: "1080p Full HD" },
      { label: "Max Display", value: "300 inches" },
      { label: "Brightness", value: "3800 lumens" },
      { label: "Ports", value: "HDMI, USB-C, AV" },
      { label: "Speaker", value: "Built-in stereo" },
    ],

    assets: [
      { src: "/assets/projector.webp", alt: "HD projector" },
      { src: "/assets/projector.webp", alt: "HD projector" },
      { src: "/assets/projector.webp", alt: "HD projector" },
      { src: "/assets/projector.webp", alt: "HD projector" },
    ],

    rating: 4.6,
  },

  {
    title: "Black Headphones",
    description: "Studio Sound | 50h Battery | ANC",
    color: "Black",
    price: 229,
    oldPrice: 249,
    discount: 8,

    features: [
      { label: "Audio", value: "Studio-quality" },
      { label: "Noise Canceling", value: "Active" },
      { label: "Battery", value: "50 hours" },
      { label: "Bluetooth", value: "5.3" },
      { label: "Comfort", value: "Memory foam cushions" },
    ],

    assets: [
      { src: "/assets/headphones_black.webp", alt: "Black over-ear headphones" },
      { src: "/assets/headphones_black.webp", alt: "Black over-ear headphones" },
      { src: "/assets/headphones_black.webp", alt: "Black over-ear headphones" },
      { src: "/assets/headphones_black.webp", alt: "Black over-ear headphones" },
    ],

    rating: 4.7,
  },
];

async function main() {
  for (const product of PRODUCTS) {
    await prismaClient.product.create({
      data: {
        title: product.title,
        description: product.description,
        color: product.color,
        price: product.price,
        oldPrice: product.oldPrice,
        discount: product.discount,
        rating: product.rating,
        assets: product.assets,
        features: product.features,
      },
    });
  }

  console.log("Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
