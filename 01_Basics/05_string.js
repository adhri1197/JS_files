//const name = "anirudh"
//const repoCount = 2

//console.log(` Hello my name is ${"name"} and my repo count is ${repoCount}`); // to  print the string

const gameName = new String("Anirudh") // to create a string object

//console.log(gameName[3]); // to get the character at the index

//console.log(gameName. __proto__); // to get the prototype of the string



//console.log (gameName.charAt(2)); // to get the character at the index
//console.log(gameName. indexOf('U')); // to find the index of the character


//const newString = gameName.substring(0 ,3)
//console.log(newString); // to get the substring

const anotherString = gameName.slice(-6, 4)
console.log(anotherString); // to get the slice of the string


const newStringOne = "   anirudh   " 
console.log(newStringOne);
console.log(newStringOne.trim()); // to remove the white spaces from the string

console.log(newStringOne.startsWith("an")); // to check the string starts with the given string
console.log(newStringOne.endsWith("dh")); // to check the string ends with the given string

console .log(gameName.split ('')); // to split the string into array
