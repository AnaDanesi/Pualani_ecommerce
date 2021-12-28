
import { useEffect , useState } from "react"
import Contador from "./Contador"


const productos = [
    { nombre : "Maceta Flora" , foto: <img src="/macetaFlora.png" alt=""/>, precio: 800, stock : 10, info: "Color ladrillo" },
    { nombre : "Combo Paila", foto:<img src="/comboPaila.png" alt=""/> , precio: 2200, stock : 5, info: "Color a eleccion" },
    { nombre : "Combo Bandeja Oval",foto:<img src="/bandejaOval.png" alt=""/> , precio: 1250, stock : 5, info: "Colores blanco, verde, amarillo" },
    { nombre : "Combo Bandeja Rectangular " , foto:<img src="/bandejaRectangular.png" alt=""/>, precio: 1250, stock : 2, info: "Colores blanco, verde, amarillo" },
    { nombre : "Maceta Canelon" , foto: <img src="/macetaCanelon.png" alt=""/>, precio: 800, stock : 5, info: "Color ladrillo, negro, gris, verde" },
    { nombre : "Maceta Geo" ,foto:<img src="/macetaGeo.png" alt=""/>, precio: 800, stock : 1, info: "Colores blanco o amarillo" }

]

const newProductos = productos.filter((productos)=> productos.nombre=== "Maceta Canelon" );


function ItemDetail() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {


        const promesa = new Promise((res) => {
            setTimeout(() => {
                console.log("Soy el timeout")
                res(productos)
            }, 2000)
        })

        promesa.then((productos) => {
            setLoading(false)
            setProductos(productos)
        })

        
    }, [])


    const DetailItem = () => { }
    return (
        <div id="ventaMacetas">
            <h1>Elegi la maceta o combo que mas te guste!. La preferida del mes es:</h1>
            {newProductos.map((item, idx) => (
                <ul>
                    <li key={idx}>
                    <h2> {item.nombre}</h2>
                        <h2> {item.foto}</h2>
                        <h4>Precio: $ {item.precio} </h4>
                        <h4>Stock: {item.stock}</h4>
                        <h5>Info: {item.info}</h5>
                        <Contador stock={5} initial={1} />
                        <h5><button>Agregar al Carrito</button></h5>
                    </li>
                </ul>
            )

            )}
        </div>
    )
}

export default ItemDetail
