import React from "react";
import ReactDOM from "react-dom/client";

const User = ({ id, name, status, address: { city } }) => {
//    const { id, name, status, address: { city } } = props
  
    return <>
        <h1>Id {id}</h1>
        <h1>Name {name}</h1>
        <h1>Status {status ? "Available" : "Not Available"}</h1>
        <h1>City {city}</h1>
    </>
}

//setting default properties
User.defaultProps = {
    id: 0,
    name: 'Your Name',
    status: false,
    address: {
        city: 'Your city '
    }
}


const App = () => {
    let status = false
    let address = {
        city: 'Coimbatore'
    }
    return <>
        <User />
        <User id={1} name="Subramanian" status={true} />

    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)