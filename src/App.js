import './index.js';
import Header from "./components/Header";
import Saludo from "./greeting";
import Footer from "./components/Footer";
import Button from "./button";
import Contador from './container/Contador';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const footerData = {
        copyright :"Copyright© 2021",
        author: "Anana"
    }

    return (
        <>
        <Header/>
        <Saludo/>
        <Contador stock={5} initial={1}/>
        <Button label ="Productos"/>
        <Footer data ={footerData}/>
    
        </>
    )
}

export default App;