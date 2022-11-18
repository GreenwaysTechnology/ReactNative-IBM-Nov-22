import React from "react";
import ReactDOM from "react-dom/client";

const style = {
    textAlign: 'center',
}
//state 
class Rating extends React.Component {
    //state declaration
    state = {
        rating: 0
    }
    //listener
    onRate = () => {
        //setState : pure function , mutates the state of the component in mutable way
        //and triggers render cycle
        // this.setState((prvState) => {
        //     //return immutable new state object 
        //     // return {
        //     //     rating: prvState.rating+1
        //     // }
        //     // return Object.assign({}, prvState, { rating: prvState.rating + 1 })
        //     return { ...prvState, rating: prvState.rating + 1 }
        // })

        this.setState((prvState) => ({ ...prvState, rating: prvState.rating + 1 }))
    }

    render() {
        console.log('render', this.state)
        return <div >
            <h1 style={style}>Rating App</h1>
            <div>
                <h2>Rating : {this.state.rating}</h2>
                <button onClick={this.onRate} >+</button>
            </div>
        </div>
    }
}

const App = () => {
    return <>
        <Rating />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)