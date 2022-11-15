
function displayEmployee(employee) {

    //print employee
    console.log(`id ${employee.id}`)
    console.log(`name ${employee.name}`)
    console.log(`salary ${employee.salary}`)
    console.log(`city ${employee.address.city}`)

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