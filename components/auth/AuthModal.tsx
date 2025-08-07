import Modal from "@/ui/modal/Modal";
import AuthProviders from "@/components/auth/AuthProviders";

interface AuthModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const AuthModal = ({ isModalOpen, handleCloseModal }: AuthModalProps) => {
  return (
    <Modal
      modalTitle="AUTH"
      isModalOpen={isModalOpen}
      handleCloseModal={handleCloseModal}
      containerClassName="w-full sm:max-w-[400px]"
    >
      <AuthProviders />
    </Modal>
  );
};

export default AuthModal;
