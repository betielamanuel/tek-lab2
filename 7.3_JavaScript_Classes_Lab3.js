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
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = mood;
        this.hamsters = hamsters;
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
        console.log(`Hello ${this.name}!`);
    }

    eat() {
        this.weight += this.weight;
        this.mood += this.mood;
    }
    
    excercise() {
        this.weight -= this.weight;
    }

    ageUp() {
        this.age += this.age;
        this.height+= this.height;
        this.weight += this.weight;
        this.mood -= this.mood;
        this.bankAccount += 10;
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this
    }
}


/*
Create a Story
Feel free to update or add methods to automate some of these tasks.

Age Timmy five years.
At this point, Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times to improve his mood.
Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times.
Age Timmy 9 more years.
Create a Hamster named "Gus."
Set Gus's owner to the string "Timmy."
Have Timmy "buy" Gus.
Age Timmy more 15 years.
Have Timmy eat twice.
Have Timmy exercise twice.
*/

//Instantiate a new Person named Timmy.
const Timmy = 'Timmy';
