import { ProductData } from "@/types/product";

export interface UseProductsReturn {
  isLoading: boolean;
  isError: boolean;
  products: ProductData[] | undefined;

  hasNextPage: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  error: Error | null;
}

export interface UseProductByIdReturn {
  isLoading: boolean;
  isError: boolean;
  product: ProductData | undefined;
}
