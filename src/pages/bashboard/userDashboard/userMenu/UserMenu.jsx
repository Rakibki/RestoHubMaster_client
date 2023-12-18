import { MdHistory, MdOutlineShoppingCart, MdPayments } from "react-icons/md"
import NavItem from "../../../../components/navItem/NavItem"
import { AiFillSketchCircle } from "react-icons/ai"
import { FaHome } from "react-icons/fa"
import { CiForkAndKnife } from "react-icons/ci"
import { GiShakingHands } from "react-icons/gi"

const UserMenu = () => {
  return (
    <div>
        <NavItem location={"userHome"} Icon={FaHome} text={'User Home'} />
       <NavItem location={"MyBookTable"} Icon={MdHistory} text={'Table History'} />
       <NavItem location={"wishlist"} Icon={AiFillSketchCircle} text={'Wishlist'} />
       <NavItem location={"paymentHistory"} Icon={MdPayments} text={'Payment History'} />
       <NavItem location={"myCard"} Icon={MdOutlineShoppingCart} text={'View Card'} />
       <NavItem location={"my_oder_food"} Icon={CiForkAndKnife} text={'My Oder Food'} />
       <NavItem location={"subscribers"} Icon={GiShakingHands} text={'Subscribers'} />

    </div>
  )
}

export default UserMenu