import { Link } from "react-router-dom";

const LogoGym = ({tamano}) => {
    return (
        <Link to={"/"}>
            <img src="https://m.media-amazon.com/images/I/71ODek7bpiL._AC_SL1500_.jpg" alt="BullDog Gym" width={tamano} />
        </Link>
        
    )
}

export default LogoGym;