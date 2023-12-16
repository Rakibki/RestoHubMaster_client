import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";

const DashboardLayout = () => {
  return (
    <div className="grid max-w-[1250px] gap-2 w-full mx-auto grid-cols-12">
      <div className="col-span-2 w-full border-2 h-screen">
        <img className="p-3" src={logo} alt="" />
        <hr />

        <div className="p-3">
          <Link
            to={"add_food"}
            className="mb-3  transition-all text-[#ffa41f]  "
          >
            <p>Add Food Item</p>
          </Link>

          <Link
            to={"MyBookTable"}
            className=" mb-3  transition-all text-[#ffa41f]  "
          >
            <p>My Table Book History</p>
          </Link>

          <Link
            to={"myCard"}
            className=" mb-3  transition-all text-[#ffa41f]  "
          >
            <p>View Card</p>
          </Link>

          <Link
            to={"subscribers "}
            className=" mb-3  transition-all text-[#ffa41f]  "
          >
            <p>Subscribers</p>
          </Link>

          <Link
            to={"my_added_food"}
            className=" mb-3  transition-all text-[#ffa41f]  "
          >
            <p>My Added Food</p>
          </Link>

          <Link
            to={"my_oder_food"}
            className=" mb-3 transition-all text-[#ffa41f]  "
          >
            <p>My Oder Food</p>
          </Link>
          <Link
            to={"all_foods"}
            className=" mb-3 transition-all text-[#ffa41f]  "
          >
            <p>Foods</p>
          </Link>
          <Link
            to={"customers"}
            className=" mb-3 transition-all text-[#ffa41f]  "
          >
            <p>Customers</p>
          </Link>
        </div>
      </div>
      <div className="col-span-10 border-2">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
