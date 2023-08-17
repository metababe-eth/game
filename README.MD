Game

In our game, you can choose a class, level up, cast spells, and attack mobs until you die.

# Day 1 of game

I want to be able to level up a character, and increase its stats.

The stats of each character: 

Level
Attack
Magic
Defense
Speed
Health
Mana

In our game, 10 is a very large stat, the max to start with 1 is the loweest.
These are the boundaries we are goign to define.

Halth and Mana are different. they have no bounds.

Boatman (mage) is High Mana and High Magic, but low HP/Attack character THAT STARTS WITH FIREBALL spell.

Shaman is a mid-range allrounder and starts with a baby Imp pet, and the weopan Thunderfury and lightHeal
Catman (warlock) is a high HP, weak character that will deal most of its damage with summons, and starts with a Jumbo Shrimp pet.
## Game Rules
Our game logic dictates that a character's damage is calculated using this algorrithm:

- If a character has an activePet, we take the activePet's damage as starting value, and add it to the characters magic damage.
- If a characters is casting a spell, we take the spell's damage and add it to the character's magic damage.
- If a character has neither an activePet, nor a spell, we take their weopan's damage and add it to the character's attack damage.

## Pet Logic

A character can have an array of pets, but can only have a single active pet. They have to summon the pet.
