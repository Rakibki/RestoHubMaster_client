import loaadding_animarion from "../assets/loadding1.json" 
import { useLottie } from "lottie-react";

const Loadiing = () => {
  const options = {
    animationData: loaadding_animarion,
    loop: true
  };

  const { View } = useLottie(options);
  return (
    <div>{View}</div>
  )
}

export default Loadiing