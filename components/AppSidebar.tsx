"use client";

import { useSidebarContext } from "@/ui/sidebar/context";

import { Sidebar } from "@/ui/sidebar";
import IconButton from "@/ui/IconButton";
import { MdClose } from "react-icons/md";

const AppSidebar = () => {
  const { handleCloseSidebar } = useSidebarContext();

  return (
    <Sidebar>
      <IconButton
        onClick={handleCloseSidebar}
        ariaLabel="Close sidebar"
        className="w-9 h-9 hover:bg-muted z-[50]"
      >
        <MdClose className="w-full h-full" />
      </IconButton>
    </Sidebar>
  );
};

export default AppSidebar;
