import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../shared/Loadiing";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyCard = ({ setOpenCard }) => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();

  const { isPending, data: myCard } = useQuery({
    queryKey: ["myCards"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myCard/${user?.email}`);
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;
  const totalPrice = parseInt(
    myCard?.reduce((acc, curr) => acc + curr?.Regual_Price, 0)
  );
  const foodsId = myCard?.map((item) => item?._id);

  const oderInfo = {
    totalPrice,
    foodsId,
    userName: user.displayName,
    email: user?.email,
  };

  return (
    <div className="mt-6 ">
      {myCard?.length < 0 && (
        <h2 className="text-xl">Your cart is empty now.</h2>
      )}

      {myCard?.length > 0 &&
        myCard?.slice(0, 3)?.map((food) => {
          return (
            <div
              key={food._id}
              className="grid hover:shadow-xl hover:shadow-[#ffa41f] h-[80px] overflow-hidden transition-all gap-2 mb-2 border-[1px] grid-cols-6"
            >
              <div className="col-span-2 h-full overflow-hidden w-full">
                <img className="h-auto" src={food?.image} alt="" />
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
          <Link state={oderInfo} to={`/dashboard/checkout`}>
            <button className="px-6 py-2 rounded-lg hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white">
              Check Out
            </button>
          </Link>
          <Link to={"dashboard/myCard"}>
            <button
              onClick={() => setOpenCard(false)}
              className="px-6 py-2  rounded-lg hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white"
            >
              View Card
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
