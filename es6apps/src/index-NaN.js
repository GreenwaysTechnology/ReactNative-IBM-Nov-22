//type conversion and NaN

let a = 10  // number
let b = "$20" // string but value is number 

let c = a * b  //here js conversion b(string) to number automatically - implicit
console.log(`a ${a} b ${b} c ${c}`)

//explicit conversion using parseFunction
c = a * parseInt(b)
console.log(`a ${a} b ${b} c ${c}`)

//explicit conversion using Number function 
c = a * Number(b)
console.log(`a ${a} b ${b} c ${c}`)

//explicit conversion using tenary + opeartor
c = a * +b
console.log(`a ${a} b ${b} c ${c}`)