import React from "react";
import FeatureProduct from "./components/FeatureProduct";
import HeaderSection from "./components/HeaderSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
const Home = () => {
  const data = {
    name: "swapnil store",
  };
  return (
    <>
      <HeaderSection data={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
