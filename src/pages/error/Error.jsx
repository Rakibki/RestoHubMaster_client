import React from "react";
import error from "../../assets/images/error.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full flex justify-center h-screen">
      <div>
        <h1 className="text-9xl text-center font-extrabold text-[#ffa41f]">
          404
        </h1>
        <h2 className="text-6xl text-center mt-2 font-bold text-[#374354]">
          Whoops!
        </h2>
        <p className="text-center text-[#374354] mt-3">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="flex justify-center mt-4">
          <Link to={"/"}>
            <button className="px-6 py-2 rounded-lg hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
