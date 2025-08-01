import { ReactNode, Fragment } from "react";

import ProductsBreadcrumbs from "@/components/product/ProductsBreadcrumbs";

interface ProductsLayoutProps {
  children: ReactNode;
}

const ProductsLayout = ({ children }: ProductsLayoutProps) => {
  return (
    <Fragment>
      <ProductsBreadcrumbs />
      {children}
    </Fragment>
  );
};

export default ProductsLayout;
