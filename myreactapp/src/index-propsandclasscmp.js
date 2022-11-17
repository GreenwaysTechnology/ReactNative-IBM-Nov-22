import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types'

const User_ = ({ id, name, status, address: { city } }) => {
    return <>
        <h1>Id {id}</h1>
        <h1>Name {name}</h1>
        <h1>Status {status ? "Available" : "Not Available"}</h1>
        <h1>City {city}</h1>
    </>
}

//class components and props 

class User extends React.Component {
    render() {
        //in class component props are available via this.props variable
        //props is base class variable
        const { id, name, status, address: { city } } = this.props
        return <>
            <h1>Id {id}</h1>
            <h1>Name {name}</h1>
            <h1>Status {status ? "Available" : "Not Available"}</h1>
            <h1>City {city}</h1>
        </>
    }
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
//setting property validation rules 
User.propTypes = {
    id: PropTypes.number
}

const App = () => {
    let status = false
    let address = {
        city: 'Coimbatore'
    }
    return <>
        <User />
        {/* <User id={"1"} name="Subramanian" status={true} /> */}
        <User id={1} name="Subramanian" status={true} />

    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)