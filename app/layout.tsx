import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

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
    <html lang="en" suppressHydrationWarning>
      <body className={classNames(montserrat.variable, "antialiased")}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
