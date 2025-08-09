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
      maxWidth="sm:max-w-[400px]"
    >
      <ModalHeader title="auth" handleCloseModal={handleCloseModal} />

      <ModalContent>
        <div className="flex flex-col gap-4 p-4">
          <div className="w-full h-[100px] p-2 rounded-xl border border-blue-500 bg-blue-300/50">
            <span className="font-semibold uppercase">authorize message</span>
          </div>

          <AuthProviders />
        </div>
      </ModalContent>
    </ModalRoot>
  );
};

export default AuthModal;
