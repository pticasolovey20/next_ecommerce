import { CartItemData } from "@/types/cart";

import Loader from "@/ui/Loader";
import EmptyList from "@/ui/EmptyList";
import CartItem from "@/components/cart/CartItem";

interface CartListProps {
  isLoading: boolean;
  isEmpty: boolean;
  list: CartItemData[] | undefined;
}

const CartList = ({ isLoading, isEmpty, list }: CartListProps) => {
  if (isLoading) {
    return <Loader className="h-[300px]" />;
  }

  if (isEmpty) {
    return <EmptyList className="h-[300px]" />;
  }

  return (
    <ul className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {list!.map((product, index) => (
        <li key={index} className="sm:aspect-square">
          <CartItem product={product} />
        </li>
      ))}
    </ul>
  );
};

export default CartList;
