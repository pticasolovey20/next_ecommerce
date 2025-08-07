import { ProductData } from "@/types/product";
import { classNames } from "@/utils/classNames";

interface ProductPriceProps {
  product: ProductData;
}

const ProductPrice = ({ product }: ProductPriceProps) => {
  return (
    <div className="space-y-2">
      <span className="text-4xl font-medium text-foreground">${product?.price}</span>

      <div className="flex items-center space-x-4">
        {product?.oldPrice && (
          <span className="text-xl text-muted-foreground line-through">${product.oldPrice}</span>
        )}

        {product?.discount && (
          <span
            className={classNames(
              "text-white text-sm font-medium",
              "px-3 py-1 rounded-full bg-red-500"
            )}
          >
            -{product.discount}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductPrice;
