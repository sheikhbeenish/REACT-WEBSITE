import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import FlashSale from "../components/FlashSale";
import Offer from "../components/Offer";
import Arrived from "../components/Arrived";

const Home = () => {
  return (
    <div>
      <Banner /><br /><br />
      <Category />
      <FlashSale />
      <Offer />
      <Arrived />
    </div>
  );
};

export default Home;
