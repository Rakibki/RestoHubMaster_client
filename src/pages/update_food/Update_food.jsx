import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Page_title from "../../shared/page_title/Page_title";

const Update_food = () => {
  const food = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();

    const food_info = {
      Food_Name: e.target.Food_Name.value,
      Quentity: e.target.Quentity.value,
      Food_Origin: e.target.Food_Origin.value,
      image_URL: e.target.image_URL.value,
      Categoty: e.target.Categoty.value,
      Price: e.target.Price.value,
    };

    axios
      .put(`http://localhost:5000/my_food_update/${food._id}`, food_info)
      .then((res) => {
        console.log(res);
        swal("Good job!", "Successfully updated food!", "success");
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <div>
        <Page_title>Update My Food Item</Page_title>
      </div>
      <div className="flex my-10 p-6 justify-center">
        <div className="w-[60%] p-4 border-2">
          <form onSubmit={handleUpdate}>
            <div className="flex  mt-4 gap-3">
              <input
                name="Food_Name"
                placeholder="Food Name"
                type="text"
                defaultValue={food?.Food_Name}
                className="border-[1px] p-3 w-full outline-[#ffa41f]"
              />
              <input
                name="Quentity"
                placeholder="Quentity"
                defaultValue={food?.Quentity}
                type="text"
                className="border-[1px] p-3 w-full outline-[#ffa41f]"
              />
            </div>

            <div className="flex mt-4 gap-3">
              <input
                name="Food_Origin"
                placeholder="Food Origin"
                type="text"
                defaultValue={food?.Food_Origin}
                className="border-[1px] p-3 w-full outline-[#ffa41f]"
              />
              <input
                name="Price"
                placeholder="Price"
                defaultValue={food?.Price}
                type="text"
                className="border-[1px] p-3 w-full outline-[#ffa41f] "
              />
            </div>

            <div className="grid grid-cols-3 mt-4 gap-3">
              <input
                name="image_URL"
                placeholder="image URL"
                defaultValue={food?.image_URL}
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
                <option defaultValue={food?.Categoty} value="">
                  Gategory
                </option>
                <option value="Desserts ">Desserts</option>
                <option value="Appetizers">Appetizers</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Family Dishes">Family Dishes</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#ffa41f] hover:opacity-80 w-full mt-6 font-semibold text-white px-4 py-2"
            >
              Update Food Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update_food;
