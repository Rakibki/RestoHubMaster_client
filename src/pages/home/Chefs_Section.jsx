import React from "react";
import chef1 from "../../assets/images/chef1.jpg";
import chef2 from "../../assets/images/chef2.jpg";
import chef3 from "../../assets/images/chef3.jpg";
import chef4 from "../../assets/images/chef4.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Chefs = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full mx-auto bg-white">
        <p className="text-center mt-10">tasty and crunchy</p>
        <h2 className="text-center text-[#ffa41f] font-bold text-5xl">
          Our Chefs
        </h2>
        <p className="text-center mt-4 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm
          reminusto <br /> doeiusmod tempor incidition ulla mco laboris nisi ut
          aliquip ex ea commo <br /> condorico consectetur adipiscing elitut
          aliquip.
        </p>

        <div className="grid gap-3 grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
          <div data-aos="zoom-out-up" className="border-[1px] hover:shadow-xl">
            <figure>
              <img className="mx-auto" src={chef1} />
            </figure>
            <div className="p-3">
              <p className="text-center text-[#292929]">Sofia Mayer </p>
              <p className="text-center text-[#5d5d5d] uppercase mt-2 mb-3 text-xs">
                Chef
              </p>
              <p className="text-center text-[#989898]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusa ntium doloremque.
              </p>
              <div className="card-actions text-[#ffa41f] gap-2 text-lg mt-4 justify-center">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>

          <div data-aos="zoom-out-up" className="border-[1px] hover:shadow-xl">
            <figure>
              <img className="mx-auto" src={chef2} />
            </figure>
            <div className="p-3">
              <p className="text-center text-[#292929]">Sofia Mayer </p>
              <p className="text-center text-[#5d5d5d] uppercase mt-2 mb-3 text-xs">
                Chef
              </p>
              <p className="text-center text-[#989898]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusa ntium doloremque.
              </p>
              <div className="card-actions text-[#ffa41f] gap-2 text-lg mt-4 justify-center">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>

          <div data-aos="zoom-out-up" className="border-[1px] hover:shadow-xl">
            <figure>
              <img className="mx-auto" src={chef3} />
            </figure>
            <div className="p-3">
              <p className="text-center text-[#292929]">Sofia Mayer </p>
              <p className="text-center text-[#5d5d5d] uppercase mt-2 mb-3 text-xs">
                Chef
              </p>
              <p className="text-center text-[#989898]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusa ntium doloremque.
              </p>
              <div className="card-actions text-[#ffa41f] gap-2 text-lg mt-4 justify-center">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>

          <div data-aos="zoom-out-up" className="border-[1px] hover:shadow-xl">
            <figure>
              <img className="mx-auto" src={chef4} />
            </figure>
            <div className="p-3">
              <p className="text-center text-[#292929]">Sofia Mayer </p>
              <p className="text-center text-[#5d5d5d] uppercase mt-2 mb-3 text-xs">
                Chef
              </p>
              <p className="text-center text-[#989898]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusa ntium doloremque.
              </p>
              <div className="card-actions text-[#ffa41f] gap-2 text-lg mt-4 justify-center">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
