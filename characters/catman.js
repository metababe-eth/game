const Pet = require('./pet')
const Character = require("./character")


class Catman extends Character {
    constructor(name) {
        super(name, "Catman", 3, 3, 7, 5, 200, 100);
        this.pets = [] ;
        // each Catman starts with a Cattoy as its first pet!
        const jumboShrimp = new Pet("Jumbo Shrimp", 3);
        this.pets.push(jumboShrimp);
    }
}

module.exports = Catman;