import { useContext, useState } from "react";
import { authContext } from "../../providers/AuthProvaider";
import swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const Reservation = () => {
  const Axios = useAxios();

  const { user } = useContext(authContext);
  const [count, setCount] = useState(1);

  const handleBoodTable = async (e) => {
    e.preventDefault();

    if (!user && !user?.email) {
      return new swal("Good..", "Please login first", "error");
    }

    const guests = e.target.guests.value;
    const date = e.target.date.value;
    const time = e.target.time.value;

    const bookInfo = {
      name: user?.displayName,
      email: user?.email,
      oderNumber: count,
      guests,
      date,
      time,
    };
    console.log(bookInfo);
    const res = await Axios.post("/addAbookTable", bookInfo);
    if (res) {
      setCount(count + 1);
      return new swal(
        "Good..",
        `Table has been booked successfully, your book no ${count}`,
        "success"
      );
    }
  };

  return (
    <div className="py-16">
      <h1 className="text-xl mb-2 text-center">Reservations</h1>
      <h1 className="text-3xl text-center">BOOK A TABLE</h1>

      <form onSubmit={handleBoodTable}>
        <div className="grid mt-8 w-[80%] gap-4 mx-auto grid-cols-4">
          <div className="flex col-span-1 items-center gap-2">
            <div className="form-control w-full" >
              <input
                type="date"
                className="input rounded-none input-bordered"
                name="date"
                id="date"
              />
            </div>
          </div>

          <div className="flex col-span-1 items-center gap-2">
            <div className="w-full form-control">
              <input
                type="time"
                className="input rounded-none input-bordered"
                name="time"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-full form-control">
              <input
                type="text"
                placeholder="Guests"
                className="input rounded-none input-bordered"
                name="guests"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-5 py-2 bg-[#ffa41f] transition-all  text-white font-bold hover:opacity-80"
          >
            Book A Table
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
