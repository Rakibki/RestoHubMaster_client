import React, { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";

const Add_food = () => {
  const { user } = useContext(authContext);

  return (
    <div className="flex my-10 p-6 justify-center">
      <div className="w-[60%] p-4 border-2">
        <div className="flex gap-3">
          <input
            placeholder="Name"
            defaultValue={user?.displayName}
            disabled
            type="text"
            className="border-[1px] p-3 w-full outline-[#ffa41f]"
          />
          <input
            placeholder="Email"
            defaultValue={user?.email}
            disabled
            type="text"
            className="border-[1px] p-3 w-full outline-[#ffa41f]"
          />
        </div>

        <div className="flex  mt-4 gap-3">
          <input
            placeholder="Food Name"
            type="text"
            className="border-[1px] p-3 w-full outline-[#ffa41f]"
          />
          <input
            placeholder="Quentity"
            type="text"
            className="border-[1px] p-3 w-full outline-[#ffa41f]"
          />
        </div>

        <div className="flex mt-4 gap-3">
          <input
            placeholder="Food Origin"
            type="text"
            className="border-[1px] p-3 w-full outline-[#ffa41f]"
          />
          <input
            placeholder="Price"
            type="text"
            className="border-[1px] p-3 w-full outline-[#ffa41f] "
          />
        </div>

        <div className="grid grid-cols-3 mt-4 gap-3">
          <input
            placeholder="image URL"
            type="text"
            className="border-[1px] col-span-2 p-3 w-full outline-[#ffa41f] "
          />
          <select
            placeholder="Categoty"
            type="text"
            className="border-[1px] p-3 w-full outline-[#ffa41f]"
            name=""
            id=""
          >
            <option value="">One </option>
            <option value="">One </option>
            <option value="">One </option>
          </select>
        </div>
        <button className="bg-[#ffa41f] hover:opacity-80 w-full mt-6 font-semibold text-white px-4 py-2">Add Now</button>
      </div>
    </div>
  );
};

export default Add_food;
