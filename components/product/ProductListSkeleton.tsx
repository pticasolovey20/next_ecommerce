import { PRODUCTS_PER_PAGE } from "@/constants/product";

import { Fragment } from "react";
import ProductCardSkeleton from "@/components/product/ProductCardSkeleton";

const ProductListSkeleton = () => {
  return (
    <Fragment>
      {Array.from({ length: PRODUCTS_PER_PAGE }).map((_, index) => (
        <li key={index} className="min-w-0 sm:aspect-square">
          <ProductCardSkeleton />
        </li>
      ))}
    </Fragment>
  );
};

export default ProductListSkeleton;
