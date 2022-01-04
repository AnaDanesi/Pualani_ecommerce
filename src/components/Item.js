import React from "react";


const Item = ({producto}) => {

  const {nombre, foto} = producto
  return (
    <div>
      <li>
        <h2> {nombre}</h2>
      <img src={foto}/>
      </li>
    </div>
  )
}

export default Item