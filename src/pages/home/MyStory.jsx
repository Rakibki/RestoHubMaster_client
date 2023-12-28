import myStory from "../../assets/myStory.jpg";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
  } from "react-icons/fa";
import firma from "../../assets/firma-vogel.jpg" 


const MyStory = () => {
  return (
    <div className="grid items-center grid-cols-2 gap-2">
      <div>
        <img src={myStory} alt="" />
      </div>

      <div>
        <h1 className="text-4xl text-center font-semibold">My Story</h1>
        <p className="text-lg text-[#73848e] text-center font-Cinzel mt-4 mb-2">
          My passion for food has brought many new, fun and delicious dishes to
          the table.
        </p>

        <p className="text-[#73848e] ">
          For me, it’s not just my work. It’s what I love to do. As a chef there
          is nothing better than showing your love for others through your food.
          I never want to settle for what I know. I want to create new culinary
          experiences for myself and those who enjoy my dishes.
        </p>
        <div className="card-actions gap-4 text-xl mt-7 justify-center">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>

        <div className="flex mt-4 justify-center">
            <img src={firma} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyStory;
