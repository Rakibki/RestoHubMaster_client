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
    <div className="rounded-2xl p-3">
      <div className="flex mb-4 items-center gap-3">
        <div className="w-2 h-8 bg-[#ffa41f]"></div>
        <h1 className="text-xl font-medium">Last Five Transaction</h1>
      </div>
      <div className="flex flex-col gap-2">
        {data?.map((item) => {
          return (
            <div className="border-[1px] rounded-2xl p-3" key={item?._id}>
              <h2 className="text-sm">Email: {item?.email}</h2>
              <h2 className="text-sm">
                Transaction Id: {item?.trangectionId.slice(0, 10)}...
              </h2>
              <div className="flex gap-3 items-center justify-between">
                <h1 className="text-sm text-[#959895] font-Inter mt-1">${item?.date}</h1>
                <h1 className="text-[#06133a] font-semibold">${item?.totalPrice}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionTopFive;
