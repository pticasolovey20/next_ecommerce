import { ProductData } from "@/types/product";
import { classNames } from "@/utils/classNames";

import Link from "next/link";
import ProductImage from "@/components/product/ProductImage";
import { MdArrowOutward } from "react-icons/md";

interface SerachProductCardProps {
  product: ProductData;
  onClick: () => void;
}

const SearchProductCard = ({ product, onClick }: SerachProductCardProps) => {
  return (
    <div
      className="relative flex group p-2 rounded-lg overflow-hidden hover:bg-gray-200/50"
      onClick={onClick}
    >
      <Link href={`/products/${product.id}`} className="grow pr-4 overflow-hidden">
        <div className="flex items-center gap-4">
          <ProductImage
            fill
            loading="lazy"
            quality={75}
            src={product.assets[0].src}
            alt={product.assets[0].alt}
            containerClassName="shrink-0 w-16 h-16 rounded-md"
          />

          <div className="w-full flex flex-col text-foreground overflow-hidden">
            <span className="text-xl truncate">{product.title}</span>
            <span className="text-lg font-medium">${product.price}</span>
          </div>
        </div>
      </Link>

      <button
        className={classNames(
          "shrink-0 w-8 h-8",
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
