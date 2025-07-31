"use client";

import { useSidebarContext } from "@/ui/sidebar/context";

import { Sidebar } from "@/ui/sidebar";
import Button from "@/ui/Button";
import { MdClose } from "react-icons/md";

const AppSidebar = () => {
  const { handleCloseSidebar } = useSidebarContext();

  return (
    <Sidebar>
      <Button
        size="icon"
        variant="ghost"
        aria-label="Close sidebar"
        onClick={handleCloseSidebar}
        className="w-9 h-9"
      >
        <MdClose className="w-full h-full" />
      </Button>
    </Sidebar>
  );
};

export default AppSidebar;
