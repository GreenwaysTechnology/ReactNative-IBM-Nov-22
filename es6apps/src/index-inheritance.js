//base class
class Account {
    constructor() {
        console.log('Account ')
    }
    //methods
    deposit() {
        return 10
    }
    withdraw() {
        return 50
    }
}

//derived
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('SavingsAccount ')
    }
    //override
    deposit() {
        return 10 * super.deposit()
    }
    withdraw() {
        return 20 * super.withdraw()
    }
}

let sb = new SavingsAccount()
console.log(sb.deposit())
console.log(sb.withdraw())