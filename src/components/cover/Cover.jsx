import { Parallax } from "react-parallax";

const Cover = ({image, title, desc}) => {
  return (
    <Parallax
      className="h-[400px]"
      blur={{ min: -15, max: 15 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="w-[80%] h-[200px]  top-32 absolute left-[10%] bg-opacity-70 text-white p-20  bg-black">
        <h1 className="text-4xl text-center font-semibold font-Cinzel">
          {title}
        </h1>
        <p className="text-center font-Inter">{desc}</p>
      </div>
    </Parallax>
  );
};

export default Cover;
