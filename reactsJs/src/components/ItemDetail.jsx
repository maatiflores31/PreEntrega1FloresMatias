import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.img} alt={item.titulo} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.titulo} </h1>
                    <p>{item.categoria} </p>
                    <p><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;