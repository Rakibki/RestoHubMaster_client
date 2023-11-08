import React from "react";
import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import { BsArrowRight } from "react-icons/bs";
import Container from "../../shared/Container/Container"

const About_section = () => {
  return (
    <Container>
      <div className="w-full p-6 md:p-16 items-center lg:flex">
        <div data-aos="fade-right" className="flex-1 mx-auto  relative  p-16 overflow-hidden">
          <img className="w-[100%]" src={about1} alt="" />
          <img
            className="absolute right-0 w-[60%] bottom-0"
            src={about2}
            alt=""
          />
          <div className="absolute z-20 right-0 top-16">
            <h1 className="text-5xl text-[#ffa41f] font-bold">1995</h1>
            <p className="uppercase text-[#ffa41f] text-center mt-2">
              Start IN
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className="flex-1 relative p-16">
          <h4 className=" text-[#0c0f26] font-semibold mb-4">
            GRILLED PERFECTION
          </h4>
          <h1 className="text-4xl font-extrabold text-[#0c0f26] mb-3">
            SAVOR THE FLAVORS OF OUR JUICY LAMB STEAKS!
          </h1>
          <p className="mb-3 text-[#7f8285]">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur.
          </p>

          <div className="mt-5 mb-8">
            <p className="text-[#797c7f] mb-2 font-medium">MON-FRI: 9 AM – 22 PM</p>
            <p className="text-[#797c7f] font-medium">SATURDAY: 9 AM – 20 PM</p>
          </div>
          <button className="px-6 py-2 bg-[#ffa41f] font-semibold text-white flex items-center gap-2 text-xl ">
            About Us <BsArrowRight />{" "}
          </button>

          <div className="absolute right-14">
            <img
              src={
                "https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/signature.svg"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About_section;
