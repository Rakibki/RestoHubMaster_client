import ProgressBar from "@ramonak/react-progress-bar";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";

const FoodAvailable = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["categoryFoodQuentity"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/categoryFoodQuentity`);
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;

  console.log(data);

  return (
    <div className="grid gap-3 grid-cols-10">
      <div className="col-span-7 p-6">
        <div>
          <h2>Breakfast</h2>
          <ProgressBar transitionDuration="1s" completed={data?.Breakfast} maxCompleted={20} />
        </div>
      </div>

      <div className="col-span-3">ewrewrewrewr</div>
    </div>
  );
};

export default FoodAvailable;
