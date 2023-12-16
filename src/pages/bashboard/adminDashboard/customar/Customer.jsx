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
    <div>
      {data?.length > 0 && (
        <div className="mt-10 px-8 py-16">
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
