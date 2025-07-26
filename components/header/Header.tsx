"use client";

import { useSidebarContext } from "@/ui/sidebar/context";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useEffect, useState } from "react";
import { calculateScrollBarWidth } from "@/utils/calculateScrollBarWidth";
import { classNames } from "@/utils/classNames";

import { MdMenu } from "react-icons/md";
import IconButton from "@/ui/IconButton";

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
      <div className="w-full fixed top-0 left-0 bg-background shadow-sm z-[30]">
        <div
          className={classNames(
            "max-w-screen-2xl w-full h-16",
            "flex items-center",
            "px-4 md:px-8 xl:px-12 mx-auto"
          )}
        >
          <div style={{ marginLeft: isOpen ? `-${scrollBarWidth / 2 + 4}px` : "-4px" }}>
            <IconButton
              onClick={handleOpenSidebar}
              className={classNames("w-9 h-9 hover:bg-muted z-[50]")}
            >
              <MdMenu className="w-full h-full" />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
