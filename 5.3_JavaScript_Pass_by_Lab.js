const personOne = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

const personTwo = {
    name: {
        first: 'Julie',
        last: 'July'
    },
    age: 28,
    location: {
        city: 'Albany',
        state: 'New York',
        zip: 12201
    }
}

//TASKS

//1.
/*
People move location frequently. Create a new function moveLocation().

moveLocation() should take one of our person objects as its first parameter and a location object as the second parameter.
The location object will have the properties city, state, and zip.
The function should change the city, state, and zip properties of the person to match those of the new location.
Test your function by using the following code. Does personTwo now live in Rochester? (They should.)
*/
// const nLoc = {
//     city: 'Rochester',
//     state: 'New York',
//     zip: 14604
// }

///how do you usually update an object?
//This is how you update an object.
// personTwo.location.city = nLoc.city;
//     personTwo.location.state = nLoc.state;
//     personTwo.location.zip = nLoc.zip;
//     console.log(personTwo);


// nLoc.city = 'Buffalo';
// nLoc.zip = 14201;

// console.log(personTwo.location.city);

const nLoc = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
}

function moveLocation (person_One,person_Two, location) {
    
    person_Two.location.city = location.city;
    person_Two.location.state =location.state;
    person_Two.location.zip = location.zip;
    
    //return person_Two;
    //Set Julie's location to Timmy's location by reference.
    personTwo.location = person_One.location;
    
    person_One.location.city = nLoc.city;
    person_One.location.state = nLoc.state;
    person_One.location.zip = nLoc.zip;

    return [person_One, person_Two];
}
//console.log(moveLocation(personOne, personTwo, nLoc));


//2.
/*
Julie and Timmy have gotten married! Since they'll be living together, we should give them the same location. 
However, since they'll be living together forever, let's save ourselves the hassle of updating both of their locations every time they move.

Set Julie's location to Timmy's location by reference.
Test this new link by using the following code, which utilizes our already-completed moveLocation() function with no changes necessary. 
Do both people now live in California? (They both should.)
*/


// moveLocation(personOne, nLoc)


// console.log(personOne);


//3.
/*
The happy couple are having a baby! Create a new object personThree.

Set personThree.name.first to whatever you'd like, and personThree.name.last to a hyphenated combination of personOne and personTwo's last names.
Give personThree an age of 0.
Set personThree's location to that of their parents, by reference so that the baby stays with its family.
Test your code's behavior by using your moveLocation() function.
*/

const personThree = {
    name: {
        first : "John",
        last : "Doe"
    } ,

    age : 0,

    location: personOne.nLoc
}
console.log(personThree);





























