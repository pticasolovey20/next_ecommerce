import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

interface ProductSectionContainerProps {
  className?: string;
  children: ReactNode;
}

const ProductSectionContainer = ({ className, children }: ProductSectionContainerProps) => {
  return (
    <div
      className={classNames(
        "w-full h-[300px]",
        "flex items-center justify-center",
        "rounded-lg border-2 border-muted-foreground",
        "mt-4 bg-muted shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ProductSectionContainer;
