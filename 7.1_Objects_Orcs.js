// ARRAYS WITHIN OBJECTS
const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"]
}

//Access all values in the adventurer.belongings array:
console.log(adventurer.belongings);

//Access a specific item in the belongings array:
console.log(adventurer.belongings[0]);

//ITERATE OVER AN ARRAY WITHIN AN OBJECT
for (let i=0; i < adventurer.belongings.length; i++) {
	console.log(adventurer.belongings[i]);
}