import { UseProductsSearchUIReturn } from "@/hooks/product/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchProductSchema } from "@/schemas/productSchema";
import { useDebounce } from "@/hooks/useDebounce";
import { useProductSearch } from "@/hooks/product/useProductSearch";

export const useProductSearchUI = (debounceDelay = 500): UseProductsSearchUIReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(SearchProductSchema),
    defaultValues: {
      query: "",
    },
  });

  const searchQuery = form.watch("query");

  const debouncedSearchQuery = useDebounce(searchQuery, debounceDelay);
  const { isLoading, products } = useProductSearch(debouncedSearchQuery);

  const handleSelectProduct = () => {
    setIsOpen(false);
    form.setValue("query", "");
  };

  const handleClose = () => setIsOpen(false);

  const handleOpen = () => setIsOpen(true);

  return {
    isOpen,
    form,
    debouncedSearchQuery,
    isLoading,
    products,

    handleSelectProduct,
    handleOpen,
    handleClose,
  };
};
