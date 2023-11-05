import React from "react";
import {AiFillHeart} from "react-icons/ai"
import {HiShoppingCart} from "react-icons/hi"
import {AiFillEye} from "react-icons/ai"

const SingleFood = ({ food }) => {
  console.log(food);
  return (
    <div className="border-2">
      <div className="w-full h-[200px]">
        <img className="w-full h-full" src={food.image} alt="Shoes" />
      </div>
      <div className="">
        <p className="text-center mt-4">{food.Food_name}</p>
        <div className="flex justify-center mt-3">
          <div>*****</div>
        </div>

        <div className="flex justify-center">
          <div className="flex">
            <h2>{food.Price}</h2> - 
            <h2>{food.Regual_Price}</h2>
          </div>
        </div>

        <div className="flex mt-3 mb-4 justify-center">
            <div className="flex gap-2">
                <div className="border-[1px] border-[#1f2937] p-2"><AiFillHeart /></div>
                <div className="border-[1px] border-[#1f2937] p-2"><HiShoppingCart /></div>
                <div className="border-[1px] border-[#1f2937] p-2"><AiFillEye /></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
