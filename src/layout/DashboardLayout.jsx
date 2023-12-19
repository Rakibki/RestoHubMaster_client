import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.confic";
import { CiLogin } from "react-icons/ci";
import GetRole from "../hooks/GetRole";
import { useState } from "react";
import AdminMenu from "../pages/bashboard/adminDashboard/adminMenu/AdminMenu";
import UserMenu from "../pages/bashboard/userDashboard/userMenu/UserMenu";
import DeliveryManMenu from "../pages/bashboard/devliveryManDashboard/deliveryManMenu/deliveryManMenu";
import { FaRegUser } from "react-icons/fa";


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

        <div className="absolute p-3 bottom-2">
          <Link
            to={`profile`}
            className="mb-2transition-all font-semibold mb-3 flex gap-2 items-center text-[#515d6e] font-Inter text-base"
          >
            <FaRegUser className="text-xl" /> <p>Profile</p>
          </Link>

          <Link
            onClick={handleLogout}
            to={`profile`}
            className="mb-3 transition-all font-semibold flex text-[#b91c1c] gap-2 items-center font-Inter text-base"
          >
            <CiLogin className="text-2xl" /> <p>Logout</p>
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
