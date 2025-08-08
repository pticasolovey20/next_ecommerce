import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

interface ModalFooterProps {
  className?: string;
  children: ReactNode;
}

const ModalFooter = ({ className, children }: ModalFooterProps) => {
  return (
    <div className={classNames("min-h-[150px] border-t border-gray-200 bg-background", className)}>
      {children}
    </div>
  );
};

export default ModalFooter;
