import { Montserrat } from "next/font/google";
import type { Metadata } from "next";

import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import "@/app/styles/globals.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ecommerce App - Online Shopping",
  description: "Fast shipping and quality guaranteed",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={classNames(montserrat.variable, "min-h-[100dvh] h-full flex flex-col")}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
