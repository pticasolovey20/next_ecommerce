import { useCartStore } from "@/stores/useCartStore";

import EmptyList from "@/ui/EmptyList";
import CartItem from "@/components/cart/CartItem";

const CartList = () => {
  const cartList = useCartStore((state) => state.cartList);

  if (cartList.length <= 0) {
    return <EmptyList containerClassName="h-[300px]" />;
  }

  return (
    <ul className="flex flex-col gap-4">
      {cartList.map((product, index) => (
        <li key={index}>
          <CartItem product={product} />
        </li>
      ))}
    </ul>
  );
};

export default CartList;
