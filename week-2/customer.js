module.exports = class Customer {
    constructor (name) {
        this.name = name
        //this.foods = []
    }

    order(food) {
        //this.foods.push(food)
        this.food = food.name
        food.customers.push(this)


    }
}