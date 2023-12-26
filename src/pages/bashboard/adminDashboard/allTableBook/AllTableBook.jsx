import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";
import { MdOutlineClose } from "react-icons/md";

const AllTableBook = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["ManageTable"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/ManageTable`);
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;

  const handleDlete = (id) => {
    alert(id);
  };

  return (
    <div className="px-10">
      <div className="flex mb-4 items-center justify-between">
        <div className="flex mt-10 gap-3">
          <div className="w-2 h-8 bg-[#ffa41f]"></div>
          <h1 className="text-3xl font-semibold">Order History</h1>
        </div>
        <div>
          <button
            type="submit"
            className="px-5 py-2 mt-4 bg-[#ffa41f] transition-all  text-white font-bold hover:opacity-80"
          >
            Add Food
          </button>
        </div>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Oder Number</th>
            <th>guests</th>
            <th>date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr className="border-2" key={item?._id}>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.oderNumber}</td>
                <td>{item?.guests}</td>
                <td>{item?.date}</td>
                <td>{item?.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllTableBook;
