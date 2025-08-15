import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

import QueryProvider from "@/components/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Header from "@/components/header/Header";
import AppSidebar from "@/components/AppSidebar";
import Footer from "@/components/footer/Footer";

import "@/app/styles/globals.scss";

interface ShopLayoutProps {
  children: ReactNode;
}

const ShopLayout = ({ children }: ShopLayoutProps) => {
  return (
    <QueryProvider>
      <ReactQueryDevtools initialIsOpen={false} />

      <Header />
      <AppSidebar />

      <main
        className={classNames(
          "min-h-[calc(100dvh-64px)] h-full",
          "max-w-screen-2xl w-full",
          "flex flex-col",
          "px-4 lg:px-8 xl:px-12 mx-auto"
        )}
      >
        {children}
      </main>

      <Footer />
    </QueryProvider>
  );
};

export default ShopLayout;
