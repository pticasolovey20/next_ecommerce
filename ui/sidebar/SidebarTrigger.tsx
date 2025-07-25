"use client";

import { useSidebarContext } from "@/ui/sidebar/context";
import { classNames } from "@/utils/classNames";

import { IoChevronBackOutline } from "react-icons/io5";

interface SidebarTriggerProps {
  className?: string;
}

const SidebarTrigger = ({ className }: SidebarTriggerProps) => {
  const { isOpen, toggleSidebar } = useSidebarContext();

  return (
    <button
      type="button"
      onClick={toggleSidebar}
      aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      className={classNames(
        "w-8 h-8 p-1 border-2 rounded-md cursor-pointer",

        isOpen
          ? "text-foreground border-foreground"
          : "text-muted-foreground border-muted-foreground hover:text-foreground hover:border-foreground",

        "transition-colors duration-300 ease-in-out",

        className
      )}
    >
      <IoChevronBackOutline
        className={classNames("w-full h-full", isOpen ? "rotate-0" : "rotate-180")}
      />
    </button>
  );
};

export default SidebarTrigger;
