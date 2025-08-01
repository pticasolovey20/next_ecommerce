import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

import { BreadcrumbsProvider } from "@/ui/breadcrumbs/index";

interface BreadcrumbsProps {
  separator?: ReactNode;
  className?: string;
  children?: ReactNode;
}

const BreadcrumbsRoot = ({ separator, className, children }: BreadcrumbsProps) => {
  return (
    <BreadcrumbsProvider separator={separator}>
      <nav className={classNames("flex items-center gap-2 my-4", className)}>{children}</nav>
    </BreadcrumbsProvider>
  );
};

export default BreadcrumbsRoot;
