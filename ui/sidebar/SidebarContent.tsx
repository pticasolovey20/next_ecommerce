import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

interface SidebarContentProps {
  className?: string;
  children: ReactNode;
}

const SidebarContent = ({ className, children }: SidebarContentProps) => {
  return <div className={classNames("flex-1 p-4 overflow-y-auto", className)}>{children}</div>;
};

export default SidebarContent;
