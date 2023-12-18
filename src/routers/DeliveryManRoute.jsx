import { useContext } from "react"
import { authContext } from "../providers/AuthProvaider"
import GetRole from "../hooks/GetRole";

const DeliveryManRoute = ({children}) => {
  const {user} = useContext(authContext);
  const [role, setRole] = GetRole();


  return (
    <div>DeliveryManRoute</div>
  )
}

export default DeliveryManRoute