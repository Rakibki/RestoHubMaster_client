import { Link, NavLink } from "react-router-dom";
import Container from "../../shared/Container/Container";
import logo from "../../assets/images/logo.png";
import { useContext, useState } from "react";
import { authContext } from "../../providers/AuthProvaider";
import Dropwoun from "./Dropwoun";
import { FiShoppingCart } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import MyCard from "./MyCard";

import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../shared/Loadiing";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import GetRole from "../../hooks/GetRole";

const Navber = ({ children }) => {
  const { user, logOut } = useContext(authContext);
  const [openCard, setOpenCard] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [role, setRole] = useState(null);

  GetRole().then((res) => setRole(res?.role));

  const navitems = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-[#ffa41f]  border-[#ffa41f] text-lg "
              : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allFood"}
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-[#ffa41f]  border-[#ffa41f] text-lg font-Inter"
              : ""
          }
        >
          Our Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/menu"}
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-[#ffa41f]  border-[#ffa41f] text-lg font-Inter"
              : ""
          }
        >
          Our Nemu
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blog"}
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-[#ffa41f]  border-[#ffa41f] text-lg font-Inter"
              : ""
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut();
  };

  const { data: myCardLength, refetch } = useQuery({
    queryKey: ["myCardLength"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myCardLength/${user?.email}`);
      return res?.data?.result;
    },
  });

  return (
    <Container>
      <div className="drawer max-w-[1250px] mx-auto overflow-hidden">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full flex max-w-[1250px] justify-between px-10 py-2 navbar bg-black bg-opacity-60 fixed z-20 text-white">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="px-2 mx-2">
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="flex mr-10 items-center gap-4">
                {/* Navbar menu content here */}
                <div className="flex gap-5 text-lg">{navitems}</div>
              </ul>
            </div>
            {user ? (
              <div>
                <div>
                  {/* card */}
                  <div>
                    <div
                      onClick={() => setOpenCard(!openCard)}
                      className="relative mr-6 cursor-pointer"
                    >
                      <FiShoppingCart className="text-2xl" />
                      <div className="badge bg-[#ffa41f] border-[#ffa41f] text-white font-semibold absolute -top-3 left-3 badge-secondary">
                        {myCardLength}
                      </div>
                    </div>
                    {/* toogle */}
                    <div
                      className={`z-[1] menu bg-black bg-opacity-60 shadow rounded-box absolute duration-500 transition-all w-[380px] right-4 px-6 py-10 top-20 ${
                        openCard ? "mr-0" : "-mr-[1000px]"
                      }`}
                    >
                      <div className="flex mb-2 items-center justify-between">
                        <h1 className="text-xl">Shoping Cart</h1>
                        <h1>
                          <IoCloseOutline
                            onClick={() => setOpenCard(false)}
                            className="text-3xl cursor-pointer "
                          />
                        </h1>
                      </div>
                      <hr />

                      {/* body */}
                      <MyCard setOpenCard={setOpenCard} />
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label tabIndex={0} className="">
                    <div className="relative">
                      <img
                        className="w-[45px] border-2 border-[#ffa41f] cursor-pointer h-[45px] rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                  </label>
                  <Dropwoun handleLogOut={handleLogOut} />
                </div>
                <div className="flex ml-4 flex-col">
                  <h2 className="">{user?.displayName}</h2>
                  <h2 className="text-[#838fa2] text-sm">{role}</h2>
                </div>
              </div>
            ) : (
              <Link className="ml-10" to={"/login"}>
                <button className="px-6 py-2 rounded-lg hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white">
                  Log In
                </button>
              </Link>
            )}
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="flex flex-col bg-[#374354] text-white relative gap-2 p-10 w-80 min-h-full">
            {/* Sidebar content here */}
            {navitems}
            <img className="absolute bottom-10" src={logo} alt="" />
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Navber;
