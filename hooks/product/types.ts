import { BreadcrumbItemData } from "@/types/breadcrumb";
import { ProductData, SearchProductsFormFields } from "@/types/product";
import { UseFormReturn } from "react-hook-form";

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

export interface UseProductSearchReturn {
  isLoading: boolean;
  isError: boolean;
  products: ProductData[] | undefined;
}

export interface UseProductsSearchUIReturn {
  isOpen: boolean;
  form: UseFormReturn<SearchProductsFormFields>;
  debouncedSearchQuery: string;
  isLoading: boolean;
  products: ProductData[] | undefined;

  handleSelectProduct: () => void;
  handleOpen: () => void;
  handleClose: () => void;
}

export interface UseProductBreadcrumbsReturn {
  list: BreadcrumbItemData[] | [];
}
