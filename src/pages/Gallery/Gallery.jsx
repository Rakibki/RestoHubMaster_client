import React from "react";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";

const Gallery = () => {
  return (
    <div data-aos="zoom-in" className="grid gap-2 my-10 mt-32 overflow-hidden grid-cols-2 md:grid-cols-4">
      <div className="overflow-hidden">
        <img className="hover:scale-125 transition-all overflow-hidden" src={img1} alt="" />
      </div>
      <div className="overflow-hidden">
        <img className="hover:scale-125 transition-all overflow-hidden" src={img2} alt="" />
      </div>
      <div className="overflow-hidden">
        <img className="hover:scale-125 transition-all overflow-hidden" src={img3} alt="" />
      </div>
      <div className="overflow-hidden">
        <img className="hover:scale-125 transition-all overflow-hidden" src={img4} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
