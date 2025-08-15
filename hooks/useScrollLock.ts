import { useEffect } from "react";
import { calculateScrollBarWidth } from "@/utils/calculateScrollBarWidth";

export const useScrollLock = (isOpen: boolean, isMounted: boolean, targetElement: HTMLElement) => {
  useEffect(() => {
    if (!isMounted || !targetElement) return;

    if (isOpen) {
      const scrollBarWidth = calculateScrollBarWidth();

      targetElement.style.overflow = "hidden";
      targetElement.style.paddingRight = `${scrollBarWidth}px`;

      const header = document.getElementById("header-layout");
      if (header) header.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      targetElement.style.overflow = "unset";
      targetElement.style.paddingRight = "";

      const header = document.getElementById("header-layout");
      if (header) header.style.paddingRight = "";
    }

    return () => {
      targetElement.style.overflow = "unset";
      targetElement.style.paddingRight = "";

      const header = document.getElementById("header-layout");
      if (header) header.style.paddingRight = "";
    };
  }, [isOpen, isMounted, targetElement]);
};
