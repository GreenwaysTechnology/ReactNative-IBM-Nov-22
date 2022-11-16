//dom element using react .
import React from "react";
import ReactDOM from "react-dom/client";

//declare dom element
const Heading = <h1>Hello React!</h1>

//Get the root element
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(Heading)