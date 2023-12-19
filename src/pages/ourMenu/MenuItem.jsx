const MenuItem = ({ item }) => {
  console.log(item);
  return (
    <div className="flex gap-3">
      <div className=" h-[100px] w-[100px]">
        <img
          className="w-full h-full"
          style={{ borderRadius: "0 200px 200px 200px" }}
          src={item?.image}
          alt=""
        />
      </div>
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-2xl font-Cinzel text-[#151515]">
            {item?.Food_name}--------
          </h2>
          <h2 className="text-[#BB8506] text-sm font-medium">
            ${item?.Regual_Price}
          </h2>
        </div>
        <p className="text-[#737373] text-lg">
          Warm goats cheese and roasted vegetable salad with black olive
          tapenade crostini
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
