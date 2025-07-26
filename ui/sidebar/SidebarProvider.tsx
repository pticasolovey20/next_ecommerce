"use client";

import { ReactNode, useState } from "react";
import SidebarContext from "@/ui/sidebar/context";

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenSidebar = () => setIsOpen(true);
  const handleCloseSidebar = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{ isOpen, handleOpenSidebar, handleCloseSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
