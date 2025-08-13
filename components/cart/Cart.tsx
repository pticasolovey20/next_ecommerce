import useCart from "@/hooks/cart/useCart";
import { useCartStore } from "@/stores/useCartStore";
import { classNames } from "@/utils/classNames";

import CartList from "@/components/cart/CartList";
import Button from "@/ui/Button";

const Cart = () => {
  const { isLoading, isEmpty, items } = useCart();

  // const cartList = useCartStore((state) => state.cartList);
  // const isEmpty = cartList.length <= 0;

  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const closeCart = useCartStore((state) => state.closeCart);

  return (
    <div className="relative">
      <CartList isLoading={isLoading} isEmpty={isEmpty} list={items} />

      <div className="sticky -bottom-4 p-4 border-t border-gray-200 bg-muted">
        <div className="flex flex-col gap-4">
          {!isEmpty && (
            <div
              className={classNames(
                "flex items-center justify-between",
                "px-4 py-2 rounded-md border border-green-500 bg-green-300/50"
              )}
            >
              <span className="font-semibold text-base">TOTAL:</span>
              <span className="text-2xl font-bold">$ {getTotalPrice()}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" onClick={closeCart} className="w-full hover-lift">
              Continue Shopping
            </Button>

            <Button size="lg" variant="primary" className="w-full hover-lift" disabled={isEmpty}>
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>

      <div className="px-4 bg-muted">
        <div className="h-[200px] rounded-lg border border-gray-200 bg-background" />
      </div>
    </div>
  );
};

export default Cart;
