import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Loadding from "../../shared/Loadiing";
import Page_title from "../../shared/page_title/Page_title";
import Single_Oder_Row from "./Single_Oder_Row";
import { authContext } from "../../providers/AuthProvaider";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const My_oder_food = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();

  const { isPending, data, refetch } = useQuery({
    queryKey: ["repoData", "ders", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my_oder_food?email=${user?.email}`);
      return res;
    },
  });

  console.log(data);

  if (isPending) {
    return <Loadding />;
  }

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

  return (
    <div>
      <Page_title>My Oder Food Items</Page_title>

      <Helmet>
        <meta charSet="utf-8" />
        <title>My Oder Food</title>
      </Helmet>

      {data?.data?.length < 1 ? (
        <p className="text-3xl font-semibold text-center text-[#ffa41f] my-6">
          You have no orders
        </p>
      ) : (
        ""
      )}

      {data.data.length > 0 && (
        <div className="mt-10 p-16">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((food) => (
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
  );
};

export default My_oder_food;
