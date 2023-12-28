
const Single_Oder_Row = ({ food, handleDeleteFood }) => {
  return (
    <tr className="border-2 border-white">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-[150px] h-[150px]">
              <img src={food?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <h2 className="text-base">{food?.Food_name}</h2>
      </td>
      <td>
        <h2 className="text-xl font-semibold">${food?.Regual_Price}</h2>
      </td>
      <th>
        <button
          onClick={() => handleDeleteFood(food._id)}
          className="p-4 text-white font-bold bg-[#ffa41f]"
        >
          {/* <AiOutlineClose /> */} X
        </button>
      </th>
    </tr>
  );
};

export default Single_Oder_Row;
