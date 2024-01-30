import LogoGym from "./LogoGym";
import Login from "./Login";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container my-3 fondoCeleste">
            <div className="row">
                <div className="col-md-1 p-1">
                    <LogoGym tamano={80} />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-4" activeclassname="active" to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-4" activeclassname="active" to={"/"}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-4" activeclassname="active" to={"/category/fitness"}>Fitness</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-4" activeclassname="active" to={"/category/musculacion"}>Musculacion</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                    <Login />
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;