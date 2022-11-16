import React from "react";
import ReactDOM from "react-dom/client";

//functions pattern 
//es 5 function 
// function Heading() {
//     //should return component  / object 
//     return <h1>Welcome to React</h1>
// }

//es 6 Arrow Function 
const Heading = () => <h1>Welcome to React</h1>


const rootElement = ReactDOM.createRoot(document.getElementById('root'))

//function call : imperative code 
// rootElement.render(Heading())
//function call : declarative code
rootElement.render(<Heading />)