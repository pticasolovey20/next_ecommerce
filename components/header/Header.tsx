"use client";

import { useSidebarContext } from "@/ui/sidebar/context";
import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";
import { MdFavorite, MdMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiShoppingCart } from "react-icons/hi";
import SearchProductWrapper from "@/components/search-product/SearchProductWrapper";

const Header = () => {
  const { isOpen, handleOpenSidebar } = useSidebarContext();

  return (
    <header className="w-full h-16">
      <div
        className={classNames(
          "w-full fixed top-0 left-0",
          "border-b border-gray-200/50",
          "bg-white shadow-sm z-[30]"
        )}
      >
        <div className="max-w-screen-2xl w-full h-16 px-4 md:px-8 xl:px-12 mx-auto">
          <div id="header-layout" className="relative h-full flex items-center gap-4">
            {!isOpen && (
              <Button
                size="icon"
                variant="ghost"
                aria-label="Open sidebar"
                onClick={handleOpenSidebar}
                className="w-10 h-10 shrink-0"
              >
                <MdMenu className="w-full h-full" />
              </Button>
            )}

            <SearchProductWrapper />

            <Button
              size="icon"
              variant="ghost"
              aria-label="Open profile"
              className="w-10 h-10 hover-lift hidden sm:inline-flex shrink-0"
            >
              <CgProfile className="w-full h-full" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              aria-label="Open cart"
              className="w-10 h-10 hover-lift hidden sm:inline-flex shrink-0"
            >
              <MdFavorite className="w-full h-full" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              aria-label="Open cart"
              className="w-10 h-10 hover-lift hidden sm:inline-flex shrink-0"
            >
              <HiShoppingCart className="w-full h-full" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
