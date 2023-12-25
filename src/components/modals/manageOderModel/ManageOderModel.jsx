import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import swal from "sweetalert"

const ManageOderModel = ({
  deliveryMan,
  openModal,
  modalIsOpen,
  afterOpenModal,
  closeModal,
  customStyles,
  selectOderId,
  refetch
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDeliverManId, setSelectedDeliverManId] = useState(null);
  const axiosSecure = useAxiosSecure();
  const date = new Date(startDate).toDateString()

  const handleSelect = async () => {
    const res = await axiosSecure.put(`/selectDelivaryMan?selectedDeliverManId=${selectedDeliverManId}&selectOderId=${selectOderId}&date=${date}`)
    if(res?.data){
      refetch()
      swal("Successfully selected delivery man", {
        icon: "success",
      });
      closeModal()
    }
  };


  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="">
          <h1 className="text-2xl mb-3">Select a delivery man...</h1>

          <select
            onChange={(e) => setSelectedDeliverManId(e.target.value)}
            className="input w-full rounded-none input-bordered"
            name="role"
          >
            <option disabled selected value="">
              Select
            </option>
            {deliveryMan?.map((delivaryMan) => {
              return (
                <option key={delivaryMan?._id} value={delivaryMan?._id}>
                  {delivaryMan?.name}
                </option>
              );
            })}
          </select>
          <DatePicker
            className="input mt-3 w-full rounded-none input-bordered"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="flex mt-3 justify-center">
          <div className="flex gap-2">
            <button
              onClick={() => handleSelect()}
              className="px-4 py-2 text-white font-bold bg-[#ffa41f]"
            >
              Select
            </button>
            <button
              className="px-4 text-[#ffa41f] py-2 border-[2px] border-[#ffa41f]"
              onClick={closeModal}
            >
              close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageOderModel;
