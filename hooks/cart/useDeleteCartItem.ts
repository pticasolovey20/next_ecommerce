import { useQueryClient, useMutation } from "@tanstack/react-query";
import { CART_QUERY_KEY } from "@/constants/cart";
import { fetchRemoveCartItem } from "@/API/cartAPI";
import { CartResponseData } from "@/types/cart";

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [CART_QUERY_KEY, "delete"],
    mutationFn: (productId: string) => fetchRemoveCartItem(productId),

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

      return {
        previousData,
        productId,
      };
    },

    onError: (_error, _variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData([CART_QUERY_KEY], context.previousData);
      }
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey: [CART_QUERY_KEY] }),
  });

  return mutation;
};
