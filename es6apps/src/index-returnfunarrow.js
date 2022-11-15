// const counter = () => {
//     return (value) => {
//         return value * 2
//     }
// }
const counter = () => value => value * 2
console.log(counter()(10))