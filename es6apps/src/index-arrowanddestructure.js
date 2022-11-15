
// function displayEmployee(employee) {
//     //de structure the object properties into local variables
//     const { id, name, salary, address: { city } } = employee
//     //print employee
//     console.log(`id ${id}`)
//     console.log(`name ${name}`)
//     console.log(`salary ${salary}`)
//     console.log(`city ${city}`)
// }


// function displayEmployee({ id, name, salary, address: { city } }) {
//     console.log(`id ${id}`)
//     console.log(`name ${name}`)
//     console.log(`salary ${salary}`)
//     console.log(`city ${city}`)
// }

const displayEmployee = ({ id, name, salary, address: { city } }) => {
    console.log(`id ${id}`)
    console.log(`name ${name}`)
    console.log(`salary ${salary}`)
    console.log(`city ${city}`)
}

//pass object as parameter
displayEmployee({ id: 1, name: 'Subramanian', salary: 2000, address: { city: 'Coimbatore' } })

let emp = {
    id: 1,
    name: 'Subramanian',
    salary: 2000,
    address: {
        city: 'Coimbatore'
    }
}
displayEmployee(emp)