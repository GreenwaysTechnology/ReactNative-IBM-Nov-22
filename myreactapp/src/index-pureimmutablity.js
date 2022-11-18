//Pure function Rule B

//impure function
function updateCustomer__(customer, city) {
    //city 
    customer.city = city
    return customer
}

//pure function : using immutable objects 
//immutable object , you have to create new object for any changes
//way -1
// function updateCustomer(customer, city) {
//     return {
//         id: customer.id,
//         name: customer.name,
//         city: city
//     }
// }
// //way 2- Object.assign - clone api to clone safely of existing object
// function updateCustomer(customer, city) {
//     return Object.assign({}, customer, { city: city })
// }

//way 3: Using spread operator(es 7 )feature to clone the object  ... 
//way 2- Object.assign - clone api to clone safely of existing object
function updateCustomer(customer, city) {
    //return { ...customer, city: city }
    return { ...customer, city }

}


let customer = {
    id: 1,
    name: 'Subramanian',
    city: 'Delhi'
}
console.log('before update', customer)
let result = updateCustomer(customer, 'Coimbatore')
console.log('after update', result)
console.log('same customer ', customer === result ? 'same' : 'different')
