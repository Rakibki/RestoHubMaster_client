import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../shared/Loadiing";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyCard = ({setOpenCard}) => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();

  const { isPending, data: myCard } = useQuery({
    queryKey: ["myCard"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myCard/${user?.email}`);
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;

  return (
    <div className="mt-6 ">
      {myCard?.length < 0 && (
        <h2 className="text-xl">Your cart is empty now.</h2>
      )}

      {myCard?.length > 0 &&
        myCard?.slice(0, 4)?.map((food) => {
          return (
            <div
              key={food._id}
              className="grid hover:shadow-xl hover:shadow-[#ffa41f] transition-all gap-2 mb-2 border-[1px] grid-cols-6"
            >
              <div className="col-span-2">
                <img src={food?.image} alt="" />
              </div>
              <div className="col-span-4">
                <h4 className="text-base font-extralight">
                  Food Name:{food?.Food_name}
                </h4>
                <h4 className="font-[400] text-sm">
                  Category: {food?.category}
                </h4>
                <h4 className="text-sm">Price: ${food?.Regual_Price}</h4>
              </div>
            </div>
          );
        })}

      <div className="flex justify-center mt-6">
        <div className="flex gap-2">
          <button className="px-6 py-2 rounded-lg hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white">
            Check Out
          </button>
          <Link to={"/myCard"}>
            <button onClick={() => setOpenCard(false)} className="px-6 py-2  rounded-lg hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white">
              View Card
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
