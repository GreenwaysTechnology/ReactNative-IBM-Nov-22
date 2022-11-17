import React from "react";
import ReactDOM from "react-dom/client";

//react stores all properties inside a single object , which is called as prop or property object 
// function Greeting(props) {
//     console.log(props)
//     return <h1>{props.message} {props.name}</h1>
// }
// const Greeting = (props) => <h1>{props.message} {props.name}</h1>

//object destructuring
// const Greeting = props => {
//     const { name, message } = props
//     return <h1>{message} {name}</h1>
// }
const Greeting = ({ message, name }) => <h1>{message} {name}</h1>


// parent Component
// const App = () => {
//     return Greeting('Subramanian')
// }
const App = () => {
    // name is property / prop
    return <>
        <Greeting name="Subramanian" message="Hello" />
        <Greeting name="Geetha" message="Welcome" />
        <Greeting name="Dhivya" message="Hai" />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)