"use client";

import { useState } from "react";
import { useProductById } from "@/hooks/product/useProductById";
import { classNames } from "@/utils/classNames";

import Image from "next/image";
import ProductSkeleton from "../ProductSkeleton";

interface ProductImageProps {
  productId: string;
}

const ProductImage = ({ productId }: ProductImageProps) => {
  const [selectedImage, setSelectedImage] = useState<number>(1);

  const { isLoading, product } = useProductById(productId);

  if (isLoading)
    return (
      <div className="space-y-6">
        {/* MAIN IMAGE */}
        <ProductSkeleton className="w-full h-96 flex justify-center rounded-xl" />

        {/* THUMBNAILS */}
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductSkeleton
              key={index}
              className={classNames(
                "h-24 flex items-center justify-center",
                "border-2 border-transparent rounded-xl"
              )}
            />
          ))}
        </div>
      </div>
    );

  return (
    <div className="space-y-6">
      {/* MAIN IMAGE */}
      <div className="relative w-full flex justify-center shadow-xl rounded-xl bg-white/60 hover-lift">
        <div className="relative h-70 sm:h-96 aspect-square cursor-pointer">
          <Image
            fill
            priority
            src={product?.assets[selectedImage].src || ""}
            alt={product?.assets[selectedImage].alt || ""}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-center gap-2">
        {product?.assets.map((_, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(index)}
            className={classNames(
              "w-3 h-3 rounded-full cursor-pointer",
              index === selectedImage ? "bg-foreground" : "bg-muted-foreground",
              "transition-colors duration-300 ease-in-out"
            )}
          />
        ))}
      </div>

      {/* THUMBNAILS */}
      <div className="hidden lg:grid grid-cols-4 gap-4">
        {product?.assets.map(({ src, alt }, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(index)}
            className={classNames(
              "relative h-24",
              "border-2 rounded-xl shadow-lg bg-white/60 cursor-pointer hover-lift",
              index === selectedImage ? "border-gray-400" : "border-transparent"
            )}
          >
            <Image fill priority src={src} alt={alt} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
