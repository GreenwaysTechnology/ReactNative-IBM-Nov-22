import React from "react";
import ReactDOM from "react-dom/client";

const style = {
    textAlign: 'center',
}
class Rating extends React.Component {
    //state declaration
    state = {
        like: 0,
        dislike: 0
    }
    //External listener
    onLike = () => {
        this.setState((prvState) => ({ ...prvState, like: prvState.like + 1 }))
    }

    render() {
        console.log('state', this.state)
        return <div >
            <h1 style={style}>Rating App</h1>
            <div>
                <h2>Likes {this.state.like} Dislike {this.state.dislike}</h2>
                <button onClick={this.onLike} >Like</button>
                <button onClick={() => {
                    this.setState((prvState) => ({ ...prvState, dislike: prvState.dislike + 1 }))

                }} >Dislike</button>

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