import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Page_title from "../../shared/page_title/Page_title";
import { Rate } from "antd";

const FoodDetails = () => {
  const food = useLoaderData();
  const [count, setCount] = useState(0);

  return (
    <div>
      <Page_title>Food Details Page</Page_title>

      <div className="my-10">
        <div className="w-[80%] p-10 border-2 gap-6 items-center md:flex mx-auto">
          <div className="flex-1">
            <img src={food.image} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{food.Food_name}</h1>
            <div>
              <Rate
                className="text-[#ffa41f] mt-4 mb-4"
                disabled
                defaultValue={food?.ratting}
              />
            </div>
            <h2 className="mb-2">Price: ${food.Price}</h2>
            <p className="mb-2">Quectity: {food.quectity}</p>

            <div className="flex gap-3">
              <Link to={`/checkout/${food._id}`}>
                <button className="border-[1px] px-7 text-white font-semibold hover:opacity-80 bg-[#ffa41f] transition-all rounded-sm border-[#fff] py-2">
                  Oder Now
                </button>
              </Link>
              <button className="border-[1px] px-7 text-white font-semibold bg-[#ffa41f] hover:opacity-80 transition-all rounded-sm border-[#fff] py-2">
                Add To Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
