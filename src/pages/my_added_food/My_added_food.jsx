import React, { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import Loadding from "../../shared/Loadiing";
import { useQuery } from "@tanstack/react-query";
import Page_title from "../../shared/page_title/Page_title"
import Single_food_item from "./Single_food_item";

const My_added_food = () => {
  const { user } = useContext(authContext);

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`http://localhost:5000/my_added_food?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });

  if (isPending) {
    return <Loadding />;
  }

  return (
    <div className="border-2">
      <div>
        <Page_title>My Added Food Items</Page_title>
      </div>

      <div className="grid p-16 gap-4 md:grid-cols-2 mt-10">
        {
          data.map((food) => <Single_food_item key={food._id} food={food} />)
        }
      </div>
    </div>
  )
};

export default My_added_food;
