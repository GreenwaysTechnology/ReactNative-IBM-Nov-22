//how to return function from another

// function counter() {
//     console.log('counter')
//     return function inc() {
//         console.log('inc')
//     }
// }
// function counter() {
//     console.log('counter')
//     return function () {
//         console.log('inc')
//     }
// }

// function counter() {
//     console.log('counter')
//     return () => console.log('inc')
// }


// const counter = () => {
//     console.log('counter')
//     return () => console.log('inc')
// }


const counter = () => () => console.log('inc')
// const fn = counter()
// console.log(fn)
// fn()
counter()()