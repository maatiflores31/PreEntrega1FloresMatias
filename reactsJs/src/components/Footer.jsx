import LogoGym from "./LogoGym";
import Menu from "./Menu";

const Footer = () => {
    return (
        <div className="my-3 fondoNegro">
            <div className="row my-3">
                <div className="col-md-8">
                    <Menu/>
                </div>
            </div>
            <hr />
            <div className="row m-3">
                <div className="col-md-10">
                    <p className="textoPrimario" >Siguenos para mas novedades</p>
                </div>
                <div className="col-md-2">
                    <p className="textoPrimario" ><LogoGym tamano={40} /> BullDog Gym</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;