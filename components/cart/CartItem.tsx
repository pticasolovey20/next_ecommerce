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
    <CardContainer className="relative h-full flex flex-col p-0 rounded-lg">
      <ProductImage
        fill
        priority
        quality={75}
        src={product.assets[0].src}
        alt={product.assets[0].alt}
        containerClassName="shrink-0 h-50 sm:flex-1"
      />

      <div className="relative w-full w-full flex flex-col p-4 overflow-hidden">
        <span className="text-xl truncate">{product.title}</span>

        <div className="flex-1 flex flex-col">
          <span className="text-foreground text-lg font-semibold">${product.price}</span>
        </div>

        <Counter
          counterValue={quantity}
          onValueDecrease={() => decrementQuantity(product.id)}
          onValueIncrease={() => incrementQuantity(product.id)}
        />
      </div>

      <Button
        variant="ghost"
        aria-label="Remove product from cart"
        className="absolute top-2 right-2 shrink-0 w-9 h-9 p-2 text-red-500 hover:text-red-500"
        onClick={() => removeProduct(product.id)}
      >
        <BiTrash className="w-full h-full" />
      </Button>
    </CardContainer>
  );
};

export default CartItem;
