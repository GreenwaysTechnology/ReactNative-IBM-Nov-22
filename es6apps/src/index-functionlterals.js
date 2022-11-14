//function as literal

//synax -1 
function sayHello(name = 'defaultName') {
    console.log(`Hello ${name}`)
}
const hello = sayHello // here we are not calling 
//if function is assigned to a variable, that variable can be used to invoke that function.
hello('subramanian')

//syntax 2: anonmous function 
const hai = function (name = 'default') {
    console.log(`Hai ${name}`)
}
hai('Subramanian')

const add = function (a = 0, b = 0) {
    return a + b
}
console.log(add(10,10))