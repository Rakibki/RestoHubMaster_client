import { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import Loadding from "../../shared/Loadiing";
import { useQuery } from "@tanstack/react-query";
import Page_title from "../../shared/page_title/Page_title";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Rate } from "antd";
import { MdOutlineClose } from "react-icons/md";

const My_added_food = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();

  const { isPending, data, refetch } = useQuery({
    queryKey: ["repoData", "my-added-food"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my_added_food?email=${user?.email}`);
      return res;
    },
  });

  console.log(data);

  if (isPending) {
    return <Loadding />;
  }

  const handleDlete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete the food?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.delete(`/my_food_delete/${id}`).then((res) => {
          console.log(res);
          refetch();
        });
        swal("Deleted successfully", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="border-2">
      <div>
        <Page_title>My Added Food Items</Page_title>
      </div>

      <Helmet>
        <meta charSet="utf-8" />
        <title>My Added Food</title>
      </Helmet>

      {data.data.length < 1 && (
        <p className="text-3xl font-semibold text-center text-[#ffa41f] my-6">
          You have no added food
        </p>
      )}

      <div className="grid lg:p-16 md:p-6 p-16 gap-4 md:grid-cols-2 mt-10">
        {data?.data?.map((food) => {
          return (
            <div
              key={food?._id}
              className="grid relative border-[1px] rounded-2xl gap-4 grid-cols-5"
            >
              <div className="col-span-2">
                <img className="w-full h-full" src={food.image_URL} alt="" />
              </div>
              <div className="col-span-3">
                <h1 className="text-2xl mt-6 font-medium">{food?.Food_Name}</h1>

                  <h1 className="text-xl mt-2 font-medium">${food?.Price}</h1>
                  <h1 className="mt-2 font-medium">
                    Categoty: {food?.Categoty}
                  </h1>

                <div className="mt-3">
                  <Rate
                    className="text-[#ffa41f] mb-4"
                    disabled
                    defaultValue={food?.ratting}
                  />
                </div>

                <p className="mb-3">Food Origin: {food.Food_Origin}</p>
              </div>

              <div onClick={() => handleDlete(food?._id)} className="absolute top-4 right-4">
                <MdOutlineClose className="text-3xl cursor-pointer" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default My_added_food;
