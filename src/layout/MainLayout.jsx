import React from "react";
import Navber from "../components/navber/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navber>
        <Outlet />
      </Navber>
      <Footer />
    </div>
  );
};

export default MainLayout;
