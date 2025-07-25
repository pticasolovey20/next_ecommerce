import { createContext, useContext } from "react";

interface SidebarContextState {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextState | null>(null);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("Sidebar components must be used within a Sidebar provider");
  }

  return context;
};

export default SidebarContext;
