import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const style = {
    textAlign: 'center',
}
//class Compoent
class Rating__ extends React.Component {
    //state declaration
    state = {
        rating: 0
    }
    //listener
    onRate = () => {
        this.setState((prvState) => ({ ...prvState, rating: prvState.rating + 1 }))
    }

    render() {
        console.log('render', this.state)
        return <div >
            <h1 style={style}>Rating App-Class Component</h1>
            <div>
                <h2>Rating : {this.state.rating}</h2>
                <button onClick={this.onRate} >+</button>
            </div>
        </div>
    }
}

//functional Component
const Rating = props => {
    //state declaration
    const [rating, setRating] = useState(10)

    //listener
    const onRating = () => {
        setRating((prevRating) => {
            return prevRating + 1
        })
        // setRating(rating + 1)
    }
    return <div>
        <h1 style={style}>Rating App- Using Hooks</h1>
        <div>
            <h2>Rating : {rating}</h2>
            <button onClick={onRating}>+</button>
        </div>
    </div>
}

const App = () => {
    return <>
        <Rating />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)