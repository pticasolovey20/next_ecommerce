"use client";

import { PRODUCTS_PER_PAGE } from "@/constants/product";
import { useProducts } from "@/hooks/product/useProducts";
import { Fragment } from "react";
import { ProductData } from "@/types/product";

import ProductListSkeleton from "@/components/product/ProductListSkeleton";
import ProductCard from "@/components/product/ProductCard";
import Button from "@/ui/Button";
import EmptyList from "@/ui/EmptyList";

const ProductList = () => {
  const {
    isLoading,
    isEmpty,
    products,

    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useProducts(PRODUCTS_PER_PAGE);

  if (isEmpty) {
    return <EmptyList />;
  }

  return (
    <Fragment>
      <ul className="w-full grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {products?.map((product: ProductData) => (
          <li key={product.id} className="min-w-0 sm:aspect-square">
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
    </Fragment>
  );
};

export default ProductList;
