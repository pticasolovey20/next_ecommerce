import { Fragment } from "react";
import { useProductById } from "@/hooks/product/useProductById";

import ProductSkeleton from "@/components/product/ProductSkeleton";
import ProductRating from "@/components/product/details/ProductRating";
import ProductPrice from "@/components/product/details/ProductPrice";
import ProductSpecifications from "@/components/product/details/ProductSpecifications";
import ActionButtons from "@/components/product/details/ActionButtons";

interface ProductInfoProps {
  productId: string;
}

const ProductInfo = ({ productId }: ProductInfoProps) => {
  const { isLoading, product } = useProductById(productId);

  return (
    <div className="space-y-6">
      <div>
        {isLoading ? (
          <Fragment>
            <ProductSkeleton className="h-10 w-72 mb-2" />
            <ProductSkeleton className="h-7 w-96" />
          </Fragment>
        ) : (
          <Fragment>
            <h1 className="text-4xl font-medium mb-2">{product!.title}</h1>
            <p className="text-xl text-muted-foreground">{product!.description}</p>
          </Fragment>
        )}
      </div>

      {isLoading ? (
        <Fragment>
          <ProductSkeleton className="h-6 w-40 rounded-sm mb-6" />
          <ProductSkeleton className="h-11 w-36 rounded-md" />
        </Fragment>
      ) : (
        <Fragment>
          <ProductRating product={product!} />
          <ProductPrice product={product!} />
        </Fragment>
      )}

      {isLoading ? (
        <ProductSkeleton className="h-[350px] mb-6 rounded-xl" />
      ) : (
        <ProductSpecifications product={product!} />
      )}

      {isLoading ? (
        <div className="flex flex-col sm:flex-row gap-4">
          <ProductSkeleton className="h-[62px] w-full rounded-xl" />
          <ProductSkeleton className="h-[62px] w-full rounded-xl" />
        </div>
      ) : (
        <ActionButtons />
      )}
    </div>
  );
};

export default ProductInfo;
