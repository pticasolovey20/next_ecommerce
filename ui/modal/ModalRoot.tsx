"use client";

import { ReactNode, useEffect } from "react";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useScrollLock } from "@/hooks/useScrollLock";
import { classNames } from "@/utils/classNames";
import { createPortal } from "react-dom";

interface ModalRootProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  containerClassName?: string;
  children: ReactNode;
}

const ModalRoot = ({
  isModalOpen,
  handleCloseModal,
  containerClassName,
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

  if (!isMounted) return null;

  return createPortal(
    isModalOpen && (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/30 z-[50]"
        onClick={handleCloseModal}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className={classNames(
            "relative flex flex-col",
            "h-full sm:max-h-[calc(100dvh-100px)] sm:h-auto",
            "sm:rounded-xl bg-muted shadow-lg overflow-hidden",
            containerClassName
          )}
        >
          {children}
        </div>
      </div>
    ),
    document.body
  );
};

export default ModalRoot;
