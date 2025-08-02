import { Fragment } from "react";
import Banner from "@/components/Banner";
import ProductList from "@/components/product/ProductList";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <ProductList />
    </Fragment>
  );
};

export default Home;
