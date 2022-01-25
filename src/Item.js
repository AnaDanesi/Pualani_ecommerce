import {Link} from "react-router-dom"

const Item = ({ producto}) => {
    return (
        <article id="elDetalle">
            <h3>{producto.nombre}</h3>
            <img src={producto.img} alt={producto.nombre} width={250} ></img>
            <p>Precio : ${producto.precio}</p>
            <Link to ={"/item/"+producto.id}><button>Ver Mas</button></Link>
        </article>
    )
}

export default Item