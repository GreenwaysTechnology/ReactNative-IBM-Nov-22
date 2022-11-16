//dom element using react .
import React from "react";
import ReactDOM from "react-dom/client";

//variable Pattern
//Heading is just variable which points DOM object/component
const Heading = <h1>Hello React!</h1>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(Heading)