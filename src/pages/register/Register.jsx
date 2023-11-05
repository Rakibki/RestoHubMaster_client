import React, { useContext } from "react";
import Page_title from "../../shared/page_title/Page_title";
import login from "../../assets/images/login.jpg";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/AuthProvaider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.confic";

const Register = () => {
  const { createUser } = useContext(authContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((res) => {
        console.log("create User");

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <Page_title>Register Now</Page_title>

      <div className="flex">
        <div className="flex-1">
          <img src={login} alt="" />
        </div>
        <div className="flex-1">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name*"
                className="input rounded-none input-bordered"
                required
                name="name"
              />
            </div>

            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                className="input rounded-none input-bordered"
                required
                name="email"
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="Photo"
                className="input rounded-none input-bordered"
                required
                name="photo"
              />
            </div>

            <div className="form-control">
              <input
                type="password"
                placeholder="password"
                className="input rounded-none input-bordered"
                required
                name="password"
              />
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-5 py-2 mt-4 w-full bg-[#ffa41f] transition-all  text-white font-medium hover:opacity-80"
                >
                  Register
                </button>
              </div>
              <Link to={"/login"}>
                <p className="mt-3 transition-all hover:underline cursor-pointer hover:text-[#ffa41f]">
                  Login account
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
