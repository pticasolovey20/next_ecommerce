import { Fragment } from "react";
import Banner from "@/components/Banner";
import ProductList from "@/components/product/ProductList";
import Subscription from "@/components/Subscription";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <ProductList />
      <Subscription />
    </Fragment>
  );
};

export default Home;
