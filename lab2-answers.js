//  EASY GOING
// Write a for loop that will log the numbers 1 through 20.
for (let i = 0; i < 20; i++) {
    // console.log(i);
};

// GET EVEN
// Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i++ ) {
    if( i % 2 == 0) {
        // console.log(i);
    }
}

//GET EVEN
/*


1. Write a Javascript Application that logs all numbers from 1 - 100.
2. If a number is divisible by 3, log "Fizz" instead of the number.
3. If a number is divisible by 5, log "Buzz" instead of the number.
4. If a number is divisible by 3 and 5, log "FizzBuzz" instead of the number.
*/

for(let j=0; j<= 100;j++ ) {
    if(j % 3 == 0 && j % 5 ==0) {
    j = 'fizzbuzz';
    } else if(j % 5 == 0) {
        j = 'buzz';
    } else if (j % 3 == 0){
        j= 'fizz';
    }
    // console.log(j);
}

//WILD WILD LIFE
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// console.log(plantee[2] + 1);

//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City";
// console.log(wolfy);

//3. Give D'Art a second hometown by adding "Hawkins"
// console.log(dart.push("Hawkins"));
// console.log(dart);

//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// wolfy[0] = "Gameboy";
// console.log(wolfy);

//YELL AT THE NINJA TURTLES
/*
*/

//1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
// console.log(ninjaTurtles);

//2. Use a for of loop to call toUpperCase() on each of them and print out the result.
for (let i = 0; i < ninjaTurtles.length; i++) {
    // console.log(ninjaTurtles[i].toUpperCase());
    ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
    // return ninjaTurtles[i].toUpperCase();
}
// console.log(ninjaTurtles);

//METHODS, REVISTED
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 
'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//Console log the index of Titanic.
// console.log(favMovies.indexOf('Titanic'));
/*
9. Thought Question: Did this permanently alter our array?
console.log your final results.
*/

//1. Use the .sort method.
// console.log(favMovies.sort());

//2. Thought Question: What did this do to the array? Did it permanently alter it?
console.log(favMovies); //Yes.

//3. Use the method pop.
// console.log(favMovies.pop());
// console.log(favMovies);

//4. push "Guardians of the Galaxy".
// favMovies.push("Guardians of the Galaxy");
// console.log(favMovies);

//5. Reverse the array.
// favMovies.reverse();
// console.log(favMovies);

//6. Use the shift method.
// favMovies.shift();
// console.log(favMovies);

//7. unshift - what does it return?
// favMovies.unshift('Narnia');
// console.log(favMovies);

//8. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself).
// console.log(favMovies.indexOf('Django Unchained')); // 15
// favMovies.splice(15, 1, 'Avatar');
// console.log(favMovies);

//9. Thought Question: Did this permanently alter our array?
// console.log(favMovies); // Nope!

//10. slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)
// console.log(favMovies.length / 2); // 9
// console.log(favMovies.slice(0, 9));

//11. Thought Question: Did this permanently alter our array?
// console.log(favMovies); //Nope!

//12. Store the value of your slice in a variable and console.log it.
const slicedArray = favMovies.slice(0, 9);
console.log(slicedArray);

//13. Thought Question: What is going on here?
//i don't know 
console.log(slicedArray); //Array permanently changed!


