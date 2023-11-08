import React, { useContext } from "react";
import Page_title from "../../shared/page_title/Page_title";
import login from "../../assets/images/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../providers/AuthProvaider";
import loginimg from "../../assets/images/login.jpg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";

const Login = () => {
  const { loginUser, loginWithGoogle, loginWithGithub } =
    useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => {
        console.log("login User");
        navigate(location.state ? location.state : "/");
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <Page_title>SIGN IN Now</Page_title>

      <div className="flex w-full md:w-[80%] gap-4 md:gap-6 mx-auto my-16 h-[450px] border-2">
        <div className="md:w-[40%] w-[60%] relative">
          <img className="absolute top-0 w-full h-full" src={loginimg} alt="" />

          <div className="absolute text-white md:p-6 top-0 w-full h-full bg-[#000000a6]">
            <h2 className="text-center font-bold text-3xl">SIGN IN</h2>
            <div className="w-16 mb-10 bg-[#ffa41f] mt-3 h-1 mx-auto"></div>
            <p className="text-center font-medium">
              If you have an account already? So{" "}
              <span className="text-[#ffa41f] font-semibold">Login Now</span>{" "}
              And start ad posting less than a mintue
            </p>

            <div className="mt-10">
              <h1 className="text-center mb-6 font-bold text-xl md:text-2xl">
                LOGIN VIA SOCIAL ACCOUNTS
              </h1>

              <div className="flex mt-3 gap-2 cursor-pointer justify-center bg-[#4e71a7] items-center text-base p-2">
                <div
                  onClick={handleFacebook}
                  className="flex items-center gap-3"
                >
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

        <div className="w-[60%] ">
          <form onSubmit={handleLogin} className="card-body">
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
                type="password"
                placeholder="password"
                className="input rounded-none input-bordered"
                required
                name="password"
              />
            </div>

            <div className="flex my-2 justify-end">
              <div>
                <p className="hover:underline cursor-pointer text-sm">
                  Forget Password
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-5 py-2 mt-4 bg-[#ffa41f] transition-all  text-white font-bold hover:opacity-80"
              >
                SING IN
              </button>
            </div>
            <Link to={"/register"}>
              <p className="mt-3 transition-all hover:underline cursor-pointer hover:text-[#ffa41f]">
                Register account
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
