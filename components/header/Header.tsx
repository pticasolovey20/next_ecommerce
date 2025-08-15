"use client";

import { useState } from "react";
import { useAppSidebarStore } from "@/stores/useAppSidebarStore";
import { useCartStore } from "@/stores/useCartStore";
import { useCartData } from "@/hooks/cart/useCartData";
import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";
import { MdFavorite, MdMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiShoppingCart } from "react-icons/hi";
import SearchProductWrapper from "@/components/search-product/SearchProductWrapper";
import CartModal from "@/components/cart/CartModal";
import AuthModal from "@/components/auth/AuthModal";

const Header = () => {
  const { openSidebar } = useAppSidebarStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const handleOpenAuthModal = () => setIsAuthModalOpen(true);
  const handleCloseAuthModal = () => setIsAuthModalOpen(false);

  const { totalItemsCount } = useCartData();
  const openCart = useCartStore((state) => state.openCart);

  return (
    <header className="w-full h-16">
      <div
        id="header-layout"
        className={classNames(
          "w-full fixed top-0 left-0",
          "border-b border-gray-200/50",
          "bg-white shadow-sm z-[30]"
        )}
      >
        <div className="max-w-screen-2xl w-full h-16 px-4 lg:px-8 xl:px-12 mx-auto">
          <div className="relative h-full flex items-center gap-4">
            <Button
              size="icon"
              variant="ghost"
              aria-label="Open sidebar"
              onClick={openSidebar}
              className="w-10 h-10 shrink-0"
            >
              <MdMenu className="w-full h-full" />
            </Button>

            <SearchProductWrapper />

            <Button
              size="icon"
              variant="ghost"
              aria-label="Open profile"
              onClick={handleOpenAuthModal}
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

            <div className="relative hidden sm:block hover-lift">
              {!!totalItemsCount && (
                <div
                  className={classNames(
                    "absolute -top-1 -right-1 w-5 h-5",
                    "flex items-center justify-center",
                    "p-1 rounded-full border border-green-500",
                    "bg-green-300 z-[20]"
                  )}
                >
                  <span className="font-semibold">{totalItemsCount}</span>
                </div>
              )}

              <Button
                size="icon"
                variant="ghost"
                aria-label="Open cart"
                onClick={openCart}
                className="w-10 h-10 shrink-0"
              >
                <HiShoppingCart className="w-full h-full" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AuthModal isModalOpen={isAuthModalOpen} handleCloseModal={handleCloseAuthModal} />
      <CartModal />
    </header>
  );
};

export default Header;
