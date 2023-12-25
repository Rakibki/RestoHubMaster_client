import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../../../shared/Loadiing";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AiOutlineClose } from "react-icons/ai";
import swal from "sweetalert";
import ManageOderModel from "../../../../components/modals/manageOderModel/ManageOderModel";
import { useEffect, useState } from "react";

const Oders = () => {
  const axiosSecure = useAxiosSecure();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectOderId, setSeletOderId] = useState(null);
  const [filterText, setFilterText] = useState("all");
  const [data, setData] = useState([]);

  const openModal = (id) => {
    setIsOpen(true);
    setSeletOderId(id);
  };

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

  const { isPending: isPending2, data: deliveryMan } = useQuery({
    queryKey: ["AllDelivaryMan"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/AllDelivaryMan`);
      return res?.data;
    },
  });

  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const {
    isPending,
    data: oders,
    refetch,
  } = useQuery({
    queryKey: ["Alloders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allOders`);
      setData(res?.data);
      return res?.data;
    },
  });

  if ((isPending, isPending2)) <Loadiing />;

  useEffect(() => {
    if (filterText == "all") {
      setData(oders);
    } else if (filterText == "canceled") {
      const filterData = oders.filter((item) => item?.status === "canceled");
      setData(filterData);
    } else if (filterText == "padding") {
      const filterData = oders.filter((item) => item?.status === "padding");
      setData(filterData);
    } else if (filterText == "On The Way") {
      const filterData = oders.filter((item) => item?.status === "On The Way");
      setData(filterData);
    } else if (filterText == "diliverd") {
      const filterData = oders.filter((item) => item?.status === "diliverd");
      setData(filterData);
    }
  }, [filterText]);

  const handleOderDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete the food?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.delete(`/oder/${id}`).then((res) => {
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
      <div className="px-6 flex justify-between">
        <div className="flex mb-4 ml-10 mt-10 gap-3">
          <div className="w-2 h-8 bg-[#ffa41f]"></div>
          <h1 className="text-3xl font-semibold">Order History</h1>
        </div>
        <div className="flex items-center gap-2">
          <h2>Sort By:</h2>
          <select
            onChange={(e) => setFilterText(e?.target?.value)}
            className="input rounded-none input-bordered"
            name=""
            id=""
          >
            <option value="all">All</option>
            <option value="OnTheWay">On The Way</option>
            <option value="padding">padding</option>
            <option value="canceled">canceled</option>
            <option value="diliverd">diliverd</option>
          </select>
        </div>
      </div>

      {data?.length < 1 ? (
        <p className="text-3xl font-semibold text-center text-[#ffa41f] my-6">
          You have no orders
        </p>
      ) : (
        ""
      )}

      {data?.length > 0 && (
        <div className=" px-16">
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
                        <p>${food?.totalPrice}</p>
                      </td>
                      <td>
                        <p>{food?.date}</p>
                      </td>
                      <td>
                        <p>{food?.time}</p>
                      </td>
                      <td>
                        <p className={` ${food?.status=='OnTheWay'&& 'text-[#4579b4] bg-[#a5b1e4]'} ${food?.status=='diliverd'&& 'text-[#22c55e] bg-[#d2f4df]'} ${food?.status==='canceled' && "text-[#ef4444] bg-[#fcd9d9]"} ${food?.status==='padding' && "text-[#f59e0b] bg-[#fdecce]"} px-3 py-2 font-medium text-center rounded-2xl`}>{food?.status}</p>
                      </td>
                      <td>
                        <p>{food?.trangectionId?.slice(0, 5)}...</p>
                      </td>

                      <th className="flex items-center gap-2">
                        <button
                          onClick={() => handleOderDelete(food?._id)}
                          className="px-4 py-2 text-white font-bold bg-[#ffa41f]"
                        >
                          <AiOutlineClose />
                        </button>
                        <button
                          onClick={() => openModal(food?._id)}
                          className="px-4 py-2 text-white font-bold bg-[#ffa41f]"
                        >
                          Manage
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <ManageOderModel
        customStyles={customStyles}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        openModal={openModal}
        deliveryMan={deliveryMan}
        selectOderId={selectOderId}
        refetch={refetch}
      />
    </div>
  );
};

export default Oders;
