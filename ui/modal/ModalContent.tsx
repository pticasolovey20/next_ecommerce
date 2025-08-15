import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

interface ModalContentProps {
  className?: string;
  children: ReactNode;
}

const ModalContent = ({ className, children }: ModalContentProps) => {
  return (
    <div
      id="scroll-container"
      className={classNames("flex-1 overflow-x-hidden overflow-y-auto bg-background", className)}
    >
      {children}
    </div>
  );
};

export default ModalContent;
