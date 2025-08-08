import { ReactNode } from "react";

interface ModalContentProps {
  children: ReactNode;
}

const ModalContent = ({ children }: ModalContentProps) => {
  return <div className="relative flex-1 p-4 overflow-y-auto overflow-x-hidden">{children}</div>;
};

export default ModalContent;
