
// function getStock(id = 1, symbol = 'google', qty = 0, price = 0) {
//     //return object
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }


// function getStock(id = 1, symbol = 'google', qty = 0, price = 0) {
//     //key:value
//     //instanceVariable:localvariable
//     //if both variable are same ; id:id => we can remove one 
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }

// const getStock = (id = 1, symbol = 'google', qty = 0, price = 0) => {
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
const getStock = (id = 1, symbol = 'google', qty = 0, price = 0) => ({
        id,
        symbol,
        qty,
        price
})

console.log(getStock(100, 'Meta', 1000, 18900))
console.log(getStock())