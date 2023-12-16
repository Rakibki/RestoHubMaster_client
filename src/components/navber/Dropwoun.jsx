import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import GetRole from "../../hooks/GetRole";

const Dropwoun = ({ handleLogOut }) => {
  return (
    <>
      <ul
        tabIndex={0}
        className="dropdown-content mt-4 z-[1] menu bg-black bg-opacity-60 p-6 shadow rounded-box w-40"
      >
        <Link
          to={"/dashboard"}
          className="mb-3 hover:text-white hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
        >
          <p>Dashboard</p>
        </Link>

        {/* container */}
        {/* <Link
          to={"/add_food"}
          className=" mb-3 hover:text-white hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
        >
          <p>Add Food Item</p>
        </Link> */}

        {/* <Link
          to={"/MyBookTable"}
          className=" mb-3 hover:text-white hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
        >
          <p>My Table Book History</p>
        </Link> */}
        
        {/* 
        <Link
          to={"/myCard"}
          className=" mb-3 hover:text-white hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
        >
          <p>View Card</p>
        </Link> */}

        {/* <Link
          to={"/subscribers "}
          className=" mb-3 hover:text-white hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
        >
          <p>Subscribers</p>
        </Link> */}

        {/* <Link
          to={"/my_added_food"}
          className=" mb-3 hover:text-white hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
        >
          <p>My Added Food</p>
        </Link> */}

        {/* <Link
          to={"my_oder_food"}
          className=" mb-3 hover:text-white hover:bg-[#374354] transition-all text-[#ffa41f] border-[1px] p-2 "
        >
          <p>My Oder Food</p>
        </Link> */}

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
