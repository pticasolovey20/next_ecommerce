import { useInfiniteQuery } from "@tanstack/react-query";
import { productService } from "@/services/ProductService";

export const useProducts = (limit: number) => {
  const { isLoading, isError, data, hasNextPage, fetchNextPage, isFetchingNextPage, error } =
    useInfiniteQuery({
      queryKey: ["products", limit],
      queryFn: ({ pageParam }) => productService.getProducts(pageParam, limit),

      select: (data) => data?.pages.flatMap((page) => page.products),

      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.pagination.hasNextPage ? allPages.length + 1 : undefined;
      },
    });

  return {
    isLoading,
    isError,
    products: data,

    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    error,
  };
};
