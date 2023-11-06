import React from "react";

const Single_food_item = ({ food }) => {
  console.log(food);

  return (
    <div className="grid border-2 gap-4 grid-cols-5">
      <div className="col-span-2">
        <img className="w-full h-full" src={food?.image_URL} alt="" />
      </div>
      <div className="col-span-3">
        <h1 className="text-2xl mt-6 font-medium">{food?.Food_Name}</h1>

        <div className="flex items-center gap-6">
          <h1 className="text-xl mt-2 font-medium">${food?.Price}</h1>
          <h1 className="text-lg mt-2 font-medium">Categoty: {food?.Categoty}</h1>
        </div>

        <div>*****</div>

        <p>Food Origin: {food.Food_Origin}</p>
      </div>
    </div>
  );
};

export default Single_food_item;
