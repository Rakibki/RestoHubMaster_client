import "./style.css"

const Page_title = ({children}) => {
  return (
    <div id="container" className="w-full relative h-[200px]">
      <div className="absolute flex justify-center items-center top-0 w-full h-full bg-[#00000099]">
        <div>
          <p className="text-white text-3xl font-medium">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Page_title;
