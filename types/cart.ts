import { ProductData } from "@/types/product";

export interface CartItemData extends ProductData {
  quantity: number;
}

export interface CartData {
  id: string;
  userId?: string;
  sessionId?: string;
  items: CartItemData[];
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface CartResponseData {
  success: boolean;
  cart: CartData;
}
