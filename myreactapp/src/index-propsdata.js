import React from "react";
import ReactDOM from "react-dom/client";

const User = props => {
    const { id, name, status, address: { city } } = props
    return <>
        <h1>Id {id}</h1>
        <h1>Name {name}</h1>
        <h1>Status {status ? "Available" : "Not Available"}</h1>
        <h1>City {city}</h1>
    </>
}


const App = () => {
    let status = false
    let address = {
        city: 'Coimbatore'
    }
    return <>
        <User id={1} name="Subramanian" status={status} address={address} />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)