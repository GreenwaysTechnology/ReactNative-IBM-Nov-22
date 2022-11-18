
//impure function
//array push method modifies existing array memory address
//push is mutable api : dont use
// function addTodo(todos, todo) {
//     return todos.push(todo)
// }
// //pure function
// function addTodo(todos, todo) {
//     return todos.concat(todo)
// }
//spread operator
//pure function
function addTodo(todos, todo) {
    return [...todos,todo]
}

let todos = [{
    title: 'Learn react',
    done: true
}];
let addedTodos = addTodo(todos, { title: 'Learn Pure functions', done: false })
console.log(todos === addedTodos ? "Same" : "Different")