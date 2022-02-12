import { useState } from "react"


function ItemCount ({ stock, onAdd}) {
    console.log(stock)
    const [contador, setContador] = useState(1)


    const aumentarContador = () => {
        if (stock === contador) {
            alert("No hay stock disponible")
        }else{
            setContador(contador + 1)
        }

    }
    const restarContador = () => {
        if (contador=== 1) {
            alert("Sin macetas cargadas")
        } else {
            setContador(contador - 1)
        }
    }
    const resetearContador = () => {
        setContador(0)
    }


    return (
            <div className="box-contador">
                <button onClick={aumentarContador}>+</button>
                <p className="p-contador">{contador}</p>
                <button onClick={restarContador} >-</button>
                <button onClick={resetearContador}><span className="material-icons">delete</span></button>
                <button onClick={() => onAdd(contador)}>Comprar </button>
            </div>
            
    )
}

export default ItemCount