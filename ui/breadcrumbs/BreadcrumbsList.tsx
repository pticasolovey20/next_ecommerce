import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

interface BreadcrumbsListProps {
  className?: string;
  children: ReactNode;
}

const BreadcrumbsList = ({ className, children }: BreadcrumbsListProps) => (
  <ul className={classNames("flex items-center gap-2 ", className)}>{children}</ul>
);

export default BreadcrumbsList;
