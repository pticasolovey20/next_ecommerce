import { ProductData } from "@/types/product";
import { classNames } from "@/utils/classNames";

import CardContainer from "@/components/card/CardConainer";
import Link from "next/link";
import ProductImage from "@/components/product/ProductImage";
import Button from "@/ui/Button";
import { FaHeart } from "react-icons/fa";
import ToggleCartButton from "@/components/cart/ToggleCartButton";
import ProductPrice from "./ProductPrice";

interface ProductCardProps {
  product: ProductData;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <CardContainer
      className={classNames(
        "group relative",
        "w-full h-full",
        "p-0 rounded-xl",
        "hover:shadow-xl hover:-translate-y-1",
        "transition-transform duration-300"
      )}
    >
      <Link href={`/products/${product.id}`} className="flex flex-col h-full">
        <ProductImage
          fill
          quality={75}
          loading="lazy"
          src={product.assets[0].src}
          alt={product.assets[0].alt}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
          containerClassName="shrink-0 h-50 sm:flex-1 bg-background"
          className={classNames(
            "object-cover",
            "group-hover:scale-110",
            "transition-transform duration-300 ease-in-out"
          )}
        />

        <div className="h-[150px] flex flex-col p-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="w-full truncate text-muted-foreground">{product.description}</p>
          </div>

          <ProductPrice product={product} className="mt-2" />
        </div>
      </Link>

      <Button
        size="icon"
        variant="ghost"
        aria-label="Add to favorite"
        className="absolute top-4 right-4 w-8 h-8 hover:text-red-500"
      >
        <FaHeart className="w-full h-full" />
      </Button>
      <ToggleCartButton product={product} />
    </CardContainer>
  );
};

export default ProductCard;
