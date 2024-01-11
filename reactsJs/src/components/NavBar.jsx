import LogoGym from "./LogoGym";
import Login from "./Login";
import CartWidget from "./CartWidget";

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
                            <a className="nav-link text-dark fs-4" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-4" href="#">Reservar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-4" href="#">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-4" href="#">Contactos</a>
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