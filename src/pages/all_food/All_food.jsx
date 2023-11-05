import React from "react";
import { useLoaderData } from "react-router-dom";
import Page_title from "../../shared/page_title/Page_title";
import SingleFood from "./SingleFood";

const All_food = () => {
  const data = useLoaderData();


  return (
    <div>
      <Page_title>All Food</Page_title>
      <div className="grid mt-16 grid-cols-4">
        <div>filter</div>
        <div className="grid grid-cols-3 gap-3 col-span-3">
          {data.map((food) => (
            <SingleFood key={food._id} food={food} />
          ))}
        </div>
      </div>

      <div className="flex mt-6 mb-10 justify-center">
        <p>pagination...</p>
      </div>
    </div>
  );
};

export default All_food;
