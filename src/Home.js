import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/services";
import Trusted from "./components/trusted";
import FeatureProducts from "./components/featureProducts";

const Home = () => {
  const data = {
    name: "SeeThru Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
