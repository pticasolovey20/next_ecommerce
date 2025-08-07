import { PRODUCTS } from "@/constants/product";

import Modal from "@/ui/modal/Modal";
import CartList from "@/components/cart/CartList";

interface CartModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const CartModal = ({ isModalOpen, handleCloseModal }: CartModalProps) => {
  return (
    <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} modalTitle="CART">
      <CartList products={PRODUCTS} />
    </Modal>
  );
};

export default CartModal;
