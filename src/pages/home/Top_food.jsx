import { useQuery } from "@tanstack/react-query";

import Loadding from "../../shared/Loadiing";
import Single_food from "../all_food/SingleFood";
import { Link } from "react-router-dom";
import useAxiosLocal from "../../hooks/useAxiosLocal";
// import useAxios from "../../hooks/useAxios";

const Top_food = () => {
  // const Axios = useAxios()
  const axioslocal = useAxiosLocal()
  const { isPending, data } = useQuery({
    queryKey: ["top_food_item"],
    queryFn: async () => {
      const res = await axioslocal.get("/Top_Food")
      return res?.data
    }
  });

  if (isPending) {
    return <Loadding />;
  }


  return (
    <div className="w-full mt-14 px-16 md:px-24">
      <div className="flex mb-4 gap-3">
        <div className="w-3 h-8 bg-[#ffa41f]"></div>
        <h1 className="text-3xl font-semibold">Top Food</h1>
      </div>

      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((food) => (
          <Single_food key={food._id} food={food} />
        ))}
      </div>

      <div className="flex mt-6 mb-10 justify-center">
        <Link to={"/allFood"}>
          <button className="px-6 py-2 rounded-lg hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Top_food;
