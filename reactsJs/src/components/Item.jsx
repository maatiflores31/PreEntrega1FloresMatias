import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-2 cartProducto">        
            <div className="card cartProducto">
                <Link to={"/item/"+ item.id} className="text-decoration-none text-dark">
                    <img src={item.img} className="card-img-top" alt={item.titulo} />
                    <div className="card-body text-center">
                        <p className="card-text">{item.titulo} </p>
                        <p className="card-text">${item.precio} </p>
                        <button className="text-center textoPrimario fondoNegro">VER</button>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}
export default Item;