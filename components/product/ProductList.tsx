"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductData } from "@/types/product";

import ProductListSkeleton from "@/components/product/ProductListSkeleton";
import ProductCard from "@/components/product/ProductCard";

const ProductList = () => {
  const { isLoading, products } = useProducts();

  if (isLoading) return <ProductListSkeleton />;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-4 py-6">
      {products.map((product: ProductData) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
