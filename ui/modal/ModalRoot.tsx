"use client";

import { ReactNode, useEffect } from "react";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useScrollLock } from "@/hooks/useScrollLock";
import { createPortal } from "react-dom";
import { classNames } from "@/utils/classNames";

interface ModalRootProps {
  isOpen: boolean;
  onClose: () => void;
  maxWidth?: string;
  className?: string;
  children: ReactNode;
}

const ModalRoot = ({ isOpen, onClose, maxWidth, className, children }: ModalRootProps) => {
  const isMounted = useIsMounted();

  useScrollLock(isOpen, isMounted);

  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, isMounted]);

  if (!isMounted || !isOpen) return null;

  return createPortal(
    <div
      onClick={onClose}
      className={classNames(
        "fixed inset-0",
        "flex items-center justify-center",
        "sm:p-4 bg-black/30 z-[50]"
      )}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={classNames(
          "w-full max-w-full",
          maxWidth || "sm:max-w-fit lg:max-w-[90vw]",
          "h-full sm:h-auto sm:max-h-[calc(100vh-2rem)]",
          "flex flex-col mx-auto sm:rounded-lg",
          "shadow-lg bg-muted overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalRoot;
