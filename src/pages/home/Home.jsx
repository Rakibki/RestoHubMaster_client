import Banner from "./Banner";
import Chefs from "./Chefs_Section";
import Gallery from "../Gallery/Gallery";
import About_section from "./About_section";
import Clients from "./Clients.JSX";
import Top_food from "./Top_food";
import {Helmet} from "react-helmet"
import Reservation from "./Reservation";



const Home = () => {
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
      <Reservation />
    </div>
  );
};

export default Home;
