export interface ProductData {
  id: string;
  title: string;
  description: string;
  color?: string;
  assets: { src: string; alt: string }[];
  price: number;
  rating: number;
}
