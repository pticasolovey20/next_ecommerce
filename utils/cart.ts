import { CartData, CartItemData } from "@/types/cart";

export const isProductInCart = (
  cart: CartData | undefined,
  productId: string | undefined
): boolean => {
  if (!cart?.items || !productId) return false;

  return cart.items.some((item) => item.productId === productId);
};

export const getTotalPrice = (items: CartItemData[] | undefined): number => {
  if (!items || items.length === 0) return 0;

  return items.reduce((total, item) => {
    const price = item.product?.price ?? 0;
    const quantity = item.quantity ?? 0;

    return total + price * quantity;
  }, 0);
};
