import React from "react";
import icon1 from "../../assets/icons/king.png";
import icon2 from "../../assets/icons/menu.png";
import icon3 from "../../assets/icons/ex.png";

const choose = () => {
  return (
    <div className="w-full h-screen">
      <h2 className="text-center mt-24 mb-6 font-bold text-5xl">Why people choose us?</h2>

      <p className="text-center mt-4 mb-12">Porro eveniet, autem ipsam vitae consequatur!</p>

      <div className="grid gap-16 grid-cols-3">
        <div>
          <div className="flex justify-center"><img className="w-[100px]" src={icon2} alt="" /></div>
          <h1 className="text-xl text-center mt-3 mb-6">Menu for every taste</h1>
          <p className="text-center">
            Dolor sit amet, consectetur adipisicing elit et molestias possimus
          </p>
        </div>

        <div>
          <div className="flex justify-center"><img className="w-[100px]" src={icon1} alt="" /></div>
          <h1 className="text-xl text-center mt-3 mb-6">Always fresh ingredients</h1>
          <p className="text-center">Assumenda possimus eaque illo iste, autem. Porro eveniet autem</p>
        </div>

        <div>
          <div className="flex justify-center"><img className="w-[100px]" src={icon3} alt="" /></div>
          <h1 className="text-xl text-center mt-3 mb-6">Experienced chefs</h1>
          <p className="text-center">Rolorem, beatae dolorum, praesentium itaque et quam quaerat</p>
        </div>
      </div>
    </div>
  );
};

export default choose;
