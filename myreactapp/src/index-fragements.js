import React from "react";
import ReactDOM from "react-dom/client";

// const Greeting = () => {
//     return <React.Fragment>
//         <h1>IBM</h1>
//         <p>this is paragraph</p>
//     </React.Fragment>
// }

// const Greeting = () => {
//     return <Fragment>
//         <h1>IBM</h1>
//         <p>this is paragraph</p>
//     </Fragment>
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