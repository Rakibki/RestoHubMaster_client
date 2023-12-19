import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Dropwoun = ({ handleLogOut }) => {
  return (
    <>
      <ul
        tabIndex={0}
        className="dropdown-content mt-4 z-[1] menu bg-black bg-opacity-60 p-6 shadow rounded-box w-40"
      >
        <Link
          to={"/dashboard"}
          className="mb-3 hover:text-white flex gap-2 items-center hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
        >
          <MdDashboard className="text-lg" /> <p>Dashboard</p>
        </Link>

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
