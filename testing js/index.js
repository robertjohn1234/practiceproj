// console.log("Hello World");

// Create an object using object literals
// Initialize/add the object properties and methods
let trainer = {

// Properties
  name: 'Ash Ketchum',
  age: 10,
  pokemon: ['Pickachu', 'Charizard', 'Squirtle', 'Balbasaur'],
  friends: {
    friend1: ['Brock', 'Rock-type Pokemon trainer'],
    friend2: ['Misty', 'Water-type Pokemon trainer'],
    friend3: ['Professor Oak', 'Pokemon researcher'],
    friend4: ['Dawn', 'Pokemon coordinator']
  }
};

// Methods
trainer.talk = function() {
    return 'Pikachu! I choose you!';
}

// Check if all properties and methods were properly added
console.log(trainer);

// Access object properties using dot notation
console.log('Result of dot notation:');
console.log(trainer.name);

// Access object properties using square bracket notation
console.log('Result of square bracket notation:');
console.log(trainer['pokemon']);

// Access the trainer "talk" method
console.log('Result of talk method');
console.log(trainer.talk());

// Create a constructor function for creating a pokemon

function Pokemon(name, level) {

  // Properties
  this.name = name;
    this.level = level;
    this.health = 2 * level;
    this.attack = 1 * level;
    this.skills = ['Tackle', 'Thunderbolt'];

    // Method to use a skill on a target
    this.useSkill = function(target, skillIndex) {
        const targetHealth = target.health;
        const damage = this.attack;
        
        console.log(this.name + ' used ' + this.skills[skillIndex] + '!');
        console.log(target.name + '\'s health is reduced to ' + target.health);

        target.health -= damage;
        
        if (target.health <= 0) {
            this.faint(target);
        }
    };

    // Method to print a faint message
    this.faint = function(target) {
        console.log(target.name + ' has fainted.');
    };
}

// Create/instantiate a new pokemon
let pikachu = new Pokemon('Pikachu', 12);
console.log(pikachu);

// Create/instantiate a new pokemon
let geodude = new Pokemon('Geodude', 8);
console.log(geodude);

// Create/instantiate a new pokemon
let mewtwo = new Pokemon('Mewtwo', 50);
console.log(mewtwo);

// Create/instantiate a new pokemon
let pidgey = new Pokemon('Pidgey', 50);
console.log(pidgey);

// 11. Invoke the useSkill method of one pokemon object to see if it works as intended.
geodude.useSkill(pikachu, 0);  // Using 'Tackle' skill on Geodude
console.log(pikachu);

// Invoke the useSkill method and target a different object
;
mewtwo["useSkill"](geodude, 1);

// create catch method to catch pokemon with <= 10 health

Object.prototype.catch = function(pokemon) {

  if (pokemon.health <= 100000) {
    this.pokemon.push(pokemon.name);
    console.log(`Success! You caught ${pokemon.name}!`);

  } else {
    console.log(`${pokemon.name} ran away from the battle!`);
  }
};
trainer.catch(pidgey);
console.log(`Your pokemon are \n ${trainer.pokemon}`);

// add a method inside the Pokemon that will allow the pokemon to add/replace skills array

Pokemon.prototype.addSkill = function(skill) {
  
  if (this.skills.includes(skill)) {
    console.log(`${this.name} already learned ${skill}!`);

  } else {
    this.skills.push(skill);
    console.log(`You added  ${skill}! to ${this.name}'s skills!`);
  }
};

// add method that will allow a pokemon to evolve. this will change the name of the pokemon as well as the attack value
Pokemon.prototype.evolve = function(newName, newAttack, newType, newSkill) {

  console.log(`Something is happening to ${this.name}!`);
  console.log(`Suddenly ${this.name}! is glowing.`);
  console.log(`Your pokemon evolve into ${newName}!`);

  this.name = newName;
  this.attack = newAttack*this.level;

  if (!this.type) {
    this.type = [];
  }

  if (!this.type.includes(newType)) {
    this.type.push(newType);
  }
  
  this.addSkill(newSkill);

  // Return the evolved Pokemon object
  return this;
};

let Pidgeotto = pidgey.evolve('Pidgeotto', 120, 'Wind', 'Wing Dance');
console.log(Pidgeotto);
// create NPC object using object Literals 
// const NPC;

//Do not modify
//For exporting to test.js
try{
    module.exports = {

        trainer: typeof trainer !== 'undefined' ? trainer : null,
        Pokemon: typeof Pokemon !== 'undefined' ? Pokemon : null,
        NPC: typeof NPC !== 'undefined' ? NPC : null

    }
} catch(err){

}