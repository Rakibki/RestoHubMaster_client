import {useQuery} from "@tanstack/react-query"
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";


const AllTableBook = () => {
  const axiosSecure = useAxiosSecure()

  const { isPending, data } = useQuery({
    queryKey: ["ManageTable"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/ManageTable`);
      return res?.data;
    },
  });

  if(isPending) <Loadiing />

  console.log(data);

  return (
    <div>AllTableBook</div>
  )
}

export default AllTableBook