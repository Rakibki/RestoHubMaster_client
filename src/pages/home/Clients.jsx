import React from "react";
import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.jpg";
import client3 from "../../assets/images/client3.jpg";

const Clients = () => {
  return (
    <div className="border-2 carousel h-screen w-full">
      <div id="slide1" className="carousel-item p-10 relative w-full">
        <div>
          <h1 className="text-lg text-center font-semibold text-[#ffa41f]">Testimonials</h1>
          <p className="text-center mt-4">Our Clients Choose Us</p>

          <div className="flex mt-10 justify-center">
            <img className="rounded-full" src={client1} alt="" />
          </div>
          <p className="text-center mt-6">John Doe</p>
          <p className="text-sm mt-4 text-center text-slate-600">Regular Customer</p>

          <div className="flex mt-6 mb-4 justify-center">*****</div>
          <div className="w-[70%] mx-auto">
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis Risus commodo viverra maec
            </p>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Clients;
