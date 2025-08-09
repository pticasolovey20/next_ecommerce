"use client";

import { ReactNode, useEffect } from "react";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useScrollLock } from "@/hooks/useScrollLock";
import { createPortal } from "react-dom";
import { classNames } from "@/utils/classNames";

interface ModalRootProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  maxWidth?: string;
  className?: string;
  children: ReactNode;
}

const ModalRoot = ({
  isModalOpen,
  handleCloseModal,
  maxWidth,
  className,
  children,
}: ModalRootProps) => {
  const isMounted = useIsMounted();

  useScrollLock(isModalOpen, isMounted);

  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        handleCloseModal();
      }
    };

    if (isModalOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, handleCloseModal, isMounted]);

  if (!isMounted || !isModalOpen) return null;

  return createPortal(
    <div
      onClick={handleCloseModal}
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
