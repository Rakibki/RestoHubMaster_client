import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data, refetch } = useQuery({
    queryKey: ["Admin-home"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/adminHome`)
      return res?.data;
    },
  });

  if(isPending) <Loadiing />

  console.log(data);

  return <div>AdminHome</div>;
};

export default AdminHome;
