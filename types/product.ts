export interface ProductAssetData {
  id: string;
  src: string;
  alt: string;
  productId: string;
}

export interface ProductData {
  id: string;
  title: string;
  description: string;
  color?: string;
  assets: ProductAssetData[];
  price: number;
  rating: number;
}
