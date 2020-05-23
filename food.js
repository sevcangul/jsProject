const Chalk = require('chalk')
module.exports = class Food {
    constructor (name, customers = []) {
        this.name = name
        this.customers = customers
    }

    printCustomerName() {
        this.customers.forEach(printName)
    }

    static create({name, customers}) {
        return new Food(name, customers)
    }

}

printName = customer => console.log(Chalk.bgRed(customer.name))