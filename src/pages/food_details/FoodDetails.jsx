import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Page_title from "../../shared/page_title/Page_title";

const FoodDetails = () => {
  const food = useLoaderData();
  const [count, setCount] = useState(0);

  return (
    <div>
      <Page_title>Food Details Page</Page_title>

      <div className="mt-10">
        <div className="w-[80%] border-2 flex mx-auto">
          <div className="flex-1">
            <img src={food.image} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{food.Food_name}</h1>
            <div>******</div>
            <h2>Price: ${food.Price}</h2>
            <p>Availability: {food.quectity > 0 ? "Stock In" : "Stock out"}</p>

            <p className="border-2 w-[80px] p-4">
              <button>-</button> {count} <button>+</button>{" "}
            </p>

            <div className="flex gap-3">
              <Link to={`/checkout/${food._id}`}>
                <button className="border-[1px] px-7 text-white font-semibold bg-[#ffa41f] transition-all rounded-sm border-[#fff] py-2">
                  Oder Now
                </button>
              </Link>
              <button className="border-[1px] px-7 text-white font-semibold bg-[#ffa41f] transition-all rounded-sm border-[#fff] py-2">
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
