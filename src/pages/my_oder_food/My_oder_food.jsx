import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Loadding from "../../shared/Loadiing";
import Page_title from "../../shared/page_title/Page_title";
import Single_Oder_Row from "./Single_Oder_Row";
import { authContext } from "../../providers/AuthProvaider";
import axios from "axios";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const My_oder_food = () => {
  const { user } = useContext(authContext);

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get(`http://localhost:5000/my_oder_food?email=${user?.email}`, {
          withCredentials: true,
        })
        .then((res) => res.json()),
  });

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
        axios
          .delete(`http://localhost:5000/my_Oder_food_delete/${id}`)
          .then((res) => {
            console.log(res);
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

      {data.length < 1 && (
        <p className="text-3xl font-semibold text-center text-[#ffa41f] my-6">
          You have no orders
        </p>
      )}

      {data.length > 0 && (
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
                {data.map((food) => (
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
