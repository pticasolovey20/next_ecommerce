"use client";

import { ReactNode, createContext, useContext } from "react";

interface BreadcrumbsContextState {
  separator?: ReactNode | null;
  className?: string;
}

const BreadcrumbsContext = createContext<BreadcrumbsContextState | null>(null);

export const useBreadcrumbsContext = () => {
  const context = useContext(BreadcrumbsContext);

  if (!context) {
    throw new Error("Breadcrumbs components must be used within a Breadcrumbs provider");
  }

  return context;
};

export default BreadcrumbsContext;
