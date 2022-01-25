import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { Button } from 'react-bootstrap';

const Cart = () => {

  const {carrito,deleteItem,limpiarCarrito} = useContext (contexto)
 
  return (
    <div>
      {carrito.length === 0 &&
        <div>
          <h4>No hay nada en tu carrito</h4>
          <Link to='/'><h2>Regresar al Home</h2></Link>
        </div>
      }
      <h3>Carrito de macetas:</h3>
      {(carrito.length > 0) && carrito.map(prod=> <CartItem key={prod.item.id} item={prod} deleteItem={deleteItem} />)}
      <br></br>

      <h3><Button variant='danger' onClick={() => limpiarCarrito()}>Vaciar Carrito</Button></h3>
      <br></br>
      <h2>Finalizar Compra</h2>

    </div>
    
   
  )
}


export default Cart