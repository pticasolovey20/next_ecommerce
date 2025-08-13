import { useQueryClient, useMutation } from "@tanstack/react-query";
import { fetchRemoveProductFromCart } from "@/API/cartAPI";
import { CART_QUERY_KEY } from "@/constants/cart";
import { CartResponseData } from "@/types/cart";

export const useRemoveProductFromCart = () => {
  const queryClient = useQueryClient();

  const removeProductMutation = useMutation({
    mutationFn: (productId: string) => fetchRemoveProductFromCart(productId),

    onMutate: async (productId) => {
      await queryClient.cancelQueries({ queryKey: [CART_QUERY_KEY] });
      const previousData = queryClient.getQueryData<CartResponseData>([CART_QUERY_KEY]);

      queryClient.setQueryData([CART_QUERY_KEY], (prev: CartResponseData) => {
        if (!prev?.cart?.items) return prev;

        return {
          ...prev,
          cart: {
            ...prev.cart,
            items: prev.cart.items.filter((item) => item.productId !== productId),
          },
        };
      });

      return { previousData, productId };
    },

    onError: (_error, _variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData([CART_QUERY_KEY], context.previousData);
      }
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey: [CART_QUERY_KEY] }),
  });

  return {
    removeProduct: removeProductMutation.mutate,
  };
};
