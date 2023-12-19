import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";

const TransactionTopFive = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["topFiveTransactions"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/topFiveTransactions`);
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;

  return (
    <div>
      <h1>Last Five Transaction</h1>
      <div className="flex flex-col gap-2">
        {data?.map((item) => {
          return (
            <div key={item?._id}>
              <h2>hello</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionTopFive;
