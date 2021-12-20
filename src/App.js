import './index.js';
import Header from "./components/Header";
import Saludo from "./greeting";
import Footer from "./components/Footer";


function App() {
    const footerData = {
        copyright :"Copyright© 2021",
        author: "Anana"
    }

    return (
        <>
        <Header/>
        <Saludo/>
        <Footer data ={footerData}/>
        </>
    )
}

export default App;