//I - Variables & Datatypes
// A. Q & A
/*
1. How do we assign a value to a variable?
=> we declare a variable using either 'var', 'let', 'const' && we use the assignment operator '=' to assign a value to the operator

2. How do we change the value of a variable?
=> we can simply reassign a new value to a variable. However it dependes on the variable declaration. Variables declared with 'var' and 'let' can be reassigned, but 'const' are read-only and can not be reassigned.

3. How do we assign an existing variable to a new variable?
=> we assign a new value to an existing variable.

4. Remind me, what are declare, assign, and define?
=> Declare is for ceating a variable
=> Assign is giving value to a variable
=> when a variable is declared and assigned a value it is known as defined

5. What is pseudocoding and why should you do it?
=> describing algorithing in plain language. It helps design algorithm, communicate with other programmers, and debugging.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
=> spend more time how to solve it.
*/

// B.Strings
/*
- Assign it the value of the string "Hello World".
- Change the value of this variable to some number.
- Store the value of firstVariable in a new variable called secondVariable.
- Change the value of secondVariable to any string.
- What is the value of firstVariable?
Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
*/

//- Create a variable called firstVariable.
// let firstVariable = "Hello World";
// firstVariable = 11;
// let secondVariable = firstVariable;
// secondVariable = 'Betiel';
// console.log(firstVariable); // output : 11

// C. Booleans 
/*
Using the provided variable definitions, replace the blanks so that all log statements print true in the console. 
Answers should be all be valid JS syntax, not weird things that don't make sense but happen to print true to the console.
*/
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a !== b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a < b || c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a === a || d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

//D. THE FARM
/*
*/
//1. Declare a variable animal. Set it to be "cow" or some other animal.
//2. Write code that will print out "mooooo" if the variable is equal to cow.
//3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

// let animal = 'cow';
// // animal = 'frog';
// if( animal !== 'cow' ){
//     console.log(`Hey! You're not a cow`)
// } else {
//     console.log('mooooo');
// };

//E. Driver's Ed
/*
*/
//1. Make a variable that holds a person's age; be semantic.
// let age = 16;

//2. Write code that will print out "Here are the keys!" if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
// if (age === 15) {
//     console.log('Here are the keys!');
// } else {
//     console.log("Sorry, you're too young.");
// }

//II - LOOPS
/*
A. The Basics
1. Write a loop that will print out all the numbers from 0 to 10, inclusive.
2. Write a loop that will print out all the numbers from 10 up to and including 400.
3. Write a loop that will print out every third number starting with 12 and going no higher than 4000.
*/

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// };
// for (let i = 10; i <= 400; i++) {
//     console.log(i);
// }
// for (let i = 12; i<= 4000; i++){
//     if (i % 3 === 0){
//         console.log(i);
//     }
// }

/*
B. Get Even
1. Print out the numbers that are within the range of 1 - 100.
2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
*/

// for (let i = 0; i <= 100; i++) {
//     // console.log(i);
//     if(i % 2 === 0) {
//         console.log(`${i} <-- is an even number`);
//     } else  {
//         console.log(i);
//     }
// };

/*
C. Give Me Five
1. For the numbers 0 - 100, print out "I found a <number>. High five!" if the number is a multiple of five.

Example Output:

I found a 5. High five!
I found a 10. High five!

2. Add to the code from above to print out "I found a number. Three is a crowd." if the number is a multiple of three.
Example Output:

I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five!
For numbers divisible by both three and five, be sure your code prints both messages.
*/

// for(let i = 0; i <= 100; i++) {
//     console.log(i);
//     if(i % 5 === 0) {
//         console.log(`I found a ${i}. High five!`)
//     } else if (i % 3 === 0) {
//         console.log(`I found a ${i}.Three is a crowd. `)
//     } else {
//         console.log(i)
//     };
// }

