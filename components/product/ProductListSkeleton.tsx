import { PRODUCTS_PER_PAGE } from "@/constants/product";

import ProductCardSkeleton from "@/components/product/ProductCardSkeleton";

const ProductListSkeleton = () => {
  return (
    <div
      className={
        "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-4 mt-4"
      }
    >
      {Array.from({ length: PRODUCTS_PER_PAGE }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProductListSkeleton;
