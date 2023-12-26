import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../../../shared/Loadiing";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { authContext } from "../../../../providers/AuthProvaider";
import { AiOutlineClose } from "react-icons/ai";
import swal from "sweetalert";
import ReviewModal from "../../../../components/modals/reviewModal/ReviewModal";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(authContext);
  const [modalIsOpen, setIsOpen] = useState(false);


  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  const { isPending, data, refetch } = useQuery({
    queryKey: ["myPaymentHistory"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myPaymentHistory/${user?.email}`);
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;

  const handleDeleteFood = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete the food order?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.delete(`/my_Oder_food_delete/${id}`).then((res) => {
          refetch();
        });
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      }
    });
  };

  const handleReview = (id) => {
    setIsOpen(true);
  }

  return (
    <div>
      {data?.length < 1 ? (
        <p className="text-3xl font-semibold text-center text-[#ffa41f] my-6">
          You have no orders
        </p>
      ) : (
        ""
      )}

      {data?.length > 0 && (
        <div className="mt-10 px-6 py-16">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Total Price</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>transaction Id</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((food) => {
                  return (
                    <tr key={food._id} className="border-2">
                      <td>
                        <p>{food?.name}</p>
                      </td>
                      <td>
                        <p>{food?.email}</p>
                      </td>
                      <td>
                        <p>{food?.totalPrice}</p>
                      </td>
                      <td>
                        <p>{food?.date}</p>
                      </td>
                      <td>
                        <p>{food?.time}</p>
                      </td>
                      <td>
                        <p
                          className={` ${
                            food?.status == "OnTheWay" &&
                            "text-[#4579b4] bg-[#a5b1e4]"
                          } ${
                            food?.status == "diliverd" &&
                            "text-[#22c55e] bg-[#d2f4df]"
                          } ${
                            food?.status === "cancel" &&
                            "text-[#ef4444] bg-[#fcd9d9]"
                          } ${
                            food?.status === "padding" &&
                            "text-[#f59e0b] bg-[#fdecce]"
                          } px-3 py-2 font-medium text-center rounded-2xl`}
                        >
                          {food?.status}
                        </p>
                      </td>
                      <td>
                        <p>{food?.trangectionId?.slice(0, 5)}...</p>
                      </td>

                      <th className="flex gap-2 ">
                        <button
                          disabled={food?.status == "OnTheWay"}
                          onClick={() => handleDeleteFood(food._id)}
                          className="px-4 py-2 text-white font-bold bg-[#ffa41f]"
                        >
                          <AiOutlineClose />
                        </button>
                        {food.status === "diliverd" && (
                          <button onClick={() => handleReview(food?._id)} className="px-4 py-2 text-white font-bold bg-[#ffa41f]">
                            Review
                          </button>
                        )}
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <ReviewModal customStyles={customStyles} openModal={handleReview} closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </div>
  );
};

export default PaymentHistory;
