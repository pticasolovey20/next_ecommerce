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

      <ModalContent className="flex flex-col gap-4">
        <div className="w-full h-[100px] p-2 rounded-xl border border-blue-500 bg-blue-300/50">
          <span className="font-semibold uppercase">authorize message</span>
        </div>

        <AuthProviders />
      </ModalContent>
    </ModalRoot>
  );
};

export default AuthModal;
