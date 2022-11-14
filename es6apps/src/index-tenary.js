//tenary operator

let a = 10
let b = 20
if (a === b) {
    console.log("a and b are equal")
} else {
    console.log("a and b are not equal")
}
//using tenary
(a === b) ? console.log("a and b are equal") : console.log("a and b are not equal")

let c = (a === b) ? "a and b are equal" : "a and b are not equal"
console.log(c)