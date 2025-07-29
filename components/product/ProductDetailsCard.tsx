"use client";

import { useProductById } from "@/hooks/product/useProductById";

import ProductDetailSekeleton from "@/components/product/ProductDetailSekeleton";
import ProductDetailSectionContainer from "@/components/product/ProductDetailSectionContainer";
import Image from "next/image";

interface ProductDetailsCardProps {
  productId: string;
}

const ProductDetailsCard = ({ productId }: ProductDetailsCardProps) => {
  const { isLoading, product } = useProductById(productId);

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-4">
        {/* LEFT SIDE */}
        <div className="relative w-full">
          <div className="sticky top-20 w-full">
            {isLoading ? (
              <ProductDetailSekeleton className="w-full aspect-square" />
            ) : (
              <ProductDetailSectionContainer className="h-full">
                <div className="relative w-full aspect-square">
                  <Image
                    fill
                    priority
                    src={product?.assets[0].src || ""}
                    alt={product?.assets[0].alt || ""}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-contain"
                  />
                </div>
              </ProductDetailSectionContainer>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full">
          {isLoading ? (
            <ProductDetailSekeleton className="h-[300px]" />
          ) : (
            <ProductDetailSectionContainer className="h-[300px]">
              <div className="">
                <h1 className="text-2xl font-semibold">{product?.title}</h1>
                <p className="text-lg font-medium mt-2">{product?.description}</p>
              </div>
            </ProductDetailSectionContainer>
          )}

          <ProductDetailSekeleton className="h-[300px]" />
          <ProductDetailSekeleton className="h-[300px]" />
          <ProductDetailSekeleton className="h-[300px]" />
        </div>
      </div>

      <ProductDetailSekeleton className="h-[300px]" />
      <ProductDetailSekeleton className="h-[300px]" />
    </div>
  );
};

export default ProductDetailsCard;
