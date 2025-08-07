"use client";

import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

import { MdClose } from "react-icons/md";
import Button from "@/ui/Button";
import Separator from "@/ui/Separator";

interface ModalContainerProps {
  onClose: () => void;
  containerClassName?: string;
  modalTitle: string;
  children: ReactNode;
}

const ModalContainer = ({
  onClose,
  containerClassName,
  modalTitle,
  children,
}: ModalContainerProps) => {
  return (
    <div
      className={classNames(
        "relative flex flex-col w-full flex-1",
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

        <Button size="icon" variant="ghost" onClick={onClose}>
          <MdClose className="w-6 h-6" />
        </Button>
      </div>

      <Separator className="mt-0 mb-[1px]" />

      {/* CONTENT */}
      <div className="flex-1 p-4 overflow-y-auto overflow-x-hidden">{children}</div>
    </div>
  );
};

export default ModalContainer;
