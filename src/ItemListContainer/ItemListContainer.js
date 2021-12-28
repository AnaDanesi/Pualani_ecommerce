
/* eslint-disable no-unused-vars */
import { useEffect , useState } from "react"
import ItemCount from "./ItemCount";
import Contador from "./Contador"
import 'bootstrap/dist/css/bootstrap.min.css';

const productosIniciales = [
    { nombre : "Maceta Flora" , foto: <img src="/macetaFlora.png" alt=""/>},
    { nombre : "Combo Paila" , foto: <img src="/comboPaila.png" alt=""/>} ,
    { nombre : "MacetaCanelon" , foto: <img src="/fmacetacanelon.png" alt=""/>},
    { nombre : "Combo Bandeja Oval", foto: <img src="/bandejaOval.png" alt=""/>},
    { nombre : "Combo Maceta Rectangular", foto:<img src="/bandejaRectangular.png" alt=""/>} ,
    { nombre : "Maceta Geo" , foto: <img src="/macetaGeo.png" alt=""/>},
]

const ItemListContainer = ({ saludo }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {

        
        const promesa = new Promise((res)=>{
            setTimeout(()=>{
                console.log("Soy el timeout")
                res(productosIniciales) 
            },1000)
        })
        
        promesa.then((productos)=>{
            console.log("Todo bien")
            console.log(productos)
            setLoading(false)
            setProductos(productos)
        })

    },[])


    const onAdd = () => { }
    return (
    <div id="las mas elegidas">
    {productos.map ( (item, idx)=> (
        <ul>
        <li key={idx}>
        <h2> {item.nombre}</h2>
        <h2>{item.foto}</h2>
        </li>
        </ul>
    )
    
    ) }    
    </div>
    )
}





export default ItemListContainer