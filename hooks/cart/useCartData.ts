import { useQuery, useIsMutating } from "@tanstack/react-query";
import { fetchCart } from "@/API/cartAPI";
import { isProductInCart, getTotalPrice } from "@/utils/cart";
import { CART_QUERY_KEY } from "@/constants/cart";

import { useAddCartItem } from "@/hooks/cart/useAddCartItem";
import { useDeleteCartItem } from "@/hooks/cart/useDeleteCartItem";
import { useUpdateCartItemQuantity } from "@/hooks/cart/useUpdateCartItemQuantity";

export const useCartData = (productId?: string) => {
  const cartQuery = useQuery({
    queryKey: [CART_QUERY_KEY],
    queryFn: fetchCart,

    select: (data) => data.cart,

    staleTime: 30 * 60 * 1000,
    retry: 1,
  });

  const isInCart = isProductInCart(cartQuery.data, productId);
  const totalPrice = getTotalPrice(cartQuery.data?.items);

  const addCartItemMutation = useAddCartItem();
  const deleteCartItemMutation = useDeleteCartItem();
  const updateQuantityMutation = useUpdateCartItemQuantity();

  const isMutating = useIsMutating({ mutationKey: [CART_QUERY_KEY] });

  return {
    isLoading: cartQuery.isFetching || isMutating > 0,
    isError: cartQuery.isError,
    isEmpty: cartQuery.data?.items?.length === 0,
    items: cartQuery.data?.items,
    isInCart,
    totalPrice,

    addItem: addCartItemMutation.mutateAsync,
    deleteItem: deleteCartItemMutation.mutateAsync,
    updateItemQuantity: updateQuantityMutation.mutateAsync,
  };
};
