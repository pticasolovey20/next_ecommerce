"use client";

import { useSidebarContext } from "@/ui/sidebar/context";

import { Sidebar } from "@/ui/sidebar";
import { MdClose } from "react-icons/md";

const AppSidebar = () => {
  const { handleCloseSidebar } = useSidebarContext();

  return (
    <Sidebar>
      <button onClick={handleCloseSidebar} className="w-7 h-7 cursor-pointer">
        <MdClose className="w-full h-full" />
      </button>
    </Sidebar>
  );
};

export default AppSidebar;
