import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Page_title from "../../shared/page_title/Page_title";
import SingleFood from "./SingleFood";
import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../shared/Loadiing";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"

const All_food = () => {
  const [totalFood, setTotalFood] = useState(null);
  const [curentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    fetch("http://localhost:5000/all_foods_lenth")
      .then((res) => res.json())
      .then((data) => setTotalFood(data.result));
  }, []);

  const [itemPerPage, setItemPerPage] = useState(9);

  const pages = Math.ceil(totalFood / itemPerPage);

  const pagination = [...new Array(pages).keys()];

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData", curentPage],
    queryFn: () =>
      fetch(`http://localhost:5000/all_foods?size=${itemPerPage}&page=${curentPage}`).then((res) => res.json()),
  });

  const handlePreveus = () => {
    if(curentPage>0) {
      setCurrentPage(curentPage - 1)
    }
  }

  const activeStyle = {
    backgroundColor: "skyblue",
    color: "yellow"
  }

  const handleNext = () => {
    if(pagination.length - 1 > curentPage) {
      setCurrentPage(curentPage + 1)
    }
  }

  if (isPending) {
    return <Loadiing />;
  }

  return (
    <div>
      <Page_title>All Food</Page_title>
      <div className="grid mt-16 grid-cols-4">
        <div>filter</div>
        <div className="grid grid-cols-3 gap-3 col-span-3">
          {data?.map((food) => (
            <SingleFood key={food._id} food={food} />
          ))}
        </div>
      </div>

      <div className="flex mt-6 mb-10 justify-center">
        <button onClick={handlePreveus} className="btn btn-circle"><BsArrowLeft /></button>
        {pagination.map((item, index) => (
          <button key={index} onClick={() => setCurrentPage(item)} style={item == curentPage ? activeStyle : {}} className="btn">{item}</button>
        ))}
        <button onClick={handleNext} className="btn btn-circle"><BsArrowRight /></button>
      </div>
    </div>
  );
};

export default All_food;
