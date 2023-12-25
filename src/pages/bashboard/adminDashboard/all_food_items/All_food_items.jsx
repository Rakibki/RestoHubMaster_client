import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../../../shared/Loadiing";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import FoodRow from "./FoodRow";
import swal from "sweetalert";
import EditFoodModal from "../../../../components/modals/editFoodModal/EditFoodModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const All_food_items = () => {
  const axiosSecure = useAxiosSecure();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [foodId, setFoodId] = useState(null);

  function openModal(id) {
    setIsOpen(true);
    setFoodId(id);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { isPending, data, refetch } = useQuery({
    queryKey: ["all-foods"],
    queryFn: async () => {
      const res = await axiosSecure.get("/foods");
      return res?.data;
    },
  });

  if (isPending) {
    return <Loadiing />;
  }

  const handleDeleteFood = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete the food?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.delete(`/food-delete/${id}`).then((res) => {
          if (res.data?.deletedCount > 0) {
            refetch();
            swal("Deleted successfully", {
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex px-10 items-center justify-between">
        <div className="flex mt-10 gap-3">
          <div className="w-2 h-8 bg-[#ffa41f]"></div>
          <h1 className="text-3xl font-semibold">Order History</h1>
        </div>
        <div>
          <Link to={"/dashboard/add_food"}>
            <button
              type="submit"
              className="px-5 py-2 mt-4 bg-[#ffa41f] transition-all  text-white font-bold hover:opacity-80"
            >
              Add Food
            </button>
          </Link>
        </div>
      </div>

      {data.length > 0 && (
        <div className="mt-10 px-8 pb-16">
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
                  <FoodRow
                    handleDeleteFood={handleDeleteFood}
                    handleFoodEdit={openModal}
                    food={food}
                    key={food._id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <EditFoodModal
        foodId={foodId}
        customStyles={customStyles}
        closeModal={closeModal}
        afterOpenModal={afterOpenModal}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
};

export default All_food_items;
