"use client";

import { ReactNode, Fragment } from "react";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useScrollLock } from "@/hooks/useScrollLock";

import { classNames } from "@/utils/classNames";

interface SidebarRootProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
}

const SidebarRoot = ({ isOpen, onClose, children }: SidebarRootProps) => {
  const isMounted = useIsMounted();

  useScrollLock(isOpen, isMounted);

  return (
    <Fragment>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-[40]" onClick={onClose} />}

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
        {children}
      </aside>
    </Fragment>
  );
};

export default SidebarRoot;
