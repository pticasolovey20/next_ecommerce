import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

interface ProductSectionContainerProps {
  className?: string;
  children: ReactNode;
}

const ProductDetailSectionContainer = ({ className, children }: ProductSectionContainerProps) => {
  return (
    <div
      className={classNames(
        "w-full rounded-lg border-2 border-muted-foreground mt-4 p-4 bg-muted shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ProductDetailSectionContainer;
