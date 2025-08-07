"use client";

import { ReactNode, useEffect } from "react";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useScrollLock } from "@/hooks/useScrollLock";
import { classNames } from "@/utils/classNames";
import { createPortal } from "react-dom";

import Button from "@/ui/Button";
import { MdClose } from "react-icons/md";
import Separator from "@/ui/Separator";

interface ModalRootProps {
  modalTitle: string;
  isModalOpen: boolean;
  handleCloseModal: () => void;
  containerClassName?: string;
  children: ReactNode;
}

const Modal = ({
  modalTitle,
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
            "sm:rounded-xl bg-muted overflow-hidden",
            containerClassName
          )}
        >
          <div className="flex items-center justify-between gap-8 p-4">
            <h3
              title={modalTitle}
              className={classNames(
                "w-full truncate",
                "text-2xl font-semibold text-foreground uppercase"
              )}
            >
              {modalTitle}
            </h3>

            <Button size="icon" variant="ghost" onClick={handleCloseModal}>
              <MdClose className="w-6 h-6" />
            </Button>
          </div>

          <Separator className="mt-0 mb-[1px]" />

          {/* CONTENT */}
          <div className="flex-1 p-4 overflow-y-auto overflow-x-hidden">{children}</div>
        </div>
      </div>
    ),
    document.body
  );
};

export default Modal;
