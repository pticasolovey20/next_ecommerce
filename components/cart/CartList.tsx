import { useCartStore } from "@/stores/useCartStore";

import EmptyList from "@/ui/EmptyList";
import CartItem from "@/components/cart/CartItem";

const CartList = () => {
  const cartList = useCartStore((state) => state.cartList);

  if (cartList.length <= 0) {
    return <EmptyList containerClassName="h-[300px]" />;
  }

  return (
    <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cartList.map((product, index) => (
        <li key={index} className="w-full">
          <CartItem product={product} />
        </li>
      ))}
    </ul>
  );
};

export default CartList;
