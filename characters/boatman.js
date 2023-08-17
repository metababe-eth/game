const Character = require("./character")
const fireball = require("../spells/fireball")


class Boatman extends Character {
    constructor(name) { 
        super(name, "Boatman", 2, 7, 3, 5, 50, 200);
        this.spells.push(fireball);
    }
}

module.exports = Boatman;