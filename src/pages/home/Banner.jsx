import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Marquee from "react-fast-marquee";

import banner1 from "../../assets/images/01.jpg";
import banner2 from "../../assets/images/02.jpg";
import banner4 from "../../assets/images/04.jpg";

const Banner = () => {
  return (
    <>
      <Carousel autoPlay={true}>
        <div>
          <img src={banner4} />
        </div>
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner2} />
        </div>
      </Carousel>
      <Marquee gradient={true} speed={30} className="text-8xl font-Cinzel font-medium text-[#5e5e5e]">
        Welcome To Our Dinenos Restaurant Welcome To Our Luxury Restaurant.
      </Marquee>
    </>
  );
};

export default Banner;
