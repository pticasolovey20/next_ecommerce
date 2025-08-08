import { ReactNode } from "react";

interface ModalFooterProps {
  children: ReactNode;
}

const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className="min-h-[150px] border-t border-gray-200 bg-background">{children}</div>;
};

export default ModalFooter;
