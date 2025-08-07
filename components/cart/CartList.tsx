import { ProductData } from "@/types/product";

import CartItem from "@/components/cart/CartItem";

interface CartListProps {
  products: Omit<ProductData, "id">[];
}

const CartList = ({ products }: CartListProps) => {
  return (
    <ul className="flex flex-col gap-4">
      {products.slice(0, 8).map((product, index) => (
        <li key={index}>
          <CartItem product={product} />
        </li>
      ))}
    </ul>
  );
};

export default CartList;
