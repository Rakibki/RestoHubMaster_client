import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";

const TransactionTopFive = () => {
    const axiosSecure = useAxiosSecure()

  const { isPending, data } = useQuery({
    queryKey: ["topFiveTransactions"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/topFiveTransactions`);
      return res?.data;
    },
  });


  if(isPending) <Loadiing />


  return <div>TransactionTopFive</div>;
};

export default TransactionTopFive;
