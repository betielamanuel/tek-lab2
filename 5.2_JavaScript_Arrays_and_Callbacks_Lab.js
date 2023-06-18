const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

//EVERY
/*
=> Tests whether all elements in the array pass the test implemented by the provided
functgion. It returns a Boolean value.
*/
//1.Determine if every number is greater than or equal to 0.
//2.Determine if every word shorter than 8 characters.

const isGreaterThanZero = (value) => {return value >= 0};
//console.log(`Every number is greater than or equal to 0: ${nums.every(isGreaterThanZero)}`);

const isWordLengthEight = (word) => {return word.length < 8};
//console.log(`Every word length is less than eight: ${panagram.every(isWordLengthEight)}`);

//FILTER
/*
=> Creates a shallow copy of portion of a given array, filtered down to just the 
elements from the given array that pass the test implemented by the provided function.
*/
//1.filter the array for numbers less than 4.
//2.Filter words that have an even length.

const numbersLessThanFour = nums.filter(number => number < 4);
//console.log(numbersLessThanFour);

const wordsEvenLength = panagram.filter(word => word.length % 2 == 0);
//console.log(wordsEvenLength);

//FIND
/*
=> Returns the first element in the provided array that satisfies the provided testing
function. If no values satisfy the testing function, undefined is returned.
*/
//1.Find the first value divisible by 5.
//2.Find the first word that is longer than 5 characters.

const divisiblebyFive = nums.find(numb => numb.length % 5 == 0);
//console.log(divisiblebyFive);

const longerThanfive = nums.find(word => word.length > 5);
//console.log(longerThanfive);

//FIND INDEX
/*
=> Returns the index of the first element in an array that satisfies the provided 
testing function. If no element satisfy the testing function, -1 is returned.
*/
//1.Find the index of the first number that is divisible by 3.
//2.Find the index of the first word that is less than 2 characters long.

const divisiblebyThree = nums.findIndex(number => number % 3 == 0);
//console.log(divisiblebyThree);

//FOR EACH
/*
=> The forEach() method executes a provided function once for each array element.
*/
//1.Log each value of the array multiplied by 3.
//2.Log each word with an exclamation point at the end of it.
//nums.findIndex(number => console.log(number * 3));
//nums.findIndex(number => console.log(`${number}!`));

/*
/
Thought Questions
What happened to the original array?
Can you store the values from a forEach method in a new array?
/
*/

//MAP
/*
=> The map() method creates a new array populated with the results of 
calling a provided function on every element in the calling array.
*/
//1.Make a new array of each number multiplied by 100.
//2.Make a new array of all of the words in all uppercase.
const newArray = nums.map( x => x * 100 );
//console.log(newArray);

const anotherArray = panagram.map( x => x.toUpperCase() )
//console.log(anotherArray);
//==>['THE','QUICK','BROWN', 'FOX','JUMPS', 'OVER','THE', 'LAZY','DOG']


/*
/
Thought Questions

What happened to the original array?
Can you store the values from a map method in a new array?
/
*/


//SOME
/*
=> some() method tests whether at least one  element in the array passes the test
implemented by the provided function.
=> RETURN VALUE: true if the callback function returns a truthy value for at least one element in the array.
Otherwise, false.
*/
//1.Find out if some numbers are divisible by 7.
//2.Find out if some words have the letter a in them.
const someNumDivisBySeven = (numbers) => numbers % 7 === 0;
//console.log(nums.some(someNumDivisBySeven));



//REDUCE
/*
=> The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
in order, passing in the return value from the calculation on the preceding element.
*/

//1.Add all of the numbers in the array together using the reduce method.
//2.Concatenate all the words using reduce.

//const initialValue = 0;
const addNumbers = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 
    );
//console.log(addNumbers);
//const initialWord = ''
const concatWords = panagram.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

//console.log(concatWords);
/*
/
Thought Questions
What happened to the original array?
/
*/

//SORT
/*
=> The 
*/
/*
*Try to sort without any arguments, do you get what you'd expect with the numbers array?
*Try to sort without any arguments, do you get what you'd expect with the words array?
*Sort the numbers in ascending order.
*Sort the numbers in descending order.
*Sort the words in ascending order.
*Sort the words in descending order.
*/

// console.log(nums.sort());
// console.log(panagram.sort());

// console.log(nums.sort( 
//     (a,b) => a - b 
//     ));
//console.log(panagram.sort((a,b) => a.localeCompare(b)));
//console.log(panagram.sort((a,b) => b.localeCompare(a)));

/*
/
Thought Questions
What happened to the original array?
/
*/

//isPanagram
//Using the following array, test whether each letter a-z (case insensitive) is used at least once.
//const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']



//WORKING WITH DATA
/*
Using the array of objects below:

Filter for products with a price that is less than 10.
Sort alphabetically by product name.
*/
const products = [
    {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
    },
    {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
    },
    {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
    },
    {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
    },
    {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
    },
    {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
    },
    {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
    },
    {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
    },
    {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
    },
    {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
    },
    {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
    },
    {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
    },
    {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
    },
    {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
    },
    {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
    },
    {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
    },
    {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
    },
    {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
    },
    {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
    },
]

// console.log( products.sort(
//     (a,b) => a.price - b.price
// ));

// const alphabeticallySorted = products.sort(
//     (a,b) => {
//         if (a.name < b.name) return -1;
//         return 1;
//     }
// );

// console.log(alphabeticallySorted);