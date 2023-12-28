import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import Loadiing from "../../shared/Loadiing";
import { AiOutlineClose } from "react-icons/ai";
import Page_title from "../../shared/page_title/Page_title";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import swal from "sweetalert"

const MyBookTable = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure()

  const { isPending, data, refetch } = useQuery({
    queryKey: ["myBookTable"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myBookTable/${user?.email}`);
      return res?.data;
    },
  });

  if (isPending) {
    return <Loadiing />;
  }

  const handleTahleDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete the food?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.delete(`/table/${id}`).then((res) => {
          if (res.data?.deletedCount > 0) {
            refetch();
            swal("Deleted successfully", {
              icon: "success",
            });
          }
        });
      }
    });
  }


  return (
    <div>
      <Page_title>Table Book history</Page_title>
      {data.length > 0 && (
        <div className="mt-10 p-16">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-white">
                <tr>
                  <th>Date</th>
                  <th>TIme</th>
                  <th>Oder Number</th>
                  <th>Guests</th>
                  <th>Reservation By</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((food) => {
                  return (
                    <tr key={food._id} className="border-2 border-white">
                      <td>
                        {food.date}
                      </td>
                      <td>
                        {food.time}
                      </td>
                      <td>
                        {food?.oderNumber}
                      </td>
                      <td>
                        {food?.guests}
                      </td>
                      <td>
                        {food?.name}
                      </td>
                      <th>
                        <button
                          onClick={() => handleTahleDelete(food._id)}
                          className="p-4 text-white font-bold bg-[#ffa41f]"
                        >
                          <AiOutlineClose />
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
    </div>
  );
};

export default MyBookTable;
