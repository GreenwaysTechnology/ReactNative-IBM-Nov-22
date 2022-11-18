import React from "react";
import ReactDOM from "react-dom/client";

class TodoApp extends React.Component {
    state = {
        todos: ['learn react']
    }
    onSave = () => {
        this.setState(prvState => {
            // return {
            //     todos : prvState.todos.concat('Learn React Native')
            // }
            return { ...prvState, todos: prvState.todos.concat('new Item') }
        })
    }
    render() {
        console.log('state', this.state)
        return <div >
            <h1>Todo App</h1>
            <h2>Todos</h2>
            <ul>
                {
                    this.state.todos.map((todo, index) => {
                        return <li key={index}>{todo}</li>
                    })
                }
            </ul>
            <hr />
            <button onClick={this.onSave}>Add Todo</button>
        </div>
    }
}

const App = () => {
    return <>
        <TodoApp />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)