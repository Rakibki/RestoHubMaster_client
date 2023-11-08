import React from "react";
import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.jpg";
import client3 from "../../assets/images/client3.jpg";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Clients = () => {
  return (
    <div className="border-2 mt-24 carousel w-full">
      <div id="slide5" className="carousel-item p-10 relative w-full">
        <div>
          <h1 className="text-lg text-center font-semibold text-[#ffa41f]">
            Testimonials
          </h1>
          <p className="text-center mt-4">Our Clients Choose Us</p>

          <div className="flex mt-10 justify-center">
            <img className="rounded-full" src={client1} alt="" />
          </div>
          <p className="text-center mt-6">John Doe</p>
          <p className="text-sm mt-4 text-center text-slate-600">
            Regular Customer
          </p>

          <div className="flex gap-1 text-[#ffa41f] mt-6 mb-4 justify-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="w-[70%] mx-auto">
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis Risus commodo viverra maec
            </p>
          </div>
        </div>

        <div className="absolute flex-col flex gap-3 transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide7" className="btn btn-circle">
            <AiOutlineArrowUp />
          </a>
          <a href="#slide6" className="btn btn-circle">
            <AiOutlineArrowDown />
          </a>
        </div>
      </div>

      <div id="slide6" className="carousel-item p-10 relative w-full">
        <div>
          <h1 className="text-lg text-center font-semibold text-[#ffa41f]">
            Testimonials
          </h1>
          <p className="text-center mt-4">Our Clients Choose Us</p>

          <div className="flex mt-10 justify-center">
            <img className="rounded-full" src={client2} alt="" />
          </div>
          <p className="text-center mt-6">John Doe</p>
          <p className="text-sm mt-4 text-center text-slate-600">
            Regular Customer
          </p>

          <div className="flex gap-1 text-[#ffa41f] mt-6 mb-4 justify-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="w-[70%] mx-auto">
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis Risus commodo viverra maec
            </p>
          </div>
        </div>

        <div className="absolute flex-col flex gap-3 transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">
            <AiOutlineArrowUp />
          </a>
          <a href="#slide7" className="btn btn-circle">
            <AiOutlineArrowDown />
          </a>
        </div>
      </div>

      <div id="slide7" className="carousel-item p-10 relative w-full">
        <div>
          <h1 className="text-lg text-center font-semibold text-[#ffa41f]">
            Testimonials
          </h1>
          <p className="text-center mt-4">Our Clients Choose Us</p>

          <div className="flex mt-10 justify-center">
            <img className="rounded-full" src={client3} alt="" />
          </div>
          <p className="text-center mt-6">John Doe</p>
          <p className="text-sm mt-4 text-center text-slate-600">
            Regular Customer
          </p>

          <div className="flex gap-1 text-[#ffa41f] mt-6 mb-4 justify-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="w-[70%] mx-auto">
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis Risus commodo viverra maec
            </p>
          </div>
        </div>

        <div className="absolute flex-col flex gap-3 transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">
            <AiOutlineArrowUp />
          </a>
          <a href="#slide5" className="btn btn-circle">
            <AiOutlineArrowDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Clients;
