import { Link, NavLink } from "react-router-dom";
import Container from "../../shared/Container/Container";
import logo from "../../assets/images/logo.png";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";

const Navber = ({ children }) => {
  const { user, logOut } = useContext(authContext);

  const navitems = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-[#ffa41f] border-b-2 border-[#ffa41f] font-semibold"
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
              ? "text-[#ffa41f] border-b-2 border-[#ffa41f] font-semibold"
              : ""
          }
        >
          All Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blog"}
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-[#ffa41f] border-b-2 border-[#ffa41f] font-semibold"
              : ""
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log("Logi n out");
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full flex justify-between px-10 py-2 navbar bg-black bg-opacity-60 fixed z-20 text-white">
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
                <div className="flex gap-5 text-base font-medium">
                  {navitems}
                </div>
              </ul>
            </div>
            {user ? (
              <div>
                <h2 className="mr-4">{user?.displayName}</h2>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label tabIndex={0} className="">
                    <img
                      className="w-[45px] border-2 border-[#ffa41f] cursor-pointer h-[45px] rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu bg-black bg-opacity-60 p-6 shadow rounded-box w-72"
                  >
                    {/* container */}
                    <Link
                      to={"/add_food"}
                      className=" mb-3 hover:text-white hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
                    >
                      <p>Add Food Item</p>
                    </Link>

                    <Link
                      to={"/my_added_food"}
                      className=" mb-3 hover:text-white hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
                    >
                      <p>My Added Food</p>
                    </Link>

                    <Link
                      to={"my_oder_food"}
                      className=" mb-3 hover:text-white hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
                    >
                      <p>My Oder Food</p>
                    </Link>
                    <button
                      onClick={handleLogOut}
                      className="px-6 py-2 rounded-lg hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white"
                    >
                      Log out
                    </button>
                  </ul>
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
