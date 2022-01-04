import React from "react";
import ItemDetailContainer from "./ItemDetailContainer";

function ItemList() {

    const listaProductos = [
        {id:1,nombre: "Maceta Flora" , foto: "/macetaFlora.png", precio: 650, stock:2, info: "color ladrillo o amarillo" } ,
        {id:2,nombre: "Combo Paila" , foto: "/comboPaila.png", precio: 1500,  stock:5, info: "color gris con franja a eleccion"} ,
        {id:3,nombre: "Maceta Canelon" , foto: "/macetaCanelon.png", precio: 750, stock:5, info: "color ladrillo, amarillo, verde"} ,
        {id:4,nombre: "Combo Bandeja Oval", foto: "/bandejaOval.png",precio: 1250, stock:5, info: "color blanco,gris o marmolado" } ,
        {id:5,nombre: "Combo Maceta Rectangular", foto:"/bandejaRectangular.png", precio: 1250, stock:3, info: "color blanco, verde, amarillo" } ,
        {id:6,nombre: "Maceta Geo" , foto: "/macetaGeo.png", precio: 900, stock:1, info: "color ladrillo,gris o amarillo" } ,
    ]

    return (
        <>
        <ItemDetailContainer listaProductos = {listaProductos}/>
        </>
    )
}


export default ItemList
