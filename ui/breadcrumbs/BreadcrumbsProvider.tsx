import { ReactNode } from "react";
import BreadcrumbsContext from "@/ui/breadcrumbs/context";

interface BreadcrumbsProviderProps {
  separator?: ReactNode;
  children: ReactNode;
}

const BreadcrumbsProvider = ({ separator, children }: BreadcrumbsProviderProps) => {
  const defaultSeparator = <span>/</span>;

  return (
    <BreadcrumbsContext.Provider
      value={{ separator: separator || defaultSeparator, className: "" }}
    >
      {children}
    </BreadcrumbsContext.Provider>
  );
};

export default BreadcrumbsProvider;
