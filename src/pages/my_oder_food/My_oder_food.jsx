import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Loadding from "../../shared/Loadiing";
import Page_title from "../../shared/page_title/Page_title";
import Single_Oder_Row from "./Single_Oder_Row";
import {authContext} from "../../providers/AuthProvaider"

const My_oder_food = () => {
  const {user} = useContext(authContext)

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`http://localhost:5000/my_oder_food?email=${user?.email}`).then((res) => res.json()),
  });

  if (isPending) {
    return <Loadding />;
  }

  return (
    <div>
      <Page_title>My Oder Food Items</Page_title>

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
              {
                data.map((food) => <Single_Oder_Row key={food?._id} food={food} />)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default My_oder_food;
