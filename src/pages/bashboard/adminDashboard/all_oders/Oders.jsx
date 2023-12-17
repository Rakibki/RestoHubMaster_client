import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../../../shared/Loadiing";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AiOutlineClose } from "react-icons/ai";

const Oders = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["AllDers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allOders`);
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;

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

                      <th>
                        <button
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

export default Oders;
