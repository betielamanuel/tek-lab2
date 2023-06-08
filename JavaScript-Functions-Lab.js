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
