import { ProductData } from "@/types/product";
import { useCartStore } from "@/stores/useCartStore";

import CardContainer from "@/components/card/CardConainer";
import ProductImage from "@/components/product/ProductImage";
import Button from "@/ui/Button";
import { BiTrash } from "react-icons/bi";
import Counter from "@/components/cart/Counter";

interface CartItemProps {
  product: ProductData;
}

const CartItem = ({ product }: CartItemProps) => {
  const removeProduct = useCartStore((state) => state.removeProduct);

  const getItemQuantity = useCartStore((state) => state.getItemQuantity);
  const quantity = getItemQuantity(product.id);

  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  return (
    <CardContainer className="relative sm:h-32 flex flex-col sm:flex-row p-0 rounded-lg">
      <ProductImage
        fill
        priority
        quality={75}
        src={product.assets[0].src}
        alt={product.assets[0].alt}
        containerClassName="shrink-0 sm:w-32 h-50 sm:h-32"
      />

      <div className="relative w-full flex flex-col justify-between gap-3 p-4 overflow-hidden">
        <div className="flex items-center justify-between gap-4">
          <span className="text-2xl truncate">{product.title}</span>

          <Button
            aria-label="Remove product from cart"
            variant="ghost"
            className="shrink-0 w-9 h-9 p-2 hover:text-red-500"
            onClick={() => removeProduct(product.id)}
          >
            <BiTrash className="w-full h-full" />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-muted-foreground text-base font-medium line-through">
                ${product.oldPrice}
              </span>
            )}

            <span className=" text-foreground text-xl font-semibold">${product.price}</span>
          </div>

          <Counter
            counterValue={quantity}
            onValueDecrease={() => decrementQuantity(product.id)}
            onValueIncrease={() => incrementQuantity(product.id)}
          />
        </div>
      </div>
    </CardContainer>
  );
};

export default CartItem;
