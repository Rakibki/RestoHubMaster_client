import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";
import CustomerRow from "./CustomerRow";
import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

const Customer = () => {
  const axiosSecure = useAxiosSecure();

  const [totalCustomer, setTotalCustomer] = useState(null);
  const [itemPerPage, setItemPerPage] = useState(9);
  const pages = Math.ceil(totalCustomer / itemPerPage);
  const pagination = [...new Array(pages).keys()];
  const [curentPage, setCurrentPage] = useState(0);

  const activeStyle = {
    backgroundColor: "#ffa41f",
    color: "yellow",
  };

  const handleChage = (e) => {
    setItemPerPage(parseInt(e.target.value));
  };

  useEffect(() => {
    axiosSecure.get("/all_Customer").then((res) => {
      setTotalCustomer(res?.data?.result);
    });
  });

  const handlePreveus = () => {
    if (curentPage > 0) {
      setCurrentPage(curentPage - 1);
    }
  };

  const handleNext = () => {
    if (pagination.length - 1 > curentPage) {
      setCurrentPage(curentPage + 1);
    }
  };

  const { isPending, data } = useQuery({
    queryKey: ["all-customers"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/customers?size=${itemPerPage}&page=${curentPage}`
      );
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;

  return (
    <div className="mt-10">
      <div className="flex mb-4 px-10 items-center justify-between">
        <div className="flex gap-3">
          <div className="w-2 h-8 bg-[#ffa41f]"></div>
          <h1 className="text-3xl font-semibold">Customers List</h1>
        </div>
        <div>
          <button
            type="submit"
            className="px-5 py-2 mt-4 bg-[#ffa41f] transition-all  text-white font-bold hover:opacity-80"
          >
            Add A New Customer
          </button>
        </div>
      </div>

      <div className="flex mt-10 items-center px-10 justify-between">
        <div className="flex border-[1px] bg-[#f8fafc] border-[#ffa41f] p-2 gap-1">
          <h2>Show:</h2>
          <select className="outline-none" onChange={handleChage} name="" id="">
            <option value="9">9</option>
            <option value="6">6</option>
            <option value="12">12</option>
          </select>
        </div>
        <div className="flex gap-3 relative items-center">
          <input
            type="text"
            placeholder="Search For Items"
            className="rounded-full bg-[#f8fafc] border-[1px] border-[#e4e9f1] outline-[#ffa41f] text-[#6b7280] placeholder:text-[#6b7280] p-2.5 px-6"
            required
            name="password"
          />
          <div className="absolute right-4 top-[25%]">
            <IoIosSearch className="text-2xl text-[#6b7280] right-2" />
          </div>
        </div>
      </div>

      {data?.length > 0 && (
        <div className="px-10 mt-2">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-white">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Orders</th>
                  <th>Order Total</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((customer) => (
                  <CustomerRow customer={customer} key={customer._id} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <div>
              <div className="flex mt-6 mb-10 justify-center">
                <button
                  onClick={handlePreveus}
                  className="btn hover:bg-[#ffa41f] bg-white hover:text-white mr-2 btn-circle"
                >
                  <BsArrowLeft />
                </button>
                {pagination.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(item)}
                    style={item == curentPage ? activeStyle : {}}
                    className="btn bg-white mr-2"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={handleNext}
                  className="btn hover:bg-[#ffa41f] bg-white hover:text-white btn-circle"
                >
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer;
