//pure function
//Rule 1: if function receives input,it returns the same, that function is called pure function.


//This function is pure function 
function getData(message) {
    return message
}
console.log(getData('hello'))

//impure function 
function update(message) {
    message = "test"
    return message
}
console.log(update('something'))