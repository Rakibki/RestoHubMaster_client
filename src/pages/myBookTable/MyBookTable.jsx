import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import Loadiing from "../../shared/Loadiing";
import Single_Oder_Row from "../my_oder_food/Single_Oder_Row";
import { AiOutlineClose } from "react-icons/ai";
import Page_title from "../../shared/page_title/Page_title";

const MyBookTable = () => {
  const Axios = useAxios();
  const { user } = useContext(authContext);

  const { isPending, data, refetch } = useQuery({
    queryKey: ["myBookTable"],
    queryFn: async () => {
      const res = await Axios.get(`/myBookTable/${user?.email}`);
      return res?.data;
    },
  });

  if (isPending) {
    return <Loadiing />;
  }


  return (
    <div>
      
      <Page_title>Table Book history</Page_title>

      {data.length > 0 && (
        <div className="mt-10 p-16">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Date</th>
                  <th>TIme</th>
                  <th>Oder Number</th>
                  <th>Guests</th>
                  <th>Reservation By</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((food) => {
                  return (
                    <tr key={food._id} className="border-2">
                      <td>
                        {food.date}
                      </td>
                      <td>
                        {food.time}
                      </td>
                      <td>
                        {food?.oderNumber}
                      </td>
                      <td>
                        {food?.guests}
                      </td>
                      <td>
                        {food?.name}
                      </td>
                      <th>
                        <button
                          // onClick={() => handleDeleteFood(food._id)}
                          className="p-4 text-white font-bold bg-[#ffa41f]"
                        >
                          <AiOutlineClose />
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookTable;
