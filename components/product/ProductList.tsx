"use client";

import { useProducts } from "@/hooks/product/useProducts";

import { ProductData } from "@/types/product";

import ProductListSkeleton from "@/components/product/ProductListSkeleton";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS_PER_PAGE } from "@/constants/product";

const ProductList = () => {
  const { isLoading, products, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useProducts(PRODUCTS_PER_PAGE);

  if (isLoading) return <ProductListSkeleton />;

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-4 mt-4">
        {products?.map((product: ProductData) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {isFetchingNextPage && <ProductListSkeleton />}

      {hasNextPage && (
        <div className="flex justify-center mt-4">
          <button onClick={() => fetchNextPage()} className="font-medium text-lg cursor-pointer">
            SHOW MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
