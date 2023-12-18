import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.confic";
import { CiLogin } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
import NavItem from "../components/navItem/NavItem";
import { CgBoard } from "react-icons/cg";
import { MdHistory } from "react-icons/md";
import { AiFillSketchCircle } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";
import { MdPreview } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiShakingHands } from "react-icons/gi";
import { CiForkAndKnife } from "react-icons/ci";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import GetRole from "../hooks/GetRole";
import { useState } from "react";
import AdminMenu from "../pages/bashboard/adminDashboard/adminMenu/AdminMenu";
import UserMenu from "../pages/bashboard/userDashboard/userMenu/UserMenu";
import DeliveryManMenu from "../pages/bashboard/devliveryManDashboard/deliveryManMenu/deliveryManMenu";

const DashboardLayout = () => {
  const naviagte = useNavigate();
  const [role, setRole] = useState(null);

  const handleLogout = () => {
    signOut(auth).then(() => {
      naviagte("/");
    });
  };

  GetRole().then((res) => setRole(res?.role));

  return (
    <div className="grid max-w-[1250px] gap-2 w-full mx-auto grid-cols-11">
      <div className="col-span-2 h-screen w-full border-2 relative">
        <Link to={"/"}>
          <img className="p-3" src={logo} alt="" />
        </Link>
        <hr />

        <div className="p-3 flex flex-col">
          {role === "admin" && <AdminMenu />}
          {role === "user" && <UserMenu />}
          {role === "deliveryMan" && <DeliveryManMenu />}
        </div>

        <div className="absolute bottom-2">
          <Link
            to={`profile`}
            className="mb-2transition-all text-[#515d6e] font-Inter text-base"
          >
            <p>Profile</p>
          </Link>

          <Link
            onClick={handleLogout}
            to={`profile`}
            className="mb-3 transition-all flex gap-5 items-center text-[#515d6e] font-Inter text-base"
          >
            <p>Logout</p> <CiLogin className="text-2xl" />
          </Link>
        </div>
      </div>
      <div className="col-span-9 border-2">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
