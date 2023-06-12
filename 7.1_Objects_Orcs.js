/// ARRAYS WITHIN OBJECTS
// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"]
// }

//Access all values in the adventurer.belongings array:
//console.log(adventurer.belongings);

//Access a specific item in the belongings array:
//console.log(adventurer.belongings[0]);

//ITERATE OVER AN ARRAY WITHIN AN OBJECT
// for (let i=0; i < adventurer.belongings.length; i++) {
// 	console.log(adventurer.belongings[i]);
// }

///OBJECT WITHIN AN OBJECT
// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat"
// 	}
// }

//Access the companion object:
//console.log(adventurer.companion);

//Access the companion's name:
//console.log(adventurer.companion.name);

//Access the companion's type:
//console.log(adventurer.companion.type)

///OBJECT WITHIN AND OBJECT WITHIN AN OBJECT...
// const adventurer = {
// 	name: 'Timothy',
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite"
// 		}  
// 	}
// }

//What would you write to console.log Tim's type?
//console.log(adventurer.companion.companion.type);

//ARRAY WITHIN AN OBJECT WITHIN AN OBJECT WITHIN AN OBJECT...
// const adventurer = {
// 	name: 'Timothy',
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite",
// 			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
// 		}  
// 	}
// }

//What would your write to console.log "health insurance"?
//console.log(adventurer.companion.companion.belongings[adventurer.companion.companion.belongings.indexOf('health insurance')]);

//AN ARRAY OF OBJECTS
const movies = [ 
    { title: "Tokyo Story" },  
    { title: "Paul Blart: Mall Cop" }, 
    { title: "L'Avventura" } 
];

//referencing objects within array using index
//console.log(movies[0]);

//You could reference the properties by first asking for the index, then the property:
//console.log(movies[0].title);

//You could loop over the array and just print all of the titles:
// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }

//COMBINING OBJECTS, ARRAYS, AND FUNCTIONS

//you can create a property for an object that is an array
// const foo = {
//     someArray:[1,2,3]
// };
//console.log(foo.someArray[0]); // 1

//You can create a property for an object that is an object:
// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// };
// console.log(foo.someObject.someProperty); // oh hai!

//You can create a property for an object that is an function(method):
// const foo = {
//     someMethod:()=>{
//         //console.log('oh hai');
//         return 'oh hai '
//     }
// };
//console.log(foo.someMethod());// logs 'oh hai!'

//You can store an object in an array:
// const foo = [{someProperty:'weee'}, 2, 3];
// console.log(foo[0].someProperty);

//You can store an array in an array:
// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];
// console.log(foo[1][2]); //1,2

//You can store a function in an array:
const foo = [
    1,
    "hi",
    ()=>{
        console.log('fun');
        return 'fun';
    }
];

console.log(foo[2]());