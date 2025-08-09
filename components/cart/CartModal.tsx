import { useCartStore } from "@/stores/useCartStore";

// import { ModalRoot, ModalHeader, ModalContent } from "@/ui/modal";
import { ModalRoot, ModalHeader, ModalContent } from "@/ui/modal";
import Cart from "@/components/cart/Cart";

const CartModal = () => {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const closeCart = useCartStore((state) => state.closeCart);

  return (
    <ModalRoot
      isModalOpen={isCartOpen}
      handleCloseModal={closeCart}
      maxWidth="sm:max-w-[600px] lg:max-w-[800px]"
      className="pb-4"
    >
      <ModalHeader title="cart" handleCloseModal={closeCart} />

      <ModalContent>
        <Cart />
      </ModalContent>
    </ModalRoot>
  );
};

export default CartModal;
