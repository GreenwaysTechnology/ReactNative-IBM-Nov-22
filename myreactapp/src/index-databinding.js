import React from "react";
import ReactDOM from "react-dom/client";



const Greeting = () => {
    const firstName = 'Subramanian'
    const lastName = 'Murugan'
    return <>
        <h1>Hello {firstName} {lastName} </h1>
    </>
}
const App = () => <div>
    <Greeting />
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)