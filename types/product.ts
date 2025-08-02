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
