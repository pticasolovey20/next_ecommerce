import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

interface IconButtonProps {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

const IconButton = ({ onClick, className, children }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "flex items-center justify-center",
        "p-1 rounded-md cursor-pointer hover:bg-gray-300",
        "transition-colors duration-300 ease-in-out",
        className
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
