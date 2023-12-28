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
    <div className="mt-10">
      <div>
        <div className="flex shadow-xl gap-3">
          <div className="border-[1px] bg-white rounded-3xl w-full p-3">
            <h2 className="mb-1 text-[#64748b]">Breakfast</h2>
            <ProgressBar
              bgColor="#ffa41f"
              transitionDuration="1s"
              completed={data?.Breakfast}
              maxCompleted={10}
            />
          </div>
          <div className="border-[1px] bg-white shadow-xl rounded-3xl w-full p-3">
            <h2 className="mb-1 text-[#64748b]">Appetizers</h2>
            <ProgressBar
              bgColor="#ffa41f"
              transitionDuration="1s"
              completed={data?.Appetizers}
              maxCompleted={10}
            />
          </div>
        </div>

        <div className="flex mt-4 shadow-xl gap-3">
          <div className="border-[1px] bg-white rounded-3xl w-full p-3">
            <h2 className="mb-1 text-[#64748b]">Desserts</h2>
            <ProgressBar
              bgColor="#ffa41f"
              transitionDuration="1s"
              completed={data?.Desserts}
              maxCompleted={10}
            />
          </div>

          <div className="border-[1px] bg-white shadow-xl rounded-3xl w-full p-3">
            <h2 className="mb-1 text-[#64748b]">Family Dishes</h2>
            <ProgressBar
              bgColor="#ffa41f"
              transitionDuration="1s"
              completed={data?.FamilyDishes}
              maxCompleted={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAvailable;
