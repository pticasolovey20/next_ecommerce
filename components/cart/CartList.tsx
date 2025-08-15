"use client";

import { CartItemData } from "@/types/cart";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useScrollLock } from "@/hooks/useScrollLock";

import EmptyList from "@/ui/EmptyList";
import CartItem from "@/components/cart/CartItem";
import Loader from "@/ui/Loader";

interface CartListProps {
  isLoading?: boolean;
  isEmpty: boolean;
  list: CartItemData[] | undefined;
}

const CartList = ({ isLoading, isEmpty, list }: CartListProps) => {
  const isMounted = useIsMounted();
  useScrollLock(!!isLoading, isMounted, document.getElementById("scroll-container")!);

  if (isEmpty) {
    return <EmptyList className="h-[300px]" />;
  }

  return (
    <ul className="relative w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {isLoading && <Loader className="absolute h-full z-[20]" />}

      {list?.map((item, index) => (
        <li key={index} className="sm:aspect-square">
          <CartItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default CartList;
