const Chalk = require('chalk')
module.exports = class Food {
    constructor (name) {
        this.name = name
        this.customers = []
    }

    printCustomerName() {
        this.customers.forEach(printName)
    }

}

printName = customer => console.log(Chalk.bgGreen(customer.name))