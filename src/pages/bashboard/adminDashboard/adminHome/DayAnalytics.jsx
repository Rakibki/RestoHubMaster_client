import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TransactionTopFive from "./TransactionTopFive";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const DayAnalytics = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data: DayAnalyticsData } = useQuery({
    queryKey: ["dayAnalytics"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/dayAnalytics`);
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;

  console.log(DayAnalyticsData);

  const data = [
    {
      name: "Sunday",
      uv: 400,
    },
    {
      name: "Monday",
      uv: 300,
    },
    {
      name: "Tuesday",
      uv: 200,
    },
    {
      name: "Wednesday",
      uv: 278,
    },
    {
      name: "Thursday",
      uv: 189,
    },
    {
      name: "Friday",
      uv: 239,
      amt: 250,
    },
    {
      name: "Saturday",
      uv: 349,
    },
  ];

  return (
    <div className="grid gap-2 grid-cols-10">
      <div className="col-span-7">
        <Tabs>
          <TabList className={"flex gap-2"}>
            <Tab>Customer</Tab>
            <Tab>Oders</Tab>
          </TabList>

          <TabPanel>
            <BarChart width={350} height={300} data={data}>
              <Bar barSize={30} name="Customer" dataKey="uv" fill="#ffa41f" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </BarChart>
          </TabPanel>

          <TabPanel>
            <BarChart width={350} height={300} data={data}>
              <Bar barSize={30} name="Oders" dataKey="uv" fill="#c9ab80" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </BarChart>
          </TabPanel>
        </Tabs>
      </div>
      <div className="col-span-3">
        <TransactionTopFive />
      </div>
    </div>
  );
};

export default DayAnalytics;
