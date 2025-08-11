import { create } from "zustand";

interface AppSidebarState {
  isOpen: boolean;

  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useAppSidebarStore = create<AppSidebarState>((set) => ({
  isOpen: false,

  openSidebar: () => set({ isOpen: true }),
  closeSidebar: () => set({ isOpen: false }),
}));
