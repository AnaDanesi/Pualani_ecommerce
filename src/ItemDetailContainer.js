import {  useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


const detalle = [
    {id:1,nombre: "Maceta Flora" , foto: "/macetaFlora.png", precio: 650, stock:5, info: "color ladrillo o amarillo" } ,
    {id:2,nombre: "Combo Paila" , foto: "/comboPaila.png", precio: 1500,  stock:5, info: "color gris con franja a eleccion"} ,
    {id:3,nombre: "Maceta Canelon" , foto: "/macetaCanelon.png", precio: 750, stock:5, info: "color ladrillo, amarillo, verde"} ,
    {id:4,nombre: "Combo Bandeja Oval", foto: "/bandejaOval.png",precio: 1250, stock:5, info: "color blanco,gris o marmolado" } ,
    {id:5,nombre: "Combo Maceta Rectangular", foto:"/bandejaRectangular.png", precio: 1250, stock:3, info: "color blanco, verde, amarillo" } ,
    {id:6,nombre: "Maceta Geo" , foto: "/macetaGeo.png", precio: 900, stock:1, info: "color ladrillo,gris o amarillo" } ,
]
const ItemDetailContainer = () => {
    const [loading, setloading]=useState(false)
    const [producto, setProducto]= useState ({})
    const [added, setAdded] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        if(id){
            const ProductoSeleccionado = detalle.find(e => e.id === parseInt(id))
            const promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    res(ProductoSeleccionado )
                }, 2000)
            })
            promesa
                .then((producto) => {
                    console.log("Great")
                    setProducto(producto)
                    setloading(true)
                })
                .catch(() => {
                    console.log("Bad")
                })
        }
        
    }, [id])
    const onAdd = (count) => {
        console.log(`Agregaste 1 producto: ${producto.nombre},cantidad: ${count}.`); setAdded(true);
      }

      if(!loading){return (
          <h4>...Loading</h4>
      )}else{
    return (
        <div>
            <ItemDetail item={producto} onAdd={onAdd} added={added}/>
        </div>
    )
}
}
export default ItemDetailContainer