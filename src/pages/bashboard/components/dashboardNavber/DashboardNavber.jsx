import { useContext, useState } from "react";
import { authContext } from "../../../../providers/AuthProvaider";
import GetRole from "../../../../hooks/GetRole";
import { IoIosSearch } from "react-icons/io";

const DashboardNavber = () => {
  const { user } = useContext(authContext);
  const [role, setRole] = useState(null);

  GetRole().then((res) => setRole(res?.role));

  return (
    <div className="w-full py-2 flex justify-between">
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
      <div className="flex items-center">
        <div className="w-[45px] overflow-hidden h-[45px]">
          <img
            className="w-full h-full rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </div>
        <div className="flex ml-2 flex-col">
          <h2 className="">{user?.displayName}</h2>
          <h2 className="text-[#838fa2] text-sm">{role}</h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavber;
