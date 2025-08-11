import { useEffect } from "react";
import { calculateScrollBarWidth } from "@/utils/calculateScrollBarWidth";

export const useScrollLock = (isOpen: boolean, isMounted: boolean) => {
  useEffect(() => {
    if (!isMounted) return;

    if (isOpen) {
      const scrollBarWidth = calculateScrollBarWidth();

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;

      const header = document.getElementById("header-layout");
      if (header) header.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "";

      const header = document.getElementById("header-layout");
      if (header) header.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "";

      const header = document.getElementById("header-layout");
      if (header) header.style.paddingRight = "";
    };
  }, [isOpen, isMounted]);
};
