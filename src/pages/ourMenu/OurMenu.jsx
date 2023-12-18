import Cover from "../../components/cover/Cover";
import coverImage from "../../assets/banner3.jpg";
import AppetizersImg from "../../assets/menu/soup-bg.jpg";
import BreakfastImg from "../../assets/menu/soup-bg.jpg";
import DessertsImg from "../../assets/menu/salad-bg.jpg";
import FamilyDishesImg from "../../assets/menu/pizza-bg.jpg";
import { useQuery } from "@tanstack/react-query";
import Loadiing from "../../shared/Loadiing";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MenuGategory from "./MenuGategory";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const OurMenu = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["all-foods-items"],
    queryFn: async () => {
      const res = await axiosSecure.get("/foods");
      return res?.data;
    },
  });

  console.log(data);

  const Appetizers = data?.filter((item) => item.category === "Appetizers");
  const Breakfast = data?.filter((item) => item.category === "Breakfast");
  const Desserts = data?.filter((item) => item.category === "Desserts");
  const FamilyDishes = data?.filter(
    (item) => item.category === "Family Dishes"
  );

  if (isPending) <Loadiing />;

  return (
    <div>
      <Cover
        image={coverImage}
        title={"OUR SHOP"}
        desc={"Would you like to try a dish?"}
      />

      {/* Today Off */}
      <div className="mt-16">
        <div className="flex gap-3">
          <div className="w-3 h-8 bg-[#ffa41f]"></div>
          <h1 className="text-3xl font-semibold">TODAY'S OFFER</h1>
        </div>
        <div className="grid mt-6 grid-cols-1 gap-6 md:grid-cols-2">
          {Breakfast?.map((foodItem) => (
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

      <div className="p-8">
        <div className="flex mb-5 gap-3">
          <div className="w-3 h-8 bg-[#ffa41f]"></div>
          <h1 className="text-3xl font-semibold">Appetizers</h1>
        </div>
        <MenuGategory
          items={Appetizers}
          image={AppetizersImg}
          title={"Appetizers"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>

      <div className="p-8">
        <div className="flex mb-5 gap-3">
          <div className="w-3 h-8 bg-[#ffa41f]"></div>
          <h1 className="text-3xl font-semibold">Desserts</h1>
        </div>
        <MenuGategory
          items={Desserts}
          image={DessertsImg}
          title={"Desserts"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>

      <div className="p-8">
        <div className="flex mb-5 gap-3">
          <div className="w-3 h-8 bg-[#ffa41f]"></div>
          <h1 className="text-3xl font-semibold">FamilyDishes</h1>
        </div>
        <MenuGategory
          items={FamilyDishes}
          image={FamilyDishesImg}
          title={"FamilyDishes"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
    </div>
  );
};

export default OurMenu;
