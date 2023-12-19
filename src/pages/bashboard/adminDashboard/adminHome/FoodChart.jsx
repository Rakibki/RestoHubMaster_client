import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const FoodChart = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data: chatData } = useQuery({
    queryKey: ["foodCacht"],
    queryFn: async () => {
      const res = await axiosSecure.get("/foodChrt");
      return res?.data;
    },
  });

  const data = [
    {
      name: "Breakfast",
      uv: chatData?.Breakfast,
      //   pv: 1398,
      //   amt: 344,
    },
    {
      name: "Desserts",
      uv: chatData?.Desserts,
    },
    {
      name: "Appetizers",
      uv: chatData?.Appetizers,
    },
    {
      name: "Family Dishes",
      uv: chatData?.FamilyDishes,
    },
  ];

  return (
    <div>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#ffa41f" fill="#ffa41f" />
      </AreaChart>
    </div>
  );
};

export default FoodChart;
