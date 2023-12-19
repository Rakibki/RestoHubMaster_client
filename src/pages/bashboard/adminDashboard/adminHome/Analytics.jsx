import CountUp from "react-countup";

const Analytics = ({data}) => {
  return (
    <div className="grid gap-2 grid-cols-4">
          <div className="border-[1px] border-[#e2e8f0] hover:border-[#ffa41f] rounded-lg hover:shadow-xl p-6">
            <h1 className="text-center text-[#ffa41f] font-semibold text-2xl">
              $<CountUp start={0} duration={2.75} end={data?.revenues} />
            </h1>
            <h2 className="text-xl mt-1 text-center font-medium">
              Total Revenue
            </h2>
            <h3 className="text-center text-[#475569] mt-[2px]">
              10% Increase
            </h3>
          </div>

          <div className="border-[1px] transition-all border-[#e2e8f0] hover:border-[#ffa41f] rounded-lg hover:shadow-xl p-6">
            <h1 className="text-center text-[#ffa41f] font-semibold text-2xl">
              <CountUp start={0} duration={2.75} end={data?.oders} />
            </h1>
            <h2 className="text-xl mt-1 text-center font-medium">New Orders</h2>
            <h3 className="text-center text-[#475569] mt-[2px]">5% Increase</h3>
          </div>

          <div className="border-[1px] transition-all border-[#e2e8f0] hover:border-[#ffa41f] rounded-lg hover:shadow-xl p-6">
            <h1 className="text-center text-[#ffa41f] font-semibold text-2xl">
              <CountUp start={0} duration={2.75} end={data?.customers} />
            </h1>
            <h2 className="text-xl mt-1 text-center font-medium">Customers</h2>
            <h3 className="text-center text-[#475569] mt-[2px]">5% Increase</h3>
          </div>

          <div className="border-[1px] transition-all border-[#e2e8f0] hover:border-[#ffa41f] rounded-lg hover:shadow-xl p-6">
            <h1 className="text-center text-[#ffa41f] font-semibold text-2xl">
              <CountUp start={0} duration={2.75} end={data?.foods} />
            </h1>
            <h2 className="text-xl mt-1 text-center font-medium">Foods</h2>
            <h3 className="text-center text-[#475569] mt-[2px]">5% Increase</h3>
          </div>
        </div>
  )
}

export default Analytics