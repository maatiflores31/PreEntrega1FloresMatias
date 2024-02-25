import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if (CantTotalProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="display-1">:/</p>
                        <div className="alert fondoPrimario" role="alert">No se encontraron productos en el Carrito!</div>
                        <Link to={"/"} className="btn fondoNegro textoPrimario my-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="text-center textoPrimario fondoNegro" >Productos Seleccionados</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="text-end align-middle" colSpan={6}><a href="#" onClick={clear} className="btn fondoNegro textoPrimario">Vaciar Carrito <img src="https://png.pngtree.com/png-vector/20220606/ourlarge/pngtree-trash-can-bin-background-vector-png-image_4876782.png" alt="Eliminar Producto" title="Eliminar Producto" height={30}/></a></td>
                                </tr>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td className="align-middle"><img src={product.img} alt={product.titulo} width={80} /></td>
                                        <td className="text-start align-middle">{product.titulo}</td>
                                        <td className="text-start align-middle">${product.precio}</td>
                                        <td className="text-start align-middle">{product.quantity}</td>
                                        <td className="text-start align-middle">${product.quantity * product.precio}</td>
                                        <td className="text-end align-middle"><a href="#" onClick={() => {removeItem(product.id)}}><img src="https://png.pngtree.com/png-vector/20220606/ourlarge/pngtree-trash-can-bin-background-vector-png-image_4876782.png" alt="Eliminar Producto" title="Eliminar Producto" height={30} /></a></td>
                                    </tr>
                                )}
                                <tr>
                                    <td className="text-center align-middle" colSpan={4}>Suma Total</td>
                                    <td className="text-start align-middle">${SumaTotalProductos()}</td>
                                    <td className="text-end align-middle"><Link to={"/checkout"} className="btn fondoNegro textoPrimario">Checkout</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Cart;