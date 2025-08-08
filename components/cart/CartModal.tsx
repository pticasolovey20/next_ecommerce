import { useCartStore } from "@/stores/useCartStore";
import { classNames } from "@/utils/classNames";

import { ModalRoot, ModalHeader, ModalContent, ModalFooter } from "@/ui/modal";
import CartList from "@/components/cart/CartList";
import Button from "@/ui/Button";

const CartModal = () => {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const cartList = useCartStore((state) => state.cartList);
  const closeCart = useCartStore((state) => state.closeCart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  return (
    <ModalRoot
      isModalOpen={isCartOpen && cartList.length > 0}
      handleCloseModal={closeCart}
      containerClassName="w-full sm:max-w-[600px] md:max-w-3xl lg:max-w-4xl"
    >
      <ModalHeader modalTitle="CART" handleCloseModal={closeCart} />

      <ModalContent>
        <CartList />
      </ModalContent>

      <ModalFooter>
        <div className="flex flex-col gap-4 p-4">
          <div
            className={classNames(
              "flex items-center justify-between",
              "px-4 py-2 rounded-md border border-green-500 bg-green-300/50"
            )}
          >
            <span className="font-semibold text-base">TOTAL:</span>
            <span className="text-2xl font-bold">$ {getTotalPrice()}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" variant="secondary" onClick={closeCart} className="w-full">
              Continue Shopping
            </Button>

            <Button size="lg" variant="primary" className="w-full">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </ModalFooter>
    </ModalRoot>
  );
};

export default CartModal;
