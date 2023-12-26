import { useContext, useState } from "react";
import GetUserByEmail from "../../hooks/GetUserByEmail";
import { authContext } from "../../providers/AuthProvaider";
import { BsThreeDots } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { user: currentUser } = useContext(authContext);

  GetUserByEmail().then((res) => {
    setUser(res);
  });

  return (
    <div className="bg-[#f5f6f6] flex justify-center items-center h-screen">
      <div className="w-[50%] shadow-2xl relative p-6 rounded-xl bg-white">
        <BsThreeDots className="absolute left-4 top-4 text-2xl" />
        <FiPlus className="absolute right-4 top-4 text-2xl" />

        <div className="mt-6">
          <div className="w-24 relative mx-auto">
            <img className="rounded-full" src={currentUser?.photoURL} alt="" />
            <FaRegEdit className="absolute text-2xl text-[#ffa41f] right-2 bottom-2" />
          </div>
          <h1 className="text-2xl text-center mt-3">
            {currentUser?.displayName}
          </h1>
          <h1 className="text-base text-[#978ea8] text-center">
            {currentUser?.email}
          </h1>
          <h1 className="text-base mt-2 text-center">Role: {user?.role}</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
