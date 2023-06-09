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

    Create three properties that are set by the constructor.
    Create three methods.
    Instantiate two arrays of three pirates, name the arrays after your favorite pirate ships: jollyRoger and blackPearl.
    Loop over each array and print three properties of each pirate.
    When trying to think of properties and methods, remember that our classes are nouns, their properties are like adjectives, and their methods are like verbs.
*/