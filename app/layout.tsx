import { Montserrat } from "next/font/google";
import type { Metadata } from "next";

import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

import { SidebarProvider } from "@/ui/sidebar";
import Header from "@/components/header/Header";
import AppSidebar from "@/components/AppSidebar";
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
        <SidebarProvider>
          <Header />
          <AppSidebar />

          <main
            className={classNames(
              "flex-1 max-w-screen-2xl w-full",
              "px-4 md:px-8 xl:px-12 mx-auto"
            )}
          >
            {children}
          </main>

          <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
};

export default RootLayout;
