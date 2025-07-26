import { fetchProducts } from "@/helpers/fetchProducts";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return {
    isLoading,
    isError,
    products: data,
  };
};
