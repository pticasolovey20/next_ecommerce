import { ProductData } from "@/types/product";
import { classNames } from "@/utils/classNames";

import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

interface SerachProductCardProps {
  product: ProductData;
  onClick: () => void;
}

const SearchProductCard = ({ product, onClick }: SerachProductCardProps) => {
  return (
    <div
      className="relative group p-1 rounded-lg overflow-hidden hover:bg-gray-200/50"
      onClick={onClick}
    >
      <Link href={`/products/${product.id}`}>
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 border-2 border-muted-foreground rounded-md overflow-hidden">
            <Image
              fill
              quality={75}
              src={product.assets[0].src}
              alt={product.assets[0].alt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-medium">{product.title}</span>
            <span className="text-lg">${product.price}</span>
          </div>
        </div>
      </Link>

      <button
        className={classNames(
          "absolute top-2 right-2 w-8 h-8",
          "group-hover:scale-110 cursor-pointer",
          "transition-transform duration-100 ease-in-out"
        )}
      >
        <MdArrowOutward className="w-full h-full" />
      </button>
    </div>
  );
};

export default SearchProductCard;
