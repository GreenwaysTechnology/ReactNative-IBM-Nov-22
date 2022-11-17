import React from "react";
import ReactDOM from "react-dom/client";

//component name must start with upper case other wise it will not render
// const greeting = () => {
//     return <>
//         <h1>IBM</h1>
//         <p>this is paragraph</p>
//     </>
// }

const Greeting = () => {
    return <>
        <h1>IBM</h1>
        <p>this is paragraph</p>
    </>
}
//Root Node 
const App = () => <div>
    <Greeting />
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)