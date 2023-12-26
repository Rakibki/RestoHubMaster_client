import Modal from "react-modal";
import { Rate } from "antd";

const ReviewModal = ({
  modalIsOpen,
  closeModal,
  customStyles,
  afterOpenModal,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <textarea
            className="input w-[400px] h-[100px] rounded-none input-bordered"
            placeholder="Your Message"
            name=""
            id=""
            cols="30"
            rows="6"
          ></textarea>
          <div className="mt-3 flex justify-center mb-5">
            <Rate />
          </div>
          <div className="flex justify-center">
            <div className="flex gap-2">
              <button className="px-5 py-2 mt-4 bg-[#ffa41f] transition-all  text-white font-bold hover:opacity-80">
                Submit
              </button>
              <button
                className="px-5 py-2 mt-4 bg-[#ffa41f] transition-all  text-white font-bold hover:opacity-80"
                onClick={closeModal}
              >
                close
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ReviewModal;
