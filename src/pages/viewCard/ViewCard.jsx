import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import Loadiing from "../../shared/Loadiing";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Page_title from "../../shared/page_title/Page_title";
import Single_Oder_Row from "../my_oder_food/Single_Oder_Row";
import Swal from "sweetalert2";

const ViewCard = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();

  const { isPending, data: myCard , refetch} = useQuery({
    queryKey: ["myCardall"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myCard/${user?.email}`);
      return res?.data;
    },
  });

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
            refetch()
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

      <div>
        {myCard?.length > 0 && (
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
    </div>
  );
};

export default ViewCard;
