import Button from "@/ui/Button";
import { MdClose } from "react-icons/md";

interface ModalHeaderProps {
  title: string;
  handleCloseModal: () => void;
}

const ModalHeader = ({ title, handleCloseModal }: ModalHeaderProps) => {
  return (
    <div className="flex justify-between p-4 border-b border-gray-200">
      <h2
        title={title}
        className="w-full truncate text-2xl font-semibold text-foreground uppercase"
      >
        {title}
      </h2>

      <Button size="icon" variant="ghost" onClick={handleCloseModal}>
        <MdClose className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default ModalHeader;
