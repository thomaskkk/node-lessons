import generateName from "sillyname"
import superheroes from "superheroes"


var sillyname = generateName();
var superhero = superheroes.random();

console.log(`My name is ${sillyname}, but I'm also ${superhero}`);
