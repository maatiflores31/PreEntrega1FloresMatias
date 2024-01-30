import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-2">           
            <div className="card">
                <Link to={"/item/"+ item.id} className="text-decoration-none text-dark">
                    <img src={item.img} className="card-img-top" alt={item.titulo} />
                    <div className="card-body">
                        <p className="card-text">{item.titulo} </p>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}
export default Item;