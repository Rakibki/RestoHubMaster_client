import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { authContext } from "../../providers/AuthProvaider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Checkout = () => {
  const [startDate, setStartDate] = useState(new Date());
  const food = useLoaderData();
  const { user } = useContext(authContext);

  const handlePurchase = (e) => {
    e.preventDefault();

    const oderinfo = {
      buyer_name: user.displayName,
      buyer_email: user.email,
      Food_name: e.target.food_name.value,
      Price: e.target.Price.value,
      Quentity: e.target.Quentity.value,
      date: startDate,
    };

    console.log(oderinfo);
  };

  return (
    <div>
      <div className="flex px-14 py-4 justify-between">
        <h2 className="text-2xl font-medium">{food?.Food_name}</h2>
        <h2>
          <AiOutlineShoppingCart className="text-2xl text-[#ffa41f]" />
        </h2>
      </div>
      <hr />

      <div className="w-[90%] mx-auto flex">
        <form onSubmit={handlePurchase}>
          <div className="flex-1 p-6 border-r-2">
            <div>
              <h1 className="text-2xl mb-2 mt-8 font-medium">Contact</h1>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={user?.displayName}
                  className="border-[1px] p-3 w-full outline-[#ffa41f] disabled:"
                />
                <input
                  placeholder="email"
                  type="text"
                  defaultValue={user.email}
                  disabled
                  className="border-[1px] p-3 w-full outline-[#ffa41f] :"
                />
              </div>
            </div>

            <div className="mt-4">
              <h1 className="text-2xl mb-2 mt-8 font-medium">
                Food information
              </h1>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={food?.Food_name}
                  name="food_name"
                  className="border-[1px] p-3 w-full outline-[#ffa41f] disabled:"
                />
                <input
                  placeholder="email"
                  type="text"
                  name="Price"
                  defaultValue={food.Price}
                  className="border-[1px] p-3 w-full outline-[#ffa41f] :"
                />
              </div>

              <div className="flex mt-3 gap-3">
                <input
                  type="text"
                  name="Quentity"
                  placeholder="Quentity"
                  className="border-[1px] w-full p-3 outline-[#ffa41f] disabled:"
                />
                <div className="w-[50%]">
                  <DatePicker
                    className="border-[1px] w-full p-3 outline-[#ffa41f]"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#ffa41f] hover:opacity-80 w-full mt-6 font-semibold text-white px-4 py-2"
            >
              Purchase The Food
            </button>
          </div>
        </form>
        <div className="flex-1 flex gap-4 p-16">
          <div className="w-[200px] h-auto">
            <img src={food.image} alt="" />
          </div>
          <div>
            <h1 className="text-xl">{food.Food_name}</h1>
            <div className="flex items-center gap-4">
              <p className="text-lg mt-3 font-semibold">${food.Price}</p>
              <p className="text-base mt-3 font-semibold">${food.Regual_Price}</p>
            </div>

            <div className="flex">*****</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
