import { Fragment } from "react";
import Banner from "@/components/Banner";
import ProductList from "@/components/product/ProductList";

const Home = () => {
  return (
    <Fragment>
      <Banner className="my-4" />
      <ProductList />
    </Fragment>
  );
};

export default Home;
