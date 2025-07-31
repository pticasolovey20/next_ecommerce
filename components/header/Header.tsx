"use client";

import { useSidebarContext } from "@/ui/sidebar/context";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useEffect, useState } from "react";
import { calculateScrollBarWidth } from "@/utils/calculateScrollBarWidth";
import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const { isOpen, handleOpenSidebar } = useSidebarContext();
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (!isMounted) return;

    const scrollBarWidth = calculateScrollBarWidth();
    setScrollBarWidth(scrollBarWidth);
  }, [isMounted]);

  return (
    <header className="w-full h-16">
      <div
        className={classNames(
          "w-full fixed top-0 left-0",
          "border-b border-gray-200/50",
          "bg-white shadow-sm z-[30]"
        )}
      >
        <div
          className={classNames(
            "max-w-screen-2xl w-full h-16",
            "flex items-center",
            "px-4 md:px-8 xl:px-12 mx-auto"
          )}
        >
          <div style={{ marginLeft: isOpen ? `-${scrollBarWidth / 2 + 3}px` : "-3px" }}>
            <Button
              size="icon"
              variant="ghost"
              aria-label="Open sidebar"
              onClick={handleOpenSidebar}
              className="w-9 h-9"
            >
              <MdMenu className="w-full h-full" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
