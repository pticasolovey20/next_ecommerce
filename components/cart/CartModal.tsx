import { useCartStore } from "@/stores/useCartStore";

import Modal from "@/ui/modal/Modal";
import CartList from "@/components/cart/CartList";

const CartModal = () => {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const cartList = useCartStore((state) => state.cartList);
  const closeCart = useCartStore((state) => state.closeCart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  return (
    <Modal
      isModalOpen={isCartOpen && cartList.length > 0}
      handleCloseModal={closeCart}
      modalTitle="CART"
    >
      <CartList />

      <div>{getTotalPrice()}</div>
    </Modal>
  );
};

export default CartModal;
