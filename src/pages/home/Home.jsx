import React, { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import Banner from "./Banner";
import Chefs from "./Chefs_Section";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  const { user } = useContext(authContext);

  return (
    <div>
      <Banner />
      <Chefs />

      <Gallery />
    </div>
  );
};

export default Home;
