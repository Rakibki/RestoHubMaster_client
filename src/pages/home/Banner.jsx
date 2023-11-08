import React, { useEffect } from "react";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import bannerVideo from "../../assets/videos/pexels_videos_2862 (1080p).mp4";
import bannerLogo from "../../assets/images/banner_logo.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div >
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item h-screen relative w-full">
          <div>
            <img
              className="absolute h-full top-0 w-full"
              src={banner1}
              alt=""
            />
          </div>
          <div className="absolute flex justify-center text-white bg-gradient-to-r from-[#00000066] to-[#000000e6] top-0 w-full h-full">
            <div className="w-[70%] mt-10">
              <div  className="flex  justify-center">
                <img src={bannerLogo} alt="" />
              </div>
              <h1 data-aos="fade-up" className="md:text-6xl text-center text-3xl font-bold">
                GOOD FOOD & GOOD HEALTH
              </h1>
              <p data-aos="fade-up" className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                efficitur placerat nulla, in suscipit erat sodales id. Nullam
                ultricies eu turpis at accumsan. Mauris a sodales mi, eget
                lobortis nulla.
              </p>
              <div className="flex justify-center mt-6">
                <div className="flex gap-3">
                  <button data-aos="fade-up" className="border-[1px] font-semibold hover:border-none px-7 hover:bg-[#ffa41f] transition-all  rounded-sm border-[#fff] py-2">
                    OUR MENU
                  </button>
                  <button data-aos="fade-up" className="border-[1px] font-semibold hover:border-none px-7 hover:bg-[#ffa41f] transition-all rounded-sm border-[#fff] py-2">
                    PURCHASE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn bg-[#ffa41f] text-white  btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn bg-[#ffa41f] text-white btn-circle"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item h-screen relative w-full">
          <div>
            <img
              className="absolute h-full top-0 w-full"
              src={banner2}
              alt=""
            />
          </div>
          <div className="absolute flex justify-center text-white bg-gradient-to-r from-[#00000066] to-[#000000e6] top-0 w-full h-full">
            <div className="w-[70%] mt-10">
              <div className="flex justify-center">
                <img src={bannerLogo} alt="" />
              </div>
              <h1 data-aos="fade-up" className="md:text-6xl text-center font-bold text-3xl">
                GOOD FOOD & GOOD HEALTH
              </h1>
              <p data-aos="fade-up" className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                efficitur placerat nulla, in suscipit erat sodales id. Nullam
                ultricies eu turpis at accumsan. Mauris a sodales mi, eget
                lobortis nulla.
              </p>
              <div className="flex justify-center mt-6">
                <div className="flex gap-3">
                  <button data-aos="fade-up" className="border-[1px] font-semibold hover:border-none px-7 hover:bg-[#ffa41f] transition-all  rounded-sm border-[#fff] py-2">
                    OUR MENU
                  </button>
                  <button data-aos="fade-up" className="border-[1px] font-semibold hover:border-none px-7 hover:bg-[#ffa41f] transition-all rounded-sm border-[#fff] py-2">
                    PURCHASE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn bg-[#ffa41f] text-white  btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn bg-[#ffa41f] text-white btn-circle"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item h-screen relative w-full">
          <div>
            <img
              className="absolute h-full top-0 w-full"
              src={banner3}
              alt=""
            />
          </div>
          <div className="absolute flex justify-center text-white bg-gradient-to-r from-[#00000066] to-[#000000e6] top-0 w-full h-full">
            <div className="w-[70%] mt-10">
              <div className="flex justify-center">
                <img src={bannerLogo} alt="" />
              </div>
              <h1 data-aos="fade-up" className="text-3xl md:text-6xl text-center font-bold">
                GOOD FOOD & GOOD HEALTH
              </h1>
              <p data-aos="fade-up" className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                efficitur placerat nulla, in suscipit erat sodales id. Nullam
                ultricies eu turpis at accumsan. Mauris a sodales mi, eget
                lobortis nulla.
              </p>
              <div className="flex justify-center mt-6">
                <div className="flex gap-3">
                  <button data-aos="fade-up" className="border-[1px] font-semibold hover:border-none px-7 hover:bg-[#ffa41f] transition-all  rounded-sm border-[#fff] py-2">
                    OUR MENU
                  </button>
                  <button data-aos="fade-up" className="border-[1px] font-semibold hover:border-none px-7 hover:bg-[#ffa41f] transition-all rounded-sm border-[#fff] py-2">
                    PURCHASE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn bg-[#ffa41f] text-white  btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn bg-[#ffa41f] text-white btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
