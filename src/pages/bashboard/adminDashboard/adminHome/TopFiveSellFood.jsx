import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loadiing from "../../../../shared/Loadiing";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";

const TopFiveSellFood = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["toFiveSellFood"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/Top_Food`);
      return res?.data;
    },
  });

  if (isPending) <Loadiing />;

  return (
    <div className="mt-10">
      <div className="flex mb-4 gap-3">
        <div className="w-2 h-8 bg-[#ffa41f]"></div>
        <h1 className="text-3xl font-semibold">Best Selling Products</h1>
      </div>

      <>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data?.map((food) => {
            return (
              <div key={food?._id}>
                <SwiperSlide className="border-[1px] rounded-3xl p-5">
                  <img
                    className="w-[100px] mb-2 mx-auto h-[100px] rounded-full"
                    src={food?.image}
                    alt=""
                  />
                  <hr />
                  <h2 className="text-lg mt-3">{food?.Food_name.slice(0, 12)}...</h2>
                  <h2 className="text-xl font-semibold text-[#64748b]">${food?.Regual_Price}</h2>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </>
    </div>
  );
};

export default TopFiveSellFood;
