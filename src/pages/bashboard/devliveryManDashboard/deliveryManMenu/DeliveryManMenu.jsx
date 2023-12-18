import { MdPreview } from "react-icons/md";
import NavItem from "../../../../components/navItem/NavItem";
import { FaHome } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";

const DeliveryManMenu = () => {
  return (
    <div>
      <NavItem location={"deviverManHome"} Icon={FaHome} text={"Home"} />
      <NavItem location={"myReview"} Icon={MdPreview} text={"My Review"} />
      <NavItem
        location={"myDeliveryList"}
        Icon={CiBoxList}
        text={"Delivery List"}
      />
    </div>
  );
};

export default DeliveryManMenu;
