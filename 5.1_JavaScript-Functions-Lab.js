//1 - FUNCTION DECLARATION
/*
Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
If they are the same, return that number. Use the if...else construct or a ternary expression - the Math.max method is not allowed
*/
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else if(num2 > num1 ) {
        return num2;
    } else { 
        return num1 || num2
    }
}
// console.log(maxOfTwoNumbers(5,5));

//2 FUNCTION EXPRESSION
/*
Define a function, as a function expression, maxOfThree that takes three numbers as arguments 
and returns the largest of them. Again, the Math.max method is not allowed.
*/

const largestNumber = function(num1, num2, num3) {
    return Math.max(num1, num2, num3);
};

// console.log(largestNumber(3,5,8));

//3. 
/*
Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
*/

// const vowel = ['a', 'e', 'i', 'o','u'];

// function isCharAVowel (character) {
//     for(let i = 0; i < character.length; i++) {
//         for (let j = 0; j < vowel.length; j++) {
//             // console.log(vowel[j])
//             if (character[i] === character[j]) {
//                 return true;
//             }
//         }
//         // console.log(character[i]);
//     }
// }
// console.log(isCharAVowel('Doctor'));

//4.
/* 
Define a function, as a function expression, sumArray that takes an array of numbers 
and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
*/
// sum = 0;
// const sumArray = function(arr) {
//     for(let i= 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         sum = sum + arr[i]
//     }
//     return sum;
// }

// console.log(sumArray([2,4,5]));

//5.
/*
Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. 
For example, multiplyArray([2, 4, 5]); would return 40.
*/
// product = 1;
// function multiplyArray(arr) {
//     for (let i = 0; i < arr.length; i++ ) {
//         product  = product * arr[i];
//     }
//     return product;
// };

// console.log(multiplyArray([2,4,5]));

//6. 
/*Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.*/

// const numArgs = function() {
//     return arguments.length;
// }
// console.log(numArgs(2,4,5));

//7.
/*
Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. 
For example, reverseString('rockstar'); would return the string "ratskcor".
*/
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

//console.log(reverseString('rockstar'));

//8
/*
Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
*/
//the function accepts an array.
//the array contains strings
//we want the funcion to iterate through each string and count its length 
//if it finds string longer than longerString
//finally the function will return the longest string
// const longestStringInArray = function(arr) {
//     maxString = [];
//     longestString = [];
//     for(let i = 0; i < arr.length; i++) {
//         longestString.push(arr[i].length);
//         //console.log(longestString);
//         for (let j = 0; j < longestString.length; j ++) {
//             //console.log(longestString[j]);
//         }
//         if (arr[i].length > longestString ) {
//             maxString.push(arr[i]);
//         }
//     }
//     return 'This problem gave me headache so i didn\'t complete it';
// }

// console.log(longestStringInArray(['one', 'two', 'three', 'four', 'five', 'six']));

//9
/*
Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
*/
// function stringsLongerThan(arr, num) {
//     longerString = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > num) {
//             longerString.push(arr[i]);
//         }
//     }
//     return longerString;
// }
// console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));

//10
/*
Define a function, as a function expression, addList that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum. 
Assume all parameters will be numbers. If called with no arguments, return 0 (zero).
*/
// sum = 0;
// const addList = function (num1 = 0, num2 = 0, num3 = 0) {
//     sum = sum + num1 + num2 + num3;
//     return sum;
// }

// console.log(addList(1,2,3));