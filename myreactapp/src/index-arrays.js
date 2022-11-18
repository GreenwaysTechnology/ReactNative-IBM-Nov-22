import React from "react";
import ReactDOM from "react-dom/client";
import { TODOS } from './mock-data/todos'

const TodoList = props => {
    console.log(props)
    return <div>
        <h1>Todo App </h1>
        <ul>
            {/* {
                props.todos.map(todo => {
                    return <li>{todo.title}</li>
                })
            } */}
            {
                props.todos.map(todo => <li key={todo.id}>{todo.title}</li>)
            }
        </ul>
    </div>
}

const App = () => {
    return <>
        <TodoList todos={TODOS} />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)