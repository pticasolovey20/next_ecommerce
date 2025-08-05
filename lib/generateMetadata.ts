import { Metadata } from "next";

export interface MetadataConfig {
  title: string;
  description: string;

  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;

  twitterCard?: "summary" | "summary_large_image";

  canonical?: string;
  robots?: string;
  keywords?: string[];
}

const getEnviromentVariables = () => ({
  NODE_ENV: process.env.NODE_ENV || "development",
  BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || "TechStore",
  NEXT_PUBLIC_SITE_DESCRIPTION:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Premium electronics and gadgets with fast shipping. Latest smartphones, laptops, gaming gear and tech accessories at competitive prices",
  NEXT_PUBLIC_OG_IMAGE: process.env.NEXT_PUBLIC_OG_IMAGE || "/og_image.webp",
});

const getIsProduction = () => getEnviromentVariables().NODE_ENV === "production";

export const generateMetadata = (pageMetadata?: Partial<MetadataConfig>): Metadata => {
  const enviromentVariables = getEnviromentVariables();
  const isProduction = getIsProduction();

  const config = {
    title: enviromentVariables.NEXT_PUBLIC_SITE_NAME,
    description: enviromentVariables.NEXT_PUBLIC_SITE_DESCRIPTION,

    ogImage: isProduction ? enviromentVariables.NEXT_PUBLIC_OG_IMAGE : undefined,
    ogTitle: enviromentVariables.NEXT_PUBLIC_SITE_NAME,
    ogDescription: enviromentVariables.NEXT_PUBLIC_SITE_DESCRIPTION,

    twitterCard: isProduction ? ("summary_large_image" as const) : ("summary" as const),

    canonical: enviromentVariables.BASE_URL,
    robots: isProduction ? "index, follow" : "noindex, nofollow",
    keywords: [
      "electronics store",
      "smartphones",
      "laptops",
      "gaming gear",
      "tech accessories",
      "online shopping",
      "fast shipping",
      "premium gadgets",
      "consumer electronics",
      "mobile phones",
      "computers",
      "headphones",
      "smart devices",
    ],

    ...pageMetadata,
  };

  return {
    title: config.title,
    description: config.description,
    robots: config.robots,
    keywords: config.keywords,

    openGraph: {
      type: "website",
      locale: "en_US",
      url: config.canonical,

      title: config.ogTitle || config.title,
      description: config.ogDescription || config.description,
      images: config.ogImage
        ? [
            {
              url: config.ogImage,
              width: 1200,
              height: 630,
              alt: `${enviromentVariables.NEXT_PUBLIC_SITE_NAME} - Premium Electronics Store`,
              type: "image/webp",
            },
          ]
        : undefined,
    },

    twitter: {
      card: config.twitterCard,
      title: config.ogTitle || config.title,
      description: config.ogDescription || config.description,
      images: config.ogImage ? [config.ogImage] : undefined,
    },

    alternates: {
      canonical: config.canonical,
    },

    other: {
      environment: isProduction ? "production" : "development",
    },
  };
};
