import React, { useContext, useState } from "react";
import Page_title from "../../shared/page_title/Page_title";
import login from "../../assets/images/login.jpg";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/AuthProvaider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.confic";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import loginimg from "../../assets/images/login.jpg";
import swal from "sweetalert2";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import UploadeImage from "../../hooks/UploadeImage";

const Register = () => {
  const { createUser, loginWithGoogle, loginWithGithub } =
    useContext(authContext);
  const [error, setError] = useState("");
  const axiosLocal = useAxiosLocal();

  const handleFacebook = () => {
    // alert("facebook");
  };

  const hanldeGoogle = () => {
    loginWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((e) => console.log(e));
  };

  const handleGithub = () => {
    loginWithGithub()
      .then((res) => {
        console.log(res.user);
      })
      .catch((e) => console.log(e));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value;
    const photo = e.target.image.files[0];
    const image = await UploadeImage(photo);

    if (password.length < 6) {
      return setError("It should be at least 6 characters long.");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("It should contain at least one uppercase letter.");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("It should contain at least one uppercase letter.");
    }

    if (!/[!@#$%^&*]/.test(password)) {
      return setError("It should contain at least one special character");
    }

    createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        });
        axiosLocal.post("/users", {
          name: name,
          email: email,
          role: role,
          image: image,
        })
        .then((res) => console.log(res))
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
      });
  };

  return (
    <div>
      <Page_title>Register Now</Page_title>

      <div className="flex w-[80%] gap-6 mx-auto my-16 h-[450px] border-2">
        <div className="w-[40%] relative">
          <img className="absolute top-0 w-full h-full" src={loginimg} alt="" />

          <div className="absolute text-white p-6 top-0 w-full h-full bg-[#000000a6]">
            <h2 className="text-center font-bold text-3xl">SIGN UP</h2>
            <div className="w-16 mb-10 bg-[#ffa41f] mt-3 h-1 mx-auto"></div>
            <p className="text-center font-medium">
              If you have an account already? So{" "}
              <span className="text-[#ffa41f] font-semibold">Login Now</span>{" "}
              And start ad posting less than a mintue
            </p>

            <div className="mt-10">
              <h1 className="text-center mb-6 font-bold text-2xl">
                LOGIN VIA SOCIAL ACCOUNTS
              </h1>

              <div className="flex mt-3 gap-2 cursor-pointer justify-center bg-[#4e71a7] items-center text-base p-2">
                <div className="flex items-center gap-3">
                  <FaFacebookF />
                  <p className="font-semibold">Login with Facebook</p>
                </div>
              </div>

              <div className="flex mt-3 gap-2 cursor-pointer justify-center bg-[#1cb8eb] items-center text-base p-2">
                <div onClick={hanldeGoogle} className="flex items-center gap-3">
                  <AiOutlineGoogle />
                  <p className="font-semibold">Login with Google</p>
                </div>
              </div>

              <div className="flex mt-3 gap-2 cursor-pointer justify-center bg-[#202b3c] items-center text-base p-2">
                <div onClick={handleGithub} className="flex items-center gap-3">
                  <AiFillGithub />
                  <p className="font-semibold">Login with Github</p>
                </div>
              </div>
            </div>
          </div>
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
                placeholder="email*"
                className="input rounded-none input-bordered"
                required
                name="email"
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

              <div className="mt-3 w-[100%]">
                <select
                  className="input w-full rounded-none input-bordered"
                  name="role"
                >
                  <option value="user">User</option>
                  <option value="deliveryMan">Delivery Man</option>
                </select>
              </div>

              <div className="flex mt-3 gap-2 flex-cols-2">
                <div className="w-[50%]">
                  <input
                    name="image"
                    type="file"
                    placeholder="password"
                    required
                  />
                </div>
              </div>

              <p className="text-sm mt-6 text-red-700">{error}</p>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-5 py-2 mt-2 bg-[#ffa41f] transition-all  text-white font-bold hover:opacity-80"
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
