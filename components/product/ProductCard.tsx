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
    <Link href={`/products/${product.id}`}>
      <div
        className={classNames(
          "relative w-full",
          "rounded-md border-2 border-muted-foreground",
          "shadow-lg bg-muted cursor-pointer overflow-hidden"
        )}
      >
        <div className="relative w-full aspect-square bg-background" />

        <IconButton className="absolute top-4 right-4 w-8 h-8 hover:bg-muted">
          <IoMdHeartEmpty className="w-full h-full" />
        </IconButton>

        <div className="p-4 border-t-2 border-muted-foreground">
          <h2 className="font-semibold">{product.title}</h2>
          <p className="w-full truncate text-muted-foreground">{product.description}</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-semibold">${product.price}</span>

            <IconButton className="w-9 h-9 p-2 hover:bg-background">
              <RiShoppingCartLine className="w-full h-full" />
            </IconButton>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
