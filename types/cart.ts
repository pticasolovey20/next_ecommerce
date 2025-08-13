import { ProductData } from "@/types/product";

export interface CartItemData {
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  product: ProductData;
}

export interface CartData {
  id: string;
  sessionId: string;
  createdAt: string;
  updatedAt: string;
  items: CartItemData[];
}

export interface CartResponseData {
  success: boolean;
  cart: CartData;
}
