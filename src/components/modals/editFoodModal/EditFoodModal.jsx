import Modal from "react-modal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loadiing from "../../../shared/Loadiing";
import { useQuery } from "@tanstack/react-query";

const EditFoodModal = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  customStyles,
  foodId,
}) => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["foodEdit"],
    enabled: !!foodId,
    queryFn: async () => {
      const res = await axiosSecure.get(`/product_details/${foodId}`);
      return res?.data;
    },
  });

  const handleEdit = async (e) => {
    e.preventDefault();
    const foodInfo = {
      Food_Name: e.target.Food_Name.value,
      Quentity: e.target.Quentity.value,
      Price: e.target.Price.value,
      Categoty: e.target.Categoty.value,
    };
    const res = await axiosSecure.put(`/update-food/${foodId}`, foodInfo)
    console.log(res.data);
  };

  if (isPending) <Loadiing />;

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form
          className="p-6 w-[450px] flex flex-col gap-2"
          onSubmit={handleEdit}
        >
          <input
            name="Food_Name"
            placeholder="Food Name"
            type="text"
            defaultValue={data?.Food_name}
            className="border-[1px] p-3 w-full outline-[#ffa41f]"
          />
          <input
            name="Quentity"
            placeholder="Quentity"
            type="text"
            defaultValue={data?.quectity}
            className="border-[1px] p-3 w-full outline-[#ffa41f]"
          />

          <input
            name="Price"
            defaultValue={data?.Price}
            placeholder="Price"
            type="text"
            className="border-[1px] p-3 w-full outline-[#ffa41f] "
          />

          <select
            placeholder="Categoty"
            defaultValue={data?.category}
            type="text"
            className="border-[1px] p-3 w-full outline-[#ffa41f]"
            name="Categoty"
            id=""
          >
            <option value="">Gategory</option>
            <option value="Desserts ">Desserts</option>
            <option value="Appetizers">Appetizers</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Family Dishes">Family Dishes</option>
          </select>
          <div className="mt-6 mx-auto flex gap-2 ">
            <button
              type="submit"
              className="bg-[#ffa41f] hover:opacity-80 font-semibold text-white px-4 py-2"
            >
              Update
            </button>

            <button
              onClick={closeModal}
              className="bg-[#ffa41f] hover:opacity-80  font-semibold text-white px-4 py-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditFoodModal;
