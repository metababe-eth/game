//this is where game logic lives
//we will put mechanics of our game here, and slowly build over next few lessons.

// i want to create a new warlock in my game. 
//the warlock is NOT located in this file. the warlock FACTORY
//the actual warlock itself should be located in this file. it's the game!

//how should i go about getting the warlock class form the other file?


const Catman = require("./characters/catman");
const Shaman = require("./characters/shaman");
const Boatman = require("./characters/boatman");

const shaman = new Shaman("Baba");
console.log(shaman);

const catman = new Catman("Maxwell");
console.log(catman);

const boatman = new Boatman("Hickey")
console.log(boatman);

shaman.levelUp();
console.log(shaman);

boatman.levelUp();
console.log(boatman);

catman.levelUp();
console.log(catman);

catman.summonPet("Jumbo Shrimp");
console.log(catman);

shaman.summonPet("baby imp")
console.log(shaman)

console.log(shaman.getDamage());