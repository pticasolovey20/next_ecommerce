"use client";

import ProductGallery from "@/components/product/details/ProductGallery";
import ProductInfo from "@/components/product/details/ProductInfo";

interface ProductDetailsCardProps {
  productId: string;
}

const ProductDetailsCard = ({ productId }: ProductDetailsCardProps) => {
  return (
    <div className="relative grid lg:grid-cols-2 gap-4 lg:gap-12 my-8">
      <div className="lg:sticky top-24 h-fit">
        <ProductGallery key={productId} productId={productId} />
      </div>

      <ProductInfo productId={productId} />
    </div>
  );
};

export default ProductDetailsCard;
