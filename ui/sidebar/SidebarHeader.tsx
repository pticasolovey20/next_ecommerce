import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";
import { MdClose } from "react-icons/md";

interface SidebarHeaderProps {
  className?: string;
  onClose: () => void;
  children?: ReactNode;
}

const SidebarHeader = ({ className, onClose, children }: SidebarHeaderProps) => {
  return (
    <div
      className={classNames(
        "sticky h-16",
        "flex items-center justify-between gap-4",
        "px-2 border-b border-gray-200/50",
        "bg-white bg-muted shadow-sm",
        className
      )}
    >
      <Button
        size="icon"
        variant="ghost"
        aria-label="Close sidebar"
        onClick={onClose}
        className="w-10 h-10 sm:inline-flex shrink-0"
      >
        <MdClose className="w-full h-full" />
      </Button>

      {children}
    </div>
  );
};

export default SidebarHeader;
