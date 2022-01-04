
import { useEffect , useState } from "react";
import ItemDetail from "./ItemDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

const listaProductos = [
    {id:1,nombre: "Maceta Flora" , foto: "/macetaFlora.png", precio: 650, stock:2, info: "color ladrillo o amarillo" } ,
    {id:2,nombre: "Combo Paila" , foto: "/comboPaila.png", precio: 1500,  stock:5, info: "color gris con franja a eleccion"} ,
    {id:3,nombre: "Maceta Canelon" , foto: "/macetaCanelon.png", precio: 750, stock:5, info: "color ladrillo, amarillo, verde"} ,
    {id:4,nombre: "Combo Bandeja Oval", foto: "/bandejaOval.png",precio: 1250, stock:5, info: "color blanco,gris o marmolado" } ,
    {id:5,nombre: "Combo Maceta Rectangular", foto:"/bandejaRectangular.png", precio: 1250, stock:3, info: "color blanco, verde, amarillo" } ,
    {id:6,nombre: "Maceta Geo" , foto: "/macetaGeo.png", precio: 900, stock:1, info: "color ladrillo,gris o amarillo" } ,
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