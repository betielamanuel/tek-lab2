//Give the class at least three properties.
//Give the class at least three methods.

class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    eat(food) {
        console.log(`${this.name} loves eating ${food}.`);
    }

    sleep() {
        console.log(`${this.name} loves to sleep all day.`)
    }

    meow(){
        console.log(`Hey ${this.name},  say meow!`)
    }
};

//Create two instances of the class (two cats).
let pet1 = new Cat('Garfield', 'orange', 1);
let pet2 = new Cat('Tom', 'blue', 2);


//Log both instances to see their properties.
console.log(pet1);
console.log(pet2);

//Invoke each method from both instances.
pet1.eat('lasagna');
pet1.sleep();
pet1.meow();
class Pirate {
constructor() {

}
}

/*
For the Cat class:


For the Pirate class:



When trying to think of properties and methods, remember that our classes are nouns, their properties are like adjectives, and their methods are like verbs.
*/

class Pirate {
   // Create three properties that are set by the constructor.
    constructor(name, weapon, shipName){
        this.name = name;
        this.weapon = weapon;
        this.shipName = shipName;
    }
    //Create three methods.

    greet() {
        console.log(`Arrr..`);
    }

    attack() {
        console.log(`Ahoy there!`);
    }

    steal() {
        console.log('surrender or die!');
    }
}

//Instantiate two arrays of three pirates, name the arrays after your favorite pirate ships: jollyRoger and blackPearl.

// const pirate1 = new Pirate("Captain Jack Sparrow", "sword and pistol", "Black Pearl");
// const pirate2 = new Pirate("Long John Silver", "cutlass and pistol", "Hispaniola");
// const pirate3 = new Pirate("Barbossa", "sword and pistol", "Queen Ann's Revenge");

const jollyRoger = ["Captain Jack Sparrow", "Long John Silver", "Barbossa"]
const blackPearl = ["Captain Readbeard", "Captain black heart", "Captain Hook"]

//Loop over each array and print three properties of each pirate.
for (let i= 0; i < jollyRoger.length; i++) {
    console.log(jollyRoger[i]);
};