export interface ProductData {
  id: number;
  title: string;
  description: string;
  assets: { src: string; alt: string }[];
  price: number;
  rating: number;
}
