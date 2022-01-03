
import React from "react"
import Contador from "./Contador"

function ItemDetail({producto}) {
    const {nombre, precio, stock, info, foto} = producto
    return (
        <div>
            <h2> {nombre} </h2>
            <img style={{width:"160px", height:"160px"}}src={foto} alt={nombre}/>
            <h4>Precio: $ {precio} </h4>
            <h4>Stock: {stock}</h4>
            <h5>Info: {info}</h5>
            <Contador stock={stock} initial={1} />
            <h5><button>Agregar al carrito</button></h5>
        </div>
    )
}

export default ItemDetail
