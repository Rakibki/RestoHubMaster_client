import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";

const TopFiveSellFood = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["toFiveSellFood"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/Top_Food`);
      return res?.data;
    },
  });

  if(isPending) <Loadiing />

  return (
    <div>
      
    </div>
  )
}

export default TopFiveSellFood