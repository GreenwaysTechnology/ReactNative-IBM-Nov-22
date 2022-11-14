let myvar //undefined

if (myvar) {
    console.log(`${myvar} is valid`)
} else {
    console.log(`${myvar} is invalid`)
}
myvar = 0
if (myvar) {
    console.log(`${myvar} is valid`)
} else {
    console.log(`${myvar} is invalid`)
}

myvar = ""
if (myvar) {
    console.log(`${myvar} is valid`)
} else {
    console.log(`${myvar} is invalid`)
}

myvar = 10 * undefined
if (myvar) {
    console.log(`${myvar} is valid`)
} else {
    console.log(`${myvar} is invalid`)
}


myvar = null
if (myvar) {
    console.log(`${myvar} is valid`)
} else {
    console.log(`${myvar} is invalid`)
}

myvar = false
if (myvar) {
    console.log(`${myvar} is valid`)
} else {
    console.log(`${myvar} is invalid`)
}

//
let mynewVar = "subramanian"
if (mynewVar) {
    console.log(`${mynewVar} is valid`)
} else {
    console.log(`${mynewVar} is invalid`)
}
mynewVar = 12
if (mynewVar) {
    console.log(`${mynewVar} is valid`)
} else {
    console.log(`${mynewVar} is invalid`)
}