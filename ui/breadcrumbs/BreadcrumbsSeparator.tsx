import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";
import { useBreadcrumbsContext } from "@/ui/breadcrumbs/context";

interface BreadcrumbsSeparatorProps {
  className?: string;
  children?: ReactNode;
}

const BreadcrumbsSeparator = ({ className }: BreadcrumbsSeparatorProps) => {
  const { separator } = useBreadcrumbsContext();

  return <span className={classNames(className)}>{separator}</span>;
};

export default BreadcrumbsSeparator;
