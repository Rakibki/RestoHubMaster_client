import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../../../shared/Loadiing";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import FoodRow from "./FoodRow";

const All_food_items = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["all-foods"],
    queryFn: async () => {
      const res = await axiosSecure.get("/foods");
      return res?.data;
    },
  });

  if (isPending) {
    return <Loadiing />;
  }

  return (
    <div>
      {data.length > 0 && (
        <div className="mt-10 px-8 py-16">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Create By</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>has been sold</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((food) => (
                  <FoodRow food={food} key={food._id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default All_food_items;
