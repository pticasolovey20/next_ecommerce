import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";
import { MdClose } from "react-icons/md";

interface ModalHeaderProps {
  modalTitle: string;
  handleCloseModal: () => void;
}

const ModalHeader = ({ modalTitle, handleCloseModal }: ModalHeaderProps) => {
  return (
    <div className="flex items-center justify-between gap-8 p-4 border-b border-gray-200">
      <h3
        title={modalTitle}
        className={classNames(
          "w-full truncate",
          "text-2xl font-semibold text-foreground uppercase"
        )}
      >
        {modalTitle}
      </h3>

      <Button size="icon" variant="ghost" onClick={handleCloseModal}>
        <MdClose className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default ModalHeader;
