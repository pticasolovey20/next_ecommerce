import { UseProductByIdReturn } from "@/hooks/product/types";
import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/ProductService";

export const useProductById = (id: string): UseProductByIdReturn => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["product"],
    queryFn: () => productService.getProductsById(id),
    select: (data) => data?.product,
  });

  return {
    isLoading,
    isError,
    product: data,
  };
};