/*
D. Savings Account

1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.
*/
// let bank_account = 0
// for (let i = 0; i <= 10; i++) {
//     bank_account = bank_account + i;
// }
// console.log(`$${bank_account}`);

// let bank_account = 0;
// for (let i = 0; i <= 100; i++) {
//     bank_account = bank_account + i;
// }
// bank_account = bank_account * 2;
// console.log(`$${bank_account.toLocaleString()}`);

// III -    ARRAYS & CONTROL FLOW
/*
A. Talk About It
1. What are the things in an array called?
==> elements
2. Do Arrays guarantee those things will be in order?
==> an array is an ordered collection
3. What real-life thing could you model with an array?
==> to-do list, shopping list, etc
*/

/*
B. Easy Does It
Create an array that contains three quotes and store it in a variable called quotes.
*/
// let quotes = ["The only way to do great work is to love what you do.", "In the middle of every difficulty lies opportunity", "The only way to do great work is to love what you do." ]
// console.log(quotes);

/*
C. Accessing Elements
Given the following array, const randomThings = [1, 10, "Hello", true]:

1. How do you access the 1st element in the array?
2. What would you write to access the 3rd element of the array?
*/
// const randomThings = [1, 10, "Hello", true];
// console.log(randomThings[0]);

/*
D. Change Values
Given the following array, const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]:

1. Change the value of "Github" to "Octocat".
2. Add a new element, "Cloud City" to the array.
3. Check the value of the array to make sure it updated the array.
*/

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// console.log(ourClass.indexOf('Github'))

// ourClass[ourClass.indexOf('Github')] = "Octocat";
// console.log(ourClass[ourClass.indexOf('Octocat')]);
// console.log(ourClass);

// console.log(ourClass.push('Cloud City'));
// console.log(ourClass);


/*

E. Mix It Up
Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array, const myArray = [5, 10, 500, 20]:

1. Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
2. Remove the 5 from the beginning of the array.
3. Add the string "Bob Marley" to the beginning of the array.
4. Remove the string of your choice from the end of the array.
5. Reverse this array using Array.prototype.reverse().

Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
*/
// const myArray = [5, 10, 500, 20];
// myArray.push('Aegon', 'Liberty' );
// console.log(myArray);

// myArray.splice(myArray.indexOf(5), myArray.indexOf(5)+1);
// console.log(myArray);

// myArray.push('Bob Marley');
// console.log(myArray);

// myArray.splice(myArray.indexOf('Liberty'), myArray.indexOf('Liberty')+1);
// console.log(myArray);
// console.log(myArray.reverse());


/*
F. Biggie Smalls
Create a variable that contains an integer.

Write an if ... else statement that:

1. console.log()s "little number" if the number is entered is less than 100.
2. console.log()s "big number" if the number is greater than or equal to 100
*/
// let integer = 990;

// if( integer < 100) {
//     console.log('liitle number')
// } else {
//     console.log("big number")
// }

/*
G. Monkey in the Middle
Write an if ... else statement:

1. console.log() little number if the number entered is less than 5.
2. If the number entered is more than 10, log "big number".
3. Otherwise, log "monkey"
*/

// let littleNumber = 4;
// console.log(littleNumber);
// if(littleNumber < 5) {
//     console.log('little number');
// } else if(littleNumber > 10) {
//     console.log('big number');
// } else {
//     'monkey;'
// }


/*
H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.


// Thom's closet is more complicated. Check out this nested data structure!!

3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
5. In the same way, access one item from Thom's pants array.
6. Access one item from Thom's accessories array.
7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
8. Get more specific about what kind of PJs Thom is wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
*/

const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ],[
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ],[
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

//1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.
// console.log(`Krityn is rocking that ${kristynsCloset[2]}`);

//2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// console.log(kristynsCloset);
// console.log(kristynsCloset.indexOf('yellow knit hat'));
// kristynsCloset[6] = 'raybans';
// console.log(kristynsCloset);