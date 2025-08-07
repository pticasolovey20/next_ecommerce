"use client";

import { ReactNode, Fragment } from "react";
import { useSidebarContext } from "@/ui/sidebar/context";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useScrollLock } from "@/hooks/useScrollLock";

import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";
import { MdClose } from "react-icons/md";

interface SidebarRootProps {
  className?: string;
  children: ReactNode;
}

const SidebarRoot = ({ className, children }: SidebarRootProps) => {
  const { isSidebarOpen, handleCloseSidebar } = useSidebarContext();
  const isMounted = useIsMounted();

  useScrollLock(isSidebarOpen, isMounted);

  return (
    <Fragment>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-[40]" onClick={handleCloseSidebar} />
      )}

      <aside
        className={classNames(
          "fixed top-0 left-0 z-[50]",
          "min-h-[100dvh] h-full max-w-[400px] w-full",
          "flex flex-col",
          "border-r-2 border-muted-foreground bg-muted shadow-md",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          "transition-transform duration-500 ease-in-out"
        )}
      >
        <div className="sticky p-4 bg-muted">
          <Button
            size="icon"
            variant="ghost"
            aria-label="Close sidebar"
            onClick={handleCloseSidebar}
            className="left-4 w-10 h-10"
          >
            <MdClose className="w-full h-full" />
          </Button>
        </div>

        <div className={classNames("flex-1 p-4 overflow-y-auto", className)}>{children}</div>
      </aside>
    </Fragment>
  );
};

export default SidebarRoot;
