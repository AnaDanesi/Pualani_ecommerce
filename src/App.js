import Header from './Header'
import Footer from "./Footer"
import Main from './Main'
import CartProvider from "./CartContext";
import { BrowserRouter } from "react-router-dom"
import "./index.css"



function App(){

    return (
        <CartProvider> 
        <BrowserRouter>
            <Header />
            <h1>¡Bienvenidos!</h1>
            <h2>Nuestro catálogo:</h2>
            <Main />
            <Footer /> 
        </BrowserRouter>
        </CartProvider> 
    )     
}
export default App