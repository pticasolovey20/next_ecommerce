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
      price: "text-lg",
      oldPrice: "text-sm",
      discount: "text-xs px-2 py-0.5",
    },

    md: {
      price: "text-xl",
      oldPrice: "text-base",
      discount: "text-sm px-2 py-1 rounded-md",
    },

    lg: {
      price: "text-4xl",
      oldPrice: "text-xl",
      discount: "text-base px-4 py-1.5 rounded-lg",
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
              "bg-red-500",
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
