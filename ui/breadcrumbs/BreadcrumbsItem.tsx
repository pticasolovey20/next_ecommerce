import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

import Link from "next/link";

interface BreadcrumbsItemProps {
  className?: string;
  asChild?: boolean;
  isActive?: boolean;
  href?: string;
  children: ReactNode;
}

const BreadcrumbsItem = ({
  className,
  asChild = false,
  isActive = false,
  href,
  children,
}: BreadcrumbsItemProps) => {
  const baseClassName =
    "relative font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 ease-in-out";

  if (asChild) {
    return <div className={classNames(baseClassName, className)}>{children}</div>;
  }

  if (isActive || !href) {
    return (
      <span className={classNames(baseClassName, "font-bold text-foreground", className)}>
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={classNames(baseClassName, "group", className)}>
      {children}

      <div
        className={classNames(
          "absolute bottom-0 left-0 h-[2px] w-full",
          "bg-foreground scale-x-0",
          "group-hover:scale-x-100",
          "transition-transform duration-200 origin-left"
        )}
      />
    </Link>
  );
};

export default BreadcrumbsItem;
