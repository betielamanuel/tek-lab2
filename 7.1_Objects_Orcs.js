/// ARRAYS WITHIN OBJECTS
// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"]
// }

//Access all values in the adventurer.belongings array:
//console.log(adventurer.belongings);

//Access a specific item in the belongings array:
//console.log(adventurer.belongings[0]);

//ITERATE OVER AN ARRAY WITHIN AN OBJECT
// for (let i=0; i < adventurer.belongings.length; i++) {
// 	console.log(adventurer.belongings[i]);
// }

///OBJECT WITHIN AN OBJECT
// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat"
// 	}
// }

//Access the companion object:
//console.log(adventurer.companion);

//Access the companion's name:
//console.log(adventurer.companion.name);

//Access the companion's type:
//console.log(adventurer.companion.type)

///OBJECT WITHIN AND OBJECT WITHIN AN OBJECT...
// const adventurer = {
// 	name: 'Timothy',
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite"
// 		}  
// 	}
// }

//What would you write to console.log Tim's type?
//console.log(adventurer.companion.companion.type);

//ARRAY WITHIN AN OBJECT WITHIN AN OBJECT WITHIN AN OBJECT...
// const adventurer = {
// 	name: 'Timothy',
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite",
// 			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
// 		}  
// 	}
// }

//What would your write to console.log "health insurance"?
//console.log(adventurer.companion.companion.belongings[adventurer.companion.companion.belongings.indexOf('health insurance')]);

//AN ARRAY OF OBJECTS
// const movies = [ 
//     { title: "Tokyo Story" },  
//     { title: "Paul Blart: Mall Cop" }, 
//     { title: "L'Avventura" } 
// ];

//referencing objects within array using index
//console.log(movies[0]);

//You could reference the properties by first asking for the index, then the property:
//console.log(movies[0].title);

//You could loop over the array and just print all of the titles:
// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }

//COMBINING OBJECTS, ARRAYS, AND FUNCTIONS

//you can create a property for an object that is an array
// const foo = {
//     someArray:[1,2,3]
// };
//console.log(foo.someArray[0]); // 1

//You can create a property for an object that is an object:
// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// };
// console.log(foo.someObject.someProperty); // oh hai!

//You can create a property for an object that is an function(method):
// const foo = {
//     someMethod:()=>{
//         //console.log('oh hai');
//         return 'oh hai '
//     }
// };
//console.log(foo.someMethod());// logs 'oh hai!'

//You can store an object in an array:
// const foo = [{someProperty:'weee'}, 2, 3];
// console.log(foo[0].someProperty);

//You can store an array in an array:
// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];
// console.log(foo[1][2]); //1,2

//You can store a function in an array:
// const foo = [
//     1,
//     "hi",
//     ()=>{
//         console.log('fun');
//         return 'fun';
//     }
// ];
//console.log(foo[2]());

//ADDING CLASSES
//ADDING METHODS TO CLASS CHARACTER
// class Character {
//     greet () {
//     console.log('Hi!');
//     }
// }

// const me = new Character();
// const you = new Character();

// me.greet();
// you.greet();

//These methods can, of course, take parameters:
// class Character {
//     greet (otherCharacter) {
//     console.log('Hi ' + otherCharacter + '!');
//     }
// }
// const me = new Character();
// const you = new Character();
// me.greet('you');
// you.greet('me');

//multiple methods
// class Character {
//     greet (otherCharacter) {
//     console.log('Hi ' + otherCharacter + '!');
//     }
//     smite () {
//     console.log('I smite thee you vile person!');
//     }
// }

// const me = new Character();
// const you = new Character();
// me.greet('bob');
// me.smite();
// you.greet('bob');
// you.smite();

//SETTING PROPERTIES
// class Character {
//     constructor () {
//     this.legs = 2;
//     this.arms = 2;
//     this.eyes = 'hazel';
//     this.hair = 'gray';
//     }
//     greet (otherCharacter) {
//     console.log('Hi ' + otherCharacter + '!');
//     }
//     smite () {
//     console.log('I smite thee you vile person!');
//     }
// }
// const me = new Character();
// console.log(me);

//CUSTOM CONSTRUCTORS
//Our constrctur function can take params which we can use to alter the properties of the object instantiated.
// class Character {
//     constructor (name, age, eyes, hair) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     }
//     greet (otherCharacter) {
//     console.log('Hi ' + otherCharacter + '!');
//     }
//     smite () {
//     console.log('I smite thee you vile person!');
//     }
// }

// const me = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown');
// console.log(me);

//CREATING DEFAULT VALUES
// class Character {
//     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || false;
//     }
//     greet (otherCharacter) {
//     console.log('Hi ' + otherCharacter + '!');
//     }
//     smite () {
//     console.log('I smite thee you vile person!');
//     }
// }
// const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
// const me = new Character('Wendel the Wavy', 32, 'brown', 'wavy blonde');
// console.log(me);
// console.log(you);

//CLASS METHODS
//We can of course, alter the properties of an instance, after it is created.
// me.hair = 'supernova red';
// console.log(me);

//But it's a nice practice to define a method that will alter that for us. This has uses beyond just being "correct" when things get more complex.
// class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || true;
//     }
//     greet (otherCharacter) {
//     console.log('Hi ' + otherCharacter + '!');
//     }
//     setHair (hairColor) {
//     this.hair = hairColor;
//     }
//     smite () {
//     console.log('I smite thee you vile person!');
//     }
// }

// const me = new Character('Wendel the Wavy', 32, 'brown', 'wavy blonde');
// //console.log(you);
// const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
// you.setHair('red');
// console.log(you);

