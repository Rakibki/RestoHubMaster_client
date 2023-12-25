import { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UploadeImage from "../../hooks/UploadeImage";

const Add_food = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();

  const handle_Add_food = async (e) => {
    e.preventDefault();
    const imagefile = e.target.image_URL.files[0];
    const image = await UploadeImage(imagefile);

    const food_info = {
      buyer_name: user?.displayName,
      buyer_email: user?.email,
      Food_Name: e.target.Food_Name.value,
      Quentity: e.target.Quentity.value,
      Food_Origin: e.target.Food_Origin.value,
      image_URL: image,
      Categoty: e.target.Categoty.value,
      Price: e.target.Price.value,
      count: 0,
    };

    axiosSecure
      .post("/add_food_item", food_info)
      .then((res) => {
        console.log(res.data);
        new swal("Good..", "Food added successfully", "success");
      })
      .catch((e) => {
        console.log(e?.message);
      });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Food</title>
      </Helmet>

      <div className="flex mb-4 ml-10 mt-10 gap-3">
        <div className="w-2 h-8 bg-[#ffa41f]"></div>
        <h1 className="text-3xl font-semibold">Add A Food </h1>
      </div>
      <div className="flex my-10 p-6 justify-center">
        <div className="w-[90%] mx-auto md:w-[80%] lg:w-[60%] p-4 border-2">
          <form onSubmit={handle_Add_food}>
            <div className="flex gap-3">
              <input
                placeholder="Name"
                defaultValue={user?.displayName}
                disabled
                type="text"
                className="border-[1px] p-3 w-full outline-[#ffa41f]"
              />
              <input
                placeholder="Email"
                defaultValue={user?.email}
                disabled
                type="text"
                className="border-[1px] p-3 w-full outline-[#ffa41f]"
              />
            </div>

            <div className="flex  mt-4 gap-3">
              <input
                name="Food_Name"
                placeholder="Food Name"
                type="text"
                className="border-[1px] p-3 w-full outline-[#ffa41f]"
              />
              <input
                name="Quentity"
                placeholder="Quentity"
                type="text"
                className="border-[1px] p-3 w-full outline-[#ffa41f]"
              />
            </div>

            <div className="flex mt-4 gap-3">
              <input
                name="Food_Origin"
                placeholder="Food Origin"
                type="text"
                className="border-[1px] p-3 w-full outline-[#ffa41f]"
              />
              <input
                name="Price"
                placeholder="Price"
                type="text"
                className="border-[1px] p-3 w-full outline-[#ffa41f] "
              />
            </div>

            <select
              placeholder="Categoty"
              type="text"
              className="border-[1px] p-3 mt-3 w-full outline-[#ffa41f]"
              name="Categoty"
              id=""
            >
              <option value="">Gategory</option>
              <option value="Desserts ">Desserts</option>
              <option value="Appetizers">Appetizers</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Family Dishes">Family Dishes</option>
            </select>
            <input
              name="image_URL"
              placeholder="image URL"
              type="file"
              required
              className="mt-2"
            />
            <button
              type="submit"
              className="bg-[#ffa41f] hover:opacity-80 w-full mt-6 font-semibold text-white px-4 py-2"
            >
              Add Food Item
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add_food;
