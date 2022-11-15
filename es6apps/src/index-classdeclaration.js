//object template.

// function Employee(id = 0, name = 'default', salary = 0) {
//     //instance variables
//     this.id = id
//     this.name = name
//     this.salary = salary
//     //instance methods
//     this.calculateSalary = (noOfdays) => {
//         return this.salary * noOfdays
//     }
// }
//type of 


class Employee {
    constructor(id = 0, name = 'default', salary = 0) {
        //instance variables
        this.id = id
        this.name = name
        this.salary = salary
    }
    //instance methods
    // calculateSalary = (noOfdays) => {
    //     return this.salary * noOfdays
    // }
    calculateSalary(noOfdays) {
        return this.salary * noOfdays
    }
}
//create object  
//emp is reference variable
//new is operator
//Employee() , constructor call 
let emp = new Employee(12, undefined, 1000)
console.log(`id ${emp.id} ${emp.name} ${emp.calculateSalary(100)}`)



class Employee {
    //instance variable inside class
    id =0
    name=''
    salary=0 
    // constructor(id = 0, name = 'default', salary = 0) {
    //     //instance variables
    //     this.id = id
    //     this.name = name
    //     this.salary = salary
    // }
    //instance methods
    // calculateSalary = (noOfdays) => {
    //     return this.salary * noOfdays
    // }
    calculateSalary(noOfdays) {
        return this.salary * noOfdays
    }
}