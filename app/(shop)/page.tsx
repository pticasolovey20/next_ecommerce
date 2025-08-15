import { Fragment } from "react";
import Banner from "@/components/Banner";
import ProductList from "@/components/product/ProductList";

const ShopPage = () => {
  return (
    <Fragment>
      <Banner className="my-4" />
      <ProductList />
    </Fragment>
  );
};

export default ShopPage;
