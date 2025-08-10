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
      <ul className="w-full grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {products?.map((product: ProductData) => (
          <li key={product.id} className="min-w-0 max-w-full sm:aspect-square">
            <ProductCard product={product} />
          </li>
        ))}

        {(isFetchingNextPage || isLoading) && <ProductListSkeleton />}
      </ul>

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
