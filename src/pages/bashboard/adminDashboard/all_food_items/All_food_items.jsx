import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../../../shared/Loadiing";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import FoodRow from "./FoodRow";
import swal from "sweetalert";
import EditFoodModal from "../../../../components/modals/editFoodModal/EditFoodModal";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const All_food_items = () => {
  const axiosSecure = useAxiosSecure();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [foodId, setFoodId] = useState(null);

  const [totalFood, setTotalFood] = useState(null);
  const [itemPerPage, setItemPerPage] = useState(9);
  const pages = Math.ceil(totalFood / itemPerPage);
  const pagination = [...new Array(pages).keys()];
  const [curentPage, setCurrentPage] = useState(0);

  const activeStyle = {
    backgroundColor: "#ffa41f",
    color: "yellow",
  };

  useEffect(() => {
    axiosSecure.get("/all_foods_lenth").then((res) => {
      setTotalFood(res?.data?.result);
    });
  });

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

  const handlePreveus = () => {
    if (curentPage > 0) {
      setCurrentPage(curentPage - 1);
    }
  };


  function closeModal() {
    setIsOpen(false);
  }

    const handleNext = () => {
    if (pagination.length - 1 > curentPage) {
      setCurrentPage(curentPage + 1);
    }
  };


  const { isPending, data, refetch } = useQuery({
    queryKey: ["all-foods"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/foods?size=${itemPerPage}&page=${curentPage}`);
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

  const handleChage = (e) => {
    setItemPerPage(parseInt(e.target.value));
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

      <div className="flex mt-10 items-center px-10 justify-between">
        <div className="flex border-[1px] bg-[#f8fafc] border-[#ffa41f] p-2 gap-1">
          <h2>Show:</h2>
          <select className="outline-none" onChange={handleChage} name="" id="">
            <option value="9">9</option>
            <option value="6">6</option>
            <option value="12">12</option>
          </select>
        </div>
        <div className="flex gap-3 relative items-center">
          <input
            type="text"
            placeholder="Search For Items"
            className="rounded-full bg-[#f8fafc] border-[1px] border-[#e4e9f1] outline-[#ffa41f] text-[#6b7280] placeholder:text-[#6b7280] p-2.5 px-6"
            required
            name="password"
          />
          <div className="absolute right-4 top-[25%]">
            <IoIosSearch className="text-2xl text-[#6b7280] right-2" />
          </div>
        </div>
      </div>

      {data.length > 0 && (
        <div className="mt-2 px-8 pb-16">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-white">
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
            <div className="flex justify-end">
              <div>
                <div className="flex mt-6 mb-10 justify-center">
                  <button
                    onClick={handlePreveus}
                    className="btn hover:bg-[#ffa41f] hover:text-white bg-white mr-2 btn-circle"
                  >
                    <BsArrowLeft />
                  </button>
                  {pagination.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(item)}
                      style={item == curentPage ? activeStyle : {}}
                      className="btn bg-white mr-2"
                    >
                      {item}
                    </button>
                  ))}
                  <button
                    onClick={handleNext}
                    className="btn bg-white hover:bg-[#ffa41f] hover:text-white btn-circle"
                  >
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
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
