import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

interface ModalContentProps {
  className?: string;
  children: ReactNode;
}

const ModalContent = ({ className, children }: ModalContentProps) => {
  return (
    <div className={classNames("relative flex-1 p-4 overflow-y-auto overflow-x-hidden", className)}>
      {children}
    </div>
  );
};

export default ModalContent;
