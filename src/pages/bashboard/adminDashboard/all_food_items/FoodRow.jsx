import { IoEye } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const FoodRow = ({ food, handleDeleteFood, handleFoodEdit, foodId }) => {
  console.log(foodId);
  return (
    <tr className="border-2 items-center">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-[70px] rounded-full h-[70px]">
              <img src={food?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <h2 className="text-base">{food?.Food_name}</h2>
      </td>
      <td>
        <h2 className="font-semibold">${food?.Regual_Price}</h2>
      </td>
      <td>
        <h2 className="font-semibold">Admin</h2>
      </td>
      <td>
        <h2 className="font-semibold">{food?.category}</h2>
      </td>
      <td>
        <h2 className="font-semibold">published</h2>
      </td>
      <td>
        <h2 className="font-semibold">{food?.count}</h2>
      </td>
      <th className="flex items-center mt-4 gap-1">
        <button
          onClick={() => handleFoodEdit(food?._id)}
          className="p-2 text-white font-bold bg-[#ffa41f]"
        >
          <CiEdit />
        </button>

        <button
          onClick={() => handleDeleteFood(food?._id)}
          className="p-2 text-white font-bold bg-[#ffa41f]"
        >
          <MdDelete />
        </button>
        <Link to={`/food_details/${food?._id}`}>
          <button className="p-2 text-white font-bold bg-[#ffa41f]">
            <IoEye />
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default FoodRow;
