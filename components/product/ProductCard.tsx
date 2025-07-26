import { ProductData } from "@/types/product";
import { classNames } from "@/utils/classNames";

import Link from "next/link";
import IconButton from "@/ui/IconButton";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";

interface ProductCardProps {
  product: ProductData;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      className={classNames(
        "relative w-full",
        "rounded-md border-2 border-muted-foreground",
        "shadow-lg bg-muted overflow-hidden"
      )}
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full aspect-square bg-background hover:bg-muted/50 transition-colors" />

        <div className="p-4 border-t-2 border-muted-foreground">
          <h2 className="font-semibold">{product.title}</h2>
          <p className="w-full truncate text-muted-foreground">{product.description}</p>
          <span className="text-xl font-semibold mt-4 block">${product.price}</span>
        </div>
      </Link>

      <IconButton
        ariaLabel="Add to favorite"
        className="absolute top-4 right-4 w-8 h-8 hover:bg-muted z-10"
      >
        <IoMdHeartEmpty className="w-full h-full" />
      </IconButton>

      <IconButton
        ariaLabel="Add to cart"
        className="absolute bottom-4 right-4 w-9 h-9 p-2 hover:bg-background z-10"
      >
        <RiShoppingCartLine className="w-full h-full" />
      </IconButton>
    </div>
  );
};

export default ProductCard;
