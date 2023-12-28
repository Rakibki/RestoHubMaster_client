import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../../providers/AuthProvaider";
import GetUserByEmail from "../../../../hooks/GetUserByEmail";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";
import swal from "sweetalert";

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

  const handleCancel = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete the food?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.put(`/delivery-list/${id}`).then((res) => {
          console.log(res);
          refetch();
        });
        swal("Deleted successfully", {
          icon: "success",
        });
      }
    });
  };

  const handleDeliverd = async (id) => {
    const res = await axiosSecure.put(`/namageDeliveryList/${id}`);
    if (res.data) {
      swal("Successfully delivered", {
        icon: "success",
      });
      refetch();
    }
  };

  return (
    <div>
      <div className="flex px-10 items-center justify-between">
        <div className="flex mt-10 gap-3">
          <div className="w-2 h-8 bg-[#ffa41f]"></div>
          <h1 className="text-3xl font-semibold">My Delivery List</h1>
        </div>
        <div>
        </div>
      </div>

      {data?.length < 1 && (
        <p className="text-3xl font-semibold text-center text-[#ffa41f] my-6">
          You have no deliveries
        </p>
      )}

      {data?.length > 0 && (
        <div className="px-8 mt-4 pb-16">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-white">
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
                {data?.map((food) => (
                  <tr key={food._id} className="border-2 border-white items-center">
                    <td>{food?.name}</td>
                    <td>{food?.email}</td>
                    <td>{food?.totalPrice}</td>
                    <td>{food?.date}</td>
                    <p
                      className={` ${
                        food?.status == "OnTheWay" &&
                        "text-[#4579b4] bg-[#a5b1e4]"
                      } ${
                        food?.status == "diliverd" &&
                        "text-[#22c55e] bg-[#d2f4df]"
                      } ${
                        food?.status === "cancel" &&
                        "text-[#ef4444] bg-[#fcd9d9]"
                      } ${
                        food?.status === "padding" &&
                        "text-[#f59e0b] bg-[#fdecce]"
                      } px-3 py-2 font-medium text-center rounded-2xl`}
                    >
                      {food?.status}
                    </p>
                    <td>00++34343--4345</td>
                    <td>Mirpur Dahsks</td>
                    <td>{food?.deliveryDate}</td>
                    <th className="flex flex-col items-center gap-1">
                      <button
                        onClick={() => handleCancel(food?._id)}
                        className="py-1 px-3 text-white font-bold bg-[#ffa41f]"
                      >
                        Cancel
                      </button>
                      <button
                        disabled={food?.status == "diliverd"}
                        onClick={() => handleDeliverd(food?._id)}
                        className="py-1 px-3 text-white font-bold bg-[#ffa41f]"
                      >
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
