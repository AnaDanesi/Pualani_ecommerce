// 1 Tener a React en scope
//import React from "react";
//const React = require('react')

// 2 Tener a ReactDOM en scope
import ReactDOM from "react-dom";

// 3 Tener por lo menos un componente
import App from "./App";

// 4 Mostrar la app en el DOM
ReactDOM.render(<App/>,document.getElementById('root'));