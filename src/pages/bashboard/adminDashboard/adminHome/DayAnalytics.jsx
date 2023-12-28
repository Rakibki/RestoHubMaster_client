import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TransactionTopFive from "./TransactionTopFive";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import FoodAvailable from "./FoodAvailable";
import "./style.css";
import { useState } from "react";

const DayAnalytics = () => {
  const axiosSecure = useAxiosSecure();
  const [tabIndex, setTabIndex] = useState(0);

  const { isPending, data: DayAnalyticsData } = useQuery({
    queryKey: ["dayAnalytics"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/dayAnalytics`);
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;

  console.log(DayAnalyticsData);

  const CustomerData = [
    {
      name: "Sunday",
      uv: DayAnalyticsData?.userResigterDay?.userSunday,
    },
    {
      name: "Monday",
      uv: DayAnalyticsData?.userResigterDay?.userMonday,
    },
    {
      name: "Tuesday",
      uv: DayAnalyticsData?.userResigterDay?.userTuesday,
    },
    {
      name: "Wednesday",
      uv: DayAnalyticsData?.userResigterDay?.userWednesday,
    },
    {
      name: "Thursday",
      uv: DayAnalyticsData?.userResigterDay?.userThursday,
    },
    {
      name: "Friday",
      uv: DayAnalyticsData?.userResigterDay?.userFriday,
    },
    {
      name: "Saturday",
      uv: DayAnalyticsData?.userResigterDay?.userSaturday,
    },
  ];

  const odersData = [
    {
      name: "Sunday",
      uv: DayAnalyticsData?.oderDay?.paymentSunday,
    },
    {
      name: "Monday",
      uv: DayAnalyticsData?.oderDay?.paymentMonday,
    },
    {
      name: "Tuesday",
      uv: DayAnalyticsData?.oderDay?.paymentTuesday,
    },
    {
      name: "Wednesday",
      uv: DayAnalyticsData?.oderDay?.paymentWednesday,
    },
    {
      name: "Thursday",
      uv: DayAnalyticsData?.oderDay?.paymentThursday,
    },
    {
      name: "Friday",
      uv: DayAnalyticsData?.oderDay?.paymentFriday,
    },
    {
      name: "Saturday",
      uv: DayAnalyticsData?.oderDay?.paymentSaturday,
    },
  ];

  return (
    <div>
      <div className="grid bg-white gap-2 grid-cols-11">
        <div className="col-span-7">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            className={
              "py-6 shadow-2xl rounded-3xl overflow-hidden border-[1px]"
            }
          >
            <TabList
              className={
                "flex gap-3 text-[#07143b] text-xl mb-2 ml-4 active:outline-none"
              }
            >
              <Tab
                className={
                  tabIndex === 0 ? "pb-1 border-b-4 border-[#ffa41f]" : ""
                }
              >
                Customer
              </Tab>
              <Tab
                className={
                  tabIndex === 1 ? "pb-1 border-b-4 border-[#ffa41f]" : ""
                }
              >
                Oders
              </Tab>
            </TabList>
            <hr />
            <TabPanel className={"mt-5"}>
              <BarChart width={580} height={300} data={CustomerData}>
                <Bar
                  radius={true}
                  barSize={50}
                  name="Customer"
                  dataKey="uv"
                  fill="#ffa41f"
                />
                <XAxis className="text-[14px]" dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
              </BarChart>
            </TabPanel>

            <TabPanel>
              <BarChart width={580} height={300} data={odersData}>
                <Bar
                  radius={true}
                  barSize={50}
                  name="Oders"
                  dataKey="uv"
                  fill="#ffa41f"
                />
                <XAxis className="text-[14px]" dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
              </BarChart>
            </TabPanel>
          </Tabs>

          <FoodAvailable />
        </div>

        <div className="col-span-4 shadow-2xl">
          <TransactionTopFive />
        </div>
      </div>
    </div>
  );
};

export default DayAnalytics;
