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
      modalTitle="CART" 
      isModalOpen={isCartOpen && cartList.length > 0}
      handleCloseModal={closeCart}
      containerClassName="w-full sm:max-w-[500px]"
    >
      <CartList />

      <div>{getTotalPrice()}</div>
    </Modal>
  );
};

export default CartModal;
