import { useState,useEffect} from 'react';
import React from 'react';
import './index.js';

import Header from "./components/Header";
import Saludo from "./greeting";
import Footer from "./components/Footer";
import Button from "./button";
import Contador from './ItemListContainer/Contador';
import ItemCount from './ItemListContainer/ItemCount.js';
import ItemDetailContainer from './ItemListContainer/ItemDetailContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const footerData = {
        copyright :"Copyright© 2021",
        author: "Anana"
    }


const [estado ] = useState(false);
console.log(estado);

useEffect (() => {
    console.log("Aca está el efecto");

    setTimeout (()=>{
        console.log("Se activa");
    },2000)
    setInterval(() => {
        console.log("Aqui tenes el intervalo");
    }, 8000);
    
})

    return (
        <>
        <Header/>
        <Saludo/>
        <Contador stock={5} initial={1}/>
        <Button label ="Productos"/>
        <ItemCount/>
        <ItemDetailContainer/>
        <Footer data ={footerData}/>
    
        </>
    )
}

export default App;