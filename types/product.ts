import * as zod from "zod";
import { SearchProductSchema } from "@/schemas/productSchema";

export interface ProductAssetData {
  src: string;
  alt: string;
}

export interface ProductFeatureData {
  label: string;
  value: string;
}

export interface ProductData {
  id: string;
  title: string;
  description: string;
  category: string;

  price: number;
  oldPrice?: number;
  discount?: number;
  rating?: number;

  assets: ProductAssetData[];
  features: ProductFeatureData[];
}

export type SearchProductsFormFields = zod.infer<typeof SearchProductSchema>;
