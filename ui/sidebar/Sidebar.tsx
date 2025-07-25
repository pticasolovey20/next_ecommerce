"use client";

import { ReactNode } from "react";
import { useSidebarContext } from "@/ui/sidebar/context";
import { classNames } from "@/utils/classNames";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const { isOpen } = useSidebarContext();

  return (
    <aside
      className={classNames(
        "md:hidden fixed top-0 left-0 z-[50]",
        "min-h-[100dvh] h-full max-w-[300px] w-full",
        "p-4 bg-muted-foreground shadow-md",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "transition-transform duration-300 ease-in-out"
      )}
    >
      {children}
    </aside>
  );
};

export default Sidebar;
