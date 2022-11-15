//arrow functions : function as parameter
const sayHello = hello => hello()
//pass function as parameters
// sayHello(function () {
//     console.log('hello')
// })

sayHello(() => console.log('hello'))
const hello = () => console.log('my new hello')
sayHello(hello)