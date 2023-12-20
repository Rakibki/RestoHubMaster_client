import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../../../shared/Loadiing";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AiOutlineClose } from "react-icons/ai";
import swal from "sweetalert";

const Oders = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data, refetch } = useQuery({
    queryKey: ["Alloders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allOders`);
      return res?.data;
    },
  });

  const { isPending: isPending2, data: deliveryMan } = useQuery({
    queryKey: ["AllDelivaryMan"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/AllDelivaryMan`);
      return res?.data;
    },
  });

  console.log(deliveryMan);

  if ((isPending, isPending2)) <Loadiing />;

  const handleOderDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete the food?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.delete(`/oder/${id}`).then((res) => {
          if (res.data?.deletedCount > 0) {
            refetch();
            swal("Deleted successfully", {
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleManageOder = () => {
    alert("click")
  }

  return (
    <div>
      {data?.length < 1 ? (
        <p className="text-3xl font-semibold text-center text-[#ffa41f] my-6">
          You have no orders
        </p>
      ) : (
        ""
      )}

      {data?.length > 0 && (
        <div className="mt-10 p-16">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Total Price</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>transaction Id</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((food) => {
                  return (
                    <tr key={food._id} className="border-2">
                      <td>
                        <p>{food?.name}</p>
                      </td>
                      <td>
                        <p>{food?.email}</p>
                      </td>
                      <td>
                        <p>{food?.totalPrice}</p>
                      </td>
                      <td>
                        <p>{food?.date}</p>
                      </td>
                      <td>
                        <p>{food?.time}</p>
                      </td>
                      <td>
                        <p>{food?.status}</p>
                      </td>
                      <td>
                        <p>{food?.trangectionId?.slice(0, 5)}...</p>
                      </td>

                      <th className="flex items-center gap-2">
                        <button
                          onClick={() => handleOderDelete(food?._id)}
                          className="px-4 py-2 text-white font-bold bg-[#ffa41f]"
                        >
                          <AiOutlineClose />
                        </button>
                        <button onClick={() => handleManageOder()} className="px-4 py-2 text-white font-bold bg-[#ffa41f]">
                          Manage
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

export default Oders;
