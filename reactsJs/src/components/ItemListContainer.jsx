import { useEffect, useState } from "react";
// import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = ({mensaje}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    // Aqui llamamos a nuestro json local
    // useEffect(()=>{
    //     const promesa= new Promise (resolve => {
    //         setTimeout(()=>{
    //             resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
    //         }, 2000)
    //     })
    //     promesa.then(data => {
    //         setItems(data);
    //     })
    // },[id]);

    // Subida de Productos a nuestra collection "items" se ejecuta una sola vez despues de levantar la app y luego se comenta
    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");

    //     arrayProductos.forEach(producto => {
    //         addDoc(itemsCollection, producto);
    //     });

    //     console.log("Los productos se subieron correctamente!");
    // }, []);

     // Llamada de Productos desde el Firestore a VC
     useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    }, [id]);

    return (
        <>
            {id ? "" : <Carousel/>}
            {loading ? <Loading /> : <ItemList items={items} />}
        </>
    )
}
export default ItemListContainer;