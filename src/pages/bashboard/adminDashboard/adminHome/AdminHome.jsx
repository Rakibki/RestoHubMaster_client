import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";
import Cover from "../../../../components/cover/Cover";
import coverImage from "../../../../assets/menu/banner3.jpg";
import Analytics from "./Analytics";
import FoodChart from "./FoodChart";
import SaleChat from "./saleChat";
import DayAnalytics from "./DayAnalytics";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["adminHome"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/adminHome`);
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;

  return (
    <div>
      <Cover
        image={coverImage}
        title={"UP TO: 50% OFF"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        }
      />
      <div className="p-10">
        <div className="flex mb-4 gap-3">
          <div className="w-2 h-8 bg-[#ffa41f]"></div>
          <h1 className="text-3xl font-semibold">Analytics Overview</h1>
        </div>

        <Analytics data={data} />

        <div className="grid mt-10 gap-3 grid-cols-2">
          <div>
            <FoodChart />
          </div>
          <div>
            <SaleChat />
          </div>
        </div>

        <div className="mt-10">
          <DayAnalytics />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
