import { useQueryClient, useMutation } from "@tanstack/react-query";
import { CART_QUERY_KEY } from "@/constants/cart";
import { ProductData } from "@/types/product";
import { fetchAddCartItem } from "@/API/cartAPI";
import { CartResponseData } from "@/types/cart";

export const useAddCartItem = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [CART_QUERY_KEY, "add"],
    mutationFn: (product: ProductData) => fetchAddCartItem(product.id),

    onMutate: async (product) => {
      await queryClient.cancelQueries({ queryKey: [CART_QUERY_KEY] });
      const previousData = queryClient.getQueryData<CartResponseData>([CART_QUERY_KEY]);

      const optimisticCartItem = {
        id: Date.now().toString(),
        productId: product.id,
        quantity: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        product,
      };

      queryClient.setQueryData([CART_QUERY_KEY], (previousData: CartResponseData) => {
        if (!previousData) {
          return {
            cart: {
              items: [optimisticCartItem],
            },
          };
        }

        return {
          ...previousData,
          cart: {
            ...previousData.cart,
            items: [optimisticCartItem, ...previousData.cart.items],
          },
        };
      });

      return {
        previousData,
        optimisticCartItem,
      };
    },

    onError: (_error, _variables, context) => {
      return context?.previousData
        ? queryClient.setQueryData([CART_QUERY_KEY], context.previousData)
        : queryClient.removeQueries({ queryKey: [CART_QUERY_KEY], exact: true });
    },

    onSuccess: (_data, _variables, context) => {
      queryClient.setQueryData([CART_QUERY_KEY], (prev: CartResponseData) => ({
        ...prev,
        cart: {
          ...prev.cart,
          items: prev.cart.items.map((item) =>
            item.id === context?.optimisticCartItem.id ? context.optimisticCartItem : item
          ),
        },
      }));
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey: [CART_QUERY_KEY] }),
  });

  return mutation;
};
