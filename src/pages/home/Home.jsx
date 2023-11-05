import React, { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import Banner from "./Banner";
import Chefs from "./Chefs_Section";
import Gallery from "../Gallery/Gallery";
import Chooss from "./Choose"
import About_section from "./About_section";

const Home = () => {
  const { user } = useContext(authContext);

  return (
    <div>
      <Banner />
      <Chefs />
      <Gallery />
      <Chooss />
      <About_section />
    </div>
  );
};

export default Home;
