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
const adventurer = {
	name: 'Timothy',
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat",
		companion: {
			name: "Tim",
			type: "Parasite",
			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
		}  
	}
}

//What would your write to console.log "health insurance"?
console.log(adventurer.companion.companion.belongings[adventurer.companion.companion.belongings.indexOf('health insurance')]);