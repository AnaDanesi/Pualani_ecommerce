import Header from './Header'
import Footer from "./Footer"
import Main from './Main'
import { BrowserRouter } from "react-router-dom"
import "./index.css"



function App(){

    return (
        <BrowserRouter>
            <Header />
            <h1>Bienvenidos a nuestra Tienda Online</h1>
            <h2>Nuestro catálogo:</h2>
            <Main />
            <Footer /> 
        </BrowserRouter>
    )     
}
export default App