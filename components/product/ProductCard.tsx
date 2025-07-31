import { ProductData } from "@/types/product";
import { classNames } from "@/utils/classNames";

import CardContainer from "@/components/card/CardConainer";
import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/Button";
import { FaHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";

interface ProductCardProps {
  product: ProductData;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <CardContainer
      className={classNames(
        "group relative w-full p-0 rounded-xl",
        "hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
      )}
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full aspect-square bg-background overflow-hidden">
          <Image
            fill
            priority
            quality={75}
            src={product.assets[0].src}
            alt={product.assets[0].alt}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
            className={classNames(
              "object-contain p-4",
              "group-hover:scale-110",
              "transition-transform duration-300 ease-in-out"
            )}
          />
        </div>

        <div className="p-4 border-t-2 border-muted-foreground">
          <h2 className="font-semibold">{product.title}</h2>
          <p className="w-full truncate text-muted-foreground">{product.description}</p>
          <span className="text-xl font-semibold mt-4 block">${product.price}</span>
        </div>
      </Link>

      <Button
        size="icon"
        variant="ghost"
        aria-label="Add to favorite"
        className="absolute top-4 right-4 hover:text-red-500"
      >
        <FaHeart className="w-full h-full" />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        aria-label="Add to cart"
        className="absolute bottom-4 right-4 hover:text-green-500"
      >
        <RiShoppingCartLine className="w-full h-full" />
      </Button>
    </CardContainer>
  );
};

export default ProductCard;
