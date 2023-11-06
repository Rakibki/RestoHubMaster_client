import React, { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";

const Add_food = () => {
  const { user } = useContext(authContext);

  const handle_Add_food = (e) => {
    e.preventDefault();

   const  food_info = {
      buyer_name: user?.displayName,
      buyer_email: user?.email,
      Food_Name: e.target.Food_Name.value,
      Quentity: e.target.Quentity.value,
      Food_Origin: e.target.Food_Origin.value,
      image_URL: e.target.image_URL.value,
      Categoty: e.target.Categoty.value,
      Price: e.target.Price.value,
      count: 0
    };
    console.log(food_info);
  };

  return (
    <div className="flex my-10 p-6 justify-center">
      <div className="w-[60%] p-4 border-2">
        <form onSubmit={handle_Add_food}>
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
              name="Food_Name"
              placeholder="Food Name"
              type="text"
              className="border-[1px] p-3 w-full outline-[#ffa41f]"
            />
            <input
              name="Quentity"
              placeholder="Quentity"
              type="text"
              className="border-[1px] p-3 w-full outline-[#ffa41f]"
            />
          </div>

          <div className="flex mt-4 gap-3">
            <input
              name="Food_Origin"
              placeholder="Food Origin"
              type="text"
              className="border-[1px] p-3 w-full outline-[#ffa41f]"
            />
            <input
              name="Price"
              placeholder="Price"
              type="text"
              className="border-[1px] p-3 w-full outline-[#ffa41f] "
            />
          </div>

          <div className="grid grid-cols-3 mt-4 gap-3">
            <input
              name="image_URL"
              placeholder="image URL"
              type="text"
              className="border-[1px] col-span-2 p-3 w-full outline-[#ffa41f] "
            />
            <select
              placeholder="Categoty"
              type="text"
              className="border-[1px] p-3 w-full outline-[#ffa41f]"
              name="Categoty"
              id=""
            >
              <option value="one">One </option>
              <option value="one">One </option>
              <option value="one">One </option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#ffa41f] hover:opacity-80 w-full mt-6 font-semibold text-white px-4 py-2"
          >
            Add Food Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add_food;
