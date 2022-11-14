//es 6 default args 
function add(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    let c = a + b
    console.log(`The add result is ${c}`)
}
add(10, 10)
add() // no value is passed