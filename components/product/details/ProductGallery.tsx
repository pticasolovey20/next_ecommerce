"use client";

import { useState, useEffect } from "react";
import { useProductById } from "@/hooks/product/useProductById";
import { classNames } from "@/utils/classNames";

import ProductSkeleton from "@/ui/Skeleton";
import ProductImage from "@/components/product/ProductImage";

interface ProductGalleryProps {
  productId: string;
}

const ProductGallery = ({ productId }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const { isLoading, product } = useProductById(productId);

  useEffect(() => {
    setSelectedImage(0);
  }, [productId]);

  const handleSelectImage = (index: number) => setSelectedImage(index);

  if (isLoading)
    return (
      <div className="space-y-6">
        {/* MAIN IMAGE */}
        <ProductSkeleton className="w-full h-60 sm:h-96 flex justify-center rounded-xl" />

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

  const selectedAsset = product?.assets[selectedImage];

  return (
    <div className="space-y-6">
      {/* MAIN IMAGE */}
      <div className="relative w-full flex justify-center shadow-xl rounded-xl bg-white/60 hover-lift overflow-hidden">
        <ProductImage
          fill
          priority
          quality={100}
          src={selectedAsset?.src || ""}
          alt={selectedAsset?.alt || ""}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
          containerClassName="relative w-full h-60 sm:h-96 aspect-square cursor-pointer"
        />
      </div>

      <div className="lg:hidden flex items-center justify-center gap-2">
        {product?.assets.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSelectImage(index)}
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
        {product?.assets.map(({ src, alt }, index) => {
          const isImageSelected = index === selectedImage;

          return (
            <div
              key={index}
              onClick={() => handleSelectImage(index)}
              className={classNames(isImageSelected ? "border-gray-400" : "border-transparent")}
            >
              <ProductImage
                fill
                quality={100}
                loading="lazy"
                src={src}
                alt={alt}
                sizes="(min-width: 1024px) 25vw, 0px"
                containerClassName={classNames(
                  "relative h-24 overflow-hidden",
                  "border-2 rounded-xl shadow-lg bg-white/60 cursor-pointer hover-lift",
                  index === selectedImage ? "border-gray-400" : "border-transparent"
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
