import useAxios from "../../hooks/useAxios";
import Page_title from "../../shared/page_title/Page_title";
import swal from "sweetalert2";

const Subscribers = () => {
  const Axios = useAxios();

  const handleBoodTable = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    const res = await Axios.put("/subscribers", user);
    if(res) {
        return new swal("Good..", `Subscribed successfully !`, "success");
    }
  };

  return (
    <div className="py-16">
      <Page_title>Never Miss a Recipe!</Page_title>

      <form onSubmit={handleBoodTable}>
        <div className="grid mt-8 w-[40%] mx-auto grid-cols-2">
          <div className="flex items-center gap-2">
            <div className="form-control">
              <input
                type="text"
                className="input rounded-none input-bordered"
                name="name"
                placeholder="name"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                className="input rounded-none input-bordered"
                name="email"
              />
            </div>
          </div>
        </div>

        <div className="flex mt-2 justify-center">
          <div>
            <input required type="checkbox" name="" id="ptams" />
            <label htmlFor="ptams">
              I have read and agree to the terms & conditions
            </label>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-5 py-2 bg-[#ffa41f] transition-all  text-white font-bold hover:opacity-80"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscribers;
