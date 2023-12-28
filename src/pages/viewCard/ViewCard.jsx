import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import Loadiing from "../../shared/Loadiing";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Page_title from "../../shared/page_title/Page_title";
import Single_Oder_Row from "../my_oder_food/Single_Oder_Row";
import Swal from "sweetalert2";
import { Link, useLocation } from "react-router-dom";

const ViewCard = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();

  const localtion = useLocation();
  console.log(localtion?.state?.oderInfo);

  const {
    isPending,
    data: myCard,
    refetch,
  } = useQuery({
    queryKey: ["myCardall"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myCard/${user?.email}`);
      return res?.data;
    },
  });

  const totalPrice = parseInt(
    myCard?.reduce((acc, curr) => acc + curr?.Regual_Price, 0)
  );
  const foodsId = myCard?.map((item) => item?._id);

  const oderInfo = {
    totalPrice,
    foodsId,
    userName: user?.displayName,
    email: user?.email,
  };

  const handleDeleteFood = (id) => {
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
        axiosSecure.delete(`/myCard/${id}`).then((res) => {
          if (res?.data?.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  if (isPending) <Loadiing />;

  return (
    <div>
      <div>
        <Page_title>Your Shopping Card</Page_title>
      </div>
      {myCard?.length < 1 && (
        <p className="text-3xl font-semibold text-center text-[#ffa41f] my-6">
          There is no food on your card
        </p>
      )}
      <div className="grid grid-cols-7">
        <div className="col-span-5">
          {myCard?.length > 0 && (
            <div className="mt-10 p-6">
              <div className=" overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead className="bg-white">
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Action</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {myCard?.map((food) => (
                      <Single_Oder_Row
                        handleDeleteFood={() => handleDeleteFood(food._id)}
                        key={food?._id}
                        food={food}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {myCard?.length > 0 && (
          <div className="col-span-2">
            <div className="mt-24 bg-white shadow-lg h-[350px] rounded-xl p-6 w-full border-2">
              <h2 className="text-2xl font-semibold mb-4">Cart Totals</h2>

              <div className="flex mt-2 justify-between">
                <h2 className="text-[#838fa2] text-lg">Sub-total</h2>
                <h2 className="text-[#838fa2] text-lg">${totalPrice}</h2>
              </div>

              <div className="flex mt-2 justify-between">
                <h2 className="text-[#838fa2] text-lg">Delivery</h2>
                <h2 className="text-[#838fa2] text-lg">Free</h2>
              </div>

              <div className="flex mt-2 justify-between">
                <h2 className="text-[#838fa2] text-lg">Discount</h2>
                <h2 className="text-[#838fa2] text-lg">$7</h2>
              </div>

              <div className="flex mt-2 mb-3 justify-between">
                <h2 className="text-[#838fa2] text-lg">Tax</h2>
                <h2 className="text-[#838fa2] text-lg">$3</h2>
              </div>

              <hr />
              <div>
                <div className="flex mt-2 mb-3 justify-between">
                  <h2 className="text-[#2d323b] text-xl">Total</h2>
                  <h2 className="text-[#2d323b] text-xl">
                    ${totalPrice - 7 + 3}
                  </h2>
                </div>
              </div>

              <Link to={`/dashboard/checkout`} state={oderInfo}>
                <button className="px-6 w-full mt-4 py-2 rounded-lg hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white">
                  Proceed to Checkout
                </button>
              </Link>
            </div>

            <div className="mt-10 bg-white shadow-lg h-[200px] rounded-xl p-6 w-full border-2">
              <h2 className="text-2xl font-semibold mb-4">Coupon Code</h2>

              <div className="form-control">
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  className="input rounded-none input-bordered"
                  required
                  name="code"
                />
              </div>

              <button className="px-6 w-full mt-4 py-2 rounded-lg hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCard;
