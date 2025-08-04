import { UseProductSearchReturn } from "@/hooks/product/types";
import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/ProductService";

export const useProductSearch = (searchQuery: string): UseProductSearchReturn => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["products", "search", searchQuery],
    queryFn: () => productService.searchProducts(searchQuery),
    select: (data) => data.products,
    enabled: searchQuery.length >= 2,
    staleTime: 5 * 60 * 1000,
  });

  return {
    isLoading,
    isError,
    products: data,
  };
};
