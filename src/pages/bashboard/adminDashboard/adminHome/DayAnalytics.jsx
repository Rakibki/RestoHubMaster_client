import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TransactionTopFive from "./TransactionTopFive";

const DayAnalytics = () => {

    const { isPending, data } = useQuery({
        queryKey: ["topFiveTransactions"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/topFiveTransactions`);
          return res?.data;
        },
      });

  return (
    <div className="grid gap-2 grid-cols-10">
      <div className="col-span-7">
        <Tabs>
          <TabList className={"flex gap-2"}>
            <Tab>Customer</Tab>
            <Tab>Oders</Tab>
          </TabList>

          <TabPanel>
            <h2>Customer</h2>
          </TabPanel>
          <TabPanel>
            <h2>Oders</h2>
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
