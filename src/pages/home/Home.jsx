import React, { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import Banner from "./Banner";
import Chefs from "./Chefs_Section";
import Gallery from "../Gallery/Gallery";
// import Chooss from "./Choose"
import About_section from "./About_section";
import Clients from "./Clients.JSX";
import Top_food from "./Top_food";
import {Helmet} from "react-helmet"

const Home = () => {
  const { user } = useContext(authContext);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Banner />
      <Top_food />
      <About_section />
      <Gallery />
      <Chefs />
      {/* <Chooss /> */}
      <Clients />
    </div>
  );
};

export default Home;
