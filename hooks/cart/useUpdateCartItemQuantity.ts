import { useQueryClient, useMutation } from "@tanstack/react-query";
import { CART_QUERY_KEY } from "@/constants/cart";
import { CartItemMutationValue, CartResponseData } from "@/types/cart";
import { fetchUpdateCartItemQuantity } from "@/API/cartAPI";

export const useUpdateCartItemQuantity = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [CART_QUERY_KEY, "update"],
    mutationFn: (data: CartItemMutationValue) => fetchUpdateCartItemQuantity(data),

    onMutate: async ({ productId, quantity }) => {
      await queryClient.cancelQueries({ queryKey: [CART_QUERY_KEY] });
      const previousData = queryClient.getQueryData<CartResponseData>([CART_QUERY_KEY]);

      queryClient.setQueryData([CART_QUERY_KEY], (prev: CartResponseData) => {
        if (!prev?.cart?.items) return prev;

        return {
          ...prev,
          cart: {
            ...prev.cart,
            items: prev.cart.items.map((item) =>
              item.productId === productId ? { ...item, quantity } : item
            ),
          },
        };
      });

      return {
        previousData,
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
