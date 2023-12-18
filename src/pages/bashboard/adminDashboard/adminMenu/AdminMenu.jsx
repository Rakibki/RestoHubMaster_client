import { IoBagAddOutline, IoFastFoodSharp } from "react-icons/io5";
import NavItem from "../../../../components/navItem/NavItem";
import { CgBoard } from "react-icons/cg";
import { FaHome, FaUsers } from "react-icons/fa";
import { CiBoxList, CiViewTable } from "react-icons/ci";

const AdminMenu = () => {
  return (
    <div>
      <NavItem location={"adminHome"} Icon={FaHome} text={'Admin Home'} />
      <NavItem location={"add_food"} Icon={IoBagAddOutline} text={"Add Food"} />
      <NavItem location={"all-Oders"} Icon={CgBoard} text={'Oders'} />
      <NavItem location={"all_foods"} Icon={IoFastFoodSharp} text={'Foods'} />
      <NavItem location={"customers"} Icon={FaUsers} text={'Customers'} />
      <NavItem location={"my_added_food"} Icon={CiBoxList} text={'My Added Food'} />
      <NavItem location={"allTablebook"} Icon={CiViewTable} text={'Manage Table'} />
    </div>
  );
};

export default AdminMenu;
