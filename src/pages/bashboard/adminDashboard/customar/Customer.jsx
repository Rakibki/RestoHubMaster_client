import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";
import CustomerRow from "./CustomerRow";

const Customer = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["all-customers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/customers");
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;

  return (
    <div className="mt-10">
      <div className="flex mb-4 px-10 items-center justify-between">
        <div className="flex gap-3">
          <div className="w-2 h-8 bg-[#ffa41f]"></div>
          <h1 className="text-3xl font-semibold">Customers List</h1>
        </div>
        <div>
          <button
            type="submit"
            className="px-5 py-2 mt-4 bg-[#ffa41f] transition-all  text-white font-bold hover:opacity-80"
          >
            Add A New Customer
          </button>
        </div>
      </div>
      {data?.length > 0 && (
        <div className="px-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Orders</th>
                  <th>Order Total</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((customer) => (
                  <CustomerRow customer={customer} key={customer._id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer;
