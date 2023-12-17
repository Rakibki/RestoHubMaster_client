import { useEffect, useState } from "react";
import GetUserByEmail from "../../hooks/GetUserByEmail";

const Profile = () => {
  const [user, setUser] = useState(null);

    GetUserByEmail().then((res) => {
      setUser(res);
    });

  console.log(user);

  return <div>Profile</div>;
};

export default Profile;
