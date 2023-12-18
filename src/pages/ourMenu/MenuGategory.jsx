
import { Link } from "react-router-dom";
import Cover from "../../components/cover/Cover";
import MenuItem from "./MenuItem";

const MenuGategory = ({ items, image, title, desc }) => {
    console.log(items);
  return (
    <div className="">
      <Cover image={image} title={title} desc={desc} />

      <div className="grid mt-16 grid-cols-1 gap-6 md:grid-cols-2">
        {items?.map((foodItem) => (
          <MenuItem item={foodItem} key={foodItem._id} />
        ))}
      </div>
      <div className="flex justify-center mt-10 mb-4">
        <Link to={`/shop`}>
          <button className="px-6 py-2 border-b-4 text-[#ffa41f] hover:bg-[#ffa41f] hover:text-white transition-all border-[#ffa41f] font-Inter font-medium rounded-lg">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuGategory;
