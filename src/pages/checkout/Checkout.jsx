import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { authContext } from "../../providers/AuthProvaider";

const Checkout = () => {
  const food = useLoaderData();
  const { user } = useContext(authContext);

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
        <div className="flex-1 p-6 border-r-2">
          <div>
            <h1 className="text-2xl mb-2 mt-8 font-medium">Contact</h1>
            <input
              type="text"
              value={user?.email}
              className="border-[1px] p-3 w-full outline-[#ffa41f] disabled:"
            />
          </div>

          <div className="mt-6">
            <h1 className="text-2xl mb-2 mt-8 font-medium">Delivery</h1>
            <div className="flex gap-3">
              <input
                type="text"
                value={user?.displayName}
                className="border-[1px] p-3 w-full outline-[#ffa41f] disabled:"
              />
              <input
                placeholder="Quentity"
                type="text"
                className="border-[1px] p-3 w-full outline-[#ffa41f] :"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
         
          hfgffgfghf
        </div>
      </div>
    </div>
  );
};

export default Checkout;
