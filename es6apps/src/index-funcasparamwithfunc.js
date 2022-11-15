//how to pass values into function .

function add(a, b) {
    let c = a + b
    console.log(c)
}
add(10, 10)
let x = 10
let y = 20
add(x, y)
/////////////////////////////////////////////////////////////////////////////////////

function sayHello(hello) {
    hello()
}
//pass function as parameter
sayHello(function () {
    console.log('Hello')
})
let myHello = function(){
    console.log('my Hello')
}
sayHello(myHello)