import {React,useContext} from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/contextProvider";

const About = () => {
  const data = {
    name: "SeeThru",
  };
  // console.log(useProductContext());

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;