import { useContext, useState } from "react";
import { contexto } from "./CartContext";
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { Button } from 'react-bootstrap';
import {db} from "./firebase";
import { collection , addDoc , serverTimestamp } from "firebase/firestore";


const Cart = () => {

  const {carrito,deleteItem,limpiarCarrito,cantidad_total} = useContext (contexto)
  const [orden,  setOrden] = useState(false)

  const crearOrden = () => {

      const coleccionProductos = collection(db,"ordenes de productos")

      const usuario = {
          nombre : "Ana",
          email : "anana@hotmail.com",

      }

      const orden = {
          usuario ,
          carrito,
          cantidad_total,
          created_at : serverTimestamp()
      }
      
      
      const pedido = addDoc(coleccionProductos,orden)

      pedido
      .then((resultado)=>{
          setOrden(resultado.id)
          alert("Tu compra ha sido procesada correctamente! ")
          limpiarCarrito()

      })
      .catch((error)=>{
          console.log(error)
      })

  }

if (carrito.length === 0){
  return(
  <div>
          <h4>No hay nada en el carrito</h4>
          <Link to='/'><h2>Ir al Home</h2></Link>
          {orden && <h4>Gracias por tu compra!   Orden N°:  {orden}</h4>} 
      
  </div>
  )
} else {
  return (
      <>
      <div>
      <h3>Tu Carrito:</h3>
      {(carrito.length > 0) && carrito.map(prod=> <CartItem key={prod.item.id} item={prod} deleteItem={deleteItem} />)}
      <br></br>

      <h3><Button variant='danger' onClick={() => limpiarCarrito()}>Borrar Carrito</Button></h3>
      <br></br>
      <h2><button onClick={crearOrden}>Confirma tu compra</button></h2>
      {orden && <h4>Gracias por tu compra!   Orden N°:  {orden}</h4>} 
      <br></br>
      </div>
      </>
  )
}
}



export default Cart