//object template.

function Employee(id = 0, name = 'default', salary = 0) {
    //instance variables
    this.id = id
    this.name = name
    this.salary = salary
    //instance methods
    this.calculateSalary = (noOfdays) => {
        return this.salary * noOfdays
    }
}
//create object  
//emp is reference variable
//new is operator
//Employee() , constructor call 
let emp = new Employee(12, 'Subramanian', 1000)
console.log(`id ${emp.id} ${emp.name} ${emp.calculateSalary(100)}`)
