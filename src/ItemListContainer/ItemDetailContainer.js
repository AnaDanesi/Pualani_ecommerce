
import { useEffect , useState } from "react";
import ItemDetail from "./ItemDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

const listaProductos = [
    {id:1,nombre: "Maceta Flora" , foto: <img src="/macetaFlora.png" alt=""/>},
    {id:2,nombre: "Combo Paila" , foto: <img src="/comboPaila.png" alt=""/>} ,
    {id:3,nombre: "Maceta Canelon" , foto: <img src="/macetaCanelon.png" alt=""/>},
    {id:4,nombre: "Combo Bandeja Oval", foto: <img src="/bandejaOval.png" alt=""/>},
    {id:5,nombre: "Combo Maceta Rectangular", foto:<img src="/bandejaRectangular.png" alt=""/>} ,
    {id:6,nombre: "Maceta Geo" , foto: <img src="/macetaGeo.png" alt=""/>},
]

function ItemDetailContainer() {
    const [loading, setLoading] = useState(false);
    const [producto, setProducto] = useState([]);
    const id = 3;

    useEffect(() => {
        const Item = listaProductos.filter((producto) => {
            return producto.id === +id;
        });
        
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
               res(Item);
            },2000);
        });
        
        promise.then((items) => {
            setLoading(true);
            setProducto(items);
        });
        
}, [id]);

if (!loading) {
    return (
        <>
            <h2>...Cargando</h2>
        </>
    );
} else {
    return (
        <>
        {producto.map((producto) => (
            <ItemDetail key={producto.id} producto={producto} />
        ))}
        </>
    );
}
}


export default ItemDetailContainer