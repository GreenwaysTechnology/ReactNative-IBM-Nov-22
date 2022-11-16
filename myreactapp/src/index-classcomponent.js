import React from "react";
import ReactDOM from "react-dom/client";

//class component
class Heading extends React.Component {
    render() {
        return <h1>Welcome to React!!</h1>
    }
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

//function call : imperative code 
// rootElement.render(Heading())
//function call : declarative code
rootElement.render(<Heading />)