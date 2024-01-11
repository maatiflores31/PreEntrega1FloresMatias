import LogoGym from "./LogoGym";
import Menu from "./Menu";

const Footer = () => {
    return (
        <div className="container my-3 fondoRojo">
            <div className="row my-3">
                <div className="col-md-8">
                    <Menu/>
                </div>
            </div>
            <hr />
            <div className="row my-3">
                <div className="col-md-10">
                    <p>Siguenos para mas novedades</p>
                </div>
                <div className="col-md-2">
                    <p><LogoGym tamano={40} /> BullDog Gym</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;