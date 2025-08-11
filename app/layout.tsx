import { Montserrat } from "next/font/google";
import { generateMetadata } from "@/lib/generateMetadata";
import type { Metadata } from "next";

import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

import QueryProvider from "@/components/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Header from "@/components/header/Header";
import AppSidebar from "@/components/AppSidebar";
import Footer from "@/components/footer/Footer";

import "@/app/styles/globals.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = generateMetadata();

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={classNames(
          montserrat.variable,
          "min-h-[100dvh] h-full flex flex-col",
          "bg-gradient-to-br from-gray-50 to-gray-100"
        )}
      >
        <QueryProvider>
          <ReactQueryDevtools initialIsOpen={false} />

          <Header />
          <AppSidebar />

          <main
            className={classNames(
              "min-h-[calc(100dvh-64px)] h-full",
              "max-w-screen-2xl w-full",
              "flex flex-col",
              "px-4 md:px-8 xl:px-12 mx-auto"
            )}
          >
            {children}
          </main>

          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
