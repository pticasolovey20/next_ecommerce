import { ProductData } from "@/types/product";
import { classNames } from "@/utils/classNames";

import Link from "next/link";
import IconButton from "@/ui/IconButton";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import Image from "next/image";

interface ProductCardProps {
  product: ProductData;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      className={classNames(
        "group relative w-full",
        "rounded-md border-2 border-muted-foreground",
        "shadow-lg bg-muted overflow-hidden"
      )}
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full aspect-square bg-background overflow-hidden">
          <Image
            fill
            loading="lazy"
            src={product.assets[0].src}
            alt={product.assets[0].alt}
            className={classNames(
              "object-contain p-4",
              "group-hover:scale-110 group-hover:rotate-5",
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

      <IconButton
        ariaLabel="Add to favorite"
        className={classNames(
          "absolute top-4 right-4",
          "w-8 h-8 z-[10]",
          "hover:text-red-500 hover:bg-muted-foreground/5",
          "transition-colors duration-200 ease-in-out"
        )}
      >
        <IoMdHeartEmpty className="w-full h-full" />
      </IconButton>

      <IconButton
        ariaLabel="Add to cart"
        className={classNames(
          "absolute bottom-4 right-4",
          "w-9 h-9 p-2 z-[10]",
          "hover:text-green-500 hover:bg-muted-foreground/5",
          "transition-colors duration-200 ease-in-out"
        )}
      >
        <RiShoppingCartLine className="w-full h-full" />
      </IconButton>
    </div>
  );
};

export default ProductCard;
