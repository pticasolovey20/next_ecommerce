"use client";

import { useState, useEffect } from "react";
import { classNames } from "@/utils/classNames";

import Image, { ImageProps } from "next/image";

interface ProductImageProps extends ImageProps {
  containerClassName?: string;
}

const fallbackImageSource = "/assets/fallback_image.webp";

const ProductImage = ({ src, alt, className, containerClassName, ...rest }: ProductImageProps) => {
  const [imageSource, setImageSource] = useState(src);

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
        onError={handleError}
        className={classNames("w-full h-full object-cover", className)}
      />
    </div>
  );
};

export default ProductImage;
