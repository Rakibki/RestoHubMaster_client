import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Single_Oder_Row = ({ food, handleDeleteFood }) => {
  return (
    <tr className="border-2">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-[150px] h-[150px]">
              <img src={food?.image_URL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <h2 className="text-base">{food?.Food_name}</h2>
      </td>
      <td>
        <h2 className="text-xl font-semibold">${food?.Price}</h2>
      </td>
      <th>
        <button
          onClick={() => handleDeleteFood(food._id)}
          className="p-4 text-white font-bold bg-[#ffa41f]"
        >
          <AiOutlineClose />
        </button>
      </th>
    </tr>
  );
};

export default Single_Oder_Row;
