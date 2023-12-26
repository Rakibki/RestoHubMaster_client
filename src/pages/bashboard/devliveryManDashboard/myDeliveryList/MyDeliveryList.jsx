import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../../providers/AuthProvaider";
import GetUserByEmail from "../../../../hooks/GetUserByEmail";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";

const MyDeliveryList = () => {
  const { user } = useContext(authContext);
  const [deliverManId, setDeliverManId] = useState(null);
  GetUserByEmail(user?.email).then((res) => setDeliverManId(res?._id));
  const axiosSecure = useAxiosSecure();

  const { isPending, data, refetch } = useQuery({
    queryKey: ["delivery-list"],
    enabled: !!deliverManId,
    queryFn: async () => {
      const res = await axiosSecure.get(`/delivery-list/${deliverManId}`);
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;

  const handleCancel = (id) => {
    alert(id)
  }
  
  const handleDeliverd = (id) => {
    alert(id)
  }

  return (
    <div>
      {data.length > 0 && (
        <div className="mt-10 px-8 pb-16">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>totalPrice</th>
                  <th>Oder date</th>
                  <th>Status</th>
                  <th>Phone Number</th>
                  <th>Adress</th>
                  <th>delivery Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((food) => (
                  <tr key={food._id} className="border-2 items-center">
                    <td>{food?.name}</td>
                    <td>{food?.email}</td>
                    <td>{food?.totalPrice}</td>
                    <td>{food?.date}</td>
                    <td>{food?.status}</td>
                    <td>00++34343--4345</td>
                    <td>Mirpur Dahsks</td>
                    <td>{food?.deliveryDate}</td>
                    <th className="flex flex-col items-center gap-1">
                      <button onClick={() => handleCancel(food?._id)} className="py-1 px-3 text-white font-bold bg-[#ffa41f]">
                        Cancel
                      </button>
                      <button onClick={() => handleDeliverd(food?._id)} className="py-1 px-3 text-white font-bold bg-[#ffa41f]">
                        Deliverd
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyDeliveryList;
