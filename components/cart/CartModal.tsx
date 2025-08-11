import { useCartStore } from "@/stores/useCartStore";

import { ModalRoot, ModalHeader, ModalContent } from "@/ui/modal";
import Cart from "@/components/cart/Cart";

const CartModal = () => {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const closeCart = useCartStore((state) => state.closeCart);

  return (
    <ModalRoot
      isOpen={isCartOpen}
      onClose={closeCart}
      maxWidth="sm:max-w-[600px] lg:max-w-[800px]"
      className="pb-4"
    >
      <ModalHeader title="cart" onClose={closeCart} />

      <ModalContent>
        <Cart />
      </ModalContent>
    </ModalRoot>
  );
};

export default CartModal;
