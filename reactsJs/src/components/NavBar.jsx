import LogoGym from "./LogoGym";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="my-3 fondoNegro">
            <div className="row mx-3">
                <div className="col-md-1 p-1 my-2">
                    <LogoGym tamano={80} />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link fs-4 textoPrimario" activeclassname="active" to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link textoPrimario fs-4 bordeNav" activeclassname="active" to={"/"}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link textoPrimario fs-4 bordeNav" activeclassname="active" to={"/category/fitness"}>Fitness</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link textoPrimario fs-4 bordeNav" activeclassname="active" to={"/category/musculacion"}>Musculacion</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;