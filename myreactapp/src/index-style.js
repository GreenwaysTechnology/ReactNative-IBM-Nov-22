//dom element using react .
import React from "react";
import ReactDOM from "react-dom/client";
import './App.css'


//style object 
const styleobj = {
    color: 'red',
    backgroundColor: 'yellow',
    border: "thick solid #0000FF"
}
const Heading = () => <>
    <h1 className="App-header">Welcome to React Native</h1>
    <h2 style={styleobj}>React</h2>
</>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<Heading />)