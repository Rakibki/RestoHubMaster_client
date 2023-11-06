import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Page_title from "../../shared/page_title/Page_title";
import SingleFood from "./SingleFood";
import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../shared/Loadiing";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const All_food = () => {
  const [totalFood, setTotalFood] = useState(null);
  const [curentPage, setCurrentPage] = useState(0);

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
      fetch(
        `http://localhost:5000/all_foods?size=${itemPerPage}&page=${curentPage}`
      ).then((res) => res.json()),
  });

  const handlePreveus = () => {
    if (curentPage > 0) {
      setCurrentPage(curentPage - 1);
    }
  };

  const activeStyle = {
    backgroundColor: "skyblue",
    color: "yellow",
  };

  const handleNext = () => {
    if (pagination.length - 1 > curentPage) {
      setCurrentPage(curentPage + 1);
    }
  };

  if (isPending) {
    return <Loadiing />;
  }

  return (
    <div>
      <Page_title>All Food</Page_title>
      <div className=" mt-16">
        <div className="flex gap-6 mb-6 justify-center">
            <div className="flex gap-1"><h2>Sort By:</h2>
              <select name="" id="">
                <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                <option value="Alphabetically, A-Z">Alphabetically, Z-A</option>
                <option value="Price, low to high">Price, low to high</option>
                <option value="Price, low to high">Price, high to low</option>
              </select>
            </div>
           
            <div className="flex gap-1"><h2>Show:</h2>
              <select name="" id="">
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
              </select>
            </div>

            <div>
              <input type="text" placeholder="serch" />
            </div>
        </div>
        <div className="grid grid-cols-4">
          <div>filter</div>
          <div className="grid grid-cols-3 gap-3 col-span-3">
            {data?.map((food) => (
              <SingleFood key={food._id} food={food} />
            ))}
          </div>
        </div>
      </div>

      {/* pagination */}
      <div className="flex mt-6 mb-10 justify-center">
        <button onClick={handlePreveus} className="btn btn-circle">
          <BsArrowLeft />
        </button>
        {pagination.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(item)}
            style={item == curentPage ? activeStyle : {}}
            className="btn"
          >
            {item}
          </button>
        ))}
        <button onClick={handleNext} className="btn btn-circle">
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default All_food;
