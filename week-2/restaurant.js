module.exports = class Restaurant {
    constructor (brand, foundationYear) {
        this.brand = brand
        this.foundationYear = foundationYear
               
    }

    advertisement(restaurant) {
        console.log('Hello ' + restaurant.brand + ' ,' + this.brand + ' is founded at ' + this.foundationYear)
    }

}
 