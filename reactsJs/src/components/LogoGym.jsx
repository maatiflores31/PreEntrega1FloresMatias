import { Link } from "react-router-dom";
import Logo from "../assets/logo-gym.jpg";

const LogoGym = ({tamano}) => {
    return (
        <Link to={"/"}>
            <img src={Logo} alt="BullDog Gym" width={tamano} />
        </Link>
        
    )
}

export default LogoGym;