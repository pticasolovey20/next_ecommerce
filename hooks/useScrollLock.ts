import { useEffect } from "react";
import { calculateScrollBarWidth } from "@/utils/calculateScrollBarWidth";

export const useScrollLock = (isOpen: boolean, isMounted: boolean) => {
  useEffect(() => {
    if (!isMounted) return;

    if (isOpen) {
      const scrollBarWidth = calculateScrollBarWidth();

      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scrollBarWidth}px`;

      const header = document.getElementById("header-layout");
      if (header) header.style.marginRight = `${scrollBarWidth / 2}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.marginRight = "";

      const header = document.getElementById("header-layout");
      if (header) header.style.marginRight = "";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.marginRight = "";

      const header = document.getElementById("header-layout");
      if (header) header.style.marginRight = "";
    };
  }, [isOpen, isMounted]);
};
