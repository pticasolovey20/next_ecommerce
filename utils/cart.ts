import { CartResponseData } from "@/types/cart";

export const isProductInCart = (data: CartResponseData | undefined, productId: string): boolean => {
  if (!data?.cart?.items) return false;

  return data.cart.items.some((item) => item.productId === productId);
};
