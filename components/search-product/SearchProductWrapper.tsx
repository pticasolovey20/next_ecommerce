import { useProductSearchUI } from "@/hooks/product/useProductSearchUI";
import { FormProvider } from "react-hook-form";
import { classNames } from "@/utils/classNames";

import SearchProductForm from "@/components/form/SearchProductForm";
import LoadingSpinner from "@/ui/LoadingSpinner";
import SearchProductList from "@/components/search-product/SearchProductList";
import EmptyList from "@/ui/EmptyList";

const SearchProductWrapper = () => {
  const {
    isOpen,
    form,
    debouncedSearchQuery,
    isLoading,
    products,

    handleSelectProduct,
    handleOpen,
    handleClose,
  } = useProductSearchUI();

  return (
    <div className={classNames(isOpen ? "absolute md:relative" : "", "w-full")}>
      <div
        className={classNames(
          isOpen
            ? "absolute md:relative left-0 top-1/2 -translate-y-1/2 md:top-0 md:translate-y-0"
            : "",

          "w-full z-[30]"
        )}
      >
        <FormProvider {...form}>
          <SearchProductForm onOpen={handleOpen} />
        </FormProvider>
      </div>

      <div
        onClick={handleClose}
        className={classNames(
          "fixed inset-0 bg-black/30 z-[20]",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          "transition-opacity duration-200 ease-in-out"
        )}
      />

      {isOpen && !!debouncedSearchQuery.length && (
        <div
          className={classNames(
            "absolute top-7 md:top-12 flex w-full max-h-[calc(100dvh-80px)]",
            "rounded-lg shadow-lg shadow-black/50 bg-white z-[30]"
          )}
        >
          {isLoading ? (
            <LoadingSpinner className="h-[300px]" />
          ) : products?.length ? (
            <SearchProductList products={products} onSelect={handleSelectProduct} />
          ) : (
            <EmptyList className="h-[300px]" />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchProductWrapper;