// class Character {
//     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || false;
//     }
//     greet (otherCharacter) {
//     console.log('Hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//     console.log('Greetings ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//     this.hair = hairColor;
//     }
//     smite () {
//     console.log('I smite thee you vile person!');
//     }
// }
// const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
// const me = new Character('Wendel the Wavy', 32, 'brown', 'wavy blonde');

// me.classyGreeting(you);
// you.classyGreeting(me);

//INHERITANCE
/*
Sometimes we want to have a "parent" class that will have some basic attributes that will be inherited by "child" classes.

Here is our parent class, but what if we have a superhero amongst us that has all our human attributes and more?
*/
// class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || true;
//     }
//     greet (otherCharacter) {
//     console.log('Hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//     console.log('Greetings ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//     this.hair = hairColor;
//     }
//     smite () {
//     console.log('I smite thee you vile person!');
//     }

// }


// const hobbit = new Character('Mr Baggins', 33, 'brown', 'black')
//console.log(hobbit);

//INHERITANCE
// class Hobbit extends Character {
//     steal () {
//     console.log("Let's get away!");
//     }
// }

//const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
// console.log(frodo);
// frodo.smite();
// frodo.steal();

//overriding previous functionality
// class Hobbit extends Character {
//     steal () {
//     console.log("Let's get away!");
//     }
//     greet (otherCharacter) {
//     console.log(`Hello ${otherCharacter}.`);
//     }
// }

// const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
// console.log(frodo.greet('Bob'));

//reference the parent class's methods and extend it's original functionality
// class Hobbit extends Character {
//     steal () {
//     console.log("Let's get away!");
//     }
//     greet (otherCharacter) {
//     console.log(`Hello ${otherCharacter}.`);
//     }
//     smite () {
//     super.smite();//referencing parent's class's methods
//     this.steal();//referencing local methods
//     }
// }

// const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
// console.log(frodo.smite());

//CREATING A FACTORY
// a factory generates an object for us
// class Tome {
//     constructor (maker, spellType, serialNum) {
//     this.maker = maker;
//     this.spellType = spellType;
//     this.serialNum = serialNum;
//     }
//     cast () {
//     console.log('Casting a spell!');
//     }
// }

// const fireTome = new Tome('Merlin', 'Fire', 1);
// console.log(fireTome);

//making a factory class that will make tomes for us
// class Factory {
//     constructor (maker) {
//     this.maker = maker;
//     this.tomes = [];
//     }

//     generateTome (spellType) {
//     const newTome = new Tome(this.maker, spellType, this.tomes.length);
//     this.tomes.push(newTome);
//     }
    
//     findTome (index) {
//     return this.tomes[index];
//     }
// }

// const merlin = new Factory('Merlin');
// merlin.generateTome('Fire');
// merlin.generateTome('Water');
// merlin.generateTome('Earth');
// merlin.generateTome('Air');
// console.log(merlin);
// console.log(merlin.findTome(0));

//STATIC PROPERTIES
//Sometimes you want to define properties that pertain to the class as a whole, not the instance. This allows us to limit, somewhat, what the user of a class can do.
// class Character {
//     static eyeColors () {
//     return ['blue', 'green', 'brown'];
//     }
//     // rest of class definition here...
// }
// more code...
// const superman = new Character('Clark Kent', 30, Character.eyeColors()[0], 'black')
// console.log(superman);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//GAME OF OBJECTS AND ORCS
/*
Going Forward
Use the information and examples provided thus far to expand your game of Objects and Orcs!

To give you some ideas of what you could accomplish, try to:

Add class methods to create new actions.
Add interaction between the objects of classes within your methods (could two Characters trade items?).
You could, for example, create an Inventories class that includes properties in the form of items and methods like add or remove. Your Characters could then have Inventory objects within their properties, and trade methods that access Inventory.add and Inventory.remove, as an example. Is this the best approach for this functionality? Explore and discover!

The possibilities are nearly endless. If you've run out of time for this lab, feel free to return later and continue your adventure!

const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "protein"]
}
*/

class Adventurer {
    constructor (name, userID, abilities, health = '100%', points = 100) {
        this.name =  name;
        this.userID = userID;
        this.abilities = abilities;
        this.health = health;
        this.biomes = ["Floating Gardens", "Techno Jungle", "Algae Forest"];
        this.inventory = ["sword", "potion", "protein"];
        this.points = points;
    }

    combat() {
        console.log("kick");
        console.log("punch")
        console.log("grunts");
        console.log("battle cries");
        console.log("AGGH! Die you stupid monster");
        this.health *= 0.8;
        console.log(`You have ${this.health} health`)
    }

    explore() {
        let index = Math.floor(Math.random() * this.biomes.length);
        console.log(`Welcome ${this.name}, to the ${this.biomes[index]}!`);
        this.points += 100;
        console.log(`You earned ${this.points} points`);
    }
}

//create an instance of adventurer
const player1 = new Adventurer("Lara Croft",'laraC12345', ['acrobatic manuever', 'hand-to-hand combat', 'scraling walls', 'solving intricate puzzle']);
const player2 = new Adventurer('Indiana Jones', 'JonesI12345', ['deciphering cryptic codes', 'quick reflex and dexterity'])
console.log(player1.combat());
console.log(player1.explore());


//Inheritance
class Enemy extends Adventurer {
    challenge() {
        console.log(`You shall not pass the gates!`)
        console.log('attack!')
    }
}

const orcs = new Enemy("Grommash Hellscream", 'Grom12345',['Man Swirdsnab', 'Tactical leader'] );
console.log(orcs.challenge());
//Access belongings
//console.log(player1.belongings[0]); // Output: sword

//accessing a companion object property
//console.log(player1.companion.name); //Output: Velma


//Add additional classes to handle repetitive objects.


