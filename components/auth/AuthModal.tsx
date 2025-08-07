import Modal from "@/ui/modal/Modal";
import AuthContent from "@/components/auth/AuthContent";

interface AuthModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const AuthModal = ({ isModalOpen, handleCloseModal }: AuthModalProps) => {
  return (
    <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} modalTitle="AUTH">
      <AuthContent />
    </Modal>
  );
};

export default AuthModal;
