import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

interface CardContainerProps {
  className?: string;
  children: ReactNode;
}

const CardContainer = ({ className, children }: CardContainerProps) => {
  return (
    <div
      className={classNames(
        "p-6 rounded-2xl border border-gray-300/50 shadow-lg bg-white/60 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardContainer;
