import { useQuery } from "@tanstack/react-query";

import Loadding from "../../shared/Loadiing";
import Single_food from "../all_food/SingleFood";

const Top_food = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:5000/Top_Food").then((res) => res.json()),
  });

  if (isPending) {
    return <Loadding />;
  }

  return (
    <div className="w-full mt-14 px-24 mb-10">
      <div className="flex mb-4 gap-3">
        <div className="w-3 h-8 bg-[#ffa41f]"></div>
        <h1 className="text-3xl font-semibold">Top Food</h1>
      </div>

      <div className="grid gap-3 grid-cols-3">
        {data.map((food) => (
          <Single_food food={food} />
        ))}
      </div>
    </div>
  );
};

export default Top_food;
