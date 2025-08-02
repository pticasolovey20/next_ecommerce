"use client";

import { ReactNode, useEffect, Fragment } from "react";
import { useSidebarContext } from "@/ui/sidebar/context";
import { useIsMounted } from "@/hooks/useIsMounted";
import { calculateScrollBarWidth } from "@/utils/calculateScrollBarWidth";
import { classNames } from "@/utils/classNames";

interface SidebarRootProps {
  children: ReactNode;
}

const SidebarRoot = ({ children }: SidebarRootProps) => {
  const { isOpen, handleCloseSidebar } = useSidebarContext();
  const isMounted = useIsMounted();

  useEffect(() => {
    if (!isMounted) return;

    if (isOpen) {
      const scrollBarWidth = calculateScrollBarWidth();

      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.marginRight = "";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.marginRight = "";
    };
  }, [isOpen, isMounted]);

  return (
    <Fragment>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-[40]" onClick={handleCloseSidebar} />}

      <aside
        className={classNames(
          "fixed top-0 left-0 z-[50]",
          "min-h-[100dvh] h-full max-w-[400px] w-full",
          "p-4 border-r-2 border-muted-foreground bg-muted shadow-md",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "transition-transform duration-500 ease-in-out"
        )}
      >
        {children}
      </aside>
    </Fragment>
  );
};

export default SidebarRoot;
