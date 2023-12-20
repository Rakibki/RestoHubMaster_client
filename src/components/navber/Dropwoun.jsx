import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import GetRole from "../../hooks/GetRole";

const Dropwoun = ({ handleLogOut }) => {
  const [role, setRole] = useState(null);

  GetRole().then((res) => setRole(res?.role));

  return (
    <>
      <ul
        tabIndex={0}
        className="dropdown-content mt-4 z-[1] menu bg-black bg-opacity-60 p-6 shadow rounded-box w-40"
      >
        {role === "admin" && (
          <Link
            to={"/dashboard/adminHome"}
            className="mb-3 hover:text-white flex gap-2 items-center hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
          >
            <MdDashboard className="text-lg" /> <p>Dashboard</p>
          </Link>
        )}

        {role === "user" && (
          <Link
            to={"/dashboard/userHome"}
            className="mb-3 hover:text-white flex gap-2 items-center hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
          >
            <MdDashboard className="text-lg" /> <p>Dashboard</p>
          </Link>
        )}

        {role === "deliveryMan" && (
          <Link
            to={"/dashboard/deviverManHome"}
            className="mb-3 hover:text-white flex gap-2 items-center hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
          >
            <MdDashboard className="text-lg" /> <p>Dashboard</p>
          </Link>
        )}

        <Link
          to={"/dashboard/profile"}
          className="mb-3 hover:text-white flex gap-2 items-center hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
        >
          <FaRegUser className="text-lg" /> <p>Profile</p>
        </Link>

        <button
          onClick={handleLogOut}
          className="px-6 py-2 rounded-lg hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white"
        >
          Log out
        </button>
      </ul>
    </>
  );
};

export default Dropwoun;
