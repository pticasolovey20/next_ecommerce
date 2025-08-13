import { useQuery } from "@tanstack/react-query";
import { CART_QUERY_KEY } from "@/constants/cart";
import { fetchCart } from "@/API/cartAPI";

const useCart = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [CART_QUERY_KEY],
    queryFn: fetchCart,
    staleTime: 30 * 60 * 1000,
    select: (data) => data.cart,
    retry: 1,
  });

  return {
    isLoading,
    isError,
    isEmpty: data?.items?.length === 0,
    items: data?.items,
  };
};

export default useCart;
