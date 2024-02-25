import Item from "./Item"

const ItemList = ({items}) => {
    return(
        <>
            <div className="container my-3">
                <div className="row g-0 p-1">
                    <h2 className="text-center textoPrimario fondoNegro">MIS PRODUCTOS!</h2>
                </div>
                <div className="row my-3">
                        {items.map(item => (
                            <Item key={item.id} item={item} />
                        ))}
                </div>
            </div>
        </>
    )
} 

export default ItemList;
