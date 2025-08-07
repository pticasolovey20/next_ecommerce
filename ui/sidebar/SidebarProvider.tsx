"use client";

import { ReactNode, useState } from "react";
import SidebarContext from "@/ui/sidebar/context";

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, handleOpenSidebar, handleCloseSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
