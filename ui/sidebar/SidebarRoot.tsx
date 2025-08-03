"use client";

import { ReactNode, useEffect, Fragment } from "react";
import { useSidebarContext } from "@/ui/sidebar/context";
import { useIsMounted } from "@/hooks/useIsMounted";
import { calculateScrollBarWidth } from "@/utils/calculateScrollBarWidth";
import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";
import { MdClose } from "react-icons/md";

interface SidebarRootProps {
  className?: string;
  children: ReactNode;
}

const SidebarRoot = ({ className, children }: SidebarRootProps) => {
  const { isOpen, handleCloseSidebar } = useSidebarContext();
  const isMounted = useIsMounted();

  useEffect(() => {
    if (!isMounted) return;

    if (isOpen) {
      const scrollBarWidth = calculateScrollBarWidth();

      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scrollBarWidth}px`;

      const header = document.getElementById("header-layout");
      if (header) header.style.marginRight = `${scrollBarWidth / 2}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.marginRight = "";

      const header = document.getElementById("header-layout");
      if (header) header.style.marginRight = "";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.marginRight = "";

      const header = document.getElementById("header-layout");
      if (header) header.style.marginRight = "";
    };
  }, [isOpen, isMounted]);

  return (
    <Fragment>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-[40]" onClick={handleCloseSidebar} />}

      <aside
        className={classNames(
          "fixed top-0 left-0 z-[50]",
          "min-h-[100dvh] h-full max-w-[400px] w-full",
          "flex flex-col",
          "border-r-2 border-muted-foreground bg-muted shadow-md",
          isOpen ? "translate-x-0" : "-translate-x-full",
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
