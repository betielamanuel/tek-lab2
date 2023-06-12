// ARRAYS WITHIN OBJECTS
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

//OBJECT WITHIN AN OBJECT
const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat"
	}
}

//Access the companion object:
console.log(adventurer.companion);

//Access the companion's name:
console.log(adventurer.companion.name);

//Access the companion's type:
console.log(adventurer.companion.type)
