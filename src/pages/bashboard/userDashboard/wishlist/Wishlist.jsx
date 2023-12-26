import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../../../../providers/AuthProvaider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";
import Swal from "sweetalert2";

const Wishlist = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();

  const { isPending, data, refetch } = useQuery({
    queryKey: ["myWishList"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myWishList/${user?.email}`);
      return res?.data;
    },
  });


  const handleAddToCard = async (food) => {
    const cardInfo = {
      email: user?.email,
      Food_name: food?.Food_name,
      category: food?.category,
      Regual_Price: food?.Regual_Price,
      image: food?.image,
      quectity: food?.quectity,
      ratting: food?.ratting,
    } 
    const res = await axiosSecure.post('/card', cardInfo)
    console.log(res?.data);
  }


  if (isPending) <Loadiing />;

  const handleRemove = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/myWishList/${id}`).then((res) => {
          if (res?.data?.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };


  return (
    <div className="p-10">
      {data?.map((food) => {
        return (
          <div
            className="border-[1px] mb-3 p-6 items-center flex justify-between"
            key={food?.id}
          >
            <div className=" flex items-center gap-4">
              <img className="h-[100px] w-[150px]" src={food?.image} alt="" />
              <div>
                <h2 className="text-[#ffa41f]">{food?.category}</h2>
                <h2 className="text-lg">{food?.Food_name}</h2>
              </div>
            </div>
            <div className="flex">
              <div className="mr-6">
                <h2 className="text-xl text-[#64748b]">${food?.Price}</h2>
                <h2 className="text-lg line-through text-[#64748b]">
                  {food?.Regual_Price}
                </h2>
              </div>

              <div className="flex gap-2 flex-col">
                <button onClick={() => handleAddToCard(food)} className="px-6 py-2 rounded-lg hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white">
                  Add To Card
                </button>
                <button
                  onClick={() => handleRemove(food?._id)}
                  className="px-6  py-2 rounded-lg hover:opacity-80 border-[#ffa41f] border-2  border-none font-semibold outline-none text-[#ffa41f]"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Wishlist;
