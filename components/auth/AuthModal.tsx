import { ModalRoot, ModalHeader, ModalContent } from "@/ui/modal";
import AuthProviders from "@/components/auth/AuthProviders";

interface AuthModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const AuthModal = ({ isModalOpen, handleCloseModal }: AuthModalProps) => {
  return (
    <ModalRoot
      isModalOpen={isModalOpen}
      handleCloseModal={handleCloseModal}
      containerClassName="w-full sm:max-w-[400px]"
    >
      <ModalHeader modalTitle="CART" handleCloseModal={handleCloseModal} />

      <ModalContent>
        <AuthProviders />
      </ModalContent>
    </ModalRoot>
  );
};

export default AuthModal;
