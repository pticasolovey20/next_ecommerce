"use client";

import ProductInfo from "@/components/product/details/ProductInfo";
import ProductImage from "@/components/product/details/ProductImage";

interface ProductDetailsCardProps {
  productId: string;
}

const ProductDetailsCard = ({ productId }: ProductDetailsCardProps) => {
  return (
    <div className="relative grid lg:grid-cols-2 gap-4 lg:gap-12 my-8">
      <div className="lg:sticky top-24 h-fit">
        <ProductImage productId={productId} />
      </div>

      <ProductInfo productId={productId} />
    </div>
  );
};

export default ProductDetailsCard;
