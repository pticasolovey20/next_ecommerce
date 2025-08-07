"use client";

import { ReactNode, useEffect } from "react";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useScrollLock } from "@/hooks/useScrollLock";
import { classNames } from "@/utils/classNames";
import { createPortal } from "react-dom";

import ModalContainer from "@/ui/modal/ModalContainer";

interface ModalRootProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  modalTitle: string;
  children: ReactNode;
}

const Modal = ({ isModalOpen, handleCloseModal, modalTitle, children }: ModalRootProps) => {
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
        onClick={handleCloseModal}
        className="fixed inset-0 flex items-center justify-center bg-black/30 z-[50]"
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className={classNames(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "w-full sm:max-w-[600px] md:max-w-[750px] lg:max-w-[900px]",
            "h-full sm:max-h-[calc(100dvh-50px)] sm:h-auto",
            "flex sm:px-4 md:px-8 overflow-hidden"
          )}
        >
          <ModalContainer modalTitle={modalTitle} onClose={handleCloseModal}>
            {children}
          </ModalContainer>
        </div>
      </div>
    ),
    document.body
  );
};

export default Modal;
