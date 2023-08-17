const Pet = require('./pet')
const Character = require("./character");
const thunderfury = require("../weapons/thunderfury")
const lightHeal = require("../spells/lightheal")

class Shaman extends Character {
    constructor(name) {
        super(name, "Shaman", 6, 6, 8, 3, 100, 100);
        this.pets = [] ;
        // All Shaman start with an Imp as its first pet!
        const babyImp = new Pet("baby imp", 5);
        this.pets.push(babyImp);
        this.weapons.push(thunderfury);
        this.spells.push(lightHeal);
    }
}

module.exports = Shaman;