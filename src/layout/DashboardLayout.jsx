import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.confic";

const DashboardLayout = () => {
  const naviagte = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      naviagte("/");
    });
  };

  return (
    <div className="grid max-w-[1250px] gap-2 w-full mx-auto grid-cols-12">
      <div className="col-span-2 w-full border-2 relative h-screen">
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
            to={"all-Oders"}
            className="mb-3  transition-all text-[#ffa41f]  "
          >
            <p>ALl Oders</p>
          </Link>

          <Link
            to={"MyBookTable"}
            className=" mb-3  transition-all text-[#ffa41f]  "
          >
            <p>My Table Book History</p>
          </Link>

          <Link
            to={"wishlist"}
            className=" mb-3  transition-all text-[#ffa41f]  "
          >
            <p>Wishlist</p>
          </Link>

          <Link
            to={"paymentHistory"}
            className=" mb-3  transition-all text-[#ffa41f]  "
          >
            <p>Payment History</p>
          </Link>

          <Link
            to={"userHome"}
            className=" mb-3  transition-all text-[#ffa41f]  "
          >
            <p>User Home</p>
          </Link>

          <Link
            to={"adminHome"}
            className=" mb-3  transition-all text-[#ffa41f]  "
          >
            <p>Admin Home</p>
          </Link>

          <Link
            to={"allTablebook"}
            className=" mb-3  transition-all text-[#ffa41f]  "
          >
            <p>Manage Table</p>
          </Link>

          <Link
            to={"myReview"}
            className=" mb-3  transition-all text-[#ffa41f]  "
          >
            <p>my review</p>
          </Link>

          <Link
            to={"deviverManHome"}
            className=" mb-3  transition-all text-[#ffa41f]  "
          >
            <p>Devivery Man Home</p>
          </Link>
          <Link
            to={"myDeliveryList"}
            className=" mb-3  transition-all text-[#ffa41f]  "
          >
            <p>My Delivery List</p>
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

        <div className="absolute bottom-2">
          <Link to={`profile`} className="mb-3 transition-all text-[#ffa41f]  ">
            <p>Profile</p>
          </Link>

          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-lg hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white"
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="col-span-10 border-2">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
