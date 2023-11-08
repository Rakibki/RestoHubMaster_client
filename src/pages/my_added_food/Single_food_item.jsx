import { Rate } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Single_food_item = ({ food, handleDlete }) => {
  return (
    <div className="grid border-2 gap-4 grid-cols-5">
      <div className="col-span-2">
        <img className="w-full h-full" src={food?.image_URL} alt="" />
      </div>
      <div className="col-span-3">
        <h1 className="text-2xl mt-6 font-medium">{food?.Food_Name}</h1>

        <div className="flex items-center gap-6">
          <h1 className="text-xl mt-2 font-medium">${food?.Price}</h1>
          <h1 className="text-lg mt-2 font-medium">
            Categoty: {food?.Categoty}
          </h1>
        </div>

        <div className="mt-3">
          <Rate
            className="text-[#ffa41f] mb-4"
            disabled
            defaultValue={food?.ratting}
          />
        </div>

        <p className="mb-3">Food Origin: {food.Food_Origin}</p>

        <div className="flex gap-3">
          <Link to={`/update/${food._id}`}>
            <button className="px-4 py-2 hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white">
              Update
            </button>
          </Link>

          <button
            onClick={() => handleDlete(food._id)}
            className="px-4 py-2 hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Single_food_item;
