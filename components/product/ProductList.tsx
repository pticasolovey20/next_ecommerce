"use client";

import { PRODUCTS_PER_PAGE } from "@/constants/product";
import { useProducts } from "@/hooks/product/useProducts";
import { ProductData } from "@/types/product";

import ProductListSkeleton from "@/components/product/ProductListSkeleton";
import ProductCard from "@/components/product/ProductCard";
import Button from "@/ui/Button";

const ProductList = () => {
  const {
    isLoading,
    products,

    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useProducts(PRODUCTS_PER_PAGE);

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
        {products?.map((product: ProductData) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {(isFetchingNextPage || isLoading) && <ProductListSkeleton />}
      </div>

      {hasNextPage && (
        <div className="flex justify-center mt-8">
          <Button
            size="lg"
            variant="secondary"
            onClick={() => fetchNextPage()}
            className="hover-lift"
          >
            SHOW MORE
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
