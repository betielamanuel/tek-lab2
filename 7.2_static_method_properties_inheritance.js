//STATIC METHODS AND PROPERTIES
/*
There is only one Governor in the state; add static methods and properties you'd expect a Governor to have.

Log the properties and test the methods (but don't instantiate an object of the class).

*/
class Governor {
    constructor(name, party, state){
        this.name = name;
        this.party = party;
        this.state = state;
    }

    anouncePolice() {
        console.log(`Governor ${this.name} of ${this.state} state anounced a new policy regarding rat control infestation`)
    }

}

//INHERITANCE
/*
For the Person class:

Think of three properties all people share, and set them with the constructor.
Think of three methods all people share, and create them.
Create a PostalWorker class that inherits from Person, and add some methods specific to postal workers.
Create a Chef class that inherits from Person, and add some methods specific to chefs.
Create two PostalWorkers and two Chefs. Log them and test all of their methods.
*/

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }

    celebrateBirthday(){
        this.age++;
        console.log(`Today is my birthday! I am ${this.age} years old`);
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}. Nice to meet you`);
    }
}

class PostalWorker extends Person {
    constructor(shift, department, salary) {
        //super('Jordan', '33', 'male');
        this.shift = shift;
        this.department = department;
        this.salary = salary;
    }

    clockOut() {
        console.log(`Alrighty! My ${this.shift} is over, and I am going to clock out`)
    }

    deliverMail() {
        console.log(`Today I will be delivering mail from ${this.department}`)
    }

}

class Chef extends Person {
    constructor(restaurant, department, experience) {
        super('Flavor', '29', 'female');
        this.restaurant = restaurant;
        this.cuisine = department;
        this.experience = experience;
    }

    cook() {
        console.log(`Today we will be cooking ${this.cuisine}`)
    }

    servePlate() {
        console.log(`Cheff ${this.name} served the ${this.cuisine } on a plate beautifully`)
    }
    
}
//ONE STEP FURTHER
//
/*
Create the following classes using the given information

*Class*	        ||  *Derived From*	||  *Properties*	             ||   *Methods*
BankAccount	    ||  n/a	            ||  ownerName, balance, acctNum	 ||   deposit, withdraw
CheckingAccount	||  BankAccount	    ||  overdraftEnabled	         ||   Override withdraw to implement an overdraft feature.
SavingsAccount	||  BankAccount	    ||  None	                     ||   Override withdraw to disallow withdrawals completely.

acctNum should be generated within the constructor of BankAccount, not passed in as an argument.
*/