import Cover from "../../components/cover/Cover";
import image from "../../assets/contact.jpg";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Cover title={"Contact Us"} image={image} />

      <div>
        <p>Map</p>
      </div>

      <div className="grid gap-3 my-10 grid-cols-2">
        <form onSubmit={handleSubmit}>
          <div className="mb-2 form-control">
            <input
              type="text"
              placeholder="Name"
              className="input rounded-none input-bordered"
              required
              name="name"
            />
          </div>
          <div className="mb-2 form-control">
            <input
              type="email"
              placeholder="E-mail"
              className="input rounded-none input-bordered"
              required
              name="email"
            />
          </div>
          <div className="mb-3 form-control">
            <textarea
              className="input h-[120px] rounded-none input-bordered"
              name="message"
              id=""
              cols="30"
              placeholder="Message"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-center ">
            <button
              type="submit"
              className="px-10 py-2 mt-4 bg-[#ffa41f] transition-all text-lg text-white hover:opacity-80"
            >
              Send
            </button>
          </div>
        </form>

        <div>
            <div className="grid gap-3 mb-5 grid-cols-2">
                <div>
                    <h2 className="text-2xl mb-2 text-center font-Cinzel font-semibold text-[#ffa41f]">MANHATTAN</h2>
                    <p className="text-lg mb-1 text-center">71 Madison Ave</p>
                    <p className="text-lg mb-1 text-center">914-309-7011 , 914-329-2131</p>
                    <p className="text-lg mb-1 text-center">reservations@laurent.com</p>
                </div>
                <div>
                    <h2 className="text-2xl mb-2 text-center font-Cinzel font-semibold text-[#ffa41f]">RAHWAY</h2>
                    <p className="text-lg mb-1 text-center">71 Madison Ave</p>
                    <p className="text-lg mb-1 text-center">914-309-7011 , 914-329-2131</p>
                    <p className="text-lg mb-1 text-center">reservations@laurent.com</p>
                </div>
            </div>

            <div className="grid gap-3 grid-cols-2">
                <div>
                    <h2 className="text-2xl mb-2 text-center font-Cinzel font-semibold text-[#ffa41f]">BROOKLIN</h2>
                    <p className="text-lg mb-1 text-center">71 Madison Ave</p>
                    <p className="text-lg mb-1 text-center">914-309-7011 , 914-329-2131</p>
                    <p className="text-lg mb-1 text-center">reservations@laurent.com</p>
                </div>
                <div>
                    <h2 className="text-2xl mb-2 text-center font-Cinzel font-semibold text-[#ffa41f]">NEW JERSEY</h2>
                    <p className="text-lg mb-1 text-center">71 Madison Ave</p>
                    <p className="text-lg mb-1 text-center">914-309-7011 , 914-329-2131</p>
                    <p className="text-lg mb-1 text-center">reservations@laurent.com</p>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
