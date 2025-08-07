import { PRODUCTS } from "@/constants/product";

import Modal from "@/ui/modal/Modal";
import CartList from "@/components/cart/CartList";

interface CartModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const CartModal = ({ isModalOpen, handleCloseModal }: CartModalProps) => {
  return (
    <Modal
      modalTitle="CART"
      isModalOpen={isModalOpen}
      handleCloseModal={handleCloseModal}
      containerClassName="w-full sm:max-w-[500px]"
    >
      <CartList products={PRODUCTS} />
    </Modal>
  );
};

export default CartModal;
