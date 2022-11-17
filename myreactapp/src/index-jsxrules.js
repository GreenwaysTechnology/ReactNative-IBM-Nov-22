import React from "react";
import ReactDOM from "react-dom/client";


// const Greeting  = ()=>{
//    // return <h1>Hello 
//    return <h1>Hello</h1>
// }
const Greeting = () => {
    // return <h1>Hello
    return <div>
        <h1>IBM</h1>
        <p>this is paragraph</p>
    </div>
}

//Root Node 
const App = () => <div>
    <Greeting />
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)