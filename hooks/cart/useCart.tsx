import { useQuery } from "@tanstack/react-query";
import { CART_QUERY_KEY } from "@/constants/cart";
import { fetchCart } from "@/API/cartAPI";

const useCart = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [CART_QUERY_KEY],
    queryFn: () => fetchCart(),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    isLoading,
    isError,
    isEmpty: data?.cart.items.length === 0,
    cart: data?.cart,
  };
};

export default useCart;
