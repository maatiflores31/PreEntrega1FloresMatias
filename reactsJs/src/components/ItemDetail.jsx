import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }
    return (
        <div className="container">
            <div className="row g-0 p-1">
                <h2 className="text-center textoPrimario fondoNegro">DETALLE DE PRODUCTO</h2>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.img} alt={item.titulo} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.titulo} </h1>
                    <p><b>Categoria: </b>{item.categoria}</p>
                    <p><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;