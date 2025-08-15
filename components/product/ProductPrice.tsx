import { ProductData } from "@/types/product";
import { classNames } from "@/utils/classNames";

interface ProductPriceProps {
  product: ProductData;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const ProductPrice = ({ className, size = "md", product }: ProductPriceProps) => {
  const sizeClasses = {
    sm: {
      price: "text-base sm:text-lg",
      oldPrice: "text-xs sm:text-sm",
      discount: "text-[10px] px-1.5 py-0.5 sm:text-xs sm:px-2 sm:py-0.5",
    },

    md: {
      price: "text-lg md:text-xl",
      oldPrice: "text-base",
      discount: "px-2 py-0.5 text-sm md:px-3 md:py-1 rounded-md",
    },

    lg: {
      price: "text-3xl lg:text-4xl",
      oldPrice: "text-lg lg:text-xl",
      discount: "text-base lg:text-lg px-3 lg:px-4 py-1 rounded-md lg:rounded-lg",
    },
  };

  return (
    <div className={classNames(className)}>
      <div className="flex items-center gap-3">
        {product?.oldPrice && (
          <span
            className={classNames("text-muted-foreground line-through", sizeClasses[size].oldPrice)}
          >
            ${product.oldPrice}
          </span>
        )}

        {product?.discount && (
          <span
            className={classNames(
              "text-white font-medium",
              "bg-[#C62828]",
              sizeClasses[size].discount
            )}
          >
            -{product.discount}%
          </span>
        )}
      </div>

      <span className={classNames("font-medium text-foreground", sizeClasses[size].price)}>
        ${product?.price}
      </span>
    </div>
  );
};

export default ProductPrice;
