import ItemList from "./ItemList.js"
import {  useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const listaProductos = [
    {id:1,nombre: "Maceta Flora" , foto: "/macetaFlora.png", precio: 650, stock:5, info: "color ladrillo o amarillo" ,categoria:"macetas" } ,
    {id:2,nombre: "Combo Paila" , foto: "/comboPaila.png", precio: 1500,  stock:5, info: "color gris con franja a eleccion" , categoria:"combos" } ,
    {id:3,nombre: "Maceta Canelon" , foto: "/macetaCanelon.png", precio: 750, stock:5, info: "color ladrillo, amarillo, verde", categoria:"macetas" } ,
    {id:4,nombre: "Combo Bandeja Oval", foto: "/bandejaOval.png",precio: 1250, stock:5, info: "color blanco,gris o marmolado" ,categoria:"combos" } ,
    {id:5,nombre: "Combo Maceta Rectangular", foto:"/bandejaRectangular.png", precio: 1250, stock:3, info: "color blanco, verde, amarillo" ,categoria:"combos" } ,
    {id:6,nombre: "Maceta Geo" , foto: "/macetaGeo.png", precio: 900, stock:1, info: "color ladrillo,gris o amarillo",categoria:"macetas"  } ,
];

const ItemListContainer = ({ titulo }) => {

  let [lista, setLista] = useState([])
  const {id} = useParams()
  console.log(id)

  

  useEffect(() => {
      if(id){
          console.log("Productos de la categoria " + id)
          const filterCategoria = listaProductos.filter(e => e.categoria === id);
          console.log(filterCategoria)
          const promesa = new Promise((res, rej) => {
              setTimeout(() => {
                  res(filterCategoria)
              }, 1000)
          })
          promesa
              .then((lista) => {
                  console.log("Great")
                  setLista(lista)
              })
              .catch(() => {
                  console.log("Bad")
              })
      }else{
          console.log("Aca se pide todo el catalogo")
          const promesa = new Promise((res, rej) => {
              setTimeout(() => {
                  res(listaProductos)
              }, 1000)
          })
          promesa
              .then((lista) => {
                  console.log("Great")
                  setLista(lista)
              })
              .catch(() => {
                  console.log("Bad")
              })
      }

  }, [id])

      return (
      <div>
          <h2>{titulo}</h2>
          <ItemList lista={lista} />
      </div>
  )
}

export default ItemListContainer