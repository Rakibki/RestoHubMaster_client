import React, { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import Loadding from "../../shared/Loadiing";
import { useQuery } from "@tanstack/react-query";
import Page_title from "../../shared/page_title/Page_title";
import Single_food_item from "./Single_food_item";
import axios from "axios";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const My_added_food = () => {
  const { user } = useContext(authContext);

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get(`http://localhost:5000/my_added_food?email=${user?.email}`, {withCredentials: true})
        .then((res) => res.json()),
  });

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
        axios
          .delete(`http://localhost:5000/my_food_delete/${id}`)
          .then((res) => {
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

      {data.length < 1 && (
        <p className="text-3xl font-semibold text-center text-[#ffa41f] my-6">
          You have no added food
        </p>
      )}

      <div className="grid lg:p-16 md:p-6 p-16 gap-4 md:grid-cols-2 mt-10">
        {data.map((food) => (
          <Single_food_item
            handleDlete={handleDlete}
            key={food._id}
            food={food}
          />
        ))}
      </div>
    </div>
  );
};

export default My_added_food;
