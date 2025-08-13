import { CART_QUERY_KEY } from "@/constants/cart";
import { fetchCart } from "@/API/cartAPI";
import { useQuery } from "@tanstack/react-query";
import { CartResponseData } from "@/types/cart";
import { isProductInCart } from "@/utils/cart";

export const useCartStatus = (productId: string) => {
  const { data } = useQuery<CartResponseData>({
    queryKey: [CART_QUERY_KEY],
    queryFn: fetchCart,
  });

  const isInCart = isProductInCart(data, productId);

  // QUANTITY

  return {
    isInCart,
    hasCart: !!data?.cart,
  };
};
