import React from "react";
import Page_title from "../../shared/page_title/Page_title";
import login from "../../assets/images/login.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    console.log(name, email, photo, password);
   
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
