"use client";

import { useState, useEffect } from "react";
import { classNames } from "@/utils/classNames";

import Image, { ImageProps } from "next/image";
import Skeleton from "@/ui/Skeleton";

interface ProductImageProps extends ImageProps {
  containerClassName?: string;
}

const fallbackImageSource = "/assets/fallback_image.webp";

const ProductImage = ({ src, alt, className, containerClassName, ...rest }: ProductImageProps) => {
  const [imageSource, setImageSource] = useState(src);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setImageSource(src);
  }, [src]);

  const handleError = () => setImageSource(fallbackImageSource);

  return (
    <div
      className={classNames("relative w-full cursor-pointer overflow-hidden", containerClassName)}
    >
      <Image
        {...rest}
        src={imageSource}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={classNames(
          isLoaded ? "visible" : "invisible",
          "w-full h-full object-cover",
          className
        )}
      />

      <Skeleton className={classNames(isLoaded ? "invisible" : "visible", "absolute inset-0")} />
    </div>
  );
};

export default ProductImage;
