import { useContext, useState } from "react";
import GetUserByEmail from "../../hooks/GetUserByEmail";
import { authContext } from "../../providers/AuthProvaider";

const Profile = () => {
  const [user, setUser] = useState(null);
  const {user:currentUser} = useContext(authContext)


    GetUserByEmail().then((res) => {
      setUser(res);
    });


  return <div>
    {/* <Cover /> */}
  </div>;
};

export default Profile;
