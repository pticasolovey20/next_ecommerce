import { CartItemData } from "@/types/cart";
import { useRemoveProductFromCart } from "@/hooks/cart/useRemoveProductFromCart";
import { useCartStore } from "@/stores/useCartStore";

import CardContainer from "@/components/card/CardConainer";
import ProductImage from "@/components/product/ProductImage";
import Button from "@/ui/Button";
import { BiTrash } from "react-icons/bi";
import Counter from "@/components/cart/Counter";

interface CartItemProps {
  item: CartItemData;
}

const CartItem = ({ item }: CartItemProps) => {
  const { removeProduct } = useRemoveProductFromCart();

  const handleRemove = () => removeProduct(item.productId);

  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  return (
    <CardContainer className="relative h-full flex flex-col p-0 rounded-lg">
      <ProductImage
        fill
        priority
        quality={75}
        src={item.product.assets[0].src}
        alt={item.product.assets[0].alt}
        containerClassName="shrink-0 h-50 sm:flex-1"
      />

      <div className="relative w-full flex flex-col gap-2 p-3 overflow-hidden">
        <span className="text-lg truncate">{item.product.title}</span>

        <div className="flex-1 flex justify-between">
          <span className="text-foreground text-lg font-semibold">${item.product.price}</span>

          <Counter
            counterValue={item.quantity}
            onValueDecrease={() => decrementQuantity(item.product.id)}
            onValueIncrease={() => incrementQuantity(item.product.id)}
          />
        </div>
      </div>

      <Button
        variant="ghost"
        aria-label="Remove product from cart"
        className="absolute top-2 right-2 shrink-0 w-9 h-9 p-2 text-red-500 hover:text-red-500"
        onClick={handleRemove}
      >
        <BiTrash className="w-full h-full" />
      </Button>
    </CardContainer>
  );
};

export default CartItem;
