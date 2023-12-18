import React, { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import { authContext } from "../../providers/AuthProvaider";
import Swal from "sweetalert2";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SingleFood = ({ food }) => {
  const { user } = useContext(authContext);
  const axiosLocal = useAxiosLocal();
  const axiosSecure = useAxiosSecure();

  const handleCard = async (food) => {
    if (!user) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login",
      });
    }

    const res = await axiosLocal.post(`/card`, {
      email: user?.email,
      Food_name: food?.Food_name,
      category: food?.category,
      Regual_Price: food?.Regual_Price,
      image: food?.image,
      quectity: food?.quectity,
      ratting: food?.ratting,
    });
    if (res?.data?.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Successful",
        text: "Card added successfully",
      });
    }
  };

  const handleWithList = async () => {
    const res = await axiosSecure.post(`/withList/${user?.email}`, food);
    if (res?.data?.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Successful",
        text: "Successfully added to wish list",
      });
    }
  };

  return (
    <div data-aos="fade-up" className="border-2">
      <div className="w-full h-[200px]">
        <img className="w-full h-full" src={food.image} alt="Shoes" />
      </div>
      <div>
        <p className="text-xs text-center mt-1">category: {food.category}</p>
      </div>
      <div className="">
        <p className="text-center mt-4">{food.Food_name}</p>
        <div className="flex justify-center mt-3">
          <div>
            <Rate
              className="text-[#ffa41f] mb-4"
              disabled
              defaultValue={food?.ratting}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex gap-2">
            <h2 className="text-xl font-semibold">${food.Price}</h2> -{" "}
            <h2 className="font-medium line-through text-lg">
              {food.Regual_Price}
            </h2>
          </div>
        </div>

        <div className="flex mt-3 mb-4 justify-center">
          <div className="flex gap-2">
            <div
              onClick={handleWithList}
              className="border-[1px] hover:bg-[#ffa41f] hover:text-white hover:border-none border-[#1f2937] p-2"
            >
              <AiFillHeart />
            </div>
            <div
              onClick={() => handleCard(food)}
              className="border-[1px] border-[#1f2937] hover:bg-[#ffa41f] hover:text-white hover:border-none p-2"
            >
              <HiShoppingCart />
            </div>
            <Link to={`/food_details/${food._id}`}>
              <div className="border-[1px] border-[#1f2937] hover:bg-[#ffa41f] hover:text-white hover:border-none p-2">
                <AiFillEye />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
