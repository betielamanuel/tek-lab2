/*
Hamster Class
Create a Hamster class with the following requirements met:

Attributes:

owner - string, initially set as an empty string.
name - string, set the name from a parameter in the constructor method.
price - integer, set as 15.
Methods:

wheelRun() - log "squeak squeak".
eatFood() - log "nibble nibble".
getPrice() - return the price.

*/

class Hamster{
    constructor(owner, name, price){
        this.owner = owner;
        this.name = name;
        this.price = price;
    }
    
    whileRun() {
        console.log('squeak squeak');
    }

    eatFood() {
        console.log('nibble nibble');
    }

    getPrice() {
        return this.price;
    }
}

/*
Person Class
Create a Person class with the following requirements met:

Attributes:

name - set name from a parameter in the constructor method.
age- initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
Methods:

getName() - returns name.
getAge() - returns age.
getWeight() - returns weight.
greet() - logs a message with person's name.
eat() - increment weight, increment mood.
exercise() - decrement weight.
ageUp() - increment age, increment height, increment weight, decrement mood, increment bankAccount by 10 (birthday money).
buyHamster(hamster) - push the hamster object onto the hamsters array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice()).
*/
class Person {
    constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
    }

    getName() {
    return this.name;
    }

    getAge() {
    return this.age;
    }

    getWeight() {
    return this.weight;
    }

    greet() {
    console.log(`Hello, my name is ${this.name}.`);
    }

    eat() {
    this.weight++;
    this.mood++;
    }

    exercise() {
    this.weight--;
    }

    ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
    }

    buyHamster(hamster) { //add a condition like if - if the person has money they can buy
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
    }
}


/*
Create a Story
Feel free to update or add methods to automate some of these tasks.


Set Gus's owner to the string "Timmy."
Have Timmy "buy" Gus.
Age Timmy more 15 years.
Have Timmy eat twice.
Have Timmy exercise twice.
*/

//Instantiate a new Person named Timmy.
//Age Timmy five years.
const timmy = new Person('Timmy');
timmy.age = 5;

//At this point, Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times to improve his mood.

timmy.eat(43, 'pumped up');
console.log(timmy.weight)

//Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times.
for (let i = 0; i < 5; i++) {
    timmy.excercise();
}
console.log(timmy);

//Age Timmy 9 more years.
console.log(timmy.ageUp(9));
console.log(timmy);

//Create a Hamster named "Gus."
const gus = new Hamster('Timmy','Gus', 10 );
console.log(gus);
console.log(timmy.ageUp(15));
console.log(timmy.age);



//CHEFS MAKE DINNERS
/*
Using the following two classes, we'll create a factory (Chefs are effectively dinner factories, after all!).
*/

class Dinner {

}

class Chef {

}
/*
Fill in these classes to meet the following requirements:
*/

//Add a constructor to Dinner that sets the string properties: appetizer, entree, and dessert.
class Dinner {
    
}


//Chef should be a factory of Dinner.//IT'S LIKE OBJECT REFERENCE
//Add a constructor to Dinner that sets the string properties: appetizer, entree, and dessert.
class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}
/*
Fill in these classes to meet the following requirements:


Have the Chef create three Dinners, log the Dinners.
*/
//Chef should be a factory of Dinner.
class Chef {
    
    createDinner(dinner, entree, appetizer) {
        const newDinner = new Dinner (dinner, entree, appetizer); //Add a method on Chef that takes three arguments and returns a new Dinner based on those arguments.
        return newDinner;
    }
}

const chef = new Chef();

const dinner1 = chef.createDinner("Salad", "Steak", "Cake");
const dinner2 = chef.createDinner("Soup", "Fish", "Ice Cream");
const dinner3 = chef.createDinner("Bruschetta", "Pasta", "Tiramisu");
