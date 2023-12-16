import { useEffect, useState } from "react";
import Page_title from "../../shared/page_title/Page_title";
import SingleFood from "./SingleFood";
import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../shared/Loadiing";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Helmet } from "react-helmet";
import useAxios from "../../hooks/useAxios";

const All_food = () => {
  const [totalFood, setTotalFood] = useState(null);
  const [curentPage, setCurrentPage] = useState(0);
  const [sort, setSort] = useState("desc");
  const [searchValue, setSearchValue] = useState("");
  const [priceSotting, setPriceSotting] = useState({ max: "", min: "" });
  const Axios = useAxios();

  useEffect(() => {
    Axios.get("/all_foods_lenth")
    .then((res) => {
      setTotalFood(res?.data?.result)
    })
  },)

  const [itemPerPage, setItemPerPage] = useState(9);
  const pages = Math.ceil(totalFood / itemPerPage);
  const pagination = [...new Array(pages).keys()];

  const { isPending, data, refetch } = useQuery({
    queryKey: ["repoData", curentPage, itemPerPage, sort],
    queryFn: async () => {
      const res = await Axios.get(`/all_foods?size=${itemPerPage}&page=${curentPage}&sort=${sort}&searchValue=${searchValue}&minValue=${priceSotting.min}&maxvalue=${priceSotting.max}`
      );
      return res?.data
    },
  });

  const handlePreveus = () => {
    if (curentPage > 0) {
      setCurrentPage(curentPage - 1);
    }
  };

  const activeStyle = {
    backgroundColor: "#ffa41f",
    color: "yellow",
  };

  const handleNext = () => {
    if (pagination.length - 1 > curentPage) {
      setCurrentPage(curentPage + 1);
    }
  };

  const handleSerch = () => {
    refetch();
  };

  const handleChage = (e) => {
    setItemPerPage(parseInt(e.target.value));
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  if (isPending) {
    return <Loadiing />;
  }

  const handlePriceSort = (e) => {
    setPriceSotting({
      ...priceSotting,
      [e.target.name]: e.target.value,
    });
  };

  const handlePriceFilter = () => {
    refetch();
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Food</title>
      </Helmet>
      <Page_title>All Food</Page_title>
      <div className=" p-16 md:p-3 mt-16">
        <div className="flex gap-6 mb-6 justify-center">
          <div className="flex border-[1px] border-[#ffa41f] p-2 gap-1">
            <h2>Sort By:</h2>
            <select
              onChange={handleSortChange}
              className="outline-none"
              name=""
              id=""
            >
              {/* <option value="Alphabetically, A-Z">Alphabetically, A-Z</option> */}
              {/* <option value="Alphabetically, A-Z">Alphabetically, Z-A</option> */}
              <option value="desc">high to low</option>
              <option value="asc">low to high</option>
            </select>
          </div>

          <div className="flex border-[1px] border-[#ffa41f] p-2 gap-1">
            <h2>Show:</h2>
            <select
              className="outline-none"
              onChange={handleChage}
              name=""
              id=""
            >
              <option value="9">9</option>
              <option value="6">6</option>
              <option value="12">12</option>
            </select>
          </div>

          <div className="flex gap-1">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              className="border-[1px] border-[#ffa41f] p-2 outline-none"
              placeholder="Search Category"
            />
            <button
              onClick={handleSerch}
              className="px-6 py-[9px] hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white"
            >
              Search
            </button>
          </div>
        </div>
        <div className="md:grid grid-cols-4">
          <div className="p-4">
            {/* filter */}

            <h2 className="text-2xl font-medium mb-2">Price</h2>
            <span className="border-[1px] p-1 rounded-lg">selected</span>

            <div className="grid p-4 border-2 gap-3 items-start grid-cols-3">
              <div className="flex border-[1px] items-center">
                <h2>$</h2>
                <input
                  name="min"
                  onChange={handlePriceSort}
                  type="number"
                  className=" outline-none p-1"
                  placeholder="1"
                />
              </div>
              <div className="mx-auto">From</div>
              <div className="flex border-[1px] items-center gap-1">
                <h2>$</h2>
                <input
                  onChange={handlePriceSort}
                  type="number"
                  className=" outline-none p-1"
                  placeholder="1"
                  name="max"
                />
              </div>
            </div>
            <div>
              <button
                onClick={handlePriceFilter}
                className="px-6 py-2 w-full rounded-lg mt-2 hover:opacity-80 bg-[#ffa41f] border-none font-semibold outline-none text-white"
              >
                Filter
              </button>
            </div>
          </div>
          <div className="grid z-20 md:grid-cols-2 lg:grid-cols-3 gap-3 col-span-3">
              {data.length > 0 && data?.map((food) => <SingleFood key={food._id} food={food} />)}
          </div>
        </div>
      </div>

      {/* pagination */}
      <div className="flex mt-6 mb-10 justify-center">
        <button
          onClick={handlePreveus}
          className="btn hover:bg-[#ffa41f] hover:text-white mr-2 btn-circle"
        >
          <BsArrowLeft />
        </button>
        {pagination.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(item)}
            style={item == curentPage ? activeStyle : {}}
            className="btn mr-2"
          >
            {item}
          </button>
        ))}
        <button
          onClick={handleNext}
          className="btn hover:bg-[#ffa41f] hover:text-white btn-circle"
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default All_food;
