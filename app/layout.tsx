import { Montserrat } from "next/font/google";
import { generateMetadata } from "@/lib/generateMetadata";
import type { Metadata } from "next";

import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

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
      </body>
    </html>
  );
};

export default RootLayout;
