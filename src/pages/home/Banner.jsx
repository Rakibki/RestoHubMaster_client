import React from "react";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item  h-screen relative w-full">
          <div>
            <img className="absolute w-full h-full" src={banner1} alt="" />
          </div>
          <div className="absolute flex justify-center items-center text-white bg-gradient-to-r from-[#00000066] to-[#000000e6] top-0 w-full h-full">
            <div>
              <h2 className="text-6xl text-center mb-4">Traditional Food</h2>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique corrupti reprehenderit quasi praesentium eius unde ad
                iste maxime, in numquam eveniet officia deleniti! Voluptatem
                dolores autem amet itaque cupiditate laudantium?
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
    </div>
  );
};

export default Banner;
