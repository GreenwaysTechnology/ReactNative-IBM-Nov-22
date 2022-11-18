import React from "react";
import ReactDOM from "react-dom/client";

//pure function : the input parameters(props) are not modified rather just we return
//according to props every component is pure function
const Greeting = props => {
   // props.message = "hai"
    return <div>
        <h1>Message {props.message}</h1>
    </div>
}


const App = () => {
    return <>
        <Greeting message="hello" />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)