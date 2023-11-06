import React, { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import Banner from "./Banner";
import Chefs from "./Chefs_Section";
import Gallery from "../Gallery/Gallery";
import Chooss from "./Choose"
import About_section from "./About_section";
import Clients from "./Clients.JSX";
import Top_food from "./Top_food"

const Home = () => {
  const { user } = useContext(authContext);

  return (
    <div>
      <Banner />
      <Top_food />
      <About_section />
      <Chefs />
      <Chooss />
      <Gallery />
      <Clients/>
    </div>
  );
};

export default Home;
