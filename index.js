const Restaurant = require('./restaurant.js')
const Customer = require('./customer')
const Food = require('./food')
const Chalk = require('chalk')
const Database = require('./database')

const sevcan = new Customer ('Sevcan')
const dilek = new Customer ('Dilek')

const orderedFood = new Food ('Hamburger')


sevcan.order(orderedFood)
dilek.order(orderedFood)

orderedFood.printCustomerName()
console.log(Chalk.blue('hello world'))
console.log(sevcan)
console.log(dilek)

Database.save('food.json',orderedFood)
Database.save('customer.json',sevcan)

const loadedFile = Database.load('food.json')
console.log(loadedFile.customers[0].name)


