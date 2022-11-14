//es 5 anonmous function
let hello = function (name = 'default') {
    console.log(`Hello ${name}`)
}
hello('Subramanian')
//es 6 arrow function
let hai = (name = 'default') => {
    console.log(`Hai ${name}`)
}
hai('Subramanian')
//short cuts for arrows
//if function has only one line of body : remove {}
hai = (name = 'default') => console.log(`Hai ${name}`)
hai('Subramanian')

//returns and arrow
let add = function (a = 10, b = 20) {
    return a + b
}
console.log(add())
//arrow 
add = (a = 10, b = 20) => {
    return a + b
}
console.log(add())
//short cut :if function returns only we can remove {} and return statement
add = (a = 10, b = 20) => a + b
console.log(add())

//if function takes single arg no default value, and return the same 
let getStockValue = function (value) {
    return value
}
console.log(getStockValue(10))

//arrow
getStockValue = (value) => value
console.log(getStockValue(10))
//if no default,single arg , we can remove ()
getStockValue = value => value
console.log(getStockValue(10))